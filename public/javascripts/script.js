var vm = new Vue({
    el: '#app',
    data: {
        scrollPos: 0,
    },
    computed: {
        pic_opa: function () {
            return function (id) {
                var animation_progress = (this.scrollPos - $(id).offset().top) / ($(id).height() -
                    $(window).height()) // (p-a1)/(a2-a1)
                var opacity = -0.65 * animation_progress + 1;
                if (opacity >= 1) opacity = 1;
                else if (opacity <= 0.35) opacity = 0.35;
                return {
                    'opacity': opacity,
                }
            }
        },
    },
    methods: {
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.scrollPos = scrollTop;
        },
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
});