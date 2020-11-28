

function resizeListener()
{
    window.addEventListener("orientationchange", function(){
        window.setTimeout( resizeFunction, 50 );
    }, false);

    // window.addEventListener("resize", function(){
    //     resizeFunction();
    // }, false);
}

function checkMobile()
{
    if ( $("html").hasClass("mobile") )
        return true;
    else
        return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function divIn( div , t )
{
	div.show();
	TweenMax.fromTo( div, t != undefined ? t : 0.5 , {alpha:0}, {alpha:1, ease:Power2.easeOut });
}

function divOut( div , t , noHide )
{
    if ( noHide )
	   TweenMax.to( div, t != undefined ? t : 0.5 , {alpha:0, ease:Power2.easeOut});
    else
       TweenMax.to( div, t != undefined ? t : 0.5 , {alpha:0, ease:Power2.easeOut, onComplete:function(){div.hide();} });
}

////////////////////////////////////////////////////////////////////////////////////////////////////


