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