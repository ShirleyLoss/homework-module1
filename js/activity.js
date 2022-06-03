$(document).ready(function(){
    $("#activitiesTable > thead > tr > td").addClass("notAvailable");
    $("#activitiesTable > tbody > tr > td:first-child").addClass("notAvailable");
    $("#activitiesTable").find("td").not(".notAvailable").addClass("available");
    $(".available").hover(function(){
        $(this).css('cursor', 'pointer');
    })
    $(".available").click(function(){
        $(this).toggleClass("activitiesTableSelected");
    });
});