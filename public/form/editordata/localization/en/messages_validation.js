/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
jQuery.extend(jQuery.validator.messages, {
	required: _("This field is required."),
	remote: _("Please fix this field."),
	email: _("Please enter a valid email address."),
	url: _("Please enter a valid URL."),
	date: _("Please enter a valid date."),
	dateISO: _("Please enter a valid date (ISO)."),
	number: _("Please enter a valid number."),
	digits: _("Please enter only digits."),
	creditcard: _("Please enter a valid credit card number."),
	equalTo: _("Please enter the same value again."),
	accept: _("Please enter a value with a valid extension."),
	maxlength: jQuery.validator.format( _("Please enter no more than {0} characters.") ),
	minlength: jQuery.validator.format( _("Please enter at least {0} characters.") ),
	rangelength: jQuery.validator.format( _("Please enter a value between {0} and {1} characters long.") ),
	range: jQuery.validator.format( _("Please enter a valid value between {0} and {1}.") ),
	max: jQuery.validator.format( _("Please enter a value less than or equal to {0}.") ),
	min: jQuery.validator.format( _("Please enter a value greater than or equal to {0}.") ),
	phoneUS:_("Please specify a valid phone number."),
	phoneUK:_("Please specify a valid phone number."),
	mobileUK:_("Please specify a valid phone number."),
	international:_("Please specify a valid phone number."),
    regex_config:_("Please enter a value matching the regular expression."),
    decimals:_("Please enter a valid number."),
    minlength_checkbox:jQuery.validator.format( _("Please select at least {0} options."))
});
