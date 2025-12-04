let CONTAINS_TEXT_INPUT_PARAMETER     = false;
let CONTAINS_RETURNED_CLICKED_VALUES  = false;
let CONTAINS_RETURNED_OPTION_VALUES   = false;
let CONTAINS_RANGE_SELECTOR           = false;
let CONTAINS_ADVANCED_RANGE_SELECTOR  = false;
let ADVANCED_RANGE_SELECTOR_COST      = 0;
let ADVANCED_RANGE_SELECTOR_DESC      = null;
let ADVANCED_RANGE_SELECTOR_CURRENCY  = null;

document.addEventListener('DOMContentLoaded', function() {

  $("#tpz_inputs").hide();

  $("#text_input").fadeOut();
  $("#text_input").val("");
  
  $("#options_select").fadeOut();
  $('#options_select').html('');

  $("#range-selector").fadeOut();
  $("#range-selector-value").fadeOut();

  $("#range-selector").val(1);
  $("#range-selector-value").text('1');
  
  $("#range-selector-description-cost").text('');
  $("#range-selector-description-cost").fadeOut();

}, false);

function CloseDialog() {
  
  $("#tpz_inputs").fadeOut();

  CONTAINS_TEXT_INPUT_PARAMETER    = false;
  CONTAINS_RETURNED_CLICKED_VALUES = false;
  CONTAINS_RETURNED_OPTION_VALUES  = false;
  CONTAINS_RANGE_SELECTOR = false;
  CONTAINS_ADVANCED_RANGE_SELECTOR = false;
  ADVANCED_RANGE_SELECTOR_COST = 0;
  ADVANCED_RANGE_SELECTOR_DESC = null;
  ADVANCED_RANGE_SELECTOR_CURRENCY = null;

  $("#text_input").fadeOut();
  $("#text_input").val("");
  
  $("#options_select").fadeOut();
  $('#options_select').html('');

  $("#range-selector").fadeOut();
  $("#range-selector-value").fadeOut();
  
  $("#range-selector-value").text('1');
  $("#range-selector").val(1);

  $("#range-selector-description-cost").text('');
  $("#range-selector-description-cost").fadeOut();

	$.post('http://tpz_inputs/closeNUI', JSON.stringify({}));
}

function playAudio(sound) {
	var audio = new Audio('./audio/' + sound);
	audio.volume = Config.DefaultClickSoundVolume;
	audio.play();
}
