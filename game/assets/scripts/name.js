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
        manatee_name: {
            default: ""
        },
        name_input: {
            default: "Name your manatee: "
        },

    },

    onLoad: function () {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    destroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this._super()
    },

    onKeyDown: function moveManatee(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            this.manatee_name += String.fromCharCode(event.keyCode);
            this.name_input += String.fromCharCode(event.keyCode);
            console.log(this.name_input);
        } else if (event.keyCode == 13) {
            if (this.manatee_name == "") {
                this.manatee_name = "Dumpling";
            }
            Global.name = this.manatee_name;
            console.log(Global.name);
            cc.director.loadScene("start_screen");
        }
    },
});
