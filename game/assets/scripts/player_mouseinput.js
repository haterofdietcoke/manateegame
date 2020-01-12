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
        target: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        var t = this;
        this.node.on("touchmove", function (event) {
            console.log("touchstart");
            var pos = t.node.convertToNodeSpaceAR(event.getLocation());
            t.target.x = pos.x;
            t.target.y = pos.y;
        });
        this.node.on("touchstart", function (event) {
            console.log("touchstart");
            var pos = t.node.convertToNodeSpaceAR(event.getLocation());
            t.target.x = pos.x;
            t.target.y = pos.y;
        });

        this.node
    },

    start () {

    },
});
