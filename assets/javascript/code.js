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
    //var siteCol = $(".footer");
    siteRow.append("<div class=\"col-1\"></div>");

    var links = $("<div>").addClass("links").appendTo(siteCol);

    var link_fb = $("<img>").attr("src", "./assets/images/facebook-logo.svg").attr("href", "#").addClass("link link_fb").appendTo(links);
    var link_tw = $("<img>").attr("src", "./assets/images/twitter-logo.svg").attr("href", "#").addClass("link link_tw").appendTo(links);
    var link_gh = $("<img>").attr("src", "./assets/images/github-logo.svg").attr("href", "#").addClass("link link_gh").appendTo(links);
    var link_m = $("<img>").attr("src", "./assets/images/email-logo.svg").attr("href", "#").addClass("link link_m").appendTo(links);

    var mainImage = $("<img>").attr("src", "./assets/images/logo_idiaz_gold.png").addClass("mainImage").appendTo(siteCol);





    
    var mainLine = $("<p>").html("Copyright © 2008 <b>JDI</b>. All Rights Reserved. <a href=\"mailto:jdi@idiaz.ca\">jdi@idiaz.ca</a>").addClass("main-line").appendTo($(".footer"));

    var credits = $('<p>').html('<div>Icons made by <b><a href="http://field5.com/" title="Agata Kuczminska">Agata Kuczminska</a></b> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>').addClass('credits').appendTo($(".footer"));


});