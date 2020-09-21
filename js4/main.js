new jBox('Tooltip', {
  attach: '.tooltip'
});

jQuery(document).ready(function ($) {

$('.my-news-ticker').AcmeTicker({
    type:'typewriter',
    direction: 'right',
    controls: {
        prev: $('.acme-news-ticker-prev'),
        toggle: $('.acme-news-ticker-pause'),
        next: $('.acme-news-ticker-next')
    },
    autoplay: 3000,
    speed: 50,
    direction: 'right',
    pauseOnFocus: true,
    pauseOnHover: true
});
})
