class GameGrid {
    constructor() {
        this.rows = 6;
        this.columns = 8;
        this.createGrid();
    }
    createGrid() {
        const $gameGrid = $('#gameGrid') 
        for (let r = 0; r < this.rows; r++){
            const $row = $('<div>')
                .addClass('row');
            for (let c = 0; c < this.columns; c++){
                const $columns = $('<div>')
                    .addClass('columns');
                $row.append($columns);
            }
            $gameGrid.append($row);
        }
    }
}