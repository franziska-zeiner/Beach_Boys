#pragma strict

function Start () {
}

function OnTriggerEnter(other : Collider) {
  if (other.tag == "Player" && gameObject.active) {
    gameObject.active = false;
    other.gameObject.SendMessage("EnableGun");
  }
}

function Update () {

}