#pragma strict

var animator : Animator;
var audioClips : AudioClip[];
var minSpeakDelay : float;
var maxSpeakDelay : float;
var paceDuration : float;
var speed : float;

private var audioSource : AudioSource;
private var controller: CharacterController;
private var lastPaceTime : float;
private var lastSpeakTime : float;
private var speakDelay : float;

function Start () {
  audioSource = GetComponent(AudioSource);
  controller = GetComponent(CharacterController);
  lastPaceTime = Time.fixedTime - paceDuration * Random.value;
  lastSpeakTime = Time.fixedTime;
  speakDelay = Random.Range(minSpeakDelay, maxSpeakDelay);
}

function npcPlaySound(index : int, time : float) {
  audioSource.clip = audioClips[index];
  audioSource.time = time * audioSource.clip.length;
  audioSource.Play();
}

function Update () {
  if (networkView.isMine) {
    if (Time.fixedTime - lastPaceTime > paceDuration) {
      transform.Rotate(180.0 * Vector3.up);
      lastPaceTime = Time.fixedTime;
    }
    if (!audioSource.isPlaying && Time.fixedTime - lastSpeakTime > speakDelay) {
	  var clipIndex : int = Random.Range(0, 23);
	  var clipTime : float = Random.value;
	  npcPlaySound(clipIndex, clipTime);
	  lastSpeakTime = Time.fixedTime;
	  speakDelay = Random.Range(minSpeakDelay, maxSpeakDelay);
    } else if (Time.fixedTime - lastSpeakTime > speakDelay) {
      lastSpeakTime = Time.fixedTime;
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