input.onButtonPressed(Button.A, function () {
	
})
let strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
let count = 0
let diff = 1
basic.forever(function () {
    if (count == 20) {
        diff = -1
    } else if (count == 0) {
        diff = 1
    }
    count += diff
    strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(count - 1, neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
