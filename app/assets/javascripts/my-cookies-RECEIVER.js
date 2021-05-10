// =================================== MY COOKIES =================================== //

// !!!!!!!!!!!!!!!!!!!!!!!! -- RECEIVER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// Initial search
$("#filter-results").on("click", function (e) {
     $.cookie("filter-results", true, {path:'/'});
     if ($("input[id=pledge-application-location]").val()) {
          $.cookie("filter-results-location", true, {path:'/'});
     } else {
          $.cookie("filter-results-location", false, {path:'/'});
     }
     if ($("input[name=search-sector]:checkbox:checked").length > 0) {
          $.cookie("filter-results-sector", true, {path:'/'});
     } else {
          $.cookie("filter-results-sector", false, {path:'/'});
     }
     if ($("input[name=search-training]:checkbox:checked").length > 0) {
          $.cookie("filter-results-standard", true, {path:'/'});
     } else {
          $.cookie("filter-results-standard", false, {path:'/'});
     }
     if ($("input[name=search-level]:checkbox:checked").length > 0) {
          $.cookie("filter-level", true, {path:'/'});
     } else {
          $.cookie("filter-level", false, {path:'/'});
     }
     // if ($("input[id=pledge-application-standard]").val()) {
     //      $.cookie("filter-results-standard", true, {path:'/'});
     // } else {
     //      $.cookie("filter-results-standard", false, {path:'/'});
     // }

});

$("#browse-results").on("click", function (e) {
     $.cookie("browse-results", true, {path:'/'});
});

if ($.cookie("filter-results") == 'true') { $('.search-filter h4').text('Edit search'); }
if ($.cookie("browse-results") == 'true') { $('.search-filter h4').text('Apply filter'); }

// Opens the filters
if ($.cookie("filter-results-sector") == 'true') { $('details[data-search-filter="location"').attr('open','isOpen'); }
if ($.cookie("filter-results-location") == 'true') { $('details[data-search-filter="sector"').attr('open','isOpen'); }
if ($.cookie("filter-results-standard") == 'true') { $('details[data-search-filter="training"').attr('open','isOpen'); }
if ($.cookie("filter-level") == 'true') { $('details[data-search-filter="level"').attr('open','isOpen'); }

// if ($.cookie("search-filter-location") == 'true') { $('details[data-search-filter="location"').attr('open','isOpen'); }
// if ($.cookie("search-filter-sector") == 'true') { $('details[data-search-filter="sector"').attr('open','isOpen'); }
// if ($.cookie("search-filter-training") == 'true') { $('details[data-search-filter="training"').attr('open','isOpen'); }
// if ($.cookie("search-filter-level") == 'true') { $('details[data-search-filter="level"').attr('open','isOpen'); }

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
     // if ($('input[name="search-location"]:checked').length > 0) {
     //      $.cookie("search-filter-location", true, {path:'/'});
     // } else {
     //      $.cookie("search-filter-location", false, {path:'/'});
     // }
     // if ($('input[name="search-sector"]:checked').length > 0) {
     //      $.cookie("search-filter-sector", true, {path:'/'});
     // } else {
     //      $.cookie("search-filter-sector", false, {path:'/'});
     // }
     // if ($('input[name="search-training"]:checked').length > 0) {
     //      $.cookie("search-filter-training", true, {path:'/'});
     // } else {
     //      $.cookie("search-filter-training", false, {path:'/'});
     // }
     // if ($('input[name="search-level"]:checked').length > 0) {
     //      $.cookie("search-filter-level", true, {path:'/'});
     // } else {
     //      $.cookie("search-filter-level", false, {path:'/'});
     // }

     // Location filter
     // if ($('input[id="search-location-east-mids"]:checked')) { $.cookie("search-location-east-mids", true, {path:'/'}); }
     // if ($('input[id="search-location-east-eng"]:checked')) { $.cookie("search-location-east-eng", true, {path:'/'}); }
     // if ($('input[id="search-location-london"]:checked')) { $.cookie("search-location-london", true, {path:'/'}); }
     // if ($('input[id="search-location-north-east"]:checked')) { $.cookie("search-location-north-east", true, {path:'/'}); }
     // if ($('input[id="search-location-north-west"]:checked')) { $.cookie("search-location-north-west", true, {path:'/'}); }
     // if ($('input[id="search-location-south-east"]:checked')) { $.cookie("search-location-south-east", true, {path:'/'}); }
     // if ($('input[id="search-location-south-west"]:checked')) { $.cookie("search-location-south-west", true, {path:'/'}); }
     // if ($('input[id="search-location-west"]:checked')) { $.cookie("search-location-west", true, {path:'/'}); }
     // if ($('input[id="search-location-york"]:checked')) { $.cookie("search-location-york", true, {path:'/'}); }
});

// Checks the filters
// Location
// if ($.cookie("search-location-east-mids") == 'true') { $('input[id="search-location-east-mids"]').attr('checked','checked'); } else { $('input[id="search-location-east-mids"]').removeAttr('checked'); }
// if ($.cookie("search-location-east-eng") == 'true') { $('input[id="search-location-east-eng"]').attr('checked','checked'); } else { $('input[id="search-location-east-eng"]').removeAttr('checked'); }
// if ($.cookie("search-location-london") == 'true') { $('input[id="search-location-london"]').attr('checked','checked'); } else { $('input[id="search-location-london"]').removeAttr('checked'); }
// if ($.cookie("search-location-north-east") == 'true') { $('input[id="search-location-east-mids"]').attr('checked','checked'); } else { $('input[id="search-location-east-mids"]').removeAttr('checked'); }
// if ($.cookie("search-location-north-west") == 'true') { $('input[id="search-location-north-west"]').attr('checked','checked'); } else { $('input[id="search-location-north-west"]').removeAttr('checked'); }
// if ($.cookie("search-location-south-east") == 'true') { $('input[id="search-location-south-east"]').attr('checked','checked'); } else { $('input[id="search-location-south-east"]').removeAttr('checked'); }
// if ($.cookie("search-location-south-west") == 'true') { $('input[id="search-location-south-west"]').attr('checked','checked'); } else { $('input[id="search-location-south-west"]').removeAttr('checked'); }
// if ($.cookie("search-location-west") == 'true') { $('input[id="search-location-west"]').attr('checked','checked'); } else { $('input[id="search-location-west"]').removeAttr('checked'); }
// if ($.cookie("search-location-york") == 'true') { $('input[id="search-location-york"]').attr('checked','checked'); } else { $('input[id="search-location-york"]').removeAttr('checked'); }

if ($.cookie("pledge-confirm-details") == 'true') {
     $('.pledge-name-answer').text($.cookie("pledge-name"));
     $('.pledge-value-answer').text($.cookie("pledge-value"));
     $('.pledge-location-answer').text($.cookie("pledge-location"));
     $('.pledge-sector-answer').text($.cookie("pledge-sector"));
     $('.pledge-training-answer').text($.cookie("pledge-training"));
     $('.pledge-level-answer').text($.cookie("pledge-level"));
}

// Confirm application
$('.submit-transfer-application').hide();

// Confirm - 1 - apprenticeship details
$('.before-apprenticeship-content').show();
$('.after-apprenticeship-content, #add-another-apprenticeship, ol.app-task-list li.pledge-section-one h3').hide();

$("#application-apprentice-details").on("click", function (e) {
     $.cookie("application-apprentice-details", true, {path:'/'});
});

if ($.cookie("application-apprentice-details") == 'true') {
     $('.pledge-section-one .govuk-tag').addClass('govuk-tag--blue').removeClass('govuk-tag--grey').text('completed');
     $('.before-apprenticeship-content').hide();
     $('.after-apprenticeship-content, #add-another-apprenticeship, ol.app-task-list li.pledge-section-one h3').show();
     $('ol.app-task-list li.pledge-section-one').addClass('apprentice-added');
}

// Confirm - 2 - business details
$('.before-business-content').show();
$('.after-business-content').hide();

$("#application-business-details").on("click", function (e) {
     $.cookie("application-business-details", true, {path:'/'});
});

if ($.cookie("application-business-details") == 'true') {
     $('.pledge-section-two .govuk-tag').addClass('govuk-tag--blue').removeClass('govuk-tag--grey').text('completed');
     $('.before-business-content').hide();
     $('.after-business-content').show();
}

// $("#application-training-provder").on("click", function (e) {
//      if ($('input[name="pledge-application-training-provider"]:checked').length > 0) {
//           $.cookie("application-training-provder", true, {path:'/'});
//      } else {
//           $.cookie("application-training-provder", false, {path:'/'});
//      }
// });
//
// $('.before-provider-content').show();
// $('.after-provider-content').hide();
//
// if ($.cookie("application-training-provder") == 'true') {
//      $('.pledge-section-two .govuk-tag').addClass('govuk-tag--blue').removeClass('govuk-tag--grey').text('completed');
//      $('.before-provider-content').hide();
//      $('.after-provider-content').show();
// }

// Confirm - 3 - more details
$("#application-more-details").on("click", function (e) {
     if ($('input[name="pledge-application-more-details"]').val()) {
          $.cookie("application-more-details", false, {path:'/'});
     } else {
          $.cookie("application-more-details", true, {path:'/'});
     }
});

$('.before-details-content').show();
$('.after-details-content').hide();

if ($.cookie("application-more-details") == 'true') {
     $('.pledge-section-three .govuk-tag').addClass('govuk-tag--blue').removeClass('govuk-tag--grey').text('completed');
     $('.before-details-content').hide();
     $('.after-details-content').show();
}

// Confirm - 4 - contact details
$("#application-contact-details").on("click", function (e) {
     $.cookie("application-contact-details", true, {path:'/'});
});

$('.before-contact-content').show();
$('.after-contact-content').hide();

if ($.cookie("application-contact-details") == 'true') {
     $('.pledge-section-four .govuk-tag').addClass('govuk-tag--blue').removeClass('govuk-tag--grey').text('completed');
     $('.before-contact-content').hide();
     $('.after-contact-content').show();
}

// Confirm - complete
if ($.cookie("application-apprentice-details") == 'true' && $.cookie("application-business-details") == 'true' && $.cookie("application-more-details") == 'true' && $.cookie("application-contact-details") == 'true') {
     $('.submit-transfer-application').show();
}


var receiverApplicationsNumber = parseInt($('.after-application .number-of-applications').text());
// var receiverDeletedNumber = parseInt($('.application-number.deleted').text());


$("#pledge-application-confirm-continue, #application-confirm-continue").on("click", function (e) {
     $.cookie("pledge-application-completed", true, {path:'/'});
});

$('.application-complete-table').show();
$('.application-complete-table tr[data-application-row="one"]').hide();

$('.before-application').show();
$('.after-application').hide();

if ($.cookie("pledge-application-completed") == 'true') {
     $('.no-applications').hide();
     $('.application-complete-table tr[data-application-row="one"]').show();

     $('.after-application .number-of-applications').text(receiverApplicationsNumber + 1);
     // $('.application-number.deleted').text(receiverDeletedNumber + 1).addClass('active');

     $('.before-application').hide();
     $('.after-application').show();

     // $('.search-results').addClass('test');
}

// Delete application
$('.cancelled-info').hide();

$("#delete-application-continue").on("click", function (e) {
     if ($('input[id="delete-application"]').prop('checked') == true) {
          $.cookie("cancel-application-completed", true, {path:'/'});
     } else {
          $.cookie("cancel-application-completed", false, {path:'/'});
     }
});

$('.application-deleted-table, #application-cancelled-banner, #accept-application').hide();

if ($.cookie("cancel-application-completed") == 'true') {
     $('.application-complete-table tr[data-application-row="one"]').show();
     // $('table.application-deleted-table').show();
     // $('.no-applications').show();
     $('.no-deleted-applications, #delete-application-two, #delete-application-three, .application-status-two, .application-status-three').hide();
     $('.cancelled-panel, .rejected-panel').show();

     // $('.after-application .number-of-applications').text(receiverApplicationsNumber);
     // $('.application-number.deleted').text(receiverDeletedNumber + 1).addClass('active');
     // $('.before-application').show();
     // $('.after-application').hide();

     // Cancelled info
     $('.application-status-three .govuk-tag').removeClass('govuk-tag--grey').addClass('govuk-tag--yellow').text('cancelled');
     $('.application-complete-table tr[data-application-row="three"] .govuk-tag').removeClass('govuk-tag--grey').addClass('govuk-tag--yellow').text('cancelled');
     $('.cancelled-info, #application-cancelled-banner').show();

     // Rejected info
     $('.application-status-two .govuk-tag').removeClass('govuk-tag--grey').addClass('govuk-tag--red').text('rejected');
     $('.application-complete-table tr[data-application-row="two"] .govuk-tag').removeClass('govuk-tag--grey').addClass('govuk-tag--red').text('rejected');
     $('.rejection-info').show();

     // Accepted info
     $('.application-status-one .govuk-tag').removeClass('govuk-tag--grey').addClass('govuk-tag--green').text('accepted');
     $('.application-complete-table tr[data-application-row="one"] .govuk-tag').removeClass('govuk-tag--grey').addClass('govuk-tag--green').text('accepted');
     $('.rejection-info, #accept-application').show();

     $('.after-application .number-of-applications').text(receiverApplicationsNumber - 1);
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

// RECEIVER - Criteria match
$("#application-criteria-match").on("click", function (e) {
     if ($('input[id=pledge-match-criteria]').prop('checked') == true) {
          $.cookie("criteria-match-location", true, {path:'/'});
     } else {
          $.cookie("criteria-match-location", false, {path:'/'});
     }
     if ($('input[id="pledge-match-criteria-2"]').prop('checked') == true) {
          $.cookie("criteria-match-sector", true, {path:'/'});
     } else {
          $.cookie("criteria-match-sector", false, {path:'/'});
     }
     if ($('input[id="pledge-match-criteria-3"]').prop('checked') == true) {
          $.cookie("criteria-match-training", true, {path:'/'});
     } else {
          $.cookie("criteria-match-training", false, {path:'/'});
     }
     if ($('input[id="pledge-match-criteria-4"]').prop('checked') == true) {
          $.cookie("criteria-match-level", true, {path:'/'});
     } else {
          $.cookie("criteria-match-level", false, {path:'/'});
     }
});

if ($.cookie("criteria-match-location") == 'true') {
     $('ul.govuk-list li[data-criteria="location"]').find('.tick').show();
     $('ul.govuk-list li[data-criteria="location"]').find('.cross').hide();
} else {
     $('ul.govuk-list li[data-criteria="location"]').find('.tick').hide();
     $('ul.govuk-list li[data-criteria="location"]').find('.cross').show();
}

if ($.cookie("criteria-match-sector") == 'true') {
     $('ul.govuk-list li[data-criteria="sector"]').find('.tick').show();
     $('ul.govuk-list li[data-criteria="sector"]').find('.cross').hide();
} else {
     $('ul.govuk-list li[data-criteria="sector"]').find('.tick').hide();
     $('ul.govuk-list li[data-criteria="sector"]').find('.cross').show();
}

if ($.cookie("criteria-match-training") == 'true') {
     $('ul.govuk-list li[data-criteria="training"]').find('.tick').show();
     $('ul.govuk-list li[data-criteria="training"]').find('.cross').hide();
} else {
     $('ul.govuk-list li[data-criteria="training"]').find('.tick').hide();
     $('ul.govuk-list li[data-criteria="training"]').find('.cross').show();
}

if ($.cookie("criteria-match-level") == 'true') {
     $('ul.govuk-list li[data-criteria="level"]').find('.tick').show();
     $('ul.govuk-list li[data-criteria="level"]').find('.cross').hide();
} else {
     $('ul.govuk-list li[data-criteria="level"]').find('.tick').hide();
     $('ul.govuk-list li[data-criteria="level"]').find('.cross').show();
}
