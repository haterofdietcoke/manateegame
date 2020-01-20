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
        breath_bar: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enableDebugDraw = true;
    },

    onCollisionEnter: function (other, self) {
        console.log("COLLISION!")
        if (other.node.name === "boat") {
            var progressBar = this.breath_bar.getComponent(cc.ProgressBar);
            progressBar.progress -= 0.5;
        }
        var tint = cc.repeat(cc.sequence(cc.tintTo(0.25, 255, 0, 0), cc.tintTo(0.25,255,255,255)),3);
        this.node.runAction(tint);
    },

    // update (dt) {},
});
