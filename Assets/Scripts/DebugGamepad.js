#pragma strict

private static var buttons = [
  [
    KeyCode.Joystick1Button0,
    KeyCode.Joystick1Button1,
    KeyCode.Joystick1Button2,
    KeyCode.Joystick1Button3,
    KeyCode.Joystick1Button4,
    KeyCode.Joystick1Button5,
    KeyCode.Joystick1Button6,
    KeyCode.Joystick1Button7,
    KeyCode.Joystick1Button8,
    KeyCode.Joystick1Button9,
    KeyCode.Joystick1Button10,
    KeyCode.Joystick1Button11,
    KeyCode.Joystick1Button12,
    KeyCode.Joystick1Button13,
    KeyCode.Joystick1Button14,
    KeyCode.Joystick1Button15,
    KeyCode.Joystick1Button16,
    KeyCode.Joystick1Button17,
    KeyCode.Joystick1Button18,
    KeyCode.Joystick1Button19
], [
    KeyCode.Joystick2Button0,
    KeyCode.Joystick2Button1,
    KeyCode.Joystick2Button2,
    KeyCode.Joystick2Button3,
    KeyCode.Joystick2Button4,
    KeyCode.Joystick2Button5,
    KeyCode.Joystick2Button6,
    KeyCode.Joystick2Button7,
    KeyCode.Joystick2Button8,
    KeyCode.Joystick2Button9,
    KeyCode.Joystick2Button10,
    KeyCode.Joystick2Button11,
    KeyCode.Joystick2Button12,
    KeyCode.Joystick2Button13,
    KeyCode.Joystick2Button14,
    KeyCode.Joystick2Button15,
    KeyCode.Joystick2Button16,
    KeyCode.Joystick2Button17,
    KeyCode.Joystick2Button18,
    KeyCode.Joystick2Button19
  ]
];

function OnGUI() {
  for (var i = 0; i < 2; ++i) {
    for (var j = 0; j < 20; ++j) {
      if (Input.GetKey(buttons[i][j])) {
        Debug.Log("joystick " + i + " button " + j);
      }
    }
  }
}