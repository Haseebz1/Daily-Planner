
$(function () {
 
  $(".saveBtn").on("click", function () {
    var inputValue = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, inputValue);
  });
  
  function hourColorUpdate() {
    var currentHour = dayjs().hour();
    console.log(currentHour);


  $(".time-block").each(function () {
    console.log("something");
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourColorUpdate();

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17")); 
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));


  

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))
  
});