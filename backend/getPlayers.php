<?php
$season = 2017;
if ($season > 2018) {
    $sql = "SELECT id, fornavn, etternavn, kallenavn, drakt_nr, posisjoner, bursdag FROM spillere".$season;
}
else {
    $sql = "SELECT id, navn, kallenavn, posisjon FROM spillere".$season;
}

$connector = new mysqli('mysql.stud.ntnu.no','fotball_blag','b-laget','fotball_blag');
if ($connector->connect_error) {
    die("connection failed: " . $connector->connect_error);
}
/* change character set to utf8 */
if (!$connector->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $connector->error);
    exit();
}
$result = $connector->query($sql);
if (mysqli_connect_errno()) {
    printf("Ops! Ser ut som det er skjedd en feil: %s\n", mysqli_connect_error());
    exit();
}

$players = array();

if ($season > 2018) {
    while ($line = $result->fetch_row()) {
        $id = $line[0];
        $fname = $line[1];
        $lname = $line[2];
        $nick = $line[3];
        $nr = $line[4];
        $pos = $line[5];
        $players[] = array($id, $fname, $lname, $nick, $nr, $pos);
    }
}
else {
    while ($line = $result->fetch_row()) {
        $id = $line[0];
        $fname = explode(" ", $line[1])[0];
        if (count(explode(" ", $line[1])) > 2) {
            $lname = explode(" ", $line[1])[1]." ".explode(" ", $line[1])[2];
        }
        else {
            $lname = explode(" ", $line[1])[1];
        }



        if (count($line[2]) > 0) {
            $nick = $line[2];
        }
        else {
            $nick = "";
        }

        $pos = $line[3];

        if ($pos == "k") {
            $position = 0;
        }
        else if ($pos == "f") {
            $position = 3;
        }
        else if ($pos == "m") {
            $position = 8;
        }
        else {
            $position = 13;
        }
        $players[] = array($id, $fname, $lname, $nick, 0, $position);
    }
}



// Sorting the array based on first-position:
$keepers = array();
$defenders = array();
$midfielders = array();
$attackers = array();

if ($season > 2018) {
    foreach ($players as $player) {
        $position = intval(explode(" ", $player[5])[0]);
        if ($position === 0) {
            $keepers[] = $player;
        }
        else if ($position > 0 and $position < 4) {
            $defenders[] = $player;
        }
        else if ($position > 3 and $position < 9) {
            $midfielders[] = $player;
        }
        else {
            $attackers[] = $player;
        }
    }
}
else {
    foreach ($players as $player) {
        $position = intval($player[5]);
        if ($position === 0) {
            $keepers[] = $player;
        }
        else if ($position > 0 and $position < 4) {
            $defenders[] = $player;
        }
        else if ($position > 3 and $position < 9) {
            $midfielders[] = $player;
        }
        else {
            $attackers[] = $player;
        }
    }
}


return array($keepers, $defenders, $midfielders, $attackers);

?>