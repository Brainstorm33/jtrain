<?php
add_filter( 'set-screen-option', function( $status, $option, $value ){
	return ( $option == 'groups_table_per_page' ) ? (int) $value : $status;
}, 10, 3 );

add_action('admin_menu', function(){
	$hook = add_menu_page( 'Submissions', 'Submissions', 'manage_options', 'contact-submissions', 'show_requests', '', 4 );
	add_action( "load-$hook", 'example_table_page_load' );
} );

function example_table_page_load(){
	require_once 'Submissions_table.php';
	$option = 'per_page';
	$args   = [
		'label'   => 'Submissions',
		'default' => 5,
		'option'  => 'groups_per_page'
	];

	add_screen_option( $option, $args );
	$GLOBALS['Groups_List_Table'] = new Groups_List();
}

function show_requests(){
	require_once 'contact-submissions.php';
}