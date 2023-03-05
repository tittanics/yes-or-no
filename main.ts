input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
