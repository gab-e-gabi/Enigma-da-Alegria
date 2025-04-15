export default class abertura extends Phaser.Scene {

  constructor () {
    super('abertura')
  }

  preload () {
    this.load.image('fundo', 'assets/abertura-fundo.png')
  }

  create () {
    this.add.image(400, 225, 'fundo')
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.stop()
        this.scene.start('preload')
      })
  }

  update () { }
}