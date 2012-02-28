/**
 * @author Henry Schmieder
 */

window.addEventListener( "load", function() { new SomaApp(  ); }, false );

function d()
{
	if( window["console"] ) {
		console.log( arguments );
	}

}

var CommandEventList =
{
	STARTUP: "startup",
	COLORDATA_LOAD: "colordata.load",
	COLORDATA_UPDATED: "colordata.updated",
	COLOR_CHANGE: "color.change",
	CHAIN_CHAIN: "chain.chain",
	ASYNC_CALL: "async.call",
	ASYNC_CHAIN: "async.chain",
	SEQUENCE_STOP_ALL: "sequence.stopall",
	TWEENSEQUENCE_SEQUENCE: "tweensequence.sequence",
	TWEEN_TWEEN: "tween.tween",
	MOVEVIEW_MOVE: "moveview.move"
	
};

/** @class */
var SomaApp = new Class
( {
		Extends: soma.Application,

		init: function() {

		},
		
		registerCommands: function()
		{
			this.addCommand( CommandEventList.CHAIN_CHAIN, ParallelTestCommand );
			this.addCommand( CommandEventList.TWEENSEQUENCE_SEQUENCE, TweenSequenceCommand );
			this.addCommand( CommandEventList.TWEEN_TWEEN, TweenCommand );
			this.addCommand( CommandEventList.ASYNC_CALL, AsyncCommand );
			this.addCommand( CommandEventList.ASYNC_CHAIN, SequenceTestCommand );
			this.addCommand( CommandEventList.SEQUENCE_STOP_ALL, SequenceStopCommand );
		},
	
		registerModels: function()
		{
			
		},
		registerWires: function()
		{
			
		},
		registerViews: function()
		{
		
		},
		start: function()
		{
            this.addWire( ColorWire.NAME, soma.createClassInstance( ColorWire ) );
			this.dispatchEvent( new ColorEvent( CommandEventList.COLORDATA_LOAD ) );
		}
} );


