const log = console.log.bind(console)

const e = function(selector) {
    let element = document.querySelector(selector)
    if (element === null) {
        let s = `选择器 ${selector} 写错了, 请仔细检查并且复习三种基本的选择器`
        alert(s)
        return null
    } else {
        return element
    }
}
// es 返回一个数组，包含所有被选中的元素
const es = function(selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = `选择器 ${selector} 写错了, 请仔细检查并且复习三种基本的选择器`
        alert(s)
        //
        return []
    } else {
        return elements
    }
}
// Cookie 设置
const setCookie = function (key,value,t){
    var myDate=new Date()
    myDate.setDate(myDate.getDate()+t)
    document.cookie=key+"="+value+ ";expires="+myDate.toGMTString();
}
const getCookie = function (key){
    var arr1 = document.cookie.split('; ');
    for (var i=0; i<arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if ( arr2[0] == key ) {
            return decodeURI(arr2[1]);
        }
    }
}
const removeCookie = function (key) {
    setCookie(key, '', -1);
}
// bindAll 给所有的元素绑定事件
const bindAll = function(elements, eventName, callback) {
    for (let i = 0; i < elements.length; i++) {
        let tag = elements[i]
        tag.addEventListener(eventName, callback)
    }
}
//单选判断
const checkPasswordBox = function () {
    let checkSay = e('.sayPassword')
    checkSay.addEventListener('click', function(event) {
        let self = event.target
        let password = e('.inputPassword')
        let pButton = e('.lock')
        if(self.checked){
            password.type = "text"
            pButton.classList.remove( 'fa-lock')
            pButton.classList.add( 'fa-unlock')
            pButton.style="margin:0px"
        }else{
            password.type = "password"
            pButton.classList.remove( 'fa-unlock')
            pButton.classList.add( 'fa-lock')
            pButton.style="margin:3px"
        }
    })
}
const checkRememberBox = function (result) {
    let oUsername = document.getElementById('inputEmail');
    let oLogin = document.getElementById('login-btn');
    let oDel = document.getElementById('del');
    let checkrm= document.getElementById('rememberMe')
    let tix = document.getElementById('tix')

    if ( getCookie('tix') ) {
        tix.innerHTML = getCookie('tix');
        log('tix',tix.innerHTML)
    }
    if ( getCookie('username') ) {
        oUsername.value = getCookie('username');
        log('oUsername.value:', oUsername.value)
    }
    oLogin.onclick = function(result) {
        log('result', result)
        if (result){
            tix.innerHTML= '用户名或密码输入错误, 登录失败'
            setCookie('tix', tix.innerHTML,5);
        }
        if(checkrm.checked) {
            setCookie('username', oUsername.value, 5);
        }
    }
    oDel.onclick = function() {
        removeCookie('username');
        removeCookie('tix');
        oUsername.value = '';
        tix.innerHTML = '';

    }
}
const  checkUser = function (){
    let users = [["1109218203@qq.com","123456"]];

    let username = e('.inputEmail').value;
    let password = e('.inputPassword').value;
    let result = false;

    //登录判断
    for(var i = 0;i<users.length;i++){
        if(users[i][1]==password&&username==users[i][0]){
            result = true;
            alert("用户名和密码正确，登录成功");
            window.open('html\\index.html');
        }
    }

    return result;
}

const  check_login = function () {
    let bs = es('.form-btn ')
    let result = ''
    bindAll(bs, 'click', function(result,event) {
        log('点击 登录')
        checkUser()
        // return result
    })
}

const __main = function() {
    checkPasswordBox()
    let result = check_login()
    checkRememberBox(result)
}

__main()