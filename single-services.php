<?php get_header(); ?>
<?php
$services_list = new WP_Query(array('post_type' =>  'services', 'posts_per_page'    =>  -1));
$obj_id      = get_queried_object_id();
$current_url = get_permalink( $obj_id );
$service_data = get_fields();
$team_list = wp_get_post_terms($obj_id, 'team', array('fields' => 'all') );
//var_dump($service_data['slider']);
?>
<div class="single-service-wrap">
	<section class='hero-section video-desc-wrap'>
		<div class='rectangle'>
			<div></div>
		</div>
		<div>
			<div class='inner-holder flex fac fjc pr2'>
				<div class='info-holder flex fdc'>
					<div class='services-menu'>
						<ul>
							<?php
							while ( $services_list->have_posts() ) {
								$services_list->the_post();
								if( $current_url == get_permalink() ){
									echo '<li class="active"><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
								} else{
									echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
								}
							}
							?>
						</ul>
					</div>
					<div class="video-desc">
						<div class="video">
							<video muted='' webkit-playsinline='' autoplay='' loop='' playsinline=''
							       poster='https://jtrain.brainstormtech.pro/wp-content/uploads/2020/12/meet-the-man.jpg'
							       data-autoplay=''>
								<source
									src='https://jtrain.brainstormtech.pro/wp-content/uploads/2020/12/meet-the-man_preview.mp4'
									type='video/mp4'>
								<img src='https://jtrain.brainstormtech.pro/wp-content/uploads/2020/12/meet-the-man.jpg'
								     alt='Meet the Man Who Has Trained Everyone.'>
								<a data-fancybox='' data-small-btn='true'
								   href='https://jtrain.brainstormtech.pro/wp-content/uploads/2020/12/meet-the-man.mp4'
								   class='video-icon'>
									<img
										src='https://jtrain.brainstormtech.pro/wp-content/themes/jtrain/images/play-icon.svg'
										alt='Play'>
								</a>
							</video>
							<h1><?php echo get_the_title(); ?></h1>
						</div>
						<div class="short-desc">
							<?php echo $service_data['short_description'] ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class='hero-section team-wrap'>
		<div class='rectangle'>
			<h2 class='team-title'><?php echo $service_data['title_team_section'] ?? $service_data['title_team_section'];  ?></h2>
			<div></div>
		</div>
		<div>
			<div class='inner-holder flex fac fjc pr2'>
				<div class='info-holder flex fdc'>
					<div class="team-description">
						<p>
							<?php echo $service_data['description_team_section'] ?? $service_data['description_team_section']; ?>
						</p>
					</div>
					<div class="team-profiles all-team-section">
						<div class='section-team'>
							<?php foreach ( $team_list as $person ) { ?>
								<a href="<?php echo home_url( '/team/' ) . $person->slug; ?>"
								   class="person">
									<div class="pic">
										<img
											src="<?php echo get_field( 'photo_for_listing', $person ); ?>"
											alt="">
										<div class="bordered"></div>
									</div>
									<div class="name"><?php echo $person->name ?></div>
									<div
										class="position"><?php echo get_field( 'position', $person ); ?></div>
									<?php //var_dump($person); ?>
								</a>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="slider-fulldesc">
		<div class="service-slider-wrap">
			<div class="service-slider-swiper">
			</div>
		</div>
		<div class="full-description">

		</div>
	</section>
</div>
<?php get_footer(); ?>
