#pragma strict

var spawnAreaWidth : float;
var spawnCount : int;

function Start () {
//  if (Network.isServer) {
//    var spawned : int = 0;
//    while (spawned < spawnCount) {
//      var position : Vector3 = randomPoint();
//    }
//  }
}

function randomPoint() {
  var min : float = -spawnAreaWidth / 2.0;
  var max : float = spawnAreaWidth / 2.0;
  return transform.position + new Vector3(Random.Range(min, max), 0, Random.Range(min, max));
}