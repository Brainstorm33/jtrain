<?php

/**
 * Add defer to scripts
 */
function defer_parsing_of_js( $url ) {
	if ( false === strpos( $url, '.js' ) ) {
		return $url;
	}
	if ( strpos( $url, 'jquery.js' ) ) {
		return $url;
	}

	return "$url' defer ";
}

if ( ! is_admin() ) {
	add_filter( 'clean_url', 'defer_parsing_of_js', 11, 1 );
}

/**
 * Remove jQuery Migrate script in WordPress.
 */
function remove_jquery_migrate( $scripts ) {
	if ( ! is_admin() && isset( $scripts->registered['jquery'] ) ) {
		$script = $scripts->registered['jquery'];

		if ( $script->deps ) { // Check whether the script has any dependencies
			$script->deps = array_diff( $script->deps, array( 'jquery-migrate' ) );
		}
	}
}

add_action( 'wp_default_scripts', 'remove_jquery_migrate' );

/**
 * Remove query string from styles & scripts
 */
function _remove_script_version( $src ) {
    if ( false !== strpos( $src, 'maps.google' ) ){
		return $src;
	}
    
	$parts = explode( '?', $src );

	return $parts[0];
}

add_filter( 'script_loader_src', '_remove_script_version', 15, 1 );
add_filter( 'style_loader_src', '_remove_script_version', 15, 1 );


/**
 * Remove wp not used functionality
 */
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'wp_shortlink_wp_head' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'pagenavi_css' );
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 );
remove_action( 'wp_head', 'feed_links_extra', 3 );
remove_action( 'wp_head', 'feed_links', 2 );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/**
 * Change login screen logo url
 */
add_filter( 'login_headerurl', 'sk_login_logo_url' );
function sk_login_logo_url() {
	return home_url();
}


/**
 * Change login screen logo title attr
 */
add_filter( 'login_headertitle', 'namespace_login_headertitle' );
function namespace_login_headertitle( $title ) {
	$title = get_bloginfo( 'name' );

	return $title;
}

add_action( 'login_head', 'sk_login_style' );

/**
 * Replaces the login screen logo
 */
function sk_login_style() { ?>
	<style>
		body {
			background-color: #ffffff;
		}

		.login h1 a {
			outline: none !important;
			border: none !important;
			background-image: url( <?php echo URL ?>images/logo.svg) !important;
			background-size: 160px;
			height: 68px;
			width: 160px;
		}

		.login #backtoblog a, .login #nav a {
			color: #ffffff;
		}

		.login #login_error {
			border-left-color: #ff0000;
		}

		.wp-core-ui .button.button-large {
			background-color: #000000 !important;
			border-color: #000000;
			box-shadow: none;
			text-shadow: none;
			color: #ffffff;
			height: 36px;
			line-height: 31px;
			padding: 0px 20px;
			font-size: 16px;
			border-radius: 0;
			transition: all .3s;
		}

		.login #backtoblog a, .login #nav a,
		.login #backtoblog, .login #nav {
			text-align: center;
			color: #000000;
			transition: all .3s;
		}

		.login #backtoblog a:hover, .login #nav a:hover,
		.wp-core-ui .button.button-large:hover {
			opacity: .8;
		}

		.login form {
			box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			transition: all .3s;
		}

		.login form:hover {
			box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
		}

		.login form .input, .login input[type=text] {
			margin-top: 8px;
			border-color: #000;
		}

		.login form input[type=checkbox], {
			margin-top: 2px;
		}

		.login label {
			text-transform: uppercase;
			letter-spacing: .1em;
			font-size: 12px;
			border-color: #000;
		}

		input[type=checkbox]:checked:before {
			color: #000000;
		}

		.login form .input:focus, .login form input[type=checkbox]:focus, .login input[type=text]:focus {
			box-shadow: none!important;
			outline: none!important;
			border-color: #000;
		}

	</style>
	<?php
}

/**
 * Obscure login screen error messages
 */
add_filter( 'authenticate', 'sk_auth_signon', 30, 3 );
function sk_auth_signon( $user, $lgn, $pwd ) {
	if ( isset( $user->errors['empty_username'] ) || isset( $user->errors['empty_password'] ) ) {
		return new WP_Error( 'empty', '<strong>Error</strong>: Please fill in all fields!' );
	}
	if ( isset( $user->errors['invalid_username'] ) || isset( $user->errors['incorrect_password'] ) ) {
		return new WP_Error( 'invalid', '<strong>Sorry</strong>: Think you have gone wrong somwhere!' );
	}

	return $user;
}

/**
 * Disable comments
 */
// Disable support for comments and trackbacks in post types
add_action( 'admin_init', 'ag_disable_comments_post_types_support' );
function ag_disable_comments_post_types_support() {
	$post_types = get_post_types();
	foreach ( $post_types as $post_type ) {
		if ( post_type_supports( $post_type, 'comments' ) ) {
			remove_post_type_support( $post_type, 'comments' );
			remove_post_type_support( $post_type, 'trackbacks' );
		}
	}
}

add_filter( 'comments_open', 'ag_disable_comments_status', 20, 2 );
add_filter( 'pings_open', 'ag_disable_comments_status', 20, 2 );
// Close comments on the front-end
function ag_disable_comments_status() {
	return false;
}

// Hide existing comments
add_filter( 'comments_array', 'ag_hide_existing_comments', 10, 2 );
function ag_hide_existing_comments( $comments ) {
	$comments = array();

	return $comments;
}

// Remove comments page in menu
add_action( 'admin_menu', 'ag_disable_comments_admin_menu' );
function ag_disable_comments_admin_menu() {
	remove_menu_page( 'edit-comments.php' );
}

// Redirect any user trying to access comments page
add_action( 'admin_init', 'ag_comments_admin_menu_redirect' );
function ag_comments_admin_menu_redirect() {
	global $pagenow;
	if ( $pagenow === 'edit-comments.php' ) {
		wp_redirect( admin_url() );
		exit;
	}
}

// Remove comments metabox from dashboard
add_action( 'admin_init', 'ag_disable_comments_dashboard' );
function ag_disable_comments_dashboard() {
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
}

/**
 * Remove admin footer links
 */
add_filter( 'admin_footer_text', function() {
	echo '';
} );

/**
 * Remove menus from the admin bar
 */
add_action( 'wp_before_admin_bar_render', 'ag_admin_bar_render' );
function ag_admin_bar_render() {
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu( 'wp-logo' );
	$wp_admin_bar->remove_menu( 'comments' );
	$wp_admin_bar->remove_menu( 'about' );
	$wp_admin_bar->remove_menu( 'wporg' );
	$wp_admin_bar->remove_menu( 'documentation' );
	$wp_admin_bar->remove_menu( 'support-forums' );
	$wp_admin_bar->remove_menu( 'feedback' );
}

/**
 * Remove help links from wp admin
 */
add_filter( 'contextual_help', 'wpse50723_remove_help', 999, 3 );
function wpse50723_remove_help( $old_help, $screen_id, $screen ) {
	$screen->remove_help_tabs();

	return $old_help;
}

/**
 * remove pings to self
 */
function no_self_ping( &$links ) {
	$home = get_option( 'home' );
	foreach ( $links as $l => $link ) {
		if ( 0 === strpos( $link, $home ) ) {
			unset( $links[ $l ] );
		}
	}
}

add_action( 'pre_ping', 'no_self_ping' );

/* placeholder image */
if ( ! defined( 'PLACEHOLDER_IMG' ) ) {
	define( 'PLACEHOLDER_IMG', URL . 'images/placeholder.png' );
}