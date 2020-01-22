cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.setPosition(0, 500);
        var moveTo = cc.moveTo(2, 1100, 500);
        var time = cc.delayTime(Math.random() * 5);
        var moveBack = cc.moveTo(0, 0, 500);
        var seq = cc.sequence(moveTo, time, moveBack);
        var action = cc.repeatForever(seq);
        this.node.runAction(action);
    },

    // update(dt) {},
});
