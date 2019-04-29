// Code to be executed.
$(function(){
  
// Appends 'CONSOLE BOX READY' to inform the user that the website is ready to be used. Once it is used, the violations being clicked will appear in the element.
  $('#console-box').append('CONSOLE IS READY...');

// Invokes the program to upload and append the class, values, and attributes of the violations being clicked to appear in the division element.
  $('button').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');

// Allows the user to toggle the selected button & removes it from being selected.
    $(this).toggleClass('selected').siblings().removeClass('selected');
 ;
  });
  
});