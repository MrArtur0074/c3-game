import {computer_way, person_way, ceil_cookie} from './StartGame';
import analyze from './Analyze';

export default function move(answer, scene, person = 'player', ) {
    scene.start_text.setText(Number(scene.start_text.text) + answer);

    (person === 'player')? person_way.push(answer): computer_way.push(answer);

    if (Number(scene.start_text.text) >= ceil_cookie) {
        (analyze())? playerWin(): computerWin();
        return;
    }
}

function playerWin() {
    alert('Вы победили');
    location.reload();
}

function computerWin() {
    alert('Вы проиграли');
    location.reload();
}