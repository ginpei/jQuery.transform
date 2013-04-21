if ( jQuery.fn.transform ) {

module("jQuery.transform");

test("transform()", function() {
	var ret,
		div = jQuery( "<div>" )
			.transform( "rotate", "45deg" )
			.transform( "scale", ".5" );
	equal( div.css("transform"), "rotate(45deg) scale(0.5)", "Some properties");

	ret = div.transform();
	equal( ret, div.data("transform"), "Object containd in data" );
	equal( ret["rotate"], "45deg", "Property from object" );
});

test("transform(Object)", function() {

	var ret,
		div = jQuery( "<div>" )
			.transform( "rotate", "45deg" )
			.transform( "scale", ".5" );
	equal( div.css("transform"), "rotate(45deg) scale(0.5)", "Some properties");

	ret = div.transform({ skew: "10deg, 45deg" });
	equal( ret, div );
	equal( div.css("transform"), "skew(10deg, 45deg)", "New properties");
});

test("transform(String)", function() {

	var ret,
		div = jQuery( "<div>" )
			.transform( "rotate", "45deg" )
			.transform( "scale", ".5" );
	equal( div.css("transform"), "rotate(45deg) scale(0.5)", "Some properties");

	ret = div.transform( "rotate" );
	equal( ret, "45deg" );

	ret = div.transform( "scale" );
	equal( ret, ".5" );
});

test("transform(String, String)", function() {

	var ret,
		div = jQuery( "<div>" );
	equal( div.css("transform"), "", "No transformings");

	ret = div.transform( "rotate", "45deg" );
	equal( ret, div );
	equal( div.css("transform"), "rotate(45deg)", "One property");

	ret = div.transform( "scale", ".5" );
	equal( ret, div );
	equal( div.css("transform"), "rotate(45deg) scale(0.5)", "Some properties");

	ret = div.transform( "rotate", "90deg" );
	equal( ret, div );
	equal( div.css("transform"), "rotate(90deg) scale(0.5)", "Update a property");

	ret = div.transform( "scale", "" );
	equal( ret, div );
	equal( div.css("transform"), "rotate(90deg)", "Remove a property");

	ret = div.transform( "rotate", "" );
	equal( ret, div );
	equal( div.css("transform"), "", "Removing all properties");
});

}
