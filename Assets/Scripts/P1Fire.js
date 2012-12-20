var fireBall : GameObject;
var gun : GameObject;
var shootPoint : Transform;
var projectileVelocity : float;
var shotDelay : float;

private var justShot : boolean;
private var previousShotTime : float;

function Start() {
  justShot = false;
  previousShotTime = Mathf.NegativeInfinity;
}

function Update () {
  if (networkView.isMine) {
	  if(!justShot && gun.active && (Time.fixedTime - previousShotTime > shotDelay) && Input.GetButton("Fire P1")) {
	    Debug.Log("Firing as server.");
	    var shot : GameObject = Network.Instantiate(fireBall, shootPoint.position, shootPoint.rotation, 0);
	    shot.GetComponent(Rigidbody).velocity = projectileVelocity * shootPoint.forward;
	    shot.SendMessage("SetPlayer", gameObject);
	    justShot = true;
	    previousShotTime = Time.fixedTime;
	  }
	  if (justShot && !Input.GetButton("Fire P1")) {
	    justShot = false;
	  }
  }
}
