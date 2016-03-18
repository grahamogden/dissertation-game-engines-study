<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
// print_r("Hello");

$segments = explode('/', trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/'));

define("BASEPATH", preg_replace("/(www)$/", "", getcwd()));
// define("MODULEPATH", BASEPATH."/modules/".($segments[0] ? $segments[0] : "home")."/");
// var_dump(MODULEPATH);

spl_autoload_register('autoloader');
function autoloader($class) {  require(BASEPATH."/classes/".$class.'.class.php');  }

$page = new Template(BASEPATH."/templates/page.inc");

$page->set("css-time", filemtime(BASEPATH."/css/main.css"));
$page->set("title", "Childrens games");

// require(MODULEPATH."/index.php");

$body = new Template("templates/home.inc");

$page->set("bodyContent", $body);
echo $page->output();

?>