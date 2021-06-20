$(document).ready(function() {
  $('.btn-1').click(function() {
      alert("hello Amir")
  });
  $('.dbl-clk').dblclick(function(){
      alert("You have double clicked")
  });
  $('.ms-ent').mouseenter(function(){
      alert("This is mouseenter affect")
  });
  $('.ms-out').mouseout(function(){
      alert("This is mouseout affect")
  });
//   hide
$('.hide').click(function(){
    $('.message').hide(200)
});
// show
$('.show').click(function(){
    $('.message').show(500)
});
$('#hide-show').click(function(){
    $('.message').toggle(120)
});
$('.fade-hide').click(function(){
    $('.message').fadeOut(550)
});
$('.fade-show').click(function(){
    $('.message').fadeIn(600)
});
$('.fade-toggle').click(function(){
    $('.message').fadeToggle(500)
});
$('.fade-to').click(function(){
    $('.message').fadeTo(500, 0.5)
});
$('#slide-toggle').click(function(){
    $('.message-2').slideToggle()
});
    // draggable
    $( "#dragg" ).draggable({scroll:true, scrollSensitivity: 100});
    $( "#dragg1" ).draggable({axis:"y"});
    $( "#dragg2" ).draggable({axis:"x"});
    $( "#dragg3" ).draggable({ revert: true });
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#sort_draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
    


    // accordion
    $( "#accordion" ).accordion({
        collapsible:true
    });
    $( function() {
    var datalist = [
      "Shikhbe Shobai",
      "bohubrihi",
      "Ghuri Learning",
      "pencilbox"
    ];
    $( "#data" ).autocomplete({
      source: datalist
    });
  } );

    $( function() {
    $( "input" ).checkboxradio();
  } );
    $( "ul.droptrue" ).sortable({
      connectWith: "ul"
    }); 
    $( "#sort_table1, #trashcan" ).disableSelection();

    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
    
})
