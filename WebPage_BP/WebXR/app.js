// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//create a model
const cuberoom = new Model("assets/Map_en_objects/Map/World.gltf");
cuberoom.setPosition(-2.141, 0.000, 2.369);
cuberoom.setScale(1, 1.2, 1);
cuberoom.setRotation(0, -36.95, 0);

const melkMeisje = new Model('assets/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-0.293, -0.05, -2.57);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0, 45.45, 0);


//Painting model
const image_1 = new XRImage('assets/Images/Image_1.jpg');
image_1.setPosition(-3.367, 1.112, 8.679);
image_1.setScale(1, 1.2, 1);
image_1.setRotation(0, -36.95, 0);

//Painting model
const image_2 = new XRImage('assets/Images/Image_2.jpg');
image_2.setPosition(-5.672, 1.023, 7.405);
image_2.setScale(1, 1.2, 1);
image_2.setRotation(0, -36.95, 0);

//Painting model
const image_3 = new XRImage('assets/Images/Image_3.jpg');
image_3.setPosition(-7.577, 1.069, 5.912);
image_3.setScale(1, 1.2, 1);
image_3.setRotation(0, -36.95, 0);

// create some text
const testText = new Text('');
testText.setPosition(-5.78309, 3.69223, -5);
testText.setFontsize(10);
testText.setScale(1.76, 2.28, 2.71);

// create a 360 image
const image360 = new Sky('assets/Images/Daylight_Box_0.png');

//spot light
const spotLight_1 = new SpotLight();
spotLight_1.setPosition(-3.394, 45.975, 0.449);
spotLight_1.setTarget(cuberoom);

//spot light
const spotLight_2 = new SpotLight();
spotLight_2.setPosition(-3.394, 45.975, 0.449);
spotLight_2.setTarget(image_1);

//spot light
const spotLight_3 = new SpotLight();
spotLight_3.setPosition(-3.394, 45.975, 0.449);
spotLight_3.setTarget(image_2);

//spot light
const spotLight_4 = new SpotLight();
spotLight_4.setPosition(-3.394, 45.975, 0.449);
spotLight_4.setTarget(image_3);

// listen for an event
Model.addEventListener('click', () => console.log('je klikt op mij'));

// Event's text
Model.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Test pop up.");
Model.addEventListener('click', () =>
    document.getElementById('extraText').innerHTML = "Test pop up.");