// pages/components/navigation-bar/navigation-bar.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        defaultData: {
            type: Object,
            value: {
                title: "我是默认标题"
            },
            observer: function(newVal, oldVal) {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuTop: app.globalData.menuTop,
        menuHeight: app.globalData.menuHeight,
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
