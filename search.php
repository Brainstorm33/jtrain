<?php
global $of, $pf;
get_header(); ?>

    <div class="page-main-content">
        <div class="container">
            <div class="search-page">
                <h3>Search Resuls for: <span><?php the_search_query(); ?></span></h3>
                <div class="search-results">
					<?php
					if ( have_posts() ) :
						while( have_posts() ) : the_post();
					    $exc = get_the_excerpt();
					?>

                        <div class="single-res <?php echo $exc ? 'clear with-exp' : 'flex fjb fac'; ?>">
                            <h4><?php the_title(); ?></h4>
                            <?php
                            if($exc):
                            ?>
                            <div class="exc"><?php echo get_the_excerpt(); ?></div>
                            <?php
                            endif;
                            ?>
                            <a href="<?php the_permalink(); ?>" class="<?php echo $exc ? 'clear' : ''; ?>"">Read More</a>
                        </div>

						<?php
						endwhile;

                    else: ?>

                        <p class="nores">Sorry, but nothing matched your search terms. <br>Please try again with some different keywords.</p>

					<?php
                    endif;
					?>
                </div>
            </div>
        </div>
    </div>

<?php
get_footer();