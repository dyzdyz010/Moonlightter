<!DOCTYPE html>
 
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Moonlightter | Find Your Color Here</title>
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.2.0/pure-min.css">
	<link rel="stylesheet" href="/static/css/custom.css">
</head>

<body>
<div class="pure-menu pure-menu-open pure-menu-horizontal">
<a href="#" class="pure-menu-heading">Moonlightter</a>

<ul>
    <li class="pure-menu-selected"><a href="/">Home</a></li>
    <li><a href="/resume">Resumé</a></li>
    <li><a href="http://github.com/dyzdyz010" target="_blank">Github</a></li>
</ul>
    
<ul class="user-controll">
    <li><a href="/login">Sign In</a></li>
</ul>
</div>

<div class="warpper">
<h1 class="pure-u-1 title">Moonlightter</h1>
<h2>Find Your Color Now!</h2>


<form action="/" autocomplete="off" class="pure-form pure-form-aligned" method="post">
    <fieldset>
    	<!-- <legend>Sign Up</legend> -->
    
    	<div class="pure-controll-group">
    	<!-- <label for="username">Username</label> -->
    	<input id="username" type="text" placeholder="Pick a username" required="true" name="username">
    	</div>
    
        <div class="pure-controll-group">
		<!-- <label for="email">Email</label> -->
        <input id="email" type="email" placeholder="Your email" required="true" name="email">
        </div>
		
		<div class="pure-controll-group">
		<!-- <label for="password">Password</label> -->
        <input id="password" type="password" placeholder="Create a password" required="true" name="password">
		</div>

		<label id="warnmsg">{{.WarnMsg}}</label>
        <button id="submitBtn" class="pure-button notice">Sign up for Moonlightter</button>
    </fieldset>
</form>
    
    
<div class="footer">
    <li class="pure-menu-separator"></li>
    <p>© 2013 Du Yizhuo. All rights reserved.</p>
</div>
    
</div>

<script src="/static/js/jquery-2.0.0.min.js"></script>
<script src="/static/js/md5.js"></script>
<script src="/static/js/index.js"></script>

</body>
</html>