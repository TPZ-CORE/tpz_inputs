
var hasTextInputParameter = false;

var hasReturningClickedValues = false;
var hasReturningSelectedOptionValue = false;

function closeInputsDialog() {
  toggleInputsDialog(false);

  hasTextInputParameter = false;
  hasReturningClickedValues = false;
  hasReturningSelectedOptionValue = false;

  document.getElementById("text_input").style.visibility = "hidden";
  document.getElementById("text_input").value = "";
  
  document.getElementById("options_select").style.visibility = "hidden";

  $('#options_select').html('');

	$.post('http://tpz_inputs/closeNUI', JSON.stringify({}));
}

function toggleInputsDialog(bool) {

	if (bool) {
		$("#tpz_inputs").show();
	} else {
		$("#tpz_inputs").hide();
	}
}


function playAudio(sound) {
	var audio = new Audio('./audio/' + sound);
	audio.volume = Config.DefaultClickSoundVolume;
	audio.play();
}

$(function() {

  toggleInputsDialog(false);

	window.addEventListener('message', function(event) {
		
    var item = event.data;

    if (item.action === 'toggle') {
			toggleInputsDialog(item.toggle);

      document.getElementById("text_input").style.visibility = "hidden";
      document.getElementById("text_input").value = "";

      document.getElementById("options_select").style.visibility = "hidden";
      
    } else if (event.data.action == "open") {
      var data = event.data.inputData;
      var $hasTextInput = event.data.hasTextInput;
      var $hasReturnedValues = event.data.returnClickedValue;
      var $hasReturnedSelectedOptionValues = event.data.returnSelectedOptionValue;

			document.getElementById("title").innerHTML = data.title;
      document.getElementById("description").innerHTML = data.desc;
       
      hasTextInputParameter = $hasTextInput;
      hasReturningClickedValues = $hasReturnedValues;
      hasReturningSelectedOptionValue = $hasReturnedSelectedOptionValues;

      if ($hasTextInput) {

        document.getElementById("text_input").style.visibility = "visible";
      }

      if ($hasReturnedSelectedOptionValues){
        document.getElementById("options_select").style.visibility = "visible";

        var options = data.options

        var x = document.getElementById("options_select");

        options.forEach((val) => {
          var option = document.createElement("option");
          option.text = val;
          x.add(option);

        });

      }

      document.getElementById("firstbutton").innerHTML = data.buttonparam1;
      document.getElementById("secondbutton").innerHTML = data.buttonparam2;

    } else if (event.data.action == "close") {
      closeInputsDialog();
    }

  });

  /*-----------------------------------------------------------
  General Action
  -----------------------------------------------------------*/

  $("#tpz_inputs").on("click", "#firstbutton", function(event) {
    playAudio("button_click.wav");

    var returnedText = "ACCEPT"

    if (!hasReturningClickedValues){

      if (hasTextInputParameter) {
        var input = document.getElementById("text_input").value;
        returnedText = input
      }else if (hasReturningSelectedOptionValue){

        var input = document.getElementById("options_select").value;

        returnedText = input
      }
    }else{
      returnedText = document.getElementById("firstbutton").innerHTML;
    }

    $.post("http://tpz_inputs/sendbuttonclickedinput", JSON.stringify({
      input: returnedText,
    }));

  });
  
  $("#tpz_inputs").on("click", "#secondbutton", function(event) {
    playAudio("button_click.wav");

    var returnedText = "DECLINE"

    if (hasReturningClickedValues){
      returnedText = document.getElementById("secondbutton").innerHTML;
    }

    $.post("http://tpz_inputs/sendbuttonclickedinput", JSON.stringify({
      input: returnedText,
    }));

  });
  

});
