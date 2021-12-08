<?php

if ( ! defined( 'URL' ) ) {
	define( 'URL', site_url() . '/wp-content/themes/' . get_option( 'stylesheet' ) . '/' );
}
require_once 'inc/admin-pages/submissons.php';
require_once 'inc/styles-scripts.php';
require_once 'inc/wp-changes.php';
require_once 'inc/ajax.php';
require_once 'woocommerce/woo-functions.php';

add_filter( 'show_admin_bar', '__return_false' );


add_filter( 'body_class', 'sk_class_names' );
function sk_class_names( $classes ) {
	$is_ipad = (bool) strpos( $_SERVER['HTTP_USER_AGENT'], 'iPad' );
	global $is_safari, $is_iphone, $is_IE, $is_edge;

	if ( $is_safari ) {
		$classes[] = 'is_safari';
	}
	if ( $is_iphone ) {
		$classes[] = 'is_iphone';
	}
	if ( $is_IE ) {
		$classes[] = 'is_ie';
	}
	if ( $is_edge ) {
		$classes[] = 'is_edge';
	}
	if ( $is_ipad || ( $is_ipad && $is_iphone ) ) {
		$classes[] = 'is_ipad';
	}
	if ( stristr( $_SERVER['HTTP_USER_AGENT'],"mac") ) {
		$classes[] = 'osx';
	} elseif ( stristr( $_SERVER['HTTP_USER_AGENT'],"linux") ) {
		$classes[] = 'linux';
	} elseif ( stristr( $_SERVER['HTTP_USER_AGENT'],"windows") ) {
		$classes[] = 'windows';
	}

	return $classes;
}

function sk_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );

	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', '7thelabel' ),
		'services' => esc_html__( 'Services', '7thelabel' ),
        'top-menu'=> esc_html__( 'Top menu', 'jtrain' ),
        'shop-menu'=> esc_html__( 'Shop menu', 'jtrain' ),
	) );

	add_action( 'init', 'my_add_excerpts_to_pages' );
	function my_add_excerpts_to_pages() {
		add_post_type_support( 'page', 'excerpt' );
	}

      add_theme_support( 'woocommerce' ); // <<<< here
}

function remove_menus() {
	remove_menu_page( 'tools.php' );
	remove_menu_page( 'edit-comments.php' );
//	remove_menu_page( 'edit.php?post_type=acf-field-group' );
	remove_menu_page( 'edit.php?post_type=wccpf' );
//	remove_menu_page( 'edit.php' );
}
add_action( 'admin_menu', 'remove_menus', 9990);

add_action( 'after_setup_theme', 'sk_theme_setup' );


/**
 * Allow to upload SVG files
 */
function sk_mime_types( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';

	return $mimes;
}

add_filter( 'upload_mimes', 'sk_mime_types' );


function remove_yoast_license_nag_from_admin_page() {
	echo '<style>
		div.error {
			display: none;
		}
	</style>';
}

add_action( 'admin_head', 'remove_yoast_license_nag_from_admin_page' );
add_filter( 'plugin_action_links', 'disable_plugin_deactivation', 10, 2 );
function disable_plugin_deactivation( $actions, $plugin_file ) {
	unset( $actions['edit'] );

	$important_plugins = array(
		'advanced-custom-fields-pro/acf.php',
		'classic-editor/classic-editor.php',
		'acf-extended/acf-extended.php',
	);
	if ( in_array( $plugin_file, $important_plugins ) ) {
		unset( $actions['deactivate'] );
		$actions['info'] = '<b class="musthave_js">Required Plugin</b>';
	}

	return $actions;
}

add_filter( 'admin_print_footer_scripts-plugins.php', 'disable_plugin_deactivation_hide_checkbox' );
function disable_plugin_deactivation_hide_checkbox( $actions ) {
	?>
	<script>
        jQuery(function ($) {
            $('.musthave_js').closest('tr').find('input[type="checkbox"]').remove();
        });
	</script>
	<?php
}

/**
 * Add data attribute to menu <a> tag
 */
add_filter( 'nav_menu_link_attributes', function( $atts, $item, $args ) {
	$atts['data-title'] = $item->title;

	return $atts;
}, 10, 3 );


/**
 * ACF Google map key
 */
function my_acf_init() {
	acf_update_setting( 'google_api_key', 'AIzaSyCrIHebYJiUJSL0Z_wycqQIce5wEu8sCRg' );
}
add_action( 'acf/init', 'my_acf_init' );


add_filter( 'nav_menu_link_attributes', 'wpse121123_contact_menu_atts', 10, 3 );
function wpse121123_contact_menu_atts( $atts, $item, $args )
{

    $atts['data-href'] = $item->url;
  
//   return var_dump($item);
  return $atts;
}
