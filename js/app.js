;(function($) {
  var app = $.sammy(function() {

    this.get('#/', function() {
      $('#main').text('sammy enters the stage...');
    });

    this.get('#/test', function() {
      $('#main').text('booyaka!');
    });

  });

  $(function() {
    app.run()
  });
})(jQuery);