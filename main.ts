basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        basic.pause(1000)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.No)
    }
})
