import phaser from 'phaser'
import { WelcomeScene } from './WelcomeScene'
import { GameScene } from './GameScene'

const config = {
    width: 640,
    height: 480,
    parent: 'content',
    scene: [WelcomeScene, GameScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

const game = new phaser.Game(config)
