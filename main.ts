let strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
let count = 0
let diff = 1
let delay = 100
let wide = 2
basic.forever(function () {
    if (count == 19) {
        diff = -1
    } else if (count == 0) {
        diff = 1
    }
    count += diff
    strip.setPixelColor(count, neopixel.rgb(255, 0, 0))
    strip.setPixelColor(count - 1, neopixel.rgb(128, 0, 0))
    strip.setPixelColor(count + 1, neopixel.rgb(128, 0, 0))
    strip.show()
    basic.pause(delay)
    strip.clear()
})
