export const tetrominos = {
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

export const randomTetromino = () => {
    const pieces = 'IJLOSTZ';
    const randTetromino =
      pieces[Math.floor(Math.random() * pieces.length)];
    return tetrominos[randTetromino];
  };

export const startBoard = Array(16).fill(Array(10).fill(['Q',"clear"]))



export const checkCollision = (piece, stage, { x: moveX, y: moveY }) => {
    return piece.tetromino.some((row, y) =>
      row.some((cell, x) => {
        if (cell !== 'Q') {
          return (
            !stage[y + piece.position.y + moveY] ||
            !stage[y + piece.position.y + moveY][x + piece.position.x + moveX] ||
            stage[y + piece.position.y + moveY][x + piece.position.x + moveX][1] !==
              'clear'
          );
        }
        return false;
      })
    );
}