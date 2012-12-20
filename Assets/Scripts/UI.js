#pragma strict

var bystanderTexture : Texture;
var bystanderHitTexture : Texture;
var bystanderLeeway : int;
var gun : GameObject;
var targetTexture : Texture;

private var targetEnabled : boolean;

function Start() {
  targetEnabled = false;
}

function OnGUI() {
  if (gun.active) {
    for (var i = 0; i < bystanderLeeway; ++i) {
      GUI.DrawTexture(new Rect(10 + 96 * i, 10, 128, 128), bystanderTexture);
    }
  }
  if (targetEnabled) {
    GUI.DrawTexture(new Rect(Screen.width - 138, 10, 128, 128), targetTexture);
  }
}

function EnableTargetGui() {
  targetEnabled = true;
}