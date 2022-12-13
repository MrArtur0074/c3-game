import levels from './levels/Levels'
import random from './Random'
import calculatePositions from './CalculatePositions';
import drawCircle from './DrawCircle';
import move from './Move';
import computerMove from './ComputerMove';

export let person_way = [], 
    computer_way = [],
    start_cookie = 0,
    ceil_cookie,
    current_cookie = 0,
    answers;

export default function startGame(scene, level) {
    let circle_answers = random(levels[level - 1].minAddCookie, levels[level - 1].maxAddCookie, 2);
    let isPlayer = true;
    let circle = [];
    ceil_cookie = random(levels[level - 1].minEndCookie, levels[level - 1].maxEndCookie)[0];
    answers = calculatePositions(circle_answers, ceil_cookie);

    function setPlayerMove() {
        isPlayer = computerMove(scene, answers, circle_answers, current_cookie, ceil_cookie);
    }

    for (let i = random(1, 3)[0]; i < ceil_cookie; i++) {
        if (answers[i] === 'success') {
            start_cookie = current_cookie = i;
            break;
        }
    }
    
    scene.start_text.setText(current_cookie);
    scene.cookie_text.setText(ceil_cookie);
    Phaser.Display.Align.In.Center(scene.cookie_text, scene.cookie);

    for(let i = 0; i < circle_answers.length; i++) {
        circle[i] = drawCircle(scene, i, circle_answers[i], circle_answers.length);
        circle[i].setInteractive ();
        circle[i].on('pointerdown', function(pointer){
            if (isPlayer) {
                isPlayer = false;
                current_cookie = move(circle_answers[i], scene);
                isPlayer = setTimeout(setPlayerMove, 1000);
            }
        });
    }
}