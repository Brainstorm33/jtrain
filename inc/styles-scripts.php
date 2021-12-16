<?php

add_action('wp_enqueue_scripts', 'sk_scripts');
function sk_scripts()
{
	wp_enqueue_style('main-styles');
	wp_enqueue_style('swiper');
	wp_enqueue_style('fancybox');
	wp_enqueue_style('lightbox');

	wp_enqueue_script('fancybox');
	wp_enqueue_script('gmap');
	wp_enqueue_script('swiper');
	wp_enqueue_script('swup');
	wp_enqueue_script('lightgallery');
	wp_enqueue_script('custom');
	wp_enqueue_script('main');
	wp_localize_script('main', 'ajax', ['url' => admin_url('admin-ajax.php')]);
	wp_localize_script('main', 'mapInfo', ['icon' => URL . 'images/marker.png']);
}

/**
 * Register CSS styles
 */
wp_register_style('main-styles', URL . 'dist/css/styles.min.css', '', time());
wp_register_style('swiper', 'https://unpkg.com/swiper@7/swiper-bundle.min.css', '', '');
wp_register_style('fancybox', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css', '', '');
wp_register_style('lightbox',  URL . 'dist/css/lightgallery-bundle.min.css', '', '');


/**
 * Register JS scripts 
 */

wp_register_script('swiper', 'https://unpkg.com/swiper@7/swiper-bundle.min.js', array('jquery'), '', false);
wp_register_script('swup', URL . 'dist/js/swup.min.js', array('jquery'), '', false);


wp_register_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyARoIdSIjID6KiIU_CiamtAP9N4QTAimnw', array('jquery'), '',true);
wp_register_script('fancybox', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js', array('jquery'), '', true);
wp_register_script('lightgallery',  URL . 'dist/js/lightgallery.min.js', array('jquery'), '', true);
wp_register_script('custom', URL . 'dist/js/custom.js', array('jquery'), '', true);
wp_register_script('main', URL . 'dist/js/main.min.js', array('jquery'), '', true);
