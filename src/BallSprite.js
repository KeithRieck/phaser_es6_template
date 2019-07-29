import phaser from 'phaser'

export class BallSprite extends phaser.GameObjects.Sprite {

    constructor(ss, xx, yy, angle) {
        super(ss, xx, yy, 'ball')
        this.game = ss.game
        const SPEED = 100
        this.dx = SPEED * Math.cos(2 * Math.PI * (angle / 360.0))
        this.dy = SPEED * Math.sin(2 * Math.PI * (angle / 360.0))
        this.lastDraw = this.game.getTime()
        this.anims.play('rotate')
        this.sound = ss.sound
    }

    update() {
        var timeDiff = this.game.getTime() - this.lastDraw
        this.x += this.dx * (timeDiff / 1000.0)
        this.y += this.dy * (timeDiff / 1000.0)
        if (this.x > this.game.canvas.width - this.width / 2) {
            this.dx = -1 * this.dx
            this.x = this.game.canvas.width - this.width / 2
            this.hitSound()
        } else if (this.x < this.width / 2) {
            this.dx = -1 * this.dx
            this.x = this.width / 2
            this.hitSound()
        }
        if (this.y > this.game.canvas.height - this.height / 2) {
            this.dy = -1 * this.dy
            this.y = this.game.canvas.height - this.height / 2
            this.hitSound()
        } else if (this.y < this.height / 2) {
            this.dy = -1 * this.dy
            this.y = this.height / 2
            this.hitSound()
        }
        this.lastDraw = this.game.getTime()
    }

    hitSound() {
        this.sound.play('hitWall', { volume: 0.25 })
    }
}

