cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 8) {
        cuteBot.motors(-30, -30)
    } else if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 12) {
        cuteBot.motors(0, 0)
    } else {
        cuteBot.motors(30, 30)
    }
})
