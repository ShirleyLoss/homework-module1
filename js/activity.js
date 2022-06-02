$(document).ready(function(){
    $("#activitiesTable > thead > tr > td").addClass("notAvailable");
    $("#activitiesTable > tbody > tr > td:first-child").addClass("notAvailable");
    $("#activitiesTable").find("td").not(".notAvailable").addClass("available");
    $(".available").not(".activitiesTableSelected").click(function(){
        $(this).addClass("activitiesTableSelected");
    });
    $(".available .activitiesTableSelected").click(function(){
        // console.log($(this).attr('class'));
        $(this).removeClass("activitiesTableSelected");
        console.log($(this).attr('class'));
    });
});