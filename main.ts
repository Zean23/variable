input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
// left
input.onGesture(Gesture.TiltLeft, function () {
    Sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
// Right
input.onGesture(Gesture.TiltRight, function () {
    Sprite.change(LedSpriteProperty.X, 1)
})
let Sprite: game.LedSprite = null
let number = 0
basic.showIcon(IconNames.Heart)
number = 7
Sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
