<?php
global $of, $pf;
?>
</div><!--#home-fullpage-->
</div><!--#main-holder-->
</main>
<?php wp_footer(); ?>

</div><!-- #page -->
<?php if ( ! is_home() or ! is_front_page() ) {	?>
    <script>
        jQuery('body').removeClass('loading');
        jQuery('#menu-toggle').on('click', function () {
            jQuery('body').toggleClass('menu-opened');
            fullpage_api.setAllowScrolling(false);
        });
        jQuery('#header-nav .close, #overlay').on('click', function () {
            jQuery('body').removeClass('menu-opened');
            fullpage_api.setAllowScrolling(true);
        });
    </script>
<?php } ?>
<script>
   jQuery(document).ready(function ($) {

       new Swiper('#button.swiper', {
           speed: 400,
           slidesPerView: 'auto',
           navigation: {
               nextEl: '.swiper-button-next',
           },
       });
   });
</script>

</body>
</html>