jQuery(document).ready(function ($) {
    /* single service page */
    $('.services-menu a, #menu-item-233 a').attr('data-has-swup', '');
    // active swup
    if($('#swup').length){
        let options = {
            containers: ["#swup"],
            linkSelector:
                'a[href^="' +
                window.location.origin +
                '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
            cache: true,
        };
        let swup = new Swup(options);
    }

    //update menu items width
    $('.services-menu > ul > li').each(function (index) {
        $(this).width($(this).width() + 50);
    });
    window.addEventListener('resize', function (event) {
        $('.services-menu > ul > li').each(function (index) {
            $(this).width($(this).width() + 50);
        });
    });


    $('a').each(function (index) {
        var attr = $(this).attr('data-has-swup');

        if (typeof attr !== 'undefined' && attr !== false) {
        } else {
            $(this).attr('data-no-swup', '');
        }

    });

    loadServiceSwiper();
    loadContact();

    document.addEventListener('swup:contentReplaced', (event) => { //listen when user change service page with swup
        loadServiceSwiper();
        loadMap();
    });

});
loadMap();
function loadServiceSwiper(){
    let serviceSwipe;
    if ($('.service-slider-wrap').length > 0) {
        serviceSwipe = new Swiper('.service-slider-wrap', {
            initialSlide: 0,
            slidesPerView: 1,
            spaceBetween: 55,
            observer: true,
            centeredSlides: true,
            autoHeight: true,
            observeParents: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            breakpoints: {
                640: {
                    slidesPerView: 'auto',
                    centeredSlides: false,
                    spaceBetween: 55,
                    pagination: false,
                },
            },
        });
        loadServiceImageGalery();
    }
}
function loadServiceImageGalery(){
    let galleryItem = document.getElementById('service-gallery');
    if (galleryItem != null) {
        lightGallery(galleryItem, {
            addClass: 'lg-methods-demo',
            controls: true,
            counter: false,
            download: false,
            enableSwipe: true,
            fullScreen: false,
        });
    }
}
function loadMap(){
    let map;
    if(document.getElementById('map')) {
        const place = {
            lat: 40.7256262,
            lng: -74.0087898
        };
        map = new google.maps.Map(document.getElementById('map'), {
            center: place,
            zoom: 17,
            mapId: '5973d810e21cb52d'
        });

        const marker = new google.maps.Marker({
            position: place,
            map: map,
            icon: {
                //    anchor: new google.maps.Point(69, 104),
                size: new google.maps.Size(69, 104),
                url: 'https://jtrain.brainstormtech.pro/wp-content/themes/jtrain/images/map-marker.svg'
            }
        });
    }
}
function loadContact(){
    $('#contact-form').on('submit', function (e) {
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
            emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
            fd.append('action', 'contact_form');
            console.log(fd);
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

    });
}

