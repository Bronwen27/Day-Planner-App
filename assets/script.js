// Today's date added to head of page
$('#currentDay').text(moment().format('DDD MMM YYYY')) 

$(document).ready(function(){

    //save button
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
    })

    function hourUpdate() {
        
    }
})
