using UnityEngine;
using System.Collections;

/// MouseLook rotates the transform based on the mouse delta.
/// Minimum and Maximum values can be used to constrain the possible rotation

/// To make an FPS style character:
/// - Create a capsule.
/// - Add the MouseLook script to the capsule.
///   -> Set the mouse look to use LookX. (You want to only turn character but not tilt it)
/// - Add FPSInputController script to the capsule
///   -> A CharacterMotor and a CharacterController component will be automatically added.

/// - Create a camera. Make the camera a child of the capsule. Reset it's transform.
/// - Add a MouseLook script to the camera.
///   -> Set the mouse look to use LookY. (You want the camera to tilt up and down like a head. The character already turns.)
[AddComponentMenu("Camera-Control/Mouse Look")]
public class MouseLookP1 : MonoBehaviour {

	public enum RotationAxes { MouseXAndY = 0, MouseX = 1, MouseY = 2 }
	public RotationAxes axes = RotationAxes.MouseXAndY;
	public float sensitivityX = 15F;
	public float sensitivityY = 15F;

	public float minimumX = -360F;
	public float maximumX = 360F;

	public float minimumY = -60F;
	public float maximumY = 60F;
	public Animator animator;

	float rotationY = 0F;

	void Update ()
	{
//		if (axes == RotationAxes.MouseXAndY)
//		{
//			float rotationX = transform.localEulerAngles.y + Input.GetAxis("Mouse X P1") * sensitivityX;
//			
//			rotationY += Input.GetAxis("Mouse Y P1") * sensitivityY;
//			rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
//			
//			transform.localEulerAngles = new Vector3(-rotationY, rotationX, 0);
//		}
		if (networkView && networkView.isMine && axes == RotationAxes.MouseX)
		{
			transform.Rotate(0, Input.GetAxis("Mouse X P1") * sensitivityX, 0);
			playerSetDirection (5 * Input.GetAxis("Mouse X P1"));
			networkView.RPC ("setDirection", RPCMode.Others, 5 * Input.GetAxis ("Mouse X P1"));
		}
		else
		{
			rotationY += Input.GetAxis("Mouse Y P1") * sensitivityY;
			rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
			
			transform.localEulerAngles = new Vector3(-rotationY, transform.localEulerAngles.y, 0);
		}
	}
	
	[RPC]
	void playerSetDirection(float direction) {
		animator.SetFloat("Direction", direction, 0.25f, Time.deltaTime);
	}
	
	void Start ()
	{
		// Make the rigid body not change rotation
		if (rigidbody)
			rigidbody.freezeRotation = true;
	}
}