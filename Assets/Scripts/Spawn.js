#pragma strict

var playerPrefab : Transform;
var playerTwo : boolean;

function OnServerInitialized() {
  if (!playerTwo) {
    Spawnplayer();
  }
}

function OnConnectedToServer() {
  if (playerTwo) {
    Spawnplayer();
  }
}

function Spawnplayer() {
  var myNewPlayer : Transform = Network.Instantiate(playerPrefab, transform.position, transform.rotation, 0);
}