let todayDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time, text);
  })

    function timeTracker() {

      let currentTime = moment().hour();

      $(".time-block").each(function() {

        let blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < currentTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } else if (blockTime > currentTime) {
          $(this).addClass("future");
          $(this).removeClass("present");
          $(this).removeClass("past");
        } else if (blockTime === currentTime) {
          $(this).removeClass("future");
          $(this).addClass("present");
          $(this).removeClass("past");
        }
      })
    }

// Get item from local storage if any
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));

timeTracker();

  });