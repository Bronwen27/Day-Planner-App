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

        $(".notification")

        setTimeout(function(){
            $(".notification").removeClass("show");
        }, 5000)
    });

    // set color coded rows according to updating time


    function hourUpdate() {
        var hour = moment().hours();
    
        $(".time-block").each(function() {
            var currHour = parseInt($(this).attr("id"));

    
            if (currHour > hour) {
                $(this).addClass("future");
            } else if (currHour === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    };

})
