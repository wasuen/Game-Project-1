$('.submit').on('click', (e) => {
    $('.submit').css('visibility','hidden');
    const gameGrid = new GameGrid();
    game.hoverEvent();
    
});

$('restart').on('click', (e) => {
    location.reload();
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
            const columns = $(this).data('columns')
            const $lastAvailableCell = findLastAvailableCell(columns)
            if($(this).hasClass('empty')){
                $lastAvailableCell.addClass(`hover-${game.player}`)
            }}, function() {
            $('.columns').removeClass(`hover-${game.player}`)
        });

        $('.columns.empty').click(function() {
            const columns = $(this).data('columns')
            let $lastAvailableCell = findLastAvailableCell(columns)
            let rows = $lastAvailableCell[0].attributes[2].nodeValue
            $lastAvailableCell.attr('player', game.player)

            $lastAvailableCell = findLastAvailableCell(columns)
            if($(this).hasClass('empty')){
                $lastAvailableCell.removeClass('empty');
                $lastAvailableCell.addClass(game.player);
            }
            $('.columns').removeClass(`hover-${game.player}`)

            const winner = game.checkForWinner(rows, columns);
            if (winner){
                alert(`Game Over! Player ${game.player} has won`);
                return; 
            };
            
            
            if(game.playerFlag === true){
                $('.columns').removeClass(`hover-${game.player}`);
                game.player = 'black';
                game.playerFlag = false;
                if($(this).hasClass('empty')){
                    $lastAvailableCell = findLastAvailableCell(columns)
                    $lastAvailableCell.addClass(`hover-${game.player}`)
            }} else {
                $('.columns').removeClass(`hover-${game.player}`)
                game.player = 'red';
                game.playerFlag = true;
                if($(this).hasClass('empty')){
                    $lastAvailableCell = findLastAvailableCell(columns)
                    $lastAvailableCell.addClass(`hover-${game.player}`)
            }};
        })
    },
    checkForWinner(rows, columns){
        function $getCell(i,j){
            return $(`.columns[data-rows='${i}'][data-columns='${j}']`)
        }

        function checkDirection(direction){
            let total = 0;
            let i = rows + direction.i;
            let j = columns + direction.j;
            let $next = $getCell(i,j);

            while (i >= 0 && j >= 0 && i < this.ROWS && j < this.COL  && $next.player === game.player) {
                total++;
                i += direction.i;
                j += direction.j;
                $next = $getCell(i,j);
            }
            return total;
        }

        function checkWin(directionA, directionB){
            const total = 1 + checkDirection(directionA) + checkDirection(directionB);
            if(total >= 4){
                return game.player;
            }else{
                return null;
            }
        }

        function checkVerticals() {
            return checkWin({i:-1, j:0}, {i:1, j:0})
        }

        return checkVerticals()

    }
}
