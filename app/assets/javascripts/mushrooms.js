$(document).ready(function(){
  // List all comments
  $('#getButton').click(function () {
    // fetch comments from the server
    $.ajax({ 
        type: "GET",
        url: "/comments",
        dataType: "script"
      });
    })

    // Create comment
    $('[type=submit]').click(function(e){
      e.preventDefault()
      
      if($('[name=create]').val() == ''){
        return false
      }

      $.ajax({
        // Configure the authenticity token
        beforeSend: function (xhr) { 
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) 
        },
        type: "post",
        url: "/comments",
        data: { comment: $('[name=create]').val() },
        dataType: "script"
      });
    })

    // Search comment
    $('[name=q]').on('keyup', function(){
      // simple data binding
      // $('h1')[0].innerHTML = $(this).val()
      if($(this).val().length > 2 ){
        $.ajax({
          type: "get",
          url: "/comments",
          data: { q: $(this).val() },
          dataType: "script"
        });
      }

      if($(this).val().length == 0){
        $.ajax({
          type: "get",
          url: "/comments",
          dataType: "script"
        });
      } 
    })

  })


    


      
  