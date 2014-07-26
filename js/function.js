$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
       
     $("input[name=ListItem]").keyup(function(event) {
          if(event.keyCode == 13){
            $("#button").click();
            event.preventDefault();
          }
       
      });
      
      $("form").submit(function(e) {
        e.preventDefault();
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
      });