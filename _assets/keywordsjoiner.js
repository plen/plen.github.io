(function($){
  $.keywordsjoiner = function(element, options) {
    var $element = $(element),
         element = element;
         
         var plugin = this;

         plugin.defaults = {
           inputListA: $('#rawkeywordsgroup1'),
           inputListB: $('#rawkeywordsgroup2'),
           outputList: $('#joinedkeywords')
         }
         
         plugin.method = {
           reset: function() {
             plugin.defaults.outputList.children().remove();
           },
           
           permute: function() {
             if (plugin.defaults.outputList.children().length > 0) {
               plugin.method.reset();
             }
             
             if (plugin.defaults.inputListA.is('textarea')) {
               var keywordsA = plugin.defaults.inputListA.val().trim().replace(/\n|\r|\t/,'').split(/\s*,\s*/);
             }

            if (plugin.defaults.inputListB.is('textarea')) {
               var keywordsB = plugin.defaults.inputListB.val().trim().replace(/\n|\r|\t/,'').split(/\s*,\s*/);   
             }
             
             if (keywordsA.length == 0) {
               alert('You have not yet entered any keywords to permute.')
               return false;
             }
             
             if (keywordsB.length == 0) {
               alert('You have not yet entered any keywords to permute.')
               return false;
             }
             
             var leadingAOutputString = plugin.method.joinEm(keywordsA, keywordsB);
             
             plugin.defaults.outputList.append('<textarea class="form-control" name="Answers" rows="10">' + leadingAOutputString + '</textarea>');
             
           },
           
           joinEm: function(listA, listB) {
             var anArray = [];
             for (i=0; i<listA.length; i++) {
               for (j=0; j<listB.length; j++) {
                 anArray.push(listA[i].concat(" " + listB[j] ));
               }
             }
             
             aString = anArray.toString();
             return aString.replace(/,/g, "\r");
           }
         }
         
         plugin.init = function() {
           // Bind "permute" button
           $element.find('input[type="submit"]').on('click', function(e) {
             e.preventDefault();
             plugin.defaults.inputListA = $('#rawkeywordsgroup1');
             plugin.defaults.inputListB = $('#rawkeywordsgroup2');
             plugin.method.permute();
           });
         }
         
         plugin.init();
  }
  
  $.fn.keywordsjoiner = function(options) {
    return this.each(function() {
      if (undefined == $(this).data('keywordsjoiner')) {
        var plugin = new $.keywordsjoiner(this, options);
        $(this).data('keywordsjoiner', plugin);
      }
    });
  }
})(jQuery);