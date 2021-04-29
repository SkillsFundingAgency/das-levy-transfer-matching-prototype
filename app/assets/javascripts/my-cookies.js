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

if ($.cookie("pledge-sector-complete") == "true") {
     $('.before-sector-content').hide();
     $('.after-sector-content').show();
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

if ($.cookie("pledge-complete") == 'true') {
     $('.pledge-complete, .pledge-complete-table').show();
     $('.no-pledges, .no-transfers-mvs').hide();
     $('.pledge-complete').show();
     setTimeout(function() {
          $('.pledge-complete').slideUp('fast');
          $('.empty-pledge').slideUp('fast');
          $('.mvs-pledge-applications').slideDown('fast');
          $.cookie("pledge-complete-and-items-shown", true, {path:'/'});
     }, 5000);
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
}

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
$("#approve-pledge-continue, #mvs-approve-application").on("click", function (e) {
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
     $.cookie("pledge-rejected-banner", true, {path:'/'});
     $.cookie("mvs-pledge-rejected", true, {path:'/'});
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

// $('.before-pledge').show();
// $('.after-pledge').hide();

if ($.cookie("pledge-application-completed") == 'true') {
     $('.no-applications').hide();
     $('.application-complete-table').show();

     $('.application-number.applications').text(receiverApplicationsNumber + 1).addClass('active');
     // $('.application-number.deleted').text(receiverDeletedNumber + 1).addClass('active');

     $('.before-pledge').hide();
     $('.after-pledge').show();

     $('.search-results').addClass('test');
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
     if ($('input[id="delete-application"]').prop('checked') == true) {
          $.cookie("delete-application-completed", true, {path:'/'});
     } else {
          $.cookie("delete-application-completed", false, {path:'/'});
     }
});

$('.application-deleted-table').hide();

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
