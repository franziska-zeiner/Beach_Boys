using UnityEngine;
using System.Collections;

public class RayAndHit {
	public Ray ray;
	public RaycastHit hit;
	public RayAndHit(Ray ray, RaycastHit hit) {
		this.ray = ray;
		this.hit = hit;
	}
}

public class HealthController : MonoBehaviour {
	
	public GameObject deathHandler;
	public float maxHealth = 100;
	public float healingSpeed;
	public GameObject hitParticles;
	public AudioClip hitSound;
	[HideInInspector]
	public float health;
	
	public float normalizedHealth { get { return health / maxHealth; } }
	
	// Use this for initialization
	void OnEnable () {
		health = maxHealth;
	}
	
	// Update is called once per frame
	void Update () {
		if (Time.deltaTime == 0 || Time.timeScale == 0)
			return;
		
		if (health > 0)
			health += Time.deltaTime * healingSpeed;
		health = Mathf.Clamp(health, 0, maxHealth);
	}
	
	void OnHit (float damage) {
		health -= damage;
		health = Mathf.Clamp(health, 0, maxHealth);
	}
}

