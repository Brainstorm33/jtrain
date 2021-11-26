<?php
$year = date( 'Y' );

$items = $order->get_items();
$order_number = esc_html( $order->get_order_number() );
$subtotal = '$' . number_format( $order->get_subtotal(), 2 );
$shipping = '$' . number_format( $order->get_shipping_total(), 2 );
$tax = '$' . number_format( $order->get_total_tax(), 2 );
$total = $order->get_formatted_order_total();

$shipping_fname = $order->get_shipping_first_name();
$shipping_lname = $order->get_shipping_last_name();
$shipping_addr1 = $order->get_shipping_address_1();
$shipping_addr2 = $order->get_shipping_address_2();
$shipping_state = $order->get_shipping_state();
$shipping_city = $order->get_shipping_city();
$shipping_country = $order->get_shipping_country();
$shipping_postcode = $order->get_shipping_postcode();

$billing_fname = $order->get_billing_first_name();
$billing_lname = $order->get_billing_last_name();
$billing_addr1 = $order->get_billing_address_1();
$billing_addr2 = $order->get_billing_address_2();
$billing_state = $order->get_billing_state();
$billing_city = $order->get_billing_city();
$billing_country = $order->get_billing_country();
$billing_postcode = $order->get_billing_postcode();

$shipping_method = ( $order->get_shipping_method() ) ? $order->get_shipping_method() : '';
$payment_method = ( $order->get_payment_method_title() ) ? $order->get_payment_method_title() : ''; ?><!DOCTYPE html PUBLIC
		"-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
<head>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<meta name="x-apple-disable-message-reformatting">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="telephone=no" name="format-detection">
	<title>Your Nunzia Truffle order has been received!</title>
	<!--[if (mso 16)]>
	<style type="text/css">
		a {
			text-decoration: none;
		}
	</style>
	<![endif]-->
	<!--[if gte mso 9]>
	<style>sup {
		font-size: 100% !important;
	}</style><![endif]-->
	<!--[if !mso]><!-- -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
	<!--<![endif]-->
	<style type="text/css">
		@media only screen and (max-width: 600px) {
			p, ul li, ol li, a {
				font-size: 16px !important;
				line-height: 150% !important
			}

			h1 {
				font-size: 30px !important;
				text-align: center;
				line-height: 120% !important
			}

			h2 {
				font-size: 26px !important;
				text-align: center;
				line-height: 120% !important
			}

			h3 {
				font-size: 20px !important;
				text-align: center;
				line-height: 120% !important
			}

			h1 a {
				font-size: 30px !important
			}

			h2 a {
				font-size: 26px !important
			}

			h3 a {
				font-size: 20px !important
			}

			.es-menu td a {
				font-size: 16px !important
			}

			.es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a {
				font-size: 16px !important
			}

			.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a {
				font-size: 16px !important
			}

			.es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a {
				font-size: 12px !important
			}

			*[class="gmail-fix"] {
				display: none !important
			}

			.es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 {
				text-align: center !important
			}

			.es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 {
				text-align: right !important
			}

			.es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 {
				text-align: left !important
			}

			.es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img {
				display: inline !important
			}

			.es-button-border {
				display: block !important
			}

			a.es-button {
				font-size: 20px !important;
				display: block !important;
				border-width: 10px 0px 10px 0px !important
			}

			.es-btn-fw {
				border-width: 10px 0px !important;
				text-align: center !important
			}

			.es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right {
				width: 100% !important
			}

			.es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header {
				width: 100% !important;
				max-width: 600px !important
			}

			.es-adapt-td {
				display: block !important;
				width: 100% !important
			}

			.adapt-img {
				width: 100% !important;
				height: auto !important
			}

			.es-m-p0 {
				padding: 0px !important
			}

			.es-m-p0r {
				padding-right: 0px !important
			}

			.es-m-p0l {
				padding-left: 0px !important
			}

			.es-m-p0t {
				padding-top: 0px !important
			}

			.es-m-p0b {
				padding-bottom: 0 !important
			}

			.es-m-p20b {
				padding-bottom: 20px !important
			}

			.es-mobile-hidden, .es-hidden {
				display: none !important
			}

			.es-desk-hidden {
				display: table-row !important;
				width: auto !important;
				overflow: visible !important;
				float: none !important;
				max-height: inherit !important;
				line-height: inherit !important
			}

			.es-desk-menu-hidden {
				display: table-cell !important
			}

			table.es-table-not-adapt, .esd-block-html table {
				width: auto !important
			}

			table.es-social {
				display: inline-block !important
			}

			table.es-social td {
				display: inline-block !important
			}
		}

		#outlook a {
			padding: 0;
		}

		.ExternalClass {
			width: 100%;
		}

		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
			line-height: 100%;
		}

		.es-button {
			mso-style-priority: 100 !important;
			text-decoration: none !important;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: none !important;
			font-size: inherit !important;
			font-family: inherit !important;
			font-weight: inherit !important;
			line-height: inherit !important;
		}

		.es-desk-hidden {
			display: none;
			float: left;
			overflow: hidden;
			width: 0;
			max-height: 0;
			line-height: 0;
			mso-hide: all;
		}
	</style>
</head>
<body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
<span style="display:none !important;font-size:0px;line-height:0;color:#FFFFFF;visibility:hidden;opacity:0;height:0;width:0;mso-hide:all;">Order #<?php echo $order_number; ?> has been processed.</span>
<div class="es-wrapper-color" style="background-color:#F6F6F6;">
	<!--[if gte mso 9]>
	<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
		<v:fill type="tile" color="#f6f6f6"></v:fill>
	</v:background>
	<![endif]-->
	<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
		   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">
		<tr style="border-collapse:collapse;">
			<td valign="top" style="padding:0;Margin:0;">
				<table class="es-header" cellspacing="0" cellpadding="0" align="center"
					   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">
					<tr style="border-collapse:collapse;">
						<td align="center" style="padding:0;Margin:0;">
							<table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
								   align="center"
								   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="Margin:0;padding-left:20px;padding-right:20px;padding-bottom:25px;padding-top:35px;">
										<table width="100%" cellspacing="0" cellpadding="0"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="560" valign="top" align="center" style="padding:0;Margin:0;">
													<table width="100%" cellspacing="0" cellpadding="0"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center" style="padding:0;Margin:0;"><img
																		src="<?php echo URL; ?>images/mail/logo-dark.png"
																		alt="Nunzia Truffle"
																		style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"
																		width="144"></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table cellpadding="0" cellspacing="0" class="es-content" align="center"
					   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
					<tr style="border-collapse:collapse;">
						<td align="center" style="padding:0;Margin:0;">
							<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
								   cellspacing="0" width="600"
								   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
								<tr style="border-collapse:collapse;">
									<td align="left" style="padding:0;Margin:0;">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="600" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center" style="padding:0;Margin:0;"><img
																		class="adapt-img"
																		src="<?php echo URL; ?>images/mail/top-img.png"
																		alt="hero"
																		style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"
																		width="600"></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table cellpadding="0" cellspacing="0" class="es-content" align="center"
					   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
					<tr style="border-collapse:collapse;">
						<td align="center" style="padding:0;Margin:0;">
							<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
								   cellspacing="0" width="600"
								   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="560" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center" style="padding:0;Margin:0;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:42px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:50px;color:#000000;">
																	<strong>Thank you for</strong></p>
																<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:42px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:50px;color:#000000;">
																	<strong>your purchase.</strong></p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="Margin:0;padding-top:30px;padding-bottom:40px;padding-left:40px;padding-right:40px;">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="520" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center" style="padding:0;Margin:0;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#000000;">
																	Order <?php echo $order_number; ?> has been processed <br>.Your items
																	will ship in 1-2 business days.*<br></p>
																<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#000000;">
																	We’ll send you another email when you box is on its
																	way.</p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table cellpadding="0" cellspacing="0" class="es-content" align="center"
					   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">
					<tr style="border-collapse:collapse;">
						<td align="center" style="padding:0;Margin:0;">
							<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
								   cellspacing="0" width="600"
								   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-image:url(<?php echo URL; ?>images/mail/trufflebg.png);background-position:left top;background-repeat:no-repeat;"
										background="<?php echo URL; ?>images/mail/trufflebg.png">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="560" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center"
																style="padding:0;Margin:0;padding-top:25px;padding-bottom:25px;">
																<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:24px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:36px;color:#333333;">
																	<strong>Order Details:</strong></p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:40px;">
										<!--[if mso]>
										<table width="560" cellpadding="0" cellspacing="0">
											<tr>
												<td width="178" valign="top"><![endif]-->
										<table class="es-left" cellspacing="0" cellpadding="0" align="left"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">
											<tr style="border-collapse:collapse;">
												<td class="es-m-p0r es-m-p20b" width="178" valign="top" align="center"
													style="padding:0;Margin:0;">
													<table width="100%" cellspacing="0" cellpadding="0"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td class="es-m-txt-c" align="left"
																style="padding:0;Margin:0;"><h4
																		style="Margin:0;line-height:17px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;">
																	ORDER #<?php echo $order_number; ?>:</h4></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td>
										<td width="20"></td>
										<td width="362" valign="top"><![endif]-->
										<table cellspacing="0" cellpadding="0" align="right"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="362" align="left" style="padding:0;Margin:0;">
													<table width="100%" cellspacing="0" cellpadding="0"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left" style="padding:0;Margin:0;">
																<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;"
																	   class="cke_show_border" cellspacing="1"
																	   cellpadding="1" border="0">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0;font-size:13px;">
																			<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																				NAME</p></td>
																		<td style="padding:0;Margin:0;text-align:center;font-size:13px;line-height:13px;"
																			width="15%"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																				QTY</p></td>
																		<td style="padding:0;Margin:0;text-align:center;font-size:13px;line-height:13px;"
																			width="30%"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																				PRICE</p></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td></tr></table><![endif]--></td>
								</tr>
								<tr style="border-collapse:collapse;">
									<td align="left" style="padding:0;Margin:0;">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="600" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center"
																style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:1px solid #CACACA;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>

								<?php
								foreach ( $items as $item_id => $item_data ) :
									$name = $item_data->get_name();
									$product = $item_data->get_product();
									$thumbnail_id = $product->get_image_id();
									$thumbnail_url = wp_get_attachment_image_url( $thumbnail_id, 'thumbnail' );
									$item_quantity = $item_data->get_quantity(); // Get the item quantity
									$item_total = wc_price( $item_data->get_total() ); // Get the item line total
									$item_url = $product->get_permalink();
									?>

									<tr style="border-collapse:collapse;">
										<td align="left"
											style="Margin:0;padding-bottom:10px;padding-top:15px;padding-left:20px;padding-right:20px;background-position:center top;">
											<!--[if mso]>
											<table width="560" cellpadding="0" cellspacing="0">
												<tr>
													<td width="178" valign="top"><![endif]-->
											<table class="es-left" cellspacing="0" cellpadding="0" align="left"
												   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">
												<tr style="border-collapse:collapse;">
													<td class="es-m-p0r es-m-p20b" width="178" valign="top"
														align="center"
														style="padding:0;Margin:0;">
														<table width="100%" cellspacing="0" cellpadding="0"
															   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
															<tr style="border-collapse:collapse;">
																<td align="center" style="padding:0;Margin:0;"><a
																			href="<?php echo $item_url; ?>"
																			target="_blank"
																			style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#2CB543;"><img
																				src="<?php echo $thumbnail_url; ?>"
																				alt="<?php echo $name; ?>"
																				title="<?php echo $name; ?>" width="125"
																				style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!--[if mso]></td>
											<td width="20"></td>
											<td width="362" valign="top"><![endif]-->
											<table cellspacing="0" cellpadding="0" align="right"
												   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
												<tr style="border-collapse:collapse;">
													<td width="362" align="left" style="padding:0;Margin:0;">
														<table width="100%" cellspacing="0" cellpadding="0"
															   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
															<tr style="border-collapse:collapse;">
																<td align="center"
																	style="Margin:0;padding-left:20px;padding-right:20px;padding-top:15px;padding-bottom:15px;">
																	<table border="0" width="100%" height="100%"
																		   cellpadding="0" cellspacing="0"
																		   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																		<tr style="border-collapse:collapse;">
																			<td style="padding:0;Margin:0px;border-bottom:0px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td>
																		</tr>
																	</table>
																</td>
															</tr>
															<tr style="border-collapse:collapse;">
																<td align="left"
																	style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;">
																	<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;"
																		   class="cke_show_border" cellspacing="1"
																		   cellpadding="1" border="0">
																		<tr style="border-collapse:collapse;">
																			<td style="padding:0;Margin:0;"><p
																						style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;">
																					<strong><?php echo $name; ?></strong>
																				</p>
																			</td>
																			<td style="padding:0;Margin:0;text-align:center;"
																				width="15%"><p
																						style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																					<strong><?php echo $item_quantity; ?></strong>
																				</p>
																			</td>
																			<td style="padding:0;Margin:0;text-align:center;"
																				width="30%"><p
																						style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																					<strong><?php echo $item_total; ?></strong>
																				</p>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</table>
											<!--[if mso]></td></tr></table><![endif]--></td>
									</tr>
									<tr style="border-collapse:collapse;">
										<td align="left" style="padding:0;Margin:0;">
											<table cellpadding="0" cellspacing="0" width="100%"
												   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
												<tr style="border-collapse:collapse;">
													<td width="600" align="center" valign="top"
														style="padding:0;Margin:0;">
														<table cellpadding="0" cellspacing="0" width="100%"
															   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
															<tr style="border-collapse:collapse;">
																<td align="center"
																	style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;">
																	<table border="0" width="100%" height="100%"
																		   cellpadding="0" cellspacing="0"
																		   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																		<tr style="border-collapse:collapse;">
																			<td style="padding:0;Margin:0px;border-bottom:1px solid #CACACA;background:none;height:1px;width:100%;margin:0px;"></td>
																		</tr>
																	</table>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								<?php
								endforeach;
								?>

								<tr style="border-collapse:collapse;">
									<td align="left"
										style="Margin:0;padding-top:15px;padding-bottom:20px;padding-left:20px;padding-right:20px;">
										<!--[if mso]>
										<table width="560" cellpadding="0" cellspacing="0">
											<tr>
												<td width="315" valign="top"><![endif]-->
										<table cellpadding="0" cellspacing="0" class="es-left" align="left"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">
											<tr style="border-collapse:collapse;">
												<td width="315" class="es-m-p20b" align="left"
													style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left" style="padding:0;Margin:0;">
																<table border="0" align="left" cellspacing="1"
																	   cellpadding="1"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;"
																	   class="cke_show_border">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0;"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;">
																				SUBTOTAL</p>
																			<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;">
																				<br></p></td>
																		<td style="padding:0;Margin:0;"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;text-align:right;">
																				<strong><?php echo $subtotal; ?></strong>
																			</p>
																			<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;text-align:right;">
																				<br></p></td>
																	</tr>
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0;"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;">
																				SHIPPING</p>
																			<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;">
																				<br></p></td>
																		<td style="padding:0;Margin:0;"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;text-align:right;">
																				<strong><?php echo $shipping; ?></strong>
																			</p>
																			<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;text-align:right;">
																				<br></p></td>
																	</tr>
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0;"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;">
																				TAX</p>
																			<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;"></p>
																		</td>
																		<td style="padding:0;Margin:0;"><p
																					style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;text-align:right;">
																				<strong><?php echo $tax; ?></strong></p>
																			<p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;text-align:right;"></p>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left"
																style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;padding-right:10px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:1px solid #CACACA;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="right"
																style="padding:0;Margin:0;padding-top:20px;">
																<table border="0" cellspacing="1" cellpadding="1"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;"
																	   class="cke_show_border">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0;font-size:18px;">
																			<strong>TOTAL</strong></td>
																		<td style="padding:0;Margin:0;text-align:right;font-size:18px;">
																			<strong><?php echo $total; ?></strong></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td>
										<td width="20"></td>
										<td width="225" valign="top"><![endif]-->
										<table cellpadding="0" cellspacing="0" class="es-right" align="right"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;">
											<tr style="border-collapse:collapse;">
												<td width="225" align="left" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left" style="padding:0;Margin:0;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																	<br></p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td></tr></table><![endif]--></td>
								</tr>
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="padding:0;Margin:0;padding-bottom:15px;padding-left:20px;padding-right:20px;">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="560" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left"
																style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;padding-right:10px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:1px solid #CACACA;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;padding-top:20px;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#333333;">
																	<strong>CUSTOMER INFORMATION</strong></p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-bottom:25px;">
										<!--[if mso]>
										<table width="560" cellpadding="0" cellspacing="0">
											<tr>
												<td width="270" valign="top"><![endif]-->
										<table cellpadding="0" cellspacing="0" class="es-left" align="left"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">
											<tr style="border-collapse:collapse;">
												<td width="270" class="es-m-p20b" align="left"
													style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;padding-right:20px;"><h3
																		style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;">
																	SHIPPING ADDRESS</h3></td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left"
																style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:0px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;padding-right:20px;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																	<?php echo $shipping_fname . ' ' . $shipping_lname; ?>
																	<br>
																	<?php echo $shipping_addr1 ? $shipping_addr1 : ''; ?>
																	<br>
																	<?php echo $shipping_addr2 ? $shipping_addr2 . '<br>' : ''; ?>
																	<?php echo $shipping_city; ?>, <?php echo $shipping_state; ?> <?php echo $shipping_postcode; ?>
																	<br>
																	<?php echo $shipping_country; ?>
																</p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td>
										<td width="20"></td>
										<td width="270" valign="top"><![endif]-->
										<table cellpadding="0" cellspacing="0" class="es-right" align="right"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;">
											<tr style="border-collapse:collapse;">
												<td width="270" align="left" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;"><h3
																		style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;">
																	BILLING&nbsp;ADDRESS</h3></td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left"
																style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:0px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																	<?php echo $billing_fname . ' ' . $billing_lname; ?>
																	<br>
																	<?php echo $billing_addr1 ? $billing_addr1 : ''; ?>
																	<br>
																	<?php echo $billing_addr2 ? $billing_addr2 . '<br>' : ''; ?>
																	<?php echo $billing_city; ?>, <?php echo $billing_state; ?> <?php echo $billing_postcode; ?>
																	<br>
																	<?php echo $billing_country; ?>
																</p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td></tr></table><![endif]--></td>
								</tr>
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-bottom:30px;">
										<!--[if mso]>
										<table width="560" cellpadding="0" cellspacing="0">
											<tr>
												<td width="270" valign="top"><![endif]-->
										<table cellpadding="0" cellspacing="0" class="es-left" align="left"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">
											<tr style="border-collapse:collapse;">
												<td width="270" class="es-m-p20b" align="left"
													style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;padding-right:20px;"><h3
																		style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;">
																	SHIPPING METHOD</h3></td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left"
																style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:0px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;padding-right:20px;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																	<?php echo $shipping_method; ?></p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td>
										<td width="20"></td>
										<td width="270" valign="top"><![endif]-->
										<table cellpadding="0" cellspacing="0" class="es-right" align="right"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;">
											<tr style="border-collapse:collapse;">
												<td width="270" align="left" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;"><h3
																		style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;">
																	PAYMENT METHOD</h3></td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left"
																style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:10px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:0px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="left" class="es-m-txt-c"
																style="padding:0;Margin:0;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																	<?php echo $payment_method; ?></p></td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
										<!--[if mso]></td></tr></table><![endif]--></td>
								</tr>
								<tr style="border-collapse:collapse;">
									<td align="left" style="padding:0;Margin:0;">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="600" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center"
																style="padding:0;Margin:0;padding-top:15px;">
																<table border="0" width="100%" height="100%"
																	   cellpadding="0" cellspacing="0"
																	   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
																	<tr style="border-collapse:collapse;">
																		<td style="padding:0;Margin:0px;border-bottom:2px solid #23B469;background:none;height:1px;width:100%;margin:0px;"></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table cellpadding="0" cellspacing="0" class="es-footer" align="center"
					   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">
					<tr style="border-collapse:collapse;">
						<td align="center" style="padding:0;Margin:0;">
							<table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0"
								   cellspacing="0" width="600"
								   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
								<tr style="border-collapse:collapse;">
									<td align="left"
										style="Margin:0;padding-left:20px;padding-right:20px;padding-bottom:35px;padding-top:40px;background-image:url(<?php echo URL; ?>images/mail/footerbg.png);background-position:left top;background-repeat:no-repeat;"
										background="<?php echo URL; ?>images/mail/footerbg.png">
										<table cellpadding="0" cellspacing="0" width="100%"
											   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
											<tr style="border-collapse:collapse;">
												<td width="560" align="center" valign="top" style="padding:0;Margin:0;">
													<table cellpadding="0" cellspacing="0" width="100%"
														   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
														<tr style="border-collapse:collapse;">
															<td align="center"
																style="padding:0;Margin:0;padding-bottom:20px;"><a
																		target="_blank"
																		href="https://www.instagram.com/nunzia_truffle_nyc/"
																		style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF;"><img
																			src="<?php echo URL; ?>images/mail/instagram.png"
																			alt
																			style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"
																			width="200"></a></td>
														</tr>
														<tr style="border-collapse:collapse;">
															<td align="center" style="padding:0;Margin:0;"><p
																		style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">
																	© <?php echo $year; ?>&nbsp;All Rights Reserved</p>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</div>
</body>
</html>
