// =================================== MY COOKIES =================================== //

// 1 - Personal details - Correct
// $('.personal-confirmed').hide();
// $('.personal-details-correct').hide();
// $('.personal-details-error').show();
//
// $("#apprentice-details").on("click", function (e) {
//      $.cookie("apprentice-details", true, {path:'/'});
//      $.cookie("apprentice-details-wrong", false, {path:'/'});
//      $.cookie("cs-step-1", true, {path:'/'});
// });
//
// if ($.cookie("apprentice-details") == 'true') {
//      $('a.section-one').addClass('complete');
//      $('a.section-one strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
//      // $('a.section-one').attr('href', '');
//      $('.personal-confirmed').show();
//      $('.personal-unconfirmed').hide();
//      $('.personal-confirmed-title').text('Your personal details');
//      $('.personal-details-correct').show();
//      $('.personal-details-error').hide();
// }
//
// // 1 - Personal details - Incorrect
// $("#apprentice-details-wrong").on("click", function (e) {
//      $.cookie("apprentice-details", false, {path:'/'});
//      $.cookie("apprentice-details-wrong", true, {path:'/'});
//      $.cookie("cs-step-1", false, {path:'/'});
// });
//
// if ($.cookie("apprentice-details-wrong") == 'true') {
//      $('a.section-one').addClass('wrong');
//      $('a.section-one strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
//      $('a.section-one').attr('href', '../1-apprentice-details/1-apprentice-details');
//      $('.personal-confirmed').hide();
//      $('.personal-unconfirmed').show();
//      $('.personal-confirmed-title').text('Confirm these details are correct');
//      $('.personal-details-correct').show().addClass('error-corrected');
//      $('.personal-details-error').hide();
// }

// 1 - Apprenticeship details - Correct
$('.apprenticeship-confirmed, .training-details-confirmed').hide();

$("#apprenticeship-details").on("click", function (e) {
     $.cookie("apprenticeship-details", true, {path:'/'});
     $.cookie("apprenticeship-details-wrong", false, {path:'/'});
     // $.cookie("cs-step-1", true, {path:'/'});
});

if ($.cookie("apprenticeship-details") == 'true') {
     $('a.section-one').addClass('started');
     $('a.section-one strong').addClass('govuk-tag--blue').removeClass('govuk-tag--yellow').text('started');
     $('.apprenticeship-confirmed').show();
     $('.apprenticeship-unconfirmed').hide();
     $('.apprenticeship-confirmed-title').text('Your apprenticeship details');
     $('#apprenticeship-details').text('Continue to training details');
     $('.apprenticeship-complete').hide();
}

$("#training-details").on("click", function (e) {
     $.cookie("training-details", true, {path:'/'});
     $.cookie("training-details-wrong", false, {path:'/'});
     $.cookie("cs-step-1", true, {path:'/'});
});

if ($.cookie("training-details") == 'true') {
     $('a.section-one').addClass('started');
     $('a.section-one strong').addClass('govuk-tag--blue').removeClass('govuk-tag--yellow').text('started');
     $('.training-details-confirmed').show();
     $('.training-details-unconfirmed').hide();
     $('.training-details-confirmed-title').text('Your apprenticeship training details');
     $('#apprenticeship-details').text('Continue to training details');
}

if ($.cookie("apprenticeship-details") == 'true' && $.cookie("training-details") == 'true') {
     $('a.section-one').addClass('complete').removeClass('started');
     $('a.section-one strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
}



// 1 - Apprenticeship details - Incorrect
$("#apprenticeship-details-wrong").on("click", function (e) {
     $.cookie("apprenticeship-details", false, {path:'/'});
     $.cookie("apprenticeship-details-wrong", true, {path:'/'});
     $.cookie("cs-step-1", false, {path:'/'});
});

if ($.cookie("apprenticeship-details-wrong") == 'true') {
     $('a.section-one').addClass('wrong');
     $('a.section-one strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
     $('a.section-one').attr('href', '../1-apprenticeship-details/1-apprenticeship-details');
     $('.apprenticeship-confirmed').hide();
     $('.apprenticeship-unconfirmed').show();
     $('.apprenticeship-confirmed-title').text('Confirm these details are correct');
}

// 2 - Employer details - Correct
$('.employer-provider-confirmed').hide();

$("#employer-details").on("click", function (e) {
     $.cookie("employer-details", true, {path:'/'});
     $.cookie("employer-details-wrong", false, {path:'/'});
     $.cookie("cs-step-2", true, {path:'/'});
});

if ($.cookie("employer-details") == 'true') {
     $('a.section-two').addClass('complete');
     $('a.section-two strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     $('.employer-provider-confirmed').show();
     $('.employer-provider-unconfirmed').hide();
     $('.employer-provider-confirmed-title').text('Your employer and training provider details');
}

// 2 - Employer details - Incorrect
$("#employer-details-wrong").on("click", function (e) {
     $.cookie("employer-details", false, {path:'/'});
     $.cookie("employer-details-wrong", true, {path:'/'});
     $.cookie("cs-step-2", false, {path:'/'});
});

if ($.cookie("employer-details-wrong") == 'true') {
     $('a.section-two').addClass('wrong');
     $('a.section-two strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
     $('.employer-provider-confirmed').hide();
     $('.employer-provider-unconfirmed').show();
     $('.employer-provider-confirmed-title').text('Check the employer and training provider information');
}

// 3 - Roles and responsibilities - Correct
$('a.section-four .govuk-caption-m').show();
$('.apprentice-role-confirmed').hide();

$("#apprentice-role").on("click", function (e) {
     $.cookie("roles-and-responsibilities", true, {path:'/'});
     $.cookie("roles-and-responsibilities-wrong", false, {path:'/'});
     $.cookie("cs-step-3", true, {path:'/'});
});

if ($.cookie("roles-and-responsibilities") == 'true') {
     $('a.section-three').addClass('complete').removeClass('started');
     $('a.section-three strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     $('.section-three .complete-number').text('3');
     $('.apprentice-role-confirmed').show();
     $('.apprentice-role-unconfirmed').hide();
     $('.apprentice-role-confirmed-title').text('Your apprentice roles and responsibilities');
}

// 3 - Roles and responsibilities - Incorrect
$("#apprentice-role-wrong").on("click", function (e) {
     $.cookie("roles-and-responsibilities", false, {path:'/'});
     $.cookie("roles-and-responsibilities", true, {path:'/'});
     $.cookie("cs-step-3", false, {path:'/'});
});

if ($.cookie("roles-and-responsibilities-wrong") == 'true') {
     $('a.section-three').addClass('wrong').removeClass('started');
     $('a.section-three strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
     $('.section-three .complete-number').text('2');
     $('.apprentice-role-confirmed').hide();
     $('.apprentice-role-unconfirmed').show();
     $('.apprentice-role-confirmed-title').text('Apprentice - Roles and responsibilities');
}

// 4 - Key policies
$('a.section-four .govuk-caption-m').show();

$("#key-policies").on("click", function (e) {
     $.cookie("key-policies-counter", $('input[type="checkbox"]:checked').length, {path:'/'});

     if ($('input[id=code-of-conduct]').is(':checked')) {
          $.cookie("policy-code-of-conduct", true, {path:'/'});
     } else {
          $.cookie("policy-code-of-conduct", false, {path:'/'});
     }
     if ($('input[id=health-and-safety]').is(':checked')) {
          $.cookie("policy-health-and-safety", true, {path:'/'});
     } else {
          $.cookie("policy-health-and-safety", false, {path:'/'});
     }
     if ($('input[id=equality-and-diversity]').is(':checked')) {
          $.cookie("policy-equality-and-diversity", true, {path:'/'});
     } else {
          $.cookie("policy-equality-and-diversity", false, {path:'/'});
     }
     if ($('input[id=harassment-and-bullying]').is(':checked')) {
          $.cookie("policy-harassment-and-bullying", true, {path:'/'});
     } else {
          $.cookie("policy-harassment-and-bullying", false, {path:'/'});
     }
     if ($('input[id=safeguarding-and-prevent]').is(':checked')) {
          $.cookie("policy-safeguarding-and-prevent", true, {path:'/'});
     } else {
          $.cookie("policy-safeguarding-and-prevent", false, {path:'/'});
     }
     if ($('input[id=complaints-procedure]').is(':checked')) {
          $.cookie("policy-complaints-procedure", true, {path:'/'});
     } else {
          $.cookie("policy-complaints-procedure", false, {path:'/'});
     }
     if ($('input[id=business-continuity]').is(':checked')) {
          $.cookie("policy-business-continuity", true, {path:'/'});
     } else {
          $.cookie("policy-business-continuity", false, {path:'/'});
     }
});

$('.section-four .complete-number').text($.cookie("key-policies-counter"));

if ($.cookie("policy-code-of-conduct") == 'true') {
     $('#code-of-conduct').attr('checked','checked');
}
if ($.cookie("policy-health-and-safety") == 'true') {
     $('#health-and-safety').attr('checked','checked');
}
if ($.cookie("policy-equality-and-diversity") == 'true') {
     $('#equality-and-diversity').attr('checked','checked');
}
if ($.cookie("policy-harassment-and-bullying") == 'true') {
     $('#harassment-and-bullying').attr('checked','checked');
}
if ($.cookie("policy-safeguarding-and-prevent") == 'true') {
     $('#safeguarding-and-prevent').attr('checked','checked');
}
if ($.cookie("policy-complaints-procedure") == 'true') {
     $('#complaints-procedure').attr('checked','checked');
}
if ($.cookie("policy-business-continuity") == 'true') {
     $('#business-continuity').attr('checked','checked');
}

if ($.cookie("policy-code-of-conduct") == 'true' || $.cookie("policy-health-and-safety") == 'true' || $.cookie("policy-equality-and-diversity") == 'true' || $.cookie("policy-harassment-and-bullying") == 'true' || $.cookie("policy-safeguarding-and-prevent") == 'true' || $.cookie("policy-complaints-procedure") == 'true' || $.cookie("policy-business-continuity") == 'true') {
     $('a.section-four').addClass('started');
     $('a.section-four strong').addClass('govuk-tag--blue').removeClass('govuk-tag--yellow').text('started');
     $('a.section-four .govuk-caption-m').show();
}

if ($.cookie("policy-code-of-conduct") == 'true' && $.cookie("policy-health-and-safety") == 'true' && $.cookie("policy-equality-and-diversity") == 'true' && $.cookie("policy-harassment-and-bullying") == 'true' && $.cookie("policy-safeguarding-and-prevent") == 'true' && $.cookie("policy-complaints-procedure") == 'true' && $.cookie("policy-business-continuity") == 'true') {
     $('a.section-four').addClass('complete').removeClass('started');
     $('a.section-four strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     $.cookie("cs-step-4", true, {path:'/'});
}

// 5 - Agreements
$('a.section-five .govuk-caption-m').show();

$("#agreements").on("click", function (e) {
     $.cookie("agreements-counter", $('input[type="checkbox"]:checked').length, {path:'/'});

     if ($('input[id=employer-agreement-1]').is(':checked')) {
          $.cookie("agreement-employer-agreement-1", true, {path:'/'});
     } else {
          $.cookie("agreement-employer-agreement-1", false, {path:'/'});
     }
     if ($('input[id=employer-agreement-2]').is(':checked')) {
          $.cookie("agreement-employer-agreement-2", true, {path:'/'});
     } else {
          $.cookie("agreement-employer-agreement-2", false, {path:'/'});
     }
     if ($('input[id=employer-agreement-3]').is(':checked')) {
          $.cookie("agreement-employer-agreement-3", true, {path:'/'});
     } else {
          $.cookie("agreement-employer-agreement-3", false, {path:'/'});
     }
});

$('.section-five .complete-number').text($.cookie("agreements-counter"));

if ($.cookie("agreement-employer-agreement-1") == 'true') {
     $('#employer-agreement-1').attr('checked','checked');
}
if ($.cookie("agreement-employer-agreement-2") == 'true') {
     $('#employer-agreement-2').attr('checked','checked');
}
if ($.cookie("agreement-employer-agreement-3") == 'true') {
     $('#employer-agreement-3').attr('checked','checked');
}

if ($.cookie("agreement-employer-agreement-1") == 'true' || $.cookie("agreement-employer-agreement-2") == 'true' || $.cookie("agreement-employer-agreement-3") == 'true') {
     $('a.section-five').addClass('started');
     $('a.section-five strong').addClass('govuk-tag--blue').removeClass('govuk-tag--yellow').text('started');
     $('a.section-five .govuk-caption-m').show();
}

if ($.cookie("agreement-employer-agreement-1") == 'true' && $.cookie("agreement-employer-agreement-2") == 'true' && $.cookie("agreement-employer-agreement-3") == 'true') {
     $('a.section-five').addClass('complete').removeClass('started');
     $('a.section-five strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
     $.cookie("cs-step-5", true, {path:'/'});
}

// CS is agreed
$('#cs-not-agreed').show();
$('#cs-agreed').hide();
$('#cs-signed').hide();
if ($.cookie("cs-step-1") == 'true' && $.cookie("cs-step-2") == 'true' && $.cookie("cs-step-3") == 'true' && $.cookie("cs-step-4") == 'true' && $.cookie("cs-step-5") == 'true') {
     $('#cs-not-agreed').hide();
     $('#cs-agreed').show();
     $('#cs-signed').hide();
     $('.tabs ul.govuk-list li .tab-landing-1 .number').addClass('complete');
}

$("#confirm-and-sign").on("click", function (e) {
     if ($('input[id=apprentice-sign-confirm]').is(':checked')) {
          $.cookie("apprentice-sign-confirm", true, {path:'/'});
     } else {
          $.cookie("apprentice-sign-confirm", false, {path:'/'});
     }
});

if ($.cookie("apprentice-sign-confirm") == 'true') {
     $('#cs-not-agreed').hide();
     $('#cs-agreed').hide();
     $('#cs-signed').show();
     $('.tabs ul.govuk-list li .tab-landing-1 .number').addClass('signed').text('');
     $('#apprentice-committed').removeClass('cross').addClass('tick green');
     $('ul.dashboard-nav li .dashboard-one strong').hide();
}
