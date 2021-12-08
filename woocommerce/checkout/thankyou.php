<?php
/**
 * Thankyou page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/thankyou.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @package 	WooCommerce/Templates
 * @version     3.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div class="thankyou-wrp flex fjc fac">
	<div class="inner-wrp tac">
		<h1 class="ff-zs bold"><?php echo __('Thank you for your purchase!', 'nunzia'); ?></h1>
		<p><?php echo __('Your order has been accepted and ready to ship.', 'nunzia') ?></p>
		<a href="/shop"><span><?php echo __('BACK TO STORE', 'nunzia') ?></span></a>
	</div>
</div>