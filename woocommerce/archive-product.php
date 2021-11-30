<?php get_header(); ?>
<div class="shop-container">
   <div class="filter">
	   <?php
//	   wp_nav_menu( 'shop-menu' );
	   $terms = get_terms( 'product_cat' );
	   $args = array(
		   'post_type'      => 'product',
		   'post_status'    => 'publish',
		   'posts_per_page' => - 1
	   );
	   $products = new WP_Query( $args );

	   // DEBUG
	   // var_dump( $terms );echo get_permalink( wc_get_page_id( 'shop' ) );
//       if($terms) {
//	       $class = ( !is_product_category( $term->name ) ) ? 'current-menu-item ' : '';
//           echo '<div class="menu-shop-menu-container bapf_body">';
//               echo '<ul id="menu-shop-menu" class="menu">';
//                 echo '<li class="'.$class.'">'
//                        . '<a href="'.get_permalink( wc_get_page_id( "shop" ) ).'">All'
//                        . '<span class="count">' . $products->found_posts . '</span></a>'
//                     . '</li>';
//               foreach ( $terms as $term ) {
//	               $class = ( is_product_category( $term->name ) ) ? 'current-menu-item ' : '';
//                   echo '<li class="'. $class.''.$term->slug . '-' . $term->term_id . '">'
//                        . '<a href="'.get_term_link($term->term_id).'">'.$term->name
//                        . '<span class="count">' . $term->count . '</span></a>'
//                        . '</li>';
//               }
//               echo '</ul>';
//           echo '</div>';
//       }

	   echo do_shortcode( '[br_filter_single filter_id=427]' );
	   echo do_shortcode( '[br_filter_single filter_id=376]' );
	   ?>
   </div>
    <div class="products-wrap transition-fade">
        <?php
      if ( woocommerce_product_loop() ) {

          /**
           * Hook: woocommerce_before_shop_loop.
           *
           * @hooked woocommerce_output_all_notices - 10
           * @hooked woocommerce_result_count - 20
           * @hooked woocommerce_catalog_ordering - 30
           */
          do_action( 'woocommerce_before_shop_loop' );

          woocommerce_product_loop_start();

          if ( wc_get_loop_prop( 'total' ) ) {
              while( have_posts() ) {
                  the_post();

                  /**
                   * Hook: woocommerce_shop_loop.
                   *
                   * @hooked WC_Structured_Data::generate_product_data() - 10
                   */
                  do_action( 'woocommerce_shop_loop' );

                  wc_get_template_part( 'content', 'product' );
              }
          }

          woocommerce_product_loop_end();

          /**
           * Hook: woocommerce_after_shop_loop.
           *
           * @hooked woocommerce_pagination - 10
           */
          do_action( 'woocommerce_after_shop_loop' );
      }
      else {
          /**
           * Hook: woocommerce_no_products_found.
           *
           * @hooked wc_no_products_found - 10
           */
          do_action( 'woocommerce_no_products_found' );
      }

      /**
       * Hook: woocommerce_after_main_content.
       *
       * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
       */
      do_action( 'woocommerce_after_main_content' );

      ?>
    </div>
</div>
    <script>
        jQuery(document).ready(function ($) {
            // video = document.getElementById('video');
            //
            // if (video.readyState === 4) {
            //     console.log('loaded');
            // }
            $('.menu-shop-menu-container a, #menu-item-233 a').attr('data-has-swup', '');
            //page transition
            $('a').each(function (index) {
                var attr = $(this).attr('data-has-swup');

                if (typeof attr !== 'undefined' && attr !== false) {

                    // console.log('have data-has-swup');

                } else {
                    // console.log('not have');
                    $(this).attr('data-no-swup', '');
                }

            });
            const options = {
                linkSelector:
                    'a[href^="' +
                    window.location.origin +
                    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
                cache: true,
            };
            const swup = new Swup(options);
            swup.on('clickLink', function (e) {
                let current = e.path[1];
                let menu_items = e.path[2];
                $(menu_items.children).each(function (index) {
                    if( $(this).hasClass('current-menu-item') ){
                        $(this).removeClass('current-menu-item');
                    }
                });
                current.classList.add('current-menu-item');
            });
            //end

            $('.menu-shop-menu-container > ul > li').each(function (index) {
                $(this).width($(this).width() + 10);
            });
            window.addEventListener('resize', function (event) {
                $('.menu-shop-menu-container > ul > li').each(function (index) {
                    $(this).width($(this).width() + 10);
                });
            });

            // $('#contact-form').on('submit', function (e) {
            //     e.preventDefault();
            //
            //     if ($(this).hasClass('loading')) {
            //         return false;
            //     }
            //     const self = $(this),
            //         name = $(`#name`, this),
            //         email = $(`#email`, this),
            //         phone = $(`#phone`, this),
            //         service = $(`#service`, this),
            //         message = $(`#message`, this),
            //         emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            //         errors = [];
            //
            //     if (name.val().trim() == '') {
            //         errors.push(name)
            //     }
            //     if (phone.val().trim() == '') {
            //         errors.push(phone)
            //     }
            //     if (service.val().trim() == '') {
            //         errors.push(service)
            //     }
            //     if (message.val().trim() == '') {
            //         errors.push(message)
            //     }
            //     if (!emailRegex.test(String(email.val().toLowerCase()))) {
            //         errors.push(email)
            //     }
            //
            //     if (errors.length != 0) {
            //         for (var i = 0; i < errors.length; i++) {
            //             errors[i].addClass(`error`);
            //         }
            //     } else {
            //         var fd = new FormData(this);
            //         fd.append('action', 'contact_form');
            //         console.log(fd);
            //         $.ajax({
            //             url: ajax.url,
            //             type: 'POST',
            //             contentType: false,
            //             processData: false,
            //             data: fd,
            //             beforeSend: function () {
            //                 self.addClass('loading');
            //             },
            //             success: function (data) {
            //                 if (data.success) {
            //                     self[0].reset();
            //                     self.addClass('success');
            //                     self.removeClass('loading');
            //                 }
            //             },
            //             error: function (err) {
            //             }
            //         });
            //     }
            //
            // });
        });
    </script>
<?php get_footer(); ?>