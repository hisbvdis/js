<?php
// $myArr = array($myObj1, $myObj2, $myObj3, $myObj4, $myObj5, $myObj6, $myObj7, $myObj8);

$myObj = new stdClass();
$myObj->login = "iliakan";
$myObj->id = 303747;
$myObj->url = "https://api.github.com/users/iliakan";
$myObj->avatar_url = "https://avatars0.githubusercontent.com/u/349336?v=4";

// Эмуляция передачи пользователя в JSON-формате
echo json_encode($myObj);
?>