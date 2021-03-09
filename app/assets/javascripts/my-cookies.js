// =================================== MY COOKIES =================================== //

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// Sender - Funding
$('#pledge-funding-form').attr('action','7-check-answers');

$("#pledge-criteria-continue").on("click", function (e) {
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
if ($.cookie("pledge-location") == "true") {
     $('#sender-check-answers').find('.section-two').show();
} else {
     $('#sender-check-answers').find('.section-two').hide();
}

// Sender - Sector
if ($.cookie("pledge-sector") == "true") {
     $('#sender-check-answers').find('.section-three').show();
} else {
     $('#sender-check-answers').find('.section-three').hide();
}

// Sender - Training
if ($.cookie("pledge-training") == "true") {
     $('#sender-check-answers').find('.section-four').show();
} else {
     $('#sender-check-answers').find('.section-four').hide();
}

// Sender - Level
if ($.cookie("pledge-level") == "true") {
     $('#sender-check-answers').find('.section-five').show();
} else {
     $('#sender-check-answers').find('.section-five').hide();
}

//
