<?php
get_header();
global $pf, $of;
global $wp_query;
$cat_data = get_queried_object();
$cat_data_acf = get_fields($cat_data);
//var_dump($cat_data_acf);
$team_list = get_terms( array(
    "taxonomy" => "team",
    "hide_empty" => false,
) );
?>
<section class="hero-section " id="hero">
	<div class="rectangle">
        <div></div></div>
	<div >
		<div class="inner-holder flex fac fjc pr2">
			<div class="info-holder flex fdc">
				<div class="top-part ">
                    <div>
                        <div class="person-top-wrap">
                                    <div class="person-profile">
                                        <img src="<?php echo $cat_data_acf["photo"]; ?>" alt="">
                                        <div class="info-wrap">
                                            <h1 class="name"><?php echo $cat_data->name; ?></h1>
                                            <div class="person-info">
												<?php if ( $cat_data_acf["position"] ): ?> <p
                                                        class="position"><?php echo $cat_data_acf["position"]; ?></p><?php endif; ?>
												<?php if ( $cat_data_acf["instagram_username"] ): ?>
                                                    <a target="_blank" href="https://instagram.com/<?php echo $cat_data_acf['instagram_username']; ?>">
                                                        <p class='instagram'><img src='<?php echo get_template_directory_uri(); ?>/images/social/trainer-instagram.svg'>
                                                            @<?php echo $cat_data_acf['instagram_username']; ?>
                                                        </p>
                                                    </a>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description">
										<?php echo $cat_data_acf["bio"]; ?>
                                    </div>
                                    <div class="description-columns">
		                                <?php if ( $cat_data_acf['photo'] ): ?>
                                            <div class="col specialized">
                                                <h3>Specialized In</h3>
				                                <?php
				                                $args = array(
					                                'post_type' => 'services',
					                                'tax_query' => array(
						                                'relation' => 'AND',
						                                array(
							                                'taxonomy' => 'team',
							                                'field'    => 'ID',
							                                'terms'    => array( $cat_data->term_id )
						                                )
					                                ),
				                                );// end args
				                                ?>
				                                <?php $my_query = new WP_Query( $args ); ?>
                                                <ul>
					                                <?php while ( $my_query->have_posts() ) : $my_query->the_post(); ?>
                                                        <li>
                                                            <a href="<?php the_permalink() ?>"
                                                               title="<?php the_title(); ?>">
								                                <?php the_title(); ?>
                                                            </a>
                                                        </li>
					                                <?php endwhile; ?>
                                                </ul>
                                            </div>
		                                <?php endif; ?>
                                        <div class="col education">
                                            <h3>Education</h3>
                                            <p>
	                                            <?php echo $cat_data_acf['education']; ?>
                                            </p>
                                        </div>
                                        <div class="col awards">
                                            <h3>Awards & Achievements</h3>
                                            <p>
	                                            <?php echo $cat_data_acf['awards_and_achievements']; ?>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                    </div>
				</div>

		</div>

	</div>

</section>

<section class="hero-section all-team-section" id="">
    <div class="rectangle">
        <h2 class="team-title">J TRAIN’s team</h2>
        <div></div>
    </div>
    <div >
        <div class="inner-holder flex fac fjc pr2">
            <div class="info-holder flex fdc">
                <div class="top-part flex fjb fac ">
                    <div class="section-team">

	                   <?php foreach($team_list as $person){ ?>
                            <a href="<?php echo home_url( '/team/' ) . $person->slug; ?>" class="person">
                               <div class="pic">
                                   <img src="<?php echo  get_field('photo_for_listing',$person); ?>" alt="">
                                   <div class="bordered"></div>
                               </div>
                               <div class="name"><?php echo $person->name ?></div>
                               <div class="position"><?php echo get_field('position',$person); ?></div>
                               <?php //var_dump($person); ?>
                           </a>
                       <?php } ?>
                    </div>
                </div>

            </div>

        </div>

</section>
<script>
    document.addEventListener('DOMContentLoaded', function () {

        jQuery('body').removeClass('loading');
        jQuery('#menu-toggle').on('click', function () {
            jQuery('body').toggleClass('menu-opened');
            fullpage_api.setAllowScrolling(false);
        });
        jQuery('#header-nav .close, #overlay').on('click', function () {
            jQuery('body').removeClass('menu-opened');
            fullpage_api.setAllowScrolling(true);
        });
    });
</script>
<?php get_footer(); ?>
