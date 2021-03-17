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

if ($("#my-account-hub")) {
     $('.navigation ul li a').removeClass('selected');
     $('.navigation ul li a.link-one').addClass('selected');
}
$("#transfers-hub").parent().removeClass('my-account-wrapper');
$("#transfers-hub.form-entry").parent().css('padding-top','0');

if ($("#transfers-hub")) {
     $('.navigation ul li a').removeClass('selected');
     $('.navigation ul li a.link-two').addClass('selected');
}

// Number formatting
$(document).ready(function(){
     // $("input[data-type='number']").keyup(function(event){
     //      // skip for arrow keys
     //      if(event.which >= 37 && event.which <= 40){
     //           event.preventDefault();
     //      }
     //      var $this = $(this);
     //      var num = $this.val().replace(/,/gi, "");
     //      var num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
     //      console.log(num2);
     //      // the following line has been simplified. Revision history contains original.
     //      $this.val(num2);
     // });
     let x = document.querySelectorAll(".value-format");
        for (let i = 0, len = x.length; i < len; i++) {
            let num = Number(x[i].innerHTML)
                      .toLocaleString('en');
            x[i].innerHTML = num;
            x[i].classList.add("currSign");
        }
});

// !!!!!!!!!!!!!!!!!!!!!!!! -- SENDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
// $('#sender-check-answers').find('.section-six').hide();

// Locations
function addAnotherLocation() {
     event.preventDefault();
     locationNumber++;
     $("#locations").append(`
          <div class="govuk-form-group new-location">
               <label class="govuk-label" for="pledge-location[url${locationNumber}]">Additional location</label>

               <select class="govuk-select" id="pledge-location[url${locationNumber}]" name="pledge-location[url${locationNumber}]">
                    <option value="All locations in England" selected>All locations in England</option>
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

     if (hiddenElems.length >= 9) {
          $('.filter-number').text(0);
          $('.no-results').show();
     } else {
          $('.filter-number').text(29);
          $('.no-results').hide();

     }

     for (var i = 0; i < hiddenElems.length; i++) {
          hiddenElems[i].style.display = "none";
     }

}

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

// !!!!!! --------------------------------- Date stamp - THIS MUST BE AT THE BOTTOM --------------------------------- !!!!!! //
document.getElementById("date-stamp").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
     minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
     hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
     ampm = d.getHours() >= 12 ? 'pm' : 'am',
     months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
     days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return months[d.getMonth()]+'/'+d.getDate()+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
}

document.getElementById("date-stamp-deletion").innerHTML = formatAMPMDeletion();

function formatAMPMDeletion() {
var d = new Date(),
     minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
     hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
     ampm = d.getHours() >= 12 ? 'pm' : 'am',
     months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
     days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return months[d.getMonth()]+'/'+d.getDate()+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
