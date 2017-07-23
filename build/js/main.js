/*//////////////////////////////////////////////////////////////
//
//    ONLY MAIN JS FUNCTIONS HERE
//
//////////////////////////////////////////////////////////////*/

$(document).ready(function () {

//--------------------------
// Slick slider
//--------------------------
    $('.main-banner .list').slick({
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.main-banner .list-wrapper .prev-btn'),
        nextArrow: $('.main-banner .list-wrapper .next-btn')
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
// Product list hovered menu
//--------------------------

    // $('.products__main').find('.list .element').hover(
    //   if (!el.hasClas('element--card')) {
    //         function(e) {
    //             e.stopPropagation()
    //             $(this).find('.hover').fadeIn(200)
    //             $(this).find('.hover').removeClass('hidden')
    //         }, function() {
    //             $(this).find('.hover').fadeOut(200, function() {
    //                 $(this).find('.hover').addClass('hidden')
    //             })
    //         }
    //     }
    // )


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

    $('.sub-info-block__header').on('click', function() {
        $(this).closest('.sub-info-block__element').find('.sub-info-block__text').slideToggle(300)
        $(this).find('.sub-info-block__arrow').toggleClass('sub-info-block__arrow-active')
    })

    //--------------------------
    // CARDS
    //--------------------------

    //change card-views to blocks
    $(".filter__button--cards").addClass("filter__button--active");
    $(".filter__button--list").click(function(){
      $(this).addClass("filter__button--active");
      $(".filter__button--cards").removeClass("filter__button--active");
      $(".list-products").addClass("list--list");
      $(".list-products .element").addClass("element--list");
    });
    //change card-views to list
    $(".filter__button--cards").click(function(){
      $(this).addClass("filter__button--active");
      $(".filter__button--list").removeClass("filter__button--active");
      $(".list-products").removeClass("list--list");
      $(".list-products .element").removeClass("element--list");
    });


});
