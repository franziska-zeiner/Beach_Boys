var fireBall : GameObject;
var shootPoint : Transform;
var projectileVelocity : float;

function Update () {
  if(Input.GetButton("Fire P1")) {
    var shot : GameObject = Instantiate(fireBall, shootPoint.position, shootPoint.rotation);
    shot.GetComponent(Rigidbody).velocity = projectileVelocity * shootPoint.forward;
  }
}
