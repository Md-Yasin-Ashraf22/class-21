$(function() {

    $(window).on('scroll', function() {

        var scrollTop= $(this).scrollTop();

        console.log(scrollTop)
        if(scrollTop > 500) {
            $('#back_to_top').fadeIn(500);
        }else{
            $('#back_to_top').fadeOut(500);
        }

    })

    $('#back_to_top').on('click', function() {
        $('html,body').animate({
            scrollTop:0
        }, 500) 
    })



    $(window).on('load', function () {
         $('#preloader').fadeOut(2000);
     })

    $('a').on('click' , function(e) {
        e.preventDefault();

        var hash = this.hash

        if( this.hash !=='') {
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 1000)
                  // hash link connect korar way
            
        }
    })


    var navHeight= $('nav').height();

    console.log(navHeight)

    $(window).on('scroll', function(){
        var scrollSize = $(window).scrollTop();

        if( scrollSize > navHeight) {
            $('nav').addClass('animate')
        }else{
            $('nav').removeClass('animate')
        }
    })

    $('.gallary_filter').filterizr();

    $('.count_down').countdown('2022/03/31', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<ul><li><a><span>%D</span><br><br><span>Days</span></a></li></ul>'
          + '<ul><li><a><span>%H</span><br><br><span>Hours</span></a></li></ul>'
          + '<ul><li><a><span>%M</span><br><br><span>mins</span></a></li></ul> '
          + '<ul><li><a><span>%S</span><br><br><span>sec</span></a></li></ul>'));
      });



})


