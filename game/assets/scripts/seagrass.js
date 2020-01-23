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
        spriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },
        amount_of_grass: 100,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var i;
        for (i = 0; i < this.amount_of_grass; i++) {
            var newgrass = new cc.Node('seagrass' + i);
            
            var sp = newgrass.addComponent(cc.Sprite);
            sp.spriteFrame = this.spriteFrame;
            var x = Math.random() * 860 + 30;
            var y = Math.random() * 120 + 15;
            newgrass.x = x;
            newgrass.y = y;
            newgrass.scale = 2;

            newgrass.parent = this.node;

            console.log(i);
        }
    },

    // update (dt) {},
});
