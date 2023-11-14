let value = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(value)
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P1)
    if (pins.analogReadPin(AnalogPin.P1) > 700) {
        basic.showString("H")
    } else {
        basic.showString("L")
    }
})
