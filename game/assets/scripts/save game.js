cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Button,
        label: cc.Label,
        paused: {
            default: false
        },
        music: {
            default: null,
            type: cc.AudioClip
        },
        x: {
            default: 800
        },
        y: {
            default: 450
        }
    },

    onLoad: function () {
        this.node.setPosition(this.x, this.y);
        this.button.color = new cc.Color(0, 162, 232);
        this.button.node.on('click', this.callback, this);
        this.label.string = "Save";
    },
    start: function () {
        cc.audioEngine.stopAll();
        var audioID = cc.audioEngine.play(this.music, true, 0.5)
    },
    callback: function (button) {
        // do whatever you want with button
        // In addition, attention to this way registered events, can not pass customEventData
        var audioID = cc.audioEngine.resume(audioID);
        console.log("Clicked");
        if (!this.paused) {
            cc.audioEngine.pauseAll();
            this.paused = true;
            console.log("Pausing");
            this.label.string = "Resume";
            cc.director.pause();
        } else {
            console.log("Resume");
            this.paused = false;
            var audioID = cc.audioEngine.resumeAll();
            this.label.string = "Save";
            cc.director.resume();
        }
    },
});