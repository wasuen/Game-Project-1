class GameGrid {
    constructor() {
        this.ROWS = 6;
        this.COL = 8;
        this.createGrid();
    }


    createGrid() {
        const $gameGrid = $('#game-grid') 
        $gameGrid.empty()
        for (let r = 0; r < this.ROWS; r++){
            const $row = $('<div>')
                .addClass('rows')
                .attr('data-rows', r)
            for (let c = 0; c < this.COL; c++){
                const $columns = $('<div>')
                    .addClass('columns empty')
                    .attr('data-columns', c)
                    .attr('data-rows', r)
                $row.append($columns);
            }
            $gameGrid.append($row);
        }
    }
}