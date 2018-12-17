<?php

$start = $_GET['news_start'];
$stop = $_GET['news_stop'];


$sql = "SELECT id, fra, melding, tittel, time FROM Nyheter ORDER BY time DESC";
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

$news = array();

$i = 0;

while ($line = $result->fetch_row()){
    if ($i < $start) {
        $i ++;
        continue;
    }
    else if ($i >= $stop) {
        break;
    }
    $id = $line[0];
    $author = $line[1];
    $message = $line[2];
    $title = $line[3];
    $date = $line[4];

    $i ++;

    $news[] = array($id, $author, $message, $title, $date);
}

echo json_encode($news);
?>