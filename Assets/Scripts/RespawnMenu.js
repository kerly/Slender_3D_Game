#pragma strict

var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
var charMotor : CharacterMotor;
//var sprintScript : SprintAndCrouch;

static var playerIsDead = false;

function Start() {

	lookAround01 = gameObject.GetComponent(MouseLook);
	lookAround02 = GameObject.Find("MainCamera").GetComponent(MouseLook);
	charMotor = gameObject.GetComponent(CharacterMotor);
	//sprintScript = gameObject.GetComponent(SprintAndCrouch);
}

function Update() {

	if(playerIsDead == true) {
		lookAround01.enabled = false;
		lookAround02.enabled = false;
		charMotor.enabled = false;
	}

}

function OnGUI() {

	if(playerIsDead == true) {
	
		// If button pressed
		if( GUI.Button(Rect(Screen.width * 0.5 - 50, 200 - 20, 100, 40), "Respawn")) {
			RespawnPlayer();
		}
		
		if( GUI.Button(Rect(Screen.width * 0.5 - 50, 240, 100, 40), "Menu")) {
			Debug.Log("Return to Menu");
		}
	}



}

function RespawnPlayer() {

	Debug.Log("Respawn Player");
}