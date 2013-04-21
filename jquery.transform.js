;
window.jQuery && function($) {
	$.fn.transform = function(key, value) {
		var ret,
			data = this.data('transform'),
			propText;

		// key = escape(key);

		if (!data) {
			data = {};
			this.data('transform', data);
		}

		var argLength = arguments.length;
		// `.transform()`
		if (argLength == 0) {
			ret = data;
		}
		else if (argLength == 1) {
			// `.transform(key)`
			if (typeof key == 'string') {
				ret = data[key];
			}
			// `.transform(data)`
			else {
				data = key;
				this.data('transform', data),
				propText = obj2prop(data);
				ret = this.css('transform', propText);
			}
		}
		else if (argLength == 2) {
			// `.transform(key, value)`
			if (value) {
				data[key] = value;
			}
			// `.transform(key, null)`
			else {
				delete data[key];
			}
			propText = obj2prop(data);
			ret = this.css('transform', propText);
		}
		return ret;
	};

	var obj2prop = $.fn.transform.obj2prop = function(obj) {
		var prop = '';
		for (var key in obj) {
			prop += key + '(' + obj[key] + ') ';
		}
		return prop;
	};
}(jQuery);
