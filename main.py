def on_received_number(receivedNumber):
    if receivedNumber == 1:
        robotbit.servo(robotbit.Servos.S3, 90)
    elif receivedNumber == 2:
        robotbit.servo(robotbit.Servos.S4, 90)
    elif receivedNumber == 3:
        robotbit.servo(robotbit.Servos.S6, 90)
    elif receivedNumber == 4:
        robotbit.servo(robotbit.Servos.S3, 0)
        robotbit.servo(robotbit.Servos.S4, 0)
        robotbit.servo(robotbit.Servos.S6, 0)
radio.on_received_number(on_received_number)

basic.show_icon(IconNames.HEART)
radio.set_group(1)
robotbit.servo(robotbit.Servos.S3, 0)
robotbit.servo(robotbit.Servos.S4, 0)
robotbit.servo(robotbit.Servos.S6, 0)