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
            <form action='' id='contact-form'>
                <div class='form-fields'>
                    <input type='hidden' class='token' name='token'  value="<?php echo wp_create_nonce( 'contact_form' ); ?>">
                    <div class='form-row'>
                        <input type='text' placeholder='Your Name' name='yourName' id='name'>
                    </div>
                    <div class='form-row' style="width:50%;float: left; padding-right: 30px; ">
                        <input type='text' placeholder='E-Mail Address' name='email' id='email'>
                    </div>
                    <div class='form-row' style="width:50%;float:left">
                        <input type='text' placeholder='Phone' name='phone' id='phone'>
                    </div>
                    <div class='form-row'>
                        <input type='text' placeholder='Building Address' name='address' id='address'>
                    </div>
                    <div class='form-row'>
                        <input type='text' placeholder='Property / Company Name' name='company' id='company'>
                    </div>
                    <div class="form-row">
                        <textarea name="message" rows="5" placeholder="What kind of service you interested in? *" id="message"></textarea>
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
                    <p class="success-info">
                        Thank you! Your message has been sent successfully.
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>

<?php get_footer(); ?>