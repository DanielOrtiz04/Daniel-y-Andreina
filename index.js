type="text/javascript"
    function applyStyle(style) {
      var buttons = document.getElementsByClassName('menu')[0].getElementsByTagName('button');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = style;
      }
      document.body.className = style;
    }