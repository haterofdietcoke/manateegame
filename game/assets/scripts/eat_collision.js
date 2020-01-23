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
        source: {
            default: null,
            type: cc.Node
        },
        energy_bar: {
            default: null,
            type: cc.ProgressBar
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    onCollisionEnter: function (other, self) {
        if (other.node.name === 'grass' && self.tag == 1) {
            console.log('ate grass');
            this.energy_bar.progress += 0.05;
            other.node.destroy();
        }
    },
});
