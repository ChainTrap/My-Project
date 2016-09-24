// Checkbox ------------------------------

(function($) {
  // Initialize variables.
  var $checkbox = $('input[type="checkbox"]'),
      checkboxBox = '<span class="checkbox-box"></span>',
      checkboxCheck = '<span class="checkbox-check"></span>',
      checkboxRipple = '<span class="checkbox-ripple"></span>';

  // Append the elements to the parent checkbox input.
  $checkbox.parent().append(checkboxBox, checkboxCheck, checkboxRipple);


  // Add the class .is-disabled to all disabled checkboxes.
  $checkbox.each(function() {
    if ($(this).is(':disabled')) {
      $(this).siblings('.checkbox-box').addClass('is-disabled');
      $(this).siblings('.checkbox-check').addClass('is-disabled');
      $(this).siblings('.checkbox-ripple').addClass('is-disabled');
    }
  });


  $checkbox.on('change', function() {
    if ($(this).is(':checked')) {
      // Add the class .is-checked when the user ticks the box.
      $(this).siblings('.checkbox-box').addClass('is-checked');
      $(this).siblings('.checkbox-check').addClass('is-checked');
    } else {
      // And remove the classes when it's changed/unchecked.
      $(this).siblings('.checkbox-box').removeClass('is-checked');
      $(this).siblings('.checkbox-check').removeClass('is-checked');
    }
  });


  // Checkbox ripple effect.
  $('.checkbox-box, .checkbox-check').on('mousedown', function() {
    $(this).siblings('.checkbox-ripple').removeClass('ripple-on');
    $(this).siblings('.checkbox-ripple').addClass('ripple-on');

    // Remove the class .ripple-on when animation ends so it can be added again.
    $('.ripple-on').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      $checkbox.siblings('.checkbox-ripple').removeClass('ripple-on');
    });
  });
})(jQuery);