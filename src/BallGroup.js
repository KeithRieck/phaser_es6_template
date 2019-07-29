import phaser from 'phaser'
import { Math } from 'phaser'
import { BallSprite } from './BallSprite';

export class BallGroup extends phaser.GameObjects.Group {

    constructor(ss) {
        super(ss)
        this.classType = BallSprite
        this.runChildUpdate = true
        this.game = ss.game
    }

    addRandom() {
        var x = Math.RND.integerInRange(20, this.game.canvas.width - 10)
        var y = Math.RND.integerInRange(20, this.game.canvas.height -  10)
        var angle = Math.RND.between(0, 360)
        var ball = new BallSprite(this.scene, x, y, angle)
        this.add(ball, true)
        return ball
    }

    update() {
        if (this.runChildUpdate) {
            this.children.iterate(
                function (ball) { ball.update() }
            )
        }
    }
}