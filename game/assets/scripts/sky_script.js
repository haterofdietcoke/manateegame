// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    start() {
        var day = cc.delayTime(60);
        var set = cc.moveTo(30, cc.v2(480, 500));
        var colorSet = cc.sequence(cc.tintTo(5, 255, 250, 149), cc.tintTo(10, 255, 94, 94), cc.tintTo(5, 0, 0, 0));
        var night = cc.delayTime(60);
        var colorRise = cc.sequence(cc.tintTo(5, 255, 198, 198), cc.tintTo(5, 255, 250, 149), cc.tintTo(5, 133, 255, 255))
        var rise = cc.moveTo(30, cc.v2(480, 640));
        var sequence = cc.sequence(day, set, colorSet, night, colorRise, rise);
        var action = cc.repeatForever(sequence);
        this.node.runAction(action);
    },

    // update (dt) {},
});
