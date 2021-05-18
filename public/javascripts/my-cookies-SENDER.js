// =================================== MY COOKIES =================================== //

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// Sender - Funding
// $('#pledge-funding-form').attr('action','6-intermediaries');

$("#pledge-criteria-continue").on("click", function (e) {

     $.cookie("pledge-amount-complete", true, {path:'/'});
     $.cookie("pledge-amount-total", $('#pledge-amount').text(), {path:'/'});


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
          $('#pledge-criteria-form').attr('action','3A-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','3A-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','3A-location');
     } else if ($('input[id=pledge-location]').is(':checked') && $('input[id=pledge-sector]').is(':checked') && $('input[id=pledge-training]').is(':checked') && $('input[id=pledge-level]').is(':checked')) {
          $('#pledge-criteria-form').attr('action','3A-location');
     }

});

// MVS Work
$('.before-finance-content, .before-location-content, .before-sector-content, .before-job-content, .before-level-content').show();
$('.after-finance-content, .after-location-content, .after-sector-content, .after-job-content, .after-level-content').hide();

// MVS - Funding
$(".pledge-amount-continue").on("click", function (e) {
     $.cookie("pledge-amount-complete", true, {path:'/'});
});

if ($.cookie("pledge-amount-complete") == "true") {
     $('.before-finance-content').hide();
     $('.after-finance-content').show();
     $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

// MVS - Location
$(".pledge-location-continue").on("click", function (e) {
     $.cookie("pledge-location-complete", true, {path:'/'});
     if ($('input[id=pledge-location-all-of-england]').is(':checked')) {
          $.cookie("pledge-location-all-of-england", true, {path:'/'});
     } else {
          $.cookie("pledge-location-all-of-england", false, {path:'/'});
     }
});

if ($.cookie("pledge-location-complete") == "true") {
     $('.before-location-content').hide();
     $('.after-location-content').show();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

if ($.cookie("pledge-location-complete") == "true" && $.cookie("pledge-location-all-of-england") == "true") {
     $('.before-location-content').show();
     $('.after-location-content').hide();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

// MVS - Sector
$(".pledge-sector-continue").on("click", function (e) {
     if ($('input[name=pledge-sector]').is(':checked')) {
          $.cookie("pledge-sector-complete", true, {path:'/'});
     } else {
          $.cookie("pledge-sector-complete", false, {path:'/'});
     }
     if ($('input[id=pledge-sector-all]').is(':checked')) {
          $.cookie("pledge-sector-all", true, {path:'/'});
     } else {
          $.cookie("pledge-sector-all", false, {path:'/'});
     }

});

$('#sector-playback').hide();

if ($.cookie("pledge-sector-complete") == "true") {
     $('.before-sector-content').hide();
     $('.after-sector-content').show();
     $('#sector-playback').show();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

if ($.cookie("pledge-sector-complete") == "true" && $.cookie("pledge-sector-all") == "true") {
     $('.before-sector-content').show();
     $('.after-sector-content').hide();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

if ($.cookie("pledge-sector-all") == "true") {
     $('#pledge-sector-all').attr('checked','checked');
} else {
     $('#pledge-sector-all').attr('unchecked');
}

// MVS - Jobs
$(".pledge-jobs-continue").on("click", function (e) {
     if ($('input[name=pledge-training]').is(':checked')) {
          $.cookie("pledge-jobs-complete", true, {path:'/'});
     } else {
          $.cookie("pledge-jobs-complete", false, {path:'/'});
     }
     if ($('input[id=pledge-training-all]').is(':checked')) {
          $.cookie("pledge-training-all", true, {path:'/'});
     } else {
          $.cookie("pledge-training-all", false, {path:'/'});
     }
});

if ($.cookie("pledge-jobs-complete") == "true") {
     $('.before-job-content').hide();
     $('.after-job-content').show();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

if ($.cookie("pledge-jobs-complete") == "true" && $.cookie("pledge-training-all") == "true") {
     $('.before-job-content').show();
     $('.after-job-content').hide();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

if ($.cookie("pledge-training-all") == "true") {
     $('#pledge-training-all').attr('checked','checked');
} else {
     $('#pledge-training-all').attr('unchecked');
}



// MVS - Level
$(".pledge-level-continue").on("click", function (e) {
     if ($('input[name=pledge-level]').is(':checked')) {
          $.cookie("pledge-level-complete", true, {path:'/'});
     } else {
          $.cookie("pledge-level-complete", false, {path:'/'});
     }
     if ($('input[id=pledge-level-all]').is(':checked')) {
          $.cookie("pledge-level-all", true, {path:'/'});
     } else {
          $.cookie("pledge-level-all", false, {path:'/'});
     }

});

if ($.cookie("pledge-level-complete") == "true") {
     $('.before-level-content').hide();
     $('.after-level-content').show();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

if ($.cookie("pledge-level-complete") == "true" && $.cookie("pledge-level-all") == "true") {
     $('.before-level-content').show();
     $('.after-level-content').hide();
     // $('li.pledge-section-one strong.govuk-tag').removeClass('govuk-tag--grey').text('completed');
}

if ($.cookie("pledge-level-all") == "true") {
     $('#pledge-level-all').attr('checked','checked');
} else {
     $('#pledge-level-all').attr('unchecked');
}

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
     $.cookie("pledge-tabs-update", true, {path:'/'});
});

$('.pledge-complete-table').hide();
$('.govuk-panel--confirmation.pledge-complete').hide();

// $('.before-pledge').show();
$('.after-pledge').hide();

$('.before-pledge-content').show();
$('.after-pledge-content').hide();

var pledgesNumber = parseInt($('#transfers-tabs .govuk-tabs__list-item[data-tab="two"] .number').text());
$('#transfers-tabs .govuk-tabs__list-item .number').hide();

$('.mvs-pledge-applications').hide();
$('.after-pledge-complete').hide();

if ($.cookie("pledge-complete") == 'true') {
     $('.pledge-complete, .pledge-complete-table').show();
     $('.no-pledges, .no-transfers-mvs').hide();
     // setTimeout(function() {
     //      $('.empty-pledge').slideUp('fast');
     //      $('.mvs-pledge-applications').slideDown('fast');
     //      $.cookie("pledge-complete-and-items-shown", true, {path:'/'});
     // }, 5000);
     $('.before-pledge').hide();
     $('.after-pledge').show();

     $('.transfer-values-prototype .transfer-funds-non-pledge .number').hide();
     $('.transfer-values-prototype .transfer-funds-non-pledge .number.after-pledge').show();

     // Transfers tab
     $('#transfers-tabs .govuk-tabs__list-item[data-tab="two"] .number').show();
     $('#transfers-tabs .govuk-tabs__list-item[data-tab="two"] .number').addClass('active');
     $('#transfers-tabs .govuk-tabs__list-item[data-tab="two"] .number').text(pledgesNumber + 1);

     // $('.multiple-values').show();
     $('.before-pledge-content').hide();
     $('.after-pledge-content').show();

     $('.number-of-pledges').text('1');

     $('.after-pledge-complete').show();
     $('.before-pledge-complete').hide();
}

$(".activate-applications").on("click", function (e) {
     $.cookie("pledge-complete-and-items-shown", true, {path:'/'});
});

if ($.cookie("pledge-complete-and-items-shown") == 'true') {
     $('.pledge-complete').hide();
     $('.empty-pledge').hide();
     $('.mvs-pledge-applications').show();
}

if ($.cookie("pledge-tabs-update") == 'true') {
     // Transfers tab
     // $('#transfers-tabs .govuk-tabs__list-item[data-tab="one"]').addClass('tab-overide-deactive');
     // $('#transfers-tabs .govuk-tabs__list-item[data-tab="two"]').addClass('tab-overide-active');

     // $('#transfers-tabs .govuk-tabs__panel').hide();
     // $('#transfers-tabs #transfer-pledges').show();
}

$("#transfers-tabs .govuk-tabs__list-item").on("click", function (e) {
     $.cookie("pledge-tabs-update", false, {path:'/'});
});

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

$("#mvs-approve-application").on("click", function (e) {
     if ($('input[id=mvs-application-approve]').is(':checked')) {
          $.cookie("pledge-approved", true, {path:'/'});
          $.cookie("pledge-approved-banner", true, {path:'/'});
     } else {
          $.cookie("pledge-approved", false, {path:'/'});
          $.cookie("pledge-approved-banner", false, {path:'/'});
     }
});


var applicationsNumber = parseInt($('.pledge-number.applications').text());
var shortlistNumber = parseInt($('.pledge-number.shortlist').text());
var approvedNumber = parseInt($('.pledge-number.approved').text());
var rejectedNumber = parseInt($('.pledge-approved-table').text());
var pledgeNumberApproved = parseInt($('.pledge-approved-table').text());

if ($.cookie("pledge-approved") == 'true') {
     $('.before-approval').hide();
     $('.after-approval').show();
     $('.application.application-one').hide();
     $('.approved-not-complete').hide();
     $('.application.approved-one').show();
     $('.pledge-number.applications').text(applicationsNumber - 1);
     $('.pledge-approved-table').text(pledgeNumberApproved + 1);
     $('.pledge-rejected-table').text(rejectedNumber + 1);
     $('.pledge-number.approved').text(approvedNumber + 1).addClass('active');

     // Table details
     $('#order-applications-table tr[data-table-row="one"]').find('.awaiting').hide();
     $('#order-applications-table tr[data-table-row="one"]').find('.application-approved').show();

     // Pledge details page
     $('.pledge-approved-button, .pledge-approved-info').hide();
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
$('.pledge-rejected').hide();

$("#reject-pledge-continue").on("click", function (e) {
     $.cookie("pledge-rejected-banner", true, {path:'/'});

     if ($('input[id=reject-application]').is(':checked')) {
          $.cookie("pledge-rejected", true, {path:'/'});
     } else {
          $.cookie("pledge-rejected", false, {path:'/'});
     }
});

$("#mvs-reject-application").on("click", function (e) {
     if ($('input[id=mvs-application-reject-2]').is(':checked')) {
          $.cookie("pledge-rejected-banner", true, {path:'/'});
          $.cookie("mvs-pledge-rejected", true, {path:'/'});
     } else {
          $.cookie("pledge-rejected-banner", false, {path:'/'});
          $.cookie("mvs-pledge-rejected", false, {path:'/'});
     }
});


if ($.cookie("pledge-rejected") == 'true' || $.cookie("mvs-pledge-rejected") == 'true') {
     $('.application.application-two').hide();
     $('.rejected-not-complete').hide();
     $('.application.rejected-one').show();
     $('.pledge-number.applications').text(applicationsNumber - 1);
     $('.pledge-number.rejected').text(approvedNumber + 1).addClass('active');

     // Table details
     $('#order-applications-table tr[data-table-row="two"]').find('.awaiting').hide();
     $('#order-applications-table tr[data-table-row="two"]').find('.application-rejected').show();

     // Pledge details page
     $('.pledge-rejected-button, .pledge-rejected-info').hide();
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

// Pledge deleted
$("#pledge-delete-continue").on("click", function (e) {
     if ($('input[id=delete-pledge]').is(':checked')) {
          $.cookie("pledge-deleted", true, {path:'/'});
     } else {
          $.cookie("pledge-deleted", false, {path:'/'});
     }
});

if ($.cookie("pledge-deleted") == 'true') {
     $.cookie("pledge-complete", false, {path:'/'});
     $('.pledge-complete-table').hide();
}

// New pledge
$("#create-pledge-button").on("click", function (e) {
     $.cookie("pledge-deleted", false, {path:'/'});
});


// Private Transfer
$("#private-transfer-route").on("click", function (e) {
     if ($('input[id=transfer-training-course-yes]').prop('checked') == true) {
          $.cookie("private-transfer-route", true, {path:'/'});
     } else if ($('input[id=transfer-training-course-no]').prop('checked') == true) {
          $.cookie("private-transfer-route", false, {path:'/'});
     }
});

if ($.cookie("private-transfer-route") == 'true') {
     $('.set-amount').show();
     $('.upto-amount').hide();

} else if ($.cookie("private-transfer-route") == 'false') {
     $('.set-amount').hide();
     $('.upto-amount').show();
}

var transfersNumber = parseInt($('#transfers-tabs .govuk-tabs__list-item[data-tab="one"] .number').text());

$('.transfer-complete-table, .after-transfer').hide();
$('.no-transfers').show();

$("#private-transfer-complete").on("click", function (e) {
     $.cookie("private-transfer-complete", true, {path:'/'});
});

if ($.cookie("private-transfer-complete") == 'true') {
     $('.transfer-complete-table').show();
     $('.no-transfers').hide();

     // Numbers info
     $('.before-transfer').hide();
     $('.after-transfer').show();

     // TABS INFO
     $('#transfers-tabs .govuk-tabs__list-item[data-tab="one"] .number').show();
     $('#transfers-tabs .govuk-tabs__list-item[data-tab="one"] .number').addClass('active');
     $('#transfers-tabs .govuk-tabs__list-item[data-tab="one"] .number').text(transfersNumber + 1);
}

$(".after-transfer-and-pledge").hide();

if ($.cookie("pledge-complete") == 'true' && $.cookie("private-transfer-complete") == 'true') {
     $('.after-pledge, .after-transfer').hide();
     $(".after-transfer-and-pledge").show();
}

// !!!!!!!!!!!!!!!!!!!!!! UNHAPPY PATH - ONE

// var financePledgeFundUnhappyPath = parseInt($('#unhappy-finance .pledge-funds .value-format').text());
// var financePledgeFundSpentUnhappyPath = parseInt($('#unhappy-finance .pledge-funds-spent .value-format').text());
var financePledgeFundUnhappyPath = 50000;
var financePledgeFundSpentUnhappyPath = 0;

$("#approve-pledge-unhappy-1").on("click", function (e) {
     $.cookie("pledge-unhappy-1-approved", true, {path:'/'});
});

$("#approve-pledge-unhappy-2").on("click", function (e) {
     $.cookie("pledge-unhappy-2-approved", true, {path:'/'});
});

$("#approve-pledge-unhappy-3").on("click", function (e) {
     $.cookie("pledge-unhappy-3-approved", true, {path:'/'});
});

$('.approved-panel-1, .approved-panel-2, .approved-panel-3').hide();

// if ($.cookie("pledge-unhappy-1-approved") == 'true' || $.cookie("pledge-unhappy-2-approved") == 'true' || $.cookie("pledge-unhappy-3-approved") == 'true') {
//      $('#unhappy-finance .before-approval').hide();
//      $('#unhappy-finance .after-approval').show();
// }

if ($.cookie("pledge-unhappy-1-approved") == 'true') {

     $('.approved-panel-1').show();

     // Table details
     $('#order-applications-table-unhappy tr[data-table-row="one"]').find('.awaiting').hide();
     $('#order-applications-table-unhappy tr[data-table-row="one"]').find('.application-approved').show();

     // Pledge details page
     $('.unhappy-button-1').hide();
     $('#unhappy-button-1-back').removeClass('govuk-link-secondary');

     $('#unhappy-finance .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPath+20000);
     $('#unhappy-finance .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPath-20000);
}

if ($.cookie("pledge-unhappy-2-approved") == 'true') {

     $('.approved-panel-2').show();

     // Table details
     $('#order-applications-table-unhappy tr[data-table-row="two"]').find('.awaiting').hide();
     $('#order-applications-table-unhappy tr[data-table-row="two"]').find('.application-approved').show();

     // Pledge details page
     $('.unhappy-button-2').hide();
     $('#unhappy-button-2-back').removeClass('govuk-link-secondary');

     $('#unhappy-finance .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPath+10000);
     $('#unhappy-finance .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPath-10000);

}

if ($.cookie("pledge-unhappy-3-approved") == 'true') {

     $('.approved-panel-3').show();

     // Table details
     $('#order-applications-table-unhappy tr[data-table-row="three"]').find('.awaiting').hide();
     $('#order-applications-table-unhappy tr[data-table-row="three"]').find('.application-approved').show();

     // Pledge details page
     $('.unhappy-button-3').hide();
     $('#unhappy-button-3-back').removeClass('govuk-link-secondary');

     $('#unhappy-finance .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPath+10000);
     $('#unhappy-finance .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPath-10000);

}

if ($.cookie("pledge-unhappy-1-approved") == 'true' && $.cookie("pledge-unhappy-2-approved") == 'true') {
     $('#unhappy-finance .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPath+30000);
     $('#unhappy-finance .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPath-30000);
}

$('#no-more-funds, .approved-panel-4, .application-funds').hide();
$('.after-funds').hide();

if ($.cookie("pledge-unhappy-1-approved") == 'true' && $.cookie("pledge-unhappy-2-approved") == 'true' && $.cookie("pledge-unhappy-3-approved") == 'true') {
     $('#no-more-funds, .approved-panel-4').show();

     $('#unhappy-finance .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPath+40000);
     $('#unhappy-finance .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPath-40000);

     $('#unhappy-finance .pledge-funds-remaining').addClass('alert');

     $('#order-applications-table-unhappy tr[data-table-row="four"]').addClass('error');
     $('#order-applications-table-unhappy tr[data-table-row="four"]').find('.awaiting').hide();
     $('#order-applications-table-unhappy tr[data-table-row="four"]').find('.application-funds').show();

     $('.unhappy-button-4').hide();
     $('#unhappy-button-4-back').removeClass('govuk-link-secondary');

     $('.before-funds').hide();
     $('.after-funds').show();
}

// !!!!!!!!!!!!!!!!!!!!!! UNHAPPY PATH - TWO

var financePledgeFundUnhappyPathV2 = parseInt(30000);
var financePledgeFundSpentUnhappyPathV2 = parseInt(0);

$("#approve-pledge-unhappy-V2-1").on("click", function (e) {
     $.cookie("pledge-unhappy-V2-1-approved", true, {path:'/'});
});

$("#approve-pledge-unhappy-V2-2").on("click", function (e) {
     $.cookie("pledge-unhappy-V2-2-approved", true, {path:'/'});
});

$("#approve-pledge-unhappy-V2-3").on("click", function (e) {
     $.cookie("pledge-unhappy-V2-3-approved", true, {path:'/'});
});

$('.approved-panel-V2-1, .approved-panel-V2-2, .approved-panel-V2-3').hide();

if ($.cookie("pledge-unhappy-V2-1-approved") == 'true') {

     $('.approved-panel-V2-1').show();

     // Table details
     $('#order-applications-table-unhappy-V2 tr[data-table-row="one"]').find('.awaiting').hide();
     $('#order-applications-table-unhappy-V2 tr[data-table-row="one"]').find('.application-approved').show();

     // Pledge details page
     $('.unhappy-button-V2-1').hide();
     $('#unhappy-button-V2-1-back').removeClass('govuk-link-secondary');

     $('#unhappy-finance-V2 .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPathV2+10000);
     $('#unhappy-finance-V2 .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPathV2-10000);
}

if ($.cookie("pledge-unhappy-V2-2-approved") == 'true') {

     $('.approved-panel-V2-2').show();

     // Table details
     $('#order-applications-table-unhappy-V2 tr[data-table-row="two"]').find('.awaiting').hide();
     $('#order-applications-table-unhappy-V2 tr[data-table-row="two"]').find('.application-approved').show();

     // Pledge details page
     $('.unhappy-button-V2-2').hide();
     $('#unhappy-button-V2-2-back').removeClass('govuk-link-secondary');

     $('#unhappy-finance-V2 .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPathV2+10000);
     $('#unhappy-finance-V2 .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPathV2-10000);

}

if ($.cookie("pledge-unhappy-V2-3-approved") == 'true') {

     $('.approved-panel-V2-3').show();

     // Table details
     $('#order-applications-table-unhappy-V2 tr[data-table-row="three"]').find('.awaiting').hide();
     $('#order-applications-table-unhappy-V2 tr[data-table-row="three"]').find('.application-approved').show();

     // Pledge details page
     $('.unhappy-button-V2-3').hide();
     $('#unhappy-button-V2-3-back').removeClass('govuk-link-secondary');

     $('#unhappy-finance-V2 .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPathV2+10000);
     $('#unhappy-finance-V2 .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPathV2-10000);

}

if ($.cookie("pledge-unhappy-V2-1-approved") == 'true' && $.cookie("pledge-unhappy-V2-2-approved") == 'true') {
     $('#unhappy-finance-V2 .pledge-funds-spent .value-format').text(financePledgeFundSpentUnhappyPathV2+20000);
     $('#unhappy-finance-V2 .pledge-funds-remaining .value-format').text(financePledgeFundUnhappyPathV2-20000);
}

if ($.cookie("pledge-unhappy-V2-1-approved") == 'true' && $.cookie("pledge-unhappy-V2-2-approved") == 'true' && $.cookie("pledge-unhappy-V2-3-approved") == 'true') {
     $('#unhappy-finance-V2 .pledge-funds-spent .value-format').text(parseInt(financePledgeFundSpentUnhappyPathV2+30000));
     $('#unhappy-finance-V2 .pledge-funds-remaining .value-format').text(parseInt(financePledgeFundUnhappyPathV2-30000));

     $('#unhappy-finance-V2 .pledge-funds-remaining').addClass('alert');

     $.cookie("pledge-unhappy-V2-application-removed", true, {path:'/'});

}


$('#cancelled-banner, .after-cancellation').hide();

if ($.cookie("pledge-unhappy-V2-application-removed") == 'true') {
     setTimeout(function() {
          $('#unhappy-finance-V2 .pledge-funds-spent .value-format').text('20,000');
          $('#unhappy-finance-V2 .pledge-funds-remaining .value-format').text('10,000');

          $('#unhappy-finance-V2 .pledge-funds-remaining').removeClass('alert');

          $('#cancelled-banner').slideDown();

          // Table details
          $('#order-applications-table-unhappy-V2 tr[data-table-row="one"]').addClass('cancelled');
          $('#order-applications-table-unhappy-V2 tr[data-table-row="one"]').find('.application-approved').hide();
          $('#order-applications-table-unhappy-V2 tr[data-table-row="one"]').find('.application-cancelled').show();
     }, 5000);

     $('.before-funds').hide();
     $('.after-cancellation').show();
     $('.approved-panel-V2-1').hide();
     $('.cancelled-panel').show();
}

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - END -- !!!!!!!!!!!!!!!!!!!!!!!! //
