// !!!!!!!!!!!!!!!!!!!!!!!! -- RECEIVER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// Search filter
   $('.no-results').hide();

   function change() {
        var locationFilter = document.querySelectorAll(".search-locations-filter input[type='checkbox']");
        var sectorFilter = document.querySelectorAll(".search-sector-filter input[type='checkbox']");
        var trainingFilter = document.querySelectorAll(".search-training-filter input[type='checkbox']");
        var levelFilter = document.querySelectorAll(".search-level-filter input[type='checkbox']");
        var filters = {
             locations: getClassOfCheckedCheckboxes(locationFilter),
             sectors: getClassOfCheckedCheckboxes(sectorFilter),
             training: getClassOfCheckedCheckboxes(trainingFilter),
             level: getClassOfCheckedCheckboxes(levelFilter)
        };
        filterResults(filters);

        var visibleNumberOfResults = parseInt($(".search-results section:visible").length);
        $('.search-title .filter-number').text(visibleNumberOfResults);

        if (visibleNumberOfResults = 0) {
             $('.no-results').show();
        } else {
             $('.no-results').hide();
        }
   }

   function getClassOfCheckedCheckboxes(checkboxes) {
        var classes = [];

        if (checkboxes && checkboxes.length > 0) {
             for (var i = 0; i < checkboxes.length; i++) {
                  var cb = checkboxes[i];
                  if (cb.checked) {
                       classes.push(cb.getAttribute("rel"));
                  }
             }
        }
        return classes;
   }

   function filterResults(filters) {
        var rElems = document.querySelectorAll(".search-results section");
        var hiddenElems = [];

        if (!rElems || rElems.length <= 0) {
             return;
        }

        for (var i = 0; i < rElems.length; i++) {
             var el = rElems[i];


             if (filters.locations.length > 0) {
                  var isHidden = true;

                  for (var j = 0; j < filters.locations.length; j++) {
                       var filter = filters.locations[j];

                       if (el.classList.contains(filter)) {
                            isHidden = false;
                            break;
                       }
                  }

                  if (isHidden) {
                       hiddenElems.push(el);
                  }

             }

             if (filters.sectors.length > 0) {
                  var isHidden = true;

                  for (var j = 0; j < filters.sectors.length; j++) {
                       var filter = filters.sectors[j];

                       if (el.classList.contains(filter)) {
                            isHidden = false;
                            break;
                       }
                  }

                  if (isHidden) {
                       hiddenElems.push(el);
                  }
             }

             if (filters.training.length > 0) {
                  var isHidden = true;

                  for (var j = 0; j < filters.training.length; j++) {
                       var filter = filters.training[j];

                       if (el.classList.contains(filter)) {
                            isHidden = false;
                            break;
                       }
                  }

                  if (isHidden) {
                       hiddenElems.push(el);
                  }
             }

             if (filters.level.length > 0) {
                  var isHidden = true;

                  for (var j = 0; j < filters.level.length; j++) {
                       var filter = filters.level[j];

                       if (el.classList.contains(filter)) {
                            isHidden = false;
                            break;
                       }
                  }

                  if (isHidden) {
                       hiddenElems.push(el);
                  }
             }

        }

        for (var i = 0; i < rElems.length; i++) {
             rElems[i].style.display = "block";
             // $('.filter-number').text(rElems.length);

        }

        if (hiddenElems.length <= 0) {
             return;
        }

        for (var i = 0; i < hiddenElems.length; i++) {
             hiddenElems[i].style.display = "none";
        }

   }

// LOCATION
$('#apprentice_location_error, #apprentice_location_error_text').hide();
$('.form-action').hide();

$('#accept_funding_error').on("click", function (e) {
     $('#apprentice_location_error, #apprentice_location_error_text').show();
     $('#apprentice_location_section').addClass('govuk-form-group--error');
     $('#apprentice_location').addClass('govuk-input--error');
     window.scrollTo(0, 0);
});

$('input[name="select_apprentice_location"]').on("click", function (e) {
     $('.form-action').show();
     $('.error-action').hide();
});

$('input[name="apprentice_location"]').on("keyup", function (e) {
     $('.form-action').show();
     $('.error-action').hide();
});


   // Pledge application emails
   function addAnotherApplicationEmail() {
        event.preventDefault();
        emailApplicationNumber++;
        $("#pledge-application-emails").append(`
             <div class="govuk-form-group additional-email">
                  <label class="govuk-label" for="pledge-application-email[url${emailApplicationNumber}]"> Additional email address</label>
                  <input class="govuk-input govuk-input--width-20" id="pledge-application-email[url${emailApplicationNumber}]" name="pledge-application-email[url${emailApplicationNumber}]" type="email" spellcheck="false">
                  <p class="govuk-body">
                       <a class="govuk-link govuk-link--no-visited-state" data-remove="url${emailApplicationNumber}" href="#">remove</a>
                  </p>
             </div>
        `).on("click", "[data-remove]", function () {
        if ($("#pledge-application-emails").data("application-email-count") === 1) {
             event.preventDefault();
             $(this).closest(".govuk-form-group").remove();
        }
        alert(removeApplicationId);
        });
   }

   function removeApplicationEmail() {
        event.preventDefault();
        var removeApplicationId = $(this).data("remove");
        $("#pledge-application-emails").append(`
             <input class="govuk-input govuk-input--width-20" id="pledge-application-email[${removeApplicationId}]" name="pledge-application-email[${removeApplicationId}]" type="email" spellcheck="false">`
        )
        $(this).closest(".govuk-form-group").remove();
   }

   var emailApplicationNumber = $("#pledge-application-emails").data("application-email-count");
   $("#addAnotherApplicationEmail").on("click", addAnotherApplicationEmail);
   $("[data-remove]").on("click", removeApplicationEmail);


   // Pledge shortlist
   $('#pledge-shortlist .application').hide();
   $('.applications-empty').hide();

   $('.shortlist').on("click", function (e) {
        e.preventDefault();
        $(this).closest('.application').hide();

        var newApplicationNumber = parseInt($('.pledge-number.applications').text());
        var newShortlistNumber = parseInt($('.pledge-number.shortlist').text());

        $('.pledge-number.applications').text(newApplicationNumber - 1);
        $('.pledge-number.shortlist').text(newShortlistNumber + 1).addClass('active');

        $('.shortlist-not-complete').hide();

        var applicationNumber = $(this).closest('.application').data('application');

        if (applicationNumber == "one") {
             $('#pledge-shortlist').find(`[data-shortlist='${applicationNumber}']`).show();
        }

        if (applicationNumber == "two") {
             $('#pledge-shortlist').find(`[data-shortlist='${applicationNumber}']`).show();
        }

        if (applicationNumber == "three") {
             $('#pledge-shortlist').find(`[data-shortlist='${applicationNumber}']`).show();
        }

        if (newApplicationNumber == 1) {
             $('.pledge-number.applications').removeClass('active');
             $('.applications-empty').show();
        }

        // if (shortlistNumber == 0) {
        //      $('.pledge-number.applications').removeClass('active');
        // }
   });

   $('.remove-shortlist').on("click", function (e) {
        e.preventDefault();
        $(this).closest('.application').hide();

        var newApplicationNumber = parseInt($('.pledge-number.applications').text());
        var newShortlistNumber = parseInt($('.pledge-number.shortlist').text());

        $('.pledge-number.applications').text(newApplicationNumber + 1);
        $('.pledge-number.shortlist').text(newShortlistNumber - 1).addClass('active');

        $('.shortlist-not-complete').hide();

        var applicationNumber = $(this).closest('.application').data('shortlist');

        console.log(applicationNumber);

        if (applicationNumber == "one") {
             $('#pledge-shortlist').find(`[data-shortlist='${applicationNumber}']`).hide();
             $('#pledge-applications').find(`[data-application='${applicationNumber}']`).show();
        }

        if (applicationNumber == "two") {
             $('#pledge-shortlist').find(`[data-shortlist='${applicationNumber}']`).hide();
             $('#pledge-applications').find(`[data-application='${applicationNumber}']`).show();
        }

        if (applicationNumber == "three") {
             $('#pledge-shortlist').find(`[data-shortlist='${applicationNumber}']`).hide();
             $('#pledge-applications').find(`[data-application='${applicationNumber}']`).show();
        }

        if (newApplicationNumber > 1) {
             $('.pledge-number.applications').addClass('active');
             $('.pledge-number.shortlist').removeClass('active');
             $('.applications-empty').hide();
             $('.shortlist-not-complete').show();
        }

   });

// Order table
$('#order-applications-table thead tr th').on("click", function (e) {
     e.preventDefault();
});

function sortTable(n) {
     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
     table = document.getElementById("order-applications-table");
     switching = true;
     // Set the sorting direction to ascending:
     dir = "asc";
     /* Make a loop that will continue until no switching has been done: */
     while (switching) {
          // start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /* Loop through all table rows (except the first, which contains table headers): */
          for (i = 1; i < (rows.length - 1); i++) {
               // start by saying there should be no switching:
               shouldSwitch = false;
               /* Get the two elements you want to compare, one from current row and one from the next: */
               x = rows[i].getElementsByTagName("TD")[n];
               y = rows[i + 1].getElementsByTagName("TD")[n];
               /* check if the two rows should switch place, based on the direction, asc or desc: */
               if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                         // if so, mark as a switch and break the loop:
                         shouldSwitch= true;
                         break;
                    }
               } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                         // if so, mark as a switch and break the loop:
                         shouldSwitch = true;
                         break;
                    }
               }
          }
          if (shouldSwitch) {
               /* If a switch has been marked, make the switchand mark that a switch has been done: */
               rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
               switching = true;
               // Each time a switch is done, increase this count by 1:
               switchcount ++;
          } else {
               /* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
               if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
               }
          }
     }
}

$(document).ready( function () {
    $('#new-applications-table').DataTable();
} );

// $('span.sort-new.up,span.sort-new.down').hide();
//
// $('table#new-applications-table thead tr th').on("click", function (e) {
//      if ($(this).hasClass('sorting_asc')) {
//           $(this).find('span.sort-new, span.sort-new.down').hide();
//           $(this).find('span.sort-new.up').show();
//      }
//
//      if ($(this).hasClass('sorting_desc')) {
//           $(this).find('span.sort-new, span.sort-new.up').hide();
//           $(this).find('span.sort-new.down').show();
//      }
// });
//

   // Private transfer
   $('.transfer-amount-text').hide();
   $('.transfer-details').hide();

   $('#private-transfer-standard').on("keyup", function (e) {
        $('.transfer-amount-text').show();
   });

   $('#private-transfer-apprentices').on("keyup", function (e) {
        $('.transfer-details').show();
   });


   // 2-confirm
   $('#transfer-private-employer-yes').on("click", function (e) {
        $('#transfer-confirm').attr('action','3-about-the-transfer');
   });

   $('#transfer-private-employer-no').on("click", function (e) {
        $('#transfer-confirm').attr('action','1-business-id');
   });

   // 3-approve
   $('#transfer-training-course-yes').on("click", function (e) {
        $('#transfer-training-course-form').attr('action','4A-yes-journey');
   });

   $('#transfer-training-course-no').on("click", function (e) {
        $('#transfer-training-course-form').attr('action','4B-no-journey');
   });


   // Tooltips
   $('.copy-items').on("click", function (e) {
        $('.tooltiptext').slideDown();
        setTimeout(function() {
             $('.tooltiptext').slideUp();
        }, 5000);
   });

   // Apprenticeship total
   var applicationsCost = 1450;
   var zero ='0';

   $('.funding-over, #apprentices-error').hide();

   $('#pledge-application-start-year').on("keyup", function (e) {
        var apprenticeshipNumbers = parseInt($('#pledge-application-apprentices').val());
        var applicationsTotalCost = parseInt(apprenticeshipNumbers * applicationsCost);
        var applicationsMaths = apprenticeshipNumbers * applicationsCost;
        var startYear = parseInt($('#pledge-application-start-year').val());
         if (isNaN(applicationsMaths) | (startYear != 2022)) {
              $('#apprenticeship-cost .number span').text(zero);
         } else {
             $('#apprenticeship-cost .number span').text(applicationsMaths.toLocaleString('en-US'));
             document.getElementById('apprenticeship-cost').style.display = "block";
         }
         var pledgeTotalCost = 60000;
         // var pledgeTotalCost = parseInt($.cookie("pledge-value").replace('%C2%A3','').replace('%2C',''));
         console.log(pledgeTotalCost);
         console.log($('#apprenticeship-cost .value-format').text());
        if (applicationsTotalCost > pledgeTotalCost) {
             // console.log('working');
             $('#apprenticeship-cost').addClass('error');
             $('.funding-over').show();
             $.cookie("funding-over", true, {path:'/'});
             $('#how-many-apprentices').addClass('govuk-form-group--error');
             $('#how-many-apprentices #apprentices-error').show();
             $('#how-many-apprentices input').addClass('govuk-input--error');
        }
        $('#apprenticeship-cost').slideDown();
   });

   $('#pledge-application-apprentices').on("keyup", function (e) {
        var apprenticeshipNumbers = parseInt($('#pledge-application-apprentices').val());
        var applicationsTotalCost = parseInt(apprenticeshipNumbers * applicationsCost);
        var startYear = parseInt($('#pledge-application-start-year').val());
        if (!isNaN(startYear)) {
                  var applicationsMaths = apprenticeshipNumbers * applicationsCost;
                     if (isNaN(applicationsMaths) | (startYear != 2021)) {
                         $('#apprenticeship-cost .number span').text(zero);
                  } else {
                       $('#apprenticeship-cost .number span').text(applicationsMaths.toLocaleString('en-US'));
                  }
                  var pledgeTotalCost = 60000;
                  // var pledgeTotalCost = parseInt($.cookie("pledge-value").replace('%C2%A3','').replace('%2C',''));
                  if (applicationsTotalCost > pledgeTotalCost) {
                       // console.log('working');
                       $('#apprenticeship-cost').addClass('error');
                       $('.funding-over').show();
                       $.cookie("funding-over", true, {path:'/'});
                       $('#how-many-apprentices').addClass('govuk-form-group--error');
                       $('#how-many-apprentices #apprentices-error').show();
                       $('#how-many-apprentices input').addClass('govuk-input--error');
                  }
        } else {
               $('#apprenticeship-cost .number span').text(zero);
         }
   });

   // Apply for funds
   $('input[name=apply-pledge-funds]').on("click", function (e) {
        if ($('input[id=apply-pledge-funds-yes]').is(':checked')) {
             $('#apply-application-form').attr('action','1-application-core');
        } else if ($('input[id=apply-pledge-funds-no]').is(':checked')) {
             $('#apply-application-form').attr('action','../search-pledges');
        }
   });

// SUBMIT TRANFER APPLICATION
$('#submit_transfer_application_error ,#submit_transfer_application_error_text').hide();

$('#application-confirm-continue').on("click", function (e) {
     if ($('input[name="confirm_accept"]').is(':not(:checked)')) {
          window.scrollTo(0, 0);
          $('#application_confirm').addClass('govuk-form-group--error');
          $('#submit_transfer_application_error ,#submit_transfer_application_error_text').show();
     } else {
          $('#application_confirm').removeClass('govuk-form-group--error');
          $('#submit_transfer_application_error ,#submit_transfer_application_error_text').hide();
          window.location.href = "9-confirmation";
     }
});

// ACCEPT FUNDING
$('#accept_funding_error_1, #accept_funding_error_2, #accept_funding_error_3, #accept_funding_error_1_error_text, #accept_funding_error_2_error_text, #accept_funding_error_3_error_text').hide();
$('.form-action').hide();

$('#accept_funding_error').on("click", function (e) {
     var radioValue = $('input[name="accept_funding"]:checked').val()
     if ($('input[name="accept_funding"]').is(':checked') && $('input[name="confirm_accept"]').is(':checked') || $('input[name="accept_funding"]').is(':checked') && $('input[name="confirm_decline"]').is(':checked')) {
          $('#accept_funding_form').removeClass('govuk-form-group--error');
          $('#accept_funding_error_1, #accept_funding_error_1_error_text, #accept_funding_error_2, #accept_funding_error_2_error_text, #accept_funding_error_3, #accept_funding_error_3_error_text').hide();
     }

     if ($('input[name="accept_funding"]').is(':not(:checked)') && $('input[name="confirm_accept"]').is(':not(:checked)') || $('input[name="accept_funding"]').is(':not(:checked)') && $('input[name="confirm_decline"]').is(':not(:checked)')) {
          window.scrollTo(0, 0);
          $('#accept_funding_form').addClass('govuk-form-group--error');
          // Error 1
          $('#accept_funding_error_1, #accept_funding_error_1_error_text').show();
          // Error 2 & 3
          $('#accept_funding_error_2, #accept_funding_error_2_error_text, #accept_funding_error_3, #accept_funding_error_3_error_text').hide();
     }

     if ($('input[name="accept_funding"]').is(':checked')) {
          window.scrollTo(0, 0);

          if (radioValue === 'Accept') {
               $('#accept_funding_form').addClass('govuk-form-group--error');
               // Error 2
               $('#accept_funding_error_2, #accept_funding_error_2_error_text').show();
               // Error 1 & 3
               $('#accept_funding_error_1, #accept_funding_error_1_error_text, #accept_funding_error_3, #accept_funding_error_3_error_text').hide();
          } else if (radioValue === 'Decline') {
               $('#accept_funding_form').addClass('govuk-form-group--error');
               // Error 3
               $('#accept_funding_error_3, #accept_funding_error_3_error_text').show();
               // Error 1 & 2
               $('#accept_funding_error_1, #accept_funding_error_1_error_text, #accept_funding_error_2, #accept_funding_error_2_error_text').hide();
          }

          if ($('input[name="accept_funding"]').is(':checked') && $('input[name="confirm_accept"]').is(':checked')) {
               window.location.href = "6A-confirm";
          } else if ($('input[name="accept_funding"]').is(':checked') && $('input[name="confirm_decline"]').is(':checked')) {
               window.location.href = "4-my-applications";
          }
     }

});

$('input[name="confirm_accept"], input[name="confirm_decline"]').on("click", function (e) {
     if ($('input[name="accept_funding"]').is(':checked') && $('input[name="confirm_accept"]').is(':checked') || $('input[name="accept_funding"]').is(':checked') && $('input[name="confirm_decline"]').is(':checked')) {
          $('.form-action').show();
          $('.error-action').hide();
     } else {
          $('.form-action').hide();
          $('.error-action').show();
     }
});

// WITHDRAW APPLICATION
$('#withdraw_application_error_1, #withdraw_application_error_2, #withdraw_application_error_1_error_text, #withdraw_application_error_2_error_text').hide();
$('.form-action').hide();

$('#withdraw_application_error').on("click", function (e) {
     var radioValue = $('input[name="withdraw_application"]:checked').val()
     if ($('input[name="withdraw_application"]').is(':checked') && $('input[name="confirm_withdraw"]').is(':checked')) {
          $('#withdraw_application_form').removeClass('govuk-form-group--error');
          $('#withdraw_application_error_1, #withdraw_application_error_2, #withdraw_application_error_1_error_text, #withdraw_application_error_2_error_text').hide();
     }

     if ($('input[name="withdraw_application"]').is(':not(:checked)') && $('input[name="confirm_withdraw"]').is(':not(:checked)')) {
          window.scrollTo(0, 0);
          $('#withdraw_application_form').addClass('govuk-form-group--error');
          // Error 2
          $('#withdraw_application_error_2, #withdraw_application_error_2_error_text').show();
          // Error 1
          $('#withdraw_application_error_1, #withdraw_application_error_1_error_text').hide();
     }

     if ($('input[name="withdraw_application"]').is(':checked') && $('input[name="confirm_withdraw"]').is(':not(:checked)')) {
          window.scrollTo(0, 0);
          $('#withdraw_application_form').addClass('govuk-form-group--error');
          // Error 2
          $('#withdraw_application_error_2, #withdraw_application_error_2_error_text').hide();
          // Error 1
          $('#withdraw_application_error_1, #withdraw_application_error_1_error_text').show();
     }

});

$('input[name="confirm_withdraw"]').on("click", function (e) {
     if ($('input[name="withdraw_application"]').is(':checked') && $('input[name="confirm_withdraw"]').is(':checked')) {
          $('.form-action').show();
          $('.error-action').hide();
     } else {
          $('.form-action').hide();
          $('.error-action').show();
     }
});

// !!!!!!!!!!!!!!!!!!!!!!!! -- RECEIVER - END -- !!!!!!!!!!!!!!!!!!!!!!!! //
