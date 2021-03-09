let cambien2 = 0
let cambien = 0
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.forever(function () {
    cambien = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (cambien <= 18 && cambien >= 3) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
})
basic.forever(function () {
    cambien = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (cambien <= 6 && cambien >= 3) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
basic.forever(function () {
    cambien2 = sonar.ping(
    DigitalPin.P16,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    if (cambien2 <= 18 && cambien2 >= 2) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
})
basic.forever(function () {
    cambien2 = sonar.ping(
    DigitalPin.P16,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    if (cambien2 <= 6 && cambien2 >= 2) {
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
