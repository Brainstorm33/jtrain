<?php
global $of, $pf;
?>
</div><!--#home-fullpage-->
</div><!--#main-holder-->
</main>
<?php wp_footer(); ?>

</div><!-- #page -->
<script>
    // jQuery('#menu-toggle').on('click', function () {
    //     jQuery('body').toggleClass('menu-opened');
    //     fullpage_api.setAllowScrolling(false);
    // });
    // jQuery('#header-nav .close, #overlay').on('click', function () {
    //     jQuery('body').removeClass('menu-opened');
    //     fullpage_api.setAllowScrolling(true);
    // });

</script>
<script>
   jQuery(document).ready(function ($) {
       new Swiper('#button.swiper', {
           speed: 400,
           slidesPerView: 'auto',
           navigation: {
               nextEl: '.swiper-button-next',
           },
           // autoplay:true,
           // centeredSlides:true,

       });
   });
</script>
</body>
</html>