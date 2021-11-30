<?php
global $of, $pf;
?>
</div><!--#home-fullpage-->
</div><!--#main-holder-->
</main>
<?php wp_footer(); ?>

</div><!-- #page -->
<script>
    jQuery('#menu-toggle').on('click', function () {
        jQuery('body').toggleClass('menu-opened');
        fullpage_api.setAllowScrolling(false);
    });
    jQuery('#header-nav .close, #overlay').on('click', function () {
        jQuery('body').removeClass('menu-opened');
        fullpage_api.setAllowScrolling(true);
    });
</script>
</body>
</html>