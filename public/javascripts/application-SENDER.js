// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// $('#sender-check-answers').find('.section-six').hide();

$('#pledge-amount-error, #pledge-amount-error-message').hide();

// Funding
$('#pledge_amount').on("keyup", function (e) {
     var fundingTotal = parseInt($('#pledge_amount').val());
     if (fundingTotal <= 999) {
          $('#pledge-funding-form').attr('action','');
          $('#pledge-amount-container').addClass('govuk-form-group--error');
          // $('#pledge-amount-error-message').addClass('govuk-error-message').removeClass('govuk-hint');
          $('#pledge-amount-error, #pledge-amount-error-message').show();
     } else if (fundingTotal >= 1000) {
          $('#pledge-amount-container').removeClass('govuk-form-group--error');
          $('#pledge-amount-error, #pledge-amount-error-message').hide();
          $('#pledge-funding-form').attr('action','5-new-pledge-details#section-1');
     } else {
          $('#pledge-funding-form').attr('action','5-new-pledge-details#section-1');
     }
});

   // Locations
   $('input#pledge-location-cities').on("click", function (e) {
        $('#pledge-location-form').attr('action','3B-location');
   });

   $('input#pledge-location-regions').on("click", function (e) {
        $('#pledge-location-form').attr('action','3C-location');
   });

   function addAnotherLocation() {
        event.preventDefault();
        locationNumber++;
        $("#locations").append(`
             <div class="govuk-form-group new-location">
                  <label class="govuk-label" for="pledge-location[url${locationNumber}]">Additional location</label>
                  <input class="govuk-input govuk-input--width-20 pledge-location-test" id="pledge-location[url${locationNumber}]" name="pledge-location[url${locationNumber}]" type="text" spellcheck="false">
                  <p class="govuk-body">
                       <a class="govuk-link govuk-link--no-visited-state" data-remove="url${locationNumber}" href="#">remove</a>
                  </p>
             </div>
        `).on("click", "[data-remove]", function () {
        if ($("#locations").data("location-count") === 1) {
             event.preventDefault();
             $(this).closest(".govuk-form-group").remove();
        }
        });
   }

   function removeLocation() {
        event.preventDefault();
        var removeId = $(this).data("remove");
        $("#locations").append(`
             <input id="pledge-location[${removeId}]" name="pledge-location[${removeId}]" type="hidden" value="" />`
        )
        $(this).closest(".govuk-form-group").remove();
   }

   var locationNumber = $("#locations").data("location-count");
   $("#addAnotherLocation").on("click", addAnotherLocation);
   $("[data-remove]").on("click", removeLocation);

   $('.pledge-location-hidden').hide();

   $(document).ready(function(){
        $('#locations').on("click", function (e) {
             $('#pledge-location-all-of-england').removeAttr('checked');
             $('.first-of-type input').show();
             $('.pledge-location-hidden').hide();
        });

        $('#clear-pledge-location-all-of-england').on("click", function (e) {
             $('.first-of-type input').hide();
             $('.new-location').remove();
             $('.pledge-location-hidden').show();
             // alert('working');
        });
   });


// Location - non-javascript
$('.location-error-message, .error-message, #location-input-error').hide();

$('.location-non-javascript').on('input',function(e){
     if ($(this).val() == 'Mancheter') {
          $('#sender-location-non-javascript').attr('action','');
          $('.pledge-location-continue').hide();
          $('.error-message').show();
     } else if ($(this).val() == 'Warwick') {
          $('#sender-location-non-javascript').attr('action','10A-multiple-locations');
     }  else if ($(this).val() == 'Stratford') {
          $('#sender-location-non-javascript').attr('action','10B-multiple-locations');
     } else {
          $('#sender-location-non-javascript').attr('action','5-new-pledge-details#section-2');
          $('.pledge-location-continue').show();
          $('.error-message').hide();
     }
});

$('.error-message').on('click',function(e){
     $('.location-error-message, #location-input-error').show();
     $('.updates-locations').addClass('govuk-form-group--error');
     $('.location-non-javascript').addClass('govuk-input--error');
});

// Confirm location - Error 1
$('#location-confirm-error_1, #location-confirm-error_2, #location-confirm-error_3, #pledge-location-confirmation').hide();

$('input[name=location_duplicate_1]').on('click',function(e){
     $('#pledge-location-confirmation').show();
     $('.confirm-error-message_1').hide();
     $('#location_duplicate_1').attr('action','5-new-pledge-details#section-2');
});

$('.confirm-error-message_1').on('click',function(e){
     $('.location-error-message, #location-confirm-error_1').show();
     $('#confirm-location').addClass('govuk-form-group--error');
});


// Confirm location - Error 2
$('input[name=location_duplicate_2]').on('click',function(e){
     if ($(this).is(':checked') && $('input[name=location_duplicate_3]').is(':checked')) {
          $('#pledge-location-confirmation').show();
          $('.confirm-error-message_2').hide();
     }
});

$('input[name=location_duplicate_3]').on('click',function(e){
     if ($(this).is(':checked') && $('input[name=location_duplicate_2]').is(':checked')) {
          $('#pledge-location-confirmation').show();
          $('.confirm-error-message_2').hide();
     }
});

$('.confirm-error-message_2').on('click',function(e){
     $('.location-error-message').show();
     if ($('input[name=location_duplicate_2]').is(':checked')) {
          $('#confirm-location, #confirm-location_3').addClass('govuk-form-group--error');
          $('#confirm-location_2').removeClass('govuk-form-group--error');
          $('.location-error-message, #location-confirm-error, #location-confirm-error_3').show();
          $('#location-confirm-error_2, .confirm-location_2').hide();
     } else if ($('input[name=location_duplicate_3]').is(':checked')) {
          $('#confirm-location, #confirm-location_2').addClass('govuk-form-group--error');
          $('#confirm-location_3').removeClass('govuk-form-group--error');
          $('.location-error-message, #location-confirm-error, #location-confirm-error_2').show();
          $('#location-confirm-error_3, .confirm-location_3').hide();
     }
});


   // Sectors
   function toggle(source) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
             checkboxes[i].checked = source.checked;
        }
   }

   // $('input[name="pledge-location"]').on("click", function (e) {
   //      // $('input[id="pledge-sector-all"]').prop('checked', false);
   //      var numberChecked = $(":checkbox:checked").length;
   //      // alert(numberChecked);
   //      if (numberChecked <= 15) {
   //           $('input[id="pledge-location-all"]').prop('checked', false);
   //      }
   // });

   $('input[name="pledge-sector"], input[name="pledge_sector"]').on("click", function (e) {
        // $('input[id="pledge-sector-all"]').prop('checked', false);
        var numberChecked = $(":checkbox:checked").length;
        // alert(numberChecked);
        if (numberChecked <= 15) {
             $('input[id="pledge-sector-all"], input[id="pledge_sector_all"]').prop('checked', false);
        }
   });


   // Training
   $('input[name="pledge-training"], input[name="pledge_training"]').on("click", function (e) {
        // $('input[id="pledge-sector-all"]').prop('checked', false);
        var numberChecked = $(":checkbox:checked").length;
        // alert(numberChecked);
        if (numberChecked <= 15) {
             $('input[id="pledge-training-all"], input[id="pledge_training_all"]').prop('checked', false);
        }
   });

   // Level
   $('input[name="pledge-level"], input[name="pledge_level"]').on("click", function (e) {
        // $('input[id="pledge-sector-all"]').prop('checked', false);
        var numberChecked = $(":checkbox:checked").length;
        // alert(numberChecked);
        if (numberChecked <= 6) {
             $('input[id="pledge-level-all"], input[id="pledge_level_all"]').prop('checked', false);
        }
   });

   // Intermediaries
   function addAnotherEmail() {
        event.preventDefault();
        emailNumber++;
        $("#emails").append(`
             <div class="govuk-form-group">
                  <label class="govuk-label" for="pledge-email[url${emailNumber}]"> Additional email address</label>
                  <input class="govuk-input govuk-!-width-three-quarters" id="pledge-email[url${emailNumber}]" name="pledge-email[url${emailNumber}]" type="email" spellcheck="false">
                  <p class="govuk-body">
                       <a class="govuk-link govuk-link--no-visited-state" data-remove="url${emailNumber}" href="#">remove</a>
                  </p>
             </div>
        `).on("click", "[data-remove]", function () {
        if ($("#emails").data("email-count") === 1) {
             event.preventDefault();
             $(this).closest(".govuk-form-group").remove();
        }
        });
   }

   function removeEmail() {
        event.preventDefault();
        var removeId = $(this).data("remove");
        $("#emails").append(`
             <input class="govuk-input govuk-!-width-three-quarters" id="pledge-email[${removeId}]" name="pledge-email[${removeId}]" type="email" spellcheck="false">`
        )
        $(this).closest(".govuk-form-group").remove();
   }

   var emailNumber = $("#emails").data("email-count");
   $("#addAnotherEmail").on("click", addAnotherEmail);
   $("[data-remove]").on("click", removeEmail);

   // Cancel pledge
   $('input[id="pledge-cancel"]').on("click", function (e) {
        $('#pledge-cancel-continue').attr('href','../transfers');
   });

   $('input[id="pledge-cancel-2"]').on("click", function (e) {
        $('#pledge-cancel-continue').attr('href','javascript:history.back()');
   });

   // Application approval - ONE
   $('input[id="mvs-application-approve"]').on("click", function (e) {
        $('#belhavel-form').attr('action','6-approved');
   });

   $('input[id="mvs-application-approve-2"]').on("click", function (e) {
        $('#belhavel-form').attr();
   });

   $('input[id="mvs-application-approve-3"]').on("click", function (e) {
        $('#belhavel-form').attr('action','1-pledge-details');
   });

   // Application approval - TWO
   $('input[id="mvs-application-reject"]').on("click", function (e) {
        $('#cbj-engineering').attr();
   });

   $('input[id="mvs-application-reject-2"]').on("click", function (e) {
        $('#cbj-engineering').attr('action','1-pledge-details');
   });

   $('input[id="mvs-application-reject-3"]').on("click", function (e) {
        $('#cbj-engineering').attr('action','1-pledge-details');
   });

// ACCEPT APPLICATION
$('#accept_application_error_summary, #accept_application_error_text').hide();
$('.form-action').hide();

$('#accept_application').on("click", function (e) {
     if ($('input[name="accept_application"]').is(':checked')) {
          $('#accept_application .govuk-form-group').removeClass('govuk-form-group--error');
          $('#accept_application_error_summary, #accept_application_error_text').hide();
     } else {
          window.scrollTo(0, 0);
          $('#accept_application .govuk-form-group').addClass('govuk-form-group--error');
          $('#accept_application_error_summary, #accept_application_error_text').show();
     }
});


$('#accept_application_error').on("click", function (e) {
     $('#accept_application_error_summary, #accept_application_error_text').show();
     $('#accept_application_form').addClass('govuk-form-group--error');
     window.scrollTo(0, 0);
});

$('input[name="accept_application"]').on("click", function (e) {
     $('.form-action').show();
     $('.error-action').hide();
});
// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - END -- !!!!!!!!!!!!!!!!!!!!!!!! //
