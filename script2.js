$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 0)
        {
            $('.navibar').addClass("sticky");
        }
        else
        {
            $('.navibar').removeClass("sticky");
        }
        if(this.scrollY > 0)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function()
    {
        $('html').animate({scrollTop: 0});
    });

    $('.menu-btn').click(function()
    {
        $('.navibar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        if ($('.navibar .menu').hasClass("active")) 
        {
            $('#font-size-btn').css('display', 'none');
        } 
        else 
        {
            $('#font-size-btn').css('display', 'block');
        }
    });
});
