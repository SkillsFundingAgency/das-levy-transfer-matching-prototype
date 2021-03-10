/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

if ($('#main-content').hasClass('my-account-wrapper')) {
     $('#main-content').parent().addClass('my-account-override');
}

if ($('div').hasClass('my-account-main-header')) {
     $('.my-account-main-header').parent().addClass('header-override');
}

$("#transfers-hub").parent().removeClass('my-account-wrapper');
$("#transfers-hub.form-entry").parent().css('padding-top','0');


if ($("#transfers-hub")) {
     $('.navigation ul li a').removeClass('selected');
     $('.navigation ul li a.link-two').addClass('selected');

}

// Number formatting
$(document).ready(function(){
     $("input[data-type='number']").keyup(function(event){
          // skip for arrow keys
          if(event.which >= 37 && event.which <= 40){
               event.preventDefault();
          }
          var $this = $(this);
          var num = $this.val().replace(/,/gi, "");
          var num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
          console.log(num2);
          // the following line has been simplified. Revision history contains original.
          $this.val(num2);
  });
});

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// $('#sender-check-answers').find('.section-six').hide();

// Locations
function addAnotherLocation() {
     event.preventDefault();
     locationNumber++;
     $("#locations").append(`
          <div class="govuk-form-group">
               <label class="govuk-label" for="pledge-location[url${locationNumber}]">Additional location</label>

               <select class="govuk-select" id="pledge-location[url${locationNumber}]" name="pledge-location[url${locationNumber}]">
                    <option value="National" selected>National</option>
                    <option disabled>---------------------------------</option>
                    <option value="East Midlands">East Midlands</option>
                    <option value="East of England">East of England</option>
                    <option value="Greater London">Greater London</option>
                    <option value="North East">North East</option>
                    <option value="North West England">North West England</option>
                    <option value="South East England">South East England</option>
                    <option value="South West England">South West England</option>
                    <option value="West Midlands">West Midlands</option>
                    <option value="Yorkshire and the Humber">Yorkshire and the Humber</option>
               </select>
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
     var removeId = $(this).data("remove");
     $("#locations").append(`
          <input id="pledge-location[${removeId}]" name="pledge-location[${removeId}]" type="hidden" value="" />`
     )
     $(this).closest(".govuk-form-group").remove();
}

var locationNumber = $("#locations").data("location-count") || 1;
$("#addAnotherLocation").on("click", addAnotherLocation);
$("[data-remove]").on("click", removeLocation);

// Sectors
function toggle(source) {
     var checkboxes = document.querySelectorAll('input[type="checkbox"]');
     for (var i = 0; i < checkboxes.length; i++) {
     if (checkboxes[i] != source)
          checkboxes[i].checked = source.checked;
     }
}

$('input[name="pledge-sector"]').on("click", function (e) {
     // $('input[id="pledge-sector-all"]').prop('checked', false);
     var numberChecked = $(":checkbox:checked").length;
     // alert(numberChecked);
     if (numberChecked <= 15) {
          $('input[id="pledge-sector-all"]').prop('checked', false);
     }
});

// Training
$('input[name="pledge-training"]').on("click", function (e) {
     // $('input[id="pledge-sector-all"]').prop('checked', false);
     var numberChecked = $(":checkbox:checked").length;
     // alert(numberChecked);
     if (numberChecked <= 15) {
          $('input[id="pledge-training-all"]').prop('checked', false);
     }
});

// Level
$('input[name="pledge-level"]').on("click", function (e) {
     // $('input[id="pledge-sector-all"]').prop('checked', false);
     var numberChecked = $(":checkbox:checked").length;
     // alert(numberChecked);
     if (numberChecked <= 6) {
          $('input[id="pledge-level-all"]').prop('checked', false);
     }
});

// Intermediaries
function addAnotherEmail() {
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
          $(this).closest(".govuk-form-group").remove();
     }
     });
}

function removeEmail() {
     var removeId = $(this).data("remove");
     $("#emails").append(`
          <input class="govuk-input govuk-!-width-three-quarters" id="pledge-email[${removeId}]" name="pledge-email[${removeId}]" type="email" spellcheck="false">`
     )
     $(this).closest(".govuk-form-group").remove();
}

var emailNumber = $("#emails").data("email-count") || 1;
$("#addAnotherEmail").on("click", addAnotherEmail);
$("[data-remove]").on("click", removeEmail);
