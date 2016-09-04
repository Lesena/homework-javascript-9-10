//$('#home_page').live('pagecreate', function () {
	//$('.promo-slider').slideCarousel({
		//slide_switch: true,
		//slide_timer: 10000
	//});
//});
//код который вычисляет ширину экрана девайса, «слушает» поворот экрана и делает необходимый мне отступ
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
//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.shadow');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
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
// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.jcarousel-pagination', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.jcarousel-pagination', function(){$(this).removeClass('hover')})
//Обработка клика на стрелку влево
$(document).on('click',".jcarousel-pagination",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
//Более правильным вариантом решения проблемы с подключаемыми шрифтами была 
//бы переинициализация плагина после окончания загрузки шрифта. Отловить загрузку 
//шрифта можно при помощи гугловского скрипта «webfontloader» https://github.com/typekit/webfontloader .
// При подключенном плагине код переинициализации выглядел бы так:
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
//Для активации плагина примените метод .styler к тегам, которые хотите стилизовать:
(function($) {
$('#my_select').styler({
    onSelectClosed: function(){
        $('#blokdiv').text( $(':selected',this).val() );
    }
});
})(jQuery);
// Checkbox
// Отслеживаем событие клика по диву с классом check
$('.checkboxes').find('.check').click(function(){
	// Пишем условие: если вложенный в див чекбокс отмечен
	if( $(this).find('input').is(':checked') ) {
		// то снимаем активность с дива
		$(this).removeClass('active');
		// и удаляем атрибут checked (делаем чекбокс не отмеченным)
		$(this).find('input').removeAttr('checked');

	// если же чекбокс не отмечен, то
	} else {
		// добавляем класс активности диву
		$(this).addClass('active');
		// добавляем атрибут checked чекбоксу
		$(this).find('input').attr('checked', true);
	}
});
(function($) {
$("li").hover(function() {
    /* эта функция будет вызываться при наступления события HOVER (наведении курсора на элемент) на любом li */
 /* эта функция будет вызываться при наступления события HOVER (наведении курсора на элемент) на любом li */
        var itemwidth = $(this).width();
        /* получаем ширину li */
        $(this).prepend("<div class='hover'></div>");
        /* вставляем пустой div в li перед тегом а */
        $(this).find("div").fadeIn('10000').css({ 'width':itemwidth});
        /* используем ширину li (itemwidth) для div */
       $(this).find("ul").fadeIn('1000').slideDown('10000').css("display", "block");
	
	} , function() {
    /* эта функция будет вызываться при наступлении события HOVER OUT (по кидание элемента курсором) на любом li */

	$(this).find("div").slideUp('1000').fadeOut('1000');
/* применяем эффекты silde up и fade out для div */
$(this).find("div").remove();
/* удяляем div */
$(this).find("ul").fadeOut('1000');
/* применяем эффект fadе out к подменю */
	});
	})(jQuery);
	(function($) {
	//Меняем цвет границ li при наведении мыши:
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

