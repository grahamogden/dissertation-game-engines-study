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
			<div id="signup">
				<form name="signupForm" onsubmit="return saveToStorage()" method="POST">
					<label>Type in a nickname:</label>
					<input id="name" name="name" type="text" />
					<label>Enter the child's age:</label>
					<select name="age">
						<option disabled selected>Age</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<input type="image" src="/assets/images/save_and_continue.png" alt="Save and Continue"/>
				</form>
			</div>
			<div id="game_canvas">
			</div>
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
<script src="/javascript-crafty/crafty/crafty.js" type="text/javascript"></script>
<script src="/javascript-crafty/states/boot.js" type="text/javascript"></script>
<script src="/javascript-crafty/states/preload.js" type="text/javascript"></script>
<script src="/javascript-crafty/states/mainmenu.js" type="text/javascript"></script>
<script src="/javascript-crafty/states/game_animals.js" type="text/javascript"></script>
<!-- <script src="/javascript-crafty/states/intro.js" type="text/javascript"></script> -->
<script src="/javascript-crafty/states/game_colouring.js" type="text/javascript"></script>
<script src="/javascript-crafty/states/game_match.js" type="text/javascript"></script>
<script src="/javascript-crafty/states/game_numbers.js" type="text/javascript"></script>
<script src="/javascript-crafty/states/game_shapes.js" type="text/javascript"></script>
<script src="/javascript-crafty/main.js" type="text/javascript"></script>
</body>
</html>