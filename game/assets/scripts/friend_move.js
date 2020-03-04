cc.Class({
    extends: cc.Component,

    properties: {
        x: {
            default: 0
        },
        y: {
            default: 250
        },
        move_time: {
            default: 5
        },
        delay_time: {
            default: 3
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.node.setPosition(this.x, this.y);
        var moveTo = cc.moveTo(this.move_time, 1500, this.y);
        var time = cc.delayTime(Math.random() * this.delay_time + 2);
        var moveBack = cc.moveTo(0, this.x, this.y);
        var seq = cc.sequence(moveTo, time, moveBack);
        var action = cc.repeatForever(seq);
        this.node.runAction(action);
    },

    // update(dt) {},
});
