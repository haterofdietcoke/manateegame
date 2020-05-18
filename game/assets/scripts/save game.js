cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Button,
        paused: {
            default: false,
            type: cc.Boolean
        },
    },

    onLoad: function () {
        this.button.node.on('click', this.callback, this);
    },

    callback: function (button) {
        // do whatever you want with button
        // In addition, attention to this way registered events, can not pass customEventData
        console.log("Clicked");
        if (!this.paused) {
            this.paused = true;
            console.log("Pausing");
            cc.director.pause();
        } else {
            console.log("Resume");
            this.paused = false;
            cc.director.resume();
        }
    }
});