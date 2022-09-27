let current_temperature = 0
// Created By: Alex.C
// Creaton On:2022/09/27
// This block of code tells the microbit to flash the temperature number on the LED's.
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(500)
    basic.clearScreen()
})
