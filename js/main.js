$('.submit').on('click', (e) => {
    $('.submit').css('visibility','hidden');
    const gameGrid = new GameGrid();
    game.hoverEvent();
    
});

const game = {
    playerFlag: true,
    player: 'red',
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


        $('.columns.empty').hover(function() {
            const columns = $(this).data('columns');
            const $lastAvailableCell = findLastAvailableCell(columns);
            $lastAvailableCell.addClass(`hover-${game.player}`);
        }, function() {
            $('.columns').removeClass(`hover-${game.player}`)
        });

        $('.columns.empty').click(function() {
            const columns = $(this).data('columns')
            const row = $(this).data('rows')
            let $lastAvailableCell = findLastAvailableCell(columns)
            $lastAvailableCell.removeClass('empty');
            $lastAvailableCell.addClass(game.player);
            $('.columns').removeClass(`hover-${game.player}`)
            const winner = game.checkForWinner(row, columns);
            if (winner){
                alert(`Game Over! Player ${game.player} has won`);
                return;
            };
            if(game.playerFlag === true){
                $('.columns').removeClass(`hover-${game.player}`);
                game.player = 'black';
                game.playerFlag = false;
                $lastAvailableCell = findLastAvailableCell(columns);
                $lastAvailableCell.addClass(`hover-${game.player}`)
            } else {
                $('.columns').removeClass(`hover-${game.player}`);
                game.player = 'red';
                game.playerFlag = true;
                $lastAvailableCell = findLastAvailableCell(columns);
                $lastAvailableCell.addClass(`hover-${game.player}`)
            };
        });
    },
    checkForWinner(rows, columns) {

    }
}
