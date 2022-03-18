/*! gocdj - 20-07-2021 */
jQuery(document).ready(function ($) {


    // }
    function setHeight(selector, varname) {
        selector.length && document.documentElement.style.setProperty(`--${varname}`, `${selector.outerHeight()}px`);
    }
    setHeight($(window), "vh"),
        setHeight($("#header"), "hh"),
        $(window).on("resize", function  () {
            setHeight($(window), "vh"), setHeight($("#header"), "hh");
        }),
        $("input").on("input", function () {
            $(this).hasClass("invalid") && $(this).removeClass("invalid");
        });
    new LazyLoad({ elements_selector: "img.lazy" });
    new LazyLoad({ elements_selector: "iframe.lazy, video.lazy, div.lazy, section.lazy, a.lazy" }),
        $("#home-fullpage").fullpage({
            navigation: !1,
            scrollingSpeed: 1e3,
            sectionSelector: ".fullpage-section",
            scrollHorizontally: !0,
            slidesNavigation: !1,
            controlArrows: !1,
            parallax: !0,
            scrollOverflow: !0,
            normalScrollElements: ".header-nav-wrp",
            scrollOverflowOptions: { probeType: 3, mouseWheel: !0, scrollbars: !1 },
            parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
            afterLoad: function (anchorLink, index) {},
            afterRender: function () {},
            onLeave: function (origin, destination, direction) {
                let isAnimSection = $(destination.item).hasClass("text-animation"),
                    fromAnimSection = $(origin.item).hasClass("text-animation"),
                    isHero = $(destination.item).hasClass("hero-section");
                if (
                    ("up" == direction &&
                        isAnimSection &&
                        setTimeout(function () {
                            fullpage_api.moveSectionUp();
                        }, 10),
                    isHero
                        ? setTimeout(function () {
                              $("#header .logo").removeClass("unvisible");
                          }, 500)
                        : $("#header .logo").addClass("unvisible"),
                    isAnimSection && $(destination.item).find(".txt-clip").addClass("anim1"),
                    fromAnimSection &&
                        ($(origin.item).find(".txt-clip").addClass("anim2"),
                        "up" == direction
                            ? $(origin.item).find(".txt-clip").removeClass("anim2 anim1")
                            : setTimeout(function () {
                                  $(origin.item).find(".txt-clip").removeClass("anim2 anim1");
                              }, 1e3)),
                    $(destination.item).hasClass("services-slider-fs") && servicesSlider && (servicesSlider.autoplay.start(), $(".services-swiper-pagination").addClass("play")),
                    $(origin.item).hasClass("services-slider-fs") && servicesSlider && (servicesSlider.autoplay.stop(), $(".services-swiper-pagination").removeClass("play")),
                    $(destination.item).hasClass("art-slider-fs") && artSlider && (artSlider.autoplay.start(), $(".art-swiper-pagination").addClass("play"), $(".art-slider").addClass("imgAnim")),
                    $(origin.item).hasClass("art-slider-fs") && artSlider && (artSlider.autoplay.stop(), $(".art-swiper-pagination").removeClass("play"), $(".art-slider").removeClass("imgAnim")),
                    $(destination.item).hasClass("testimonials-slider-fs") && testimonialsSlider && testimonialsSlider.autoplay.start(),
                    $(origin.item).hasClass("testimonials-slider-fs") && testimonialsSlider && testimonialsSlider.autoplay.stop(),
                    $(destination.item).hasClass("contact-section") && $("#map").addClass("anim"),
                    $(origin.item).hasClass("contact-section") && $("#map").removeClass("anim"),
                    $(".fp-scrollable", destination.item).length)
                ) {
                    let iscroll = $(".fp-scrollable", destination.item)[0].fp_iscrollInstance;
                    iscroll &&
                        void 0 !== typeof iscroll &&
                        iscroll.on("scroll", function () {
                            fullpage_api.setAllowScrolling(!1), (this.y <= this.maxScrollY + 10 || this.y >= -10) && fullpage_api.setAllowScrolling(!0);
                        });
                }
            },
            onSlideLeave: function (section, origin, destination, direction) {},
            afterResize: function () {
                fullpage_api.reBuild();
                let section = fullpage_api.getActiveSection();
                fullpage_api.silentMoveTo(section.index + 1);
            },
        }),
        fullpage_api.setAllowScrolling(!1);
    // if (window.location.search > 0) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let target = urlParams.get('target');
    // fullpage_api.moveTo(2); // what is jtrain
    // fullpage_api.moveTo(4); // services
    // fullpage_api.moveTo(7); // simulated by art
    // fullpage_api.moveTo(9); // what do people say
    // fullpage_api.moveTo(10); // train with us

    setTimeout(function () {
            switch (target) {
                case 'what-is-jtrain':
                    fullpage_api.moveTo(2);
                    break;
                case 'our-services':
                    fullpage_api.moveTo(4);
                    break;
                case 'stimulated-by-art':
                    fullpage_api.moveTo(8);
                    break;
                case 'what-do-people-say':
                    fullpage_api.moveTo(10);
                    break;
                case 'become-a-member':
                    fullpage_api.moveTo(11);
                    break;
                default:
                    console.log('Nothing!');
            }
    }, 3000);
    var perfData = window.performance.timing,
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = 100 * parseInt((EstimatedTime / 1e3) % 60);
    if (
        ($("#visible-text").addClass("visible"),
        setTimeout(function () {
            $("#loader .loader-img").addClass("visible"),
                $(".gray-holder")
                    .css({ "transition-duration": `${time}ms` })
                    .css({ height: "0" });
        }, 1e3),
        setTimeout(function () {
            $("body").removeClass("loading");
        }, time + 500),
        setTimeout(function () {
            fullpage_api.setAllowScrolling(!0);
        }, time + 2500),
        Fancybox.bind('.video-icon',{
            video: {
                tpl:
                    '<video class="fancybox-video" controls controlsList="nodownload" poster=""  webkit-playsinline autoplay  playsinline><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0,
            },
        }),
        Fancybox.bind('.video-slider-icon',{
            video: {
                tpl:
                    '<video class="fancybox-video" controls controlsList="nodownload" poster=""  webkit-playsinline autoplay  playsinline><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0,
            },
            afterShow: function (instance, current) {
                servicesSlider.autoplay.stop(), $(".services-swiper-pagination").removeClass("play");
            },
            afterClose: function () {
                servicesSlider.autoplay.start(), $(".services-swiper-pagination").addClass("play");
            },
        }),
        $(".services-slider").length)
    ) {
        var servicesSlider = new Swiper(".services-slider", {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: !0,
            loop: !0,
            speed: 1e3,
            autoplay: { delay: 12e3, waitForTransition: !0, disableOnInteraction: !1 },
            pagination: {
                el: ".services-swiper-pagination",
                clickable: !1,
                renderBullet: function (index, className) {
                    return `<div class="${className}">\n                              <svg class="fp-arc-loader" width="40" height="40" viewBox="0 0 40 40">\n                                \n                                     <circle class="path2" cx="20" cy="20" r="18" fill="none" transform="rotate(-90 20 20)" stroke="#5E5E5E" stroke-opacity="1" stroke-width="1.5px" style="\n">        \n                                    </circle> \n                                   <circle class="path" cx="20" cy="20" r="18.7" fill="none" transform="rotate(-90 20 20)" stroke="#0057FF" stroke-opacity="1" stroke-width="2.5px">      </circle>  \n                                </svg>\n                                <p class="index h6 flex fjc fac"><span>${
                        index + 1
                    }</span></p>\n                            </div>`;
                },
            },
            navigation: { nextEl: ".services-swiper-button-next", prevEl: ".services-swiper-button-prev" },
        });
        servicesSlider.autoplay.stop(),
            servicesSlider.on("slideChangeTransitionStart", function () {
                var index = servicesSlider.previousIndex,
                    nextIndex = servicesSlider.realIndex,
                    currentSlide = $(servicesSlider.slides[index]),
                    nextSlide = $(servicesSlider.slides[nextIndex]),
                    currentSlideId = $(currentSlide).attr("data-index"),
                    nextSlideId = $(nextSlide).attr("data-index");
                $(".services-slider-holder").hasClass("first-look") && $(".services-slider-holder").removeClass("first-look"),
                    currentSlide &&
                        ($(currentSlide).find("video").get(0).pause(),
                        $(`.slide-titles .slide-title[data-index=${currentSlideId}]`).removeClass("anim"),
                        $(`.slide-titles .slide-title[data-index=${nextSlideId}]`).addClass("anim"),
                        $(`.services-info-section .description-holder .description[data-index=${currentSlideId}]`).fadeOut(500, "linear", function () {
                            $(`.services-info-section .description-holder .description[data-index=${nextSlideId}]`).fadeIn(500, "linear");
                        }),
                        setTimeout(function () {
                            $(`.slide-titles .slide-title[data-index=${currentSlideId}]`).addClass("active");
                        }, 400));
            }),
            servicesSlider.on("slideChangeTransitionEnd", function () {
                var index = servicesSlider.activeIndex,
                    currentSlide = $(servicesSlider.slides[index]),
                    currentSlideId = $(currentSlide).attr("data-index");
                currentSlide &&
                    ($(currentSlide).find("video").get(0).play(),
                    setTimeout(function () {
                        $(`.slide-titles .slide-title[data-index=${currentSlideId}]`).removeClass("active");
                    }, 200));
            });
    }
    if ($(".art-slider").length) {
        var artSlider = new Swiper(".art-slider", {
            spaceBetween: 30,
            slidesPerView: "auto",
            loop: !0,
            speed: 1e3,
            centeredSlides: !0,
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            autoplay: { delay: 12e3, waitForTransition: !0, disableOnInteraction: !1 },
            pagination: {
                el: ".art-swiper-pagination",
                clickable: !1,
                renderBullet: function (index, className) {
                    return `<div class="${className}">\n                              <svg class="fp-arc-loader" width="40" height="40" viewBox="0 0 40 40">\n                                \n                                     <circle class="path2" cx="20" cy="20" r="18" fill="none" transform="rotate(-90 20 20)" stroke="#5E5E5E" stroke-opacity="1" stroke-width="1.5px" style="\n">        \n                                    </circle> \n                                   <circle class="path" cx="20" cy="20" r="18.7" fill="none" transform="rotate(-90 20 20)" stroke="#0057FF" stroke-opacity="1" stroke-width="2.5px">      </circle>  \n                                </svg>\n                                <p class="index h6 flex fjc fac"><span>${
                        index + 1
                    }</span></p>\n                            </div>`;
                },
            },
            navigation: { nextEl: ".art-swiper-button-next" },
            on: {
                init: function () {
                    $(this.slides[this.activeIndex]).addClass("isActive");
                },
            },
        });
        artSlider.autoplay.stop(),
            artSlider.on("slideChangeTransitionStart", function () {
                var index = artSlider.previousIndex,
                    nextIndex = artSlider.activeIndex,
                    realIndex = artSlider.realIndex,
                    currentSlide = $(artSlider.slides[index]),
                    nextSlide = $(artSlider.slides[nextIndex]),
                    realSlide = $(artSlider.slides[realIndex]),
                    currentSlideId = $(currentSlide).attr("data-index"),
                    nextSlideId = ($(realSlide).attr("data-index"), $(nextSlide).attr("data-index"));
                currentSlide &&
                    ($(".swiper-slide.isActive").addClass("leave"),
                    $(nextSlide).addClass("enter"),
                    $(`.art-info-holder .art-info[data-index=${currentSlideId}]`).fadeOut(500, "linear", function () {
                        $(`.art-info-holder .art-info[data-index=${nextSlideId}]`).fadeIn(500, "linear");
                    }));
            }),
            artSlider.on("slideChangeTransitionEnd", function () {
                var index = artSlider.activeIndex,
                    currentSlide = $(artSlider.slides[index]);
                $(currentSlide).attr("data-index");
                currentSlide &&
                    ($(".swiper-slide.isActive").removeClass("isActive"),
                    $(currentSlide).addClass("isActive"),
                    setTimeout(function () {
                        $(".swiper-slide.enter").removeClass("enter"), $(".swiper-slide.leave").removeClass("leave");
                    }, 300));
            });
    }
    if ($(".testimonials-slider").length) {
        var testimonialsSlider = new Swiper(".testimonials-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: !0,
            speed: 1e3,
            autoplay: { delay: 12e3, waitForTransition: !0, disableOnInteraction: !1 },
            pagination: {
                el: ".testimonials-swiper-pagination",
                clickable: !1,
                renderBullet: function (index, className) {
                    return `<div class="${className}">\n                              <svg class="fp-arc-loader" width="40" height="40" viewBox="0 0 40 40">\n                                \n                                     <circle class="path2" cx="20" cy="20" r="18" fill="none" transform="rotate(-90 20 20)" stroke="#5E5E5E" stroke-opacity="1" stroke-width="4px" style="\n">        \n                                    </circle> \n                              \n                                </svg>\n              \n                            </div>`;
                },
            },
            navigation: { nextEl: ".testimonials-swiper-button-next", prevEl: ".testimonials-swiper-button-prev" },
        });
        testimonialsSlider.autoplay.stop(),
            testimonialsSlider.on("slideChangeTransitionStart", function () {
                var index = testimonialsSlider.previousIndex,
                    nextIndex = testimonialsSlider.activeIndex,
                    currentSlide = $(testimonialsSlider.slides[index]),
                    nextSlide = $(testimonialsSlider.slides[nextIndex]),
                    currentSlideId = $(currentSlide).attr("data-index"),
                    nextSlideId = $(nextSlide).attr("data-index");
                currentSlide &&
                    ($(currentSlide).find("video").get(0).pause(),
                    $(`.testimonials-holder .slider-text-info .text-info[data-index=${currentSlideId}]`).fadeOut(500, "linear", function () {
                        $(`.testimonials-holder .slider-text-info .text-info[data-index=${nextSlideId}]`).fadeIn(550, "linear");
                    }));
            }),
            testimonialsSlider.on("slideChangeTransitionEnd", function () {
                var index = testimonialsSlider.activeIndex,
                    currentSlide = $(testimonialsSlider.slides[index]);
                $(currentSlide).attr("data-index");
                currentSlide && $(currentSlide).find("video").get(0).play();
            });
    }
    $("input, textarea, select").on("input keypress change", function () {
        $(this).removeClass("error");
    });
        $("input#phone").length && $("input#phone").mask("(000) 000-0000");
        $("#contact-form").on("submit", function (e) {
            if ((e.preventDefault(), $(this).hasClass("loading"))) return !1;
            const self = $(this),
                name = $("#name", this),
                email = $("#email", this),
                phone = $("#phone", this),
                service = $("#service", this),
                message = $("#message", this),
                errors = [];
            if (
                ("" == name.val().trim() && errors.push(name),
                "" == phone.val().trim() && errors.push(phone),
                "" == service.val().trim() && errors.push(service),
                "" == message.val().trim() && errors.push(message),
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email.val().toLowerCase())) || errors.push(email),
                0 != errors.length)
            )
                for (var i = 0; i < errors.length; i++) errors[i].addClass("error");
            else {
                var fd = new FormData(this);
                fd.append("action", "contact_form"),
                    $.ajax({
                        url: ajax.url,
                        type: "POST",
                        contentType: !1,
                        processData: !1,
                        data: fd,
                        beforeSend: function () {
                            self.addClass("loading");
                        },
                        success: function (data) {
                            data.success && (self[0].reset(), self.addClass("success"), self.removeClass("loading"));
                        },
                        error: function (err) {},
                    });
            }
        });

        $(".section-menu-item").on("click", function (e) {
            e.preventDefault();
            var sectionid = $(this).attr("data-section");
            $("body").removeClass("menu-opened"),
                fullpage_api.setAllowScrolling(!0),
                setTimeout(function () {
                    fullpage_api.moveTo(sectionid);
                }, 400);
        }),
        $(".slider-menu-item").on("click", function (e) {
            e.preventDefault();
            var sectionid = $(this).parents(".menu-item").find(".section-menu-item").attr("data-section"),
                slideId = $(this).attr("data-slide");
            $("body").removeClass("menu-opened"),
                fullpage_api.setAllowScrolling(!0),
                setTimeout(function () {
                    fullpage_api.moveTo(parseInt(sectionid) + 1), servicesSlider.slideTo(slideId - 1, 0);
                }, 400);
        }),
        $(".services-link").on("click", function (e) {
            e.preventDefault(), fullpage_api.moveTo(9);
        }),
        $(".scroll-btn-holder a").on("click", function (e) {
            e.preventDefault(), fullpage_api.moveTo(2);
        });
}),
    (function (window, document, Math) {
        var rAF =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1e3 / 60);
                },
            utils = (function () {
                var me = {},
                    _elementStyle = document.createElement("div").style,
                    _vendor = (function () {
                        for (var vendors = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, l = vendors.length; i < l; i++) if (vendors[i] + "ransform" in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
                        return !1;
                    })();
                function _prefixStyle(style) {
                    return !1 !== _vendor && ("" === _vendor ? style : _vendor + style.charAt(0).toUpperCase() + style.substr(1));
                }
                (me.getTime =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                    (me.extend = function (target, obj) {
                        for (var i in obj) target[i] = obj[i];
                    }),
                    (me.addEvent = function (el, type, fn, capture) {
                        el.addEventListener(type, fn, !!capture);
                    }),
                    (me.removeEvent = function (el, type, fn, capture) {
                        el.removeEventListener(type, fn, !!capture);
                    }),
                    (me.prefixPointerEvent = function (pointerEvent) {
                        return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
                    }),
                    (me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
                        var destination,
                            duration,
                            distance = current - start,
                            speed = Math.abs(distance) / time;
                        return (
                            (duration = speed / (deceleration = void 0 === deceleration ? 6e-4 : deceleration)),
                            (destination = current + ((speed * speed) / (2 * deceleration)) * (distance < 0 ? -1 : 1)) < lowerMargin
                                ? ((destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5) * (speed / 8) : lowerMargin), (duration = (distance = Math.abs(destination - current)) / speed))
                                : destination > 0 && ((destination = wrapperSize ? (wrapperSize / 2.5) * (speed / 8) : 0), (duration = (distance = Math.abs(current) + destination) / speed)),
                            { destination: Math.round(destination), duration: duration }
                        );
                    });
                var _transform = _prefixStyle("transform");
                return (
                    me.extend(me, {
                        hasTransform: !1 !== _transform,
                        hasPerspective: _prefixStyle("perspective") in _elementStyle,
                        hasTouch: "ontouchstart" in window,
                        hasPointer: !(!window.PointerEvent && !window.MSPointerEvent),
                        hasTransition: _prefixStyle("transition") in _elementStyle,
                    }),
                    (me.isBadAndroid = (function () {
                        var appVersion = window.navigator.appVersion;
                        if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
                            var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
                            return !(safariVersion && "object" == typeof safariVersion && safariVersion.length >= 2) || parseFloat(safariVersion[1]) < 535.19;
                        }
                        return !1;
                    })()),
                    me.extend((me.style = {}), {
                        transform: _transform,
                        transitionTimingFunction: _prefixStyle("transitionTimingFunction"),
                        transitionDuration: _prefixStyle("transitionDuration"),
                        transitionDelay: _prefixStyle("transitionDelay"),
                        transformOrigin: _prefixStyle("transformOrigin"),
                        touchAction: _prefixStyle("touchAction"),
                    }),
                    (me.hasClass = function (e, c) {
                        return new RegExp("(^|\\s)" + c + "(\\s|$)").test(e.className);
                    }),
                    (me.addClass = function (e, c) {
                        if (!me.hasClass(e, c)) {
                            var newclass = e.className.split(" ");
                            newclass.push(c), (e.className = newclass.join(" "));
                        }
                    }),
                    (me.removeClass = function (e, c) {
                        if (me.hasClass(e, c)) {
                            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
                            e.className = e.className.replace(re, " ");
                        }
                    }),
                    (me.offset = function (el) {
                        for (var left = -el.offsetLeft, top = -el.offsetTop; (el = el.offsetParent); ) (left -= el.offsetLeft), (top -= el.offsetTop);
                        return { left: left, top: top };
                    }),
                    (me.preventDefaultException = function (el, exceptions) {
                        for (var i in exceptions) if (exceptions[i].test(el[i])) return !0;
                        return !1;
                    }),
                    me.extend((me.eventType = {}), { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }),
                    me.extend((me.ease = {}), {
                        quadratic: {
                            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            fn: function (k) {
                                return k * (2 - k);
                            },
                        },
                        circular: {
                            style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                            fn: function (k) {
                                return Math.sqrt(1 - --k * k);
                            },
                        },
                        back: {
                            style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            fn: function (k) {
                                return (k -= 1) * k * (5 * k + 4) + 1;
                            },
                        },
                        bounce: {
                            style: "",
                            fn: function (k) {
                                return (k /= 1) < 1 / 2.75 ? 7.5625 * k * k : k < 2 / 2.75 ? 7.5625 * (k -= 1.5 / 2.75) * k + 0.75 : k < 2.5 / 2.75 ? 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375 : 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
                            },
                        },
                        elastic: {
                            style: "",
                            fn: function (k) {
                                return 0 === k ? 0 : 1 == k ? 1 : 0.4 * Math.pow(2, -10 * k) * Math.sin(((k - 0.055) * (2 * Math.PI)) / 0.22) + 1;
                            },
                        },
                    }),
                    (me.tap = function (e, eventName) {
                        var ev = document.createEvent("Event");
                        ev.initEvent(eventName, !0, !0), (ev.pageX = e.pageX), (ev.pageY = e.pageY), e.target.dispatchEvent(ev);
                    }),
                    (me.click = function (e) {
                        var ev,
                            target = e.target;
                        /(SELECT|INPUT|TEXTAREA)/i.test(target.tagName) ||
                            ((ev = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0),
                            (ev.view = e.view || window),
                            (ev.detail = 1),
                            (ev.screenX = target.screenX || 0),
                            (ev.screenY = target.screenY || 0),
                            (ev.clientX = target.clientX || 0),
                            (ev.clientY = target.clientY || 0),
                            (ev.ctrlKey = !!e.ctrlKey),
                            (ev.altKey = !!e.altKey),
                            (ev.shiftKey = !!e.shiftKey),
                            (ev.metaKey = !!e.metaKey),
                            (ev.button = 0),
                            (ev.relatedTarget = null),
                            (ev._constructed = !0),
                            target.dispatchEvent(ev));
                    }),
                    (me.getTouchAction = function (eventPassthrough, addPinch) {
                        var touchAction = "none";
                        return "vertical" === eventPassthrough ? (touchAction = "pan-y") : "horizontal" === eventPassthrough && (touchAction = "pan-x"), addPinch && "none" != touchAction && (touchAction += " pinch-zoom"), touchAction;
                    }),
                    (me.getRect = function (el) {
                        if (el instanceof SVGElement) {
                            var rect = el.getBoundingClientRect();
                            return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
                        }
                        return { top: el.offsetTop, left: el.offsetLeft, width: el.offsetWidth, height: el.offsetHeight };
                    }),
                    me
                );
            })();
        function IScroll(el, options) {
            for (var i in ((this.wrapper = "string" == typeof el ? document.querySelector(el) : el),
            (this.scroller = this.wrapper.children[0]),
            (this.scrollerStyle = this.scroller.style),
            (this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: 0.334,
                disablePointer: !utils.hasPointer,
                disableTouch: utils.hasPointer || !utils.hasTouch,
                disableMouse: utils.hasPointer || utils.hasTouch,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: void 0 === window.onmousedown,
            }),
            options))
                this.options[i] = options[i];
            (this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : ""),
                (this.options.useTransition = utils.hasTransition && this.options.useTransition),
                (this.options.useTransform = utils.hasTransform && this.options.useTransform),
                (this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough),
                (this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault),
                (this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY),
                (this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX),
                (this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough),
                (this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold),
                (this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing),
                (this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling),
                !0 === this.options.tap && (this.options.tap = "tap"),
                this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
                "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
                (this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1),
                3 == this.options.probeType && (this.options.useTransition = !1),
                (this.x = 0),
                (this.y = 0),
                (this.directionX = 0),
                (this.directionY = 0),
                (this._events = {}),
                this._init(),
                this.refresh(),
                this.scrollTo(this.options.startX, this.options.startY),
                this.enable();
        }
        function createDefaultScrollbar(direction, interactive, type) {
            var scrollbar = document.createElement("div"),
                indicator = document.createElement("div");
            return (
                !0 === type &&
                    ((scrollbar.style.cssText = "position:absolute;z-index:9999"),
                    (indicator.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
                (indicator.className = "iScrollIndicator"),
                "h" == direction
                    ? (!0 === type && ((scrollbar.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"), (indicator.style.height = "100%")), (scrollbar.className = "iScrollHorizontalScrollbar"))
                    : (!0 === type && ((scrollbar.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"), (indicator.style.width = "100%")), (scrollbar.className = "iScrollVerticalScrollbar")),
                (scrollbar.style.cssText += ";overflow:hidden"),
                interactive || (scrollbar.style.pointerEvents = "none"),
                scrollbar.appendChild(indicator),
                scrollbar
            );
        }
        function Indicator(scroller, options) {
            for (var i in ((this.wrapper = "string" == typeof options.el ? document.querySelector(options.el) : options.el),
            (this.wrapperStyle = this.wrapper.style),
            (this.indicator = this.wrapper.children[0]),
            (this.indicatorStyle = this.indicator.style),
            (this.scroller = scroller),
            (this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 }),
            options))
                this.options[i] = options[i];
            if (
                ((this.sizeRatioX = 1),
                (this.sizeRatioY = 1),
                (this.maxPosX = 0),
                (this.maxPosY = 0),
                this.options.interactive &&
                    (this.options.disableTouch || (utils.addEvent(this.indicator, "touchstart", this), utils.addEvent(window, "touchend", this)),
                    this.options.disablePointer || (utils.addEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this), utils.addEvent(window, utils.prefixPointerEvent("pointerup"), this)),
                    this.options.disableMouse || (utils.addEvent(this.indicator, "mousedown", this), utils.addEvent(window, "mouseup", this))),
                this.options.fade)
            ) {
                this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
                var durationProp = utils.style.transitionDuration;
                if (!durationProp) return;
                this.wrapperStyle[durationProp] = utils.isBadAndroid ? "0.0001ms" : "0ms";
                var self = this;
                utils.isBadAndroid &&
                    rAF(function () {
                        "0.0001ms" === self.wrapperStyle[durationProp] && (self.wrapperStyle[durationProp] = "0s");
                    }),
                    (this.wrapperStyle.opacity = "0");
            }
        }
        (IScroll.prototype = {
            version: "5.2.0-snapshot",
            _init: function () {
                this._initEvents(),
                    (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
                    this.options.mouseWheel && this._initWheel(),
                    this.options.snap && this._initSnap(),
                    this.options.keyBindings && this._initKeys();
            },
            destroy: function () {
                this._initEvents(!0), clearTimeout(this.resizeTimeout), (this.resizeTimeout = null), this._execEvent("destroy");
            },
            _transitionEnd: function (e) {
                e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || ((this.isInTransition = !1), this._execEvent("scrollEnd")));
            },
            _start: function (e) {
                if (1 != utils.eventType[e.type] && 0 !== (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2)) return;
                if (this.enabled && (!this.initiated || utils.eventType[e.type] === this.initiated)) {
                    !this.options.preventDefault || utils.isBadAndroid || utils.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                    var pos,
                        point = e.touches ? e.touches[0] : e;
                    (this.initiated = utils.eventType[e.type]),
                        (this.moved = !1),
                        (this.distX = 0),
                        (this.distY = 0),
                        (this.directionX = 0),
                        (this.directionY = 0),
                        (this.directionLocked = 0),
                        (this.startTime = utils.getTime()),
                        this.options.useTransition && this.isInTransition
                            ? (this._transitionTime(), (this.isInTransition = !1), (pos = this.getComputedPosition()), this._translate(Math.round(pos.x), Math.round(pos.y)), this._execEvent("scrollEnd"))
                            : !this.options.useTransition && this.isAnimating && ((this.isAnimating = !1), this._execEvent("scrollEnd")),
                        (this.startX = this.x),
                        (this.startY = this.y),
                        (this.absStartX = this.x),
                        (this.absStartY = this.y),
                        (this.pointX = point.pageX),
                        (this.pointY = point.pageY),
                        this._execEvent("beforeScrollStart");
                }
            },
            _move: function (e) {
                if (this.enabled && utils.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && e.preventDefault();
                    var newX,
                        newY,
                        absDistX,
                        absDistY,
                        point = e.touches ? e.touches[0] : e,
                        deltaX = point.pageX - this.pointX,
                        deltaY = point.pageY - this.pointY,
                        timestamp = utils.getTime();
                    if (
                        ((this.pointX = point.pageX),
                        (this.pointY = point.pageY),
                        (this.distX += deltaX),
                        (this.distY += deltaY),
                        (absDistX = Math.abs(this.distX)),
                        (absDistY = Math.abs(this.distY)),
                        !(timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10))
                    ) {
                        if (
                            (this.directionLocked ||
                                this.options.freeScroll ||
                                (absDistX > absDistY + this.options.directionLockThreshold
                                    ? (this.directionLocked = "h")
                                    : absDistY >= absDistX + this.options.directionLockThreshold
                                    ? (this.directionLocked = "v")
                                    : (this.directionLocked = "n")),
                            "h" == this.directionLocked)
                        ) {
                            if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
                            deltaY = 0;
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
                            deltaX = 0;
                        }
                        (deltaX = this.hasHorizontalScroll ? deltaX : 0),
                            (deltaY = this.hasVerticalScroll ? deltaY : 0),
                            (newX = this.x + deltaX),
                            (newY = this.y + deltaY),
                            (newX > 0 || newX < this.maxScrollX) && (newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX),
                            (newY > 0 || newY < this.maxScrollY) && (newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY),
                            (this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0),
                            (this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0),
                            this.moved || this._execEvent("scrollStart"),
                            (this.moved = !0),
                            this._translate(newX, newY),
                            timestamp - this.startTime > 300 && ((this.startTime = timestamp), (this.startX = this.x), (this.startY = this.y), 1 == this.options.probeType && this._execEvent("scroll")),
                            this.options.probeType > 1 && this._execEvent("scroll");
                    }
                }
            },
            _end: function (e) {
                if (this.enabled && utils.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                    e.changedTouches && e.changedTouches[0];
                    var momentumX,
                        momentumY,
                        duration = utils.getTime() - this.startTime,
                        newX = Math.round(this.x),
                        newY = Math.round(this.y),
                        distanceX = Math.abs(newX - this.startX),
                        distanceY = Math.abs(newY - this.startY),
                        time = 0,
                        easing = "";
                    if (((this.isInTransition = 0), (this.initiated = 0), (this.endTime = utils.getTime()), !this.resetPosition(this.options.bounceTime))) {
                        if ((this.scrollTo(newX, newY), !this.moved)) return this.options.tap && utils.tap(e, this.options.tap), this.options.click && utils.click(e), void this._execEvent("scrollCancel");
                        if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) this._execEvent("flick");
                        else {
                            if (
                                (this.options.momentum &&
                                    duration < 300 &&
                                    ((momentumX = this.hasHorizontalScroll
                                        ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration)
                                        : { destination: newX, duration: 0 }),
                                    (momentumY = this.hasVerticalScroll
                                        ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration)
                                        : { destination: newY, duration: 0 }),
                                    (newX = momentumX.destination),
                                    (newY = momentumY.destination),
                                    (time = Math.max(momentumX.duration, momentumY.duration)),
                                    (this.isInTransition = 1)),
                                this.options.snap)
                            ) {
                                var snap = this._nearestSnap(newX, newY);
                                (this.currentPage = snap),
                                    (time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1e3), Math.min(Math.abs(newY - snap.y), 1e3)), 300)),
                                    (newX = snap.x),
                                    (newY = snap.y),
                                    (this.directionX = 0),
                                    (this.directionY = 0),
                                    (easing = this.options.bounceEasing);
                            }
                            if (newX != this.x || newY != this.y) return (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) && (easing = utils.ease.quadratic), void this.scrollTo(newX, newY, time, easing);
                            this._execEvent("scrollEnd");
                        }
                    }
                }
            },
            _resize: function () {
                var that = this;
                clearTimeout(this.resizeTimeout),
                    (this.resizeTimeout = setTimeout(function () {
                        that.refresh();
                    }, this.options.resizePolling));
            },
            resetPosition: function (time) {
                var x = this.x,
                    y = this.y;
                return (
                    (time = time || 0),
                    !this.hasHorizontalScroll || this.x > 0 ? (x = 0) : this.x < this.maxScrollX && (x = this.maxScrollX),
                    !this.hasVerticalScroll || this.y > 0 ? (y = 0) : this.y < this.maxScrollY && (y = this.maxScrollY),
                    (x != this.x || y != this.y) && (this.scrollTo(x, y, time, this.options.bounceEasing), !0)
                );
            },
            disable: function () {
                this.enabled = !1;
            },
            enable: function () {
                this.enabled = !0;
            },
            refresh: function () {
                utils.getRect(this.wrapper), (this.wrapperWidth = this.wrapper.clientWidth), (this.wrapperHeight = this.wrapper.clientHeight);
                var rect = utils.getRect(this.scroller);
                (this.scrollerWidth = rect.width),
                    (this.scrollerHeight = rect.height),
                    (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
                    (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
                    (this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0),
                    (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
                    this.hasHorizontalScroll || ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
                    this.hasVerticalScroll || ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
                    (this.endTime = 0),
                    (this.directionX = 0),
                    (this.directionY = 0),
                    utils.hasPointer &&
                        !this.options.disablePointer &&
                        ((this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, !0)),
                        this.wrapper.style[utils.style.touchAction] || (this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, !1))),
                    (this.wrapperOffset = utils.offset(this.wrapper)),
                    this._execEvent("refresh"),
                    this.resetPosition();
            },
            on: function (type, fn) {
                this._events[type] || (this._events[type] = []), this._events[type].push(fn);
            },
            off: function (type, fn) {
                if (this._events[type]) {
                    var index = this._events[type].indexOf(fn);
                    index > -1 && this._events[type].splice(index, 1);
                }
            },
            _execEvent: function (type) {
                if (this._events[type]) {
                    var i = 0,
                        l = this._events[type].length;
                    if (l) for (; i < l; i++) this._events[type][i].apply(this, [].slice.call(arguments, 1));
                }
            },
            scrollBy: function (x, y, time, easing) {
                (x = this.x + x), (y = this.y + y), (time = time || 0), this.scrollTo(x, y, time, easing);
            },
            scrollTo: function (x, y, time, easing) {
                (easing = easing || utils.ease.circular), (this.isInTransition = this.options.useTransition && time > 0);
                var transitionType = this.options.useTransition && easing.style;
                !time || transitionType ? (transitionType && (this._transitionTimingFunction(easing.style), this._transitionTime(time)), this._translate(x, y)) : this._animate(x, y, time, easing.fn);
            },
            scrollToElement: function (el, time, offsetX, offsetY, easing) {
                if ((el = el.nodeType ? el : this.scroller.querySelector(el))) {
                    var pos = utils.offset(el);
                    (pos.left -= this.wrapperOffset.left), (pos.top -= this.wrapperOffset.top);
                    var elRect = utils.getRect(el),
                        wrapperRect = utils.getRect(this.wrapper);
                    !0 === offsetX && (offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2)),
                        !0 === offsetY && (offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2)),
                        (pos.left -= offsetX || 0),
                        (pos.top -= offsetY || 0),
                        (pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left),
                        (pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top),
                        (time = void 0 === time || null === time || "auto" === time ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time),
                        this.scrollTo(pos.left, pos.top, time, easing);
                }
            },
            _transitionTime: function (time) {
                if (this.options.useTransition) {
                    time = time || 0;
                    var durationProp = utils.style.transitionDuration;
                    if (durationProp) {
                        if (((this.scrollerStyle[durationProp] = time + "ms"), !time && utils.isBadAndroid)) {
                            this.scrollerStyle[durationProp] = "0.0001ms";
                            var self = this;
                            rAF(function () {
                                "0.0001ms" === self.scrollerStyle[durationProp] && (self.scrollerStyle[durationProp] = "0s");
                            });
                        }
                        if (this.indicators) for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTime(time);
                    }
                }
            },
            _transitionTimingFunction: function (easing) {
                if (((this.scrollerStyle[utils.style.transitionTimingFunction] = easing), this.indicators)) for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTimingFunction(easing);
            },
            _translate: function (x, y) {
                if (
                    (this.options.useTransform
                        ? (this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ)
                        : ((x = Math.round(x)), (y = Math.round(y)), (this.scrollerStyle.left = x + "px"), (this.scrollerStyle.top = y + "px")),
                    (this.x = x),
                    (this.y = y),
                    this.indicators)
                )
                    for (var i = this.indicators.length; i--; ) this.indicators[i].updatePosition();
            },
            _initEvents: function (remove) {
                var eventType = remove ? utils.removeEvent : utils.addEvent,
                    target = this.options.bindToWrapper ? this.wrapper : window;
                eventType(window, "orientationchange", this),
                    eventType(window, "resize", this),
                    this.options.click && eventType(this.wrapper, "click", this, !0),
                    this.options.disableMouse || (eventType(this.wrapper, "mousedown", this), eventType(target, "mousemove", this), eventType(target, "mousecancel", this), eventType(target, "mouseup", this)),
                    utils.hasPointer &&
                        !this.options.disablePointer &&
                        (eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this),
                        eventType(target, utils.prefixPointerEvent("pointermove"), this),
                        eventType(target, utils.prefixPointerEvent("pointercancel"), this),
                        eventType(target, utils.prefixPointerEvent("pointerup"), this)),
                    utils.hasTouch && !this.options.disableTouch && (eventType(this.wrapper, "touchstart", this), eventType(target, "touchmove", this), eventType(target, "touchcancel", this), eventType(target, "touchend", this)),
                    eventType(this.scroller, "transitionend", this),
                    eventType(this.scroller, "webkitTransitionEnd", this),
                    eventType(this.scroller, "oTransitionEnd", this),
                    eventType(this.scroller, "MSTransitionEnd", this);
            },
            getComputedPosition: function () {
                var x,
                    y,
                    matrix = window.getComputedStyle(this.scroller, null);
                return (
                    this.options.useTransform
                        ? ((x = +((matrix = matrix[utils.style.transform].split(")")[0].split(", "))[12] || matrix[4])), (y = +(matrix[13] || matrix[5])))
                        : ((x = +matrix.left.replace(/[^-\d.]/g, "")), (y = +matrix.top.replace(/[^-\d.]/g, ""))),
                    { x: x, y: y }
                );
            },
            _initIndicators: function () {
                var indicator,
                    interactive = this.options.interactiveScrollbars,
                    customStyle = "string" != typeof this.options.scrollbars,
                    indicators = [],
                    that = this;
                (this.indicators = []),
                    this.options.scrollbars &&
                        (this.options.scrollY &&
                            ((indicator = {
                                el: createDefaultScrollbar("v", interactive, this.options.scrollbars),
                                interactive: interactive,
                                defaultScrollbars: !0,
                                customStyle: customStyle,
                                resize: this.options.resizeScrollbars,
                                shrink: this.options.shrinkScrollbars,
                                fade: this.options.fadeScrollbars,
                                listenX: !1,
                            }),
                            this.wrapper.appendChild(indicator.el),
                            indicators.push(indicator)),
                        this.options.scrollX &&
                            ((indicator = {
                                el: createDefaultScrollbar("h", interactive, this.options.scrollbars),
                                interactive: interactive,
                                defaultScrollbars: !0,
                                customStyle: customStyle,
                                resize: this.options.resizeScrollbars,
                                shrink: this.options.shrinkScrollbars,
                                fade: this.options.fadeScrollbars,
                                listenY: !1,
                            }),
                            this.wrapper.appendChild(indicator.el),
                            indicators.push(indicator))),
                    this.options.indicators && (indicators = indicators.concat(this.options.indicators));
                for (var i = indicators.length; i--; ) this.indicators.push(new Indicator(this, indicators[i]));
                function _indicatorsMap(fn) {
                    if (that.indicators) for (var i = that.indicators.length; i--; ) fn.call(that.indicators[i]);
                }
                this.options.fadeScrollbars &&
                    (this.on("scrollEnd", function () {
                        _indicatorsMap(function () {
                            this.fade();
                        });
                    }),
                    this.on("scrollCancel", function () {
                        _indicatorsMap(function () {
                            this.fade();
                        });
                    }),
                    this.on("scrollStart", function () {
                        _indicatorsMap(function () {
                            this.fade(1);
                        });
                    }),
                    this.on("beforeScrollStart", function () {
                        _indicatorsMap(function () {
                            this.fade(1, !0);
                        });
                    })),
                    this.on("refresh", function () {
                        _indicatorsMap(function () {
                            this.refresh();
                        });
                    }),
                    this.on("destroy", function () {
                        _indicatorsMap(function () {
                            this.destroy();
                        }),
                            delete this.indicators;
                    });
            },
            _initWheel: function () {
                utils.addEvent(this.wrapper, "wheel", this),
                    utils.addEvent(this.wrapper, "mousewheel", this),
                    utils.addEvent(this.wrapper, "DOMMouseScroll", this),
                    this.on("destroy", function () {
                        clearTimeout(this.wheelTimeout),
                            (this.wheelTimeout = null),
                            utils.removeEvent(this.wrapper, "wheel", this),
                            utils.removeEvent(this.wrapper, "mousewheel", this),
                            utils.removeEvent(this.wrapper, "DOMMouseScroll", this);
                    });
            },
            _wheel: function (e) {
                if (this.enabled) {
                    e.preventDefault();
                    var wheelDeltaX,
                        wheelDeltaY,
                        newX,
                        newY,
                        that = this;
                    if (
                        (void 0 === this.wheelTimeout && that._execEvent("scrollStart"),
                        clearTimeout(this.wheelTimeout),
                        (this.wheelTimeout = setTimeout(function () {
                            that.options.snap || that._execEvent("scrollEnd"), (that.wheelTimeout = void 0);
                        }, 400)),
                        "deltaX" in e)
                    )
                        1 === e.deltaMode ? ((wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed), (wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed)) : ((wheelDeltaX = -e.deltaX), (wheelDeltaY = -e.deltaY));
                    else if ("wheelDeltaX" in e) (wheelDeltaX = (e.wheelDeltaX / 120) * this.options.mouseWheelSpeed), (wheelDeltaY = (e.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
                    else if ("wheelDelta" in e) wheelDeltaX = wheelDeltaY = (e.wheelDelta / 120) * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in e)) return;
                        wheelDeltaX = wheelDeltaY = (-e.detail / 3) * this.options.mouseWheelSpeed;
                    }
                    if (((wheelDeltaX *= this.options.invertWheelDirection), (wheelDeltaY *= this.options.invertWheelDirection), this.hasVerticalScroll || ((wheelDeltaX = wheelDeltaY), (wheelDeltaY = 0)), this.options.snap))
                        return (newX = this.currentPage.pageX), (newY = this.currentPage.pageY), wheelDeltaX > 0 ? newX-- : wheelDeltaX < 0 && newX++, wheelDeltaY > 0 ? newY-- : wheelDeltaY < 0 && newY++, void this.goToPage(newX, newY);
                    (newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0)),
                        (newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0)),
                        (this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0),
                        (this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0),
                        newX > 0 ? (newX = 0) : newX < this.maxScrollX && (newX = this.maxScrollX),
                        newY > 0 ? (newY = 0) : newY < this.maxScrollY && (newY = this.maxScrollY),
                        this.scrollTo(newX, newY, 0),
                        this.options.probeType > 1 && this._execEvent("scroll");
                }
            },
            _initSnap: function () {
                (this.currentPage = {}),
                    "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
                    this.on("refresh", function () {
                        var l,
                            n,
                            cx,
                            cy,
                            y,
                            el,
                            rect,
                            i = 0,
                            m = 0,
                            x = 0,
                            stepX = this.options.snapStepX || this.wrapperWidth,
                            stepY = this.options.snapStepY || this.wrapperHeight;
                        if (((this.pages = []), this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight)) {
                            if (!0 === this.options.snap)
                                for (cx = Math.round(stepX / 2), cy = Math.round(stepY / 2); x > -this.scrollerWidth; ) {
                                    for (this.pages[i] = [], l = 0, y = 0; y > -this.scrollerHeight; )
                                        (this.pages[i][l] = { x: Math.max(x, this.maxScrollX), y: Math.max(y, this.maxScrollY), width: stepX, height: stepY, cx: x - cx, cy: y - cy }), (y -= stepY), l++;
                                    (x -= stepX), i++;
                                }
                            else
                                for (l = (el = this.options.snap).length, n = -1; i < l; i++)
                                    (rect = utils.getRect(el[i])),
                                        (0 === i || rect.left <= utils.getRect(el[i - 1]).left) && ((m = 0), n++),
                                        this.pages[m] || (this.pages[m] = []),
                                        (x = Math.max(-rect.left, this.maxScrollX)),
                                        (y = Math.max(-rect.top, this.maxScrollY)),
                                        (cx = x - Math.round(rect.width / 2)),
                                        (cy = y - Math.round(rect.height / 2)),
                                        (this.pages[m][n] = { x: x, y: y, width: rect.width, height: rect.height, cx: cx, cy: cy }),
                                        x > this.maxScrollX && m++;
                            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                                this.options.snapThreshold % 1 == 0
                                    ? ((this.snapThresholdX = this.options.snapThreshold), (this.snapThresholdY = this.options.snapThreshold))
                                    : ((this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold)),
                                      (this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)));
                        }
                    }),
                    this.on("flick", function () {
                        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1e3), Math.min(Math.abs(this.y - this.startY), 1e3)), 300);
                        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
                    });
            },
            _nearestSnap: function (x, y) {
                if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
                var i = 0,
                    l = this.pages.length,
                    m = 0;
                if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (x > 0 ? (x = 0) : x < this.maxScrollX && (x = this.maxScrollX), y > 0 ? (y = 0) : y < this.maxScrollY && (y = this.maxScrollY); i < l; i++)
                    if (x >= this.pages[i][0].cx) {
                        x = this.pages[i][0].x;
                        break;
                    }
                for (l = this.pages[i].length; m < l; m++)
                    if (y >= this.pages[0][m].cy) {
                        y = this.pages[0][m].y;
                        break;
                    }
                return (
                    i == this.currentPage.pageX && ((i += this.directionX) < 0 ? (i = 0) : i >= this.pages.length && (i = this.pages.length - 1), (x = this.pages[i][0].x)),
                    m == this.currentPage.pageY && ((m += this.directionY) < 0 ? (m = 0) : m >= this.pages[0].length && (m = this.pages[0].length - 1), (y = this.pages[0][m].y)),
                    { x: x, y: y, pageX: i, pageY: m }
                );
            },
            goToPage: function (x, y, time, easing) {
                (easing = easing || this.options.bounceEasing), x >= this.pages.length ? (x = this.pages.length - 1) : x < 0 && (x = 0), y >= this.pages[x].length ? (y = this.pages[x].length - 1) : y < 0 && (y = 0);
                var posX = this.pages[x][y].x,
                    posY = this.pages[x][y].y;
                (time = void 0 === time ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1e3), Math.min(Math.abs(posY - this.y), 1e3)), 300) : time),
                    (this.currentPage = { x: posX, y: posY, pageX: x, pageY: y }),
                    this.scrollTo(posX, posY, time, easing);
            },
            next: function (time, easing) {
                var x = this.currentPage.pageX,
                    y = this.currentPage.pageY;
                ++x >= this.pages.length && this.hasVerticalScroll && ((x = 0), y++), this.goToPage(x, y, time, easing);
            },
            prev: function (time, easing) {
                var x = this.currentPage.pageX,
                    y = this.currentPage.pageY;
                --x < 0 && this.hasVerticalScroll && ((x = 0), y--), this.goToPage(x, y, time, easing);
            },
            _initKeys: function (e) {
                var i,
                    keys = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
                if ("object" == typeof this.options.keyBindings) for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {};
                for (i in keys) this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
                utils.addEvent(window, "keydown", this),
                    this.on("destroy", function () {
                        utils.removeEvent(window, "keydown", this);
                    });
            },
            _key: function (e) {
                if (this.enabled) {
                    var pos,
                        snap = this.options.snap,
                        newX = snap ? this.currentPage.pageX : this.x,
                        newY = snap ? this.currentPage.pageY : this.y,
                        now = utils.getTime(),
                        prevTime = this.keyTime || 0;
                    switch (
                        (this.options.useTransition && this.isInTransition && ((pos = this.getComputedPosition()), this._translate(Math.round(pos.x), Math.round(pos.y)), (this.isInTransition = !1)),
                        (this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + 0.25, 50) : 0),
                        e.keyCode)
                    ) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? (newX += snap ? 1 : this.wrapperWidth) : (newY += snap ? 1 : this.wrapperHeight);
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? (newX -= snap ? 1 : this.wrapperWidth) : (newY -= snap ? 1 : this.wrapperHeight);
                            break;
                        case this.options.keyBindings.end:
                            (newX = snap ? this.pages.length - 1 : this.maxScrollX), (newY = snap ? this.pages[0].length - 1 : this.maxScrollY);
                            break;
                        case this.options.keyBindings.home:
                            (newX = 0), (newY = 0);
                            break;
                        case this.options.keyBindings.left:
                            newX += snap ? -1 : (5 + this.keyAcceleration) >> 0;
                            break;
                        case this.options.keyBindings.up:
                            newY += snap ? 1 : (5 + this.keyAcceleration) >> 0;
                            break;
                        case this.options.keyBindings.right:
                            newX -= snap ? -1 : (5 + this.keyAcceleration) >> 0;
                            break;
                        case this.options.keyBindings.down:
                            newY -= snap ? 1 : (5 + this.keyAcceleration) >> 0;
                            break;
                        default:
                            return;
                    }
                    snap
                        ? this.goToPage(newX, newY)
                        : (newX > 0 ? ((newX = 0), (this.keyAcceleration = 0)) : newX < this.maxScrollX && ((newX = this.maxScrollX), (this.keyAcceleration = 0)),
                          newY > 0 ? ((newY = 0), (this.keyAcceleration = 0)) : newY < this.maxScrollY && ((newY = this.maxScrollY), (this.keyAcceleration = 0)),
                          this.scrollTo(newX, newY, 0),
                          (this.keyTime = now));
                }
            },
            _animate: function (destX, destY, duration, easingFn) {
                var that = this,
                    startX = this.x,
                    startY = this.y,
                    startTime = utils.getTime(),
                    destTime = startTime + duration;
                (this.isAnimating = !0),
                    (function step() {
                        var newX,
                            newY,
                            easing,
                            now = utils.getTime();
                        if (now >= destTime) return (that.isAnimating = !1), that._translate(destX, destY), void (that.resetPosition(that.options.bounceTime) || that._execEvent("scrollEnd"));
                        (easing = easingFn((now = (now - startTime) / duration))),
                            (newX = (destX - startX) * easing + startX),
                            (newY = (destY - startY) * easing + startY),
                            that._translate(newX, newY),
                            that.isAnimating && rAF(step),
                            3 == that.options.probeType && that._execEvent("scroll");
                    })();
            },
            handleEvent: function (e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(e);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(e);
                        break;
                    case "keydown":
                        this._key(e);
                        break;
                    case "click":
                        this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation());
                }
            },
        }),
            (Indicator.prototype = {
                handleEvent: function (e) {
                    switch (e.type) {
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                        case "mousedown":
                            this._start(e);
                            break;
                        case "touchmove":
                        case "pointermove":
                        case "MSPointerMove":
                        case "mousemove":
                            this._move(e);
                            break;
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseup":
                        case "touchcancel":
                        case "pointercancel":
                        case "MSPointerCancel":
                        case "mousecancel":
                            this._end(e);
                    }
                },
                destroy: function () {
                    this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
                        this.options.interactive &&
                            (utils.removeEvent(this.indicator, "touchstart", this),
                            utils.removeEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this),
                            utils.removeEvent(this.indicator, "mousedown", this),
                            utils.removeEvent(window, "touchmove", this),
                            utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this),
                            utils.removeEvent(window, "mousemove", this),
                            utils.removeEvent(window, "touchend", this),
                            utils.removeEvent(window, utils.prefixPointerEvent("pointerup"), this),
                            utils.removeEvent(window, "mouseup", this)),
                        this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper);
                },
                _start: function (e) {
                    var point = e.touches ? e.touches[0] : e;
                    e.preventDefault(),
                        e.stopPropagation(),
                        this.transitionTime(),
                        (this.initiated = !0),
                        (this.moved = !1),
                        (this.lastPointX = point.pageX),
                        (this.lastPointY = point.pageY),
                        (this.startTime = utils.getTime()),
                        this.options.disableTouch || utils.addEvent(window, "touchmove", this),
                        this.options.disablePointer || utils.addEvent(window, utils.prefixPointerEvent("pointermove"), this),
                        this.options.disableMouse || utils.addEvent(window, "mousemove", this),
                        this.scroller._execEvent("beforeScrollStart");
                },
                _move: function (e) {
                    var deltaX,
                        deltaY,
                        newX,
                        newY,
                        point = e.touches ? e.touches[0] : e,
                        timestamp = utils.getTime();
                    this.moved || this.scroller._execEvent("scrollStart"),
                        (this.moved = !0),
                        (deltaX = point.pageX - this.lastPointX),
                        (this.lastPointX = point.pageX),
                        (deltaY = point.pageY - this.lastPointY),
                        (this.lastPointY = point.pageY),
                        (newX = this.x + deltaX),
                        (newY = this.y + deltaY),
                        this._pos(newX, newY),
                        1 == this.scroller.options.probeType && timestamp - this.startTime > 300
                            ? ((this.startTime = timestamp), this.scroller._execEvent("scroll"))
                            : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"),
                        e.preventDefault(),
                        e.stopPropagation();
                },
                _end: function (e) {
                    if (this.initiated) {
                        if (
                            ((this.initiated = !1),
                            e.preventDefault(),
                            e.stopPropagation(),
                            utils.removeEvent(window, "touchmove", this),
                            utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this),
                            utils.removeEvent(window, "mousemove", this),
                            this.scroller.options.snap)
                        ) {
                            var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                                time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1e3), Math.min(Math.abs(this.scroller.y - snap.y), 1e3)), 300);
                            (this.scroller.x == snap.x && this.scroller.y == snap.y) ||
                                ((this.scroller.directionX = 0), (this.scroller.directionY = 0), (this.scroller.currentPage = snap), this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing));
                        }
                        this.moved && this.scroller._execEvent("scrollEnd");
                    }
                },
                transitionTime: function (time) {
                    time = time || 0;
                    var durationProp = utils.style.transitionDuration;
                    if (durationProp && ((this.indicatorStyle[durationProp] = time + "ms"), !time && utils.isBadAndroid)) {
                        this.indicatorStyle[durationProp] = "0.0001ms";
                        var self = this;
                        rAF(function () {
                            "0.0001ms" === self.indicatorStyle[durationProp] && (self.indicatorStyle[durationProp] = "0s");
                        });
                    }
                },
                transitionTimingFunction: function (easing) {
                    this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
                },
                refresh: function () {
                    this.transitionTime(),
                        this.options.listenX && !this.options.listenY
                            ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none")
                            : this.options.listenY && !this.options.listenX
                            ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none")
                            : (this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"),
                        this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
                            ? (utils.addClass(this.wrapper, "iScrollBothScrollbars"),
                              utils.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                              this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? (this.wrapper.style.right = "8px") : (this.wrapper.style.bottom = "8px")))
                            : (utils.removeClass(this.wrapper, "iScrollBothScrollbars"),
                              utils.addClass(this.wrapper, "iScrollLoneScrollbar"),
                              this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? (this.wrapper.style.right = "2px") : (this.wrapper.style.bottom = "2px"))),
                        utils.getRect(this.wrapper),
                        this.options.listenX &&
                            ((this.wrapperWidth = this.wrapper.clientWidth),
                            this.options.resize
                                ? ((this.indicatorWidth = Math.max(Math.round((this.wrapperWidth * this.wrapperWidth) / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8)), (this.indicatorStyle.width = this.indicatorWidth + "px"))
                                : (this.indicatorWidth = this.indicator.clientWidth),
                            (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
                            "clip" == this.options.shrink ? ((this.minBoundaryX = 8 - this.indicatorWidth), (this.maxBoundaryX = this.wrapperWidth - 8)) : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
                            (this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX))),
                        this.options.listenY &&
                            ((this.wrapperHeight = this.wrapper.clientHeight),
                            this.options.resize
                                ? ((this.indicatorHeight = Math.max(Math.round((this.wrapperHeight * this.wrapperHeight) / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8)),
                                  (this.indicatorStyle.height = this.indicatorHeight + "px"))
                                : (this.indicatorHeight = this.indicator.clientHeight),
                            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                            "clip" == this.options.shrink ? ((this.minBoundaryY = 8 - this.indicatorHeight), (this.maxBoundaryY = this.wrapperHeight - 8)) : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
                            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                            (this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY))),
                        this.updatePosition();
                },
                updatePosition: function () {
                    var x = (this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x)) || 0,
                        y = (this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y)) || 0;
                    this.options.ignoreBoundaries ||
                        (x < this.minBoundaryX
                            ? ("scale" == this.options.shrink && ((this.width = Math.max(this.indicatorWidth + x, 8)), (this.indicatorStyle.width = this.width + "px")), (x = this.minBoundaryX))
                            : x > this.maxBoundaryX
                            ? "scale" == this.options.shrink
                                ? ((this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8)), (this.indicatorStyle.width = this.width + "px"), (x = this.maxPosX + this.indicatorWidth - this.width))
                                : (x = this.maxBoundaryX)
                            : "scale" == this.options.shrink && this.width != this.indicatorWidth && ((this.width = this.indicatorWidth), (this.indicatorStyle.width = this.width + "px")),
                        y < this.minBoundaryY
                            ? ("scale" == this.options.shrink && ((this.height = Math.max(this.indicatorHeight + 3 * y, 8)), (this.indicatorStyle.height = this.height + "px")), (y = this.minBoundaryY))
                            : y > this.maxBoundaryY
                            ? "scale" == this.options.shrink
                                ? ((this.height = Math.max(this.indicatorHeight - 3 * (y - this.maxPosY), 8)), (this.indicatorStyle.height = this.height + "px"), (y = this.maxPosY + this.indicatorHeight - this.height))
                                : (y = this.maxBoundaryY)
                            : "scale" == this.options.shrink && this.height != this.indicatorHeight && ((this.height = this.indicatorHeight), (this.indicatorStyle.height = this.height + "px"))),
                        (this.x = x),
                        (this.y = y),
                        this.scroller.options.useTransform
                            ? (this.indicatorStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.scroller.translateZ)
                            : ((this.indicatorStyle.left = x + "px"), (this.indicatorStyle.top = y + "px"));
                },
                _pos: function (x, y) {
                    x < 0 ? (x = 0) : x > this.maxPosX && (x = this.maxPosX),
                        y < 0 ? (y = 0) : y > this.maxPosY && (y = this.maxPosY),
                        (x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x),
                        (y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y),
                        this.scroller.scrollTo(x, y);
                },
                fade: function (val, hold) {
                    if (!hold || this.visible) {
                        clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
                        var time = val ? 250 : 500,
                            delay = val ? 0 : 300;
                        (val = val ? "1" : "0"),
                            (this.wrapperStyle[utils.style.transitionDuration] = time + "ms"),
                            (this.fadeTimeout = setTimeout(
                                function (val) {
                                    (this.wrapperStyle.opacity = val), (this.visible = +val);
                                }.bind(this, val),
                                delay
                            ));
                    }
                },
            }),
            (IScroll.utils = utils),
            "undefined" != typeof module && module.exports
                ? (module.exports = IScroll)
                : "function" == typeof define && define.amd
                ? define(function () {
                      return IScroll;
                  })
                : (window.IScroll = IScroll),
            "undefined" != typeof module && module.exports
                ? (module.exports = IScroll)
                : "function" == typeof define && define.amd
                ? (define(function () {
                      return IScroll;
                  }),
                  void 0 !== window && (window.IScroll = IScroll))
                : (window.IScroll = IScroll);
    })(window, document, Math),
    (function (window, document) {
        window.fp_scrolloverflow = (function () {
            window.IScroll || (window.IScroll = module.exports);
            var SECTION_SEL = ".fp-section",
                SECTION_ACTIVE_SEL = SECTION_SEL + ".active",
                SLIDE_SEL = ".fp-slide",
                SLIDE_ACTIVE_SEL = SLIDE_SEL + ".active",
                TABLE_CELL_SEL = ".fp-tableCell",
                RESPONSIVE = "fp-responsive",
                AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";
            function scrollBarHandler() {
                var self = this;
                function createScrollBarForAll() {
                    var scrollOverflowHandler;
                    fp_utils.hasClass(document.body, RESPONSIVE)
                        ? ((scrollOverflowHandler = self.options.scrollOverflowHandler),
                          forEachSectionAndSlide(function (element) {
                              fp_utils.hasClass(fp_utils.closest(element, SECTION_SEL), AUTO_HEIGHT_RESPONSIVE) && scrollOverflowHandler.remove(element);
                          }))
                        : forEachSectionAndSlide(createScrollBar);
                }
                function createScrollBar(element) {
                    if (!fp_utils.hasClass(element, "fp-noscroll")) {
                        fp_utils.css(element, { overflow: "hidden" });
                        var contentHeight,
                            scrollOverflowHandler = self.options.scrollOverflowHandler,
                            wrap = scrollOverflowHandler.wrapContent(),
                            section = fp_utils.closest(element, SECTION_SEL),
                            scrollable = scrollOverflowHandler.scrollable(element),
                            paddings = (function (element) {
                                var section = fp_utils.closest(element, SECTION_SEL);
                                return null != section ? parseInt(getComputedStyle(section)["padding-bottom"]) + parseInt(getComputedStyle(section)["padding-top"]) : 0;
                            })(section);
                        null != scrollable
                            ? (contentHeight = scrollOverflowHandler.scrollHeight(element))
                            : ((contentHeight = element.scrollHeight), self.options.verticalCentered && (contentHeight = $(TABLE_CELL_SEL, element)[0].scrollHeight));
                        var scrollHeight = fp_utils.getWindowHeight(),
                            scrollHeightWidthoutPaddings = scrollHeight - paddings;
                        contentHeight + paddings > scrollHeight
                            ? null != scrollable
                                ? scrollOverflowHandler.update(element, scrollHeightWidthoutPaddings)
                                : (self.options.verticalCentered
                                      ? (fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scroller), fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scrollable))
                                      : (fp_utils.wrapInner(element, wrap.scroller), fp_utils.wrapInner(element, wrap.scrollable)),
                                  scrollOverflowHandler.create(element, scrollHeightWidthoutPaddings, self.iscrollOptions))
                            : scrollOverflowHandler.remove(element),
                            fp_utils.css(element, { overflow: "" });
                    }
                }
                function forEachSectionAndSlide(callback) {
                    $(SECTION_SEL).forEach(function (section) {
                        var slides = $(SLIDE_SEL, section);
                        slides.length
                            ? slides.forEach(function (slide) {
                                  callback(slide);
                              })
                            : callback(section);
                    });
                }
                (self.options = null),
                    (self.init = function (options, iscrollOptions) {
                        return (
                            (self.options = options),
                            (self.iscrollOptions = iscrollOptions),
                            "complete" === document.readyState && (createScrollBarForAll(), fullpage_api.shared.afterRenderActions()),
                            window.addEventListener("load", function () {
                                createScrollBarForAll(), fullpage_api.shared.afterRenderActions();
                            }),
                            self
                        );
                    }),
                    (self.createScrollBarForAll = createScrollBarForAll),
                    (self.createScrollBar = createScrollBar);
            }
            (IScroll.prototype.wheelOn = function () {
                this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this);
            }),
                (IScroll.prototype.wheelOff = function () {
                    this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this);
                });
            var $ = null,
                g_fullpageOptions = null,
                iscrollHandler = {
                    refreshId: null,
                    iScrollInstances: [],
                    lastScrollY: null,
                    hasBeenInit: !1,
                    iscrollOptions: { scrollbars: !0, mouseWheel: !0, hideScrollbars: !1, fadeScrollbars: !1, disableMouse: !0, interactiveScrollbars: !0 },
                    init: function (options) {
                        ($ = fp_utils.$), (g_fullpageOptions = options);
                        var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
                        return (
                            (iscrollHandler.iscrollOptions.click = isTouch),
                            (iscrollHandler.hasBeenInit = !0),
                            (iscrollHandler.iscrollOptions = fp_utils.deepExtend(iscrollHandler.iscrollOptions, options.scrollOverflowOptions)),
                            new scrollBarHandler().init(options, iscrollHandler.iscrollOptions)
                        );
                    },
                    toggleWheel: function (value) {
                        $(".fp-scrollable", $(SECTION_ACTIVE_SEL)[0]).forEach(function (item) {
                            var iScrollInstance = item.fp_iscrollInstance;
                            null != iScrollInstance && (value ? iScrollInstance.wheelOn() : iScrollInstance.wheelOff());
                        });
                    },
                    setIscroll: function (target, enable) {
                        if (iscrollHandler.hasBeenInit) {
                                var scrollable = fp_utils.closest(target, ".fp-scrollable");

                               var action = enable ? "enable" : "disable";
                            scrollable && scrollable.fp_iscrollInstance[action]();
                        }
                    },
                    onLeave: function () {
                        iscrollHandler.toggleWheel(!1);
                    },
                    beforeLeave: function () {
                        iscrollHandler.onLeave();
                    },
                    afterLoad: function () {
                        iscrollHandler.toggleWheel(!0);
                    },
                    create: function (element, scrollHeight, iscrollOptions) {
                        $(".fp-scrollable", element).forEach(function (item) {
                            fp_utils.css(item, { height: scrollHeight + "px" });
                            var iScrollInstance = item.fp_iscrollInstance;
                            null != iScrollInstance &&
                                iscrollHandler.iScrollInstances.forEach(function (instance) {
                                    instance.destroy();
                                }),
                                (iScrollInstance = new IScroll(item, iscrollOptions)),
                                iscrollHandler.iScrollInstances.push(iScrollInstance),
                                fp_utils.hasClass(fp_utils.closest(element, SECTION_SEL), "active") || iScrollInstance.wheelOff(),
                                (item.fp_iscrollInstance = iScrollInstance);
                        });
                    },
                    isScrolled: function (type, scrollable) {
                        var scroller = scrollable.fp_iscrollInstance;
                        return (
                            !scroller ||
                            ("top" === type ? scroller.y >= 0 && !fp_utils.getScrollTop(scrollable) : "bottom" === type ? 0 - scroller.y + fp_utils.getScrollTop(scrollable) + scrollable.offsetHeight >= scrollable.scrollHeight : void 0)
                        );
                    },
                    scrollable: function (activeSection) {
                        return $(".fp-slides", activeSection).length ? $(".fp-scrollable", $(SLIDE_ACTIVE_SEL, activeSection)[0])[0] : $(".fp-scrollable", activeSection)[0];
                    },
                    scrollHeight: function (element) {
                        return $(".fp-scroller", $(".fp-scrollable", element)[0])[0].scrollHeight;
                    },
                    remove: function (element) {
                        if (null != element) {
                            var scrollable = $(".fp-scrollable", element)[0];
                            if (null != scrollable) {
                                var iScrollInstance = scrollable.fp_iscrollInstance;
                                null != iScrollInstance && iScrollInstance.destroy(), (scrollable.fp_iscrollInstance = null), fp_utils.unwrap($(".fp-scroller", element)[0]), fp_utils.unwrap($(".fp-scrollable", element)[0]);
                            }
                        }
                    },
                    update: function (element, scrollHeight) {
                        clearTimeout(iscrollHandler.refreshId),
                            (iscrollHandler.refreshId = setTimeout(function () {
                                iscrollHandler.iScrollInstances.forEach(function (instance) {
                                    instance.refresh(), fullpage_api.silentMoveTo(fp_utils.index($(SECTION_ACTIVE_SEL)[0]) + 1);
                                });
                            }, 150)),
                            fp_utils.css($(".fp-scrollable", element)[0], { height: scrollHeight + "px" }),
                            g_fullpageOptions.verticalCentered && fp_utils.css($(".fp-scrollable", element)[0].parentNode, { height: scrollHeight + "px" });
                    },
                    wrapContent: function () {
                        var scrollable = document.createElement("div");
                        scrollable.className = "fp-scrollable";
                        var scroller = document.createElement("div");
                        return (scroller.className = "fp-scroller"), { scrollable: scrollable, scroller: scroller };
                    },
                };
            return { iscrollHandler: iscrollHandler };
        })();
    })(window, document);
var _0x3e39 = [
    "applyProperties",
    "afterLoad",
    "charAt",
    "complete",
    "readyState",
    "load",
    "fp_parallaxExtension",
    "internals",
    "active",
    "fp-section",
    "fp-slide",
    "fp-notransition",
    ".fp-bg",
    "cover",
    "fp-parallax-stylesheet",
    "fp-parallax-transitions",
    "fp-parallax-transition-class",
    "parallax",
    "closest",
    "addClass",
    "hasClass",
    "css",
    "prevAll",
    "fp-fixed",
    "documentElement",
    "clientWidth",
    "getElementsByTagName",
    "body",
    "length",
    "forEach",
    "offsetNormal",
    "silent",
    "detail",
    "scrollBar",
    ".fp-scrollable",
    "fp-scrollable",
    "prependTo",
    "parentNode",
    "setAttribute",
    "data-final-x",
    "afterSlideLoads",
    "left",
    "xMovement",
    "last",
    "applyHorizontal",
    "apply",
    "autoScrolling",
    "usingExtension",
    "dragAndMove",
    "abs",
    "getCurrentScroll",
    "getScrollTop",
    "index",
    "offsetTop",
    ".fp-bg{transition: transform ",
    "scrollingSpeed",
    "ms ",
    "easingcss3",
    ";}.fp-slide, .fp-section{transition: background-position ",
    "remove",
    "parallaxOptions",
    "percentage",
    "value",
    "round",
    "menu",
    "getAttribute",
    "toggleClass",
    "translateX(",
    "px) translateY(",
    "px)",
    "fp-bg-animate",
    "data-final-y",
    "head",
    "appendTo",
    "type",
    "text/css",
    "cssText",
    "createTextNode",
    "mozRequestAnimationFrame",
    "requestAnimationFrame",
    "toLowerCase",
    "localIsResizing",
    "sectionIndex",
    "isMovementUp",
    "leavingSection",
    "continuousVertical",
    "yMovement",
    "max",
    "continuousHorizontal",
    "section",
    "slideIndex",
    "prevSlideIndex",
    "getWindowHeight",
    "background",
    "addEventListener",
    "setAutoScrolling",
    "destroy",
    "onScroll",
    "onGrab",
    "onResize",
    "afterRender",
    "afterRebuild",
    "onResetSliders",
    "onContinuosHorizontal",
    "onEndResetSliders",
    "removeEventListener",
    "afterResponsive",
    "onContinuousVertical",
    "setOption",
    "offset",
];
!(function (_0x1b67ef, _0x53063a) {
    !(function (_0x131bd7) {
        for (; --_0x131bd7; ) _0x1b67ef.push(_0x1b67ef.shift());
    })(++_0x53063a);
})(_0x3e39, 446);
var _0x1200 = function (_0x4384f1, _0x3904de) {
    return _0x3e39[(_0x4384f1 -= 0)];
};
(window.fp_parallaxExtension = function () {
    var _0x174cca,
        _0x4e49c5,
        _0x3af260,
        _0x28ae39,
        _0x4aaf90,
        _0xc63a4,
        _0x3daecc,
        _0x90e42b,
        _0xce1f40,
        _0x2fefb1,
        _0xc26f03 = this,
        _0x36718b = fp_utils,
        mainAPI = (fp_utils.$, fullpage_api.getFullpageData()),
        fp_options = mainAPI.options,
        _0x2a9cf3 = mainAPI.internals,
        _0x5c9724 = "active",
        _0x11a2b3 = ".fp-section",
        _0x7b0e9b = ".fp-section.active",
        _0x1d87ca = "fp-slide",
        _0x29e85b = ".fp-slide",
        _0x33008c = ".fp-slide.active",
        _0x2e60ff = "fp-notransition",
        _0x4d97a3 = ".fp-bg",
        _0x5b0d2b = "reveal",
        _0x3ff18a = "fp-parallax-transitions",
        _0x1b52bc = "#fp-parallax-transitions",
        _0x192e85 = "fp-parallax-transition-class",
        _0x3518da = 0,
        _0x1d78f0 = !1,
        _0x12259a = !1,
        _0x15c164 = !0,
        _0x26c2f0 = !0,
        _0x4306d6 = !1,
        _0x872c9f = !1,
        _0x1cf08c = !1,
        _0x1b866d = !1,
        _0x456d04 = !1,
        _0x5baa2c = !0 === fp_options.parallax || "slides" === fp_options.parallax,
        _0x32ad6f = _0x36718b[_0x1200("0xc")],
        _0x1e5602 = _0x36718b[_0x1200("0xd")],
        _0x1dfc05 = _0x36718b.removeClass,
        _0x471c9c = _0x36718b[_0x1200("0xe")],
        _0x69ad2 = _0x36718b[_0x1200("0xf")],
        _0x17b0a7 = _0x36718b.nextAll,
        _0x1da7b3 = _0x36718b[_0x1200("0x10")],
        _0x5c42a7 = _0x1200("0x11");
    function _0x177ac4(_0x3cbfed) {
        return { cover: { offsetNormal: _0x3cbfed ? 0 : _0x4e49c5 }, reveal: { offsetNormal: _0x3cbfed ? -_0x4e49c5 : 0 } };
    }
    function _0x54b2a2(_0x4c316c) {
        return { cover: { offsetNormal: _0x4c316c ? 0 : _0x3af260 }, reveal: { offsetNormal: _0x4c316c ? -_0x3af260 : 0 } };
    }
    function _0x43968e(_0x14bf5f) {
        return (_0x14bf5f * _0x28ae39) / 100;
    }
    function _0x5eca5f(_0x4c9c63) {
        return (_0x4c9c63 * _0x4aaf90) / 100;
    }
    function _0x21936e() {
        return window.innerWidth || document[_0x1200("0x12")][_0x1200("0x13")] || document[_0x1200("0x14")](_0x1200("0x15"))[0][_0x1200("0x13")];
    }
    function _0x4e6317() {
        _0x3daecc && _0x1bb6bc(fp_utils.$(_0x7b0e9b).length ? fp_utils.$(_0x7b0e9b)[0] : fp_utils.$(_0x11a2b3)[0], 0);
    }
    function _0x125354() {
        var _0x5a3e1e = fp_utils.$(_0x7b0e9b).length ? fp_utils.$(_0x7b0e9b)[0] : fp_utils.$(_0x11a2b3)[0],
            _0x409227 = _0x174cca === _0x5b0d2b,
            _0x5f05a1 = _0x409227 ? _0x17b0a7(_0x5a3e1e) : _0x1da7b3(_0x5a3e1e),
            _0x411ed9 = _0x409227 ? _0x1da7b3(_0x5a3e1e) : _0x17b0a7(_0x5a3e1e);
        _0x5f05a1[_0x1200("0x17")](function (_0x122b96) {
            _0x1bb6bc(_0x122b96, _0x177ac4(_0x409227)[_0x174cca][_0x1200("0x18")], "silent");
        }),
            _0x411ed9[_0x1200("0x17")](function (_0x436a76) {
                _0x1bb6bc(_0x436a76, 0, _0x1200("0x19"));
            }),
            _0x5baa2c &&
                fp_utils.$(_0x11a2b3)[_0x1200("0x17")](function (_0x36df8b) {
                    fp_utils.$(_0x29e85b, _0x36df8b).length && _0x2f4d6d(fp_utils.$(_0x33008c, _0x36df8b).length ? fp_utils.$(_0x33008c, _0x36df8b)[0] : fp_utils.$(_0x29e85b, _0x36df8b)[0]);
                });
    }
    function _0x2f4d6d(_0x49e891) {
        var _0x1418fc = _0x174cca === _0x5b0d2b,
            _0x3e1175 = _0x1418fc ? _0x17b0a7(_0x49e891) : _0x1da7b3(_0x49e891),
            _0x435771 = _0x1418fc ? _0x1da7b3(_0x49e891) : _0x17b0a7(_0x49e891);
        _0x3e1175[_0x1200("0x17")](function (_0x503fd1) {
            _0x300195(_0x503fd1, _0x54b2a2(_0x1418fc)[_0x174cca][_0x1200("0x18")], _0x1200("0x19"));
        }),
            _0x435771.forEach(function (_0x477bb2) {
                _0x300195(_0x477bb2, 0, _0x1200("0x19"));
            });
    }
    function _0x46bd7a(_0x5a271a) {
        var _0x38330d = _0x5a271a[_0x1200("0x1a")];
        (_0x4aaf90 = _0x21936e()), _0x38330d && !fp_options.scrollBar ? (_0x4e345e(), _0xf75bc7()) : _0xd609fa();
    }
    function _0xbb185f(_0x844f8e) {
        _0xc26f03.destroy(), (_0x4306d6 = !1);
    }
    function _0x1f78a7() {
        fp_utils.$(_0x1200("0x1c")).forEach(function (_0x367b45) {
            var _0x3f3068 = fp_utils.$(_0x4d97a3, _0x367b45)[0];
            (fp_utils.$(_0x1200("0x1c"), _0x367b45).length || _0x471c9c(_0x367b45, _0x1200("0x1d"))) && null != _0x3f3068 && _0x36718b[_0x1200("0x1e")](_0x367b45[_0x1200("0x1f")], _0x3f3068);
        });
    }
    function _0x30df77(_0x353cfe) {
        _0x353cfe[_0x1200("0x1a")] ? _0xd609fa() : (_0x1b866d = !0);
    }
    function _0x220946(_0x438640) {
        _0x438640.detail,
            fp_utils.$(_0x4d97a3)[_0x1200("0x17")](function (_0x111fbd) {
                _0x111fbd[_0x1200("0x20")](_0x1200("0x21"), 0), _0x111fbd.setAttribute("data-final-y", 0);
            }),
            (_0xc63a4 = fp_utils.$(_0x11a2b3)),
            _0x125354();
    }
    function _0x473b27(_0x103555) {
        var _0x4843cf = _0x103555[_0x1200("0x1a")];
        (_0x456d04 = !0), _0x1bb6bc(_0x4843cf, 0, _0x1200("0x19"));
        var _0x2aece9 = fp_utils.$(_0x29e85b, _0x4843cf);
        _0x2aece9.length &&
            _0x2aece9[_0x1200("0x17")](function (_0x2d4700) {
                _0x1bb6bc(_0x2d4700, 0, _0x1200("0x19"));
            }),
            (_0x12259a = !0);
    }
    function _0x1d05a0(_0x494514) {
        var _0x9c1231 = _0x494514[_0x1200("0x1a")];
        _0xc26f03[_0x1200("0x22")](fp_utils.$(_0x29e85b, _0x9c1231)[0]), (_0x456d04 = !1);
    }
    function _0x58ef66(_0x154c12) {
        var _0x49fb43 = _0x154c12[_0x1200("0x1a")];
        (_0x872c9f = !0),
            _0xc26f03[_0x5c42a7]() &&
                (_0x2f4d6d(_0x1200("0x23") === _0x49fb43[_0x1200("0x24")] ? fp_utils.$(_0x29e85b, fp_utils.$(_0x7b0e9b)[0])[0] : _0x36718b[_0x1200("0x25")](fp_utils.$(_0x29e85b, fp_utils.$(_0x7b0e9b)[0]))),
                setTimeout(function () {
                    _0xc26f03[_0x1200("0x26")](_0x49fb43);
                }));
    }
    function _0x5825af(_0x51cb41) {
        var _0x5b6505 = _0x51cb41[_0x1200("0x1a")];
        (_0x1cf08c = !0),
            _0x125354(),
            setTimeout(function () {
                _0xc26f03[_0x1200("0x27")](_0x5b6505);
            });
    }
    function _0x20cfc5() {
        _0x4306d6 &&
            (fp_options.scrollBar || !fp_options.autoScrolling || _0x2a9cf3[_0x1200("0x29")](_0x1200("0x2a"))) &&
            (function () {
                var _0x25ced6 = _0x2a9cf3[_0x1200("0x29")]("dragAndMove") ? Math[_0x1200("0x2b")](window.fp_dragAndMoveExtension[_0x1200("0x2c")]()) : _0x36718b[_0x1200("0x2d")](),
                    _0x125a25 = _0x3518da > _0x25ced6,
                    _0x10d60a = _0x36718b[_0x1200("0x2e")](fp_utils.$(_0x7b0e9b)[0], _0x11a2b3),
                    _0x4590c1 = _0x28ae39 + _0x25ced6;
                if (((_0x3518da = _0x25ced6), _0xc26f03[_0x5c42a7]()))
                    for (var _0x4219e1 = 0; _0x4219e1 < _0xc63a4.length; ++_0x4219e1) {
                        var _0x4483dc = _0xc63a4[_0x4219e1],
                            _0x3068de = _0x28ae39 + _0x4483dc[_0x1200("0x2f")];
                        !_0x125a25 && _0x4483dc[_0x1200("0x2f")] <= _0x4590c1
                            ? (_0x10d60a = _0x4219e1)
                            : _0x125a25 && _0x3068de >= _0x25ced6 && _0x4483dc[_0x1200("0x2f")] < _0x25ced6 && _0xc63a4.length > _0x4219e1 + 1 && (_0x10d60a = _0x4219e1 + 1);
                    }
                var _0x33bb63 = ((_0x28ae39 - (_0xc63a4[_0x10d60a][_0x1200("0x2f")] - _0x25ced6)) * _0x4e49c5) / _0x28ae39;
                _0x174cca !== _0x5b0d2b && (_0x10d60a -= 1);
                var _0x5e8a71 = _0x174cca !== _0x5b0d2b ? _0x33bb63 : -_0x4e49c5 + _0x33bb63;
                if ((_0x10d60a > -1 && _0x1bb6bc(fp_utils.$(_0x11a2b3)[_0x10d60a], _0x5e8a71), _0x10d60a - 1 >= 0 && _0x1bb6bc(_0xc63a4[_0x10d60a - 1], _0x177ac4(!1)[_0x174cca].offsetNormal), !_0xc26f03[_0x5c42a7]())) return !1;
                void 0 !== _0xc63a4[_0x10d60a + 1] && _0x1bb6bc(_0xc63a4[_0x10d60a + 1], _0x177ac4(!0)[_0x174cca][_0x1200("0x18")]);
            })();
    }
    function _0x4e345e() {
        var _0x37942b =
            ".fp-bg{transition: transform " + fp_options.scrollingSpeed + "ms " + fp_options.easingcss3 + ";}.fp-slide, .fp-section{transition: background-position " + fp_options.scrollingSpeed + "ms " + fp_options.easingcss3 + ";}";
        fp_options[_0x1200("0x28")] && !fp_options[_0x1200("0x1b")] && _0x113e86(_0x3ff18a, _0x37942b);
    }
    function _0xf75bc7() {
        var _0x40715a = ".fp-bg-animate{ transition: all " + fp_options.scrollingSpeed + "ms " + fp_options.easingcss3 + "}";
        _0x113e86(_0x192e85, _0x40715a);
    }
    function _0xd609fa() {
        _0x36718b[_0x1200("0x35")](fp_utils.$(_0x1b52bc));
    }
    function _0x749314() {
        clearTimeout(_0x2fefb1), (_0x2fefb1 = setTimeout(_0x3a8797, 350));
    }
    function _0x3a8797() {
        (_0x28ae39 = _0x36718b.getWindowHeight()),
            (_0x4aaf90 = _0x21936e()),
            (_0x4e49c5 = _0x43968e(fp_options.parallaxOptions.percentage)),
            (_0x3af260 = _0x5eca5f(fp_options.parallaxOptions.percentage)),
            _0xc26f03[_0x5c42a7]() && (_0x4e6317(), _0x125354(), _0x2a3a9e());
    }
    function _0x2a3a9e() {
        _0x69ad2(fp_utils.$(_0x4d97a3), { height: _0x28ae39 + "px" });
    }
    function _0x46ce6a(_0xfb858d) {
        return Math[_0x1200("0x39")](2 * _0xfb858d) / 2;
    }
    function _0x1bb6bc(_0x31f729, _0x4c4b1f, _0x3581a7) {
        var _0x52a2a6 = _0x46ce6a(_0x4c4b1f),
            _0x2a2ee8 = fp_utils.$(_0x29e85b, _0x31f729);
        if (_0x2a2ee8.length) {
            var _0x5a71a6 = fp_utils.$(_0x33008c, _0x31f729)[0];
            _0x31f729 = null != _0x5a71a6 ? _0x5a71a6 : _0x2a2ee8[0];
        }
        if (_0x3daecc) _0x69ad2(_0x31f729, { "background-position-y": _0x52a2a6 + "px" });
        else if (!_0x471c9c(_0x31f729, _0x1d87ca) || _0x471c9c(_0x31f729, _0x5c9724) || void 0 !== _0x3581a7) {
            var _0x1027b7 = fp_utils.$(_0x4d97a3, _0x31f729)[0];
            if (_0x1027b7) {
                var _0x561b81 = null != _0x1027b7[_0x1200("0x3b")](_0x1200("0x21")) ? _0x1027b7[_0x1200("0x3b")](_0x1200("0x21")) : 0;
                _0x36718b[_0x1200("0x3c")](_0x1027b7, _0x2e60ff, void 0 !== _0x3581a7),
                    _0x69ad2(_0x1027b7, { transform: _0x1200("0x3d") + _0x561b81 + _0x1200("0x3e") + _0x52a2a6 + _0x1200("0x3f") }),
                    _0x1027b7[_0x1200("0x20")](_0x1200("0x21"), _0x561b81),
                    _0x1027b7[_0x1200("0x20")]("data-final-y", _0x52a2a6);
            }
        }
    }
    function _0x300195(_0x2b0f2d, _0x555cfb, _0x178802) {
        var _0x2c6237 = _0x46ce6a(_0x555cfb),
            _0x2acff9 = _0x3daecc ? _0x2b0f2d : fp_utils.$(_0x4d97a3, _0x2b0f2d)[0];
        if (_0x2acff9)
            if (((!fp_options.scrollBar && fp_options.autoScrolling) || _0x1e5602(_0x2acff9, "fp-bg-animate"), _0x3daecc))
                _0x36718b[_0x1200("0x3c")](_0x2acff9, _0x2e60ff, void 0 !== _0x178802), _0x69ad2(_0x2acff9, { "background-position-x": _0x2c6237 + "px" });
            else {
                var _0x592f54 = 0,
                    _0x54a8a1 = _0x2acff9[_0x1200("0x3b")]("data-final-y");
                "none" !== _0x54a8a1 && null != _0x54a8a1 && (_0x592f54 = _0x54a8a1),
                    _0x36718b[_0x1200("0x3c")](_0x2acff9, _0x2e60ff, void 0 !== _0x178802 || _0x456d04),
                    _0x69ad2(_0x2acff9, { transform: _0x1200("0x3d") + _0x2c6237 + _0x1200("0x3e") + _0x592f54 + _0x1200("0x3f") }),
                    _0x2acff9.setAttribute(_0x1200("0x21"), _0x2c6237),
                    _0x2acff9[_0x1200("0x20")](_0x1200("0x41"), _0x592f54);
            }
    }
    function _0x113e86(_0x206884, _0x328749) {
        if (!fp_utils.$("#" + _0x206884).length) {
            var _0x5b61cc = document[_0x1200("0x42")] || document[_0x1200("0x14")]("head")[0];
            _0x36718b[_0x1200("0x43")](
                ((_0x248c9a = _0x206884),
                (_0x59d9af = _0x328749),
                ((_0x75ff97 = document.createElement("style"))[_0x1200("0x44")] = _0x1200("0x45")),
                (_0x75ff97.id = _0x248c9a),
                _0x75ff97.styleSheet ? (_0x75ff97.styleSheet[_0x1200("0x46")] = _0x59d9af) : _0x75ff97.appendChild(document[_0x1200("0x47")](_0x59d9af)),
                _0x75ff97),
                _0x5b61cc
            );
        }
        var _0x248c9a, _0x59d9af, _0x75ff97;
    }
    (_0xce1f40 = window.requestAnimationFrame || window[_0x1200("0x48")] || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame),
        (window[_0x1200("0x49")] = _0xce1f40),
        (_0xc26f03[_0x5c42a7] = function () {
            return !0;
        }),
        (_0xc26f03[_0x1200("0x27")] = function (_0x4f3e81) {
            if ((_0x1b866d && _0x4e345e(), !_0x4f3e81[_0x1200("0x4b")] && !fp_options.scrollBar && fp_options.autoScrolling)) {
                if ((("up" !== _0x4f3e81.yMovement && !_0x4f3e81[_0x1200("0x4c")]) || (_0x4f3e81[_0x1200("0x4d")] && !(_0x4f3e81[_0x1200("0x4e")] - 1))) && fp_options.continuousVertical && !_0x1cf08c) return;
                var _0x313dc0 = _0x177ac4((_0x1d78f0 = "up" === _0x4f3e81[_0x1200("0x50")]))[_0x174cca][_0x1200("0x18")];
                _0x1bb6bc(fp_utils.$(_0x11a2b3)[_0x4f3e81.sectionIndex], 0),
                    _0x1bb6bc(fp_utils.$(_0x11a2b3)[_0x4f3e81[_0x1200("0x4e")] - 1], _0x313dc0),
                    (_0x15c164 = 1 === Math[_0x1200("0x2b")](_0x4f3e81[_0x1200("0x4e")] - 1 - _0x4f3e81.sectionIndex));
                for (var _0x4eaac4 = Math.min(_0x4f3e81[_0x1200("0x4e")] - 1, _0x4f3e81.sectionIndex) + 1; _0x4eaac4 < Math[_0x1200("0x51")](_0x4f3e81.leavingSection - 1, _0x4f3e81.sectionIndex); _0x4eaac4++)
                    _0x1bb6bc(fp_utils.$(_0x11a2b3)[_0x4eaac4], 0, _0x1200("0x19"));
            }
        }),
        (_0xc26f03.applyHorizontal = function (_0x698314) {
            if (_0x5baa2c && (!_0x698314[_0x1200("0x4b")] || _0x456d04) && "none" != _0x698314[_0x1200("0x24")])
                if ((_0x90e42b = void 0 !== _0x698314.direction && _0x698314.direction !== _0x698314[_0x1200("0x24")]) && fp_options.continuousHorizontal && !_0x872c9f) _0x90e42b = !1;
                else {
                    var _0x56beff = _0x54b2a2((_0x12259a = _0x90e42b ? _0x1200("0x23") === _0x698314.direction : _0x1200("0x23") === _0x698314[_0x1200("0x24")]))[_0x174cca][_0x1200("0x18")];
                    if (
                        _0xc26f03[_0x5c42a7]() &&
                        (_0x300195(fp_utils.$(_0x29e85b, _0x698314[_0x1200("0x53")])[_0x698314[_0x1200("0x54")]], 0),
                        _0x300195(fp_utils.$(_0x29e85b, _0x698314[_0x1200("0x53")])[_0x698314[_0x1200("0x55")]], _0x56beff),
                        !(_0x26c2f0 = 1 === Math[_0x1200("0x2b")](_0x698314[_0x1200("0x54")] - _0x698314.prevSlideIndex)) && !_0x456d04)
                    )
                        for (var _0x5851fa = Math.min(_0x698314[_0x1200("0x54")], _0x698314[_0x1200("0x55")]) + 1; _0x5851fa < Math[_0x1200("0x51")](_0x698314[_0x1200("0x54")], _0x698314[_0x1200("0x55")]); _0x5851fa++)
                            _0x300195(fp_utils.$(_0x29e85b, _0x698314[_0x1200("0x53")])[_0x5851fa], 0, _0x1200("0x19"));
                }
        }),
        (_0xc26f03.init = function () {
            var _0x3befa1;
            (_0x28ae39 = _0x36718b[_0x1200("0x56")]()),
                (_0x4aaf90 = _0x21936e()),
                (_0x174cca = fp_options.parallaxOptions.type),
                (_0x4e49c5 = _0x43968e(fp_options.parallaxOptions.percentage)),
                (_0x3af260 = _0x5eca5f(fp_options.parallaxOptions.percentage)),
                (_0xc63a4 = fp_utils.$(fp_options.sectionSelector)),
                (_0x3daecc = _0x1200("0x57") === fp_options.parallaxOptions.property),
                _0x2a3a9e(),
                (_0x3befa1 = fp_utils.$(".fullpage-wrapper")[0])[_0x1200("0x58")](_0x1200("0x59"), _0x46bd7a),
                _0x3befa1.addEventListener(_0x1200("0x5a"), _0xbb185f),
                _0x3befa1[_0x1200("0x58")](_0x1200("0x5b"), _0x20cfc5),
                _0x3befa1[_0x1200("0x58")]("afterResponsive", _0x220946),
                _0x3befa1.addEventListener(_0x1200("0x5c"), _0x30df77),
                _0x3befa1[_0x1200("0x58")]("onContinuousVertical", _0x5825af),
                _0x3befa1[_0x1200("0x58")](_0x1200("0x5d"), _0x749314),
                _0x3befa1[_0x1200("0x58")](_0x1200("0x5e"), _0x1f78a7),
                _0x3befa1.addEventListener(_0x1200("0x5f"), _0x1f78a7),
                _0x3befa1[_0x1200("0x58")](_0x1200("0x60"), _0x473b27),
                _0x5baa2c && (_0x3befa1[_0x1200("0x58")](_0x1200("0x61"), _0x58ef66), _0x3befa1.addEventListener(_0x1200("0x62"), _0x1d05a0)),
                _0x3daecc ||
                    (_0x113e86(
                        "fp-parallax-stylesheet",
                        ".fp-bg{top:0;bottom:0;width: 100%;position:absolute;z-index: -1;}.fp-section, .fp-slide, .fp-section.fp-table, .fp-slide.fp-table, .fp-section .fp-tableCell, .fp-slide .fp-tableCell {position:relative;overflow: hidden;}"
                    ),
                    _0x4e345e()),
                _0xf75bc7(),
                _0x4e6317(),
                _0x125354(),
                (_0x4306d6 = !0);
        }),
        (_0xc26f03.destroy = function () {
            _0xd609fa(),
                _0x36718b[_0x1200("0x35")](fp_utils.$("#fp-parallax-transition-class")),
                (_0x4e49c5 = _0x43968e(0)),
                (_0x3af260 = _0x5eca5f(0)),
                _0x125354(),
                _0x36718b[_0x1200("0xf")](fp_utils.$(_0x4d97a3), { height: "" }),
                clearTimeout(_0x2fefb1);
            var _0x14aebc = fp_utils.$(".fullpage-wrapper")[0];
            _0x14aebc[_0x1200("0x63")]("setAutoScrolling", _0x46bd7a),
                _0x14aebc[_0x1200("0x63")](_0x1200("0x5a"), _0xbb185f),
                _0x14aebc[_0x1200("0x63")]("onScroll", _0x20cfc5),
                _0x14aebc[_0x1200("0x63")](_0x1200("0x64"), _0x220946),
                _0x14aebc[_0x1200("0x63")](_0x1200("0x5c"), _0x30df77),
                _0x14aebc[_0x1200("0x63")](_0x1200("0x65"), _0x5825af),
                _0x14aebc[_0x1200("0x63")](_0x1200("0x5d"), _0x749314),
                _0x14aebc.removeEventListener(_0x1200("0x5e"), _0x1f78a7),
                _0x14aebc[_0x1200("0x63")](_0x1200("0x5f"), _0x1f78a7),
                _0x14aebc[_0x1200("0x63")]("onResetSliders", _0x473b27),
                _0x5baa2c && (_0x14aebc[_0x1200("0x63")](_0x1200("0x61"), _0x58ef66), _0x14aebc[_0x1200("0x63")]("onEndResetSliders", _0x1d05a0));
        }),
        (_0xc26f03[_0x1200("0x66")] = function (_0x1b5f6f, _0x840ddf) {
            _0x1200("0x67") === _0x1b5f6f
                ? ((fp_options.parallaxOptions.percentage = _0x840ddf), (_0x4e49c5 = _0x43968e(_0x840ddf)), (_0x3af260 = _0x5eca5f(_0x840ddf)))
                : _0x1200("0x44") === _0x1b5f6f && ((fp_options.parallaxOptions.type = _0x840ddf), (_0x174cca = _0x840ddf)),
                _0x125354();
        }),
        (_0xc26f03[_0x1200("0x68")] = _0x1bb6bc),
        (_0xc26f03.afterSlideLoads = function (_0x22c41b) {
            var _0x2c3d48,
                _0x1be3ec = void 0 !== _0x22c41b ? _0x22c41b : fp_utils.$(_0x33008c, fp_utils.$(_0x7b0e9b)[0])[0],
                _0x35809d = _0x32ad6f(_0x1be3ec, _0x11a2b3);
            if (
                ((_0x3daecc ? ((_0x2c3d48 = _0x35809d), fp_utils.$(_0x29e85b, _0x2c3d48).length ? fp_utils.$(_0x29e85b, _0x2c3d48) : [_0x2c3d48]) : fp_utils.$(_0x4d97a3, _0x35809d))[_0x1200("0x17")](function (_0x45ff1b) {
                    _0x1dfc05(_0x45ff1b, _0x1200("0x40"));
                }),
                (_0x872c9f || _0x90e42b) && (_0x2f4d6d(_0x1be3ec), (_0x872c9f = !1)),
                !_0x26c2f0)
            ) {
                var _0x4d077d = _0x54b2a2(_0x12259a)[_0x174cca].offsetNormal,
                    _0x2782e1 = _0x1be3ec,
                    _0xf2442b = _0x12259a ? _0x17b0a7(_0x2782e1) : _0x1da7b3(_0x2782e1);
                ((_0x174cca === _0x5b0d2b && _0x12259a) || ("cover" === _0x174cca && !_0x12259a) || _0x456d04) &&
                    _0xf2442b[_0x1200("0x17")](function (_0x14c4f9) {
                        _0x300195(_0x14c4f9, _0x4d077d, _0x1200("0x19"));
                    });
            }
        }),
        (_0xc26f03[_0x1200("0x69")] = function () {
            if ((!fp_options.scrollBar || !fp_options.autoScrolling || _0x2a9cf3.usingExtension("dragAndMove")) && ((_0x1cf08c || _0x90e42b) && (_0x125354(), (_0x1cf08c = !1)), !_0x15c164 && _0xc26f03[_0x5c42a7]())) {
                var _0x6249e8 = _0x177ac4(_0x1d78f0)[_0x174cca][_0x1200("0x18")],
                    _0x570210 = _0x1d78f0 ? _0x17b0a7(fp_utils.$(_0x7b0e9b)[0]) : _0x1da7b3(fp_utils.$(_0x7b0e9b)[0]);
                ((_0x174cca === _0x5b0d2b && _0x1d78f0) || ("cover" === _0x174cca && !_0x1d78f0)) &&
                    _0x570210.forEach(function (_0x1bd76c) {
                        _0x1bb6bc(_0x1bd76c, _0x6249e8, "silent");
                    });
            }
        }),
        (_0xc26f03.c = _0x2a9cf3.c);
    var _0x4d5bae = _0xc26f03["common"[_0x1200("0x6a")](0)];
    return (
        _0x1200("0x6b") === document[_0x1200("0x6c")] && _0x4d5bae(_0x1200("0xb")),
        window.addEventListener(_0x1200("0x6d"), function () {
            _0x4d5bae(_0x1200("0xb"));
        }),
        _0xc26f03
    );
}),
    (window.fp_scrollHorizontallyExtension = function () {
        var mainAPI = fullpage_api.getFullpageData(),
            fpOptions = mainAPI.options,
            fpInternals = mainAPI.internals;
        return (
            (this.getScrollSection = function (scrDirection, scrFunction) {
                var activeFpSlide,
                    activeFpSection = fp_utils.$(".fp-section.active")[0],
                    fbSlidesCount = fp_utils.$(".fp-slide", activeFpSection).length;
                if (fpOptions.scrollHorizontally && fbSlidesCount > 1)
                    if (((activeFpSlide = fp_utils.$(".fp-slide.active", activeFpSection)[0]), "down" === scrDirection)) {
                        if (fp_utils.index(activeFpSlide) + 1 != fbSlidesCount) return fullpage_api.moveSlideRight;
                    } else if (fp_utils.index(activeFpSlide)) return fullpage_api.moveSlideLeft;
                return scrFunction;
            }),
            (this.c = fpInternals.c),
            (abcxyz = this.c),
            "complete" === document.readyState && this.c("scrollHorizontally"),
            window.addEventListener("load", function () {
                abcxyz("scrollHorizontally");
            }),
            this
        );
    });
var _0x1304 = [
    "autoScrolling",
    "afterResponsive",
    "addEventListener",
    "destroy",
    "deepExtend",
    "scrollBar",
    "setAutoScrolling",
    "length",
    "sections",
    "fadingEffect",
    "head",
    "getElementsByTagName",
    "appendTo",
    "type",
    "text/css",
    "styleSheet",
    "cssText",
    "appendChild",
    "createTextNode",
    "all ",
    "ms ",
    "easingcss3",
    "{-webkit-transition: ",
    ";transition: ",
    ".fp-slidesContainer {width: 100% !important;transform: none!important;}",
    "{width: 100% !important;position: absolute !important;left: 0;top: 0;visibility: hidden;opacity: 0;}",
    ".active{visibility: visible;opacity: 1;z-index: 1}",
    "remove",
    "silentLandscapeScroll",
    "scrollTo",
    "silentScroll",
    "#menu",
    "menu",
    "update",
    "turnOn",
    "turnOff",
    "common",
    "charAt",
    "complete",
    "readyState",
    "fp_fadingEffectExtension",
    "options",
    "internals",
    ".fp-slidesContainer",
    "fp-fading-animations",
    "fp-fading-sheet",
    "fp-fixed",
    "fp-contant",
    "detail",
];
!(function (_0x1b704c, _0x4e395f) {
    !(function (_0x58b09b) {
        for (; --_0x58b09b; ) _0x1b704c.push(_0x1b704c.shift());
    })(++_0x4e395f);
})(_0x1304, 187);
var _0x3fed = function (_0x5a8b09, _0xf4469d) {
    return _0x1304[(_0x5a8b09 -= 0)];
};
(window.fp_fadingEffectExtension = function () {
    var _0x1e991e,
        _0x494bcc,
        _0x209a6d,
        _0x4e8490,
        _0x312745 = this,
        mainAPI = fullpage_api.getFullpageData(),
        fpOptions = mainAPI.options,
        fpInternals = mainAPI.internals,
        _0x5ded90 = fpOptions.scrollingSpeed,
        _0x262015 = ".fp-section",
        _0x51c43f = ".fp-slide",
        _0x3025f0 = ".fp-slidesContainer",
        _0x200491 = "fp-fading-animations",
        _0x1ab08e = "#fp-fading-animations",
        _0x1f7d33 = "fp-fading-sheet",
        _0x3b8932 = "#fp-fading-sheet",
        _0x4d9222 = "fp-fixed",
        _0x321a51 = "fp-contant";
    function _0x2b3a6e(_0x1ebef4) {
        _0x1ebef4.detail ? ((_0x4e8490 = !1), _0x4cbbde()) : ((_0x4e8490 = _0x209a6d.autoScrolling), _0x5d1de7());
    }
    function _0x4a4cbe() {
        var fpWrapper = fp_utils.$(".fullpage-wrapper")[0];
        fpWrapper.addEventListener("afterResponsive", _0x2b3a6e),
            fpWrapper.addEventListener("destroy", _0x4cbbde),
            (_0x209a6d = fp_utils.deepExtend({}, fpOptions)),
            (_0x4e8490 = _0x209a6d.autoScrolling),
            (fpOptions.scrollBar = !1),
            _0x1bbaf0("sections") && fullpage_api.setAutoScrolling(!0);
        var _0x74012b = _0x1bbaf0("slides") ? _0x236691(_0x51c43f) : "",
            _0x1e991e = _0x1bbaf0(_0x3fed("0x11")) ? _0x236691(_0x262015) : "";
        _0x312745[_0x321a51]() && fpOptions[_0x3fed("0x12")] && _0x21455d(_0x1f7d33, _0x1e991e + _0x74012b), fpInternals.removeAnimation(fp_utils.$(_0x3025f0)), clearTimeout(_0x494bcc), (_0x494bcc = setTimeout(_0x4b8b72, 300));
    }
    function _0x1bbaf0(_0x1ebef4) {
        return !0 === fpOptions.fadingEffect || fpOptions.fadingEffect === _0x1ebef4;
    }
    function _0x21455d(_0x1ebef4, _0x74012b) {
        if (!fp_utils.$("#" + _0x1ebef4)[_0x3fed("0x10")]) {
            var _0x1e991e = document[_0x3fed("0x13")] || document[_0x3fed("0x14")](_0x3fed("0x13"))[0];
            fp_utils.appendTo(
                ((_0x494bcc = _0x1ebef4),
                (_0x209a6d = _0x74012b),
                ((_0x4e8490 = document.createElement("style"))[_0x3fed("0x16")] = _0x3fed("0x17")),
                (_0x4e8490.id = _0x494bcc),
                _0x4e8490[_0x3fed("0x18")] ? (_0x4e8490.styleSheet[_0x3fed("0x19")] = _0x209a6d) : _0x4e8490[_0x3fed("0x1a")](document[_0x3fed("0x1b")](_0x209a6d)),
                _0x4e8490),
                _0x1e991e
            );
        }
        var _0x494bcc, _0x209a6d, _0x4e8490;
    }
    function _0x4b8b72() {
        _0x1e991e = (function () {
            if (_0x312745[_0x4d9222]()) return _0x3fed("0x1c") + _0x5ded90 + _0x3fed("0x1d") + fpOptions[_0x3fed("0x1e")];
        })();
        var _0x1ebef4 = _0x1bbaf0("slides") ? _0x5f1ccb(_0x51c43f) : "",
            _0x74012b = _0x1bbaf0("sections") ? _0x5f1ccb(_0x262015) : "";
        _0x312745[_0x321a51]() && _0x21455d(_0x200491, _0x1ebef4 + _0x74012b);
    }
    function _0x5f1ccb(_0x1ebef4) {
        return _0x1ebef4 + _0x3fed("0x1f") + _0x1e991e + _0x3fed("0x20") + _0x1e991e + ";}";
    }
    function _0x236691(_0x1ebef4) {
        if (_0x312745[_0x4d9222]()) return (_0x1ebef4 === _0x51c43f ? _0x3fed("0x21") : "") + _0x1ebef4 + _0x3fed("0x22") + _0x1ebef4 + _0x3fed("0x23");
    }
    function _0x4cbbde() {
        if ((fp_utils.remove(fp_utils.$(_0x1ab08e)), _0x485f9d())) {
            var _0x1ebef4 = fp_utils.$(".fp-slide.active", fp_utils.$(".fp-section.active")[0])[0],
                _0x74012b = fp_utils.$(_0x3025f0, fp_utils.$(".fp-section.active")[0]);
            fpInternals.removeAnimation(_0x74012b),
                fp_utils.remove(fp_utils.$(_0x3b8932)),
                (fpOptions[_0x3fed("0xe")] = _0x209a6d[_0x3fed("0xe")]),
                fullpage_api[_0x3fed("0xf")](_0x4e8490),
                null != _0x1ebef4 && fpInternals[_0x3fed("0x25")](_0x1ebef4);
        }
    }
    function _0x485f9d() {
        return fp_utils.$(_0x3b8932)[_0x3fed("0x10")];
    }
    function _0x5d1de7() {
        (fpOptions.fadingEffect = !0), _0x485f9d() || (_0x4a4cbe(), window[_0x3fed("0x26")](0, 0), fpInternals[_0x3fed("0x27")](0));
    }
    (_0x312745[_0x4d9222] = function () {
        return !0;
    }),
        (_0x312745[_0x321a51] = function () {
            return !0;
        }),
        (_0x312745[_0x3fed("0x2a")] = function (_0x1ebef4) {
            fp_utils.remove(fp_utils.$(_0x1ab08e)), (_0x5ded90 = _0x1ebef4), _0x4b8b72();
        }),
        (_0x312745[_0x3fed("0x2b")] = _0x5d1de7),
        (_0x312745[_0x3fed("0x2c")] = _0x4cbbde),
        (_0x312745.apply = _0x4a4cbe),
        (_0x312745.c = fpInternals.c);
    var _0x5c0847 = _0x312745[_0x3fed("0x2d")[_0x3fed("0x2e")](0)];
    return (
        _0x3fed("0x2f") === document[_0x3fed("0x30")] && _0x5c0847(_0x3fed("0x12")),
        window[_0x3fed("0xb")]("load", function () {
            _0x5c0847("fadingEffect");
        }),
        _0x312745
    );
}),
    (function (e, t, n, o, r) {
        "function" == typeof define && define.amd
            ? define(function () {
                  return (e.fullpage = o(t, n)), e.fullpage;
              })
            : "object" == typeof exports
            ? (module.exports = o(t, n))
            : (t.fullpage = o(t, n));
    })(this, window, document, function (rn, ln) {
        "use strict";
        var an = "fullpage-wrapper",
            sn = "." + an,
            cn = "fp-responsive",
            un = "fp-notransition",
            fn = "fp-destroyed",
            dn = "fp-enabled",
            vn = "fp-viewing",
            pn = "active",
            hn = "." + pn,
            gn = "fp-completely",
            mn = "fp-section",
            Sn = "." + mn,
            bn = Sn + hn,
            wn = "fp-tableCell",
            yn = "." + wn,
            En = "fp-auto-height",
            xn = "fp-normal-scroll",
            Ln = "#fp-nav",
            Tn = "fp-slide",
            On = "." + Tn,
            kn = On + hn,
            Cn = "fp-slides",
            Hn = "." + Cn,
            Rn = "fp-slidesContainer",
            In = "." + Rn,
            zn = "fp-table",
            Bn = "fp-slidesNav",
            Nn = "." + Bn,
            jn = Nn + " a",
            Pn = ".fp-controlArrow",
            Wn = "fp-prev",
            Dn = Pn + ".fp-prev",
            Yn = Pn + ".fp-next";
        function Vn(e, t) {
            rn.console && rn.console[e] && rn.console[e]("fullPage: " + t);
        }
        function Zn(e, t) {
            return (t = 1 < arguments.length ? t : ln) ? t.querySelectorAll(e) : null;
        }
        function Xn(e) {
            e = e || {};
            for (var t = 1, n = arguments.length; t < n; ++t) {
                var o = arguments[t];
                if (o) for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? (e[r] = o[r]) : (e[r] = Xn(e[r], o[r])));
            }
            return e;
        }
        function Gn(e, t) {
            return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className));
        }
        function Fn() {
            return "innerHeight" in rn ? rn.innerHeight : ln.documentElement.offsetHeight;
        }
        function Un() {
            return rn.innerWidth;
        }
        function Qn(e, t) {
            var n;
            for (n in ((e = l(e)), t)) if (t.hasOwnProperty(n) && null !== n) for (var o = 0; o < e.length; o++) e[o].style[n] = t[n];
            return e;
        }
        function n(e, t, n) {
            for (var o = e[n]; o && !bo(o, t); ) o = o[n];
            return o;
        }
        function _n(e, t) {
            return n(e, t, "previousElementSibling");
        }
        function Jn(e, t) {
            return n(e, t, "nextElementSibling");
        }
        function Kn(e, t) {
            if (null == t) return e.previousElementSibling;
            var n = Kn(e);
            return n && bo(n, t) ? n : null;
        }
        function $n(e, t) {
            if (null == t) return e.nextElementSibling;
            var n = $n(e);
            return n && bo(n, t) ? n : null;
        }
        function qn(e) {
            return e[e.length - 1];
        }
        function eo(e, t) {
            e = oo(e) ? e[0] : e;
            for (var n = null != t ? Zn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
                if (n[r] == e) return o;
                1 == n[r].nodeType && o++;
            }
            return -1;
        }
        function l(e) {
            return oo(e) ? e : [e];
        }
        function to(e) {
            e = l(e);
            for (var t = 0; t < e.length; t++) e[t].style.display = "none";
            return e;
        }
        function no(e) {
            e = l(e);
            for (var t = 0; t < e.length; t++) e[t].style.display = "block";
            return e;
        }
        function oo(e) {
            return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e);
        }
        function ro(e, t) {
            e = l(e);
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.classList ? o.classList.add(t) : (o.className += " " + t);
            }
            return e;
        }
        function io(e, t) {
            e = l(e);
            for (var n = t.split(" "), o = 0; o < n.length; o++) {
                t = n[o];
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.classList ? i.classList.remove(t) : (i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
                }
            }
            return e;
        }
        function lo(e, t) {
            t.appendChild(e);
        }
        function o(e, t, n) {
            var o;
            t = t || ln.createElement("div");
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                ((n && !r) || !n) && ((o = t.cloneNode(!0)), i.parentNode.insertBefore(o, i)), o.appendChild(i);
            }
            return e;
        }
        function ao(e, t) {
            o(e, t, !0);
        }
        function so(e, t) {
            for ("string" == typeof t && (t = yo(t)), e.appendChild(t); e.firstChild !== t; ) t.appendChild(e.firstChild);
        }
        function co(e) {
            for (var t = ln.createDocumentFragment(); e.firstChild; ) t.appendChild(e.firstChild);
            e.parentNode.replaceChild(t, e);
        }
        function uo(e, t) {
            return e && 1 === e.nodeType ? (bo(e, t) ? e : uo(e.parentNode, t)) : null;
        }
        function fo(e, t) {
            r(e, e.nextSibling, t);
        }
        function vo(e, t) {
            r(e, e, t);
        }
        function r(e, t, n) {
            oo(n) || ("string" == typeof n && (n = yo(n)), (n = [n]));
            for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t);
        }
        function po() {
            var e = ln.documentElement;
            return (rn.pageYOffset || e.scrollTop) - (e.clientTop || 0);
        }
        function ho(t) {
            return Array.prototype.filter.call(t.parentNode.children, function (e) {
                return e !== t;
            });
        }
        function go(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function mo(e) {
            if ("function" == typeof e) return !0;
            var t = Object.prototype.toString(e);
            return "[object Function]" === t || "[object GeneratorFunction]" === t;
        }
        function So(e, t, n) {
            var o;
            (n = void 0 === n ? {} : n), "function" == typeof rn.CustomEvent ? (o = new CustomEvent(t, { detail: n })) : (o = ln.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o);
        }
        function bo(e, t) {
            return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
        }
        function wo(e, t) {
            if ("boolean" == typeof t) for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
            return e;
        }
        function yo(e) {
            var t = ln.createElement("div");
            return (t.innerHTML = e.trim()), t.firstChild;
        }
        function Eo(e) {
            e = l(e);
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n && n.parentElement && n.parentNode.removeChild(n);
            }
        }
        function i(e, t, n) {
            for (var o = e[n], r = []; o; ) (bo(o, t) || null == t) && r.push(o), (o = o[n]);
            return r;
        }
        function xo(e, t) {
            return i(e, t, "nextElementSibling");
        }
        function Ao(e, t) {
            return i(e, t, "previousElementSibling");
        }
        return (
            rn.NodeList &&
                !NodeList.prototype.forEach &&
                (NodeList.prototype.forEach = function (e, t) {
                    t = t || rn;
                    for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
                }),
            (rn.fp_utils = {
                $: Zn,
                deepExtend: Xn,
                hasClass: Gn,
                getWindowHeight: Fn,
                css: Qn,
                until: n,
                prevUntil: _n,
                nextUntil: Jn,
                prev: Kn,
                next: $n,
                last: qn,
                index: eo,
                getList: l,
                hide: to,
                show: no,
                isArrayOrList: oo,
                addClass: ro,
                removeClass: io,
                appendTo: lo,
                wrap: o,
                wrapAll: ao,
                wrapInner: so,
                unwrap: co,
                closest: uo,
                after: fo,
                before: vo,
                insertBefore: r,
                getScrollTop: po,
                siblings: ho,
                preventDefault: go,
                isFunction: mo,
                trigger: So,
                matches: bo,
                toggle: wo,
                createElementFromHTML: yo,
                remove: Eo,
                filter: function (e, t) {
                    Array.prototype.filter.call(e, t);
                },
                untilAll: i,
                nextAll: xo,
                prevAll: Ao,
                showError: Vn,
                prependTo: function (e, t) {
                    e.insertBefore(t, e.firstChild);
                },
                toggleClass: function (e, t, n) {
                    if (e.classList && null == n) e.classList.toggle(t);
                    else {
                        var o = Gn(e, t);
                        (o && null == n) || !n ? io(e, t) : ((!o && null == n) || n) && ro(e, t);
                    }
                },
            }),
            function (e, g) {
                var n = (g && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)) || -1 < ln.domain.indexOf("."),
                    r = Zn("html, body"),
                    s = Zn("html")[0],
                    m = Zn("body")[0];
                if (!Gn(s, dn)) {
                    var S = {};
                    g = Xn(
                        {
                            menu: !1,
                            anchors: [],
                            lockAnchors: !1,
                            navigation: !1,
                            navigationPosition: "right",
                            navigationTooltips: [],
                            showActiveTooltip: !1,
                            slidesNavigation: !1,
                            slidesNavPosition: "bottom",
                            scrollBar: !1,
                            hybrid: !1,
                            css3: !0,
                            scrollingSpeed: 700,
                            autoScrolling: !0,
                            fitToSection: !0,
                            fitToSectionDelay: 1e3,
                            easing: "easeInOutCubic",
                            easingcss3: "ease",
                            loopBottom: !1,
                            loopTop: !1,
                            loopHorizontal: !0,
                            continuousVertical: !1,
                            continuousHorizontal: !1,
                            scrollHorizontally: !1,
                            interlockedSlides: !1,
                            dragAndMove: !1,
                            offsetSections: !1,
                            resetSliders: !1,
                            fadingEffect: !1,
                            normalScrollElements: null,
                            scrollOverflow: !1,
                            scrollOverflowReset: !1,
                            scrollOverflowHandler: rn.fp_scrolloverflow ? rn.fp_scrolloverflow.iscrollHandler : null,
                            scrollOverflowOptions: null,
                            touchSensitivity: 5,
                            touchWrapper: "string" == typeof e ? Zn(e)[0] : e,
                            bigSectionsDestination: null,
                            keyboardScrolling: !0,
                            animateAnchor: !0,
                            recordHistory: !0,
                            controlArrows: !0,
                            controlArrowColor: "#fff",
                            verticalCentered: !0,
                            sectionsColor: [],
                            paddingTop: 0,
                            paddingBottom: 0,
                            fixedElements: null,
                            responsive: 0,
                            responsiveWidth: 0,
                            responsiveHeight: 0,
                            responsiveSlides: !1,
                            parallax: !1,
                            parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
                            cards: !1,
                            cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 },
                            sectionSelector: ".section",
                            slideSelector: ".slide",
                            v2compatible: !1,
                            afterLoad: null,
                            onLeave: null,
                            afterRender: null,
                            afterResize: null,
                            afterReBuild: null,
                            afterSlideLoad: null,
                            onSlideLeave: null,
                            afterResponsive: null,
                            lazyLoading: !0,
                        },
                        g
                    );
                    var b,
                        l,
                        c,
                        o,
                        a = !1,
                        i = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                        u = "ontouchstart" in rn || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                        w = "string" == typeof e ? Zn(e)[0] : e,
                        y = Fn(),
                        f = Un(),
                        E = !1,
                        t = !0,
                        x = !0,
                        d = [],
                        v = { m: { up: !0, down: !0, left: !0, right: !0 } };
                    v.k = Xn({}, v.m);
                    var p,
                        h,
                        A,
                        L,
                        M,
                        T,
                        O,
                        k,
                        C,
                        H,
                        R = Dt(),
                        I = { touchmove: "ontouchmove" in rn ? "touchmove" : R.move, touchstart: "ontouchstart" in rn ? "touchstart" : R.down },
                        N = (Gn(m, nt("")), 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'),
                        j = !1;
                    try {
                        var P = Object.defineProperty({}, "passive", {
                            get: function () {
                                j = !0;
                            },
                        });
                        rn.addEventListener("testPassive", null, P), rn.removeEventListener("testPassive", null, P);
                    } catch (e) {}
                    var W,
                        D,
                        Y = Xn({}, g),
                        V = !1,
                        Z = !0,
                        X = {};
                    $t(),
                        (rn.fp_easings = Xn(rn.fp_easings, {
                            easeInOutCubic: function (e, t, n, o) {
                                return (e /= o / 2) < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t;
                            },
                        })),
                        w &&
                            ((S.version = "3.0.8"),
                            (S.setAutoScrolling = oe),
                            (S.setRecordHistory = re),
                            (S.setScrollingSpeed = ie),
                            (S.setFitToSection = le),
                            (S.setLockAnchors = function (e) {
                                g.lockAnchors = e;
                            }),
                            (S.setMouseWheelScrolling = ae),
                            (S.setAllowScrolling = se),
                            (S.setKeyboardScrolling = ue),
                            (S.moveSectionUp = fe),
                            (S.moveSectionDown = de),
                            (S.silentMoveTo = ve),
                            (S.moveTo = pe),
                            (S.moveSlideRight = he),
                            (S.moveSlideLeft = ge),
                            (S.fitToSection = He),
                            (S.reBuild = me),
                            (S.setResponsive = be),
                            (S.getFullpageData = function () {
                                return {
                                    options: g,
                                    internals: {
                                        container: w,
                                        canScroll: x,
                                        isScrollAllowed: v,
                                        getDestinationPosition: Ye,
                                        isTouch: u,
                                        c: lt,
                                        getXmovement: kt,
                                        removeAnimation: Mt,
                                        getTransforms: Xt,
                                        lazyLoad: Je,
                                        addAnimation: Lt,
                                        performHorizontalMove: yt,
                                        landscapeScroll: St,
                                        silentLandscapeScroll: Vt,
                                        keepSlidesPosition: De,
                                        silentScroll: Zt,
                                        styleSlides: Le,
                                        styleSection: Te,
                                        scrollHandler: Ce,
                                        getEventsPage: Yt,
                                        getMSPointer: Dt,
                                        isReallyTouch: Be,
                                        usingExtension: Ut,
                                        toggleControlArrows: bt,
                                        touchStartHandler: Ne,
                                        touchMoveHandler: ze,
                                    },
                                };
                            }),
                            (S.destroy = function (e) {
                                So(w, "destroy", e),
                                    oe(!1, "internal"),
                                    se(!0),
                                    ce(!1),
                                    ue(!1),
                                    ro(w, fn),
                                    [M, L, h, T, O, C, A].forEach(function (e) {
                                        clearTimeout(e);
                                    }),
                                    rn.removeEventListener("scroll", Ce),
                                    rn.removeEventListener("hashchange", ct),
                                    rn.removeEventListener("resize", Et),
                                    ln.removeEventListener("keydown", ft),
                                    ln.removeEventListener("keyup", dt),
                                    ["click", "touchstart"].forEach(function (e) {
                                        ln.removeEventListener(e, we);
                                    }),
                                    ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                                        ln.removeEventListener(e, Ee, !0);
                                    }),
                                    Qt("dragAndMove", "destroy"),
                                    e &&
                                        (Zt(0),
                                        Zn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", w).forEach(function (e) {
                                            Qe(e, "src");
                                        }),
                                        Zn("img[data-srcset]").forEach(function (e) {
                                            Qe(e, "srcset");
                                        }),
                                        Eo(Zn(Ln + ", " + Nn + ", " + Pn)),
                                        Qn(Zn(Sn), { height: "", "background-color": "", padding: "" }),
                                        Qn(Zn(On), { width: "" }),
                                        Qn(w, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
                                        Qn(r, { overflow: "", height: "" }),
                                        io(s, dn),
                                        io(m, cn),
                                        m.className.split(/\s+/).forEach(function (e) {
                                            0 === e.indexOf(vn) && io(m, e);
                                        }),
                                        Zn(Sn + ", " + On).forEach(function (e) {
                                            g.scrollOverflowHandler && g.scrollOverflow && g.scrollOverflowHandler.remove(e),
                                                io(e, zn + " " + pn + " " + gn),
                                                e.getAttribute("data-fp-styles") && e.setAttribute("style", e.getAttribute("data-fp-styles")),
                                                Gn(e, mn) && !V && e.removeAttribute("data-anchor");
                                        }),
                                        Ft(w),
                                        [yn, In, Hn].forEach(function (e) {
                                            Zn(e, w).forEach(function (e) {
                                                co(e);
                                            });
                                        }),
                                        rn.scrollTo(0, 0),
                                        [mn, Tn, Rn].forEach(function (e) {
                                            io(Zn("." + e), e);
                                        }));
                            }),
                            (S.getActiveSection = function () {
                                return new nn(Zn(bn)[0]);
                            }),
                            (S.getActiveSlide = function () {
                                return Ge(Zn(kn, Zn(bn)[0])[0]);
                            }),
                            (S.landscapeScroll = St),
                            (S.test = {
                                top: "0px",
                                translate3d: "translate3d(0px, 0px, 0px)",
                                translate3dH: (function () {
                                    for (var e = [], t = 0; t < Zn(g.sectionSelector, w).length; t++) e.push("translate3d(0px, 0px, 0px)");
                                    return e;
                                })(),
                                left: (function () {
                                    for (var e = [], t = 0; t < Zn(g.sectionSelector, w).length; t++) e.push(0);
                                    return e;
                                })(),
                                options: g,
                                setAutoScrolling: oe,
                            }),
                            (S.shared = { afterRenderActions: ke, isNormalScrollElement: !1 }),
                            (rn.fullpage_api = S),
                            (rn.fullpage_extensions = !0),
                            g.$ &&
                                Object.keys(S).forEach(function (e) {
                                    g.$.fn.fullpage[e] = S[e];
                                }),
                            Ae("continuousHorizontal"),
                            Ae("scrollHorizontally"),
                            Ae("resetSliders"),
                            Ae("interlockedSlides"),
                            Ae("responsiveSlides"),
                            Ae("fadingEffect"),
                            Ae("dragAndMove"),
                            Ae("offsetSections"),
                            Ae("scrollOverflowReset"),
                            Ae("parallax"),
                            Ae("cards"),
                            Qt("dragAndMove", "init"),
                            g.css3 &&
                                (g.css3 = (function () {
                                    var e,
                                        t = ln.createElement("p"),
                                        n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                                    for (var o in ((t.style.display = "block"), ln.body.insertBefore(t, null), n)) void 0 !== t.style[o] && ((t.style[o] = "translate3d(1px,1px,1px)"), (e = rn.getComputedStyle(t).getPropertyValue(n[o])));
                                    return ln.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e;
                                })()),
                            (g.scrollBar = g.scrollBar || g.hybrid),
                            (function () {
                                if (!g.anchors.length) {
                                    var e = "[data-anchor]",
                                        t = Zn(g.sectionSelector.split(",").join(e + ",") + e, w);
                                    t.length &&
                                        ((V = !0),
                                        t.forEach(function (e) {
                                            g.anchors.push(e.getAttribute("data-anchor").toString());
                                        }));
                                }
                                if (!g.navigationTooltips.length) {
                                    var n = "[data-tooltip]",
                                        o = Zn(g.sectionSelector.split(",").join(n + ",") + n, w);
                                    o.length &&
                                        o.forEach(function (e) {
                                            g.navigationTooltips.push(e.getAttribute("data-tooltip").toString());
                                        });
                                }
                            })(),
                            (function () {
                                Qn(w, { height: "100%", position: "relative" }), ro(w, an), ro(s, dn), (y = Fn()), io(w, fn), ro(Zn(g.sectionSelector, w), mn), ro(Zn(g.slideSelector, w), Tn), Qt("parallax", "init");
                                for (var e = Zn(Sn), t = 0; t < e.length; t++) {
                                    var n = t,
                                        o = e[t],
                                        r = Zn(On, o),
                                        i = r.length;
                                    o.setAttribute("data-fp-styles", o.getAttribute("style")),
                                        Te(o, n),
                                        (l = o),
                                        (a = n),
                                        void 0 !== g.anchors[a] && Gn(l, pn) && Tt(g.anchors[a], a),
                                        g.menu &&
                                            g.css3 &&
                                            null != uo(Zn(g.menu)[0], sn) &&
                                            Zn(g.menu).forEach(function (e) {
                                                m.appendChild(e);
                                            }),
                                        0 < i ? Le(o, r, i) : g.verticalCentered && Ct(o);
                                }
                                var l, a;
                                g.fixedElements &&
                                    g.css3 &&
                                    Zn(g.fixedElements).forEach(function (e) {
                                        m.appendChild(e);
                                    }),
                                    g.navigation &&
                                        (function () {
                                            var e = ln.createElement("div");
                                            e.setAttribute("id", "fp-nav");
                                            var t = ln.createElement("ul");
                                            e.appendChild(t), lo(e, m);
                                            var n = Zn(Ln)[0];
                                            ro(n, "fp-" + g.navigationPosition), g.showActiveTooltip && ro(n, "fp-show-active");
                                            for (var o = "", r = 0; r < Zn(Sn).length; r++) {
                                                var i = "";
                                                g.anchors.length && (i = g.anchors[r]), (o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + Oe(r, "Section") + "</span><span></span></a>");
                                                var l = g.navigationTooltips[r];
                                                void 0 !== l && "" !== l && (o += '<div class="fp-tooltip fp-' + g.navigationPosition + '">' + l + "</div>"), (o += "</li>");
                                            }
                                            (Zn("ul", n)[0].innerHTML = o), Qn(Zn(Ln), { "margin-top": "-" + Zn(Ln)[0].offsetHeight / 2 + "px" }), ro(Zn("a", Zn("li", Zn(Ln)[0])[eo(Zn(bn)[0], Sn)]), pn);
                                        })(),
                                    Zn('iframe[src*="youtube.com/embed/"]', w).forEach(function (e) {
                                        var t, n, o;
                                        (n = "enablejsapi=1"), (o = (t = e).getAttribute("src")), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n);
                                    }),
                                    Qt("fadingEffect", "apply"),
                                    Qt("cards", "init"),
                                    g.scrollOverflow && (p = g.scrollOverflowHandler.init(g));
                            })(),
                            se(!0),
                            ce(!0),
                            oe(g.autoScrolling, "internal"),
                            At(),
                            Wt(),
                            "complete" === ln.readyState && st(),
                            rn.addEventListener("load", st),
                            g.scrollOverflow || ke(),
                            (function () {
                                for (var e = 1; e < 4; e++) C = setTimeout(xe, 350 * e);
                            })(),
                            rn.addEventListener("scroll", Ce),
                            rn.addEventListener("hashchange", ct),
                            rn.addEventListener("blur", function () {
                                c = t = !1;
                            }),
                            rn.addEventListener("resize", Et),
                            ln.addEventListener("keydown", ft),
                            ln.addEventListener("keyup", dt),
                            ["click", "touchstart"].forEach(function (e) {
                                ln.addEventListener(e, we);
                            }),
                            g.normalScrollElements &&
                                (["mouseenter", "touchstart"].forEach(function (e) {
                                    ye(e, !1);
                                }),
                                ["mouseleave", "touchend"].forEach(function (e) {
                                    ye(e, !0);
                                })),
                            Qt("dragAndMove", "turnOffTouch"));
                    var Q = !1,
                        _ = 0,
                        J = 0,
                        K = 0,
                        $ = 0,
                        q = new Date().getTime(),
                        ee = 0,
                        te = 0,
                        ne = y;
                    return S;
                }
                function oe(e, t) {
                    e || Zt(0), Kt("autoScrolling", e, t);
                    var n = Zn(bn)[0];
                    if (g.autoScrolling && !g.scrollBar) Qn(r, { overflow: "hidden", height: "100%" }), re(Y.recordHistory, "internal"), Qn(w, { "-ms-touch-action": "none", "touch-action": "none" }), null != n && Zt(n.offsetTop);
                    else if ((Qn(r, { overflow: "visible", height: "initial" }), re(!!g.autoScrolling && Y.recordHistory, "internal"), Qn(w, { "-ms-touch-action": "", "touch-action": "" }), Ft(w), null != n)) {
                        var o = Fe(n.offsetTop);
                        o.element.scrollTo(0, o.options);
                    }
                    So(w, "setAutoScrolling", e);
                }
                function re(e, t) {
                    Kt("recordHistory", e, t);
                }
                function ie(e, t) {
                    "internal" !== t && Ut("fadingEffect") && S.fadingEffect.update(e), Ut("cards") && S.cards.update(e), Kt("scrollingSpeed", e, t);
                }
                function le(e, t) {
                    Kt("fitToSection", e, t);
                }
                function ae(e) {
                    e
                        ? ((function () {
                              var e,
                                  t = "";
                              rn.addEventListener ? (e = "addEventListener") : ((e = "attachEvent"), (t = "on"));
                              var n = "onwheel" in ln.createElement("div") ? "wheel" : void 0 !== ln.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                                  o = !!j && { passive: !1 };
                              "DOMMouseScroll" == n ? ln[e](t + "MozMousePixelScroll", Pe, o) : ln[e](t + n, Pe, o);
                          })(),
                          w.addEventListener("mousedown", vt),
                          w.addEventListener("mouseup", pt))
                        : (ln.addEventListener ? (ln.removeEventListener("mousewheel", Pe, !1), ln.removeEventListener("wheel", Pe, !1), ln.removeEventListener("MozMousePixelScroll", Pe, !1)) : ln.detachEvent("onmousewheel", Pe),
                          w.removeEventListener("mousedown", vt),
                          w.removeEventListener("mouseup", pt));
                }
                function se(t, e) {
                    void 0 !== e
                        ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                              Gt(t, e, "m");
                          })
                        : Gt(t, "all", "m"),
                        So(w, "setAllowScrolling", { value: t, directions: e });
                }
                function ce(e) {
                    e
                        ? (ae(!0),
                          (function () {
                              if (i || u) {
                                  g.autoScrolling && (m.removeEventListener(I.touchmove, Ie, { passive: !1 }), m.addEventListener(I.touchmove, Ie, { passive: !1 }));
                                  var e = g.touchWrapper;
                                  e.removeEventListener(I.touchstart, Ne), e.removeEventListener(I.touchmove, ze, { passive: !1 }), e.addEventListener(I.touchstart, Ne), e.addEventListener(I.touchmove, ze, { passive: !1 });
                              }
                          })())
                        : (ae(!1),
                          (function () {
                              if (i || u) {
                                  g.autoScrolling && (m.removeEventListener(I.touchmove, ze, { passive: !1 }), m.removeEventListener(I.touchmove, Ie, { passive: !1 }));
                                  var e = g.touchWrapper;
                                  e.removeEventListener(I.touchstart, Ne), e.removeEventListener(I.touchmove, ze, { passive: !1 });
                              }
                          })());
                }
                function ue(t, e) {
                    void 0 !== e
                        ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                              Gt(t, e, "k");
                          })
                        : (Gt(t, "all", "k"), (g.keyboardScrolling = t));
                }
                function fe() {
                    var e = _n(Zn(bn)[0], Sn);
                    e || (!g.loopTop && !g.continuousVertical) || (e = qn(Zn(Sn))), null != e && Ve(e, null, !0);
                }
                function de() {
                    var e = Jn(Zn(bn)[0], Sn);
                    e || (!g.loopBottom && !g.continuousVertical) || (e = Zn(Sn)[0]), null != e && Ve(e, null, !1);
                }
                function ve(e, t) {
                    ie(0, "internal"), pe(e, t), ie(Y.scrollingSpeed, "internal");
                }
                function pe(e, t) {
                    var n = It(e);
                    void 0 !== t ? zt(e, t) : null != n && Ve(n);
                }
                function he(e) {
                    We("right", e);
                }
                function ge(e) {
                    We("left", e);
                }
                function me(e) {
                    if (!Gn(w, fn)) {
                        (E = !0), (y = Fn()), (f = Un());
                        for (var t = Zn(Sn), n = 0; n < t.length; ++n) {
                            var o = t[n],
                                r = Zn(Hn, o)[0],
                                i = Zn(On, o);
                            g.verticalCentered && Qn(Zn(yn, o), { height: Ht(o) + "px" }), Qn(o, { height: Me(o) + "px" }), 1 < i.length && St(r, Zn(kn, r)[0]);
                        }
                        g.scrollOverflow && p.createScrollBarForAll();
                        var l = eo(Zn(bn)[0], Sn);
                        l && !Ut("fadingEffect") && ve(l + 1), (E = !1), mo(g.afterResize) && e && g.afterResize.call(w, rn.innerWidth, rn.innerHeight), mo(g.afterReBuild) && !e && g.afterReBuild.call(w), So(w, "afterRebuild");
                    }
                }
                function Se() {
                    return Gn(m, cn);
                }
                function be(e) {
                    var t = Se();
                    e
                        ? t ||
                          (oe(!1, "internal"),
                          le(!1, "internal"),
                          to(Zn(Ln)),
                          ro(m, cn),
                          mo(g.afterResponsive) && g.afterResponsive.call(w, e),
                          Qt("responsiveSlides", "toSections"),
                          So(w, "afterResponsive", e),
                          g.scrollOverflow && p.createScrollBarForAll())
                        : t &&
                          (oe(Y.autoScrolling, "internal"), le(Y.autoScrolling, "internal"), no(Zn(Ln)), io(m, cn), mo(g.afterResponsive) && g.afterResponsive.call(w, e), Qt("responsiveSlides", "toSlides"), So(w, "afterResponsive", e));
                }
                function we(e) {
                    var t = e.target;
                    t && uo(t, Ln + " a")
                        ? function (e) {
                              go(e);
                              var t = eo(uo(this, Ln + " li"));
                              Ve(Zn(Sn)[t]);
                          }.call(t, e)
                        : bo(t, ".fp-tooltip")
                        ? function () {
                              So(Kn(this), "click");
                          }.call(t)
                        : bo(t, Pn)
                        ? function () {
                              var e = uo(this, Sn);
                              Gn(this, Wn) ? v.m.left && ge(e) : v.m.right && he(e);
                          }.call(t, e)
                        : bo(t, jn) || null != uo(t, jn)
                        ? function (e) {
                              go(e);
                              var t = Zn(Hn, uo(this, Sn))[0];
                              St(t, Zn(On, t)[eo(uo(this, "li"))]);
                          }.call(t, e)
                        : uo(t, g.menu + " [data-menuanchor]") &&
                          function (e) {
                              !Zn(g.menu)[0] || (!g.lockAnchors && g.anchors.length) || (go(e), pe(this.getAttribute("data-menuanchor")));
                          }.call(t, e);
                }
                function ye(e, t) {
                    (ln["fp_" + e] = t), ln.addEventListener(e, Ee, !0);
                }
                function Ee(e) {
                    var t = e.type,
                        o = !1,
                        r = g.scrollOverflow,
                        i = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
                    if (i == ln || !i) return ce(!0), void (r && g.scrollOverflowHandler.setIscroll(i, !0));
                    "touchend" === t &&
                        ((Z = !1),
                        setTimeout(function () {
                            Z = !0;
                        }, 800)),
                        ("mouseenter" !== t || Z) &&
                            (g.normalScrollElements.split(",").forEach(function (e) {
                                if (!o) {
                                    var t = bo(i, e),
                                        n = uo(i, e);
                                    (t || n) && (S.shared.isNormalScrollElement || (ce(!1), r && g.scrollOverflowHandler.setIscroll(i, !1)), (S.shared.isNormalScrollElement = !0), (o = !0));
                                }
                            }),
                            !o && S.shared.isNormalScrollElement && (ce(!0), r && g.scrollOverflowHandler.setIscroll(i, !0), (S.shared.isNormalScrollElement = !1)));
                }
                function xe() {
                    var e = Fn(),
                        t = Un();
                    (y === e && f === t) || ((y = e), (f = t), me(!0));
                }
                function Ae(e) {
                    var t = "fp_" + e + "Extension";
                    (X[e] = g[e + "Key"]), (S[e] = void 0 !== rn[t] ? new rn[t]() : null), S[e] && S[e].c(e);
                }
                function Le(e, t, n) {
                    var o = 100 * n,
                        r = 100 / n,
                        i = ln.createElement("div");
                    (i.className = Cn), ao(t, i);
                    var l,
                        a,
                        s = ln.createElement("div");
                    (s.className = Rn),
                        ao(t, s),
                        Qn(Zn(In, e), { width: o + "%" }),
                        1 < n &&
                            (g.controlArrows &&
                                ((l = e),
                                (a = [yo('<div class="fp-controlArrow fp-prev"></div>'), yo('<div class="fp-controlArrow fp-next"></div>')]),
                                fo(Zn(Hn, l)[0], a),
                                "#fff" !== g.controlArrowColor &&
                                    (Qn(Zn(Yn, l), { "border-color": "transparent transparent transparent " + g.controlArrowColor }), Qn(Zn(Dn, l), { "border-color": "transparent " + g.controlArrowColor + " transparent transparent" })),
                                g.loopHorizontal || to(Zn(Dn, l))),
                            g.slidesNavigation &&
                                (function (e, t) {
                                    lo(yo('<div class="' + Bn + '"><ul></ul></div>'), e);
                                    var n = Zn(Nn, e)[0];
                                    ro(n, "fp-" + g.slidesNavPosition);
                                    for (var o = 0; o < t; o++) lo(yo('<li><a href="#"><span class="fp-sr-only">' + Oe(o, "Slide") + "</span><span></span></a></li>"), Zn("ul", n)[0]);
                                    Qn(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), ro(Zn("a", Zn("li", n)[0]), pn);
                                })(e, n)),
                        t.forEach(function (e) {
                            Qn(e, { width: r + "%" }), g.verticalCentered && Ct(e);
                        });
                    var c = Zn(kn, e)[0];
                    null != c && (0 !== eo(Zn(bn), Sn) || (0 === eo(Zn(bn), Sn) && 0 !== eo(c))) ? (Vt(c, "internal"), ro(c, "fp-initial")) : ro(t[0], pn);
                }
                function Me(e) {
                    return g.offsetSections && S.offsetSections ? Math.round(S.offsetSections.getWindowHeight(e)) : Fn();
                }
                function Te(e, t) {
                    t || null != Zn(bn)[0] || ro(e, pn),
                        (o = Zn(bn)[0]),
                        Qn(e, { height: Me(e) + "px" }),
                        g.paddingTop && Qn(e, { "padding-top": g.paddingTop }),
                        g.paddingBottom && Qn(e, { "padding-bottom": g.paddingBottom }),
                        void 0 !== g.sectionsColor[t] && Qn(e, { "background-color": g.sectionsColor[t] }),
                        void 0 !== g.anchors[t] && e.setAttribute("data-anchor", g.anchors[t]);
                }
                function Oe(e, t) {
                    return g.navigationTooltips[e] || g.anchors[e] || t + " " + (e + 1);
                }
                function ke() {
                    var e,
                        t,
                        n = Zn(bn)[0];
                    ro(n, gn),
                        Je(n),
                        _e(),
                        $e(n),
                        g.scrollOverflow && g.scrollOverflowHandler.afterLoad(),
                        (t = It((e = ut()).section)),
                        (e.section && t && (void 0 === t || eo(t) !== eo(o))) || !mo(g.afterLoad) || Ze("afterLoad", { activeSection: n, element: n, direction: null, anchorLink: n.getAttribute("data-anchor"), sectionIndex: eo(n, Sn) }),
                        mo(g.afterRender) && Ze("afterRender"),
                        So(w, "afterRender");
                }
                function Ce() {
                    var e;
                    if ((So(w, "onScroll"), (!g.autoScrolling || g.scrollBar || Ut("dragAndMove")) && !Jt())) {
                        var t = Ut("dragAndMove") ? Math.abs(S.dragAndMove.getCurrentScroll()) : po(),
                            n = 0,
                            o = t + Fn() / 2,
                            r = (Ut("dragAndMove") ? S.dragAndMove.getDocumentHeight() : m.offsetHeight - Fn()) === t,
                            i = Zn(Sn);
                        if (r) n = i.length - 1;
                        else if (t) for (var l = 0; l < i.length; ++l) i[l].offsetTop <= o && (n = l);
                        else n = 0;
                        if (!Gn((e = i[n]), pn)) {
                            Q = !0;
                            var a,
                                s,
                                c = Zn(bn)[0],
                                u = eo(c, Sn) + 1,
                                f = Ot(e),
                                d = e.getAttribute("data-anchor"),
                                v = eo(e, Sn) + 1,
                                p = Zn(kn, e)[0],
                                h = { activeSection: c, sectionIndex: v - 1, anchorLink: d, element: e, leavingSection: u, direction: f };
                            p && ((s = p.getAttribute("data-anchor")), (a = eo(p))),
                                x &&
                                    (ro(e, pn),
                                    io(ho(e), pn),
                                    Qt("parallax", "afterLoad"),
                                    mo(g.onLeave) && Ze("onLeave", h),
                                    mo(g.afterLoad) && Ze("afterLoad", h),
                                    Ut("resetSliders") && S.resetSliders.apply({ localIsResizing: E, leavingSection: u }),
                                    et(c),
                                    Je(e),
                                    $e(e),
                                    Tt(d, v - 1),
                                    g.anchors.length && (b = d),
                                    Nt(a, s, d)),
                                clearTimeout(T),
                                (T = setTimeout(function () {
                                    Q = !1;
                                }, 100));
                        }
                        g.fitToSection &&
                            (clearTimeout(O),
                            (O = setTimeout(function () {
                                g.fitToSection && Zn(bn)[0].offsetHeight <= y && He();
                            }, g.fitToSectionDelay)));
                    }
                }
                function He() {
                    x && ((E = !0), Ve(Zn(bn)[0]), (E = !1));
                }
                function Re(e) {
                    if (v.m[e]) {
                        var t = "down" === e ? de : fe;
                        if ((Ut("scrollHorizontally") && (t = S.scrollHorizontally.getScrollSection(e, t)), g.scrollOverflow)) {
                            var n = g.scrollOverflowHandler.scrollable(Zn(bn)[0]),
                                o = "down" === e ? "bottom" : "top";
                            if (null != n) {
                                if (!g.scrollOverflowHandler.isScrolled(o, n)) return !0;
                                t();
                            } else t();
                        } else t();
                    }
                }
                function Ie(e) {
                    g.autoScrolling && Be(e) && v.m.up && go(e);
                }
                function ze(e) {
                    var t = uo(e.target, Sn) || Zn(bn)[0];
                    if (Be(e)) {
                        g.autoScrolling && go(e);
                        var n = Yt(e);
                        (K = n.y),
                            ($ = n.x),
                            Zn(Hn, t).length && Math.abs(J - $) > Math.abs(_ - K)
                                ? !a && Math.abs(J - $) > (Un() / 100) * g.touchSensitivity && ($ < J ? v.m.right && he(t) : v.m.left && ge(t))
                                : g.autoScrolling && x && Math.abs(_ - K) > (rn.innerHeight / 100) * g.touchSensitivity && (K < _ ? Re("down") : _ < K && Re("up"));
                    }
                }
                function Be(e) {
                    return void 0 === e.pointerType || "mouse" != e.pointerType;
                }
                function Ne(e) {
                    if ((g.fitToSection && (W = !1), Be(e))) {
                        var t = Yt(e);
                        (_ = t.y), (J = t.x);
                    }
                }
                function je(e, t) {
                    for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                    return Math.ceil(n / t);
                }
                function Pe(e) {
                    var t = new Date().getTime(),
                        n = Gn(Zn(".fp-completely")[0], xn);
                    if (!v.m.down && !v.m.up) return go(e), !1;
                    if (g.autoScrolling && !c && !n) {
                        var o = (e = e || rn.event).wheelDelta || -e.deltaY || -e.detail,
                            r = Math.max(-1, Math.min(1, o)),
                            i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                            l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
                        149 < d.length && d.shift(), d.push(Math.abs(o)), g.scrollBar && go(e);
                        var a = t - q;
                        if (((q = t), 200 < a && (d = []), x && !_t())) {
                            var s = je(d, 10);
                            je(d, 70) <= s && l && Re(r < 0 ? "down" : "up");
                        }
                        return !1;
                    }
                    g.fitToSection && (W = !1);
                }
                function We(e, t) {
                    var n = null == t ? Zn(bn)[0] : t,
                        o = Zn(Hn, n)[0];
                    if (!(null == o || _t() || a || Zn(On, o).length < 2)) {
                        var r = Zn(kn, o)[0],
                            i = null;
                        if (null == (i = "left" === e ? _n(r, On) : Jn(r, On))) {
                            if (!g.loopHorizontal) return;
                            var l = ho(r);
                            i = "left" === e ? l[l.length - 1] : l[0];
                        }
                        (a = !S.test.isTesting), St(o, i, e);
                    }
                }
                function De() {
                    for (var e = Zn(kn), t = 0; t < e.length; t++) Vt(e[t], "internal");
                }
                function Ye(e) {
                    var t = e.offsetHeight,
                        n = e.offsetTop,
                        o = n,
                        r = Ut("dragAndMove") && S.dragAndMove.isGrabbing ? S.dragAndMove.isScrollingDown() : ee < n,
                        i = o - y + t,
                        l = g.bigSectionsDestination;
                    return y < t ? ((r || l) && "bottom" !== l) || (o = i) : (r || (E && null == $n(e))) && (o = i), g.offsetSections && S.offsetSections && (o = S.offsetSections.getSectionPosition(r, o, e)), (ee = o);
                }
                function Ve(e, t, n) {
                    if (null != e) {
                        var o,
                            r,
                            i = {
                                element: e,
                                callback: t,
                                isMovementUp: n,
                                dtop: Ye(e),
                                yMovement: Ot(e),
                                anchorLink: e.getAttribute("data-anchor"),
                                sectionIndex: eo(e, Sn),
                                activeSlide: Zn(kn, e)[0],
                                activeSection: Zn(bn)[0],
                                leavingSection: eo(Zn(bn), Sn) + 1,
                                localIsResizing: E,
                            };
                        if (!((i.activeSection == e && !E) || (g.scrollBar && po() === i.dtop && !Gn(e, En)))) {
                            if ((null != i.activeSlide && ((o = i.activeSlide.getAttribute("data-anchor")), (r = eo(i.activeSlide))), !i.localIsResizing)) {
                                var l = i.yMovement;
                                if ((void 0 !== n && (l = n ? "up" : "down"), (i.direction = l), mo(g.onLeave) && !1 === Ze("onLeave", i))) return;
                            }
                            var a;
                            Qt("parallax", "apply", i),
                                Qt("cards", "apply", i),
                                g.autoScrolling &&
                                    g.continuousVertical &&
                                    void 0 !== i.isMovementUp &&
                                    ((!i.isMovementUp && "up" == i.yMovement) || (i.isMovementUp && "down" == i.yMovement)) &&
                                    ((s = i).isMovementUp ? vo(Zn(bn)[0], xo(s.activeSection, Sn)) : fo(Zn(bn)[0], Ao(s.activeSection, Sn).reverse()),
                                    Zt(Zn(bn)[0].offsetTop),
                                    De(),
                                    (s.wrapAroundElements = s.activeSection),
                                    (s.dtop = s.element.offsetTop),
                                    (s.yMovement = Ot(s.element)),
                                    (s.leavingSection = eo(s.activeSection, Sn) + 1),
                                    (s.sectionIndex = eo(s.element, Sn)),
                                    So(Zn(sn)[0], "onContinuousVertical", s),
                                    (i = s)),
                                Ut("scrollOverflowReset") && S.scrollOverflowReset.setPrevious(i.activeSection),
                                i.localIsResizing || et(i.activeSection),
                                g.scrollOverflow && g.scrollOverflowHandler.beforeLeave(),
                                ro(e, pn),
                                io(ho(e), pn),
                                Je(e),
                                g.scrollOverflow && g.scrollOverflowHandler.onLeave(),
                                (x = S.test.isTesting),
                                Nt(r, o, i.anchorLink, i.sectionIndex),
                                (function (e) {
                                    if (g.css3 && g.autoScrolling && !g.scrollBar) {
                                        Rt("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0),
                                            g.scrollingSpeed
                                                ? (clearTimeout(L),
                                                  (L = setTimeout(function () {
                                                      Ue(e);
                                                  }, g.scrollingSpeed)))
                                                : Ue(e);
                                    } else {
                                        var n = Fe(e.dtop);
                                        (S.test.top = -e.dtop + "px"),
                                            qt(n.element, n.options, g.scrollingSpeed, function () {
                                                g.scrollBar
                                                    ? setTimeout(function () {
                                                          Ue(e);
                                                      }, 30)
                                                    : Ue(e);
                                            });
                                    }
                                })(i),
                                (b = i.anchorLink),
                                Tt(i.anchorLink, null == (a = i).wrapAroundElements ? a.sectionIndex : a.isMovementUp ? Zn(Sn).length - 1 : 0);
                        }
                    }
                    var s;
                }
                function Ze(e, t) {
                    var n,
                        o,
                        r,
                        i,
                        l =
                            ((o = e),
                            (r = t),
                            (i = g.v2compatible
                                ? {
                                      afterRender: function () {
                                          return [w];
                                      },
                                      onLeave: function () {
                                          return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction];
                                      },
                                      afterLoad: function () {
                                          return [r.element, r.anchorLink, r.sectionIndex + 1];
                                      },
                                      afterSlideLoad: function () {
                                          return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex];
                                      },
                                      onSlideLeave: function () {
                                          return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex];
                                      },
                                  }
                                : {
                                      afterRender: function () {
                                          return { section: Xe(Zn(bn)[0]), slide: Ge(Zn(kn, Zn(bn)[0])[0]) };
                                      },
                                      onLeave: function () {
                                          return { origin: Xe(r.activeSection), destination: Xe(r.element), direction: r.direction };
                                      },
                                      afterLoad: function () {
                                          return i.onLeave();
                                      },
                                      afterSlideLoad: function () {
                                          return { section: Xe(r.section), origin: Ge(r.prevSlide), destination: Ge(r.destiny), direction: r.direction };
                                      },
                                      onSlideLeave: function () {
                                          return i.afterSlideLoad();
                                      },
                                  })[o]());
                    if (g.v2compatible) {
                        if (!1 === g[e].apply(l[0], l.slice(1))) return !1;
                    } else if (
                        (So(w, e, l),
                        !1 ===
                            g[e].apply(
                                l[Object.keys(l)[0]],
                                ((n = l),
                                Object.keys(n).map(function (e) {
                                    return n[e];
                                }))
                            ))
                    )
                        return !1;
                    return !0;
                }
                function Xe(e) {
                    return e ? new nn(e) : null;
                }
                function Ge(e) {
                    return e
                        ? new (function (e) {
                              tn.call(this, e, On);
                          })(e)
                        : null;
                }
                function Fe(e) {
                    var t = {};
                    return g.autoScrolling && !g.scrollBar ? ((t.options = -e), (t.element = Zn(sn)[0])) : ((t.options = e), (t.element = rn)), t;
                }
                function Ue(e) {
                    var t;
                    null != (t = e).wrapAroundElements &&
                        (t.isMovementUp ? vo(Zn(Sn)[0], t.wrapAroundElements) : fo(Zn(Sn)[Zn(Sn).length - 1], t.wrapAroundElements),
                        Zt(Zn(bn)[0].offsetTop),
                        De(),
                        (t.sectionIndex = eo(t.element, Sn)),
                        (t.leavingSection = eo(t.activeSection, Sn) + 1)),
                        mo(g.afterLoad) && !e.localIsResizing && Ze("afterLoad", e),
                        g.scrollOverflow && g.scrollOverflowHandler.afterLoad(),
                        Qt("parallax", "afterLoad"),
                        Qt("scrollOverflowReset", "reset"),
                        Ut("resetSliders") && S.resetSliders.apply(e),
                        e.localIsResizing || $e(e.element),
                        ro(e.element, gn),
                        io(ho(e.element), gn),
                        _e(),
                        (x = !0),
                        mo(e.callback) && e.callback();
                }
                function Qe(e, t) {
                    e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t);
                }
                function _e() {
                    var e = Zn(".fp-auto-height")[0] || (Se() && Zn(".fp-auto-height-responsive")[0]);
                    g.lazyLoading &&
                        e &&
                        Zn(Sn + ":not(" + hn + ")").forEach(function (e) {
                            var t, n, o;
                            (n = (t = e.getBoundingClientRect()).top), (o = t.bottom), ((n + 2 < y && 0 < n) || (2 < o && o < y)) && Je(e);
                        });
                }
                function Je(o) {
                    g.lazyLoading &&
                        Zn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", tt(o)).forEach(function (n) {
                            if (
                                (["src", "srcset"].forEach(function (e) {
                                    var t = n.getAttribute("data-" + e);
                                    null != t &&
                                        t &&
                                        (Qe(n, e),
                                        n.addEventListener("load", function () {
                                            Ke(o);
                                        }));
                                }),
                                bo(n, "source"))
                            ) {
                                var e = uo(n, "video, audio");
                                e &&
                                    (e.load(),
                                    (e.onloadeddata = function () {
                                        Ke(o);
                                    }));
                            }
                        });
                }
                function Ke(e) {
                    g.scrollOverflow &&
                        (clearTimeout(D),
                        (D = setTimeout(function () {
                            p.createScrollBar(e);
                        }, 200)));
                }
                function $e(e) {
                    var t = tt(e);
                    Zn("video, audio", t).forEach(function (e) {
                        e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play();
                    }),
                        Zn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                            e.hasAttribute("data-autoplay") && qe(e),
                                (e.onload = function () {
                                    e.hasAttribute("data-autoplay") && qe(e);
                                });
                        });
                }
                function qe(e) {
                    e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                }
                function et(e) {
                    var t = tt(e);
                    Zn("video, audio", t).forEach(function (e) {
                        e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause();
                    }),
                        Zn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                            /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                        });
                }
                function tt(e) {
                    var t = Zn(kn, e);
                    return t.length && (e = t[0]), e;
                }
                function nt(e) {
                    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    function o(e) {
                        var t,
                            n,
                            o,
                            r,
                            i,
                            l,
                            a = "",
                            s = 0;
                        for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length; )
                            (t = (c.indexOf(e.charAt(s++)) << 2) | ((r = c.indexOf(e.charAt(s++))) >> 4)),
                                (n = ((15 & r) << 4) | ((i = c.indexOf(e.charAt(s++))) >> 2)),
                                (o = ((3 & i) << 6) | (l = c.indexOf(e.charAt(s++)))),
                                (a += String.fromCharCode(t)),
                                64 != i && (a += String.fromCharCode(n)),
                                64 != l && (a += String.fromCharCode(o));
                        return (function (e) {
                            for (var t, n = "", o = 0, r = 0, i = 0; o < e.length; )
                                (r = e.charCodeAt(o)) < 128
                                    ? ((n += String.fromCharCode(r)), o++)
                                    : 191 < r && r < 224
                                    ? ((i = e.charCodeAt(o + 1)), (n += String.fromCharCode(((31 & r) << 6) | (63 & i))), (o += 2))
                                    : ((i = e.charCodeAt(o + 1)), (t = e.charCodeAt(o + 2)), (n += String.fromCharCode(((15 & r) << 12) | ((63 & i) << 6) | (63 & t))), (o += 3));
                            return n;
                        })(a);
                    }
                    function r(e) {
                        return e.slice(3).slice(0, -3);
                    }
                    return (function (e) {
                        var t = e.split("_");
                        if (1 < t.length) {
                            var n = t[1];
                            return e.replace(r(t[1]), "").split("_")[0] + "_" + o(n.slice(3).slice(0, -3));
                        }
                        return r(e);
                    })(o(e));
                }
                function lt(e) {}
                function st() {
                    var e = ut(),
                        t = e.section,
                        n = e.slide;
                    t && (g.animateAnchor ? zt(t, n) : ve(t, n));
                }
                function ct() {
                    if (!Q && !g.lockAnchors) {
                        var e = ut(),
                            t = e.section,
                            n = e.slide,
                            o = void 0 === b,
                            r = void 0 === b && void 0 === n && !a;
                        if (t && t.length) {
                            var i = !Ut("dragAndMove") || l;
                            ((t && t !== b && !o) || r || (!a && l != n && i)) && zt(t, n);
                        }
                    }
                }
                function ut() {
                    var e,
                        t,
                        n = rn.location.hash;
                    if (n.length) {
                        var o = n.replace("#", "").split("/"),
                            r = -1 < n.indexOf("#/");
                        e = r ? "/" + o[1] : decodeURIComponent(o[0]);
                        var i = r ? o[2] : o[1];
                        i && i.length && (t = decodeURIComponent(i));
                    }
                    return { section: e, slide: t };
                }
                function ft(e) {
                    clearTimeout(k);
                    var t = ln.activeElement,
                        n = e.keyCode;
                    9 === n
                        ? (function (e) {
                              var t,
                                  n,
                                  o,
                                  i,
                                  l,
                                  a,
                                  s = e.shiftKey,
                                  c = ln.activeElement,
                                  u = ht(tt(Zn(bn)[0]));
                              function f(e) {
                                  return go(e), u[0] ? u[0].focus() : null;
                              }
                              (t = e),
                                  (o = (n = ht(ln)).indexOf(ln.activeElement)),
                                  (l = Ge(uo((i = n[t.shiftKey ? o - 1 : o + 1]), On))),
                                  (a = Xe(uo(i, Sn))),
                                  (l || a) && (c ? null == uo(c, bn + "," + bn + " " + kn) && (c = f(e)) : f(e), ((!s && c == u[u.length - 1]) || (s && c == u[0])) && go(e));
                          })(e)
                        : bo(t, "textarea") ||
                          bo(t, "input") ||
                          bo(t, "select") ||
                          "true" === t.getAttribute("contentEditable") ||
                          "" === t.getAttribute("contentEditable") ||
                          !g.keyboardScrolling ||
                          !g.autoScrolling ||
                          (-1 < [40, 38, 32, 33, 34].indexOf(n) && go(e),
                          (c = e.ctrlKey),
                          (k = setTimeout(function () {
                              !(function (e) {
                                  var t = e.shiftKey,
                                      n = ln.activeElement,
                                      o = bo(n, "video") || bo(n, "audio");
                                  if (x || !([37, 39].indexOf(e.keyCode) < 0))
                                      switch (e.keyCode) {
                                          case 38:
                                          case 33:
                                              v.k.up && fe();
                                              break;
                                          case 32:
                                              if (t && v.k.up && !o) {
                                                  fe();
                                                  break;
                                              }
                                          case 40:
                                          case 34:
                                              v.k.down && ((32 === e.keyCode && o) || de());
                                              break;
                                          case 36:
                                              v.k.up && pe(1);
                                              break;
                                          case 35:
                                              v.k.down && pe(Zn(Sn).length);
                                              break;
                                          case 37:
                                              v.k.left && ge();
                                              break;
                                          case 39:
                                              v.k.right && he();
                                      }
                              })(e);
                          }, 150)));
                }
                function dt(e) {
                    t && (c = e.ctrlKey);
                }
                function vt(e) {
                    2 == e.which && ((te = e.pageY), w.addEventListener("mousemove", mt));
                }
                function pt(e) {
                    2 == e.which && w.removeEventListener("mousemove", mt);
                }
                function ht(e) {
                    return [].slice.call(Zn(N, e)).filter(function (e) {
                        return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent;
                    });
                }
                function mt(e) {
                    g.autoScrolling && (x && (e.pageY < te && v.m.up ? fe() : e.pageY > te && v.m.down && de()), (te = e.pageY));
                }
                function St(e, t, n) {
                    var o = uo(e, Sn),
                        r = {
                            slides: e,
                            destiny: t,
                            direction: n,
                            destinyPos: { left: t.offsetLeft },
                            slideIndex: eo(t),
                            section: o,
                            sectionIndex: eo(o, Sn),
                            anchorLink: o.getAttribute("data-anchor"),
                            slidesNav: Zn(Nn, o)[0],
                            slideAnchor: Pt(t),
                            prevSlide: Zn(kn, o)[0],
                            prevSlideIndex: eo(Zn(kn, o)[0]),
                            localIsResizing: E,
                        };
                    (r.xMovement = kt(r.prevSlideIndex, r.slideIndex)),
                        (r.direction = r.direction ? r.direction : r.xMovement),
                        r.localIsResizing || (x = !1),
                        Qt("parallax", "applyHorizontal", r),
                        Qt("cards", "apply", r),
                        g.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && mo(g.onSlideLeave) && !1 === Ze("onSlideLeave", r)
                            ? (a = !1)
                            : (ro(t, pn),
                              io(ho(t), pn),
                              r.localIsResizing || (et(r.prevSlide), Je(t)),
                              bt(r),
                              Gn(o, pn) && !r.localIsResizing && Nt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
                              S.continuousHorizontal && S.continuousHorizontal.apply(r),
                              Jt() ? wt(r) : yt(e, r, !0),
                              g.interlockedSlides && S.interlockedSlides && ((Ut("continuousHorizontal") && void 0 !== n && n !== r.xMovement) || S.interlockedSlides.apply(r)));
                }
                function bt(e) {
                    !g.loopHorizontal && g.controlArrows && (wo(Zn(Dn, e.section), 0 !== e.slideIndex), wo(Zn(Yn, e.section), null != $n(e.destiny)));
                }
                function wt(e) {
                    var t, n;
                    S.continuousHorizontal && S.continuousHorizontal.afterSlideLoads(e),
                        (t = e.slidesNav),
                        (n = e.slideIndex),
                        g.slidesNavigation && null != t && (io(Zn(hn, t), pn), ro(Zn("a", Zn("li", t)[n]), pn)),
                        e.localIsResizing ||
                            (Qt("parallax", "afterSlideLoads"), Qt("scrollOverflowReset", "setPrevious", e.prevSlide), Qt("scrollOverflowReset", "reset"), mo(g.afterSlideLoad) && Ze("afterSlideLoad", e), (x = !0), $e(e.destiny)),
                        (a = !1),
                        Ut("interlockedSlides") && S.interlockedSlides.apply(e);
                }
                function yt(e, t, n) {
                    var o = t.destinyPos;
                    if (g.css3) {
                        var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                        (S.test.translate3dH[t.sectionIndex] = r),
                            Qn(Lt(Zn(In, e)), Xt(r)),
                            (M = setTimeout(function () {
                                n && wt(t);
                            }, g.scrollingSpeed));
                    } else
                        (S.test.left[t.sectionIndex] = Math.round(o.left)),
                            qt(e, Math.round(o.left), g.scrollingSpeed, function () {
                                n && wt(t);
                            });
                }
                function Et() {
                    clearTimeout(h),
                        (h = setTimeout(function () {
                            for (var e = 0; e < 4; e++) A = setTimeout(xt, 200 * e);
                        }, 200));
                }
                function xt() {
                    if ((So(w, "onResize"), At(), i)) {
                        var e = ln.activeElement;
                        if (!bo(e, "textarea") && !bo(e, "input") && !bo(e, "select")) {
                            var t = Fn();
                            Math.abs(t - ne) > (20 * Math.max(ne, t)) / 100 && (me(!0), (ne = t));
                        }
                    } else xe();
                }
                function At() {
                    var e = g.responsive || g.responsiveWidth,
                        t = g.responsiveHeight,
                        n = e && rn.innerWidth < e,
                        o = t && rn.innerHeight < t;
                    e && t ? be(n || o) : e ? be(n) : t && be(o);
                }
                function Lt(e) {
                    var t = "all " + g.scrollingSpeed + "ms " + g.easingcss3;
                    return io(e, un), Qn(e, { "-webkit-transition": t, transition: t });
                }
                function Mt(e) {
                    return ro(e, un);
                }
                function Tt(e, t) {
                    var n, o, r, i;
                    (n = e),
                        Zn(g.menu).forEach(function (e) {
                            g.menu && null != e && (io(Zn(hn, e), pn), ro(Zn('[data-menuanchor="' + n + '"]', e), pn));
                        }),
                        (o = e),
                        (r = t),
                        (i = Zn(Ln)[0]),
                        g.navigation && null != i && "none" !== i.style.display && (io(Zn(hn, Zn(Ln)[0]), pn), ro(o ? Zn('a[href="#' + o + '"]', Zn(Ln)[0]) : Zn("a", Zn("li", Zn(Ln)[0])[r]), pn));
                }
                function Ot(e) {
                    var t = eo(Zn(bn)[0], Sn),
                        n = eo(e, Sn);
                    return t == n ? "none" : n < t ? "up" : "down";
                }
                function kt(e, t) {
                    return e == t ? "none" : t < e ? "left" : "right";
                }
                function Ct(e) {
                    if (!Gn(e, zn)) {
                        var t = ln.createElement("div");
                        (t.className = wn), (t.style.height = Ht(e) + "px"), ro(e, zn), so(e, t);
                    }
                }
                function Ht(e) {
                    var t = Me(e);
                    if (g.paddingTop || g.paddingBottom) {
                        var n = e;
                        Gn(n, mn) || (n = uo(e, Sn)), (t -= parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]));
                    }
                    return t;
                }
                function Rt(e, t) {
                    t ? Lt(w) : Mt(w),
                        clearTimeout(H),
                        Qn(w, Xt(e)),
                        (S.test.translate3d = e),
                        (H = setTimeout(function () {
                            io(w, un);
                        }, 10));
                }
                function It(e) {
                    var t = Zn(Sn + '[data-anchor="' + e + '"]', w)[0];
                    if (!t) {
                        var n = void 0 !== e ? e - 1 : 0;
                        t = Zn(Sn)[n];
                    }
                    return t;
                }
                function zt(e, t) {
                    var n = It(e);
                    if (null != n) {
                        var o,
                            r,
                            i,
                            l = (null == (i = Zn(On + '[data-anchor="' + (o = t) + '"]', (r = n))[0]) && ((o = void 0 !== o ? o : 0), (i = Zn(On, r)[o])), i);
                        Pt(n) === b || Gn(n, pn)
                            ? Bt(l)
                            : Ve(n, function () {
                                  Bt(l);
                              });
                    }
                }
                function Bt(e) {
                    null != e && St(uo(e, Hn), e);
                }
                function Nt(e, t, n, o) {
                    var r = "";
                    g.anchors.length && !g.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), jt(r + "/" + (l = t))) : (null != e && (l = t), jt(n))), Wt();
                }
                function jt(e) {
                    if (g.recordHistory) location.hash = e;
                    else if (i || u) rn.history.replaceState(void 0, void 0, "#" + e);
                    else {
                        var t = rn.location.href.split("#")[0];
                        rn.location.replace(t + "#" + e);
                    }
                }
                function Pt(e) {
                    if (!e) return null;
                    var t = e.getAttribute("data-anchor"),
                        n = eo(e);
                    return null == t && (t = n), t;
                }
                function Wt() {
                    var e = Zn(bn)[0],
                        t = Zn(kn, e)[0],
                        n = Pt(e),
                        o = Pt(t),
                        r = String(n);
                    t && (r = r + "-" + o), (r = r.replace("/", "-").replace("#", ""));
                    var i = new RegExp("\\b\\s?" + vn + "-[^\\s]+\\b", "g");
                    (m.className = m.className.replace(i, "")), ro(m, vn + "-" + r);
                }
                function Dt() {
                    return rn.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" };
                }
                function Yt(e) {
                    var t = [];
                    return (
                        (t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
                        (t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
                        u && Be(e) && g.scrollBar && void 0 !== e.touches && ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                        t
                    );
                }
                function Vt(e, t) {
                    ie(0, "internal"), void 0 !== t && (E = !0), St(uo(e, Hn), e), void 0 !== t && (E = !1), ie(Y.scrollingSpeed, "internal");
                }
                function Zt(e) {
                    var t = Math.round(e);
                    if (g.css3 && g.autoScrolling && !g.scrollBar) Rt("translate3d(0px, -" + t + "px, 0px)", !1);
                    else if (g.autoScrolling && !g.scrollBar) Qn(w, { top: -t + "px" }), (S.test.top = -t + "px");
                    else {
                        var n = Fe(t);
                        en(n.element, n.options);
                    }
                }
                function Xt(e) {
                    return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
                }
                function Gt(t, e, n) {
                    "all" !== e
                        ? (v[n][e] = t)
                        : Object.keys(v[n]).forEach(function (e) {
                              v[n][e] = t;
                          });
                }
                function Ft(e) {
                    return Qn(e, { "-webkit-transition": "none", transition: "none" });
                }
                function Ut(e) {
                    return null !== g[e] && "[object Array]" === Object.prototype.toString.call(g[e]) ? g[e].length && S[e] : g[e] && S[e];
                }
                function Qt(e, t, n) {
                    if (Ut(e)) return S[e][t](n);
                }
                function _t() {
                    return Ut("dragAndMove") && S.dragAndMove.isAnimating;
                }
                function Jt() {
                    return Ut("dragAndMove") && S.dragAndMove.isGrabbing;
                }
                function Kt(e, t, n) {
                    (g[e] = t), "internal" !== n && (Y[e] = t);
                }
                function $t() {
                    var e = g.licenseKey,
                        t = "font-size: 15px;background:yellow;";
                    n
                        ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t))
                        : (Vn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), Vn("error", "https://github.com/alvarotrigo/fullPage.js#options.")),
                        Gn(s, dn)
                            ? Vn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
                            : (g.continuousVertical && (g.loopTop || g.loopBottom) && ((g.continuousVertical = !1), Vn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                              !g.scrollOverflow ||
                                  (!g.scrollBar && g.autoScrolling) ||
                                  Vn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
                              !g.continuousVertical ||
                                  (!g.scrollBar && g.autoScrolling) ||
                                  ((g.continuousVertical = !1), Vn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                              g.scrollOverflow &&
                                  null == g.scrollOverflowHandler &&
                                  ((g.scrollOverflow = !1), Vn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                              g.anchors.forEach(function (t) {
                                  var e = [].slice.call(Zn("[name]")).filter(function (e) {
                                          return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase();
                                      }),
                                      n = [].slice.call(Zn("[id]")).filter(function (e) {
                                          return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase();
                                      });
                                  if (n.length || e.length) {
                                      Vn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                                      var o = n.length ? "id" : "name";
                                      (n.length || e.length) && Vn("error", '"' + t + '" is is being used by another element `' + o + "` property");
                                  }
                              }));
                }
                function qt(t, n, o, r) {
                    var e,
                        i = (e = t).self != rn && Gn(e, Cn) ? e.scrollLeft : !g.autoScrolling || g.scrollBar ? po() : e.offsetTop,
                        l = n - i,
                        a = 0;
                    W = !0;
                    var s = function () {
                        if (W) {
                            var e = n;
                            (a += 20), o && (e = rn.fp_easings[g.easing](a, i, l, o)), en(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r();
                        } else a < o && r();
                    };
                    s();
                }
                function en(e, t) {
                    !g.autoScrolling || g.scrollBar || (e.self != rn && Gn(e, Cn)) ? (e.self != rn && Gn(e, Cn) ? (e.scrollLeft = t) : e.scrollTo(0, t)) : (e.style.top = t + "px");
                }
                function tn(e, t) {
                    (this.anchor = e.getAttribute("data-anchor")), (this.item = e), (this.index = eo(e, t)), (this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1), (this.isFirst = !this.index);
                }
                function nn(e) {
                    tn.call(this, e, Sn);
                }
                $t();
            }
        );
    }),
    window.jQuery &&
        window.fullpage &&
        (function (t, n) {
            "use strict";
            t && n
                ? (t.fn.fullpage = function (e) {
                      (e = t.extend({}, e, { $: t })), new n(this[0], e);
                  })
                : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
        })(window.jQuery, window.fullpage),
    (function (global, factory) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = factory()) : "function" == typeof define && define.amd ? define(factory) : ((global = global || self).LazyLoad = factory());
    })(this, function () {
        "use strict";
        function _extends() {
            return (_extends =
                Object.assign ||
                function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }).apply(this, arguments);
        }
        var runningOnBrowser = "undefined" != typeof window,
            isBot = (runningOnBrowser && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window,
            supportsClassList = runningOnBrowser && "classList" in document.createElement("p"),
            isHiDpi = runningOnBrowser && window.devicePixelRatio > 1,
            defaultSettings = {
                elements_selector: "IMG",
                container: isBot || runningOnBrowser ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_bg_hidpi: "bg-hidpi",
                data_bg_multi: "bg-multi",
                data_bg_multi_hidpi: "bg-multi-hidpi",
                data_poster: "poster",
                class_applied: "applied",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                unobserve_completed: !0,
                unobserve_entered: !1,
                cancel_on_exit: !1,
                callback_enter: null,
                callback_exit: null,
                callback_applied: null,
                callback_loading: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                callback_cancel: null,
                use_native: !1,
            },
            getExtendedSettings = function (customSettings) {
                return _extends({}, defaultSettings, customSettings);
            },
            createInstance = function (classObj, options) {
                var event,
                    instance = new classObj(options);
                try {
                    event = new CustomEvent("LazyLoad::Initialized", { detail: { instance: instance } });
                } catch (err) {
                    (event = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: instance });
                }
                window.dispatchEvent(event);
            },
            getData = function (element, attribute) {
                return element.getAttribute("data-" + attribute);
            },
            setData = function (element, attribute, value) {
                var attrName = "data-" + attribute;
                null !== value ? element.setAttribute(attrName, value) : element.removeAttribute(attrName);
            },
            getStatus = function (element) {
                return getData(element, "ll-status");
            },
            setStatus = function (element, status) {
                return setData(element, "ll-status", status);
            },
            resetStatus = function (element) {
                return setStatus(element, null);
            },
            hasEmptyStatus = function (element) {
                return null === getStatus(element);
            },
            hasStatusNative = function (element) {
                return "native" === getStatus(element);
            },
            safeCallback = function (callback, arg1, arg2, arg3) {
                callback && (void 0 === arg3 ? (void 0 === arg2 ? callback(arg1) : callback(arg1, arg2)) : callback(arg1, arg2, arg3));
            },
            addClass = function (element, className) {
                supportsClassList ? element.classList.add(className) : (element.className += (element.className ? " " : "") + className);
            },
            removeClass = function (element, className) {
                supportsClassList
                    ? element.classList.remove(className)
                    : (element.className = element.className
                          .replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ")
                          .replace(/^\s+/, "")
                          .replace(/\s+$/, ""));
            },
            getTempImage = function (element) {
                return element.llTempImage;
            },
            unobserve = function (element, instance) {
                if (instance) {
                    var observer = instance._observer;
                    observer && observer.unobserve(element);
                }
            },
            updateLoadingCount = function (instance, delta) {
                instance && (instance.loadingCount += delta);
            },
            setToLoadCount = function (instance, value) {
                instance && (instance.toLoadCount = value);
            },
            getSourceTags = function (parentTag) {
                for (var childTag, sourceTags = [], i = 0; (childTag = parentTag.children[i]); i += 1) "SOURCE" === childTag.tagName && sourceTags.push(childTag);
                return sourceTags;
            },
            setAttributeIfValue = function (element, attrName, value) {
                value && element.setAttribute(attrName, value);
            },
            resetAttribute = function (element, attrName) {
                element.removeAttribute(attrName);
            },
            hasOriginalAttributes = function (element) {
                return !!element.llOriginalAttrs;
            },
            saveOriginalImageAttributes = function (element) {
                if (!hasOriginalAttributes(element)) {
                    var originalAttributes = {};
                    (originalAttributes.src = element.getAttribute("src")),
                        (originalAttributes.srcset = element.getAttribute("srcset")),
                        (originalAttributes.sizes = element.getAttribute("sizes")),
                        (element.llOriginalAttrs = originalAttributes);
                }
            },
            restoreOriginalImageAttributes = function (element) {
                if (hasOriginalAttributes(element)) {
                    var originalAttributes = element.llOriginalAttrs;
                    setAttributeIfValue(element, "src", originalAttributes.src), setAttributeIfValue(element, "srcset", originalAttributes.srcset), setAttributeIfValue(element, "sizes", originalAttributes.sizes);
                }
            },
            setImageAttributes = function (element, settings) {
                setAttributeIfValue(element, "sizes", getData(element, settings.data_sizes)),
                    setAttributeIfValue(element, "srcset", getData(element, settings.data_srcset)),
                    setAttributeIfValue(element, "src", getData(element, settings.data_src));
            },
            resetImageAttributes = function (element) {
                resetAttribute(element, "src"), resetAttribute(element, "srcset"), resetAttribute(element, "sizes");
            },
            forEachPictureSource = function (element, fn) {
                var parent = element.parentNode;
                parent && "PICTURE" === parent.tagName && getSourceTags(parent).forEach(fn);
            },
            forEachVideoSource = function (element, fn) {
                getSourceTags(element).forEach(fn);
            },
            setSourcesFunctions = {
                IMG: function (element, settings) {
                    forEachPictureSource(element, function (sourceTag) {
                        saveOriginalImageAttributes(sourceTag), setImageAttributes(sourceTag, settings);
                    }),
                        saveOriginalImageAttributes(element),
                        setImageAttributes(element, settings);
                },
                IFRAME: function (element, settings) {
                    setAttributeIfValue(element, "src", getData(element, settings.data_src));
                },
                VIDEO: function (element, settings) {
                    forEachVideoSource(element, function (sourceTag) {
                        setAttributeIfValue(sourceTag, "src", getData(sourceTag, settings.data_src));
                    }),
                        setAttributeIfValue(element, "poster", getData(element, settings.data_poster)),
                        setAttributeIfValue(element, "src", getData(element, settings.data_src)),
                        element.load();
                },
            },
            setSources = function (element, settings) {
                var setSourcesFunction = setSourcesFunctions[element.tagName];
                setSourcesFunction && setSourcesFunction(element, settings);
            },
            manageApplied = function (element, settings, instance) {
                addClass(element, settings.class_applied),
                    setStatus(element, "applied"),
                    removeDataMultiBackground(element, settings),
                    settings.unobserve_completed && unobserve(element, settings),
                    safeCallback(settings.callback_applied, element, instance);
            },
            manageLoading = function (element, settings, instance) {
                updateLoadingCount(instance, 1), addClass(element, settings.class_loading), setStatus(element, "loading"), safeCallback(settings.callback_loading, element, instance);
            },
            removeDataFunctions = {
                IMG: function (element, settings) {
                    setData(element, settings.data_src, null),
                        setData(element, settings.data_srcset, null),
                        setData(element, settings.data_sizes, null),
                        forEachPictureSource(element, function (sourceTag) {
                            setData(sourceTag, settings.data_srcset, null), setData(sourceTag, settings.data_sizes, null);
                        });
                },
                IFRAME: function (element, settings) {
                    setData(element, settings.data_src, null);
                },
                VIDEO: function (element, settings) {
                    setData(element, settings.data_src, null),
                        setData(element, settings.data_poster, null),
                        forEachVideoSource(element, function (sourceTag) {
                            setData(sourceTag, settings.data_src, null);
                        });
                },
            },
            removeDataMultiBackground = function (element, settings) {
                setData(element, settings.data_bg_multi, null), setData(element, settings.data_bg_multi_hidpi, null);
            },
            removeDataAttributes = function (element, settings) {
                var removeDataFunction = removeDataFunctions[element.tagName];
                removeDataFunction
                    ? removeDataFunction(element, settings)
                    : (function (element, settings) {
                          setData(element, settings.data_bg, null), setData(element, settings.data_bg_hidpi, null);
                      })(element, settings);
            },
            elementsWithLoadEvent = ["IMG", "IFRAME", "VIDEO"],
            checkFinish = function (settings, instance) {
                !instance ||
                    (function (instance) {
                        return instance.loadingCount > 0;
                    })(instance) ||
                    (function (instance) {
                        return instance.toLoadCount > 0;
                    })(instance) ||
                    safeCallback(settings.callback_finish, instance);
            },
            addEventListener = function (element, eventName, handler) {
                element.addEventListener(eventName, handler), (element.llEvLisnrs[eventName] = handler);
            },
            removeEventListener = function (element, eventName, handler) {
                element.removeEventListener(eventName, handler);
            },
            hasEventListeners = function (element) {
                return !!element.llEvLisnrs;
            },
            removeEventListeners = function (element) {
                if (hasEventListeners(element)) {
                    var eventListeners = element.llEvLisnrs;
                    for (var eventName in eventListeners) {
                        var handler = eventListeners[eventName];
                        removeEventListener(element, eventName, handler);
                    }
                    delete element.llEvLisnrs;
                }
            },
            doneHandler = function (element, settings, instance) {
                !(function (element) {
                    delete element.llTempImage;
                })(element),
                    updateLoadingCount(instance, -1),
                    (function (instance) {
                        instance && (instance.toLoadCount -= 1);
                    })(instance),
                    removeClass(element, settings.class_loading),
                    settings.unobserve_completed && unobserve(element, instance);
            },
            addOneShotEventListeners = function (element, settings, instance) {
                var elementToListenTo = getTempImage(element) || element;
                if (!hasEventListeners(elementToListenTo)) {
                    !(function (element, loadHandler, errorHandler) {
                        hasEventListeners(element) || (element.llEvLisnrs = {});
                        var loadEventName = "VIDEO" === element.tagName ? "loadeddata" : "load";
                        addEventListener(element, loadEventName, loadHandler), addEventListener(element, "error", errorHandler);
                    })(
                        elementToListenTo,
                        function (event) {
                            !(function (event, element, settings, instance) {
                                var goingNative = hasStatusNative(element);
                                doneHandler(element, settings, instance),
                                    addClass(element, settings.class_loaded),
                                    setStatus(element, "loaded"),
                                    removeDataAttributes(element, settings),
                                    safeCallback(settings.callback_loaded, element, instance),
                                    goingNative || checkFinish(settings, instance);
                            })(0, element, settings, instance),
                                removeEventListeners(elementToListenTo);
                        },
                        function (event) {
                            !(function (event, element, settings, instance) {
                                var goingNative = hasStatusNative(element);
                                doneHandler(element, settings, instance),
                                    addClass(element, settings.class_error),
                                    setStatus(element, "error"),
                                    safeCallback(settings.callback_error, element, instance),
                                    goingNative || checkFinish(settings, instance);
                            })(0, element, settings, instance),
                                removeEventListeners(elementToListenTo);
                        }
                    );
                }
            },
            loadBackground = function (element, settings, instance) {
                !(function (element) {
                    element.llTempImage = document.createElement("IMG");
                })(element),
                    addOneShotEventListeners(element, settings, instance),
                    (function (element, settings, instance) {
                        var bg1xValue = getData(element, settings.data_bg),
                            bgHiDpiValue = getData(element, settings.data_bg_hidpi),
                            bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
                        bgDataValue && ((element.style.backgroundImage = 'url("'.concat(bgDataValue, '")')), getTempImage(element).setAttribute("src", bgDataValue), manageLoading(element, settings, instance));
                    })(element, settings, instance),
                    (function (element, settings, instance) {
                        var bg1xValue = getData(element, settings.data_bg_multi),
                            bgHiDpiValue = getData(element, settings.data_bg_multi_hidpi),
                            bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
                        bgDataValue && ((element.style.backgroundImage = bgDataValue), manageApplied(element, settings, instance));
                    })(element, settings, instance);
            },
            load = function (element, settings, instance) {
                !(function (element) {
                    return elementsWithLoadEvent.indexOf(element.tagName) > -1;
                })(element)
                    ? loadBackground(element, settings, instance)
                    : (function (element, settings, instance) {
                          addOneShotEventListeners(element, settings, instance), setSources(element, settings), manageLoading(element, settings, instance);
                      })(element, settings, instance);
            },
            cancelLoadingIfRequired = function (element, entry, settings, instance) {
                settings.cancel_on_exit &&
                    (function (element) {
                        return "loading" === getStatus(element);
                    })(element) &&
                    "IMG" === element.tagName &&
                    (removeEventListeners(element),
                    (function (element) {
                        forEachPictureSource(element, function (sourceTag) {
                            resetImageAttributes(sourceTag);
                        }),
                            resetImageAttributes(element);
                    })(element),
                    (function (element) {
                        forEachPictureSource(element, function (sourceTag) {
                            restoreOriginalImageAttributes(sourceTag);
                        }),
                            restoreOriginalImageAttributes(element);
                    })(element),
                    removeClass(element, settings.class_loading),
                    updateLoadingCount(instance, -1),
                    resetStatus(element),
                    safeCallback(settings.callback_cancel, element, entry, instance));
            },
            onEnter = function (element, entry, settings, instance) {
                safeCallback(settings.callback_enter, element, entry, instance),
                    (function (element, settings, instance) {
                        settings.unobserve_entered && unobserve(element, instance);
                    })(element, settings, instance),
                    (function (element) {
                        return !hasEmptyStatus(element);
                    })(element) || load(element, settings, instance);
            },
            tagsWithNativeLazy = ["IMG", "IFRAME"],
            shouldUseNative = function (settings) {
                return settings.use_native && "loading" in HTMLImageElement.prototype;
            },
            loadAllNative = function (elements, settings, instance) {
                elements.forEach(function (element) {
                    -1 !== tagsWithNativeLazy.indexOf(element.tagName) &&
                        (element.setAttribute("loading", "lazy"),
                        (function (element, settings, instance) {
                            addOneShotEventListeners(element, settings, instance), setSources(element, settings), removeDataAttributes(element, settings), setStatus(element, "native");
                        })(element, settings, instance));
                }),
                    setToLoadCount(instance, 0);
            },
            intersectionHandler = function (entries, settings, instance) {
                entries.forEach(function (entry) {
                    return (function (entry) {
                        return entry.isIntersecting || entry.intersectionRatio > 0;
                    })(entry)
                        ? onEnter(entry.target, entry, settings, instance)
                        : (function (element, entry, settings, instance) {
                              hasEmptyStatus(element) || (cancelLoadingIfRequired(element, entry, settings, instance), safeCallback(settings.callback_exit, element, entry, instance));
                          })(entry.target, entry, settings, instance);
                });
            },
            setObserver = function (settings, instance) {
                supportsIntersectionObserver &&
                    !shouldUseNative(settings) &&
                    (instance._observer = new IntersectionObserver(
                        function (entries) {
                            intersectionHandler(entries, settings, instance);
                        },
                        (function (settings) {
                            return { root: settings.container === document ? null : settings.container, rootMargin: settings.thresholds || settings.threshold + "px" };
                        })(settings)
                    ));
            },
            toArray = function (nodeSet) {
                return Array.prototype.slice.call(nodeSet);
            },
            queryElements = function (settings) {
                return settings.container.querySelectorAll(settings.elements_selector);
            },
            hasError = function (element) {
                return (function (element) {
                    return "error" === getStatus(element);
                })(element);
            },
            getElementsToLoad = function (elements, settings) {
                return (function (elements) {
                    return toArray(elements).filter(hasEmptyStatus);
                })(elements || queryElements(settings));
            },
            retryLazyLoad = function (settings, instance) {
                var elements;
                ((elements = queryElements(settings)), toArray(elements).filter(hasError)).forEach(function (element) {
                    removeClass(element, settings.class_error), resetStatus(element);
                }),
                    instance.update();
            },
            LazyLoad = function (customSettings, elements) {
                var settings = getExtendedSettings(customSettings);
                (this._settings = settings),
                    (this.loadingCount = 0),
                    setObserver(settings, this),
                    (function (settings, instance) {
                        runningOnBrowser &&
                            window.addEventListener("online", function () {
                                retryLazyLoad(settings, instance);
                            });
                    })(settings, this),
                    this.update(elements);
            };
        return (
            (LazyLoad.prototype = {
                update: function (givenNodeset) {
                    var observer,
                        elementsToObserve,
                        settings = this._settings,
                        elementsToLoad = getElementsToLoad(givenNodeset, settings);
                    (setToLoadCount(this, elementsToLoad.length), !isBot && supportsIntersectionObserver)
                        ? shouldUseNative(settings)
                            ? loadAllNative(elementsToLoad, settings, this)
                            : ((observer = this._observer),
                              (elementsToObserve = elementsToLoad),
                              (function (observer) {
                                  observer.disconnect();
                              })(observer),
                              (function (observer, elements) {
                                  elements.forEach(function (element) {
                                      observer.observe(element);
                                  });
                              })(observer, elementsToObserve))
                        : this.loadAll(elementsToLoad);
                },
                destroy: function () {
                    this._observer && this._observer.disconnect(),
                        queryElements(this._settings).forEach(function (element) {
                            delete element.llOriginalAttrs;
                        }),
                        delete this._observer,
                        delete this._settings,
                        delete this.loadingCount,
                        delete this.toLoadCount;
                },
                loadAll: function (elements) {
                    var _this = this,
                        settings = this._settings;
                    getElementsToLoad(elements, settings).forEach(function (element) {
                        load(element, settings, _this);
                    });
                },
            }),
            (LazyLoad.load = function (element, customSettings) {
                var settings = getExtendedSettings(customSettings);
                load(element, settings);
            }),
            (LazyLoad.resetStatus = function (element) {
                resetStatus(element);
            }),
            runningOnBrowser &&
                (function (classObj, options) {
                    if (options)
                        if (options.length) for (var optionsItem, i = 0; (optionsItem = options[i]); i += 1) createInstance(classObj, optionsItem);
                        else createInstance(classObj, options);
                })(LazyLoad, window.lazyLoadOptions),
            LazyLoad
        );
    }),
    (function ($) {
        function new_map($el) {
            const $markers = $el.find(".marker"),
                args = {
                    zoom: 16,
                    center: new google.maps.LatLng(0, 0),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: !0,
                    zoomControl: !1,
                    mapTypeControl: !1,
                    scaleControl: !1,
                    streetViewControl: !1,
                    rotateControl: !1,
                    fullscreenControl: !1,
                    styles: [
                        { featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] },
                        { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] },
                        { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                        { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] },
                        { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] },
                        { featureType: "administrative", elementType: "labels", stylers: [{ visibility: "off" }] },
                        { featureType: "administrative.country", elementType: "all", stylers: [{ visibility: "simplified" }] },
                        { featureType: "administrative.country", elementType: "geometry", stylers: [{ visibility: "simplified" }] },
                        { featureType: "administrative.country", elementType: "labels.text", stylers: [{ visibility: "simplified" }] },
                        { featureType: "administrative.province", elementType: "all", stylers: [{ visibility: "off" }] },
                        { featureType: "administrative.locality", elementType: "all", stylers: [{ visibility: "simplified" }, { saturation: "-100" }, { lightness: "30" }] },
                        { featureType: "administrative.neighborhood", elementType: "all", stylers: [{ visibility: "off" }] },
                        { featureType: "administrative.land_parcel", elementType: "all", stylers: [{ visibility: "off" }] },
                        { featureType: "landscape", elementType: "all", stylers: [{ visibility: "simplified" }, { gamma: "0.00" }, { lightness: "74" }] },
                        { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] },
                        { featureType: "landscape.man_made", elementType: "all", stylers: [{ lightness: "3" }] },
                        { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
                        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }] },
                        { featureType: "road", elementType: "geometry", stylers: [{ visibility: "simplified" }] },
                        { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] },
                        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }] },
                        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 18 }] },
                        { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] },
                        { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] },
                        { featureType: "water", elementType: "geometry", stylers: [{ lightness: 17 }, { color: "#000000" }] },
                    ],
                },
                map = new google.maps.Map($el[0], args);
            return (
                (map.markers = []),
                $markers.each(function () {
                    !(function ($marker, map) {
                        // console.log($marker);
                        const latlng = new google.maps.LatLng($marker.attr("data-lat"), $marker.attr("data-lng")),
                            marker = new google.maps.Marker({ position: latlng, map: map, icon: mapInfo.icon });
                        if ((map.markers.push(marker), $marker.html())) {
                            const infowindow = new google.maps.InfoWindow({ content: $marker.html() });
                            google.maps.event.addListener(marker, "click", function () {
                                infowindow.open(map, marker);
                            });
                        }
                    })($(this), map);
                }),
                (function (map) {
                    const bounds = new google.maps.LatLngBounds();
                    $.each(map.markers, function (i, marker) {
                        const latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
                        bounds.extend(latlng);
                    }),
                        1 == map.markers.length
                            ? ($(window).width() <= 900 ? map.setCenterWithOffset(bounds.getCenter(), 0, -50) : map.setCenterWithOffset(bounds.getCenter(), 80, -150),
                              $(window).on("resize", function () {
                                  $(window).width() <= 900 ? map.setCenterWithOffset(bounds.getCenter(), 0, -50) : map.setCenterWithOffset(bounds.getCenter(), 80, -150);
                              }),
                              map.setZoom(16))
                            : map.fitBounds(bounds);
                })(map),
                map
            );
        }
        google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
            const map = this,
                ov = new google.maps.OverlayView();
            (ov.onAdd = function () {
                const proj = this.getProjection(),
                    aPoint = proj.fromLatLngToContainerPixel(latlng);
                (aPoint.x = aPoint.x + offsetX), (aPoint.y = aPoint.y + offsetY), map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
            }),
                (ov.draw = function () {}),
                ov.setMap(this);
        };
        $(document).ready(function () {
            $("#map").each(function () {
                new_map($(this));
            });
        });
    })(jQuery),
    (function (factory, jQuery, Zepto) {
        "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof exports && "undefined" == typeof Meteor ? (module.exports = factory(require("jquery"))) : factory(jQuery || Zepto);
    })(
        function ($) {
            "use strict";
            var Mask = function (el, mask, options) {
                var p = {
                    invalid: [],
                    getCaret: function () {
                        try {
                            var sel,
                                pos = 0,
                                ctrl = el.get(0),
                                dSel = document.selection,
                                cSelStart = ctrl.selectionStart;
                            return (
                                dSel && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((sel = dSel.createRange()).moveStart("character", -p.val().length), (pos = sel.text.length)) : (cSelStart || "0" === cSelStart) && (pos = cSelStart),
                                pos
                            );
                        } catch (e) {}
                    },
                    setCaret: function (pos) {
                        try {
                            if (el.is(":focus")) {
                                var range,
                                    ctrl = el.get(0);
                                ctrl.setSelectionRange ? ctrl.setSelectionRange(pos, pos) : ((range = ctrl.createTextRange()).collapse(!0), range.moveEnd("character", pos), range.moveStart("character", pos), range.select());
                            }
                        } catch (e) {}
                    },
                    events: function () {
                        el.on("keydown.mask", function (e) {
                            el.data("mask-keycode", e.keyCode || e.which), el.data("mask-previus-value", el.val()), el.data("mask-previus-caret-pos", p.getCaret()), (p.maskDigitPosMapOld = p.maskDigitPosMap);
                        })
                            .on($.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", p.behaviour)
                            .on("paste.mask drop.mask", function () {
                                setTimeout(function () {
                                    el.keydown().keyup();
                                }, 100);
                            })
                            .on("change.mask", function () {
                                el.data("changed", !0);
                            })
                            .on("blur.mask", function () {
                                oldValue === p.val() || el.data("changed") || el.trigger("change"), el.data("changed", !1);
                            })
                            .on("blur.mask", function () {
                                oldValue = p.val();
                            })
                            .on("focus.mask", function (e) {
                                !0 === options.selectOnFocus && $(e.target).select();
                            })
                            .on("focusout.mask", function () {
                                options.clearIfNotMatch && !regexMask.test(p.val()) && p.val("");
                            });
                    },
                    getRegexMask: function () {
                        for (var translation, pattern, optional, recursive, oRecursive, r, maskChunks = [], i = 0; i < mask.length; i++)
                            (translation = jMask.translation[mask.charAt(i)])
                                ? ((pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, "")),
                                  (optional = translation.optional),
                                  (recursive = translation.recursive) ? (maskChunks.push(mask.charAt(i)), (oRecursive = { digit: mask.charAt(i), pattern: pattern })) : maskChunks.push(optional || recursive ? pattern + "?" : pattern))
                                : maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                        return (
                            (r = maskChunks.join("")),
                            oRecursive && (r = r.replace(new RegExp("(" + oRecursive.digit + "(.*" + oRecursive.digit + ")?)"), "($1)?").replace(new RegExp(oRecursive.digit, "g"), oRecursive.pattern)),
                            new RegExp(r)
                        );
                    },
                    destroyEvents: function () {
                        el.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "));
                    },
                    val: function (v) {
                        var r,
                            method = el.is("input") ? "val" : "text";
                        return arguments.length > 0 ? (el[method]() !== v && el[method](v), (r = el)) : (r = el[method]()), r;
                    },
                    calculateCaretPosition: function (oldVal) {
                        var newVal = p.getMasked(),
                            caretPosNew = p.getCaret();
                        if (oldVal !== newVal) {
                            var caretPosOld = el.data("mask-previus-caret-pos") || 0,
                                newValL = newVal.length,
                                oldValL = oldVal.length,
                                maskDigitsBeforeCaret = 0,
                                maskDigitsAfterCaret = 0,
                                maskDigitsBeforeCaretAll = 0,
                                maskDigitsBeforeCaretAllOld = 0,
                                i = 0;
                            for (i = caretPosNew; i < newValL && p.maskDigitPosMap[i]; i++) maskDigitsAfterCaret++;
                            for (i = caretPosNew - 1; i >= 0 && p.maskDigitPosMap[i]; i--) maskDigitsBeforeCaret++;
                            for (i = caretPosNew - 1; i >= 0; i--) p.maskDigitPosMap[i] && maskDigitsBeforeCaretAll++;
                            for (i = caretPosOld - 1; i >= 0; i--) p.maskDigitPosMapOld[i] && maskDigitsBeforeCaretAllOld++;
                            if (caretPosNew > oldValL) caretPosNew = 10 * newValL;
                            else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                                if (!p.maskDigitPosMapOld[caretPosNew]) {
                                    var caretPos = caretPosNew;
                                    (caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll), (caretPosNew -= maskDigitsBeforeCaret), p.maskDigitPosMap[caretPosNew] && (caretPosNew = caretPos);
                                }
                            } else caretPosNew > caretPosOld && ((caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld), (caretPosNew += maskDigitsAfterCaret));
                        }
                        return caretPosNew;
                    },
                    behaviour: function (e) {
                        (e = e || window.event), (p.invalid = []);
                        var keyCode = el.data("mask-keycode");
                        if (-1 === $.inArray(keyCode, jMask.byPassKeys)) {
                            var newVal = p.getMasked(),
                                caretPos = p.getCaret(),
                                oldVal = el.data("mask-previus-value") || "";
                            return (
                                setTimeout(function () {
                                    p.setCaret(p.calculateCaretPosition(oldVal));
                                }, $.jMaskGlobals.keyStrokeCompensation),
                                p.val(newVal),
                                p.setCaret(caretPos),
                                p.callbacks(e)
                            );
                        }
                    },
                    getMasked: function (skipMaskChars, val) {
                        var lastMaskChar,
                            check,
                            lastUntranslatedMaskChar,
                            buf = [],
                            value = void 0 === val ? p.val() : val + "",
                            m = 0,
                            maskLen = mask.length,
                            v = 0,
                            valLen = value.length,
                            offset = 1,
                            addMethod = "push",
                            resetPos = -1,
                            maskDigitCount = 0,
                            maskDigitPosArr = [];
                        for (
                            options.reverse
                                ? ((addMethod = "unshift"),
                                  (offset = -1),
                                  (lastMaskChar = 0),
                                  (m = maskLen - 1),
                                  (v = valLen - 1),
                                  (check = function () {
                                      return m > -1 && v > -1;
                                  }))
                                : ((lastMaskChar = maskLen - 1),
                                  (check = function () {
                                      return m < maskLen && v < valLen;
                                  }));
                            check();

                        ) {
                            var maskDigit = mask.charAt(m),
                                valDigit = value.charAt(v),
                                translation = jMask.translation[maskDigit];
                            translation
                                ? (valDigit.match(translation.pattern)
                                      ? (buf[addMethod](valDigit),
                                        translation.recursive && (-1 === resetPos ? (resetPos = m) : m === lastMaskChar && m !== resetPos && (m = resetPos - offset), lastMaskChar === resetPos && (m -= offset)),
                                        (m += offset))
                                      : valDigit === lastUntranslatedMaskChar
                                      ? (maskDigitCount--, (lastUntranslatedMaskChar = void 0))
                                      : translation.optional
                                      ? ((m += offset), (v -= offset))
                                      : translation.fallback
                                      ? (buf[addMethod](translation.fallback), (m += offset), (v -= offset))
                                      : p.invalid.push({ p: v, v: valDigit, e: translation.pattern }),
                                  (v += offset))
                                : (skipMaskChars || buf[addMethod](maskDigit),
                                  valDigit === maskDigit ? (maskDigitPosArr.push(v), (v += offset)) : ((lastUntranslatedMaskChar = maskDigit), maskDigitPosArr.push(v + maskDigitCount), maskDigitCount++),
                                  (m += offset));
                        }
                        var lastMaskCharDigit = mask.charAt(lastMaskChar);
                        maskLen !== valLen + 1 || jMask.translation[lastMaskCharDigit] || buf.push(lastMaskCharDigit);
                        var newVal = buf.join("");
                        return p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen), newVal;
                    },
                    mapMaskdigitPositions: function (newVal, maskDigitPosArr, valLen) {
                        var maskDiff = options.reverse ? newVal.length - valLen : 0;
                        p.maskDigitPosMap = {};
                        for (var i = 0; i < maskDigitPosArr.length; i++) p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
                    },
                    callbacks: function (e) {
                        var val = p.val(),
                            changed = val !== oldValue,
                            defaultArgs = [val, e, el, options],
                            callback = function (name, criteria, args) {
                                "function" == typeof options[name] && criteria && options[name].apply(this, args);
                            };
                        callback("onChange", !0 === changed, defaultArgs),
                            callback("onKeyPress", !0 === changed, defaultArgs),
                            callback("onComplete", val.length === mask.length, defaultArgs),
                            callback("onInvalid", p.invalid.length > 0, [val, e, el, p.invalid, options]);
                    },
                };
                el = $(el);
                var regexMask,
                    jMask = this,
                    oldValue = p.val();
                (mask = "function" == typeof mask ? mask(p.val(), void 0, el, options) : mask),
                    (jMask.mask = mask),
                    (jMask.options = options),
                    (jMask.remove = function () {
                        var caret = p.getCaret();
                        return jMask.options.placeholder && el.removeAttr("placeholder"), el.data("mask-maxlength") && el.removeAttr("maxlength"), p.destroyEvents(), p.val(jMask.getCleanVal()), p.setCaret(caret), el;
                    }),
                    (jMask.getCleanVal = function () {
                        return p.getMasked(!0);
                    }),
                    (jMask.getMaskedVal = function (val) {
                        return p.getMasked(!1, val);
                    }),
                    (jMask.init = function (onlyMask) {
                        if (
                            ((onlyMask = onlyMask || !1),
                            (options = options || {}),
                            (jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch),
                            (jMask.byPassKeys = $.jMaskGlobals.byPassKeys),
                            (jMask.translation = $.extend({}, $.jMaskGlobals.translation, options.translation)),
                            (jMask = $.extend(!0, {}, jMask, options)),
                            (regexMask = p.getRegexMask()),
                            onlyMask)
                        )
                            p.events(), p.val(p.getMasked());
                        else {
                            options.placeholder && el.attr("placeholder", options.placeholder), el.data("mask") && el.attr("autocomplete", "off");
                            for (var i = 0, maxlength = !0; i < mask.length; i++) {
                                var translation = jMask.translation[mask.charAt(i)];
                                if (translation && translation.recursive) {
                                    maxlength = !1;
                                    break;
                                }
                            }
                            maxlength && el.attr("maxlength", mask.length).data("mask-maxlength", !0), p.destroyEvents(), p.events();
                            var caret = p.getCaret();
                            p.val(p.getMasked()), p.setCaret(caret);
                        }
                    }),
                    jMask.init(!el.is("input"));
            };
            $.maskWatchers = {};
            var HTMLAttributes = function () {
                    var input = $(this),
                        options = {},
                        mask = input.attr("data-mask");
                    if (
                        (input.attr("data-mask-reverse") && (options.reverse = !0),
                        input.attr("data-mask-clearifnotmatch") && (options.clearIfNotMatch = !0),
                        "true" === input.attr("data-mask-selectonfocus") && (options.selectOnFocus = !0),
                        notSameMaskObject(input, mask, options))
                    )
                        return input.data("mask", new Mask(this, mask, options));
                },
                notSameMaskObject = function (field, mask, options) {
                    options = options || {};
                    var maskObject = $(field).data("mask"),
                        stringify = JSON.stringify,
                        value = $(field).val() || $(field).text();
                    try {
                        return "function" == typeof mask && (mask = mask(value)), "object" != typeof maskObject || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
                    } catch (e) {}
                };
            ($.fn.mask = function (mask, options) {
                options = options || {};
                var selector = this.selector,
                    globals = $.jMaskGlobals,
                    interval = globals.watchInterval,
                    watchInputs = options.watchInputs || globals.watchInputs,
                    maskFunction = function () {
                        if (notSameMaskObject(this, mask, options)) return $(this).data("mask", new Mask(this, mask, options));
                    };
                return (
                    $(this).each(maskFunction),
                    selector &&
                        "" !== selector &&
                        watchInputs &&
                        (clearInterval($.maskWatchers[selector]),
                        ($.maskWatchers[selector] = setInterval(function () {
                            $(document).find(selector).each(maskFunction);
                        }, interval))),
                    this
                );
            }),
                ($.fn.masked = function (val) {
                    return this.data("mask").getMaskedVal(val);
                }),
                ($.fn.unmask = function () {
                    return (
                        clearInterval($.maskWatchers[this.selector]),
                        delete $.maskWatchers[this.selector],
                        this.each(function () {
                            var dataMask = $(this).data("mask");
                            dataMask && dataMask.remove().removeData("mask");
                        })
                    );
                }),
                ($.fn.cleanVal = function () {
                    return this.data("mask").getCleanVal();
                }),
                ($.applyDataMask = function (selector) {
                    ((selector = selector || $.jMaskGlobals.maskElements) instanceof $ ? selector : $(selector)).filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
                });
            var eventName,
                isSupported,
                el,
                globals = {
                    maskElements: "input,td,span,div",
                    dataMaskAttr: "*[data-mask]",
                    dataMask: !0,
                    watchInterval: 300,
                    watchInputs: !0,
                    keyStrokeCompensation: 10,
                    useInput:
                        !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) &&
                        ((eventName = "input"),
                        (el = document.createElement("div")),
                        (isSupported = (eventName = "on" + eventName) in el) || (el.setAttribute(eventName, "return;"), (isSupported = "function" == typeof el[eventName])),
                        (el = null),
                        isSupported),
                    watchDataMask: !1,
                    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                    translation: { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } },
                };
            ($.jMaskGlobals = $.jMaskGlobals || {}),
                (globals = $.jMaskGlobals = $.extend(!0, {}, globals, $.jMaskGlobals)).dataMask && $.applyDataMask(),
                setInterval(function () {
                    $.jMaskGlobals.watchDataMask && $.applyDataMask();
                }, globals.watchInterval);
        },
        window.jQuery,
        window.Zepto
    );