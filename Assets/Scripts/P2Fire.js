var fireBall : GameObject;
var shootPoint : Transform;
var projectileVelocity : float;

function Update () {
  if(Screen.lockCursor && Input.GetButton("Fire P2")) {
    var shot : GameObject = Instantiate(fireBall, shootPoint.position, shootPoint.rotation);
    shot.GetComponent(Rigidbody).velocity = projectileVelocity * shootPoint.forward;
  }
}
