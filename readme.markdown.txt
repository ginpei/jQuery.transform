# About jQuery.transform

This is the plugin that maniplates CSS transform propaties.

# Usage

1. Include jQuery and jQuery.transform
2. `$elem.transfrom(fn, value)`

## Sample

See `sample.html`.

````
<div id="box"></div>
<script src="jquery.js"></script>
<script src="jquery.transform.js"></script>
<script>
	jQuery(function($) {
		$('#box')
			.transform('rotate', '10deg')
			.transform('scale', '.8');
	});
</script>
````

# References

## `.transform(fn, value)`

* @param {String} `fn` Transform function's name. ex: `"translate"`, `"scale"`, `"rotate"`, `"skew"`.
* @param {String} `value` Function's value.
* @returns {jQuery}

## `.transform(fn)`

* @param {String} `fn` Transform function's name. ex: `"translate"`, `"scale"`, `"rotate"`, `"skew"`.
* @returns {String} The value you set before getting.

## `.transfrom(data)`

* @param {Object} `data` `transform` value list. ex: `{ translate:0, scale:1
	}`
* @returns {jQuery}

## `.transfrom()`

* @returns {Object} Holds `transform` value list.

# Details

## License

* MIT Lisence
* https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt

## Copyright

* Written by Ginpei

## Contact

* Twitter: [@ginpei_jp](https://twitter.com/ginpei_jp), [@ginpei_en](https://twitter.com/ginpei_en)
* Blog (Japanese): http://ginpen.com

