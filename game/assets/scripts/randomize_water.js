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
        low_water: {
            default: "shallow_water"
        },
        high_water: {
            default: "deep_water"
        },
        medium_water: {
            default: "medium_water"
        },
        delay: {
            default: 60
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var choices = ["shallow_water", "deep_water", "medium_water"];
        var choice = Math.floor(Math.random() * choices.length);
        var action = cc.delayTime(this.delay);
        var seq = cc.sequence(cc.delayTime(this.delay), cc.callFunc(() => cc.director.loadScene(choices[choice])));
        this.node.runAction(seq);

    },

    // update (dt) {},
});
