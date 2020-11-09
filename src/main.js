$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = $('#length').val();
    const length2 = $('#length').val();
    const length3 = $('#length').val();
    const triangle = new Triangle(length1, length2, length3);
    const response = triangle.checkType();
    $('#response').append("<p>" + response + "</p>");
  });
});