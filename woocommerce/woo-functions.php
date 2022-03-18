<?php

remove_action('woocommerce_before_shop_loop', 'woocommerce_output_all_notices', 10);
remove_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
remove_action('woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');
remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 40);
remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar', 10);
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10 );
add_filter( 'woocommerce_cart_item_thumbnail', '__return_false' );
add_filter('woocommerce_reset_variations_link', '__return_empty_string');



add_filter( 'woocommerce_enable_order_notes_field', '__return_false' );
// hide coupon field on checkout page
function webroom_hide_coupon_field_on_woocommerce_checkout( $enabled ) {

	if ( is_checkout() ) {
		$enabled = false;
	}

	return $enabled;
}
add_filter( 'woocommerce_coupons_enabled', 'webroom_hide_coupon_field_on_woocommerce_checkout' );

//function custom_remove_all_quantity_fields( $return, $product ) {return true;}
//add_filter( 'woocommerce_is_sold_individually','custom_remove_all_quantity_fields', 10, 2 );


add_filter( 'woocommerce_product_tabs', 'wc_remove_description_tab', 11, 1 );
function wc_remove_description_tab( $tabs ) {
	if ( isset( $tabs['description'] ) ) {
	    unset( $tabs['description'] );
    }
}
/**
 *
 * Disable WooCommerce styles
 */
add_filter('woocommerce_enqueue_styles', '__return_empty_array');


function woocommerce_template_loop_product_img_wrap_open()
{
    echo '<div class="img-wrap">';
}

function woocommerce_template_loop_product_img_wrap_close()
{
    echo '</div>';
}

add_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_img_wrap_open', 11);
add_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_img_wrap_close', 11);

add_action( 'woocommerce_product_data_panels', 'gowp_global_variation_price' );  function gowp_global_variation_price() {  	global $woocommerce;  	?>  		<script type="text/javascript">  			function addVariationLinks() {  				a = jQuery( '<a href="#">Apply to all Variations</a>' );  				b = jQuery( 'input[name^="variable_regular_price"].wc_input_price' );  				a.click( function( c ) {  					d = jQuery( this ).parent( 'label' ).next( 'input[name^="variable_regular_price"].wc_input_price' ).val();  					e = confirm( "Change the price of all variations to " + d + "?" );  					if ( e ) b.val( d ).trigger( 'change' );  					c.preventDefault();  				} );  				b.prev( 'label' ).append( " " ).append( a );  				aa = jQuery( '<a href="#">Apply to all Variations</a>' );  				bb = jQuery( 'input[name^="variable_sale_price"].wc_input_price' );  				aa.click( function( cc ) {  					dd = jQuery( this ).parent( 'label' ).next( 'input[name^="variable_sale_price"].wc_input_price' ).val();  					ee = confirm( "Change the price of all variations to " + dd + "?" );  					if ( ee ) bb.val( dd ).trigger( 'change' );  					cc.preventDefault();  				} );  				bb.prev( 'label' ).append( " " ).append( aa );  			}  			<?php if ( version_compare( $woocommerce->version, '2.4', '>=' ) ) : ?>  				jQuery( document ).ready( function() {  					jQuery( document ).ajaxComplete( function( event, request, settings ) {  						if ( settings.data.lastIndexOf( "action=woocommerce_load_variations", 0 ) === 0 ) {  							addVariationLinks();  						}  					} );  				} );  			<?php else: ?>  				addVariationLinks();  			<?php endif; ?>  		</script>  	<?php  }

//add gender taxonomy to porduct

// Register Custom Taxonomy
function gender_custom_taxonomy_Item() {
	$labels = array(
		'name'                       => 'Gender',
		'singular_name'              => 'Gender',
		'menu_name'                  => 'Gender',
		'all_items'                  => 'All Gender',
		'parent_item'                => 'Parent Gender',
		'parent_item_colon'          => 'Parent Gender:',
		'new_item_name'              => 'New Brand Name',
		'add_new_item'               => 'Add New Gender',
		'edit_item'                  => 'Edit Gender',
		'update_item'                => 'Update Gender',
		'separate_items_with_commas' => 'Separate Gender with commas',
		'search_items'               => 'Search Gender',
		'add_or_remove_items'        => 'Add or remove Gender',
		'choose_from_most_used'      => 'Choose from the most used Gender',
	);
	$args   = array(
		'labels'            => $labels,
		'hierarchical'      => true,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud'     => true,
	);
	register_taxonomy( 'item', 'product', $args );
}

add_action( 'init', 'gender_custom_taxonomy_item', 0 );


function sv_remove_cart_notice_on_checkout() {
	if ( function_exists( 'wc_cart_notices' ) ) {
		remove_action( 'woocommerce_before_checkout_form', array( wc_cart_notices(), 'add_cart_notice' ) );
	}
}
add_action( 'init', 'sv_remove_cart_notice_on_checkout' );



