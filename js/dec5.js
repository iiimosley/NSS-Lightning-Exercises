// Make an object with at least three properties.One property should be a method
// Create a new object that links to the first object.
// Give the new object two properties of its own
// In the console, call.hasOwnProperty() on the new object, passing in an inherited property as an argument.Does it return true or false ?
//     Do it again, but this time pass in one of the properties you added to the new object.True or false ?

let square = {
    height: 3,
    width: 3,
    squareSpace: squared = () =>  height * width,
};

let cube = Object.create(square);

cube.length = 3;
cube.cubed = function () {return cube.height*cube.width*cube.length};