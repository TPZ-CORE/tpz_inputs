local input

-----------------------------------------------------------
--[[ Events ]]--
-----------------------------------------------------------

AddEventHandler("tpz_inputs:getSliderResult", function(data, cb)
    GetInput(data, false, false, false, true, false, cb)
end)

AddEventHandler("tpz_inputs:getAdvancedSliderResult", function(data, cb)
    GetInput(data, false, false, false, true, true, cb)
end)

AddEventHandler("tpz_inputs:getSelectedOptionsInput", function(data, cb)
    GetInput(data, false, false, true, false, false, cb)
end)

AddEventHandler("tpz_inputs:getButtonReturnedValuesInput", function(data, cb)
    GetInput(data, false, true, false, false, false, cb)
end)

AddEventHandler("tpz_inputs:getButtonInput", function(data, cb)
    GetInput(data, false, false, false, false, false, cb)
end)

AddEventHandler("tpz_inputs:getTextInput", function(data, cb)
    GetInput(data, true, false, false, false, false, cb)
end)


-----------------------------------------------------------
--[[ Functions ]]--
-----------------------------------------------------------

function GetInput(data, hasTextInput, returnClickedValue, returnSelectedOptionValue, returnSliderValue, returnAdvancedSliderValue, cb)

    ToggleUI(true)

    SendNUIMessage({ 
        action                    = "open", 
        inputData                 = data, 
        hasTextInput              = hasTextInput, 
        returnClickedValue        = returnClickedValue, 
        returnSelectedOptionValue = returnSelectedOptionValue,
        returnSliderValue         = returnSliderValue,
        returnAdvancedSliderValue = returnAdvancedSliderValue,
    })

    while not input do 
        Citizen.Wait(50) 
    end
    
    Citizen.Wait(10)

    cb(input)

    input = nil
    SendNUIMessage({ action = 'close'})
end 

function ToggleUI(display)
    SetNuiFocus(display,display)
    SendNUIMessage({ action = 'toggle', toggle = display })
end

-----------------------------------------------------------
--[[ NUI Callbacks ]]--
-----------------------------------------------------------

RegisterNUICallback('sendbuttonclickedinput', function(data)
    input = data.input
    ToggleUI(false)
end)

RegisterNUICallback('closeNUI', function()
    ToggleUI(false)
end)

-----------------------------------------------------------
--[[ Commands ]]--
-----------------------------------------------------------

RegisterCommand("toggleofftpinputs",function()
    input = nil
    ToggleUI(false)
end)
