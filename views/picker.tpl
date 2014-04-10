<!doctype html>
 
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Moonlightter | Pick Whatever You Like</title>
  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.2.0/pure-min.css">
  <link rel="stylesheet" href="static/css/custom.css">
</head>
<body>
<div class="pure-menu pure-menu-open pure-menu-horizontal">
<a href="#" class="pure-menu-heading">Moonlightter</a>

<ul>
    <li class="pure-menu-selected"><a href="/">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="http://github.com/dyzdyz010" target="_blank">Github</a></li>
</ul>
    
<ul class="user-controll">
    <li><a href="#">{{.Username}}</a>
    <ul>
        <li><a href="/collection">Collection</a></li>
	    <li><a href="/logout">Sign out</a></li>
		<li class="pure-menu-separator"></li>
		<li><a href="mailto:dyzdyz010@sina.com?subject=[Moonlightter Feedback]">Feedback</a></li>
    </ul>
    </li>
</ul>
</div>

<div class="warpper">
<h1 class="pure-u-1 title">Moonlightter</h1>
<h2>Pick whatever you like</h2>

<div class="workspace">
	<div id="gradientBox">
		<img id="gradientImg" src="static/img/color_picker_gradient.png" />
	</div>
	<div id="hueBarDiv" onselectstart="return false;">
	</div>
	<div id="presentDiv">
    <div id="colorPreviewDiv">
		<div id="quickColor"></div>
		<div id="staticColor"></div>
	</div>
	<table width="100%">
		<tbody>
			<tr>
				<td>Hex</td>
				<td><input type="text" id="hexBox"></td>
			</tr>
			<tr>
				<td>Red</td>
				<td><input type="text" id="redBox"></td>
				<td>Green</td>
				<td><input type="text" id="greenBox"></td>
				<td>Blue</td>
				<td><input type="text" id="blueBox"></td>
			</tr>
			<tr>
				<td>Hue</td>
				<td><input type="text" id="hueBox"></td>
				<td>Saturation</td>
				<td><input type="text" id="saturationBox"></td>
				<td>Value</td>
				<td><input type="text" id="valueBox"></td>
			</tr>
		</tbody>
	</table>
	</div>
    
    <form class="pure-form pure-form-aligned" autocomplete="off" method="post">
    <div class="pure-controll-group">
<!--    	<label for="colorhex">You select</label>-->
    	<input id="colorhex" type="text" value={{.Color}} placeholder="Your selection" maxlength="7" required="true" name="colorhex">
    </div>
        
    <div class="pure-controll-group">
<!--    	<label for="colorname">Pick a name</label>-->
    	<input id="colorname" type="text" placeholder="Pick a name" maxlength="15" required="true" name="colorname">
    </div>
        
    <label id="warnmsg">{{.WarnMsg}}</label>
    <button type="submit" class="pure-button notice">Save it</button>
    </form>
</div>
        
    
<div class="footer">
    <li class="pure-menu-separator"></li>
    <p>© 2013 Du Yizhuo. All rights reserved.</p>
</div>
    
</div>

<script src="/static/js/jquery-2.0.0.min.js"></script>
<script src="/static/js/Colors.js"></script>
<script src="/static/js/picker.js"></script>

</body>
</html>