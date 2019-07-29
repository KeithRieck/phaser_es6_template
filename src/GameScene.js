import { Scene } from 'phaser'
import { BallGroup } from './BallGroup';

export class GameScene extends Scene {
    constructor() {
        super({
            key: 'GameScene'
        })
        this.staticBg = null
        this.scrollingBg = null
        this.ballGroup = null;
    }

    create() {
        console.log('GameScene preload')
        this.staticBg = this.add.image(320, 240, 'background')
        this.ballGroup = new BallGroup(this)
        for (var i = 0; i < 8; i++) {
            this.ballGroup.addRandom()
        }
    }

    update() {
      this.ballGroup.update()
        
    }
}
