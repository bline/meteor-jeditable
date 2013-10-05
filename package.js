Package.describe({
  summary: "jQuery edit in place plugin. Extendable via plugin architecture. Plugins for plugin. Really."
});

Package.on_use(function (api) {
  api.use('jquery')
  var path = Npm.require('path');

  api.add_files(
    [
      path.join('jquery_jeditable', 'img', 'calendar.png'),
      path.join('jquery_jeditable', 'img', 'indicator.gif'),

      path.join('jquery_jeditable', 'jquery.jeditable.js'),

      path.join('jquery-autogrow', 'jquery.autogrow.js'),
      path.join('jquery_jeditable', 'jquery.jeditable.autogrow.js'),

      path.join('jquery_jeditable', 'jquery.jeditable.charcounter.js'),

      path.join('jquery.maskedinput', 'src', 'jquery.maskedinput.js'),
      path.join('jquery_jeditable', 'jquery.jeditable.masked.js'),

      path.join('jquery_jeditable', 'jquery.jeditable.time.js'),

      path.join('jquery-timepicker', 'public', 'javascripts', 'jquery.timepicker.js'),
      path.join('jquery_jeditable', 'jquery.jeditable.timepicker.js')
    ],
    'client'
  );
});


