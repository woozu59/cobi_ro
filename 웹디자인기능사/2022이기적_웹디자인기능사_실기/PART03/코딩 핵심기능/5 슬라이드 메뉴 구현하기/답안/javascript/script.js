// JavaScript Document

jQuery(document).ready(function() {
 $(".navi>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
  });
 $(".navi>li").mouseout(function(){
  $(this).children(".submenu").stop().slideUp();
 });
});
 