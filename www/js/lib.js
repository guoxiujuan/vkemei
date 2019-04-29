$(document).ready(function() {
    
    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if( $(this).hasClass('open') ){
            $('body').addClass('open');
            if( _winw<=960 ){
                $('.nav').stop().slideDown();
            }
        }else{
            $('body').removeClass('open');
            if( _winw<=960 ){
                $('.nav').stop().slideUp();
            }
        }
    });

    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top>60 ){
            $('#hd').css("background","rgba(255,255,255,1)");
        }else{
            $('#hd').css("background","rgba(255,255,255,.5)");
        }
    });

    // 导航
    function myNav(){
        var _winw = $(window).width();
        if( _winw>960 ){
            $('.nav').show();
            $('.nav li').bind('mouseenter',function() {
                $(this).find('.sub').stop().show();
                var _sub = $(this).find('.sub');
                setTimeout(function(){
                    if( _sub.is(':visible') ){
                        $('.nav-subBg').height( _sub.outerHeight() );
                        $('.nav-subBg').css('border-bottom','1px #ebebeb solid');
                        _sub.animate({
                            'opacity': 1
                        },300);
                    }
                },100);
                if( $(this).find('.sub').length ){
                    $(this).addClass('ok');
                }
            });
            $('.nav li').bind('mouseleave',function() {
                $(this).removeClass('ok').find('.sub').stop().hide();
                var _sub = $(this).find('.sub');
                $('.nav-subBg').height(0);
                $('.nav-subBg').css('border-bottom','none');
                _sub.css('opacity', 0);
            });
            $('body,.menuBtn').removeClass('open');
        }else{
            $('.nav').hide();
            $('.nav li').unbind('mouseenter mouseleave');
            $('.nav .v1').click(function(){
                if( $(this).siblings('.sub').length ){
                    $(this).siblings('.sub').stop().slideToggle("500");
                    return false;
                }
            });
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
    });


    // 返回顶部
    $('.toTop').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top<200 ){
            $('.float-bar').stop().hide();
        }else{
            $('.float-bar').stop().show();
        }
    });


    // 过渡动画
    $('.jsBtn').click(function(){
            var _id = $(this).attr('href');
            var _padd = $('body').css('padding').slice(0,2)*1;
            var _topH = $('#hd').outerHeight();
            if( _padd ){
                $('html,body').animate({
                    'scrollTop':$(_id).offset().top-2*_padd-_topH
                }, 500);
            }else{
                $('html,body').animate({
                    'scrollTop':$(_id).offset().top-_topH
                }, 500);
            }
            return false;
        });
    
});