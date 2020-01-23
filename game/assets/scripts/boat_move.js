cc.Class({
    extends: cc.Component,

    properties: {
        x: {
            default: 0
        },
        y: {
            default: 500
        },
        move_time: {
            default: 2
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.setPosition(this.x, this.y);
        var moveTo = cc.moveTo(this.move_time, 1500, this.y);
        var time = cc.delayTime(Math.random() * 3 + 2);
        var moveBack = cc.moveTo(0, this.x, this.y);
        var seq = cc.sequence(moveTo, time, moveBack);
        var action = cc.repeatForever(seq);
        this.node.runAction(action);
    },

    // update(dt) {},
});
