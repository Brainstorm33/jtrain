<?php
global $of, $pf;
get_header(); ?>
<div id="single-article">
<?php while ( have_posts() ): the_post(); ?>
		<h1 class="article-title tac ff-zs bold">
			<?php the_title();?>
		</h1>
		<div class="hero-wrp rel">
			<div class="hero-img">
				<img src="<?php echo get_the_post_thumbnail_url( get_the_ID(), 'article_hero' );; ?>" alt="">
			</div>
			<div class="share-wrp abs">
				<?php meks_ess_share(); ?>
			</div>
		</div>


	    <div class="content-wrp wys">
		    <?php the_content();?>
	    </div>
		<div class="bottom-share-wrp ">
			<div class="inner-wrp flex fac">
				<?php meks_ess_share(); ?>
			</div>
		</div>
<?php endwhile; ?>
</div>
<?php
get_footer();

