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

// bindAll 给所有的元素绑定事件
const bindAll = function(elements, eventName, callback) {
    for (let i = 0; i < elements.length; i++) {
        let tag = elements[i]
        tag.addEventListener(eventName, callback)
    }
}

const bindLogin = function() {
    let bs = es('.tag')
    bindAll(bs, 'click', function(event) {
        log('点击 tag')
        // 之前被点击的菜单的类先删除类 lg_active，取消效果
        let tag = e('.lg_active')
        tag.classList.remove('lg_active')
        // 之前显示的内容先删除类 show，隐藏起来
        let old = e('.show')
        old.classList.remove('show')

        // 获取当前点击的菜单 tag
        let self = event.target
        // 为当前点击的菜单添加类 lg_active，显示效果
        self.classList.add('lg_active')
        // 获取现在点击的菜单对应的内容 id
        let cid = self.dataset.id
        // log('cid', cid)
        let current = e(cid)
        // 把现在点击的菜单对应的内容添加类 show，显示出来
        current.classList.add('show')
    })
}
const bindOpen = function(selector) {
    let bs = es(selector)
    bindAll(bs, 'click', function(event) {
        log('点击 Open tag')
        let indi = e(selector + '_info')
        if (indi.classList.contains('hide')) {
            indi.classList.remove('hide')
        } else {
            indi.classList.add('hide')
        }
    })
}
const bindClose = function(selector) {
    let bs = es('.close')
    bindAll(bs, 'click', function(event) {
        log('点击 close tag')
        let indi = e(selector + '_info')
        indi.classList.add('hide')
    })
}

const __main = function() {
    sels = ['.login', '.money']
    for (let i of sels) {
        // log(i)
        bindOpen(i)
        bindClose(i)
    }
    bindLogin()
    activeTag()
}

__main()