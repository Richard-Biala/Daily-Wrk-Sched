

function renderTime() {
    //Date
    var mydate = new Date();
    var year = mydate.getFullYear();
        if(year < 1000){
            year +=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray = new Array("January","Febuary","March","April","May","June","July","August","September","October","November","December");
    //Date End

    //Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }

        if(h < 10){
            h = "0" + h;
        }

        if(m < 10){
            m = "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }
    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" +dayarray[day] + " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    myClock.innerText = "" +dayarray[day] + " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

    setTimeout("renderTime()", 1000); 
    

    renderTime();

    //$(document).ready(function(){


    let currentHour = moment().format("HH");

    var hourLabel07 = $("#textarea07").parent().attr("id");
    var hourLabel08 = $("#textarea08").parent().attr("id");
    var hourLabel09 = $("#textarea09").parent().attr("id");
    var hourLabel10 = $("#textarea10").parent().attr("id");
    var hourLabel11 = $("#textarea11").parent().attr("id");
    var hourLabel12 = $("#textarea12").parent().attr("id");
    var hourLabel01 = $("#textarea01").parent().attr("id");
    var hourLabel02 = $("#textarea02").parent().attr("id");


    var hourLabel = $("textarea").parent().attr("id");

    $("#07 #textarea07").val(localStorage.getItem("07"));
    $("#08 #textarea08").val(localStorage.getItem("08"));
    $("#09 #textarea09").val(localStorage.getItem("09"));
    $("#10 #textarea10").val(localStorage.getItem("10"));
    $("#11 #textarea11").val(localStorage.getItem("11"));
    $("#12 #textarea12").val(localStorage.getItem("12"));
    $("#01 #textarea01").val(localStorage.getItem("01"));
    $("#02 #textarea02").val(localStorage.getItem("02"));


    $(".saveBtn").on("click", function (e) {
        e.preventDefault();
        var textArea = $(this).siblings("textarea").val();
        console.log(textArea);
        var hour= $(this).parent().attr("id");
        console.log(hour);
        localStorage.setItem(hour, textArea);

    })

    var type = $(".container").children().children("textarea");
    console.log(type);
    console.log(this);
}