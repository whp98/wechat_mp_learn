//index.js
Page({
    data: {
        src: "../../images/huozaidangxia.jpg",
        imgArray: [
            {
                mode: 'aspectFit',
                text: 'aspectFit:保持横纵比缩放图片让图片完整显示出来'
            }, {
                mode: 'scaleToFill',
                text: 'scaleToFill:拉伸显示图片，不会保持横纵比'
            }, {
                mode: 'aspectFill',
                text: 'aspectFill:保持横纵比缩放图片让图片的短边显示出来'
            }, {
                mode: 'top',
                text: 'top,不缩放图片，只是显示图片顶部区域'
            }, {
                mode: 'bottom',
                text: 'bottom 不缩放图片只显示图片的底部区域'
            }, {
                mode: 'center',
                text: 'center 显示图片的中间区域'
            },{
                mode:"widthFix",
                text:"widthFix,保持纵横比，宽度完全显示，高度不限制"
            }
        ]
    }
})