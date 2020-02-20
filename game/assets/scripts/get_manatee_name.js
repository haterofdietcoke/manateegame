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
        default_name: {
            default: "Dumpling"
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        script_name = cc.getComponent(cc.Label)
    },

    onKeyDown: function (event) {
    },

    onKeyUp: function (event) {

        if (event.key.toUpperCase() != event.key.toLowerCase()) {
            name += event.key;
        } else if (event.key == Enter || event.key == Return) {
            if (name == "") {
                name = default_name;
            }
            scenes = ["low_water", "playscene"];
            choice = (Math.random() * scenes.length).toPrecision(1);
            console.log(name);
            cc.director.loadScene("playscene")
        }
    }
});
