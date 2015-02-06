$(document).ready(function() {
    $('.accordian-switch').click(function() {
        $('.accordian-content').slideUp();
        if ($(this).next('.accordian-content').css("display") == "none") {
        	$(this).next('.accordian-content').slideDown();
        } else {
        	$(this).next('.accordian-content').slideUp();
        }
        return false;
    });
});


$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#CCC',
    lineColor: '#FFF'
  });
});