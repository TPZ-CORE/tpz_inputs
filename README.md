# TPZ-CORE Inputs

# Installation

1. When opening the zip file, open `tpz_inputs-main` directory folder and inside there will be another directory folder which is called as `tpz_inputs`, this directory folder is the one that should be exported to your resources (The folder which contains `fxmanifest.lua`).

2. Add `ensure tpz_inputs` before the `tpz_core` (framework) in the resources.cfg or server.cfg, depends where your scripts are located.

## Development 

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

**How to use a slider?**

When clicking ACCEPT button, it will return the selected option text value as a String.

```lua
local inputData = {
    title = "Insert Quantity",
	desc  = "how much quantity would you like to withdraw?",
	buttonparam1 = "ACCEPT",
	buttonparam2 = "DECLINE",
	min          = 1, -- <- minimum quantity
	max          = 20, -- <- maximum quantity
}
	
TriggerEvent("tpz_inputs:getSliderResult", inputData, function(cb)
	if cb ~= "DECLINE" then
          -- do action (returns an integer)
	end
			
end)
```

**How to use an advanced slider?**

When clicking ACCEPT button, it will return the selected option text value as a String.

```lua
local inputData = {
    title            = "Insert Quantity",
	desc             = "how much quantity would you like to withdraw?",
	buttonparam1     = "ACCEPT",
	buttonparam2     = "DECLINE",
	min              = 1, -- <- minimum quantity,
	max              = 20, -- <- maximum quantity,
    cost             = 0.10, -- <- item cost x1
    cost_description = "you will pay: ",
    cost_currency    = " dollars,
}
	
TriggerEvent("tpz_inputs:getAdvancedSliderResult", inputData, function(cb)
	if cb ~= "DECLINE" then
          -- do action (returns an integer)
	end
			
end)
```

## Commands 
| Command              | Description                                      |
|----------------------|--------------------------------------------------|
| `toggleofftpinputs` | Toggle off the inputs dialog in case its bugged. |

<img width="723" height="315" alt="220184657-850ef2ce-2ccf-470b-8302-507aaaf7387c" src="https://github.com/user-attachments/assets/60399c66-67ad-409b-bdc2-223c3e163ed3" />
<img width="723" height="312" alt="220184654-76c6543e-054a-41ed-9eb0-adb5c3848549" src="https://github.com/user-attachments/assets/eb372125-1209-4793-b1cf-833395742bc5" />
<img width="677" height="288" alt="{E53571B9-D0A7-486F-B7EE-2F7E8520EFF5}" src="https://github.com/user-attachments/assets/56c9f921-004a-41b1-9ba1-a63236c9afe6" />
<img width="726" height="338" alt="515393339-4cd13f24-37a5-4f88-a649-ab4b93754037" src="https://github.com/user-attachments/assets/1e658f02-abe8-4c14-b2a8-76b97a6cf876" />
<img width="714" height="341" alt="{6E8EA9BB-D7C4-4B26-987D-D767A51C02E5}" src="https://github.com/user-attachments/assets/201453e7-5420-461b-90ad-5b00fec63dd5" />

