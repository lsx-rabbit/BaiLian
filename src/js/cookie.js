function getCookie(name) {
    var cookie = document.cookie;
    var array = cookie.split('; ');
    var key_value;

    for (var i = 0; i < array.length; i++) {
        key_value = array[i].split('=');        //key_value=>["email", "cuijn@qq.com"]
        if (key_value[0] === name) {
            return key_value[1]
        }
    }

    return null;    //指定cookie不存在，我们返回null
}

function setCookie(name, value, path, days) {
    var cookie = `${name}=${value}`;
    if (path) {
        cookie += `;path=${path}`
    }

    if (days) {
        var d = new Date();
        d.setDate(d.getDate() + days);
        cookie += `;expires=${d}`
    }

    document.cookie = cookie;
}


function removeCookie(name, path) {
    setCookie(name, '', path, -1);
}