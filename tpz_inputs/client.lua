local input = nil
local isActive = false

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

AddEventHandler("tpz_inputs:voice_tasks", function(data, cb)

    -- PUSH TO TALK.
    Citizen.CreateThread(function()
    
        while isActive do
            Wait(0)
    
            if not IS_NUI_FOCUSED then
                SetNuiFocusKeepInput(true)
                IS_NUI_FOCUSED = true
            end
    
            DisableAllControlActions(0)
            EnableControlAction(0, `INPUT_PUSH_TO_TALK`, true)
    
        end
    
    end)

end)

-----------------------------------------------------------
--[[ Functions ]]--
-----------------------------------------------------------

function GetInput(data, hasTextInput, returnClickedValue, returnSelectedOptionValue, returnSliderValue, returnAdvancedSliderValue, cb)

    if input then 

        SendNUIMessage({ action = 'close'})

        while input do 
            Wait(100)
        end

    end

    isActive = true
    TriggerEvent("tpz_inputs:voice_tasks")
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
        Wait(10) 
    end

    return cb(input)
end 

function ToggleUI(display)
    SetNuiFocus(display,display)
    SendNUIMessage({ action = 'toggle', toggle = display })

    if display == false then 
        input = nil 
        isActive = false
    end

end

-----------------------------------------------------------
--[[ NUI Callbacks ]]--
-----------------------------------------------------------

RegisterNUICallback('sendbuttonclickedinput', function(data)
    input = data.input
    SendNUIMessage({ action = 'close'})
end)

RegisterNUICallback('closeNUI', function()
    ToggleUI(false)
end)

-----------------------------------------------------------
--[[ Commands ]]--
-----------------------------------------------------------

RegisterCommand("toggleinput",function()
    input = nil
    SendNUIMessage({ action = 'close'})
end)
