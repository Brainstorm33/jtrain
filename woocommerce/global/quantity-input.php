<?php
/**
 * Product quantity inputs
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/global/quantity-input.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

$user = wp_get_current_user();

if ( in_array( 'customer', (array) $user->roles ) ) {
	?>
	<div class="quantity flex fac">
		<label class="screen-reader-text option-title" for="<?php echo esc_attr( $input_id ); ?>"><?php echo __('Qty:', 'nunzia'); ?> </label>
		<div>
			<select name="<?php echo esc_attr( $input_name ); ?>" id="<?php echo esc_attr( $input_id ); ?>" class="<?php echo esc_attr( join( ' ', (array) $classes ) ); ?>">
				<option value="6"<?php echo ($input_value == 6) ? ' selected' : ''; ?>>6</option>
				<option value="12"<?php echo ($input_value == 12) ? ' selected' : ''; ?>>12</option>
			</select>
		</div>
	</div>
	<?php
}
else {
	if ( $max_value && $min_value === $max_value ) {
		?>
		<div class="quantity hidden">
			<input type="hidden" id="<?php echo esc_attr( $input_id ); ?>" class="qty" name="<?php echo esc_attr( $input_name ); ?>" value="<?php echo esc_attr( $min_value ); ?>" />
		</div>
		<?php
	} else {
		?>
		<div class="quantity flex fac">
			<label class="screen-reader-text option-title" for="<?php echo esc_attr( $input_id ); ?>"><?php echo __('Qty:', 'nunzia'); ?> </label>
			<div class="flex fac">
				<a class="qty-btn qty-btn-minus" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
					<span></span>
				</a>
				<input
						type="number"
						id="<?php echo esc_attr( $input_id ); ?>"
						class="<?php echo esc_attr( join( ' ', (array) $classes ) ); ?>"
						step="<?php echo esc_attr( $step ); ?>"
						min="<?php echo esc_attr( $min_value ); ?>"
						max="<?php echo esc_attr( 0 < $max_value ? $max_value : '' ); ?>"
						name="<?php echo esc_attr( $input_name ); ?>"
						value="<?php echo esc_attr( $input_value ); ?>"
						title="<?php echo esc_attr_x( 'Qty', 'Product quantity input tooltip', 'woocommerce' ); ?>"
						size="4"
						inputmode="<?php echo esc_attr( $inputmode ); ?>" />
				<a class="qty-btn qty-btn-plus" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
					<span></span>
				</a>
			</div>
		</div>
		<?php
	}
}

