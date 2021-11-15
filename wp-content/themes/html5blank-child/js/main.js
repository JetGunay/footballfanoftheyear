(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away

		$('.mobile-menu').click(function(event){
			$("#mobile-menu").addClass('active');
			$('body').addClass('mobile-active');
		});

		$('.mobile-menu-close').click(function(event){
			$("#mobile-menu").removeClass('active');
			$('body').removeClass('mobile-active');
		});

		$('.desk-more-menu > ul > li.menu-item-has-children > a').each(function(event){
			$(this).after('<span><i class="fa fa-caret-down fa-active"></i><i class="fa fa-caret-up"></i></span>');
		});

		$('.desk-more-menu > ul > li.menu-item-has-children span').click(function(event){
			$(this).next().slideToggle("slow");
			$(this).children().toggleClass('fa-active');
		});

		$('#mobile-menu > ul > li.menu-item-has-children > a').each(function(event){
			$(this).after('<span><i class="fa fa-caret-down fa-active"></i><i class="fa fa-caret-up"></i></span>');
		});

		$('#mobile-menu > ul > li.menu-item-has-children span').click(function(event){
			$(this).next().slideToggle("slow");
			$(this).children().toggleClass('fa-active');
		});

		$(window).on('resize',function(e){

            if ($(this).width() > 768) {
                $('#mobile-menu').removeClass('active');
                $('body').removeClass('mobile-active');
            } 

        });
		
	});
	
	
	/* Modal pop up  */
	
	document.addEventListener( 'wpcf7invalid', function( event ) {
		$('.wpcf7-response-output').removeClass('d-none');
		$('.wpcf7-response-output').addClass('alert alert-danger');
	}, false );
	document.addEventListener( 'wpcf7spam', function( event ) {
		$('.wpcf7-response-output').removeClass('d-none');
		$('.wpcf7-response-output').addClass('alert alert-warning');
	}, false );
	document.addEventListener( 'wpcf7mailfailed', function( event ) {
		$('.wpcf7-response-output').removeClass('d-none');
		$('.wpcf7-response-output').addClass('alert alert-warning');
	}, false );
	
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		$('#sbmt-modal').fadeIn();
		$('.wpcf7-response-output').addClass('d-none');
	});
	
	$('.form-close').on('click', function(){
		$('#sbmt-modal').hide();
	})

	$(window).click(function(event){
		if (event.target.id == 'sbmt-modal') {
			$('#sbmt-modal').hide();
			
		  }
	});

})(jQuery, this);
