// Today's date added to head of page
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(document).ready(function(){

    // save button function
    $(".saveBtn").on("click", function(){


        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);


    });


    // set color coded rows according to updating current time

function calandarTimer() {

    let currentHour = moment().hours();
    
    for (let i = 0; i < $("time-block").length; i++) {
        currentHour = parseInt($("time-block").attr("id"));
      }

      if (currentHour > "id") {
        $("time-block").addClass("future"); 
    }

     else if (currentHour === "id") {
        $("time-block").addClass("present");
     }

     else {
        $("time-block").addClass("past");
     }
}

console.log(calandarTimer)


})
