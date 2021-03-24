// =================================== MY COOKIES =================================== //

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// Sender - Funding
// $('#pledge-funding-form').attr('action','6-intermediaries');

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
          $('#pledge-criteria-form').attr('action','5-level');
     }

     if ($('input[id=pledge-training]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','5-training');
     } else if ($('input[id=pledge-training]').is(':checked') && $('input[id=pledge-level]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','5-training');
     }

     if ($('input[id=pledge-location]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','4-sector');
     } else if ($('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','4-sector');
     } else if ($('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked') && $('input[id=pledge-level]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','4-sector');
     }

     if ($('input[id=pledge-location]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','3-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','3-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','3-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked') && $('input[id=pledge-level]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','3-location');
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
$('.govuk-panel--confirmation.pledge-complete').hide();

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

     $('.transfer-funds-non-pledge .number').hide();
     $('.transfer-funds-non-pledge .number.after-pledge').show();

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
var shortlistNumber = parseInt($('.pledge-number.shortlist').text());
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

     // Table details
     $('#order-applications-table tr[data-table-row="one"]').find('.awaiting').hide();
     $('#order-applications-table tr[data-table-row="one"]').find('.application-approved').show();

     // Pledge details page
     $('.pledge-approved-button').hide();
     $('#approved-back-to-pledge-details').removeClass('govuk-link-secondary');
     $('.govuk-form-group.approved-panel').show();
}

// if ($.cookie("pledge-approved-banner") == 'true') {
//      $('.pledge-approved').show();
//      setTimeout(function() {
//           $('.pledge-approved').slideUp('fast');
//      }, 5000);
// }

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

     // Table details
     $('#order-applications-table tr[data-table-row="two"]').find('.awaiting').hide();
     $('#order-applications-table tr[data-table-row="two"]').find('.application-rejected').show();

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

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - END -- !!!!!!!!!!!!!!!!!!!!!!!! //


// !!!!!!!!!!!!!!!!!!!!!!!! -- RECEIVER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// Search results data
$("section.pledge-details .govuk-button, section.pledge-details .pledge-name").on("click", function (e) {
     $.cookie("pledge-confirm-details", true, {path:'/'});
     // alert()
     var searchItem = $(this).closest('.pledge-details').attr('data-search');
     $.cookie("pledge-application-id", searchItem, {path:'/'});

     // Pledge information
     $.cookie("pledge-name", $(this).parent().find('.pledge-name').text(), {path:'/'});
     $.cookie("pledge-value", $(this).parent().parent().find('.govuk-caption-m').text(), {path:'/'});
     $.cookie("pledge-location", $(this).parent().parent().find('.location').text(), {path:'/'});
     $.cookie("pledge-sector", $(this).parent().parent().find('.sector').text(), {path:'/'});
     $.cookie("pledge-training", $(this).parent().parent().find('.training').text(), {path:'/'});
     $.cookie("pledge-level", $(this).parent().parent().find('.level').text(), {path:'/'});

     // Filters
     if ($('input[name="search-location"]:checked').length > 0) {
          $.cookie("search-filter-location", true, {path:'/'});
     } else {
          $.cookie("search-filter-location", false, {path:'/'});
     }
     if ($('input[name="search-sector"]:checked').length > 0) {
          $.cookie("search-filter-sector", true, {path:'/'});
     } else {
          $.cookie("search-filter-sector", false, {path:'/'});
     }
     if ($('input[name="search-training"]:checked').length > 0) {
          $.cookie("search-filter-training", true, {path:'/'});
     } else {
          $.cookie("search-filter-training", false, {path:'/'});
     }
     if ($('input[name="search-level"]:checked').length > 0) {
          $.cookie("search-filter-level", true, {path:'/'});
     } else {
          $.cookie("search-filter-level", false, {path:'/'});
     }

     // Location filter
     if ($('input[id="search-location-east-mids"]:checked')) { $.cookie("search-location-east-mids", true, {path:'/'}); }
     if ($('input[id="search-location-east-eng"]:checked')) { $.cookie("search-location-east-eng", true, {path:'/'}); }
     if ($('input[id="search-location-london"]:checked')) { $.cookie("search-location-london", true, {path:'/'}); }
     if ($('input[id="search-location-north-east"]:checked')) { $.cookie("search-location-north-east", true, {path:'/'}); }
     if ($('input[id="search-location-north-west"]:checked')) { $.cookie("search-location-north-west", true, {path:'/'}); }
     if ($('input[id="search-location-south-east"]:checked')) { $.cookie("search-location-south-east", true, {path:'/'}); }
     if ($('input[id="search-location-south-west"]:checked')) { $.cookie("search-location-south-west", true, {path:'/'}); }
     if ($('input[id="search-location-west"]:checked')) { $.cookie("search-location-west", true, {path:'/'}); }
     if ($('input[id="search-location-york"]:checked')) { $.cookie("search-location-york", true, {path:'/'}); }
});

// Opens the filters
if ($.cookie("search-filter-location") == 'true') { $('details[data-search-filter="location"').attr('open','isOpen'); }
if ($.cookie("search-filter-sector") == 'true') { $('details[data-search-filter="sector"').attr('open','isOpen'); }
if ($.cookie("search-filter-training") == 'true') { $('details[data-search-filter="training"').attr('open','isOpen'); }
if ($.cookie("search-filter-level") == 'true') { $('details[data-search-filter="level"').attr('open','isOpen'); }

// Checks the filters
// Location
if ($.cookie("search-location-east-mids") == 'true') { $('input[id="search-location-east-mids"]').attr('checked','checked'); } else { $('input[id="search-location-east-mids"]').removeAttr('checked'); }
if ($.cookie("search-location-east-eng") == 'true') { $('input[id="search-location-east-eng"]').attr('checked','checked'); } else { $('input[id="search-location-east-eng"]').removeAttr('checked'); }
if ($.cookie("search-location-london") == 'true') { $('input[id="search-location-london"]').attr('checked','checked'); } else { $('input[id="search-location-london"]').removeAttr('checked'); }
if ($.cookie("search-location-north-east") == 'true') { $('input[id="search-location-east-mids"]').attr('checked','checked'); } else { $('input[id="search-location-east-mids"]').removeAttr('checked'); }
if ($.cookie("search-location-north-west") == 'true') { $('input[id="search-location-north-west"]').attr('checked','checked'); } else { $('input[id="search-location-north-west"]').removeAttr('checked'); }
if ($.cookie("search-location-south-east") == 'true') { $('input[id="search-location-south-east"]').attr('checked','checked'); } else { $('input[id="search-location-south-east"]').removeAttr('checked'); }
if ($.cookie("search-location-south-west") == 'true') { $('input[id="search-location-south-west"]').attr('checked','checked'); } else { $('input[id="search-location-south-west"]').removeAttr('checked'); }
if ($.cookie("search-location-west") == 'true') { $('input[id="search-location-west"]').attr('checked','checked'); } else { $('input[id="search-location-west"]').removeAttr('checked'); }
if ($.cookie("search-location-york") == 'true') { $('input[id="search-location-york"]').attr('checked','checked'); } else { $('input[id="search-location-york"]').removeAttr('checked'); }

if ($.cookie("pledge-confirm-details") == 'true') {
     $('.pledge-name-answer').text($.cookie("pledge-name"));
     $('.pledge-value-answer').text($.cookie("pledge-value"));
     $('.pledge-location-answer').text($.cookie("pledge-location"));
     $('.pledge-sector-answer').text($.cookie("pledge-sector"));
     $('.pledge-training-answer').text($.cookie("pledge-training"));
     $('.pledge-level-answer').text($.cookie("pledge-level"));
}

// Confirm application
var receiverApplicationsNumber = parseInt($('.application-number.applications').text());
var receiverDeletedNumber = parseInt($('.application-number.deleted').text());

$("#pledge-application-confirm-continue").on("click", function (e) {
     $.cookie("pledge-application-completed", true, {path:'/'});
});

$('.application-complete-table').hide();

if ($.cookie("pledge-application-completed") == 'true') {
     $('.no-applications').hide();
     $('.application-complete-table').show();

     $('.application-number.applications').text(receiverApplicationsNumber + 1).addClass('active');
     // $('.application-number.deleted').text(receiverDeletedNumber + 1).addClass('active');

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

// Delete application
$("#delete-application-continue").on("click", function (e) {
     if ($('input[id="delete-application"]:checked')) {
          $.cookie("delete-application-completed", true, {path:'/'});
     } else {
          $.cookie("delete-application-completed", false, {path:'/'});
     }
});

if ($.cookie("delete-application-completed") == 'true') {
     $('table.application-complete-table').hide();
     $('table.application-deleted-table').show();
     $('.no-applications').show();
     $('.no-deleted-applications').hide();
     $('#delete-application').hide();
     $('.deleted-panel').show();

     $('.application-number.applications').text(receiverApplicationsNumber).removeClass('active');
     $('.application-number.deleted').text(receiverDeletedNumber + 1).addClass('active');
}
