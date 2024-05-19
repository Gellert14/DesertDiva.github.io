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

    var typed = new Typed(".typing", 
    {
        strings: ["sütiket", "tortákat", "italokat"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function()
    {
        $('.navibar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
