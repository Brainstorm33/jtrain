<?php get_header(); ?>
<?php
global $of, $pf;
$services_list = new WP_Query(array('post_type' =>  'services', 'posts_per_page'    =>  -1, 'order'=>'ASC'));
$services_list_items = [];
$obj_id      = get_queried_object_id();
$current_url = get_permalink( $obj_id );
$service_data = get_fields();
$team_list = wp_get_post_terms($obj_id, 'team', array('fields' => 'all') );
?>
<div class="single-service-wrap">
	<section  class='hero-section video-desc-wrap'>
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
								$services_list_items[] = get_the_title();
								if( $current_url == get_permalink() ){
									echo '<li class="active"><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
								} else{
									echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
								}
							}
							?>
						</ul>
					</div>
					<div class="transition-fade  video-desc">
						<div class="video">
							<video muted='' webkit-playsinline='' autoplay='' loop='' playsinline=''
							       poster='<?php echo $service_data["video_cover_photo"]; ?>'
							       data-autoplay=''>
								<source
									src='<?php echo $service_data["video_file"]; ?>'
									type='video/mp4'>
								<img src='<?php echo $service_data["video_cover_photo"]; ?>'
								     alt='Meet the Man Who Has Trained Everyone.'>
							</video>
                            <a data-fancybox='' data-small-btn='true'
                               href='<?php echo $service_data["video_file"]; ?>'
                               class='video-icon'></a>
                            <h1><?php if($service_data["video_title"]){ echo $service_data["video_title"]; } else { single_post_title(); } ?></h1>
						</div>
                        <?php if($service_data['short_description']){ ?>
						<div class="short-desc">
							<?php echo $service_data['short_description']; ?>
						</div>
                        <?php } ?>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class='hero-section team-wrap transition-fade'>
		<div class='rectangle'>
			<h2 class='team-title'  style="z-index:9999"><?php echo $service_data['title_team_section'] ?? $service_data['title_team_section'];  ?></h2>
			<div></div>
		</div>
		<div>
			<div class='inner-holder flex fac fjc pr2'>
				<div class='info-holder flex fdc'>
					<div class="team-description">
						<p>
							<?php if ( $service_data['description_team_section'] ){ ?><?php echo $service_data['description_team_section'] ?? $service_data['description_team_section']; ?><?php } ?>
						</p>
					</div>
					<div class="all-team-section">
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
								</a>
							<?php } ?>
						</div>
					</div>
                    <?php if($service_data['has_slider'] == false){ ?>
	                    <?php if ( $service_data['full_description'] ) { ?>
                            <div class="full-description <?= ( $service_data['has_slider'] ) ? 'has-slider' : '' ?>">
                                <div>
				                    <?php echo $service_data['full_description']; ?>
                                </div>
                            </div>
	                    <?php } ?>
                    <?php } ?>
				</div>
			</div>
		</div>
	</section>
	<?php if($service_data['has_slider'] == true){ ?>
    <section  class="slider-fulldesc transition-fade ">
		<div class="slider">
            <div class='service-slider-wrap swiper'>
                <div class='service-slider-swiper swiper-wrapper'>
					<?php foreach ( $service_data['slider'] as $slide_image ) { ?>
                        <div class='swiper-slide'><img src="<?php echo $slide_image['url']; ?>" alt=""></div>
					<?php } ?>
                </div>
                <div class="paginate">
                    <div class='swiper-button-prev swiper-button-white'></div>
                    <div class='swiper-pagination'></div>
                    <div class='swiper-button-next swiper-button-white'></div>
                </div>
            </div>
        </div>

		<?php if ( $service_data['full_description'] ){ ?>
        <div class="full-description <?=($service_data['has_slider']) ? 'has-slider' : ''?>">
           <div>
	           <?php echo $service_data['full_description']; ?>
           </div>
		</div>
        <?php } ?>
	</section>
	<?php } ?>
    <section class='contact-section contact-services'>
        <div class='section-wrp flex pr2'>
            <div class='inner-holder flex '>
                <div class='left-col flex fjc'>
                    <div class='form-holder'>
                            <h4 class="h4 form-title">
                                Want to Train With Us?
                            </h4>
                            <div class="body-txt form-description">
                                Fill out the form below and we’ll get back with a free phone consultation.
                            </div>
                        <div class="form-wrapper">
                            <form action="" id="contact-form">
                                <div class="form-fields">
                                    <input type="hidden" class="token" name='token'
                                           value="<?php echo wp_create_nonce( 'contact_form' ); ?>">
                                    <div class="form-row">
                                        <input type="text" placeholder="Your Name" name="yourName" id="name">
                                    </div>
                                    <div class="form-row">
                                        <input type="text" placeholder="E-Mail Address" name="email" id="email">
                                    </div>
                                    <div class="form-row">
                                        <input type="text" placeholder="Phone" name="phone" id="phone">
                                    </div>
                                    <div class="form-row select-row">
                                        <select name="service" id="service">
                                            <option value="" selected>What service you are interested in?</option>
                                            <?php foreach ($services_list_items as $service){ ?>
                                            <option value="<?php echo $service; ?>"><?php echo $service; ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                    <div class="form-row">
                                        <textarea name="message" rows="5"
                                                  placeholder="Why you would like to be with J Train?"
                                                  id="message"></textarea>
                                    </div>
                                    <div class="btn-row">
                                        <button class="h6 flex fjc fac">
                                            <span class="txt">SUBMIT</span>
                                            <span class="icon"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="71px" height="71px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <circle cx="50" cy="50" fill="none" stroke="#0057FF" stroke-width="5" r="37" stroke-dasharray="174.35839227423352 60.119464091411174" transform="rotate(84.0953 50 50)"> <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform> </circle></span>
                                        </button>
                                    </div>
                                    <p class="success-info">
                                        Thank you! Your message has been sent successfully.
                                    </p>
                                </div>

                            </form>
                        </div>
                        <div class="cr-txt flex fje">
                            <p class="body-txt">
                                (C) 2020 J TRAIN.<br>
                                Website by <a href="https://brainstormtech.io/" target="_blank">Brainstorm
                                    Technologies</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="right-col flex fdc">
                    <div class="info-holder tac">
                            <h4 class="h4 location">
								505 Greenwich St., New York аа
                            </h4>
                        <div class="socials flex fjc fac">
							<?php if ( $pf['instagram_url'] ): ?>
                                <a href="<?php echo $pf['instagram_utl']; ?>" class="social-link" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"
                                         fill="none">
                                        <circle cx="23.0005" cy="23" r="23" fill="white"/>
                                        <path d="M35.5327 17.5271C35.4727 16.1668 35.2527 15.2316 34.9376 14.4212C34.6125 13.561 34.1124 12.7908 33.4571 12.1506C32.8169 11.5004 32.0417 10.9952 31.1914 10.6752C30.3763 10.3601 29.446 10.1401 28.0857 10.0801C26.7152 10.015 26.2801 10 22.8041 10C19.3281 10 18.893 10.015 17.5276 10.075C16.1673 10.135 15.232 10.3552 14.4219 10.6701C13.5615 10.9952 12.7913 11.4953 12.1511 12.1506C11.5009 12.7908 10.9959 13.566 10.6757 14.4163C10.3606 15.2316 10.1406 16.1617 10.0806 17.522C10.0155 18.8925 10.0005 19.3276 10.0005 22.8036C10.0005 26.2796 10.0155 26.7147 10.0755 28.0801C10.1355 29.4404 10.3557 30.3757 10.6708 31.186C10.9959 32.0462 11.5009 32.8164 12.1511 33.4566C12.7913 34.1068 13.5665 34.612 14.4168 34.932C15.232 35.2472 16.1622 35.4671 17.5227 35.5271C18.888 35.5873 19.3232 35.6021 22.7992 35.6021C26.2752 35.6021 26.7103 35.5873 28.0757 35.5271C29.436 35.4671 30.3713 35.2472 31.1815 34.932C32.9021 34.2668 34.2624 32.9065 34.9276 31.186C35.2426 30.3708 35.4627 29.4404 35.5227 28.0801C35.5827 26.7147 35.5977 26.2796 35.5977 22.8036C35.5977 19.3276 35.5927 18.8925 35.5327 17.5271ZM33.2271 27.9801C33.1721 29.2304 32.962 29.9056 32.787 30.3557C32.3568 31.4711 31.4716 32.3563 30.3562 32.7865C29.9061 32.9615 29.226 33.1716 27.9806 33.2265C26.6302 33.2866 26.2252 33.3015 22.8092 33.3015C19.3932 33.3015 18.9831 33.2866 17.6376 33.2265C16.3872 33.1716 15.7121 32.9615 15.2619 32.7865C14.7069 32.5814 14.2017 32.2563 13.7916 31.8311C13.3665 31.416 13.0414 30.9159 12.8362 30.3608C12.6612 29.9107 12.4512 29.2304 12.3963 27.9851C12.3361 26.6348 12.3213 26.2296 12.3213 22.8136C12.3213 19.3976 12.3361 18.9875 12.3963 17.6422C12.4512 16.3918 12.6612 15.7166 12.8362 15.2665C13.0414 14.7113 13.3665 14.2063 13.7967 13.796C14.2116 13.3709 14.7118 13.0458 15.267 12.8408C15.7171 12.6658 16.3974 12.4558 17.6427 12.4007C18.9931 12.3407 19.3983 12.3257 22.8141 12.3257C26.2351 12.3257 26.6401 12.3407 27.9856 12.4007C29.236 12.4558 29.9112 12.6658 30.3613 12.8408C30.9163 13.0458 31.4216 13.3709 31.8316 13.796C32.2568 14.2111 32.5818 14.7113 32.787 15.2665C32.962 15.7166 33.1721 16.3967 33.2271 17.6422C33.2871 18.9926 33.3022 19.3976 33.3022 22.8136C33.3022 26.2296 33.2871 26.6297 33.2271 27.9801Z"
                                              fill="#0057FF"/>
                                        <path d="M22.8041 16.2266C19.1732 16.2266 16.2273 19.1723 16.2273 22.8034C16.2273 26.4345 19.1732 29.3803 22.8041 29.3803C26.4352 29.3803 29.381 26.4345 29.381 22.8034C29.381 19.1723 26.4352 16.2266 22.8041 16.2266ZM22.8041 27.0697C20.4486 27.0697 18.5379 25.1592 18.5379 22.8034C18.5379 20.4477 20.4486 18.5372 22.8041 18.5372C25.1599 18.5372 27.0704 20.4477 27.0704 22.8034C27.0704 25.1592 25.1599 27.0697 22.8041 27.0697Z"
                                              fill="#0057FF"/>
                                        <path d="M31.1765 15.9665C31.1765 16.8144 30.489 17.5019 29.6409 17.5019C28.793 17.5019 28.1055 16.8144 28.1055 15.9665C28.1055 15.1185 28.793 14.4312 29.6409 14.4312C30.489 14.4312 31.1765 15.1185 31.1765 15.9665Z"
                                              fill="#0057FF"/>
                                    </svg>
                                </a>
							<?php endif;
							if ( $pf['facebook_url'] ):?>
                                <a href="<?php echo $pf['facebook_url']; ?>" class="social-link" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"
                                         fill="none">
                                        <circle cx="23.0005" cy="23" r="23" fill="white"/>
                                        <path d="M27.5445 14.2594H29.8863V10.1806C29.4823 10.1251 28.0928 10 26.4746 10C23.0981 10 20.7851 12.1238 20.7851 16.0272V19.6196H17.0591V24.1793H20.7851V35.6523H25.3533V24.1804H28.9286L29.4962 19.6207H25.3523V16.4793C25.3533 15.1615 25.7082 14.2594 27.5445 14.2594Z"
                                              fill="#0057FF"/>
                                    </svg>
                                </a>
							<?php endif;
							if ( $pf['linkedin_url'] ):?>
                                <a href="<?php echo $pf['linkedin_url']; ?>" class="social-link" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"
                                         fill="none">
                                        <circle cx="23.0005" cy="23" r="23" fill="white"/>
                                        <path d="M36.9941 35.6521V35.651H37.0005V26.243C37.0005 21.6406 36.0097 18.0952 30.6291 18.0952C28.0425 18.0952 26.3067 19.5146 25.5981 20.8603H25.5232V18.5249H20.4216V35.651H25.7338V27.1708C25.7338 24.938 26.1571 22.7789 28.9222 22.7789C31.6467 22.7789 31.6873 25.327 31.6873 27.314V35.6521H36.9941Z"
                                              fill="#0057FF"/>
                                        <path d="M11.7715 18.5264H17.0901V35.6525H11.7715V18.5264Z" fill="#0057FF"/>
                                        <path d="M14.4286 10C12.728 10 11.3481 11.3799 11.3481 13.0804C11.3481 14.781 12.728 16.1897 14.4286 16.1897C16.1291 16.1897 17.509 14.781 17.509 13.0804C17.5079 11.3799 16.128 10 14.4286 10V10Z"
                                              fill="#0057FF"/>
                                    </svg>
                                </a>
							<?php endif; ?>
                        </div>
						<?php if ( $pf['phone'] ): ?>
                            <a href="tel:<?php echo $pf['phone']; ?>" class="telnum h5"><?php echo $pf['phone']; ?></a>
						<?php endif; ?>
                    </div>
                    <div id="map" class="anim"></div>
                    <div class="cr-txt flex fje">
                        <p class="body-txt">
                            (C) 2020 J TRAIN.<br>
                            Website by <a href="https://brainstormtech.io/" target="_blank">Brainstorm Technologies</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>
<script>
    var map;

    function loadMap() {
        const place = {
            lat: 40.7256262,
            lng: -74.0087898
        };
        map = new google.maps.Map(document.getElementById('map'), {
            center: place,
            zoom: 17,
            mapId: '5973d810e21cb52d'
        });

        const marker = new google.maps.Marker({
            position: place,
            map: map,
            icon: {
                //    anchor: new google.maps.Point(69, 104),
                size: new google.maps.Size(69, 104),
                url: 'https://jtrain.brainstormtech.pro/wp-content/themes/jtrain/images/map-marker.svg'
            }
        });
    }

    loadMap();
    jQuery(document).ready(function ($) {

        // $('.services-menu a, #menu-item-233 a').attr('data-has-swup','');
        //
        // $('a').each(function (index) {
        //     var attr = $(this).attr('data-has-swup');
        //
        //     if (typeof attr !== 'undefined' && attr !== false) {
        //
        //
        //     } else {
        //
        //           $(this).attr('data-no-swup','');
        //     }
        //
        // });
        // const options = {
        //     linkSelector:
        //         'a[href^="' +
        //         window.location.origin +
        //         '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])'
        // };
        // const swup = new Swup(options);

        //end
        new Swiper('.service-slider-wrap', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed:1500,
            autoplay:5000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        $('.services-menu > ul > li').each(function (index) {
            $(this).width($(this).width() + 20);
        });
       window.addEventListener('resize', function(event){
            $('.services-menu > ul > li').each(function (index) {
                $(this).width($(this).width() + 20);
            });
        });

        $('#contact-form').on('submit', function (e) {
            e.preventDefault();

            if ($(this).hasClass('loading')) {
                return false;
            }
            const self = $(this),
                name = $(`#name`, this),
                email = $(`#email`, this),
                phone = $(`#phone`, this),
                service = $(`#service`, this),
                message = $(`#message`, this),
                emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                errors = [];

            if (name.val().trim() == '') {
                errors.push(name)
            }
            if (phone.val().trim() == '') {
                errors.push(phone)
            }
            if (service.val().trim() == '') {
                errors.push(service)
            }
            if (message.val().trim() == '') {
                errors.push(message)
            }
            if (!emailRegex.test(String(email.val().toLowerCase()))) {
                errors.push(email)
            }

            if (errors.length != 0) {
                for (var i = 0; i < errors.length; i++) {
                    errors[i].addClass(`error`);
                }
            } else {
                var fd = new FormData(this);
                fd.append('action', 'contact_form');
                console.log(fd);
                $.ajax({
                    url: ajax.url,
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    data: fd,
                    beforeSend: function () {
                        self.addClass('loading');
                    },
                    success: function (data) {
                        if (data.success) {
                            self[0].reset();
                            self.addClass('success');
                            self.removeClass('loading');
                        }
                    },
                    error: function (err) {
                    }
                });
            }

        });
    });

    jQuery('#menu-toggle').on('click', function () {
        jQuery('body').toggleClass('menu-opened');
        fullpage_api.setAllowScrolling(false);
    });
    jQuery('#header-nav .close, #overlay').on('click', function () {
        jQuery('body').removeClass('menu-opened');
        fullpage_api.setAllowScrolling(true);
    });






</script>
<?php get_footer(); ?>
