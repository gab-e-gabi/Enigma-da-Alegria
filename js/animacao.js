export default function animacao(scene, sprite) {
    // Criar animações para o sprite
    scene.anims.create({
        key: 'W',
        frames: scene.anims.generateFrameNumbers('ernesto', { start: 1, end: 8 }),
        frameRate: 8,
        repeat: -1 // Repetir indefinidamente
    });

    scene.anims.create({
        key: 'A',
        frames: scene.anims.generateFrameNumbers('ernesto', { start: 10, end: 17 }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: 'S',
        frames: scene.anims.generateFrameNumbers('ernesto', { start: 19, end: 26 }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: 'D',
        frames: scene.anims.generateFrameNumbers('ernesto', { start: 27, end: 35 }),
        frameRate: 8,
        repeat: -1
    });

    // Configurar controles do teclado
    scene.input.keyboard.on('keydown-W', () => {
        if (!sprite.anims.isPlaying) {
            sprite.play('W');
        }
    });

    scene.input.keyboard.on('keyup-W', () => {
        sprite.stop();
    });

    scene.input.keyboard.on('keydown-A', () => {
        if (!sprite.anims.isPlaying) {
            sprite.play('A');
        }
    });

    scene.input.keyboard.on('keyup-A', () => {
        sprite.stop();
    });

    scene.input.keyboard.on('keydown-S', () => {
        if (!sprite.anims.isPlaying) {
            sprite.play('S');
        }
    });

    scene.input.keyboard.on('keyup-S', () => {
        sprite.stop();
    });

    scene.input.keyboard.on('keydown-D', () => {
        if (!sprite.anims.isPlaying) {
            sprite.play('D');
        }
    });

    scene.input.keyboard.on('keyup-D', () => {
        sprite.stop();
    });
}