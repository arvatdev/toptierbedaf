/*//////////////////////////////////////////////////////////////
//
//    ONLY MAIN JS FUNCTIONS HERE
//
//////////////////////////////////////////////////////////////*/

$(document).ready(function () {

//--------------------------
// Slick slider
//--------------------------
    $('.main-banner__list').slick({
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.main-banner__prev-btn'),
        nextArrow: $('.main-banner__next-btn')
    })

    $('.js-slick-list1').slick({
        draggable: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        prevArrow: $('.js-slick-prev1'),
        nextArrow: $('.js-slick-next1')
    })

    $('.js-slick-list2').slick({
        draggable: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        prevArrow: $('.js-slick-prev2'),
        nextArrow: $('.js-slick-next2')
    })

    $('.js-slick-list3').slick({
        draggable: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        prevArrow: $('.js-slick-prev3'),
        nextArrow: $('.js-slick-next3')
    })

//--------------------------
// Select 2
//--------------------------
    $(".js-cart-select").select2();


    $(".js-cart-select2").select2({
        minimumResultsForSearch: Infinity,
        templateResult: formatState,
        templateSelection: formatState
    });

    $(".js-cart-select3").select2({
        minimumResultsForSearch: Infinity,
        templateResult: formatState,
        templateSelection: formatState
    });

    $(".js-cart-select4").select2({
        minimumResultsForSearch: Infinity
    });

    function formatState () {
        var $state = $('<span><img src="/img/flags/deu.png" class="image" /></span>');
        return $state;
    };

//--------------------------
// Aside navigation
//--------------------------

    $('.aside-nav__element').on('click', function () {
        $(this).find('.aside-nav-sub').toggleClass('hidden')
        $(this).find('.main-arrow').toggleClass('hidden')
    })

//--------------------------
// Catalog page rating ease loading
//--------------------------

    $('.stats--green').css("width", "100%")
    $('.stats--lgreen').css("width", "100%")
    $('.stats--yellow').css("width", "100%")
    $('.stats--orange').css("width", "100%")
    $('.stats--red').css("width", "100%")

//--------------------------
// Static page - FAQ sub menu
//--------------------------

    $('.faq-drop__header').on('click', function() {
        $(this).closest('.faq-drop__element').find('.faq-drop__text').slideToggle(300)
        $(this).find('.faq-drop__arrow').toggleClass('faq-drop__arrow-active')
    })

    //--------------------------
    // Cards
    //--------------------------

    //change card-views to blocks
    $(".filter__button--cards").addClass("filter__button--active");
    $(".filter__button--list").click(function(){
      $(this).addClass("filter__button--active");
      $(".filter__button--cards").removeClass("filter__button--active");
      $(".products-main__list").addClass("products-main__list--list");
      $(".products-main__element").addClass("products-main__element--list");
    });
    //change card-views to list
    $(".filter__button--cards").click(function(){
      $(this).addClass("filter__button--active");
      $(".filter__button--list").removeClass("filter__button--active");
      $(".products-main__list").removeClass("products-main__list--list");
      $(".products-main__element").removeClass("products-main__element--list");
    });

    //--------------------------
    // Slider
    //--------------------------
    $('.slider__list').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<i class="material-icons">keyboard_arrow_right</i>',
        prevText: '<i class="material-icons">keyboard_arrow_left</i>',
        moveSlides: 1,
        maxSlides: 5,
        minSlides: 5,
        touchEnabled: false
    })

    $('#vertical').lightSlider({
      gallery:true,
      item:1,
      vertical:true,
      verticalHeight:532,
      vThumbWidth:98,
      thumbItem:6,
      thumbMargin:15,
      enableDrag: false,
      slideMargin:0
    });


    // var acc = document.getElementsByClassName("accordion-ite");
    // var i;
    //
    // for (i = 0; i < acc.length; i++) {
    //     acc[i].onclick = function(){
    //         /* Toggle between adding and removing the "active" class,
    //         to highlight the button that controls the panel */
    //         this.classList.toggle("active");
    //
    //         /* Toggle between hiding and showing the active panel */
    //         var panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     }
    // }
    var allPanels = $('.account__tab-content').hide();
    $('.table__accordion-btn').click(function() {
      $(this).toggleClass('table__accordion-btn--active');
      $(this).closest('table').next().toggle();
      return false;
    });



    var tabs = document.querySelectorAll('[data-tablink]');
    if (tabs && tabs.length > 0) {
      [].forEach.call(tabs, function(tab) {
        tab.addEventListener('click', function(event) {
          event.preventDefault();
          var allTabs = this.parentNode.parentNode.querySelectorAll('[data-tablink]');
          [].forEach.call(allTabs, function(item) {
            item.classList.remove('tabs__nav-item--active');
          });
          this.classList.add('tabs__nav-item--active');
          var content = document.querySelector('[data-tabcontent="' + this.dataset.tablink + '"]');
          var allContent = content.parentNode.querySelectorAll('[data-tabcontent]');
          [].forEach.call(allContent, function(item) {
            item.classList.add('hidden');
          });
          content.classList.remove('hidden');
        });
      });
    }
});
