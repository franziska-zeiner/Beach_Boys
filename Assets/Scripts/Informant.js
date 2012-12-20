#pragma strict

var gunAudioClips : AudioClip[];
var targetAudioClips : AudioClip[];
var minSpeakDelay : float;
var maxSpeakDelay : float;

private var audioSource : AudioSource;
private var lastPaceTime : float;
private var lastSpeakTime : float;
private var speakDelay : float;
private var targetMessageEnabled : boolean;

function Start () {
  audioSource = GetComponent(AudioSource);
  lastSpeakTime = Time.fixedTime;
  speakDelay = Random.Range(minSpeakDelay, maxSpeakDelay);
}

function npcPlaySound(index : int, time : float) {
  audioSource.clip = targetMessageEnabled ? targetAudioClips[index] : gunAudioClips[index];
  audioSource.time = time * audioSource.clip.length;
  audioSource.Play();
}

function EnableTargetMessage() {
  targetMessageEnabled = true;
}

function Update () {
  if (networkView.isMine) {
    if (!audioSource.isPlaying && Time.fixedTime - lastSpeakTime > speakDelay) {
	  var clipIndex : int = Random.Range(0, targetMessageEnabled ? targetAudioClips.Length : gunAudioClips.Length);
	  var clipTime : float = Random.value;
	  npcPlaySound(clipIndex, clipTime);
	  lastSpeakTime = Time.fixedTime;
	  speakDelay = Random.Range(minSpeakDelay, maxSpeakDelay);
    } else if (Time.fixedTime - lastSpeakTime > speakDelay) {
      lastSpeakTime = Time.fixedTime;
    }
  }
}