function getParameter() {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    console.log(name, age)
}

function urlgo() {
    getParameter();
    window.location.href = "page2.html?name=" + name + "&age=" + age;
}

function setLocalStorage() {
    localStorage.loName = name;
    localStorage.setItem("loAge", age);
}

function getLocalStorage() {
    console.log(localStorage.getItem("loName"), localStorage.getItem("loAge"));
    alert(localStorage.loName);
    alert(localStorage.loAge);
}

function setSessionStorage() {
    sessionStorage.seName = name;
    sessionStorage.setItem("seAge", age);
}

function getSessionStorage() {
    console.log(sessionStorage.getItem("seName"), sessionStorage.getItem("seAge"));
    alert(sessionStorage.seName);
    alert(sessionStorage.seAge);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCo() {
    setCookie("cookieName",name,30);
    setCookie("cookieAge",name,30);
}

function getCo() {
    alert(getCookie("cookieName"));
    alert(getCookie("cookieAge"));
}