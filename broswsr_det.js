// No request form – notice-line removed, no timestamp
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Verify no form elements exist
    const forms = document.querySelectorAll('form, input, textarea, button, select');
    if (forms.length === 0) {
      console.log('✅ No request form or inputs – matches "only displayed message alert"');
    }

    console.log('✨ Wallpaper background | left logo (image, no border) | centred alert with hyperlink | notice-line removed');
  });
})();