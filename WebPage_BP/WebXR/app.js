// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//create a model
const cuberoom = new Model("assets/Map_en_objects/Map/World.gltf");
cuberoom.setPosition(-3.556, 0.000, 5.800);
cuberoom.setScale(1, 1.2, 1);
cuberoom.setRotation(0.000, 158.949, 0.000);

//create a model
const melkMeisje = new Model('assets/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-1.523, -0.050, -2.570);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0, 45.45, 0);

//create a model
const Gem = new Model('assets/Map_en_objects/Gemstone/Gemstone.gltf');
Gem.setPosition(2.118, -0.005, -16.822);
Gem.setScale(1, 1, 1);
Gem.setRotation(0, 48.620, 0);

//Painting model
const image_1 = new XRImage('assets/Images/Image_1.jpg');
image_1.setPosition(-3.627, 2.127, 1.043);
image_1.setScale(1, 1.2, 1);
image_1.setRotation(0, -36.95, 0);

//Painting model
const image_2 = new XRImage('assets/Images/Image_2.jpg');
image_2.setPosition(-3.627, 2.127, -0.417);
image_2.setScale(1, 1.2, 1);
image_2.setRotation(0, -36.95, 0);

//Painting model
const image_3 = new XRImage('assets/Images/Image_3.jpg');
image_3.setPosition(-3.627, 2.127, -1.484);
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
spotLight_1.setPosition(-10.809, 45.975, -3.974);
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

//spot light
const spotLight_5 = new SpotLight();
spotLight_5.setPosition(-3.394, -0.534, 0,449);
spotLight_5.setTarget(melkMeisje);


// Event's text
image_1.addEventListener('mouseenter', () =>
    document.getElementById('extraText').innerHTML = "Een ballerinabeeld gemaakt door Folkert de Jong.");
image_1.addEventListener('mouseleave', () =>
    document.getElementById('extraText').innerHTML = "");
    
image_2.addEventListener('mouseenter', () =>
    document.getElementById('extraText').innerHTML = "Een fot van Folkert de Jong");
image_2.addEventListener('mouseleave', () =>
    document.getElementById('extraText').innerHTML = "");

image_3.addEventListener('mouseenter', () =>
    document.getElementById('extraText').innerHTML = " 'Gott Mit Uns' -Folkert de Jong");
image_3.addEventListener('mouseleave', () =>
    document.getElementById('extraText').innerHTML = "");

Gem.addEventListener('mouseenter', () =>
    document.getElementById('extraText').innerHTML = "Een kunst van druiven.");
Gem.addEventListener('mouseleave', () =>
    document.getElementById('extraText').innerHTML = "");

melkMeisje.addEventListener('mouseenter', () =>
    document.getElementById('extraText').innerHTML = "Melkmeisje van Vermeer");
melkMeisje.addEventListener('mouseleave', () =>
    document.getElementById('extraText').innerHTML = "");