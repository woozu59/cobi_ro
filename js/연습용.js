/*$(window).ready(function(){
    draw(80, '.pie-chart1', '#ccc');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }
 */
 
 $('.chart1').easyPieChart({
    barColor: '#f16529',
    trackColor: '#ccc',
    scaleColor: '#fff',
    lineCap: 'butt',
    lineWidth: 30,
    size: 200,
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });

  $('.chart2').easyPieChart({
      barColor: '#1c88c7',
      trackColor: '#fff',
      scaleColor: '#ccc',
      lineCap: 'round',
      lineWidth: 30,
      size: 200,
      animate: 1000,
      onStart: $.noop,
      onStop: $.noop
  }); 

  $('.chart3').easyPieChart({
      barColor: '#1c88c7',
      trackColor: '#fff',
      scaleColor: '#fff',
      lineCap: 'square',
      lineWidth: 30,
      size: 200,
      animate: 1000,
      onStart: $.noop,
      onStop: $.noop
  });
