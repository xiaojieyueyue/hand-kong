radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        robotbit.Servo(robotbit.Servos.S3, 115)
    } else if (receivedNumber == 2) {
        robotbit.Servo(robotbit.Servos.S4, 147)
    } else if (receivedNumber == 3) {
        robotbit.Servo(robotbit.Servos.S6, 134)
    } else if (receivedNumber == 4) {
        robotbit.Servo(robotbit.Servos.S3, 0)
        robotbit.Servo(robotbit.Servos.S4, 0)
        robotbit.Servo(robotbit.Servos.S6, 0)
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
robotbit.Servo(robotbit.Servos.S3, 0)
robotbit.Servo(robotbit.Servos.S4, 0)
robotbit.Servo(robotbit.Servos.S6, 0)
