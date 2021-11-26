<?php
/**
 * Proceed to checkout button
 *
 * Contains the markup for the proceed to checkout button on the cart.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/proceed-to-checkout-button.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 2.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$min_order_amount = get_option( 'woocommerce_individual_min_order' );
$current_order_amount = WC()->cart->get_cart_contents_total();
$user = wp_get_current_user();
$roles = ( array ) $user->roles;



$cart_items = WC()->cart->get_cart();
$boxes_products = array();

if(!empty($cart_items))
{
    foreach($cart_items as $item => $values)
    {
        $p_id = $values['data']->get_id();

        $tags = get_the_terms($p_id, 'product_tag');
        $tags_array = array();

        foreach ($tags as $tag){
            $tags_array[] = $tag->name;
        }

        if(in_array('box', $tags_array)){
            $boxes_products[] = true;
        }else{
            $boxes_products[] = false;
        }
    }
}

$check_box_product = false;

$unique_boxes_products = array_unique($boxes_products);

if(count($unique_boxes_products) == 1 && in_array(true, $unique_boxes_products)){
    $check_box_product = true;
}

if($check_box_product){
    ?>
    <div>
        <a href="<?php echo esc_url( wc_get_checkout_url() ); ?>" class="checkout-button button alt wc-forward">
            <?php esc_html_e( 'checkout', 'woocommerce' ); ?>
        </a>
    </div>
    <?php
    return;
}


    if (is_user_logged_in() && in_array('subscriber', $roles) && $current_order_amount < $min_order_amount):
	?>
	<div>
		<a class="checkout-button button alt wc-forward disabled">
			<?php esc_html_e( 'checkout', 'woocommerce' ); ?>
		</a>
	</div>
	<?php
	echo sprintf( '<p class="min-order-error">*Your current order total is <strong>%s</strong> — you must have an order with a minimum of <strong>%s</strong> to place your order.</p>', wc_price( WC()->cart->total ), wc_price( $min_order_amount ) );
else :
	?>
	<div>
		<a href="<?php echo esc_url( wc_get_checkout_url() ); ?>" class="checkout-button button alt wc-forward">
			<?php esc_html_e( 'checkout', 'woocommerce' ); ?>
		</a>
	</div>
<?php
endif;