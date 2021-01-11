// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const cuberoom = new Model('obj:(assets/Map_en_objects/Map/World.obj); mtl: (assets/Map_en_objects/Map/World.mtl)');
cuberoom.setPosition(0, 0, -5.21484);
cuberoom.setScale(1, 1.2, 1);
cuberoom.setRotation(0, -36.95, 0);


//Painting model
const painting_1 = new Model('assets/Map_en_objects/Painting/Painting_1.gltf');
painting_1.setPosition(0, 0, 5);
painting_1.setScale(1, 1.2, 1);
painting_1.setRotation(0, -36.95, 0);

//Painting model
const painting_2 = new Model('assets/Map_en_objects/Painting/Painting_2.gltf');
painting_2.setPosition(0, 0, 0);
painting_2.setScale(1, 1.2, 1);
painting_2.setRotation(0, -36.95, 0);

//Painting model
const painting_3 = new Model('assets/Map_en_objects/Painting/Painting_3.gltf');
painting_3.setPosition(0, 0, 5);
painting_3.setScale(1, 1.2, 1);
painting_3.setRotation(0, -36.95, 0);

// create some text
const testText = new Text('');
testText.setPosition(-5.78309, 3.69223, -5);
testText.setFontsize(10);
testText.setScale(1.76, 2.28, 2.71);

// create a 360 image
const image360 = new Sky('assets/Images/Daylight_Box_0.png');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(cuberoom);

// listen for an event
Model.addEventListener('click', () => console.log('je klikt op mij'));

// Event's text
Model.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Test pop up.");
Model.addEventListener('click', () =>
    document.getElementById('extraText').innerHTML = "Test pop up.");