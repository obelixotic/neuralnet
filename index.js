const brain = require('brain.js');

// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);

net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
]);

const output1 = net.run([0, 0]); // [0]
const output2 = net.run([0, 1]); // [1]
const output3 = net.run([1, 0]); // [1]
const output4 = net.run([1, 1]); // [0]
console.log(output1, Math.round(output1));
console.log(output2, Math.round(output2));
console.log(output3, Math.round(output3));
console.log(output4, Math.round(output4));