$(document).ready(function(){

  $.ajaxSetup({ beforeSend: function (xhr) { 
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) 
      }
  });

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

    // Delete a pinche comment
    $('ul').on('click', '.delete_comment',function(e){
      e.preventDefault()
      var id = $(this).closest('li')[0].id.split('_')[1]
      $.ajax({
        type: "delete",
        url: "/comments/" + id,
        dataType: "script"
      });
    })

    // Edit a piche comment
    $('ul').on('click', '.update_comment',function(e){
      e.preventDefault()
      var id = $(this).closest('li')[0].id.split('_')[1]
      $.ajax({
        type: "get",
        url: "/comments/"+id+"/edit",
        dataType: "script"
      });
    })

    // Update a pinche comment
    $('#update').on('click', 'button', function(e){
      e.preventDefault()
      var content = $(this).closest('form')[0][0].value
      var id =$(this).closest('form')[0][1].value

      $.ajax({
        type: "patch",
        url: "/comments/" + id,
        data: { comment: content },
        dataType: "script"
      });
    })

    // Show
    
  })


    


      
  