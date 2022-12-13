import { person_way, computer_way, start_cookie, ceil_cookie, answers } from "./StartGame";

export default function analyze() {
    let playerWin = true;
    let cookie = start_cookie; 
    for(let i = 0; i < person_way.length; i++) {
        cookie += person_way[i];
        if (answers[cookie] === 'success') {
            playerWin = false;
            break;
        }

        if (computer_way[i]) {
            cookie += computer_way[i];
            if (cookie >= ceil_cookie) {
                playerWin = false;
                break;
            }
        }
    }

    if (cookie < ceil_cookie) {
        playerWin = false;
    }

    console.log(playerWin);

    return playerWin;
}