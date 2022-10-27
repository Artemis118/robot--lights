input.onButtonPressed(Button.A, function () {
    Pixel_Array.range(0, 1).showColor(neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    Pixel_Array.range(2, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
    Pixel_Array.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    Pixel_Array.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Green))
    Pixel_Array.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    Pixel_Array.range(4, 3).showColor(neopixel.colors(NeoPixelColors.Blue))
    Pixel_Array.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.B, function () {
    Pixel_Array.clear()
    Pixel_Array.show()
})
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
