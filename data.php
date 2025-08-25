<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Data</title>
	<link rel="stylesheet" type="text/css" href="snow.css">
</head>
<body>
	
<style>
	body{
		background-image: linear-gradient(135deg, #9796f0 10%, #FBC7D4 100%);
		background-size: cover;
		background-attachment: fixed;
	}
</style>
	<h1 style="font-family: fantasy;" align="center" id="demo"></h1>
	<hr>
	<div style="width:400px;position: absolute;right: 35%;">
	<p id="par" style="font-family:fantasy;"></p>
</div>
	<h1 id="bye" style="position: fixed;bottom: 0%;"></h1>
<script type="text/javascript">
	i=0
	let txt='Welcome'
	len=0;
	let welcometext='Hi thanks for checking out our game. If you are actually playing this game, it means a lot to us. It took a lot of hard work and time to make this. So, it makes us hella happy. As a token of gratitude, we advise you to reconsider your life choices. With this your account has been created. You will be prompted back to the home page soon.'
	let byebyetext="Until we meet again...."
	gb=0
	function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 300);
  }else{
  	parstart()
  }
}
function parstart() {
if (len < welcometext.length) {
    document.getElementById("par").innerHTML +=welcometext.charAt(len);
    len++;
    setTimeout(parstart, 200);
  }else{
  	byebye()
  }
}
function byebye() {
	if (gb < byebyetext.length) {
    document.getElementById("bye").innerHTML +=byebyetext.charAt(gb);
    gb++;
    setTimeout(byebye, 200);
  }else{
  	window.open('index.htm','_self')
  }
}

</script>
<?php 
$username=$_GET['username'];
$password=$_GET['passcode'];
if (strtoupper($username)=='ICELET') {
	if (strtolower($password)=='kuromaki') {
		echo "<script>localStorage.accountname='ICELET';localStorage.cash=9999999999999;txt+=' '+localStorage.accountname;if(localStorage.buy==undefined||localStorage.buy==null||JSON.parse(localStorage.buy).backgrounds[0]=='academy.png'){var purchase={backgrounds:['academy.png','konohabg.png','konohabg2.png','background.png'],characters:['naruto']};localStorage.setItem('buy',JSON.stringify(purchase))};typeWriter();</script>";
	}
	else{
		echo "Wrong passcode<script>window.open('index.htm','_self')</script>";
	}
}elseif (strtoupper($username)=='SAURAV'){
	if(strtolower($password)=='lol'){
		echo "<script>localStorage.accountname='SAURAV';localStorage.cash=9999999999999;txt+=' '+localStorage.accountname;if(localStorage.buy==undefined||localStorage.buy==null||JSON.parse(localStorage.buy).backgrounds[0]=='academy.png'){var purchase={backgrounds:['academy.png','konohabg.png','konohabg2.png','background.png'],characters:['naruto']};localStorage.setItem('buy',JSON.stringify(purchase))};typeWriter()</script>";
	}
	else{
		echo "Wrong passcode<script>window.open('index.htm','_self')</script>";
	}

}else{
	echo "<script>localStorage.accountname='$username';localStorage.cash=0;txt+=' '+localStorage.accountname;typeWriter();</script>";
}
?>
</body>
</html>              