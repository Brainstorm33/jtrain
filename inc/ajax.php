<?php
/* contact form */
add_action( 'wp_ajax_contact_form', 'contact_form' );
add_action( 'wp_ajax_nopriv_contact_form', 'contact_form' );
function contact_form() {
	check_ajax_referer( 'contact_form', 'token' );

	$name    = esc_sql( $_POST['yourName'] );
	$email    = esc_sql( $_POST['email'] );
	$phone    = esc_sql( $_POST['phone'] );
	$service = esc_sql( $_POST['service'] );
	$message    = esc_sql( $_POST['message'] );

	global $wpdb;

	$a = $wpdb->insert( 'wp_contact_submission', array(
		'name'     => $name,
		'email'      => $email,
		'phone'      => $phone,
		'service'     => $service,
		'message'      => $message,
		'submit_date'   => current_time( 'mysql' ),
		'ip_address' => get_client_ip()
	) );
	$adminMail = 'susanna@brainstormtech.io';
	//$adminMail = get_field('admin_email','option');
	$subject  = 'J Train Contact form Submission';
	$msg       = '<div style="width:600px;background:white;padding:25px 0;">
        <div style="font-family: arial;width:100%;display:block;">You have new message from Contact form. Please find  details below:</div><br/><br/>';
	$msg .= '<div style="font-family: arial;width:100%;display:block;border-bottom:1px solid #020202;padding-bottom:10px;"><span style="color:#020202;font-weight:bold;">Name </span>: ' . $name. ' </div><br/>';
	$msg .= '<div style="font-family: arial;width:100%;display:block;border-bottom:1px solid #020202;padding-bottom:10px;"><span style="color:#020202;font-weight:bold;">Email </span>: <a href="mailto:'.$email.'">' . $email. '</a> </div><br/>';
	$msg .= '<div style="font-family: arial;width:100%;display:block;border-bottom:1px solid #020202;padding-bottom:10px;"><span style="color:#020202;font-weight:bold;">Phone </span>: <a href="tel:'.$phone.'">' . $phone. '</a> </div><br/>';
	$msg .= '<div style="font-family: arial;width:100%;display:block;border-bottom:1px solid #020202;padding-bottom:10px;"><span style="color:#020202;font-weight:bold;">Service </span>: ' . $service. ' </div><br/>';
	$msg .= '<div style="font-family: arial;width:100%;display:block;border-bottom:1px solid #020202;padding-bottom:10px;"><span style="color:#020202;font-weight:bold;">Message </span>: ' . $message. ' </div><br/>';
	$msg .=   '</div>';

	$headers = 'From:J Train <hello@jtarin.com>' . "\r\n";
	$headers .= "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=utf-8" . "\r\n";
	wp_mail( $adminMail, $subject, $msg, $headers );
	wp_send_json_success();
}
/* get ip */
function get_client_ip() {
	$ipaddress = '';
	if (getenv('HTTP_CLIENT_IP'))
		$ipaddress = getenv('HTTP_CLIENT_IP');
	else if(getenv('HTTP_X_FORWARDED_FOR'))
		$ipaddress = getenv('HTTP_X_FORWARDED_FOR');
	else if(getenv('HTTP_X_FORWARDED'))
		$ipaddress = getenv('HTTP_X_FORWARDED');
	else if(getenv('HTTP_FORWARDED_FOR'))
		$ipaddress = getenv('HTTP_FORWARDED_FOR');
	else if(getenv('HTTP_FORWARDED'))
		$ipaddress = getenv('HTTP_FORWARDED');
	else if(getenv('REMOTE_ADDR'))
		$ipaddress = getenv('REMOTE_ADDR');
	else
		$ipaddress = 'UNKNOWN';
	return $ipaddress;
}