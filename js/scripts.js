$(document).ready(function() {
  $("questionaire").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    const quote = (100 - age) * 3;

    $("#rate").text(quote);
    $("#quote").show();

    event.preventDefault();
  });
});