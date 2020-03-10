//index.js
const app = getApp();
var util = require('../utils/util.js');
var indexMsg = '我是来自index.js的变量';
function indexFunc(){
    return '我是来自index.js的函数';
}

Page({

    data: {
        /*全局*/
        msg1: app.globalMsg,
        msg2: app.globalFunc(),
        /*本模块*/
        msg3: indexMsg,
        msg4: indexFunc(),
        /*util模块*/
        msg5: util.utilMsg,
        msg6: util.utilFunc()
    }

})