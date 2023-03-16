$("figure img").click(function () {
    $("#grayBack").html($(this).prop("outerHTML"));
    $("#grayBack").fadeIn(200);
    return false;
});

$("#grayBack").click(function () {
    $("#grayBack").fadeOut(200);
    return false;
});  
