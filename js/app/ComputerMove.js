import move from './Move'
import random from './Random';

export default function computerMove(scene, answers, circle_answers, current_cookie, ceil_cookie) {
    let move_comp = false;

    for(let i = 0; i < circle_answers.length; i++)
        if (answers[current_cookie + circle_answers[i]] === 'fail' || current_cookie + circle_answers[i] >= ceil_cookie) {
            move(circle_answers[i], scene,  'computer');
            move_comp = true;
            break;
        }

    if (!move_comp) {
        let rand = random(0, circle_answers.length - 1)[0];
        move(circle_answers[rand], scene, 'computer');
    }

    return true;
}