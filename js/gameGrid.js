class GameGrid {
    constructor() {
        this.rows = 6;
        this.columns = 8;
        this.createGrid();
    }


    createGrid() {
        const $gameGrid = $('#gameGrid') 
        $gameGrid.empty()
        for (let r = 0; r < this.rows; r++){
            const $row = $('<div>')
                .addClass('row');
            for (let c = 0; c < this.columns; c++){
                const $columns = $('<div>')
                    .addClass('columns empty').attr('data-columns', c).attr('data-rows', r)
                $row.append($columns);
            }
            $gameGrid.append($row);
        }
    }
}