let strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
strip.setBrightness(128)
strip.clear()
strip.show()
let count = 0
let diff = 1
let delay = 2
let wide = 3
basic.forever(function () {
    if (count == 17) {
        diff = -1
    } else if (count == 2) {
        diff = 1
    }
    count += diff
    strip.setPixelColor(count, neopixel.rgb(255, 40, 0))
    strip.setPixelColor(count - 1, neopixel.rgb(96, 0, 0))
    strip.setPixelColor(count + 1, neopixel.rgb(96, 0, 0))
    strip.setPixelColor(count - 2, neopixel.rgb(16, 0, 0))
    strip.setPixelColor(count + 2, neopixel.rgb(16, 0, 0))
    strip.show()
    basic.pause(delay)
    strip.clear()
})
