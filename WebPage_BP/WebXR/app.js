// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.54, -5);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// create a model
const cuberoom = new Model('assets/Map_en_objects/Map/World.obj');
cuberoom.setPosition(0, 0, -5.21484);
cuberoom.setScale(1, 1.2, 1);
cuberoom.setRotation(0, -36.95, 0);

// create a primitive (sphere)


// create some text
const testText = new Text('');
testText.setPosition(-5.78309, 3.69223, -5);
testText.setFontsize(10);
testText.setScale(1.76, 2.28, 2.71);

// create an image
const image = new XRImage('assets/images/Minecraft-1.jpg');
image.setPosition(-1.48819, 2.45839, -5);

// create an image
const image2 = new XRImage('assets/images/Minecraft-2.jpg');
image2.setPosition(1.57918, 2.45839, -5);

// create a 360 image
const image360 = new Sky('assets/Images/Daylight_Box_0.png');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));

// Event's text
minecraftModel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Test pop up.");