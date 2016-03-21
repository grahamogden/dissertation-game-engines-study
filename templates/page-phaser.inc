<!DOCTYPE HTML>

<html lang="en">
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

	<title>[@title]</title>
	<meta name="description" content="[@title]">
	<meta name="author" content="Graham Ogden">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
	<link rel="stylesheet" href="/css/main.css?[@css-time]">
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
	<div id="body_wrapper">
		<div id="body_container">
			[@bodyContent]
		</div>
	</div>
	<script>
	if(typeof(Storage) !== "undefined") {
	    if(localStorage.getItem("name") !== "undefined" && localStorage.getItem("name") !== null && localStorage.getItem("age") !== NaN && localStorage.getItem("age") !== null && localStorage.getItem("age") !== undefined) {
	    	$('#signup').remove();
	    } else {
	    	$('#signup').slideDown(400, 'linear');
	    }
	}
	</script>
<script src="/javascript/Phaser/phaser.js" type="text/javascript"></script>
<script src="/javascript/boot.js" type="text/javascript"></script>
<script src="/javascript/preload.js" type="text/javascript"></script>
<script src="/javascript/login.js" type="text/javascript"></script>
<script src="/javascript/mainmenu.js" type="text/javascript"></script>
<script src="/javascript/settings.js" type="text/javascript"></script>
<script src="/javascript/game_animals.js" type="text/javascript"></script>
<script src="/javascript/game_colouring.js" type="text/javascript"></script>
<script src="/javascript/game_shapes.js" type="text/javascript"></script>
<script src="/javascript/game_numbers.js" type="text/javascript"></script>
<script src="/javascript/game_match.js" type="text/javascript"></script>
<script src="/javascript/master.js"></script>
</body>
</html>