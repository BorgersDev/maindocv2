import { FocusEvent, NativeSyntheticEvent, TextInput, TextInputFocusEvent, TextInputFocusEventData } from "react-native";
import { theme } from "@ui/styles/theme";
import { inputStyles } from "./styles";
import { useState } from "react";

type BaseTextInputProps = Omit<React.ComponentProps<typeof TextInput>, 'readOnly'>;


interface IInputProps extends BaseTextInputProps {
  error?: boolean,
  disabled?: boolean
}

export function AppInput({
  style,
  onFocus,
  onBlur,
  error,
  disabled,
  ...props
}: IInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent) {
    setIsFocused(true)
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent) {
    setIsFocused(false)
    onBlur?.(event);
  }
  return (
    <TextInput 
      style= {[
        inputStyles({ 
          status: error ? 'error' : (isFocused ? 'focus' : 'default'),
          disabled: disabled ? 'true' : 'false'
        }),
        style,
      ]}
      placeholderTextColor={theme.colors.gray[700]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      readOnly={disabled}
      {...props}
    />
  )
}