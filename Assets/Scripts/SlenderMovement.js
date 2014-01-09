// Kyle Mera
// Slender movement without character controller
// Using rigidbody
var Distance;
var Target : Transform;
var SlenderEmpty : Transform;
var lookAtDistance = 5.0;
var attackRange = 20.0;
var moveSpeed = 6;
var Damping = 6.0;

/*
var controller : CharacterController;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;
*/

function Start() {

	transform.rigidbody.centerOfMass = Vector3 (0, -2, 0);
}

function Update() {

	Distance = Vector3.Distance(Target.position, transform.position);
	
	// Rotate Slender
	// Move Slender
	//if(Distance > lookAtDistance) {
		lookAt();
		attack();
	//}
	
	// Move Slender
	/*
	if(Distance > attackRange) {
		attack();
	}
	*/
}

function lookAt() {

    var targetPostition = new Vector3(SlenderEmpty.position.x, Target.position.y, SlenderEmpty.position.z);
	var rotation = Quaternion.LookRotation(Target.position - targetPostition);
	SlenderEmpty.rotation = Quaternion.Slerp(SlenderEmpty.rotation, rotation, Time.deltaTime * Damping);
}

function attack() {

	SlenderEmpty.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
	/*
	moveDirection = SlenderEmpty.forward;
	moveDirection *= moveSpeed;
	
	moveDirection.y -= gravity * Time.deltaTime;
	controller.Move(moveDirection * Time.deltaTime);
	*/
}