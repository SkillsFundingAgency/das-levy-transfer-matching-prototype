$(function(){
     var currencies = [
          { value: "Liverpool" },
          { value: "Liverpool City Council (LA)" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#pledge-location').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#outputcontent').html(thehtml);
          }
     });

});
