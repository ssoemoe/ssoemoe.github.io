function init() {
    let numRow = 20;
    let numCol = 20;
    let board = [];
    for (let i = 0; i < numRow; i++) {
        let row = [];
        for (let j = 0; j < numCol; j++) {
            row.push(0);
        }
        board.push(row);
    }

    console.log();
}

init();