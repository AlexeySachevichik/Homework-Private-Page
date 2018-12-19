// Включаем прелодер страницы пока загружается страница
$(window).load(function() { 
	// Само колесико изчезает сразу же после загрузки
	$(".loader_inner").fadeOut(); 
	// Слой прелодера изчезает послепенно через 0,4 сек
	$(".loader").delay(400).fadeOut("slow"); 
});







$(document).ready(function() {

////// Портфолио
	
	// Инициализируем библиотеку для плиток, для их отображения иил сортировки
	$('.portfolio_table_items').mixItUp();


	// Для отображения подробной информации воспользуемся плагином popup
	// для связи всплывающего окна и плиткой  необходимо "раздать" id-шники
	// для ссылок "посмотреть", для на чала нужно этим ссылками прописать класс '.popup_content'
	// потом перебираем каждую плитку через класс '.portfolio_item' 
	$('.portfolio_item').each( function(i){

		// в каждой плитке находим ссылку и добавляем ей атрибут href="#<номер элемента>"
		$(this).find('.popup_content').attr('href', '#work_'+i);

		// далее в плитке находим div с подробным описанием и даем ему id-шник с номером элемента
		// ссылка будет связана с этим блоком
		$(this).find('.description').attr('id', 'work_'+i);
	});

	// в свойства ссылки, которая будет открывать popup с доп.информацией
	// пропишем что это будет окно, а не изображение
	$('.popup_content').magnificPopup({
		type:'inline',
		midClick: true
	});



////// Для всех элементов с классом '.popup' применим плагин magnific-popup
	$('.popup').magnificPopup({type:'image'});
	


////// Для главной и дополнительной записи в headere применим планое появление при 
	// фокусировке (скроле) на объект и плавное изчезание
	$('.home_title h1').addClass('anim fadeIn');
	$('.home_title p').addClass('anim fadeIn');

	// Для всех центральных названий title применим "выезд" снизу-вверх
	$('.section_title').addClass('anim fadeInUp');

	// Делаем анимацию для секции ОБО МНЕ для трех колонок
	
	$('.animate_zoom').addClass('anim zoomIn');
	$('.animate_left').addClass('anim fadeInLeft');
	$('.animate_right').addClass('anim fadeInRight');

	
	$('.left .resume_item').addClass('anim fadeInLeft');
	$('.right .resume_item').addClass('anim fadeInRight');

	$('.portfolio_item').addClass('anim zoomIn');

	$('.section_contact .box').addClass('anim fadeInLeft');
	$('.form').addClass('anim zoomIn');

////// Функция которая изменяет размер headera под весь  
	var heightDetect = function() {
		// Изменяем размер header по высоте экрана
		// добавляем css свойство классу '.head'
		// т.е. классу '.head' делаем минимальную высоту равную высоте браузера
		$('.head').css({'height': $(window).height() });

		// т.е. в классе '.head' указанна минимальная высота в 600px, но если высота браузер больше
		// то классу '.head' вычисляем и ставим высоту браузера
		// console.log( $(window).height() );
	};

////// Запускаем функцию для изменения высоты headera, для первого открытия страницы
	heightDetect();

////// При изменении окна браузера запускаем функцию
	// которая подстраивает '.head' под высоту
	$(window).resize( function () {
		heightDetect();
	});


////// Кнопка меню <button class="menu_toggle">
	// добавить класс пункта меню '.menu-item'
	$('.menu_toggle, .menu_container li a').click(function(e){

		// e.preventDefault();

		// класс '.sandwich' - это div с тремя полосками внутри
		// т.е. при клике на кнопку меню добавляем элементу с классом '.sandwich' класс 'active'
		$('.sandwich').toggleClass('active');

		$('.menu_container li a').append('<span>');
	});
	


////// При клике на кнопку меню <button class="menu_toggle">
	$('.menu_toggle, .menu_container li a').click(function(e){

		// e.preventDefault();

		// Если div с меню (занимаемый весь экран) виден, т.е. присутствует
		// на весь экран
		// is(':visible') в jQuery определяет виден ли элемент
		if ( $('.menu_container').is(':visible') ) {

			// Для всей секции home прозрачность ставим по дефолту
			$('.home_container').removeClass('home_opacity');

			// тогда div с меню плавно исзчезает за 0,6сек
			$('.menu_container').fadeOut(600);

			// Каждому элементу списка, точнее ссылкам, удалим класс библиотеки
			// Animated.css который задан по-умолчанию 'animated' и класc с которым эти
			// элементы появились на экране 'fadeInUp'
			$('.menu_container ul li').removeClass('animated fadeInUp');

		// если div с меню не виден, т.е. не отображается на экране
		// противополжное видемому - не видимое
		} else {

			// Делаем всей секции home прозрачность для того чтобы
			// не перебивало появляющеяся меню
			$('.home_container').addClass('home_opacity');

			// плавно показываем меню за 0,6сек 
			$('.menu_container').fadeIn(600);

			// и во время появления div с меню добавляем каждой ссылке меню анимацию 
			// плавного появления снизу вверх
			$('.menu_container ul li').addClass('animated fadeInUp');
		};
		
	});

	// Подключаем jqBootstrapValidation для проверки валидации формы перед отправкой
	$("input, textarea").jqBootstrapValidation();

	// Подключаем плагин pageToScrollId, т.е. плагин ищет все ссылки икоторые начинаются на # (решетку)
	// и автоматически скролит у ним
	$('a[href="#about"]').mPageScroll2id();
	$('a[href="#resume"]').mPageScroll2id();
	$('a[href="#portfolio"]').mPageScroll2id();
	$('a[href="#contact"]').mPageScroll2id();

});