$(function () {

  window.addEventListener('message', function (event) {

    var item = event.data;

    if (item.action == 'toggle') {

      document.body.style.display = item.toggle ? "block" : "none";

      if (item.toggle) {
        $("#tpz_inputs").fadeIn();
      }

    } else if (event.data.action == "open") {

      var data = event.data.inputData;

      $("#title").text(data.title);
      $("#description").text(data.desc);

      CONTAINS_TEXT_INPUT_PARAMETER = event.data.hasTextInput;
      CONTAINS_RETURNED_CLICKED_VALUES = event.data.returnClickedValue;
      CONTAINS_RETURNED_OPTION_VALUES = event.data.returnSelectedOptionValue;
      CONTAINS_RANGE_SELECTOR = event.data.returnSliderValue;
      CONTAINS_ADVANCED_RANGE_SELECTOR = event.data.returnAdvancedSliderValue;
      ADVANCED_RANGE_SELECTOR_DESC = data.cost_description;
      ADVANCED_RANGE_SELECTOR_COST = data.cost;
      ADVANCED_RANGE_SELECTOR_CURRENCY = data.cost_currency;

      if (CONTAINS_TEXT_INPUT_PARAMETER) {

        $("#text_input").fadeIn();
      }

      if (CONTAINS_RETURNED_OPTION_VALUES) {
        $("#options_select").fadeIn();

        var options = data.options
        var x = document.getElementById("options_select");

        options.forEach((val) => {
          var option = document.createElement("option");
          option.text = val;
          x.add(option);

        });

      }

      if (CONTAINS_RANGE_SELECTOR) {

        $("#range-selector").attr("value", 1);

        $("#range-selector").attr("min", data.min);
        $("#range-selector").attr("max", data.max);

        $("#range-selector").val(1);
        $("#range-selector-value").text('1');

        $("#range-selector").fadeIn();
        $("#range-selector-value").fadeIn();

        if (CONTAINS_ADVANCED_RANGE_SELECTOR) {

          const desc = ADVANCED_RANGE_SELECTOR_DESC;
          const cost = Number(ADVANCED_RANGE_SELECTOR_COST);
          const currency = ADVANCED_RANGE_SELECTOR_CURRENCY;

          $("#range-selector-description-cost").text(
            `${desc}${cost}${currency}`
          );

          $("#range-selector-description-cost").fadeIn();
        }

      }

      $("#left-action-button").text(data.buttonparam1);
      $("#right-action-button").text(data.buttonparam2);

    } else if (event.data.action == "close") {
      CloseDialog();
    }

    const slider = document.getElementById("range-selector");
    const output = document.getElementById("range-selector-value");

    // Show initial value
    output.textContent = slider.value;

    // Update value while dragging
    slider.addEventListener("input", function () {
      output.textContent = this.value;

      if (CONTAINS_ADVANCED_RANGE_SELECTOR) {

        const v = Number(this.value);
        const desc = ADVANCED_RANGE_SELECTOR_DESC;
        const cost = Number(ADVANCED_RANGE_SELECTOR_COST);
        const currency = ADVANCED_RANGE_SELECTOR_CURRENCY;

        const total = v * cost;
        const formatted = total.toFixed(2);

        $("#range-selector-description-cost").text(
          `${desc}${formatted}${currency}`
        );

      }
    });


  });

  /*-----------------------------------------------------------
  General Action
  -----------------------------------------------------------*/

  $("#tpz_inputs").on("click", "#left-action-button", function (event) {
    playAudio("button_click.wav");

    var returnedText = "ACCEPT"

    if (!CONTAINS_RETURNED_CLICKED_VALUES) {

      if (CONTAINS_TEXT_INPUT_PARAMETER) {
        returnedText = $("#text_input").val();

      } else if (CONTAINS_RETURNED_OPTION_VALUES) {
        returnedText = $("#options_select").val();
      }

    } else {
      returnedText = $("#left-action-button").text();
    }

    if (CONTAINS_RANGE_SELECTOR) {
      returnedText = $("#range-selector").val();
    }

    $.post("http://tpz_inputs/sendbuttonclickedinput", JSON.stringify({
      input: returnedText,
    }));

  });

  $("#tpz_inputs").on("click", "#right-action-button", function (event) {
    playAudio("button_click.wav");

    var returnedText = "DECLINE"

    if (CONTAINS_RETURNED_CLICKED_VALUES) {
      returnedText = $("#right-action-button").text();
    }

    $.post("http://tpz_inputs/sendbuttonclickedinput", JSON.stringify({
      input: returnedText,
    }));

  });


});


