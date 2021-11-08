<?php
get_header();
global $pf, $of;
global $wp_query;

?>
<section id="blog-items">
	<h1 class="page-title ff-zs bold"><?php echo get_the_title( get_option('page_for_posts', true) ) ; ?></h1>
	<div class="blog-holder flex fwrap" data-count="<?php echo $wp_query->max_num_pages; ?>">
		<?php while(have_posts()) : the_post(); ?>
			<div class="blog-wrp">
				<a href="<?php the_permalink(); ?>" class="blog-link">
					<div class="img-wrp rel">
						<img src="<?php echo get_the_post_thumbnail_url( get_the_ID(), 'medium_large' ); ?>" alt="">
					</div>
					<h3 class="title ff-zs bold">
						<?php the_title(); ?>
					</h3>
				</a>
				<div class="descr">
					<?php
					$content = get_the_content() ;
					$content = apply_filters( 'the_content', $content );
					$content = str_replace( ']]>', ']]&gt;', $content );
					$content = strip_tags( $content );
					$content = str_replace( "  ", " ", $content );
					$content = str_replace( "  ", " ", $content );
					$content = str_replace( "  ", " ", $content );
					$content = str_replace( "  ", " ", $content );
					$content = str_replace( "  ", " ", $content );
					$content = str_replace( "\n", "", $content );
					$content = mb_substr( $content, 0, 250 );
					$content .= '...';
					$content = str_replace( '—', '-', $content );
					echo $content;
					?>
				</div>
				<a href="<?php the_permalink(); ?>" class="rm bold">READ MORE ></a>
			</div>

		<?php endwhile; ?>
	</div>
	<div class="scroll-loader">
		<img src="<?php echo URL; ?>images/ajax-loader.svg" alt="">
	</div>
</section>

<?php
get_footer();
?>
