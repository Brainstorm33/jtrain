<?php
/**
 * Review order table
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/review-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see        https://docs.woocommerce.com/document/template-structure/
 * @package    WooCommerce/Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="woocommerce-checkout-review-order-table">
	<ul class="order-items">
		<?php
		do_action( 'woocommerce_review_order_before_cart_contents' );

		foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
			$_product = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );

			if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_checkout_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
				?>
				<li class="<?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item flex fjb fac', $cart_item, $cart_item_key ) ); ?>">
					<div class="product-thumbnail">
						<?php
						$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image( 'thumbnail' ), $cart_item, $cart_item_key );

						if ( ! $product_permalink ) {
							echo $thumbnail; // PHPCS: XSS ok.
						}
						else {
							printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $thumbnail ); // PHPCS: XSS ok.
						}
						?>
					</div>
					<div class="product-props flex fdc fjb">
						<h5 class="product-name">
							<?php echo trim( apply_filters( 'woocommerce_cart_item_name', $_product->get_title(), $cart_item, $cart_item_key ) );

							echo wc_get_formatted_cart_item_data( $cart_item ); ?>
						</h5>
					</div>
					<span class="product-total">
						<?php echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); ?>
					</span>
				</li>
				<?php
			}
		}

		do_action( 'woocommerce_review_order_after_cart_contents' );
		?>
	</ul>

	<div class="amounts">
		<ul>
			<li class="cart-subtotal">
				<span class="row-title"><?php _e( 'Subtotal', 'woocommerce' ); ?></span>
				<span class="row-value"><?php wc_cart_totals_subtotal_html(); ?></span>
			</li>

			<?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>
				<li class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
					<span class="row-title"><?php wc_cart_totals_coupon_label( $coupon ); ?></span>
					<span class="row-value"><?php wc_cart_totals_coupon_html( $coupon ); ?></span>
				</li>
			<?php endforeach; ?>

			<?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) : ?>

				<?php do_action( 'woocommerce_review_order_before_shipping' ); ?>

				<?php wc_cart_totals_shipping_html(); ?>

				<?php do_action( 'woocommerce_review_order_after_shipping' ); ?>

			<?php endif; ?>

			<?php foreach ( WC()->cart->get_fees() as $fee ) : ?>
				<li class="fee">
					<span class="row-title"><?php echo esc_html( $fee->name ); ?></span>
					<span class="row-value"><?php wc_cart_totals_fee_html( $fee ); ?></span>
				</li>
			<?php endforeach; ?>

			<?php if ( wc_tax_enabled() && ! WC()->cart->display_prices_including_tax() ) : ?>
				<?php if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) : ?>
					<?php foreach ( WC()->cart->get_tax_totals() as $code => $tax ) : ?>
						<li class="tax-rate tax-rate-<?php echo sanitize_title( $code ); ?>">
							<span class="row-title"><?php echo esc_html( $tax->label ); ?></span>
							<span class="row-value"><?php echo wp_kses_post( $tax->formatted_amount ); ?></span>
						</li>
					<?php endforeach; ?>
				<?php else : ?>
					<li class="tax-total">
						<span class="row-title"><?php echo esc_html( WC()->countries->tax_or_vat() ); ?></span>
						<span class="row-value"><?php wc_cart_totals_taxes_total_html(); ?></span>
					</li>
				<?php endif; ?>
			<?php endif; ?>

			<?php do_action( 'woocommerce_review_order_before_order_total' ); ?>
		</ul>
		<div class="order-total flex fac fjb">
			<span class="row-title"><?php _e( 'Total', 'woocommerce' ); ?></span>
			<span class="row-value"><?php wc_cart_totals_order_total_html(); ?></span>
		</div>
	</div>


	<?php do_action( 'woocommerce_review_order_after_order_total' ); ?>

</div>
