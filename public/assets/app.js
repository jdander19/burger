$(document).ready(() => {


    $("#add-burger").on("submit", function(event) {
      event.preventDefault();
  
      var aBurger= {
        burgerName: $("#burger").val().trim(),
      };
  
      $.ajax("/add", {
        type: "POST",
        data: aBurger
      }).then(
        function(res) {
          $("#burger").val("");
          console.log("Added a burger");
          
          location.reload();
        }
      );
    });
    
   
    $(".devour").on("click", function(event) {
      event.preventDefault();
  
      
      var burgerId = $(this).attr("burgerId");
      var aBurger= {
        devoured: true
      };
      
    
      $.ajax("/devour/" + burgerId, {
        type: "PUT",
        data: aBurger
      }).then(res => {
          console.log("burger id(" + burgerId + ") is eaten");
          
          location.reload();
        })
        .catch(error => {
          console.log(error);
          
          location.reload();
        });
    });
  
    $(".remove").on("click", function(event) {
      event.preventDefault();
  
      
      var burgerId = $(this).attr("burgerId");
      var aBurger= {
        devoured: true
      };
      
      $.ajax("/remove/" + burgerId, {
        type: "DELETE",
        data: aBurger
      }).then(res => {
          console.log("burger id(" + burgerId + ") is removed");

          location.reload();
        })
        .catch(error => {
          console.log(error);

          location.reload();
        });
    });
  
  
  });