var fireBall : GameObject;
var shootPoint : Transform;
var projectileVelocity : float;
var shotDelay : float;

private var previousShotTime : float;

function Start() {
  previousShotTime = Mathf.NegativeInfinity;
}

function Update () {
  if (networkView.isMine) {
	  if((Time.fixedTime - previousShotTime > shotDelay) && Input.GetButton("Fire P1")) {
	    Debug.Log("Firing as server.");
	    var shot : GameObject = Network.Instantiate(fireBall, shootPoint.position, shootPoint.rotation, 0);
	    shot.GetComponent(Rigidbody).velocity = projectileVelocity * shootPoint.forward;
	    previousShotTime = Time.fixedTime;
	  }
  } else {
      if((Time.fixedTime - previousShotTime > shotDelay) && Input.GetButton("Fire P1")) {
        Debug.Log("Firing as client.");
	    networkView.RPC("Fire", RPCMode.All, shootPoint.position, shootPoint.rotation, projectileVelocity * shootPoint.forward);
	    previousShotTime = Time.fixedTime;
	  }
  }
}
