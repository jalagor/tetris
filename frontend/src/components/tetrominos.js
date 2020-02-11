const tetrominos = {
    0: {
        shape: [[0]], color: '0, 0, 0'    
    }, 
    L: {
        shape: [ 
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ], color: "#F0A100"
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ], color: "#0000F0"
    },
    O: {
        shape: [
            ["O", "O"],
            ["O", "O"]
        ], color: "#F0F000"
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ], color: "#00F0F0"
    },
    T: {
        shape: [
            [0, 0, 0],
            [0, 'T', 0],
            ['T', 'T', 'T']
        ], color: "#A100F1"
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ], color: "#00F000"
    },
    Z: {
        shape: [
            ["Z", 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ], color: "#F10000"
    }
}
export default tetrominos