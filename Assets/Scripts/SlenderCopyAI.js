var OUT_OF_SIGHT = 175;

var Distance;
var Target : Transform;
var lookAtDistance = 25.0;
var chaseRange = 50.0;
var moveSpeed = 5.0;
var Damping = 6.0;

var SlenderBody : Transform;
var SlenderEmpty : Transform;
var controller : CharacterController;
var gravity : float = 5.0;
private var MoveDirection : Vector3 = Vector3.zero;

var cam : Camera;

function Start ()
{
	cam = Camera.mainCamera;
}

function Update ()
{
	Distance = Vector3.Distance(Target.position, SlenderBody.position);
	
	//Debug.Log("Distance: " + Distance); // Distance 175 seems good
	//Debug.Log("X: " + viewPos.x);
	//Debug.Log("Y: " + viewPos.y);
	//Debug.Log("Z: " + viewPos.z);
	
	if(Distance > OUT_OF_SIGHT)
	{
		lookAt();
		chase();
	}
	else 
	{
		var viewPos : Vector3 = cam.WorldToViewportPoint(SlenderBody.position);
		
		if(viewPos.z < 0) 
		{
			lookAt();
			chase ();
		} 
		else if(viewPos.x < -0.25 || viewPos.x > 1.25)
		{
				lookAt();
				chase ();
		}
	}
	
}


function lookAt ()
{
	
	var targetPostition = new Vector3(SlenderEmpty.position.x, Target.position.y, SlenderEmpty.position.z);
	var rotation = Quaternion.LookRotation(Target.position - targetPostition);
	SlenderEmpty.rotation = Quaternion.Slerp(SlenderEmpty.rotation, rotation, Time.deltaTime * Damping);
}

function chase ()
{

	//MoveDirection = Vector3(SlenderEmpty.forward.x, SlenderEmpty.forward.y, SlenderEmpty.forward.z);
	MoveDirection = SlenderEmpty.forward;
	MoveDirection *= moveSpeed;
	
	MoveDirection.y -= gravity; // * Time.deltaTime;
	controller.Move(MoveDirection * Time.deltaTime);

}
