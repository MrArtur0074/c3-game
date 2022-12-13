import Phaser from 'Phaser'; // Подключение Phaser
import MainScene from './scene/MainScene';

const width = 1280, height = 720;

const config = {
    type: Phaser.WEBGL, //
    width: width,
    height: height,
    backgroundColor: '#000000',
    parent: 'game', 
    physics: {
        default: 'matter',
        matter: {
            restingThresh: 2,
            gravity: {
                y: 0
            }
        }
    },
    scene: [MainScene]
};

let game = new Phaser.Game(config);

