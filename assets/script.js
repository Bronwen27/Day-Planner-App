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

   const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

    /*function hourTracker(){
        let currentHour = moment().hours();
              $(".time-block").each(function () {
            var rowHour = parseInt($(".time-block").attr("id").split("hour")[1]);
            console.log( rowHour, currentHour)

            //check if we've moved past this time, click into css/html given classes of past, present, or future
            if (rowHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (rowHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); 
    */
}
)
