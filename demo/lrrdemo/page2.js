function getUrl(){
    function getQueryString(parameter) {
        var result = window.location.search.match(new RegExp("[\?\&]" + parameter + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    }
    var name = getQueryString("name");
    var age = getQueryString("age");
    console.log(name,age);
    alert(name);
    alert(age);
}