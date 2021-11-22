<?php
// Template Name: Template for concierge page
get_header();
?>

<div class="wrap">
    <div class="left-column">
        <img src="<?php echo get_template_directory_uri(); ?>/images/concierge.png" alt="">
    </div>
    <div class="right-column">
        <h1>Concierge</h1>
        <h2 class='subtitle'>J Train is the perfect addition to your luxury space or building.</h2>
        <div class='description'>
            <p>Partner with us to create an unparalleled on-site holistic wellness experience featuring the fitness
                industry’s most coveted and sought-after body and mind transformation specialists. </p>
            <p>Fill out the form below and we’ll get back with a free phone consultation.</p>
        </div>
        <div class="form">
            <form action='' id='concierge-form'>
                <div class='form-fields'>
                    <input type='hidden' class='token' name='token'  value="<?php echo wp_create_nonce( 'concierge_form' ); ?>">
                    <div class='form-row'>
                        <input type='text' name='yourName' id='name' placeholder=" ">
                        <span class="placeholder" data-placeholder="Your Name"></span>
                    </div>
                    <div class='form-row mobile-100'>
                        <input type='text' name='email' id='email' placeholder=" ">
                        <span class="placeholder" data-placeholder="E-Mail Address"></span>
                    </div>
                    <div class='form-row mobile-100'>
                        <input type='text' placeholder='Phone' name='phone' id='phone'>
                    </div>
                    <div class='form-row clean'>
                        <input type='text' placeholder='Building Address' name='building_address' id='building_address'>
                    </div>
                    <div class='form-row'>
                        <input type='text' placeholder='Property / Company Name' name='company' id='company'>
                    </div>
                    <div class="form-row">
                        <textarea name="message" rows="3" id="message" placeholder=" "></textarea>
                        <span class="placeholder" data-placeholder="What kind of service you interested in?"></span>
                    </div>
                    <div class="btn-row">
                        <button class="h6 flex fjc fac">
                            <span class="txt">SUBMIT</span>
                            <span class="icon"> <svg xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                                     style="margin: auto; background: none; display: block; shape-rendering: auto;"
                                                     width="71px" height="71px"
                                                     viewBox="0 0 100 100"
                                                     preserveAspectRatio="xMidYMid"> <circle
                                            cx="50" cy="50" fill="none" stroke="#0057FF"
                                            stroke-width="5" r="37"
                                            stroke-dasharray="174.35839227423352 60.119464091411174"
                                            transform="rotate(84.0953 50 50)"> <animateTransform
                                                attributeName="transform" type="rotate"
                                                repeatCount="indefinite" dur="1s"
                                                values="0 50 50;360 50 50"
                                                keyTimes="0;1"></animateTransform> </circle></span>
                        </button>
                    </div>

                </div>
                <div class='success-info'>
                    <p>Thank you for reaching out!</p>
                    <p>We will be in touch soon.</p>
                    <div class='btn-row'>
                        <button class='h6 flex fjc fac' style="margin:0" onclick="location.href='<?php echo get_site_url(); ?>'">
                            <span class='txt'>HOME</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
    <script>
jQuery(document).ready(function ($) {
    jQuery('#menu-toggle').on('click', function () {
        jQuery('body').toggleClass('menu-opened');
        fullpage_api.setAllowScrolling(false);
    });
    jQuery('#header-nav .close, #overlay').on('click', function () {
        jQuery('body').removeClass('menu-opened');
        fullpage_api.setAllowScrolling(true);
    });
    /* contact */
    $('input, textarea, select').on('input keypress change', function () {
        $(this).removeClass('error');
    })
    /**
     * Phone Mask
     */
    if ($('input#phone').length) {
        $('input#phone').mask('(000) 000-0000');
    }
    $('#concierge-form').on('submit', function (e) {
        e.preventDefault();

        if ($(this).hasClass('loading')) {
            return false;
        }
        const self = $(this),
            name = $('#name', this),
            email = $('#email', this),
            phone = $('#phone', this),
            building_address = $('#building_address', this),
            company = $('#company', this),
            message = $('#message', this),
            emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            errors = [];

        if (name.val().trim() == '') {
            errors.push(name)
        }
        // if (phone.val().trim() == '') {
        //     errors.push(phone)
        // }
        // if (company.val().trim() == '') {
        //     errors.push(company)
        // }
        // if (building_address.val().trim() == '') {
        //     errors.push(company)
        // }
        if (message.val().trim() == '') {
            errors.push(message)
        }
        if (!emailRegex.test(String(email.val().toLowerCase()))) {
            errors.push(email)
        }

        if (errors.length != 0) {
            for (var i = 0; i < errors.length; i++) {
                errors[i].addClass('error');
            }
        } else {
            var fd = new FormData(this);
            fd.append('action', 'concierge_form');
            // console.log(ajax.url);
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
                    // concole.log(data);
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

    })

});
    </script>
<?php get_footer(); ?>