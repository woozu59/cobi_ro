// JavaScript Document
	
var imgs = 2;
var now = 0;

start(); 

function start(){
   $(".imgs>img").eq(0).siblings().fadeOut(1000);
   setInterval(function(){slide();},3000);
}
function slide(){
   now = now==imgs?0:now+=1;
   $(".imgs>img").eq(now-1).fadeOut(1000);   
   $(".imgs>img").eq(now).fadeIn(1000);
}
	
