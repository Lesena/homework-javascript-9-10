//$('#home_page').live('pagecreate', function () {
	//$('.promo-slider').slideCarousel({
		//slide_switch: true,
		//slide_timer: 10000
	//});
//});
//��� ������� ��������� ������ ������ �������, �������� ������� ������ � ������ ����������� ��� ������
/*$(function () {
$(document).ready(function(){   
	var widthDevice = $(window).width()-100;       
	$('div.promo-slider').width(widthDevice);
});

window.addEventListener('orientationchange', function() {
  	var land = $(window).width()-100;       
	$('div.promo-slider').width(land);
 }, false);

});*/
//��������� ����� �� ������� ������
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.shadow');
	right_carusel(carusel);
	return false;
});
//��������� ����� �� ������� �����
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.shadow');
	left_carusel(carusel);
	return false;
});

function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}
// �������������� ���������
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// ������ ������ �� ��������
$(document).on('mouseenter', '.jcarousel-pagination', function(){$(this).addClass('hover')})
//������ ������ � ��������
$(document).on('mouseleave', '.jcarousel-pagination', function(){$(this).removeClass('hover')})
//��������� ����� �� ������� �����
$(document).on('click',".jcarousel-pagination",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
//����� ���������� ��������� ������� �������� � ������������� �������� ���� 
//�� ����������������� ������� ����� ��������� �������� ������. �������� �������� 
//������ ����� ��� ������ ����������� ������� �webfontloader� https://github.com/typekit/webfontloader .
// ��� ������������ ������� ��� ����������������� �������� �� ���:
(function(){
 if (typeof WebFont != 'undefined') {
 WebFontConfig = {
 custom: {
 families: ['Arimo']
 },
 active: function() {
 $('select, :checkbox, :radio').trigger('refresh');
 }
 };
 WebFont.load(WebFontConfig);
 }
})();
//��� ��������� ������� ��������� ����� .styler � �����, ������� ������ �����������:
(function($) {
$('#my_select').styler({
    onSelectClosed: function(){
        $('#blokdiv').text( $(':selected',this).val() );
    }
});
})(jQuery);
// Checkbox
// ����������� ������� ����� �� ���� � ������� check
$('.checkboxes').find('.check').click(function(){
	// ����� �������: ���� ��������� � ��� ������� �������
	if( $(this).find('input').is(':checked') ) {
		// �� ������� ���������� � ����
		$(this).removeClass('active');
		// � ������� ������� checked (������ ������� �� ����������)
		$(this).find('input').removeAttr('checked');

	// ���� �� ������� �� �������, ��
	} else {
		// ��������� ����� ���������� ����
		$(this).addClass('active');
		// ��������� ������� checked ��������
		$(this).find('input').attr('checked', true);
	}
});
(function($) {
$("li").hover(function() {
    /* ��� ������� ����� ���������� ��� ����������� ������� HOVER (��������� ������� �� �������) �� ����� li */
 /* ��� ������� ����� ���������� ��� ����������� ������� HOVER (��������� ������� �� �������) �� ����� li */
        var itemwidth = $(this).width();
        /* �������� ������ li */
        $(this).prepend("<div class='hover'></div>");
        /* ��������� ������ div � li ����� ����� � */
        $(this).find("div").fadeIn('10000').css({ 'width':itemwidth});
        /* ���������� ������ li (itemwidth) ��� div */
       $(this).find("ul").fadeIn('1000').slideDown('10000').css("display", "block");
	
	} , function() {
    /* ��� ������� ����� ���������� ��� ����������� ������� HOVER OUT (�� ������� �������� ��������) �� ����� li */

	$(this).find("div").slideUp('1000').fadeOut('1000');
/* ��������� ������� silde up � fade out ��� div */
$(this).find("div").remove();
/* ������� div */
$(this).find("ul").fadeOut('1000');
/* ��������� ������ fad� out � ������� */
	});
	})(jQuery);
	(function($) {
	//������ ���� ������ li ��� ��������� ����:
	jQuery("li").mouseenter(
  function () {
	jQuery(this).animate({
	borderBottomColor:"#f00",
	borderLeftColor:"#f00",
	borderRightColor:"#f00",
	borderTopColor:"#f00",
     }, 800 );
  });

jQuery("li").mouseleave(function() {
	jQuery(this).animate({
	borderBottomColor:"#000",
	borderLeftColor:"#000",
	borderRightColor:"#000",
	borderTopColor:"#000",
     }, 800 );

});
jQuery("li").click(function () {
    jQuery(this).switchClass("green", "red", 1000);
});

})(jQuery);

