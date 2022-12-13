export default function drawCircle(scene, i, circle_answer, length) {
    let circle_radius = 30; // Радиус кругов

    let circle = scene.add.circle(scene.sys.game.canvas.width/length + circle_radius * 2 * i + 20 * i - circle_radius, 450, circle_radius, 0x6666ff);
    let text = scene.add.text(0, 0, '+' + circle_answer, {fontSize:'20px', color:'white', fontFamily: 'Arial'});

    Phaser.Display.Align.In.Center(text, circle);

    return circle;
}