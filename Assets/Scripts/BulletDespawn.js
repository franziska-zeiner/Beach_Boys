#pragma strict

var bulletLifetime : float;

private var spawnTime : float;

function Start () {
  spawnTime = Time.fixedTime;
}

function Update () {
  if (Time.fixedTime - spawnTime > bulletLifetime) {
    Destroy(gameObject);
  }
}