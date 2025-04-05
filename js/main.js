import CenaMenu from './cenaMenu.js';
import CenaJogo from './cenaJogo.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: [CenaMenu, CenaJogo]
};

const game = new Phaser.Game(config);