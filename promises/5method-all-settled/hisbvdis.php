<?php
// $myArr = array($myObj1, $myObj2, $myObj3, $myObj4, $myObj5, $myObj6, $myObj7, $myObj8);

$myObj = new stdClass();
$myObj->login = "hisbvdis";
$myObj->id = 349336;
$myObj->url = "https://api.github.com/users/hisbvdis";
$myObj->avatar_url = "https://avatars2.githubusercontent.com/u/5147554?v=4";

// Эмуляция передачи пользователя в JSON-формате
echo json_encode($myObj);
?>