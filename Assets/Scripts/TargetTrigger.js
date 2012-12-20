#pragma strict

private var gunEnabled : boolean;

function Start() {
  gunEnabled = false;
}

function EnableTargetMessage() {
  gunEnabled = true;
}

function OnTriggerEnter(other : Collider) {
  if (gunEnabled && other.gameObject.tag == "Player") {
    other.gameObject.SendMessage("EnableTargetGui");
  }
}