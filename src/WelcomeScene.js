import phaser from 'phaser'

export class WelcomeScene extends phaser.Scene {
    constructor() {
        super({
            key: 'WelcomeScene'
        })
    }
    preload() {
        console.log('WelcomeScene preload')
        this.load.image('background', 'assets/background.png')
        this.load.atlas('ball', 'assets/balls.png', 'assets/balls.json')
        this.load.audio('hitWall', 'assets/click.mp3')
    }

    create() {
        this.game.anims.create({
            key: 'rotate',
            frames: this.anims.generateFrameNames('ball'),
            frameRate: 4,
            repeat: -1
        })
        this.sound.add('hitWall')
        this.scene.start('GameScene')
    }
}
