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

});

var originalNumber = parseInt($('.shortlist-button.float-right .number').text());

if ($.cookie("shortlist_active") == 'true') {
     $('.shortlist-button.float-right .number').text(parseInt(originalNumber + $.cookie("number_of_applications")));
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
