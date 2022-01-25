/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
     window.console.info('GOV.UK Prototype Kit - do not use for production')
   }

   $(document).ready(function () {
     window.GOVUKFrontend.initAll()
   })

   // Clears all cookies
   function deleteAllCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
             var cookie = cookies[i];
             var eqPos = cookie.indexOf("=");
             var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
             document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
   }

   $(document).ready(function() {
        $('.clear-cookies').on("click", function (e) {
              deleteAllCookies();
        });

        // var clearDataBtn = $("button:contains('Clear the data')");
        // clearDataBtn.on('click', function (e) {
        //      deleteAllCookies();
        //      e.preventDefault()
        //      var form = $(this).closest('form')
        //      form.submit();
        // })
   });

if ($('#main-content').hasClass('my-account-wrapper')) {
     $('#main-content').parent().addClass('my-account-override');
}

if ($('div').hasClass('my-account-main-header')) {
     $('.my-account-main-header').parent().addClass('header-override');
}

// $('.navigation ul li a').removeClass('selected');
// $('.navigation ul li a.link-two').addClass('selected');

// if ($("#my-account-hub")) {
//      $('.navigation ul li a').removeClass('selected');
//      $('.navigation ul li a.link-one').addClass('selected');
// }

$("#transfers-hub").parent().removeClass('my-account-wrapper');
$("#transfers-hub.form-entry").parent().css('padding-top','0');

// if ($("#transfers-hub")) {
//      $('.navigation ul li a').removeClass('selected');
//      $('.navigation ul li a.link-two').addClass('selected');
// }

   // Transfers
   $('.transfer-values-2019, .transfer-values-2020, .transfer-values-2022, .transfer-values-2023, .transfer-values-2024').hide();

   $('.finance-2019, .finance-2020, .finance-2021, .finance-2022, .finance-2023, .finance-2024').on("click", function (e) {
        e.preventDefault();
        $('.transfers-title a').removeClass('current');
        $(this).addClass('current');
   });

   $('.finance-2019').on("click", function (e) {
        $('.transfer-values-2020, .transfer-values-2021, .transfer-values-2022, .transfer-values-2023, .transfer-values-2024').hide();
        $('.transfer-values-2019').show();
   });

   $('.finance-2020').on("click", function (e) {
        $('.transfer-values-2019, .transfer-values-2021, .transfer-values-2022, .transfer-values-2023, .transfer-values-2024').hide();
        $('.transfer-values-2020').show();
   });

   $('.finance-2021').on("click", function (e) {
        $('.transfer-values-2019, .transfer-values-2020, .transfer-values-2022, .transfer-values-2023, .transfer-values-2024').hide();
        $('.transfer-values-2021').show();
   });

   $('.finance-2022').on("click", function (e) {
        $('.transfer-values-2019, .transfer-values-2020, .transfer-values-2021, .transfer-values-2023, .transfer-values-2024').hide();
        $('.transfer-values-2022').show();
   });

   $('.finance-2023').on("click", function (e) {
        $('.transfer-values-2019, .transfer-values-2020, .transfer-values-2021, .transfer-values-2022, .transfer-values-2024').hide();
        $('.transfer-values-2023').show();
   });

   $('.finance-2024').on("click", function (e) {
        $('.transfer-values-2019, .transfer-values-2020, .transfer-values-2021, .transfer-values-2022, .transfer-values-2023').hide();
        $('.transfer-values-2024').show();
   });

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


// TABS & FILTER APPLICATIONS - START //

function openTab(tabNumber) {
     var i;
     var x = document.getElementsByClassName("application-tab-content");
     for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
     }
     document.getElementById(tabNumber).style.display = "block";
}

$('.tabs.application-tabs button').on("click", function (e) {
     $('.tabs.application-tabs button').removeClass('selected');
     $(this).addClass('selected');
});

// $('#order-applications-table tbody tr').hide();

var filterCriteria = 'all'
var filterStatus = 'all'

$('#type-of-applications').on("change", function (e) {
     filterStatus = this.value
     filterTable()
     if ($(this).val() == '1') {
          $('p.empty-row').show();
     } else {
          $('p.empty-row').hide();
     }
})

$('#type-of-criteria').on("change", function (e) {
     filterCriteria = this.value
     filterTable()
})

var filterTable = function () {
     var appsTableRows = $('#new-applications-table tbody tr')
     var match
     appsTableRows.each(function () {
          match = true
          if (filterCriteria != 'all') {
               if ($(this).data('criteria') != filterCriteria)
               match = false
          }
          if (filterStatus != 'all') {
               if ($(this).data('status') != filterStatus)
               match = false
          }
          $(this).css('display', match ? 'table-row' : 'none')
     })
}

$('.sticky-footer').hide();

$('input[name=application_select], input[name=_application_select]').on("change", function (e) {
     $(this).closest('tr').toggleClass('selected');
     $('.sticky-footer').slideDown();
     var applicationsSelected = parseInt($(":checkbox:checked").length);
     $('.applications-selected .number').text(applicationsSelected);
     $('.clear-selection').show();
});

$('.clear-selection').on("click", function (e) {
     e.preventDefault;
     $('input[name=application_select]').removeAttr('checked');
     $('#new-applications-table tr').removeClass('selected');
     $('.applications-selected .number').text('0');
});

$('#applications-action').on("click", function (e) {
     $('.clear-selection').hide();
});

$('#applications-action-multiple').on("click", function (e) {
     $('.applications-selected .number').text('0');
     $('.clear-selection').hide();
     if ($('#type-of-action').val() == 'shortlist') {
          $('#applications_actions_form').attr("action", '5C-pledge-details');
     } else if ($('#type-of-action').val() == 'approve') {
          $('#applications_actions_form').attr("action", '10A-approval');
     } else if ($('#type-of-action').val() == 'reject') {
          $('#applications_actions_form').attr("action", '11-reject');
     } else if ($('#type-of-action').val() == 'remove-from-shortlist') {
          $('#applications_actions_form').attr("action", '9-shortlist');
     }
});




// TABS & FILTER APPLICATIONS - END //

   // !!!!!! --------------------------------- Date stamp - THIS MUST BE AT THE BOTTOM --------------------------------- !!!!!! //
   var dateStamp = document.getElementById("date-stamp")
   if (dateStamp) {
        dateStamp.innerHTML = formatAMPM();
   }

   function formatAMPM() {
        var d = new Date(),
          minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
          hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
          ampm = d.getHours() >= 12 ? 'pm' : 'am',
          months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
          days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return months[d.getMonth()]+'/'+d.getDate()+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
   }

   var dateStampTransfer = document.getElementById("date-stamp-transfer")
   if (dateStampTransfer) {
        dateStampTransfer.innerHTML = formatAMPMTransfer();
   }

   function formatAMPMTransfer() {
        var d = new Date(),
          minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
          hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
          ampm = d.getHours() >= 12 ? 'pm' : 'am',
          months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
          days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return months[d.getMonth()]+'/'+d.getDate()+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
   }

   var dateStampDeletion = document.getElementById("date-stamp-deletion")
   if (dateStampDeletion) {
        dateStampDeletion.innerHTML = formatAMPMDeletion();
   }


   function formatAMPMDeletion() {
        var d = new Date(),
          minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
          hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
          ampm = d.getHours() >= 12 ? 'pm' : 'am',
          months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
          days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return months[d.getMonth()]+'/'+d.getDate()+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
   }

   var dateStampCancelled = document.getElementById("date-stamp-cancelled")
   if (dateStampCancelled) {
        dateStampCancelled.innerHTML = formatAMPMCancelled();
   }

   function formatAMPMCancelled() {
        var d = new Date(),
          minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
          hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
          ampm = d.getHours() >= 12 ? 'pm' : 'am',
          months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
          days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return months[d.getMonth()]+'/'+d.getDate()+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
   }
