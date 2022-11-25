let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 2 2 2 4 . . . . . . 
    . . . . 4 4 2 2 2 4 4 . . . . . 
    . . . . 4 4 2 2 2 4 4 . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . 7 7 . 7 7 7 7 . . . . . 
    . . . . . . . 7 . 7 7 . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f . . 1 1 . . . . . . . . . 
        . . f . 1 1 1 . . . . . . . . . 
        . . 5 5 1 5 f 5 f 5 . . . . . . 
        . . f 5 f 5 f 5 f 5 f f f . . . 
        . . . 5 f 5 f 5 f 5 . . . . . . 
        . . . f . . . . . f . . . . . . 
        . . f f . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(0, -25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
