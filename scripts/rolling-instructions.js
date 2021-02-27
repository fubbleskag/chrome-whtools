jQuery( document ).ready( function () {
	console.log( "ready" );
	jQuery( ".parms" ).change( function() {
		var criteria=[];
		jQuery( ".parms" ).each( function() {
			val = jQuery( this ).val();
			if ( val != '' ) {
				criteria.push( val );
			}
		} );
		if ( criteria.length == 3 ) {
			var classname = "." + criteria.join(".");
			jQuery( '.instructions' ).hide();
			jQuery( classname ).show();
		}
	} );
} );
