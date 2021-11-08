jQuery(document).ready(function ($) {
    // landing page start

/*services slider*/
    jQuery('body').removeClass('loading');
    jQuery('#menu-toggle').on('click', function () {
        jQuery('body').toggleClass('menu-opened');
        fullpage_api.setAllowScrolling(false);
    });
    jQuery('#header-nav .close, #overlay').on('click', function () {
        jQuery('body').removeClass('menu-opened');
        fullpage_api.setAllowScrolling(true);
    });

    window.addEventListener('load', (event) => {
        let service_h = $('.services-top-section').height();
        let contact_h = $('.contact').height();
        $('.box-bordered').height(service_h + 190);
        $('.box-bordered-contact').height(contact_h+300);
    });

    // landing page end
    function setHeight(selector, varname){
        if(!selector.length) return;

        document.documentElement.style.setProperty(`--${varname}`, `${selector.outerHeight()}px`);
    }

    setHeight($(window), `vh`);
    setHeight($('#header'), `hh`);

    $(window).on(`resize`, function () {
        setHeight($(window), `vh`);
        setHeight($('#header'), `hh`);

    });


    
    $(`input`).on(`input`,function(){
        if($(this).hasClass(`invalid`)) {
            $(this).removeClass(`invalid`);
        }
    });

    /* lazyload */
    var ll = new LazyLoad({
        elements_selector: "img.lazy",
    });
    new LazyLoad({
        elements_selector: "iframe.lazy, video.lazy, div.lazy, section.lazy, a.lazy"
    });

    $('#home-fullpage').fullpage({
        navigation: false,
        scrollingSpeed: 1000,
        sectionSelector: '.fullpage-section',
        scrollHorizontally: true,
        slidesNavigation: false,
        controlArrows: false,
        parallax: true,
        scrollOverflow: true,
        normalScrollElements: '.header-nav-wrp',
        scrollOverflowOptions: {
            probeType: 3,
             mouseWheel: true,
            scrollbars: false
        },
        parallaxOptions: {
            type: 'reveal',
            percentage: 62,
            property: 'translate'
        },
        afterLoad: function (anchorLink, index) {

        },
        afterRender: function () {
            //fullpage_api.setAllowScrolling(false);

        },
        onLeave: function (origin, destination, direction) {
            let isAnimSection = $(destination.item).hasClass('text-animation'),
                fromAnimSection = $(origin.item).hasClass('text-animation'),
                isHero = $(destination.item).hasClass('hero-section');

            if(direction == 'up' && isAnimSection) {
                setTimeout(function(){
                    fullpage_api.moveSectionUp();
                }, 10)

            }
            /* header logo */
            if(isHero) {
               setTimeout(function(){
                   $('#header .logo').removeClass('unvisible') ;
               },500);

            } else {
                $('#header .logo').addClass('unvisible') ;
            }

            if(isAnimSection){
                $(destination.item).find('.txt-clip').addClass('anim1');
            }
            if(fromAnimSection) {
                $(origin.item).find('.txt-clip').addClass('anim2');
                if(direction == 'up') {
                    $(origin.item).find('.txt-clip').removeClass('anim2 anim1');
                } else {
                    setTimeout(function(){
                        $(origin.item).find('.txt-clip').removeClass('anim2 anim1');
                    },1000);
                }

            }

            /* slider play pause */
            if($(destination.item).hasClass('services-slider-fs') && servicesSlider) {
                servicesSlider.autoplay.start();
                $('.services-swiper-pagination').addClass('play');
            }
            if($(origin.item).hasClass('services-slider-fs') && servicesSlider) {
                servicesSlider.autoplay.stop();
                $('.services-swiper-pagination').removeClass('play');
            }
            /* art slider pause */
            if($(destination.item).hasClass('art-slider-fs') && artSlider) {
                artSlider.autoplay.start();
                $('.art-swiper-pagination').addClass('play');
                $('.art-slider').addClass('imgAnim');
            }
            if($(origin.item).hasClass('art-slider-fs') && artSlider) {
                artSlider.autoplay.stop();
                $('.art-swiper-pagination').removeClass('play');
                $('.art-slider').removeClass('imgAnim');
            }
            /* art slider pause */
            if($(destination.item).hasClass('testimonials-slider-fs') && testimonialsSlider) {
                testimonialsSlider.autoplay.start();

            }
            if($(origin.item).hasClass('testimonials-slider-fs') && testimonialsSlider) {
                testimonialsSlider.autoplay.stop();
            }
            /* location map */
            if($(destination.item).hasClass('contact-section')) {
               $('#map').addClass('anim');

            }
            if($(origin.item).hasClass('contact-section')) {
                $('#map').removeClass('anim');
            }


            /* overflow*/
            if($('.fp-scrollable', destination.item).length) {
              //  console.log(destination.index)


                let iscroll = $('.fp-scrollable', destination.item)[0].fp_iscrollInstance;

               // console.log(iscroll);

                if (iscroll && typeof iscroll !== undefined) {

                    iscroll.on('scroll', function(){
                        fullpage_api.setAllowScrolling(false);

                            if (this.y <= this.maxScrollY + 10 || this.y >= -10 ) {
                                fullpage_api.setAllowScrolling(true);
                            }
                       // console.log(this.y);
                    });
                }
            }

        },
        onSlideLeave: function (section, origin, destination, direction) {


        },
        afterResize: function () {
               fullpage_api.reBuild();
               let section = fullpage_api.getActiveSection();
               fullpage_api.silentMoveTo(section.index + 1);
        }
    });
    fullpage_api.setAllowScrolling(false);
    /* loading */
    var height = 100,
        perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = parseInt((EstimatedTime/1000)%60)*100;

// Loadbar Animation


    $('#visible-text').addClass('visible');

    setTimeout(function(){
        $('#loader .loader-img').addClass('visible');
        $(".gray-holder").css({
            'transition-duration': `${time}ms`
        }).css({
            'height': '0'
        })
       /* $(".gray-holder").animate({
            height: "0"
        }, time);*/

    },1000);
    setTimeout(function(){

       $('body').removeClass('loading');
    }, time + 500);
    setTimeout(function(){
        fullpage_api.setAllowScrolling(true);
    }, time + 2500);
    /* fancybox video */
    $('.video-icon').fancybox({
        video: {
            tpl:
                '<video class="fancybox-video" controls controlsList="nodownload" poster=""  webkit-playsinline autoplay  playsinline>' +
                '<source src="{{src}}" type="{{format}}" />' +
                'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
                "</video>",
            format: "", // custom video format
            autoStart: true
        }
    });
    /* fancybox slider video */
    $('.video-slider-icon').fancybox({
        video: {
            tpl:
                '<video class="fancybox-video" controls controlsList="nodownload" poster=""  webkit-playsinline autoplay  playsinline>' +
                '<source src="{{src}}" type="{{format}}" />' +
                'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
                "</video>",
            format: "", // custom video format
            autoStart: true
        },
        afterShow: function( instance, current ) {
            servicesSlider.autoplay.stop();
         //   console.info( 'Clicked element:' );
            $('.services-swiper-pagination').removeClass('play');
        },
        afterClose: function() {
            servicesSlider.autoplay.start();
            $('.services-swiper-pagination').addClass('play');
        }
    });
    /* services slider */
    if($('.services-slider').length) {
        var servicesSlider = new Swiper('.services-slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 12000,
                waitForTransition: true,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.services-swiper-pagination',
                clickable: false,
                renderBullet: function (index, className) {
                    return `<div class="${className }">
                              <svg class="fp-arc-loader" width="40" height="40" viewBox="0 0 40 40">
                                
                                     <circle class="path2" cx="20" cy="20" r="18" fill="none" transform="rotate(-90 20 20)" stroke="#5E5E5E" stroke-opacity="1" stroke-width="1.5px" style="
">        
                                    </circle> 
                                   <circle class="path" cx="20" cy="20" r="18.7" fill="none" transform="rotate(-90 20 20)" stroke="#0057FF" stroke-opacity="1" stroke-width="2.5px">      </circle>  
                                </svg>
                                <p class="index h6 flex fjc fac"><span>${index + 1}</span></p>
                            </div>`;

                },

            },
            navigation: {
                nextEl: '.services-swiper-button-next',
                prevEl: '.services-swiper-button-prev',
            },
        });
      //  console.log(servicesSlider.autoplay);
        servicesSlider.autoplay.stop();
        servicesSlider.on('slideChangeTransitionStart', function () {
            var index = servicesSlider.previousIndex,
                nextIndex = servicesSlider.realIndex,
                currentSlide =   $(servicesSlider.slides[index]),
                nextSlide =   $(servicesSlider.slides[nextIndex]),
                currentSlideId = $(currentSlide).attr('data-index'),
                nextSlideId = $(nextSlide).attr('data-index'),
                setTimeoutVar = null;
            if($('.services-slider-holder').hasClass('first-look')) {

                $('.services-slider-holder').removeClass('first-look');
            }
            if(currentSlide) {
                $(currentSlide).find('video').get(0).pause();
                $(`.slide-titles .slide-title[data-index=${currentSlideId}]`).removeClass('anim');
                $(`.slide-titles .slide-title[data-index=${nextSlideId}]`).addClass('anim');
                $(`.services-info-section .description-holder .description[data-index=${currentSlideId}]`).fadeOut(500,'linear',function(){
                    $(`.services-info-section .description-holder .description[data-index=${nextSlideId}]`).fadeIn(500,'linear');
                });
                setTimeoutVar = setTimeout(function(){
                    $(`.slide-titles .slide-title[data-index=${currentSlideId}]`).addClass('active');
                },400);
            }
        });
        servicesSlider.on('slideChangeTransitionEnd', function () {
            var index = servicesSlider.activeIndex,
                currentSlide =   $(servicesSlider.slides[index]),
                currentSlideId = $(currentSlide).attr('data-index');

                if(currentSlide) {
                    $(currentSlide).find('video').get(0).play();

                    setTimeout(function(){
                        $(`.slide-titles .slide-title[data-index=${currentSlideId}]`).removeClass('active');
                    },200)
                }
        });
    }
    /* art slider */
    if($('.art-slider').length) {
        var artSlider = new Swiper('.art-slider', {
            spaceBetween: 30,
            slidesPerView: 'auto',
            loop: true,
            speed: 1000,
            centeredSlides: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 12000,
                waitForTransition: true,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.art-swiper-pagination',
                clickable: false,
                renderBullet: function (index, className) {
                    return `<div class="${className }">
                              <svg class="fp-arc-loader" width="40" height="40" viewBox="0 0 40 40">
                                
                                     <circle class="path2" cx="20" cy="20" r="18" fill="none" transform="rotate(-90 20 20)" stroke="#5E5E5E" stroke-opacity="1" stroke-width="1.5px" style="
">        
                                    </circle> 
                                   <circle class="path" cx="20" cy="20" r="18.7" fill="none" transform="rotate(-90 20 20)" stroke="#0057FF" stroke-opacity="1" stroke-width="2.5px">      </circle>  
                                </svg>
                                <p class="index h6 flex fjc fac"><span>${index + 1}</span></p>
                            </div>`;

                },

            },
            navigation: {
                nextEl: '.art-swiper-button-next',
            },
            on: {
                init: function () {
                    $(this.slides[this.activeIndex]).addClass('isActive')
                 //   console.log(this);
                   // ll.update();
                }
            }
        });
        artSlider.autoplay.stop();
        artSlider.on('slideChangeTransitionStart', function () {
            var index = artSlider.previousIndex,
                nextIndex = artSlider.activeIndex,
                realIndex = artSlider.realIndex,
                currentSlide =   $(artSlider.slides[index]),
                nextSlide =   $(artSlider.slides[nextIndex]),
                realSlide =   $(artSlider.slides[realIndex]),
                currentSlideId = $(currentSlide).attr('data-index'),
                realSlideId = $(realSlide).attr('data-index'),
                nextSlideId = $(nextSlide).attr('data-index'),
                setTimeoutVar = null;
            if(currentSlide) {
                $('.swiper-slide.isActive').addClass('leave');
                $(nextSlide).addClass('enter');

                $(`.art-info-holder .art-info[data-index=${currentSlideId}]`).fadeOut(500,'linear',function(){
                    $(`.art-info-holder .art-info[data-index=${nextSlideId}]`).fadeIn(500,'linear');
                });
            }
        });
        artSlider.on('slideChangeTransitionEnd', function () {
           var index = artSlider.activeIndex,
               currentSlide =   $(artSlider.slides[index]),
               currentSlideId = $(currentSlide).attr('data-index');

               if(currentSlide) {
                 //  $(currentSlide).find('video').get(0).play();
                   $('.swiper-slide.isActive').removeClass('isActive');
                    $(currentSlide).addClass('isActive');
                   setTimeout(function(){
                       $('.swiper-slide.enter').removeClass('enter');
                       $('.swiper-slide.leave').removeClass('leave');
                       //$(`.slide-titles .slide-title[data-index=${currentSlideId}]`).removeClass('active');
                   },300)
               }
       });
    }

    /* testimonials slider */
    if($('.testimonials-slider').length) {
        var testimonialsSlider = new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 12000,
                waitForTransition: true,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonials-swiper-pagination',
                clickable: false,
                renderBullet: function (index, className) {
                    return `<div class="${className }">
                              <svg class="fp-arc-loader" width="40" height="40" viewBox="0 0 40 40">
                                
                                     <circle class="path2" cx="20" cy="20" r="18" fill="none" transform="rotate(-90 20 20)" stroke="#5E5E5E" stroke-opacity="1" stroke-width="4px" style="
">        
                                    </circle> 
                              
                                </svg>
              
                            </div>`;

                },

            },
            navigation: {
                nextEl: '.testimonials-swiper-button-next',
                prevEl: '.testimonials-swiper-button-prev',
            },
        });
        testimonialsSlider.autoplay.stop();
        testimonialsSlider.on('slideChangeTransitionStart', function () {
            var index = testimonialsSlider.previousIndex,
                nextIndex = testimonialsSlider.activeIndex,
                currentSlide =   $(testimonialsSlider.slides[index]),
                nextSlide =   $(testimonialsSlider.slides[nextIndex]),
                currentSlideId = $(currentSlide).attr('data-index'),
                nextSlideId = $(nextSlide).attr('data-index'),
                setTimeoutVar = null;
            if(currentSlide) {
                $(currentSlide).find('video').get(0).pause();
                $(`.testimonials-holder .slider-text-info .text-info[data-index=${currentSlideId}]`).fadeOut(500,'linear',function(){
                    $(`.testimonials-holder .slider-text-info .text-info[data-index=${nextSlideId}]`).fadeIn(550,'linear');
                });
            }
        });
        testimonialsSlider.on('slideChangeTransitionEnd', function () {
            var index = testimonialsSlider.activeIndex,
                currentSlide =   $(testimonialsSlider.slides[index]),
                currentSlideId = $(currentSlide).attr('data-index');

            if(currentSlide) {
                $(currentSlide).find('video').get(0).play();
            }
        });
    }

    /* contact */
    $(`input, textarea, select`).on(`input keypress change`, function () {
        $(this).removeClass(`error`);
    })
    /**
     * Phone Mask
     */
    if ($(`input#phone`).length) {
        $(`input#phone`).mask('(000) 000-0000');
    }
    $(`#contact-form`).on(`submit`, function (e) {
        e.preventDefault();

        if ($(this).hasClass('loading')) {
            return false;
        }
        const self = $(this),
            name = $(`#name`, this),
            email = $(`#email`, this),
            phone = $(`#phone`, this),
            service = $(`#service`, this),
            message = $(`#message`, this),
            emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            errors = [];

        if (name.val().trim() == '') {
            errors.push(name)
        }
        if (phone.val().trim() == '') {
            errors.push(phone)
        }
        if (service.val().trim() == '') {
            errors.push(service)
        }
        if (message.val().trim() == '') {
            errors.push(message)
        }
        if (!emailRegex.test(String(email.val().toLowerCase()))) {
            errors.push(email)
        }

        if (errors.length != 0) {
            for (var i = 0; i < errors.length; i++) {
                errors[i].addClass(`error`);
            }
        } else {
            var fd = new FormData(this);
            fd.append('action', "contact_form");
            $.ajax({
                url: ajax.url,
                type: "POST",
                contentType: false,
                processData: false,
                data: fd,
                beforeSend: function () {
                    self.addClass('loading');
                },
                success: function (data) {
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


    /* menu */
    $('#menu-toggle').on('click', function () {
        $('body').toggleClass('menu-opened');
        fullpage_api.setAllowScrolling(false);
    });

    $('#header-nav .close, #overlay').on('click', function () {
        $('body').removeClass('menu-opened');
        fullpage_api.setAllowScrolling(true);
    });

    $('.section-menu-item').on('click',function(e){
        e.preventDefault();
        var sectionid = $(this).attr('data-section');
        $('body').removeClass('menu-opened');
        fullpage_api.setAllowScrolling(true);
        setTimeout(function(){
            fullpage_api.moveTo(sectionid);
        },400)

    })
    $('.slider-menu-item').on('click',function(e){
        e.preventDefault();
        var sectionid = $(this).parents('.menu-item').find('.section-menu-item').attr('data-section'),
            slideId = $(this).attr('data-slide');
        $('body').removeClass('menu-opened');
        fullpage_api.setAllowScrolling(true);
        setTimeout(function(){
            fullpage_api.moveTo(parseInt(sectionid) + 1);
            servicesSlider.slideTo(slideId-1, 0);
        },400)
    })
    $('.services-link').on('click',function(e){
        e.preventDefault();
        fullpage_api.moveTo(10);

    });
    $('.scroll-btn-holder a').on('click',function(e){
        e.preventDefault();
        fullpage_api.moveTo(2);

    });
});
