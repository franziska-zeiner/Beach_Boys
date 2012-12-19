#pragma strict

var fireBall : GameObject;

@RPC
function Shoot(position : Vector3, orientation : Quaternion, velocity : Vector3) {
  var shot : GameObject = Network.Instantiate(fireBall, position, orientation, 0);
  shot.GetComponent(Rigidbody).velocity = velocity;
}