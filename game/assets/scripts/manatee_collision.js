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
        energy_bar: {
            default: null,
            type: cc.ProgressBar
        },
        spriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onCollisionEnter: function (other, self) {
        if (other.node.name === 'friend' && self.tag == 0) {
            console.log('heart');
            this.energy_bar.progress += 0.5;
            var heart = new cc.Node("heart");
            var spr = heart.addComponent(cc.Sprite);
            spr.spriteFrame = this.spriteFrame;
            heart.x = 0;
            heart.y = 0;

            heart.setParent(this.node);

            var rise = cc.moveBy(2, cc.v2(0, 50));
            var fade = cc.fadeTo(2, 0);
            heart.runAction(rise);
            heart.runAction(fade);
        }
    }

    // update (dt) {},
});
