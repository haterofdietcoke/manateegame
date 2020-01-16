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
            decrease: {
                default: 0.2			
            },
            warning: {
                default: 0.5
			},
            serious_warning: {
                default: 0.25     
			},
            manatee: {
                default: null,
                type: cc.Node
            },
            breath_location: {
                default: null,
                type: cc.Node
            },


        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    
    update: function (dt) {
    var progressBar = this.getComponent(cc.ProgressBar)
    var progress = progressBar.progress;
    console.log(progress)
    if (progress > 0) {
        progress -= this.decrease * dt;
        console.log(progress)
        if (progress < 0.75) {
            var dx = this.breath_location.x - this.manatee.x;
            var dy = this.breath_location.y - this.manatee.y;
            var mx = dx * dt;
            var my = dy * dt;
            this.manatee.x += mx;
            this.manatee.y += my;
        }
    }
    progressBar.progress = progress;
    },
});
