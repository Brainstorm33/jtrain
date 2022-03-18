<?php

//add_action('wp_enqueue_scripts', 'sk_scripts');
//function sk_scripts()
//{
//	wp_enqueue_style('main-styles');
//	wp_enqueue_style('swiper');
//	wp_enqueue_style('fancybox');
//	wp_enqueue_style('lightbox');
//
//	wp_enqueue_script('fancybox');
//	wp_enqueue_script('gmap');
//	wp_enqueue_script('swiper');
//	wp_enqueue_script('swup');
//	wp_enqueue_script('lightgallery');
//	wp_enqueue_script('main');
//	wp_enqueue_script('custom');
//	wp_localize_script('main', 'ajax', ['url' => admin_url('admin-ajax.php')]);
//	wp_localize_script('main', 'mapInfo', ['icon' => URL . 'images/marker.png']);
//}


//wp_register_style('main-styles', URL . 'dist/css/styles.min.css', '', time());
//wp_register_style('swiper', 'https://unpkg.com/swiper@7/swiper-bundle.min.css', '', '');
//wp_register_style('fancybox', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css', '', '');
//wp_register_style('lightbox',  URL . 'dist/css/lightgallery-bundle.min.css', '', '');


/**
 * Register JS scripts
 */



//wp_register_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyARoIdSIjID6KiIU_CiamtAP9N4QTAimnw', array('jquery'), '',true);
//wp_register_script('fancybox', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js', array('jquery'), '', true);
//wp_register_script('lightgallery',  URL . 'dist/js/lightgallery.min.js', array('jquery'), '', true);
//wp_register_script('custom', URL . 'dist/js/custom.js', array('jquery'), '', false);
//wp_register_script('main', URL . 'dist/js/main.min.js', array('jquery'), '', true);
//wp_register_script('swiper', 'https://unpkg.com/swiper@7/swiper-bundle.min.js', array('jquery'), '', true);
//wp_register_script('swup', URL . 'dist/js/swup.min.js', array('jquery'), '', false);



function jtrain_register_theme_assets(){
	//	REG STYLES
	wp_register_style('main-styles', URL . 'dist/css/styles.min.css', '', time());
	wp_register_style('swiper', 'https://unpkg.com/swiper@7/swiper-bundle.min.css', '', '');
	wp_register_style('fancybox-css', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css', '', '');
	wp_register_style('lightbox',  URL . 'dist/css/lightgallery-bundle.min.css', '', '');
	//
	// REG JS
	wp_register_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyARoIdSIjID6KiIU_CiamtAP9N4QTAimnw', array('jquery'), '',true);
	wp_register_script('fancybox-js', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js', array('jquery'), '', true);
	wp_register_script('lightgallery',  URL . 'dist/js/lightgallery.min.js', array('jquery'), '', true);
	wp_register_script('swiper', 'https://unpkg.com/swiper@7/swiper-bundle.min.js', array('jquery'), '', true);
	wp_register_script('swup', URL . 'dist/js/swup.min.js', array('jquery'), '', false);
	wp_register_script('fp.extensions', URL . 'dist/js/fp.extensions.js', array('jquery'), '', true);
	wp_register_script('fp.scrollHorizontally', URL . 'dist/js/fp.scrollHorizontally.js', array('jquery'), '', true);
	wp_register_script('lazyload', URL . 'dist/js/lazyload.js', array('jquery'), '', true);
	wp_register_script('fullpage.parallax.limited', URL . 'dist/js/fullpage.parallax.limited.min.js', array('jquery'), '', true);
	wp_register_script('main', URL . 'dist/js/main.js', array('jquery'), '', true);
	wp_register_script('custom', URL . 'dist/js/custom.js', array('jquery'), '', true);
	wp_register_script('map', URL . 'dist/js/map.js', array('jquery'), '', true);
	wp_register_script('scrolloverflow', URL . 'dist/js/scrolloverflow.js', array('jquery'), '', true);

	// Call css
	wp_enqueue_style('main-styles');
	wp_enqueue_style('swiper');
	wp_enqueue_style('fancybox-css');
	wp_enqueue_style('lightbox');

	// Call js
	wp_enqueue_script( 'gmap' );
	wp_enqueue_script( 'fancybox-js' );
	wp_enqueue_script( 'lightgallery' );
	wp_enqueue_script( 'swiper' );
	wp_enqueue_script( 'swup' );
	wp_enqueue_script( 'map' );

	if ( is_home() or is_front_page() ) {
		wp_enqueue_script( 'fp.extensions' );
		wp_enqueue_script( 'fp.scrollHorizontally' );
		wp_enqueue_script( 'fullpage.parallax.limited' );
		wp_enqueue_script( 'scrolloverflow' );
		wp_enqueue_script( 'lazyload' );
		wp_enqueue_script( 'main' );
	}
	wp_enqueue_script( 'custom' );

	wp_localize_script('main', 'ajax', ['url' => admin_url('admin-ajax.php')]);
	wp_localize_script('main', 'mapInfo', ['icon' => URL . 'images/marker.png']);
}
add_action( 'wp_enqueue_scripts', 'jtrain_register_theme_assets' );