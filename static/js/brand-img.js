$(document).ready(function() {
        if ($(window).width() < 1083) {
            $(".brand-img").css('height', 40);
        } else {
            $(".brand-img").css('height', 52);
        }

        $(window).resize(function() {
            if ($(window).width() < 1083) {
                $(".brand-img").css('height', 40);
            } else {
                $(".brand-img").css('height', 52);
            }
        });

        $('.dropdown-toggle').dropdownHover({
            "instantlyCloseOthers": true
        });
    });