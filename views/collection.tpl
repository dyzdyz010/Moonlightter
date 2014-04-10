<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Moonlightter | Here's what you've got</title>
  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.2.0/pure-min.css">
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
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
      <li><a href="#">{{.Username}}</a>
        <ul>
         <li><a href="#">Collection</a></li>
         <li><a href="/logout">Sign out</a></li>
         <li class="pure-menu-separator"></li>
         <li><a href="mailto:dyzdyz010@sina.com?subject=[Moonlightter Feedback]">Feedback</a></li>
       </ul>
     </li>
   </ul>
 </div>

 <div class="warpper">
  <h1 class="pure-u-1 title">Moonlightter</h1>
  <h2>Here's what you've got</h2>

  <div class="workspace">
    {{range .Colors}}
    <div class="tile">
      <div class="tilecolor" style="background-color:{{.Hex}}"></div>
      <p class="tilename">{{.Name}}</p>
      <p class="tilehex">{{.Hex}}</p>
    </div>
    {{end}}
  </div>
  
  
  <div class="footer">
    <li class="pure-menu-separator"></li>
    <p>© 2013 Du Yizhuo. All rights reserved.</p>
  </div>
  
</div>


<script src="/static/js/jquery-2.0.0.min.js"></script>
<script src="/static/js/jquery.cookie.js"></script>
<script src="/static/js/Colors.js"></script>
<script src="/static/js/collection.js"></script>

</body>
</html>