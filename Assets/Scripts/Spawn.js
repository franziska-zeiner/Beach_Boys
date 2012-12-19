#pragma strict

var playerPrefab : Transform;

function OnServerInitialized() {
  Spawnplayer();
}

function OnConnectedToServer() {
  Spawnplayer();
}

function Spawnplayer() {
  var myNewPlayer : Transform = Network.Instantiate(playerPrefab, transform.position, transform.rotation, 0);
}