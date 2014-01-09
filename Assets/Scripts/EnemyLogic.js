#pragma strict

var health : int = 100;

function Update() {

	if(health <= 0) {
		Dead();
	}

}

function ApplyDamage(Damage : int) {

	health -= Damage;

}

function Dead() {

	Destroy(gameObject);

}