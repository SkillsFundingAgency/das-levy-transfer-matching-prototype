// =================================== MY COOKIES =================================== //

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// Sender - Funding
$('#pledge-funding-form').attr('action','6-intermediaries');

$("#pledge-criteria-continue").on("click", function (e) {

     // $.cookie("pledge-amount", $('input[id="pledge-amount"]').val(), {path:'/'});

     if ($('input[id=pledge-anonymous]').is(':checked')) {
          $.cookie("pledge-anonymous", true, {path:'/'});
     } else {
          $.cookie("pledge-anonymous", false, {path:'/'});
     }

     // 1
     if ($('input[id=pledge-location]').is(':checked')) {
          $.cookie("pledge-location", true, {path:'/'});
     } else {
          $.cookie("pledge-location", false, {path:'/'});
     }
     // 2
     if ($('input[id=pledge-sector]').is(':checked')) {
          $.cookie("pledge-sector", true, {path:'/'});
     } else {
          $.cookie("pledge-sector", false, {path:'/'});
     }
     // 3
     if ($('input[id=pledge-training]').is(':checked')) {
          $.cookie("pledge-training", true, {path:'/'});
     } else {
          $.cookie("pledge-training", false, {path:'/'});
     }
     // 4
     if ($('input[id=pledge-level]').is(':checked')) {
          $.cookie("pledge-level", true, {path:'/'});
     } else {
          $.cookie("pledge-level", false, {path:'/'});
     }

     if ($('input[id=pledge-level]').is(':checked')) {
          $('#pledge-funding-form').attr('action','5-level');
     }

     if ($('input[id=pledge-training]').is(':checked')) {
          $('#pledge-funding-form').attr('action','4-training');
     } else if ($('input[id=pledge-training]').is(':checked') && $('input[id=pledge-level]').is(':checked')) {
          $('#pledge-funding-form').attr('action','4-training');
     }

     if ($('input[id=pledge-location]').is(':checked')) {
          $('#pledge-funding-form').attr('action','3-sector');
     } else if ($('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked')) {
          $('#pledge-funding-form').attr('action','3-sector');
     } else if ($('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked') && $('input[id=pledge-level]').is(':checked')) {
          $('#pledge-funding-form').attr('action','3-sector');
     }

     if ($('input[id=pledge-location]').is(':checked')) {
          $('#pledge-funding-form').attr('action','2-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked')) {
          $('#pledge-funding-form').attr('action','2-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked')) {
          $('#pledge-funding-form').attr('action','2-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked') && $('input[id=pledge-level]').is(':checked')) {
          $('#pledge-funding-form').attr('action','2-location');
     }

});


// Sender - Location
// if ($.cookie("pledge-location") == "true") {
//      $('#sender-check-answers').find('.section-two').show();
// } else {
//      $('#sender-check-answers').find('.section-two').hide();
// }

// Sender - Sector
// if ($.cookie("pledge-sector") == "true") {
//      $('#sender-check-answers').find('.section-three').show();
// } else {
//      $('#sender-check-answers').find('.section-three').hide();
// }

// Sender - Training
// if ($.cookie("pledge-training") == "true") {
//      $('#sender-check-answers').find('.section-four').show();
// } else {
//      $('#sender-check-answers').find('.section-four').hide();
// }

// Sender - Level
// if ($.cookie("pledge-level") == "true") {
//      $('#sender-check-answers').find('.section-five').show();
// } else {
//      $('#sender-check-answers').find('.section-five').hide();
// }

// Check answers page
$('.intermediary-details').hide();

$("#pledge-intermediaries-continue").on("click", function (e) {
     if ($('input[id=pledge-intermediaries-yes]').is(':checked')) {
          $.cookie("pledge-intermediaries", true, {path:'/'});
     } else {
          $.cookie("pledge-intermediaries", false, {path:'/'});
     }
});

if ($.cookie("pledge-intermediaries") == 'true') {
     $('.intermediary-details').show();
} else {
     $('.intermediary-details').hide();
}


// Pledge complete
$("#pledge-confirm-continue").on("click", function (e) {
     $.cookie("pledge-complete", true, {path:'/'});
});

$('.pledge-complete-table').hide();

$('.before-pledge').show();
$('.after-pledge').hide();

if ($.cookie("pledge-complete") == 'true') {
     $('.pledge-complete, .pledge-complete-table').show();
     $('.no-pledges').hide();
     $('.pledge-complete').show();
     setTimeout(function() {
          $('.pledge-complete').slideUp('fast');
     }, 5000);
     $('.before-pledge').hide();
     $('.after-pledge').show();
}

$('.approved-one, .rejected-one').hide();

if ($.cookie("pledge-anonymous") == 'true') {
     $('.anonymous-yes').show();
     $('.anonymous-no').hide();
} else {
     $('.anonymous-yes').hide();
     $('.anonymous-no').show();
}

// Pledges page
$('.approved-one, .rejected-one').hide();
$('.approved-not-complete, .rejected-not-complete').show();

$('.before-approval').show();
$('.after-approval').hide();

// if ($.cookie("pledge-amount")) {
//      $('.pledge-funds .value').text($.cookie("pledge-amount"));
//      $('.pledge-funds-remaining .value').text($.cookie("pledge-amount"));
// }

// alert(pledgeValue);

// Approve pledge
$("#approve-pledge-continue").on("click", function (e) {
     $.cookie("pledge-approved", true, {path:'/'});
     $.cookie("pledge-approved-banner", true, {path:'/'});
});

var applicationsNumber = parseInt($('.pledge-number.applications').text());
var approvedNumber = parseInt($('.pledge-number.approved').text());
var rejectedNumber = parseInt($('.pledge-number.rejected').text());
var pledgeNumberApproved = parseInt($('.pledge-approved-table').text());


if ($.cookie("pledge-approved") == 'true') {
     $('.before-approval').hide();
     $('.after-approval').show();
     $('.application.application-one').hide();
     $('.approved-not-complete').hide();
     $('.application.approved-one').show();
     $('.pledge-number.applications').text(applicationsNumber - 1);
     $('.pledge-approved-table').text(pledgeNumberApproved + 1);
     $('.pledge-number.approved').text(approvedNumber + 1).addClass('active');

     // Pledge details page
     $('.pledge-approved-button').hide();
     $('#approved-back-to-pledge-details').removeClass('govuk-link-secondary');
     $('.govuk-form-group.approved-panel').show();
}

if ($.cookie("pledge-approved-banner") == 'true') {
     $('.pledge-approved').show();
     setTimeout(function() {
          $('.pledge-approved').slideUp('fast');
     }, 5000);
}

setTimeout(function() {
     $.cookie("pledge-approved-banner", false, {path:'/'});
}, 5000);


// Pledge rejected
$("#reject-pledge-continue").on("click", function (e) {
     $.cookie("pledge-rejected-banner", true, {path:'/'});

     if ($('input[id=reject-application]').is(':checked')) {
          $.cookie("pledge-rejected", true, {path:'/'});
     } else {
          $.cookie("pledge-rejected", false, {path:'/'});
     }

});

if ($.cookie("pledge-rejected") == 'true') {
     $('.application.application-two').hide();
     $('.rejected-not-complete').hide();
     $('.application.rejected-one').show();
     $('.pledge-number.applications').text(applicationsNumber - 1);
     $('.pledge-number.rejected').text(approvedNumber + 1).addClass('active');

     // Pledge details page
     $('.pledge-rejected-button').hide();
     $('#rejected-back-to-pledge-details').removeClass('govuk-link-secondary');
     $('.govuk-form-group.rejected-panel').show();

}

if ($.cookie("pledge-rejected-banner") == 'true') {
     $('.pledge-rejected').show();
     setTimeout(function() {
          $('.pledge-rejected').slideUp('fast');
     }, 5000);
}

setTimeout(function() {
     $.cookie("pledge-rejected-banner", false, {path:'/'});
}, 5000);

if ($.cookie("pledge-rejected") == 'true' && $.cookie("pledge-complete") == 'true') {
     $('.pledge-number.applications').text(applicationsNumber - 2);

}

// Search results data
$("section.pledge-details .govuk-button").on("click", function (e) {
     $.cookie("pledge-confirm-details", true, {path:'/'});
     // alert()
     var searchItem = $(this).closest('.pledge-details').attr('data-search');
     $.cookie("pledge-application-id", searchItem, {path:'/'});

     $.cookie("pledge-name", $(this).parent().find('.pledge-name').text(), {path:'/'});
     $.cookie("pledge-value", $(this).parent().parent().find('.govuk-caption-m').text(), {path:'/'});
     $.cookie("pledge-location", $(this).parent().parent().find('.location').text(), {path:'/'});
     $.cookie("pledge-sector", $(this).parent().parent().find('.sector').text(), {path:'/'});
     $.cookie("pledge-training", $(this).parent().parent().find('.training').text(), {path:'/'});
     $.cookie("pledge-level", $(this).parent().parent().find('.level').text(), {path:'/'});
});

if ($.cookie("pledge-confirm-details") == 'true') {
     $('.pledge-name-answer').text($.cookie("pledge-name"));
     $('.pledge-value-answer').text($.cookie("pledge-value"));
     $('.pledge-location-answer').text($.cookie("pledge-location"));
     $('.pledge-sector-answer').text($.cookie("pledge-sector"));
     $('.pledge-training-answer').text($.cookie("pledge-training"));
     $('.pledge-level-answer').text($.cookie("pledge-level"));
}

$("#pledge-application-confirm-continue").on("click", function (e) {
     $.cookie("pledge-application-completed", true, {path:'/'});
});

if ($.cookie("pledge-application-completed") == 'true') {

}

if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-1') {
     $('.pledge-details[data-search=search-item-1]').addClass('applied');
}

if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-2') {
     $('.pledge-details[data-search=search-item-2]').addClass('applied');
}

if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-3') {
     $('.pledge-details[data-search=search-item-3]').addClass('applied');
}
if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-4') {
     $('.pledge-details[data-search=search-item-4]').addClass('applied');
}
if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-5') {
     $('.pledge-details[data-search=search-item-5]').addClass('applied');
}
if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-6') {
     $('.pledge-details[data-search=search-item-6]').addClass('applied');
}
if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-7') {
     $('.pledge-details[data-search=search-item-7]').addClass('applied');
}
if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-8') {
     $('.pledge-details[data-search=search-item-8]').addClass('applied');
}
if ($.cookie("pledge-application-completed") == 'true' && $.cookie("pledge-application-id") == 'search-item-9') {
     $('.pledge-details[data-search=search-item-9]').addClass('applied');
}
