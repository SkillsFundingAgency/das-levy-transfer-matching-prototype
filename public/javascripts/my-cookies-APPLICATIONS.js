/// APPLICATION
$('#applications-action').on("click", function (e) {

     // SHORTLIST ITEMS
     if ($('#type-of-action').val() == 'shortlist') {
          $.cookie("shortlist_active", true, {path:'/'});
          $.cookie("number_of_applications", parseInt($(":checkbox:checked").length), {path:'/'});

          if ($('input[id=application_select_1]').is(':checked')) {
               $.cookie("application_select_1", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_2]').is(':checked')) {
               $.cookie("application_select_2", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_3]').is(':checked')) {
               $.cookie("application_select_3", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_4]').is(':checked')) {
               $.cookie("application_select_4", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_5]').is(':checked')) {
               $.cookie("application_select_5", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_6]').is(':checked')) {
               $.cookie("application_select_6", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_7]').is(':checked')) {
               $.cookie("application_select_7", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_8]').is(':checked')) {
               $.cookie("application_select_8", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_9]').is(':checked')) {
               $.cookie("application_select_9", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_10]').is(':checked')) {
               $.cookie("application_select_10", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_11]').is(':checked')) {
               $.cookie("application_select_11", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_12]').is(':checked')) {
               $.cookie("application_select_12", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_13]').is(':checked')) {
               $.cookie("application_select_13", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_14]').is(':checked')) {
               $.cookie("application_select_14", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_15]').is(':checked')) {
               $.cookie("application_select_15", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_16]').is(':checked')) {
               $.cookie("application_select_16", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_17]').is(':checked')) {
               $.cookie("application_select_17", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_18]').is(':checked')) {
               $.cookie("application_select_18", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_19]').is(':checked')) {
               $.cookie("application_select_19", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_20]').is(':checked')) {
               $.cookie("application_select_20", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_21]').is(':checked')) {
               $.cookie("application_select_21", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_22]').is(':checked')) {
               $.cookie("application_select_22", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_23]').is(':checked')) {
               $.cookie("application_select_23", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_24]').is(':checked')) {
               $.cookie("application_select_24", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_25]').is(':checked')) {
               $.cookie("application_select_25", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_26]').is(':checked')) {
               $.cookie("application_select_26", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_27]').is(':checked')) {
               $.cookie("application_select_27", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_28]').is(':checked')) {
               $.cookie("application_select_28", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_29]').is(':checked')) {
               $.cookie("application_select_29", 'shortlisted', {path:'/'});
          }
          if ($('input[id=application_select_30]').is(':checked')) {
               $.cookie("application_select_30", 'shortlisted', {path:'/'});
          }
     }

     // REJECTED ITEMS
     if ($('#type-of-action').val() == 'reject') {
          $.cookie("number_of_applications_rejected", parseInt($(":checkbox:checked").length), {path:'/'});

          if ($('input[id=application_select_1]').is(':checked')) {
               $.cookie("application_select_1", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_2]').is(':checked')) {
               $.cookie("application_select_2", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_3]').is(':checked')) {
               $.cookie("application_select_3", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_4]').is(':checked')) {
               $.cookie("application_select_4", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_5]').is(':checked')) {
               $.cookie("application_select_5", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_6]').is(':checked')) {
               $.cookie("application_select_6", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_7]').is(':checked')) {
               $.cookie("application_select_7", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_8]').is(':checked')) {
               $.cookie("application_select_8", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_9]').is(':checked')) {
               $.cookie("application_select_9", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_10]').is(':checked')) {
               $.cookie("application_select_10", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_11]').is(':checked')) {
               $.cookie("application_select_11", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_12]').is(':checked')) {
               $.cookie("application_select_12", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_13]').is(':checked')) {
               $.cookie("application_select_13", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_14]').is(':checked')) {
               $.cookie("application_select_14", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_15]').is(':checked')) {
               $.cookie("application_select_15", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_16]').is(':checked')) {
               $.cookie("application_select_16", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_17]').is(':checked')) {
               $.cookie("application_select_17", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_18]').is(':checked')) {
               $.cookie("application_select_18", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_19]').is(':checked')) {
               $.cookie("application_select_19", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_20]').is(':checked')) {
               $.cookie("application_select_20", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_21]').is(':checked')) {
               $.cookie("application_select_21", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_22]').is(':checked')) {
               $.cookie("application_select_22", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_23]').is(':checked')) {
               $.cookie("application_select_23", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_24]').is(':checked')) {
               $.cookie("application_select_24", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_25]').is(':checked')) {
               $.cookie("application_select_25", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_26]').is(':checked')) {
               $.cookie("application_select_26", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_27]').is(':checked')) {
               $.cookie("application_select_27", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_28]').is(':checked')) {
               $.cookie("application_select_28", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_29]').is(':checked')) {
               $.cookie("application_select_29", 'rejected', {path:'/'});
          }
          if ($('input[id=application_select_30]').is(':checked')) {
               $.cookie("application_select_30", 'rejected', {path:'/'});
          }
     }

     // APPROVED ITEMS
     if ($('#type-of-action').val() == 'approve') {
          $.cookie("number_of_applications_approved", parseInt($(":checkbox:checked").length), {path:'/'});

          if ($('input[id=application_select_1]').is(':checked')) {
               $.cookie("application_select_1", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_2]').is(':checked')) {
               $.cookie("application_select_2", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_3]').is(':checked')) {
               $.cookie("application_select_3", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_4]').is(':checked')) {
               $.cookie("application_select_4", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_5]').is(':checked')) {
               $.cookie("application_select_5", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_6]').is(':checked')) {
               $.cookie("application_select_6", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_7]').is(':checked')) {
               $.cookie("application_select_7", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_8]').is(':checked')) {
               $.cookie("application_select_8", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_9]').is(':checked')) {
               $.cookie("application_select_9", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_10]').is(':checked')) {
               $.cookie("application_select_10", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_11]').is(':checked')) {
               $.cookie("application_select_11", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_12]').is(':checked')) {
               $.cookie("application_select_12", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_13]').is(':checked')) {
               $.cookie("application_select_13", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_14]').is(':checked')) {
               $.cookie("application_select_14", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_15]').is(':checked')) {
               $.cookie("application_select_15", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_16]').is(':checked')) {
               $.cookie("application_select_16", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_17]').is(':checked')) {
               $.cookie("application_select_17", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_18]').is(':checked')) {
               $.cookie("application_select_18", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_19]').is(':checked')) {
               $.cookie("application_select_19", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_20]').is(':checked')) {
               $.cookie("application_select_20", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_21]').is(':checked')) {
               $.cookie("application_select_21", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_22]').is(':checked')) {
               $.cookie("application_select_22", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_23]').is(':checked')) {
               $.cookie("application_select_23", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_24]').is(':checked')) {
               $.cookie("application_select_24", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_25]').is(':checked')) {
               $.cookie("application_select_25", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_26]').is(':checked')) {
               $.cookie("application_select_26", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_27]').is(':checked')) {
               $.cookie("application_select_27", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_28]').is(':checked')) {
               $.cookie("application_select_28", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_29]').is(':checked')) {
               $.cookie("application_select_29", 'approved', {path:'/'});
          }
          if ($('input[id=application_select_30]').is(':checked')) {
               $.cookie("application_select_30", 'approved', {path:'/'});
          }
     }

     // REMOVED ITEMS
     if ($('#type-of-action').val() == 'remove-from-shortlist') {
          $.cookie("number_of_applications_removed", parseInt($(":checkbox:checked").length), {path:'/'});

          if ($('input[id=application_select_1]').is(':checked')) {
               $.cookie("application_select_1", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_2]').is(':checked')) {
               $.cookie("application_select_2", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_3]').is(':checked')) {
               $.cookie("application_select_3", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_4]').is(':checked')) {
               $.cookie("application_select_4", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_5]').is(':checked')) {
               $.cookie("application_select_5", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_6]').is(':checked')) {
               $.cookie("application_select_6", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_7]').is(':checked')) {
               $.cookie("application_select_7", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_8]').is(':checked')) {
               $.cookie("application_select_8", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_9]').is(':checked')) {
               $.cookie("application_select_9", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_10]').is(':checked')) {
               $.cookie("application_select_10", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_11]').is(':checked')) {
               $.cookie("application_select_11", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_12]').is(':checked')) {
               $.cookie("application_select_12", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_13]').is(':checked')) {
               $.cookie("application_select_13", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_14]').is(':checked')) {
               $.cookie("application_select_14", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_15]').is(':checked')) {
               $.cookie("application_select_15", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_16]').is(':checked')) {
               $.cookie("application_select_16", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_17]').is(':checked')) {
               $.cookie("application_select_17", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_18]').is(':checked')) {
               $.cookie("application_select_18", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_19]').is(':checked')) {
               $.cookie("application_select_19", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_20]').is(':checked')) {
               $.cookie("application_select_20", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_21]').is(':checked')) {
               $.cookie("application_select_21", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_22]').is(':checked')) {
               $.cookie("application_select_22", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_23]').is(':checked')) {
               $.cookie("application_select_23", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_24]').is(':checked')) {
               $.cookie("application_select_24", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_25]').is(':checked')) {
               $.cookie("application_select_25", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_26]').is(':checked')) {
               $.cookie("application_select_26", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_27]').is(':checked')) {
               $.cookie("application_select_27", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_28]').is(':checked')) {
               $.cookie("application_select_28", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_29]').is(':checked')) {
               $.cookie("application_select_29", 'removed', {path:'/'});
          }
          if ($('input[id=application_select_30]').is(':checked')) {
               $.cookie("application_select_30", 'removed', {path:'/'});
          }
     }



});

var originalNumber = parseInt($('.shortlist-button.float-right .number').text());

if ($.cookie("shortlist_active") == 'true') {
     $('.shortlist-button.float-right .number').text(parseInt(originalNumber + $.cookie("number_of_applications")));
     $('.shortlist-number').text($.cookie("number_of_applications"));
}

if ($.cookie("number_of_applications_removed") && $.cookie("shortlist_active") == 'true') {
     $('.shortlist-button.float-right .number').text(parseInt($.cookie("number_of_applications") - $.cookie("number_of_applications_removed")));
     $('.shortlist-number').text(parseInt($.cookie("number_of_applications") - $.cookie("number_of_applications_removed")));
}


// ADD SHORTLIST ITEMS
if ($.cookie("application_select_1") == 'shortlisted') {
     $('#new-applications-table tr.row-1').addClass('shortlisted-row');
     $('.shortlist-table tr.row-1').show();
}
if ($.cookie("application_select_2") == 'shortlisted') {
     $('#new-applications-table tr.row-2').addClass('shortlisted-row');
     $('.shortlist-table tr.row-2').show();
}
if ($.cookie("application_select_3") == 'shortlisted') {
     $('#new-applications-table tr.row-3').addClass('shortlisted-row');
     $('.shortlist-table tr.row-3').show();
}
if ($.cookie("application_select_4") == 'shortlisted') {
     $('#new-applications-table tr.row-4').addClass('shortlisted-row');
     $('.shortlist-table tr.row-4').show();
}
if ($.cookie("application_select_5") == 'shortlisted') {
     $('#new-applications-table tr.row-5').addClass('shortlisted-row');
     $('.shortlist-table tr.row-5').show();
}
if ($.cookie("application_select_6") == 'shortlisted') {
     $('#new-applications-table tr.row-6').addClass('shortlisted-row');
     $('.shortlist-table tr.row-6').show();
}
if ($.cookie("application_select_7") == 'shortlisted') {
     $('#new-applications-table tr.row-7').addClass('shortlisted-row');
     $('.shortlist-table tr.row-7').show();
}
if ($.cookie("application_select_8") == 'shortlisted') {
     $('#new-applications-table tr.row-8').addClass('shortlisted-row');
     $('.shortlist-table tr.row-8').show();
}
if ($.cookie("application_select_9") == 'shortlisted') {
     $('#new-applications-table tr.row-9').addClass('shortlisted-row');
     $('.shortlist-table tr.row-9').show();
}
if ($.cookie("application_select_10") == 'shortlisted') {
     $('#new-applications-table tr.row-10').addClass('shortlisted-row');
     $('.shortlist-table tr.row-10').show();
}
if ($.cookie("application_select_11") == 'shortlisted') {
     $('#new-applications-table tr.row-11').addClass('shortlisted-row');
     $('.shortlist-table tr.row-11').show();
}
if ($.cookie("application_select_12") == 'shortlisted') {
     $('#new-applications-table tr.row-12').addClass('shortlisted-row');
     $('.shortlist-table tr.row-12').show();
}
if ($.cookie("application_select_13") == 'shortlisted') {
     $('#new-applications-table tr.row-13').addClass('shortlisted-row');
     $('.shortlist-table tr.row-13').show();
}
if ($.cookie("application_select_14") == 'shortlisted') {
     $('#new-applications-table tr.row-14').addClass('shortlisted-row');
     $('.shortlist-table tr.row-14').show();
}
if ($.cookie("application_select_15") == 'shortlisted') {
     $('#new-applications-table tr.row-15').addClass('shortlisted-row');
     $('.shortlist-table tr.row-15').show();
}
if ($.cookie("application_select_16") == 'shortlisted') {
     $('#new-applications-table tr.row-16').addClass('shortlisted-row');
     $('.shortlist-table tr.row-16').show();
}
if ($.cookie("application_select_17") == 'shortlisted') {
     $('#new-applications-table tr.row-17').addClass('shortlisted-row');
     $('.shortlist-table tr.row-17').show();
}
if ($.cookie("application_select_18") == 'shortlisted') {
     $('#new-applications-table tr.row-18').addClass('shortlisted-row');
     $('.shortlist-table tr.row-18').show();
}
if ($.cookie("application_select_19") == 'shortlisted') {
     $('#new-applications-table tr.row-19').addClass('shortlisted-row');
     $('.shortlist-table tr.row-19').show();
}
if ($.cookie("application_select_20") == 'shortlisted') {
     $('#new-applications-table tr.row-20').addClass('shortlisted-row');
     $('.shortlist-table tr.row-20').show();
}
if ($.cookie("application_select_21") == 'shortlisted') {
     $('#new-applications-table tr.row-21').addClass('shortlisted-row');
     $('.shortlist-table tr.row-21').show();
}
if ($.cookie("application_select_22") == 'shortlisted') {
     $('#new-applications-table tr.row-22').addClass('shortlisted-row');
     $('.shortlist-table tr.row-22').show();
}
if ($.cookie("application_select_23") == 'shortlisted') {
     $('#new-applications-table tr.row-23').addClass('shortlisted-row');
     $('.shortlist-table tr.row-23').show();
}
if ($.cookie("application_select_24") == 'shortlisted') {
     $('#new-applications-table tr.row-24').addClass('shortlisted-row');
     $('.shortlist-table tr.row-24').show();
}
if ($.cookie("application_select_25") == 'shortlisted') {
     $('#new-applications-table tr.row-25').addClass('shortlisted-row');
     $('.shortlist-table tr.row-25').show();
}
if ($.cookie("application_select_26") == 'shortlisted') {
     $('#new-applications-table tr.row-26').addClass('shortlisted-row');
     $('.shortlist-table tr.row-26').show();
}
if ($.cookie("application_select_27") == 'shortlisted') {
     $('#new-applications-table tr.row-27').addClass('shortlisted-row');
     $('.shortlist-table tr.row-27').show();
}
if ($.cookie("application_select_28") == 'shortlisted') {
     $('#new-applications-table tr.row-28').addClass('shortlisted-row');
     $('.shortlist-table tr.row-28').show();
}
if ($.cookie("application_select_29") == 'shortlisted') {
     $('#new-applications-table tr.row-29').addClass('shortlisted-row');
     $('.shortlist-table tr.row-29').show();
}
if ($.cookie("application_select_30") == 'shortlisted') {
     $('#new-applications-table tr.row-30').addClass('shortlisted-row');
     $('.shortlist-table tr.row-30').show();
}

// REJECT ITEMS
if ($.cookie("number_of_applications_rejected")) {
     // var rejectedNumber = parseInt($.cookie('number_of_applications_rejected'));
     // $('select#type-of-applications option:contains("Rejected")').text("Rejected - (" + (rejectedNumber+4) + ")");
     $('.rejected-number').text($.cookie("number_of_applications_rejected"));
}

$('.application_rejection').hide();

if ($.cookie("application_select_1") == 'rejected') {
     $('#new-applications-table tr.row-1').addClass('rejected-row').data('status', 5);
     $('.application_1').show();
}
if ($.cookie("application_select_2") == 'rejected') {
     $('#new-applications-table tr.row-2').addClass('rejected-row').data('status', 5);
     $('.application_2').show();
}
if ($.cookie("application_select_3") == 'rejected') {
     $('#new-applications-table tr.row-3').addClass('rejected-row').data('status', 5);
     $('.application_3').show();
}
if ($.cookie("application_select_4") == 'rejected') {
     $('#new-applications-table tr.row-4').addClass('rejected-row').data('status', 5);
     $('.application_4').show();
}
if ($.cookie("application_select_5") == 'rejected') {
     $('#new-applications-table tr.row-5').addClass('rejected-row').data('status', 5);
     $('.application_5').show();
}
if ($.cookie("application_select_6") == 'rejected') {
     $('#new-applications-table tr.row-6').addClass('rejected-row').data('status', 5);
     $('.application_6').show();
}
if ($.cookie("application_select_7") == 'rejected') {
     $('#new-applications-table tr.row-7').addClass('rejected-row').data('status', 5);
     $('.application_7').show();
}
if ($.cookie("application_select_8") == 'rejected') {
     $('#new-applications-table tr.row-8').addClass('rejected-row').data('status', 5);
     $('.application_8').show();
}
if ($.cookie("application_select_9") == 'rejected') {
     $('#new-applications-table tr.row-9').addClass('rejected-row').data('status', 5);
     $('.application_9').show();
}
if ($.cookie("application_select_10") == 'rejected') {
     $('#new-applications-table tr.row-10').addClass('rejected-row').data('status', 5);
     $('.application_10').show();
}
if ($.cookie("application_select_11") == 'rejected') {
     $('#new-applications-table tr.row-11').addClass('rejected-row').data('status', 5);
     $('.application_11').show();
}
if ($.cookie("application_select_12") == 'rejected') {
     $('#new-applications-table tr.row-12').addClass('rejected-row').data('status', 5);
     $('.application_12').show();
}
if ($.cookie("application_select_13") == 'rejected') {
     $('#new-applications-table tr.row-13').addClass('rejected-row').data('status', 5);
     $('.application_13').show();
}
if ($.cookie("application_select_14") == 'rejected') {
     $('#new-applications-table tr.row-14').addClass('rejected-row').data('status', 5);
     $('.application_14').show();
}
if ($.cookie("application_select_15") == 'rejected') {
     $('#new-applications-table tr.row-15').addClass('rejected-row').data('status', 5);
     $('.application_15').show();
}
if ($.cookie("application_select_16") == 'rejected') {
     $('#new-applications-table tr.row-16').addClass('rejected-row').data('status', 5);
     $('.application_16').show();
}
if ($.cookie("application_select_17") == 'rejected') {
     $('#new-applications-table tr.row-17').addClass('rejected-row').data('status', 5);
     $('.application_17').show();
}
if ($.cookie("application_select_18") == 'rejected') {
     $('#new-applications-table tr.row-18').addClass('rejected-row').data('status', 5);
     $('.application_18').show();
}
if ($.cookie("application_select_19") == 'rejected') {
     $('#new-applications-table tr.row-19').addClass('rejected-row').data('status', 5);
     $('.application_19').show();
}
if ($.cookie("application_select_20") == 'rejected') {
     $('#new-applications-table tr.row-20').addClass('rejected-row').data('status', 5);
     $('.application_20').show();
}
if ($.cookie("application_select_21") == 'rejected') {
     $('#new-applications-table tr.row-21').addClass('rejected-row').data('status', 5);
     $('.application_21').show();
}
if ($.cookie("application_select_22") == 'rejected') {
     $('#new-applications-table tr.row-22').addClass('rejected-row').data('status', 5);
     $('.application_22').show();
}
if ($.cookie("application_select_23") == 'rejected') {
     $('#new-applications-table tr.row-23').addClass('rejected-row').data('status', 5);
     $('.application_23').show();
}
if ($.cookie("application_select_24") == 'rejected') {
     $('#new-applications-table tr.row-24').addClass('rejected-row').data('status', 5);
     $('.application_24').show();
}
if ($.cookie("application_select_25") == 'rejected') {
     $('#new-applications-table tr.row-25').addClass('rejected-row').data('status', 5);
     $('.application_25').show();
}
if ($.cookie("application_select_26") == 'rejected') {
     $('#new-applications-table tr.row-26').addClass('rejected-row').data('status', 5);
     $('.application_26').show();
}
if ($.cookie("application_select_27") == 'rejected') {
     $('#new-applications-table tr.row-27').addClass('rejected-row').data('status', 5);
     $('.application_27').show();
}
if ($.cookie("application_select_28") == 'rejected') {
     $('#new-applications-table tr.row-28').addClass('rejected-row').data('status', 5);
     $('.application_28').show();
}
if ($.cookie("application_select_29") == 'rejected') {
     $('#new-applications-table tr.row-29').addClass('rejected-row').data('status', 5);
     $('.application_29').show();
}
if ($.cookie("application_select_30") == 'rejected') {
     $('#new-applications-table tr.row-30').addClass('rejected-row').data('status', 5);
     $('.application_30').show();
}

// APPROVED ITEMS
if ($.cookie("number_of_applications_approved")) {
     // var approvedNumber = parseInt($.cookie('number_of_applications_approved'));
     // $('select#type-of-applications option:contains("Awaiting approval")').text("Awaiting approval - (" + (approvedNumber+15) + ")");
     $('.approval-number').text($.cookie("number_of_applications_approved"));
}

$('.application_approval').hide();

if ($.cookie("application_select_1") == 'approved') {
     $('#new-applications-table tr.row-1').addClass('approved-row').data('status', 3);
     $('.application_1').show();
}
if ($.cookie("application_select_2") == 'approved') {
     $('#new-applications-table tr.row-2').addClass('approved-row').data('status', 3);
     $('.application_2').show();
}
if ($.cookie("application_select_3") == 'approved') {
     $('#new-applications-table tr.row-3').addClass('approved-row').data('status', 3);
     $('.application_3').show();
}
if ($.cookie("application_select_4") == 'approved') {
     $('#new-applications-table tr.row-4').addClass('approved-row').data('status', 3);
     $('.application_4').show();
}
if ($.cookie("application_select_5") == 'approved') {
     $('#new-applications-table tr.row-5').addClass('approved-row').data('status', 3);
     $('.application_5').show();
}
if ($.cookie("application_select_6") == 'approved') {
     $('#new-applications-table tr.row-6').addClass('approved-row').data('status', 3);
     $('.application_6').show();
}
if ($.cookie("application_select_7") == 'approved') {
     $('#new-applications-table tr.row-7').addClass('approved-row').data('status', 3);
     $('.application_7').show();
}
if ($.cookie("application_select_8") == 'approved') {
     $('#new-applications-table tr.row-8').addClass('approved-row').data('status', 3);
     $('.application_8').show();
}
if ($.cookie("application_select_9") == 'approved') {
     $('#new-applications-table tr.row-9').addClass('approved-row').data('status', 3);
     $('.application_9').show();
}
if ($.cookie("application_select_10") == 'approved') {
     $('#new-applications-table tr.row-10').addClass('approved-row').data('status', 3);
     $('.application_10').show();
}
if ($.cookie("application_select_11") == 'approved') {
     $('#new-applications-table tr.row-11').addClass('approved-row').data('status', 3);
     $('.application_11').show();
}
if ($.cookie("application_select_12") == 'approved') {
     $('#new-applications-table tr.row-12').addClass('approved-row').data('status', 3);
     $('.application_12').show();
}
if ($.cookie("application_select_13") == 'approved') {
     $('#new-applications-table tr.row-13').addClass('approved-row').data('status', 3);
     $('.application_13').show();
}
if ($.cookie("application_select_14") == 'approved') {
     $('#new-applications-table tr.row-14').addClass('approved-row').data('status', 3);
     $('.application_14').show();
}
if ($.cookie("application_select_15") == 'approved') {
     $('#new-applications-table tr.row-15').addClass('approved-row').data('status', 3);
     $('.application_15').show();
}
if ($.cookie("application_select_16") == 'approved') {
     $('#new-applications-table tr.row-16').addClass('approved-row').data('status', 3);
     $('.application_16').show();
}
if ($.cookie("application_select_17") == 'approved') {
     $('#new-applications-table tr.row-17').addClass('approved-row').data('status', 3);
     $('.application_17').show();
}
if ($.cookie("application_select_18") == 'approved') {
     $('#new-applications-table tr.row-18').addClass('approved-row').data('status', 3);
     $('.application_18').show();
}
if ($.cookie("application_select_19") == 'approved') {
     $('#new-applications-table tr.row-19').addClass('approved-row').data('status', 3);
     $('.application_19').show();
}
if ($.cookie("application_select_20") == 'approved') {
     $('#new-applications-table tr.row-20').addClass('approved-row').data('status', 3);
     $('.application_20').show();
}
if ($.cookie("application_select_21") == 'approved') {
     $('#new-applications-table tr.row-21').addClass('approved-row').data('status', 3);
     $('.application_21').show();
}
if ($.cookie("application_select_22") == 'approved') {
     $('#new-applications-table tr.row-22').addClass('approved-row').data('status', 3);
     $('.application_22').show();
}
if ($.cookie("application_select_23") == 'approved') {
     $('#new-applications-table tr.row-23').addClass('approved-row').data('status', 3);
     $('.application_23').show();
}
if ($.cookie("application_select_24") == 'approved') {
     $('#new-applications-table tr.row-24').addClass('approved-row').data('status', 3);
     $('.application_24').show();
}
if ($.cookie("application_select_25") == 'approved') {
     $('#new-applications-table tr.row-25').addClass('approved-row').data('status', 3);
     $('.application_25').show();
}
if ($.cookie("application_select_26") == 'approved') {
     $('#new-applications-table tr.row-26').addClass('approved-row').data('status', 3);
     $('.application_26').show();
}
if ($.cookie("application_select_27") == 'approved') {
     $('#new-applications-table tr.row-27').addClass('approved-row').data('status', 3);
     $('.application_27').show();
}
if ($.cookie("application_select_28") == 'approved') {
     $('#new-applications-table tr.row-28').addClass('approved-row').data('status', 3);
     $('.application_28').show();
}
if ($.cookie("application_select_29") == 'approved') {
     $('#new-applications-table tr.row-29').addClass('approved-row').data('status', 3);
     $('.application_29').show();
}
if ($.cookie("application_select_30") == 'approved') {
     $('#new-applications-table tr.row-30').addClass('approved-row').data('status', 3);
     $('.application_30').show();
}
