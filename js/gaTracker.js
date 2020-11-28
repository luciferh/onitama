
/** Usage**********************************************************************************/
//	gaTracker.gaTrackSwitch( true , false );
//	gaTracker.gaTrackPage( 'home' );
//	gaTracker.gaTrackEvent( 'product' , 'click' , 'btn1' );
/******************************************************************************************/

var gaTracker = gaTracker || {};

(function(){
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var THIS = this;
var tracking = false;
var showTracking = false;

this.gaTrackSwitch = function( flag , trace)
{
	tracking = flag;
	if ( trace == true )
		showTracking = true;
	else
		showTracking = false;
};

this.gaTrackPage = function( title )
{
	if ( showTracking )
		console.log( " *** GA pageview *** " + title );
		
	if ( tracking  )
		ga('send', 'pageview', {title:title});
};

this.gaTrackEvent = function( unit , type, desc  )
{
	if ( showTracking )
		console.log( " *** GA event *** " + unit + ", " + type + ", " + desc );
		
	if ( tracking  )
		ga('send', 'event', unit, type, desc );
};


		

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).apply(gaTracker);

