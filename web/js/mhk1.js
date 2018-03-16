var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 =document.getElementById&&!document.all; //detect netscape 6
// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<a href='img/22.jpg'><img alt='image0(9K)' src='img/22.jpg' height='150' 'width='90' border='4em' /> </a>"; //a linked image
    items[1]="<a href='img/a1.jpg'><img alt='image1(9K)' src='img/a1.jpg' height='150' 'width='90' border='4em' /> </a>"; //a linked image
    items[2]="<a href='img/a2.jpg'><img alt='image2(9K)' src='img/a2.jpg' height='150' 'width='90' border='4em' /></a>"; //a linked image
    items[3]="<a href='img/33.jpg'><img alt='image3(9K)' src='img/33.jpg' height='150' 'width='90' border='4em' /></a>"; //a linked image
    items[4]="<a href='img/44.jpg'><img alt='image4(9K)' src='img/44.jpg' height='150' 'width='90' border='4em' /></a>"; //a linked image
    items[5]="<a href='img/55.jpg'><img alt='image5(18K)' src='img/55.jpg' height='150' 'width='90' border='4em' /></a>"; //a linked image
function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current =(current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}
function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current];
        if(document.all)
            placeholderdiv.innerHTML=items[current];
    current =(current==items.length-1) ? 0 :current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
//-->
function writeText(txt)
{
document.getElementById("desc").innerHTML=txt;
}
function baba(){
var num=prompt("ENTER THE NUMBER OF VISITORS");
var name=new Array(num);
for(i=0;i<num;i++){ name[i]=prompt("ENTER THE \
NAME OF VISITOR ");}
var S1=name.join(" & ");
/*for (i in name){
alert("Welcome "+name[i] + "  ");
}*/
alert("Welcome " +S1+", It is Saurabh From IIITMG.");
}
function timer(){
	var timer=new Date();
	alert("You are here at "+timer);
}
function interv()
{
	document.write("jai Mahakal ");
}
function chacha()
{
	setInterval("interv()",1000);
}
var c=0;
var t;
var timer_is_on=0;

function timedCount()
{
document.getElementById('txt').value=c;
c=c+1;
t=setTimeout("timedCount()",1000);
}

function doTimer()
{
if (!timer_is_on)
  {
  timer_is_on=1;
  timedCount();
  }
}
function validator()
{
	if(document.Signin.box.checked)
	alert("Not Prepared action");
	else
			alert("Check the box if you want to access");

}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function checkCookie()
{
var username=getCookie("username");
  if (username!=null && username!="")
  {
  alert("Welcome again " + username);
  }
else
  {
  username=prompt("Please enter your name:","");
  if (username!=null && username!="")
    {
    setCookie("username",username,365);
    }
  }
}
function kaka(){
	var x=prompt("Enter a number between 0 and 10:","");
try
  {
  if(x>10)
    {
    throw "Err1";
    }
  else if(x<0)
    {
    throw "Err2";
    }
  else if(isNaN(x))
    {
    throw "Err3";
    }
  }
catch(er)
  {
  if(er=="Err1")
    {
    alert("Error! The value is too high");
    }
  if(er=="Err2")
    {
    alert("Error! The value is too low");
    }
  if(er=="Err3")
    {
    alert("Error! The value is not a number");
    }
  }
}
