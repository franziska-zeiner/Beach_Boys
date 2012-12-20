#pragma strict

var audioClips : AudioClip[];
var minSpeakDelay : float;
var maxSpeakDelay : float;

private var audioSource : AudioSource;
private var lastPaceTime : float;
private var lastSpeakTime : float;
private var speakDelay : float;

function Start () {
  audioSource = GetComponent(AudioSource);
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
    if (!audioSource.isPlaying && Time.fixedTime - lastSpeakTime > speakDelay) {
	  var clipIndex : int = Random.Range(0, audioClips.Length);
	  var clipTime : float = Random.value;
	  npcPlaySound(clipIndex, clipTime);
	  lastSpeakTime = Time.fixedTime;
	  speakDelay = Random.Range(minSpeakDelay, maxSpeakDelay);
    } else if (Time.fixedTime - lastSpeakTime > speakDelay) {
      lastSpeakTime = Time.fixedTime;
    }
  }
}