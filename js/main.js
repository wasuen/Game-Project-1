$('.submit').on('click', (e) => {
    $('.submit').css('visibility','hidden');
    const gameGrid = new GameGrid();
    game.hoverEvent();
    
});

const game = {

    hoverEvent() {
        const $gameGrid = $('#gameGrid')
        
        function findLastAvailableCell(columns) {
            const cells = $(`.columns[data-columns='${columns}']`)
            for(let i = cells.length - 1; i >= 0; i--){
                const $cell = $(cells[i]);
                if($cell.hasClass('empty')){
                    return $cell
                }
            }
            return null;
        }


        $gameGrid.on('mouseenter','.columns.empty', function() {
            const columns = $(this).data('columns')
            const $lastAvailableCell = findLastAvailableCell(columns)
            $lastAvailableCell.addClass('hover-red')
        })
    }


}
