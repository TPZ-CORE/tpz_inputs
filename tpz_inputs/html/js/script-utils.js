let CONTAINS_TEXT_INPUT_PARAMETER     = false;
let CONTAINS_RETURNED_CLICKED_VALUES  = false;
let CONTAINS_RETURNED_OPTION_VALUES   = false;

document.addEventListener('DOMContentLoaded', function() {

  $("#tpz_inputs").hide();

  $("#text_input").fadeOut();
  $("#text_input").val("");
  
  $("#options_select").fadeOut();
  $('#options_select').html('');

}, false);

function CloseDialog() {
  
  $("#tpz_inputs").fadeOut();

  CONTAINS_TEXT_INPUT_PARAMETER    = false;
  CONTAINS_RETURNED_CLICKED_VALUES = false;
  CONTAINS_RETURNED_OPTION_VALUES  = false;

  $("#text_input").fadeOut();
  $("#text_input").val("");
  
  $("#options_select").fadeOut();
  $('#options_select').html('');

	$.post('http://tpz_inputs/closeNUI', JSON.stringify({}));
}

function playAudio(sound) {
	var audio = new Audio('./audio/' + sound);
	audio.volume = Config.DefaultClickSoundVolume;
	audio.play();
}
