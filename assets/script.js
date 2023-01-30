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

    let currentHour = moment().hours();
    
    $(".time-block").each(function(){
        const timeBlockId = parseInt($(this).attr("id").split("-")[0])
   
    
    if (currentHour < timeBlockId) {
        $(this).addClass("future"); 
        $(this).removeClass("past");
        $(this).removeClass("present");

    }

    else if (currentHour === timeBlockId) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }

    else {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }})

})





