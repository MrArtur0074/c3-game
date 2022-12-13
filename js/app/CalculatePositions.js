export default function calculatePositions(circle_answers, ceil_cookie) {
    let pos = [];
    for(let i = ceil_cookie - 1; i >= 0; i-- ) {
       let point_state = 'fail';
       for(let j = 0; j < circle_answers.length; j++) {
            let step = circle_answers[j] + i;
            if (step >= ceil_cookie || pos[step] === 'fail')
            point_state = 'success';
       }
       pos[i] = point_state;
    }

    return pos;
}