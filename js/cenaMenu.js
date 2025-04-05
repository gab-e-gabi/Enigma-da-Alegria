export default class CenaMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaMenu' });
    }

    preload() {
        this.load.image('map', 'images/map.png');
        this.load.spritesheet('ernesto', 'images/base.png', 
            { frameWidth: 64, frameHeight: 64 });	
        this.add.text(20, 20, 'Pressione para iniciar', { font: '25px Arial', fill: '#ffffff' });
    }

    create() {
        this.add.text(20, 20, 'Pressione para iniciar', { font: '25px Arial', fill: '#ffffff' });
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'map').setOrigin(0.5, 0.5);
        this.input.once('pointerdown', () => {
            this.scene.start('CenaJogo');
        });
    }
}