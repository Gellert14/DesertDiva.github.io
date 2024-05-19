$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 0)
        {
            $('.navibar').addClass("sticky");
            $('header').css("display", "none");
        }
        else
        {
            $('.navibar').removeClass("sticky");
            $('header').css("display", "block");
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

let fontSizeIncreased = false; // Boolean változó az állapot nyomon követésére

document.addEventListener('DOMContentLoaded', () => {
    const fontSizeBtn = document.getElementById('font-size-btn');
    const articleText = document.querySelectorAll('article p');

    fontSizeBtn.addEventListener('click', () => {
        if (!fontSizeIncreased) {
            increaseFontSize(articleText);
            fontSizeIncreased = true;
        } else {
            decreaseFontSize(articleText);
            fontSizeIncreased = false;
        }
    });
});

function increaseFontSize(elements) {
    elements.forEach(element => {
        let currentFontSize = window.getComputedStyle(element).fontSize;
        let currentSize = parseFloat(currentFontSize);
        let newSize = currentSize + 3; // Increase font size by 2px
        element.style.fontSize = newSize + 'px';
    });
}

function decreaseFontSize(elements) {
    elements.forEach(element => {
        let currentFontSize = window.getComputedStyle(element).fontSize;
        let currentSize = parseFloat(currentFontSize);
        let newSize = currentSize - 2; // Decrease font size by 2px
        element.style.fontSize = newSize + 'px';
    });
}
