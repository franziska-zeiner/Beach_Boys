#pragma strict

var bulletLifetime : float;
var bulletDamage : float;

private var spawnTime : float;

function OnCollisionEnter(collision : Collision) {
  Debug.Log(collision.gameObject.tag);
  if (collision.gameObject.tag == "Player") {
    Debug.Log("Hit player");
    var ray : Ray = new Ray(transform.position, GetComponent(Rigidbody).velocity.normalized);
    var hit : RaycastHit = new RaycastHit();
    hit.point = collision.contacts[0].point;
    collision.gameObject.SendMessage("OnHit", bulletDamage, SendMessageOptions.DontRequireReceiver);
  } else if (collision.gameObject.tag == "NPC") {
    Network.Destroy(collision.gameObject);
  }
}

function Start () {
  spawnTime = Time.fixedTime;
}

function Awake() {
  if (!networkView.isMine) {
    gameObject.rigidbody.useGravity = false;
  }
}

function Update () {
  if (Time.fixedTime - spawnTime > bulletLifetime) {
    Network.Destroy(gameObject);
  }
}