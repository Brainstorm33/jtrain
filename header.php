<?php

global $of, $pf;
$of = get_fields( 'option' );
$pf = get_fields();
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	<meta name="msapplication-TileColor" content="#12A0FF">
	<meta name="theme-color" content="#12A0FF">
	<meta name="apple-mobile-web-app-status-bar-style" content="#12A0FF">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<?php if(get_field('is_service',get_the_ID()) == true){
    $light_theme = '-light';
    ?>
<body <?php body_class(['light-theme loading']); ?>>
<?php } else {
    $light_theme =  '';
    ?>
<body <?php body_class(['loading']); ?>>
<?php } ?>
<body <?php body_class(['loading']); ?>>
<div id="overlay"></div>
<nav id="header-nav">
	<div class="for-height">
		<div class="header-nav-wrp flex fdc">
			<div class="close">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
					<rect x="3.7124" y="0.350342" width="43.7508" height="5.25009" transform="rotate(45 3.7124 0.350342)" fill="#060606"/>
					<rect x="0.699463" y="30.9365" width="43.7508" height="5.25009" transform="rotate(-45 0.699463 30.9365)" fill="#060606"/>
				</svg>
			</div>
			<a href="<?php echo site_url(); ?>" class="logo-link" rel="home" itemprop="url">
				<picture>
					<img src="<?php echo URL; ?>images/nav-logo.svg" alt="<?php echo get_bloginfo( 'name' ); ?>">
				</picture>
			</a>
			<div class="menu-holder">
				<nav id="menu">
					<ul class="main-menu">
						<?php foreach($of['menu'] as $menu):?>
							<li class="menu-item">
								<a href="javascript:;" data-section="<?php echo $menu['section']; ?>" class="section-menu-item"><?php echo $menu['name']?></a>
                                <?php $services_list = new WP_Query(array('post_type' =>  'services', 'posts_per_page'    =>  -1, 'order'=>'ASC')); ?>
								<?php if($menu['enable_services_menu']):?>
									<ul class="services-menu">
										<?php foreach($services_list->posts as $service):?>
											<li>
												<a href="<?php echo get_permalink($service->ID); ?>"><?php echo $service->post_title; ?></a>
											</li>
										<?php endforeach;?>
									</ul>
								<?php endif;?>
							</li>
						<?php endforeach;?>
                        <li class="menu-item">
                           <a href="https://jtrain.brainstormtech.pro/concierge/" >Concierge</a>
                        </li>
					</ul>
				</nav>
			</div>
			<div class="bottom-wrp">
				<p class="phone body-txt">
					<a href="tel:<?php echo $of['phone_number']; ?>"><?php echo $of['phone_number']; ?></a>
				</p>
				<p class="address body-txt">
					<?php echo $of['address']?>
				</p>
				<div class="flex social-icons">
					<?php if($of['instagram_url']):?>
						<a href="<?php echo $of['instagram_url']; ?>" target="_blank">
							<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.5322 7.52712C25.4722 6.16678 25.2522 5.23155 24.9371 4.42117C24.612 3.56096 24.1119 2.79083 23.4566 2.15061C22.8164 1.50042 22.0412 0.995202 21.1909 0.67519C20.3759 0.360062 19.4455 0.140078 18.0852 0.0801007C16.7147 0.0150433 16.2796 0 12.8036 0C9.32763 0 8.89254 0.0150433 7.52712 0.0750211C6.16678 0.134999 5.23155 0.355178 4.42136 0.670111C3.56096 0.995202 2.79083 1.49534 2.15061 2.15061C1.50042 2.79083 0.995398 3.56604 0.67519 4.41628C0.360062 5.23155 0.140078 6.1617 0.0801007 7.52204C0.0150433 8.89254 0 9.32763 0 12.8036C0 16.2796 0.0150433 16.7147 0.0750211 18.0801C0.134999 19.4404 0.355178 20.3757 0.670306 21.186C0.995398 22.0462 1.50042 22.8164 2.15061 23.4566C2.79083 24.1068 3.56604 24.612 4.41628 24.932C5.23155 25.2472 6.1617 25.4671 7.52224 25.5271C8.88746 25.5873 9.32274 25.6021 12.7987 25.6021C16.2747 25.6021 16.7098 25.5873 18.0752 25.5271C19.4356 25.4671 20.3708 25.2472 21.181 24.932C22.9016 24.2668 24.2619 22.9065 24.9271 21.186C25.2421 20.3708 25.4622 19.4404 25.5222 18.0801C25.5822 16.7147 25.5972 16.2796 25.5972 12.8036C25.5972 9.32763 25.5922 8.89254 25.5322 7.52712ZM23.2267 17.9801C23.1716 19.2304 22.9615 19.9056 22.7865 20.3557C22.3563 21.4711 21.4711 22.3563 20.3557 22.7865C19.9056 22.9615 19.2255 23.1716 17.9801 23.2265C16.6297 23.2866 16.2247 23.3015 12.8087 23.3015C9.39268 23.3015 8.98261 23.2866 7.63711 23.2265C6.38676 23.1716 5.71157 22.9615 5.26144 22.7865C4.7064 22.5814 4.20118 22.2563 3.79111 21.8311C3.36599 21.416 3.0409 20.9159 2.83576 20.3608C2.66071 19.9107 2.45069 19.2304 2.39579 17.9851C2.33562 16.6348 2.32077 16.2296 2.32077 12.8136C2.32077 9.39757 2.33562 8.98749 2.39579 7.64219C2.45069 6.39184 2.66071 5.71665 2.83576 5.26652C3.0409 4.71129 3.36599 4.20626 3.79619 3.79599C4.21115 3.37087 4.71129 3.04578 5.26652 2.84084C5.71665 2.66579 6.39692 2.45577 7.64219 2.40068C8.99257 2.3407 9.39776 2.32565 12.8136 2.32565C16.2346 2.32565 16.6396 2.3407 17.9851 2.40068C19.2355 2.45577 19.9107 2.66579 20.3608 2.84084C20.9159 3.04578 21.4211 3.37087 21.8311 3.79599C22.2563 4.21115 22.5814 4.71129 22.7865 5.26652C22.9615 5.71665 23.1716 6.39672 23.2267 7.64219C23.2866 8.99257 23.3017 9.39757 23.3017 12.8136C23.3017 16.2296 23.2866 16.6297 23.2267 17.9801Z" fill="#0057FF"/>
								<path d="M12.8037 6.22681C9.17275 6.22681 6.22681 9.17256 6.22681 12.8037C6.22681 16.4348 9.17275 19.3805 12.8037 19.3805C16.4348 19.3805 19.3805 16.4348 19.3805 12.8037C19.3805 9.17256 16.4348 6.22681 12.8037 6.22681ZM12.8037 17.0699C10.4481 17.0699 8.53742 15.1594 8.53742 12.8037C8.53742 10.4479 10.4481 8.53742 12.8037 8.53742C15.1594 8.53742 17.0699 10.4479 17.0699 12.8037C17.0699 15.1594 15.1594 17.0699 12.8037 17.0699Z" fill="#0057FF"/>
								<path d="M21.1761 5.96655C21.1761 6.81444 20.4886 7.50194 19.6405 7.50194C18.7926 7.50194 18.1051 6.81444 18.1051 5.96655C18.1051 5.11846 18.7926 4.43115 19.6405 4.43115C20.4886 4.43115 21.1761 5.11846 21.1761 5.96655Z" fill="#0057FF"/>
							</svg>
						</a>
					<?php endif;
					if($of['facebook_url']):?>
						<a href="<?php echo $of['facebook_url']; ?>" target="_blank">
							<svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.544 4.25935H12.8858V0.180635C12.4818 0.125055 11.0923 0 9.47406 0C6.09758 0 3.78459 2.1238 3.78459 6.02723V9.61962H0.0585938V14.1793H3.78459V25.6523H8.35284V14.1804H11.9281L12.4957 9.62069H8.35178V6.47935C8.35284 5.16146 8.7077 4.25935 10.544 4.25935Z" fill="#0057FF"/>
							</svg>
						</a>
					<?php endif;
					if($of['linkedin_url']):?>
						<a href="<?php echo $of['linkedin_url']; ?>" target="_blank">

							<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.9935 25.6523V25.6513H25.9999V16.2433C25.9999 11.6408 25.0091 8.09546 19.6285 8.09546C17.0419 8.09546 15.3061 9.51489 14.5974 10.8606H14.5226V8.52514H9.42102V25.6513H14.7332V17.171C14.7332 14.9382 15.1565 12.7791 17.9216 12.7791C20.646 12.7791 20.6867 15.3273 20.6867 17.3143V25.6523H25.9935Z" fill="#0057FF"/>
								<path d="M0.770874 8.52612H6.08945V25.6522H0.770874V8.52612Z" fill="#0057FF"/>
								<path d="M3.42807 0C1.72754 0 0.347656 1.37988 0.347656 3.08042C0.347656 4.78095 1.72754 6.18969 3.42807 6.18969C5.12861 6.18969 6.50849 4.78095 6.50849 3.08042C6.50742 1.37988 5.12754 0 3.42807 0V0Z" fill="#0057FF"/>
							</svg>

						</a>
					<?php endif;?>
				</div>
			</div>
		</div>
	</div>
</nav>
<div id="page">
	<header id="header">
		<div class="header-areas flex fas fjb">
			<div class="header-social-icons">
                <a href="<?php echo $of['instagram_url']; ?>" class='insta' target='_blank'>
                    <img src="<?php echo URL; ?>images/social/instagram<?= $light_theme ?>.svg" alt='Instagram'>
                </a>
                <a href="<?php echo $of['facebook_url']; ?>" class='facebook' target='_blank'>
                    <img src="<?php echo URL; ?>images/social/facebook<?= $light_theme ?>.svg" alt='facebook'>
                </a>
                <p>@jtrainwellness</p>
            </div>
			<div class="logo tac trans">
				<a href="<?php echo site_url(); ?>" class="logo-link" rel="home" itemprop="url">
					<img src="<?php echo URL; ?>images/logo<?=$light_theme?>.svg" alt="<?php echo get_bloginfo( 'name' ); ?>">
				</a>
			</div>
            <div class="menu-items">
	            <?php
	            wp_nav_menu( array(
		            'theme_location'  => 'top-menu',
		            'container_class' => 'menu-items',
                    'menu_class' => 'top-menu'
	            ) );
	            ?>


	            <?php if ( get_field( 'is_service', get_the_ID() ) == true ) { ?>
                    <div id="menu-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
                            <rect y="0.599609" width="25" height="3" fill="black"/>
                            <rect y="9.59961" width="25" height="3" fill="black"/>
                            <rect y="18.5999" width="25" height="3" fill="black"/>
                        </svg>
                    </div>
	            <?php } else { ?>
                    <div id="menu-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
                            <rect y="0.599609" width="25" height="3" fill="white"/>
                            <rect y="9.59961" width="25" height="3" fill="white"/>
                            <rect y="18.5999" width="25" height="3" fill="white"/>
                        </svg>
                    </div>
	            <?php } ?>
            </div>
		</div>
	</header>
	<main>
		<div id="main-holder">
			<div id="home-fullpage">
