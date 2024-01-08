# tpz_inputs



TPZ-Inputs allows you to create a `Text Field` input, Multiple Options Input and  `Buttons Selection Inputs` which both return the selected / typed value. 

*Fully responsive to all screen resolutions.*

**How to use Buttons Selection?**

When clicking a button, it will return `ACCEPT` or `DECLINE` values as a String.

```lua
local inputData = {
    title = "Your title",
    desc = "Your description",
    buttonparam1 = "ACCEPT",
    buttonparam2 = "DECLINE"
}
                            
TriggerEvent("tpz_inputs:getButtonInput", inputData, function(cb)

    if cb == "ACCEPT" then
        -- do action
    end
end) 
```

**How to use Buttons Selection with returned values?**

When clicking a button, it will return `BUY` or `SELL` values as a String.

```lua
local inputData = {
    title = "Your title",
    desc = "Your description",
    buttonparam1 = "BUY",
    buttonparam2 = "SELL"
}
                            
TriggerEvent("tpz_inputs:getButtonReturnedValuesInput", inputData, function(cb)

    if cb == "BUY" then
        -- do action
    end
end) 
```

**How to use Text Inputs?**

When clicking  `ACCEPT`  button, it will return the input text value as a String.

```lua
local inputData = {
    title = "Your title",
    desc = "Your description",
    buttonparam1 = "ACCEPT",
    buttonparam2 = "DECLINE"
}
                            
TriggerEvent("tpz_inputs:getTextInput", inputData, function(cb)

    if cb == "TEST" then
        -- do action
    end
end) 
```


**How to use Multiple Option Inputs?**

When clicking  `ACCEPT`  button, it will return the selected option text value as a String.

```lua
local inputData = {
    title = "License Registration",
	desc  = "What license registration type would you like to create?",
	buttonparam1 = "ACCEPT",
	buttonparam2 = "DECLINE",

	options = {} -- <- The list with the name values.
}
	
TriggerEvent("tpz_inputs:getSelectedOptionsInput", inputData, function(cb)
	if cb == "something" then
          -- do action
	end
			
end)
```
