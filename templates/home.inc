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