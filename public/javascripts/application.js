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
