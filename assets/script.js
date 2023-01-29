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

    const timeBlockId = parseInt($(this).id.split("-")[0])
    if (currentHour > timeBlockId) {"past"}

    $(".time-block").each((index) => {
    
    currentHour = parseInt(this.attr("id"));
    if (currentHour > "id") {
        $(this).addClass("future"); 
    }

    else if (currentHour === "id") {
        $(this).addClass("present");
    }

    else {
        $(this).addClass("past");
    }
})




})
