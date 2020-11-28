
var debugMode = false;

var PATH = "assets/";
var preloader = new createjs.LoadQueue(false, PATH);
var manifest = [
 					"blue_b.png", "blue_s.png", "red_b.png", "red_s.png", "box.png"
            	];

var threeManifest = [
 					"./js/three.min.js",
					"./js/three/renderers/Projector.js",
					"./js/three/renderers/CanvasRenderer.js"
				];

// var nowAtSec = "";
// var tlah, tlai0, tlai1;

////////////////////////////////////////////////

window.onload = startLoading;

function startLoading()
{
	resizeFunction(true);
	resizeListener();
	initTimeLineAnimations();

	// if( !checkMobile() )
	// {
	// }
	// else
	// {
	// }
	preload_start();
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function preload_start()
{
	preloaderShow();
	preloader.on("progress", preloaderProgress);
	preloader.on("complete", after_preload_files);		
	preloader.setMaxConnections(15);

	var i;
	// work imgs
	for ( i = 0 ; i < CARDS_ARRAY.length ; i++ )
		manifest.push( CARDS_ARRAY[i].img );

	// three.js
	for ( i = 0 ; i < threeManifest.length ; i++ )
		manifest.push( threeManifest[i] );

	preloader.loadManifest(manifest);
}

function after_preload_files()
{
	preloaderHide();

	//////// list ////////////

	for ( var i = 0 ; i < CARD_ARRAY.length ; i++ )
	{
		var nowCon = $("#list"+i+"_con");
		nowCon.show();

		var tempy = 450;
		for ( var j = 0 ; j < WORK_ARRAY[i].length ; j++ )
		{
			var	str;
			str = "<div id='list"+i+"_item"+j+"' class='list_item'>";
			str +=		"<div class='rot-10 BTN'>";
			str += 			"<div class='fontbt list_title'></div>";
			str += 			"<div class='list_image'></div>";
			str += 			"<div class='list_award'></div>";
			str += 			"<div class='list_linel'></div>";
			str += 			"<div class='list_linec'></div>";
			str += 			"<div class='list_liner'></div>";
			str += 		"</div>";
			str +=		"<div class='fontl list_txt'></div>";
	 		str += 	"</div>";
			nowCon.append(str);
			var nowItem = $("#list"+i+"_item"+j);
			nowItem.css({"top":tempy+"px"});

			nowItem.children(".rot-10").children(".list_title").append(WORK_ARRAY[i][j].title.replace(/\n/g,"<br>"));
		}

	}
	// $("#index_sub1_area").mouseenter( function(){
	// 	if ( !checkMobile() )
	// 	{
	// 		runTextDecode( $("#index_title1a"),50 );
	// 		TweenMax.to( $(this).parent().children(".index_line"), 0.3, {height:16, ease:Elastic.easeOut});	
	// 	}
	// });
	// $("#index_sub1_area").mouseleave( function(){
	// 	if ( !checkMobile() )
	// 	{
	// 		runTextDecode( $("#index_title1a"),50 );
	// 		TweenMax.to( $(this).parent().children(".index_line"), 0.3, {height:1, ease:Power2.easeOut});	
	// 	}
	// });
	// $("#index_sub1_area").click( function(){toList(1);} );

	init();
}







////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// TweenMax.to( $("#contact"), 1, {alpha:1, ease:Power2.easeOut});	
	//TweenMax.delayedCall( 4, function(){ 	TweenMax.to( $("#contact"), 1, {alpha:1, ease:Power2.easeOut});	});




function init()
{


}






////////////////////////////////////////////////////////////////////////////////////////////////////////////

function preloaderProgress( event )
{
	var percent = Math.floor(event.progress*100);
	$("#preloader_con").empty();
	$("#preloader_con").append(percent+"%");
}

function preloaderShow()
{
}

function preloaderHide()
{
	$("#preloader_con").hide();
}