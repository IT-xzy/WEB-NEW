function window_lhref() {
    window.location.href = 'http://www.baidu.com?user=laozhang&pwd=66666'
}

function setSession() {
    sessionStorage.setItem('whh','王花花')
}

function getSession() {
   alert( sessionStorage.getItem('whh'))
}
function setLocation() {
    localStorage.setItem('lsd','李栓但')
}
function getLocation() {
    alert(localStorage.getItem('lsd'))
    
}

function setCookiebase(c_name, c_value, expiredays) {
    var exdate = new Date();
    //生成时间
    exdate.setTime(Number(exdate) + expiredays);
    return (document.cookie =
        c_name +
        "=" +
        escape(c_value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString()));
    }

function getCookiebase(c_name) {
    if (document.cookie.length > 0) {
        var arrStr = document.cookie.split("; "); //splite
        for (var i = 0; i < arrStr.length; i++) {
            var arr = arrStr[i].split("=");
        if (arr[0] == c_name) {
            return arr[1];
            }
        }
        return "";
    }
    
    
}
function setCookie() {
    setCookiebase('赵柯爽', 'zks'); 

}

function getCookie() {
    alert( getCookiebase('赵柯爽'))
}

