var vue;

var vue_data = {
    mySide: 1, 
    board:[
        [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
    ],
    moves:[
        [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
    ]
}

var vue_method = {};

var vue_computed = {
    renderBoard: function()
    {
        var retArray = [];
        for( var i = 0; i< this.board.length; i++)
        {
            console.log( i + "  " + this.board[i]);
            retArray = retArray.concat(this.board[i]);
        }        
        return retArray;
    },

    classForRender: function(content) 
    {
        const s1 = "square_";
        if ( content == 1 )
            return s1+"blueMaster";
        else if ( content == 2 )
            return s1+"blueKid";
        else if ( content == 11 )
            return s1+"redMaster";
        else if ( content == 12 )
            return s1+"redKid";
    },

    movesForRender: function(content) 
    {
        const s1 = "square_";
        if ( content == 100 )
            return s1+"blueMove";
        else if ( content == 200 )
            return s1+"redMove";
    } 
};






window.onload = init;

function init()
{
    vue = new Vue({
        el:'#wrapper',
        data: vue_data,
        method:vue_method,
        computed:vue_computed
    });
}