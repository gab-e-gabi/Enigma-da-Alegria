import animacao from './animacao.js';

export default class CenaJogo extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaJogo' });
    }

    create() {
        // Adicionar a imagem de fundo
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'map').setOrigin(0.5, 0.5);

        // Adicionar o sprite
        const sprite = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'ernesto').setOrigin(0.5, 0.5);

        // Passar a cena e o sprite para a função de animação
        animacao(this, sprite);
    }
}
