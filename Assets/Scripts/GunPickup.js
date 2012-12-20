#pragma strict

var informant : GameObject;

function OnTriggerEnter(other : Collider) {
  if (other.tag == "Player" && gameObject.active) {
    gameObject.active = false;
    other.gameObject.SendMessage("EnableGun");
    informant.SendMessage("EnableTargetMessage");
  }
}