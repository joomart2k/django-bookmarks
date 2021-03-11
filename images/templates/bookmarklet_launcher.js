//код проверки загрузки букмарклета
function(){
    if (window.Bookmarklet != 'undefined'){
        Bookmarklet();
    } else {
        document.body.appendChild(document.createElement('script')).src='https://6d6cb18343fd.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
}();