// hover navbar qr code
const headerQR = document.querySelector('.navbar__qr');
const hoverQR = document.querySelector('.navbar__item--app');

function showQR() {
    headerQR.classList.add('show');
}

function hideQR() {
    headerQR.classList.remove('show');
}

//news section 
var news_container_width = document.getElementsByClassName('news__all-news')[0].offsetWidth;
var news_width = news_container_width / 4;
var all_news = document.querySelectorAll('.a-news');

all_news.forEach(news => {
    news.style.width = news_width + "px";
});

function news_resize() {
    var news_container_width = document.getElementsByClassName('news__all-news')[0].offsetWidth;
    var news_width = news_container_width / 4;
    var all_news = document.querySelectorAll('.a-news');

    all_news.forEach(news => {
        news.style.width = news_width + "px";
    });
}

window.onresize = news_resize;