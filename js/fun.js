function func(){
        //var nods = $("ul.list-group > li");
        var nods = $("#list > .active");//获取列表的所有元素
        alert('删除成功！');
        document.getElementById("list").removeChild(nods[nods.length - 1])
    }
function func2(){
    let zh = document.getElementById('zhanghao').value
    let un = document.getElementById('username').value
    let pw = document.getElementById('password').value
    let sex = document.getElementById('sex').value
    let call = document.getElementById('call').value
    let level = document.getElementById('level').value
    let mon = document.getElementById('money').value + '元'
    let nods = $("#list > .active");//获取列表的所有元素
    // let name =
    let list = `    <tr class="active">
                            <td ><input type="checkbox" name="info" value="2"></td>
                            <td >${nods.length + 1}</td>
                            <td >${zh}</td>
                            <td >${un}</td>
                            <td >${pw}</td>
                            <td >${sex}</td>
                            <td width="8%">${call}</td>
                            <td>${level}</td>
                            <td>${mon}</td>
                            </tr>
                        `
    document.getElementById("list").insertAdjacentHTML('beforeend', list)
    alert('添加成功！');
}
function func_adimin(){
    let un = document.getElementById('username').value
    let pw = document.getElementById('password').value
    let mail = document.getElementById('mail').value
    let nods = $("#list > .active");//获取列表的所有元素
    let zh = '00' + String(nods.length+ 1)
    // let name =
    let list = `    <tr class="active">
                            <td ><input type="checkbox" name="info" value="2"></td>
                            <td >${zh}</td>
                            <td >${un}</td>
                            <td >${pw}</td>
                            <td width="8%">${mail}</td>
                            </tr>
                        `
    document.getElementById("list").insertAdjacentHTML('beforeend', list)
    alert('添加成功！');
}
function func3(){
    let nods = $("#list > .active");//获取列表的所有元素
    alert('全部删除成功！');
    document.getElementById("list").innerHTML=""
}
function fun_alert(value){
    let aler_box= document.getElementById('alert')
    let list = `    <tr class="active">
                            <td ><input type="checkbox" name="info" value="2"></td>
                            <td >${zh}</td>
                            <td >${un}</td>
                            <td >${pw}</td>
                            <td width="8%">${mail}</td>
                            </tr>
                        `
    document.getElementById("list").insertAdjacentHTML('beforeend', list)

}
