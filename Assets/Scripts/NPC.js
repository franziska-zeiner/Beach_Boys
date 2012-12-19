#pragma strict

var animator : Animator;
var audioClips : AudioClip[];
var paceDuration : float;
var speed : float;

private var audioSource : AudioSource;
private var controller: CharacterController;
private var lastPaceTime : float;

function Start () {
  audioSource = GetComponent(AudioSource);
  controller = GetComponent(CharacterController);
  lastPaceTime = Time.fixedTime - paceDuration * Random.value;
  audioSource.clip = audioClips[Random.Range(0, 23)];
  audioSource.time = Random.Range(0, audioSource.clip.length);
  audioSource.Play();
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