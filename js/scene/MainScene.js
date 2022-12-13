import Phaser from 'Phaser';
import Cookie from '../../assets/cookie.png'
import levels from '../app/levels/Levels.js'
import startGame from '../app/StartGame';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super();
        this.score = 0;
    }

    preload() {
        this.load.image('cookie', Cookie);
    }

    create() {
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;
        const text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#ff0000' });
        this.cookie = this.add.image(this.width/2, this.height/3, 'cookie').setInteractive();
        this.cookie_text = this.add.text(0, 0, '0', { font: '24px Courier', fill: '#000000' });
        this.start_text = this.add.text(this.width/2, this.height/2, '0', { font: '24px Courier', fill: '#ff0000' });

        this.cookie.setScale(0.1);
        Phaser.Display.Align.In.Center(this.cookie_text, this.cookie);
        text.setText([
            'Score: ' + this.score
        ]);

        startGame(this, 1);
    }

    update() {
        
    }
}