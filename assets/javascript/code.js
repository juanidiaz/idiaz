// VARIABLES --------------------------------------------

//      OBJECTS



//      ARRAYS



//      STRINGS/CHAR



//      NUMBER/INTEGER



//      BOOLEAN



// ------------------------------------------------------------

$(document).ready(function () {

    var mainSection = $("<section>").addClass("container").appendTo($(".site"));
    var siteRow = $("<div>").addClass("row").appendTo(mainSection);
    siteRow.append("<div class=\"col-1\"></div>");
    var siteCol = $("<div>").addClass("col-10  align-self-center").appendTo(siteRow);
    siteRow.append("<div class=\"col-1\"></div>");
    var mainImage = $("<img>").attr("src", "./assets/images/logo_02_black.jpg").addClass("mainImage").appendTo(siteCol);
    var mainLine = $("<p>").html("Copyright © 2008 <b>JDI</b>. All Rights Reserved. <a href=\"mailto:jdi@idiaz.ca\">jdi@idiaz.ca</a>").addClass("main-line").appendTo(siteCol);

});