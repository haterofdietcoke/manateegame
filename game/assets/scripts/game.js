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
        score: {
            default: 0,
            displayName :"Score: ",
            tooltip : "The score of player"
        },
        score_display: {
            default: null,
            type: cc.Label
        },
        friend_points: {
            default: 20
        },
        eating_points: {
            default: 5
        },
        
    },

    // LIFE-CYCLE CALLBACKS:
    

    onLoad() {
        this.score = 0;
    },

    start () {
    },

    // update (dt) {},
    gainScore: function () {
        console.log("adding to score");
        this.score += 1;
        this.score_display.string = "Score" + this.score;
    },
});
