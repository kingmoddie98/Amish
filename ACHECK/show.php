<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
<head>
    <title>Web Database Sample Display</title>
</head> 
<body>

<h1>Data from mytable</h1>
<?php

// access information in directory with no web access
require_once('/export/home/zimmer30/source_html/web/Amish/APASS/Connect.php');

// other functions are right here
require_once('DBfuncs.php');


$dbh = ConnectDB();

$phonelist = ListAllPhones($dbh);

echo "<p>Here is the data:<p>\n";
$counter = 0;
echo "<ul>\n";
foreach ( $phonelist as $number ) {
    $counter++;
    echo "    <li> $number->name, $number->phone ";
    echo "<a href='./delete.php?name=$number->name&amp;phone=$number->phone'>";
    echo "remove</a>";
    echo "</li>\n";
}
echo "</ul>\n";

echo "<p> $counter record(s) returned.<p>\n";

// uncomment next line for debugging
# echo '<pre>'; print_r($phonelist); echo '</pre>';
?>

<?php
echo "<p> Return to the homepage after your info is entered:<p>\n";
echo "<a href = http://elvis.rowan.edu/~zimmer30/web/Amish/Amish.html>Fighting Amish Home </a>"
?>


<?php include('foot.php'); ?>

</body>
</html>
