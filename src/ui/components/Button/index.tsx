import { Pressable } from "react-native";
import { AppText } from "../AppText";
import { buttonStyles, ButtonVariants, styles } from "./styles";

  interface IButtonProps extends React.ComponentProps<typeof Pressable> , Omit<ButtonVariants, 'disabled'> {};

export function AppButton({
  children,
  variant,
  size,
  disabled,
  style,
  ...props
}: IButtonProps) {
  const childEl = (
    typeof children === 'string'
      ? <AppText weight="medium" >{children}</AppText> 
      : children
  );
  return (
    <Pressable
      android_ripple={{ color: 'rgba(0, 0, 0, 1)' }}
      android_disableSound
      style={({ pressed }) => [ 
        buttonStyles({variant, size, disabled: disabled ? 'true' : 'false'}),
        pressed && { opacity: 0.7},
        typeof style === 'function' ? style({ pressed }) : style,
      ]}
      disabled={disabled}
      {...props}
    >
      {childEl}
    </Pressable>
  )
}