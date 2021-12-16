// alert('loaded');
jQuery(document).ready(function ($) {

});

// jQuery('body').removeClass('loading');
jQuery('#menu-toggle').on('click', function () {
    jQuery('body').toggleClass('menu-opened');
    fullpage_api.setAllowScrolling(false);
});
jQuery('#header-nav .close, #overlay').on('click', function () {
    jQuery('body').removeClass('menu-opened');
    fullpage_api.setAllowScrolling(true);
});