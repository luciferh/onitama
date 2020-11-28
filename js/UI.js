var UI = UI || {};

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// imgs = { on:"" , off:"" , on_r:"" , off_r:"" , r_time:0.5 , r_nobase:true};

this.SwitchBtn = function( targetDiv , imgs , initStat , onFunction , offFunction )    
{
	var w = parseInt( targetDiv.css("width") );
	var h = parseInt( targetDiv.css("height") );
	var id = targetDiv.attr('id');

	targetDiv.append( "<div id='" + id + "_on'></div>" );
	targetDiv.append( "<div id='" + id + "_off'></div>" );
	targetDiv.data( {"div_on":$('#'+id+'_on')} );
	targetDiv.data( {"div_off":$('#'+id+'_off')} );

	targetDiv.data("div_on").append( "<div id='" + id + "_on_b'></div>" );
	targetDiv.data("div_off").append( "<div id='" + id + "_off_b'></div>" );
	targetDiv.data( {"div_on_b":$('#'+id+'_on_b')} );
	targetDiv.data( {"div_off_b":$('#'+id+'_off_b')} );
	targetDiv.data("div_on_b").append( imgs.on );
	targetDiv.data("div_off_b").append( imgs.off );
	targetDiv.data("div_on_b").css( {"display":"block", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
	targetDiv.data("div_off_b").css( {"display":"block", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
	if ( imgs.r_nobase == undefined )
		imgs.r_nobase = false;

	if ( imgs.on_r )
	{
		targetDiv.data("div_on").append( "<div id='" + id + "_on_r'></div>" );	
		targetDiv.data("div_off").append( "<div id='" + id + "_off_r'></div>" );	
		targetDiv.data( {"div_on_r":$('#'+id+'_on_r')} );
		targetDiv.data( {"div_off_r":$('#'+id+'_off_r')} );
		targetDiv.data("div_on_r").append( imgs.on_r );	
		targetDiv.data("div_off_r").append( imgs.off_r );
		targetDiv.data("div_on_r").css( {"opacity":0, "display":"block", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
		targetDiv.data("div_off_r").css( {"opacity":0, "display":"block", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
		if ( imgs.r_time == undefined )
			imgs.r_time = 0.5;
	}

	targetDiv.css( {'cursor':'pointer'} );
	targetDiv.data( {"onFunction":onFunction} );
	targetDiv.data( {"offFunction":offFunction} );

	if ( initStat  == "on" )
	{		
		targetDiv.data("div_off").css( {"display":"none"} );
		targetDiv.data( {"stat":"on"} );
	}
	else if ( initStat  == "off" )
	{
		targetDiv.data("div_on").css( {"display":"none"} );
		targetDiv.data( {"stat":"off"} );
	}

	targetDiv.click( function()
	{ 
		if ( $(this).data("stat") == "on" )
		{
			$(this).data("div_off").css( {"display":"block"} );
			$(this).data("div_on").css( {"display":"none"} );
			$(this).data( {"stat":"off"} );
			offFunction.apply($(this));
		}
		else if ( $(this).data("stat") == "off" )
		{
			$(this).data("div_off").css( {"display":"none"} );
			$(this).data("div_on").css( {"display":"block"} );
			$(this).data( {"stat":"on"} );
			onFunction.apply($(this));
		}
	} );	

	if ( imgs.on_r )
	{
		targetDiv.mouseover( function()
		{ 
			TweenMax.to( $(this).data("div_on_r"), imgs.r_time, {alpha:1, ease:Quad.easeOut});
			TweenMax.to( $(this).data("div_off_r"), imgs.r_time, {alpha:1, ease:Quad.easeOut});
			if ( !imgs.r_nobase )
			{
				TweenMax.to( $(this).data("div_on_b"), imgs.r_time, {alpha:0, ease:Quad.easeOut});
				TweenMax.to( $(this).data("div_off_b"), imgs.r_time, {alpha:0, ease:Quad.easeOut});
			}
		} );

		targetDiv.mouseout( function()
		{ 
			TweenMax.to( $(this).data("div_on_r"), imgs.r_time, {alpha:0, ease:Quad.easeOut});
			TweenMax.to( $(this).data("div_off_r"), imgs.r_time, {alpha:0, ease:Quad.easeOut});
			if ( !imgs.r_nobase )
			{
				TweenMax.to( $(this).data("div_on_b"), imgs.r_time, {alpha:1, ease:Quad.easeOut});
				TweenMax.to( $(this).data("div_off_b"), imgs.r_time, {alpha:1, ease:Quad.easeOut});
			}
		} );	
	}
};


// imgs = { b:"" , r:"" , lock:"" , r_time:0.5 , r_nobase:true , lock_nobase:true};

this.RolloverBtn = function( targetDiv, imgs, func )
{
	var w = parseInt( targetDiv.css("width") );
	var h = parseInt( targetDiv.css("height") );
	var id = targetDiv.attr('id');

	targetDiv.append( "<div id='" + id + "_b'></div>" );
	targetDiv.append( "<div id='" + id + "_r'></div>" );	
	targetDiv.data( {"div_r":$('#'+id+'_r')} );
	targetDiv.data( {"div_b":$('#'+id+'_b')} );
	targetDiv.data( "div_b" ).append( imgs.b );
	targetDiv.data( "div_r" ).append( imgs.r );
	targetDiv.data( "div_b" ).css( {"display":"block", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
	targetDiv.data( "div_r" ).css( {"opacity":0, "display":"block", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
	if ( imgs.r_time == undefined )
		imgs.r_time = 0.5;
	if ( imgs.r_nobase == undefined )
		imgs.r_nobase = false;	

	if ( imgs.lock )
	{
		targetDiv.append( "<div id='" + id + "_lock'></div>" );	
		targetDiv.data( {"div_lock":$('#'+id+'_lock')} );
		targetDiv.data( "div_lock" ).append( imgs.lock );
		targetDiv.data( "div_lock" ).css( {"display":"none", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
		targetDiv.data( { "lock":false } );
		if ( imgs.lock_nobase == undefined )
			imgs.lock_nobase = false;

		targetDiv.data({ "lockFunction" : function(locking){
																if ( locking )
																{
																	if ( imgs.lock_nobase )
																		targetDiv.data( "div_b" ).css( {"display":"none"});					
																	targetDiv.data( "div_r" ).css( {"display":"none"});
																	targetDiv.data( "div_lock" ).css( {"display":"block"});	
																	$("#"+id+"_area").css( {"display":"none"} );	
																}
																else
																{
																	if ( imgs.lock_nobase )
																		targetDiv.data( "div_b" ).css( {"display":"block"});
																	targetDiv.data( "div_r" ).css( {"display":"block"});
																	targetDiv.data( "div_lock" ).css( {"display":"none"});	
																	$("#"+id+"_area").css( {"display":"block"} );
																}
															} });
	}

	targetDiv.append( "<div id='" + id + "_area'></div>" );
	var areaDiv = $("#"+id+"_area");
	areaDiv.css( {"display":"block", "position":"absolute", "width":w, "height":h, "left":"0px", "top":"0px" } );
	areaDiv.css( {'cursor':'pointer'} );	
	areaDiv.click( func );

	areaDiv.mouseover( function(){ 
		TweenMax.to( $(this).parent().data("div_r"), imgs.r_time, {alpha:1, ease:Quad.easeOut});
		if ( imgs.r_nobase )
			TweenMax.to( $(this).parent().data("div_b"), imgs.r_time, {alpha:0, ease:Quad.easeOut});
	} );
	areaDiv.mouseout( function(){ 
		TweenMax.to( $(this).parent().data("div_r"), imgs.r_time, {alpha:0, ease:Quad.easeOut});
		if ( imgs.r_nobase )
			TweenMax.to( $(this).parent().data("div_b"), imgs.r_time, {alpha:1, ease:Quad.easeOut});
	} );
};


// { num:6 , width:1 , height:10 , gap:1 , color:"#000000" }
this.createMusicBars = function( targetDiv , barParam )
{
	if ( barParam.num == undefined )
		barParam.num = 6;
	if ( barParam.width == undefined )
		barParam.width = 1;
	if ( barParam.height == undefined )
		barParam.height = 8;
	if ( barParam.gap == undefined )
		barParam.gap = 1;
	if ( barParam.color == undefined )
		barParam.color = "#888888";

	targetDiv.data( {"barsArray":[], "stat":"on", "height":barParam.height , "num":barParam.num } );
	for ( var i = 0; i < barParam.num ; i++ )
	{
		var id = targetDiv.attr('id');
		targetDiv.append( "<div id='" + id + "_" + i +"'></div>" );
		var newDiv = $('#'+id+'_'+i); 
 		newDiv.css({'left':(i*(1+barParam.gap))+'px','bottom':'0px','width':barParam.width+'px','height':barParam.height+'px','background':barParam.color});
 		targetDiv.data("barsArray").push(newDiv);
	}

	targetDiv.onRefresh = function(){
												for ( var i = 0 ; i < targetDiv.data("num") ; i++ )
												{
													if ( targetDiv.data("stat") == "on" )
													{
														var rr = Math.floor( Math.random() * (targetDiv.data("height")-1) ) + 1;
														targetDiv.data("barsArray")[i].css({'height':rr+'px'});
													}
													else if ( targetDiv.data("stat") == "off" )
														targetDiv.data("barsArray")[i].css({'height':1+'px'});
												}
											} ;
	targetDiv.data( {"int":(window.setInterval( targetDiv.onRefresh , 50))} );

	targetDiv.data({ "onFunction" : function(){
													targetDiv.data( {"stat":"on"} );
												} });
	targetDiv.data({ "offFunction" : function(){
													targetDiv.data( {"stat":"off"} );
												} });
};

this.createMusicBars2 = function( targetDiv )
{
	targetDiv.data( {"barsArray":[], "stat":"on", "hArray":[3,5,7,9,9,7,5,3] } );
	for ( var i = 0; i < targetDiv.data("hArray").length ; i++ )
	{
		var id = targetDiv.attr('id');
		targetDiv.append( "<div id='" + id + "_" + i +"'></div>" );
		var newDiv = $('#'+id+'_'+i); 
 		newDiv.css({'left':(7+i*2)+'px','top':(6)+'px','width':'1px','height':'18px','background':'white'});
 		targetDiv.data("barsArray").push(newDiv);
	}

	targetDiv.onRefresh = function(){
										for ( var i = 0 ; i < targetDiv.data("hArray").length ; i++ )
										{
											if ( targetDiv.data("stat") == "on" )
											{
												var rr = Math.floor( Math.random() * (targetDiv.data("hArray")[i]) ) + 1;
												targetDiv.data("barsArray")[i].css({'height':(2*rr)+'px', 'top':(6+(9-rr))+'px'});
											}
											else if ( targetDiv.data("stat") == "off" )
												targetDiv.data("barsArray")[i].css({'height':0+'px'});
										}
									} ;
	targetDiv.data( {"int":(window.setInterval( targetDiv.onRefresh , 75))} );

	targetDiv.data({ "onFunction" : function(){
													targetDiv.data( {"stat":"on"} );
												} });
	targetDiv.data({ "offFunction" : function(){
													targetDiv.data( {"stat":"off"} );
												} });
};





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).apply(UI);

