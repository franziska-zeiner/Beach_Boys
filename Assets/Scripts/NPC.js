#pragma strict

var animator : Animator;
var paceDuration : float;
var speed : float;

private var controller: CharacterController;
private var lastPaceTime : float;

function Start () {
  controller = GetComponent(CharacterController);
  lastPaceTime = Time.fixedTime - paceDuration * Random.value;
}

function Update () {
  if (networkView.isMine) {
    if (Time.fixedTime - lastPaceTime > paceDuration) {
      transform.Rotate(180.0 * Vector3.up);
      lastPaceTime = Time.fixedTime;
    }
    controller.SimpleMove(speed * transform.forward);
    npcSetSpeed();
    networkView.RPC("npcSetSpeed", RPCMode.Others);
  }
}

@RPC
function npcSetSpeed() {
  animator.SetFloat("Speed", 1.0);
}