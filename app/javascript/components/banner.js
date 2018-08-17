// function initUpdateBannerOnScroll() {
//   const banner = document.querySelector('.banner-img');
//   if (banner) {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY >= (window.innerHeight) / 4) {
//         banner.classList.add('banner-blur');
//       } else {
//         banner.classList.remove('banner-blur');
//       }
//     });
//   }
// }

// export { initUpdateBannerOnScroll };



// function initUpdateBannerOnScroll() {
//   window.addEventListener('scroll', () => {
//       let percentage = window.scrollY / window.innerHeight;
//       percentage = (percentage * 8).toFixed(2);
//       console.log(percentage.toFixed(2));

//       document.querySelector('.banner-img').style.filter = "blur("+ percentage+"px)";

//     });
// }


// export { initUpdateBannerOnScroll }


// $(window).on('scroll', function () {
//     var pixs = $(document).scrollTop()
//     pixs = pixs / 100;
//     $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })
// });

function blurryScroll() {$(document).ready(function() {
  // add event listener on window, on scroll type of event
    $(window).scroll(function(e) {
        // increase opcatiy the more you scroll

        var s = $(window).scrollTop(),
            opacityVal = (s / 300);

        $('.blurred-image').css('opacity', opacityVal);
        $('.blur').css('opacity', (1 - opacityVal * 1.5));
    });
});
}

export { blurryScroll }
