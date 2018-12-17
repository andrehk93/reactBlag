<?php
$season = $_GET['season'];

if ($season > 2018) {
    $sql = "SELECT kampid, lag, res, intro, saved, date FROM kamper".$season;
}
else {
    $sql = "SELECT kampid, lag, res, saved, date, referat FROM kamper".$season;
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

$played_games = array();
$live_games = array();

while ($line = $result->fetch_row()){
    $matchID = $line[0];
    $teams = $line[1];
    $res = $line[2];
    $saved = $line[3];
    $date = $line[4];
    $transcript = $line[5];

    if ($saved == 1) {
        $played_games[] = array($matchID, $teams, $res, $saved, $date, $transcript);
    }
    if ($saved == 2) {
        $live_games[] = array($matchID, $teams, $res, $saved, $date, $transcript);
    }
}

echo json_encode(array($played_games, $live_games));

?>