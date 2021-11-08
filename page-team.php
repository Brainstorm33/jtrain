<?php
// Template Name: Team page template
$team_list = get_terms( array(
    "taxonomy" => "team",
    "hide_empty" => false,
) );

get_header();
?>

<section class="hero-section all-team-section team-page">
    <div class="rectangle">
        <div></div>
    </div>
    <div >
        <div class="inner-holder flex fac fjc pr2">
            <div class="info-holder flex fdc" style="padding-top:70px">

                <div class="title">
                    <h1><?php echo get_the_title(); ?></h1>
                    <div class="subtitle">
                        <p>
                            From massage therapists, to trainers, acupuncturists and beyond, the J Train team is
                            a talented and diverse group that are among the best body and mind transformation
                            specialists in the industry.
                        </p>
                    </div>
                </div>
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

<?php get_footer(); ?>