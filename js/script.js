$(document).foundation();

$(document).ready(function () {
  $("[data-responsive-toggle]").click(function () {
    var targetMenuClass =  $(this).attr("data-responsive-toggle");

    // Add class "open" to the target menu.
    $("[class*='" + targetMenuClass + "']").toggleClass("open");
  })
});

document.addEventListener('DOMContentLoaded', function() {
  var multiSelectChoices = new Choices('.choices[multiple]', {
    delimiter: ',',
    editItems: true,
    maxItemCount: 5,
    removeItemButton: true,
  });

  var singleSelectChoices = new Choices('.choices:not([multiple])', {
    removeItemButton: false,
  });
});