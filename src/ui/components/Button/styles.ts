import { theme } from "@ui/styles/theme";
import { createVariants, VariantProps } from "@ui/styles/utils/createVariants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {}
});

export const buttonStyles = createVariants({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.blue[600],  
      },
       secondary: {
        backgroundColor: theme.colors.gray[300], 
       },
    },
    size: {
      default: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 6,
      },
       icon: {
        width: 48,
        height: 48,
       }, 
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
      false: {
        opacity: 1,
      }
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    disabled: 'false',
  }
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;