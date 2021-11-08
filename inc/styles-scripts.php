<?php

add_action('wp_enqueue_scripts', 'sk_scripts');
function sk_scripts()
{
	wp_enqueue_style('main-styles');
	wp_enqueue_style('swiper');
	wp_enqueue_style('fancybox');
	wp_enqueue_script('main');
	wp_enqueue_script('gmap');
	wp_enqueue_script('swiper');
	wp_enqueue_script('landing');
	wp_enqueue_script('fancybox');
	wp_localize_script('main', 'ajax', ['url' => admin_url('admin-ajax.php')]);
	wp_localize_script('main', 'mapInfo', ['icon' => URL . 'images/marker.png']);
}

/**
 * Register CSS styles
 */
wp_register_style('main-styles', URL . 'dist/css/styles.min.css', '', time());
wp_register_style('swiper', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css', '', '');
wp_register_style('landing', URL . 'js/landing.js', '', '');
wp_register_style('fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css', '', '');


/**
 * Register JS scripts 
 */

wp_register_script('swiper', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js', array('jquery'), '', false);


wp_register_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDuN31fBMoxu0G3DxEjlbrPVlK5Qj44qU0&callback=loadMap&v=weekly', array('jquery'), '', true);
wp_register_script('main', URL . 'dist/js/main.min.js', array('jquery'), time(), false);
wp_register_script('fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js', array('jquery'), '', true);
