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
        var audioID = cc.audioEngine.play(this.music, true, 0.5)
    },
    callback: function (button) {
        // do whatever you want with button
        // In addition, attention to this way registered events, can not pass customEventData
        
        console.log("Clicked");
        if (!this.paused) {
            cc.audioEngine.stop(this.music);
            this.paused = true;
            console.log("Pausing");
            this.label.string = "Resume";
            cc.director.pause();
        } else {
            console.log("Resume");
            this.paused = false;
            var audioID = cc.audioEngine.resume(this.music, true, 0.5);
            this.label.string = "Save";
            cc.director.resume();
            cc.audioEngine.resumeAll();
        }
    },
});