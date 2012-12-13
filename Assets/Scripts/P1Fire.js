var fireBall : GameObject;
var shootPoint : Transform;
var projectileVelocity : float;
var shotDelay : float;

private var previousShotTime : float;

function Start() {
  previousShotTime = Mathf.NegativeInfinity;
}

function Update () {
  if(Screen.lockCursor && (Time.fixedTime - previousShotTime > shotDelay) && Input.GetButton("Fire P1")) {
    var shot : GameObject = Instantiate(fireBall, shootPoint.position, shootPoint.rotation);
    shot.GetComponent(Rigidbody).velocity = projectileVelocity * shootPoint.forward;
    previousShotTime = Time.fixedTime;
  }
}
