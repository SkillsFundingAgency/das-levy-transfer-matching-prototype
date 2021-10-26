// =================================== MY COOKIES =================================== //

// !!!!!!!!!!!!!!!!!!!!!!!! -- PROVIDER - START -- !!!!!!!!!!!!!!!!!!!!!!!! //
/// APPROVALS
$(".provider-capture-details").on("click", function (e) {
     $.cookie("provider-company-name", $(this).parent().parent().find('.provider-company-name').text(), {path:'/'});
     $.cookie("provider-cohort-ref", $(this).parent().parent().find('.provider-cohort-ref').text(), {path:'/'});
     $.cookie("provider-message", $(this).parent().parent().find('.provider-message').text(), {path:'/'});
});

$('.provider-company-name-answer').text($.cookie("provider-company-name"));
$('.provider-cohort-ref-answer').text($.cookie("provider-cohort-ref"));
$('.provider-message-answer').text($.cookie("provider-message"));

// !!!!!!!!!!!!!!!!!!!!!!!! -- PROVIDER - END -- !!!!!!!!!!!!!!!!!!!!!!!! //
