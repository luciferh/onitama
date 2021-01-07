var vue;

var vue_data = {
    mySide: 1,  // 1: Blue  2: Red
    board:[
        [2,2,22,2,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,11,1,1]
    ],
    moves:[
        [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
    ],
    cards: [],  // 0&1 : player1    2 : middle    3&4 : player2

    waitForClickPiece: true,
    waitForClickMove: false,
    pieceChosen: {},
    moveChosen: {}
};

var vue_methods = {
    concatBoardArray: function()
    {
        var retArray = [];
        this.board.forEach((row) => {
            row.forEach((square) => {
                retArray.push( square );
            });
        });
        return retArray;
    },

    concatMovesArray: function()
    {
        var retArray = [];
        if ( this.waitForClickPiece )
        {         
            this.board.forEach((row) => {
                row.forEach((square) => {
                    retArray.push( (square % 2 == this.mySide % 2) ? this.mySide : 0);
                });
            });
        }
        else if ( this.waitForClickMove )
        {
            this.moves.forEach((row) => {
                row.forEach((square) => {
                    retArray.push( square );
                });
            });
        }
        return retArray;
    },

    concatCardSquaresArray: function( cardSquares )
    {
        var retArray = [];
        cardSquares.forEach((row) => {
            row.forEach((square) => {
                retArray.push( square );
            });
        });
        return retArray;
    },

    classForBase: function(square, index)
    {
        return {
            reversed: this.reverse, 
            blueMaster:square == 11, 
            blueKid:square == 1, 
            redMaster:square == 22, 
            redKid:square == 2
        };
    },

    classForMoves: function(square)
    {
        return {
            reversed: this.reverse, 
            blueMove:square==1 && this.waitForClickMove, 
            redMove:square==2 && this.waitForClickMove,
            BTN:square != 0
        };
    },

    classForCardSquares: function(square)
    {
        return {
            card_square_center:square==100, 
            card_square_move:square==1,
        };
    },

    getIndexFromBoard: function(index)
    {
        return {
            x:index%5,
            y:Math.floor(index/5)
        };
    },

    renderCard: function(card)
    {
        var retArray = [];
        this.board.forEach((row) => {
            row.forEach((square) => {
                retArray.push( square );
            });
        });
        return retArray;
    },

    boardClickHandler: function(index)
    {
        // console.log(this.getIndexFromBoard(index));
        var pos = this.getIndexFromBoard(index);
        if (waitForClickPiece)   
        {
            waitForClickPiece = false;
            this.pieceChosen = pos;
            updatePossibleMoves(pos);
        }
        else if (waitForClickMove)
        {
            waitForClickMove = false;
            this.moveChosen = pos;
            updateAfterMove(pos);
        }
    },

    updatePossibleMoves: function( pos )
    {
        

        waitForClickMove = true;
    },

    updateAfterMove: function( pos )
    {
        

        // check winning ?

        waitForClickPiece = true;
    }
};

var vue_computed = {
    reverse: function() 
    { 
        return (this.mySide == 1 ? false : true) 
    },

    self_card1: function() 
    {
        return this.cards[0];
    },
    self_card2: function()     
    {
        return this.cards[1];
    },
    middle_card: function() 
    {
        return this.cards[2];
    },
    opponent_card1: function() 
    {
        return this.cards[3];
    },
    opponent_card2:function() 
    {
        return this.cards[4];
    }
};





window.onload = init;

function init()
{
    generateCardSquares();
    randomCards();
    
    vue = new Vue({
        el:'#wrapper',
        data: vue_data,
        methods:vue_methods,
        computed:vue_computed
    });
}

function generateCardSquares()
{
    CARDS_ARRAY.forEach((card) => {
        card.squares = [];
        for ( var i = 0 ; i < 5 ; i++)
        {
            card.squares[i] = [];
            for ( var j = 0 ; j < 5 ; j++)
            {
                card.squares[i][j] = 0;
            }
        }

        card.squares[2][2] = 100;
        card.moves.forEach( (move) => {
            card.squares[move[0]+2][move[1]+2] = 1;
        }); 
    });
}

function randomCards()
{
    var cloneCardsArray = [];
    CARDS_ARRAY.forEach((card) => {
        cloneCardsArray.push( card );
    });

    for ( var i = 0 ; i<5 ; i++)
        vue_data.cards.push(cloneCardsArray.splice(Math.floor(Math.random()*cloneCardsArray.length),1)[0]);
}