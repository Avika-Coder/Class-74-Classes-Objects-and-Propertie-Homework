const Engine = Matter.Engine;
const Composite = Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3, box4, box6,box7;
var bear1, bear2,bear3, log1, log2, log3, log4,log5,log6,log7,log8,log9;

function setup() {
	canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	angleMode(RADIANS);

	ground = new Ground(width / 2, height - 10, width, 20);
	box1 = new Box(700, 320);
	box2 = new Box(920, 320);
	bear1 = new Bear(810, 350);
	log1 = new Log(810, 260, 300, PI / 2);
	box3 = new Box(700, 240, 70, 70);
	box4 = new Box(920, 240, 70, 70);
	bear2 = new Bear(810, 220);
	log2 = new Log(810, 180, 300, PI / 2);
	box5 = new Box(810, 160, 70, 70);
	box6 = new Box(200, 160, 70, 70);
	log6 = new Log(200, 160, 300, PI / 2);
	log7 = new Log(200, 160, 300, PI / 2);
	box7 = new Box(200, 160, 70, 70);
	log8 = new Log(200, 40, 300, PI / 2);
	log9 = new Log(200, 60, 300, PI / 2);
	log3 = new Log(760, 120, 150, PI / 7);
	log4 = new Log(870, 120, 150, -PI / 7);
	log5 = new Log(810, 260, 300, PI / 2);
	bear3 = new Bear(200, 30, 300, PI / 2);
}

function draw() {
	background(0);
	Engine.update(engine);
	ground.display();
	box1.display();
	box2.display();
	bear1.display();
	log1.display();
	box3.display();
	box4.display();
	bear2.display();
	log2.display();
	box5.display();
	box6.display();
	box7.display();
	log3.display();
	log4.display();
	log5.display();
	log6.display();
	log7.display();
	log8.display();
	log9.display();
	bear3.display();
}
