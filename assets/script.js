// Today's date and time added to head of page
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(document).ready(function(){

    // save button function
    $(".saveBtn").on("click", function(){


        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log(value);

        // show event and time in local storage

        localStorage.setItem(timeID, value);
        
        $("#success-alert").show();
        setTimeout(function() { $("#success-alert").hide(); }, 5000);

    });

    // set color coded rows according to updating current time

    let currentHour = moment().hours();
    
    $(".time-block").each(function(){
        const timeBlockId = parseInt($(this).attr("id").split("-")[0])
   
        // conditions to be met and their responding colours
    
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





