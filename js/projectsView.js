var projectView = {}
var render = {
  changeNavTxtColor: function ($item) {
    console.log('setting event listener');
    //FIXME this is not working :(
    $item.on('hover', function () {
      console.log('HOVER HOVER');
      $(this).find('a').removeClass('pink-text');
    });
  },
};


$sections = $('section.nav-links');
console.log($sections);
$.each($sections, render.changeNavTxtColor);
