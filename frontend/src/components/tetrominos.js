const tetrominos = {
    Q: {
        shape: [['Q']], color: '0, 0, 0'    
    }, 
    L: {
        shape: [ 
            ["Q", 'L', "Q"],
            ["Q", 'L', "Q"],
            ["Q", 'L', 'L']
        ], color: "#F0A100"
    },
    J: {
        shape: [
            ['Q', 'J', 'Q'],
            ['Q', 'J', 'Q'],
            ['J', 'J', 'Q']
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
            ['Q', 'I', 'Q', 'Q'],
            ['Q', 'I', 'Q', 'Q'],
            ['Q', 'I', 'Q', 'Q'],
            ['Q', 'I', 'Q', 'Q']
        ], color: "#00F0F0"
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            ['Q', 'T', 'Q'],
            ['Q', 'Q', 'Q']
        ], color: "#A100F1"
    },
    S: {
        shape: [
            ['Q', 'S', 'S'],
            ['S', 'S', 'Q'],
            ['Q', 'Q', 'Q']
        ], color: "#00F000"
    },
    Z: {
        shape: [
            ["Z", 'Z', 'Q'],
            ['Q', 'Z', 'Z'],
            ['Q', 'Q', 'Q']
        ], color: "#F10000"
    }
}
export default tetrominos