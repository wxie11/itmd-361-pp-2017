$(document).ready(function(){
  $("#doorbell").remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
    alert("The doorbell is ringing!");
  }

  $("#ringbell").on("click", function() {
    ringDoorbell();
  });

  $(document).on("keypress", function(event) {
    if(event.key == "d") {
      ringDoorbell();
    }
  });

});
