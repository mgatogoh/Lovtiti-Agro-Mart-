import type { TextInputProps, StyleProp, ViewStyle, TextStyle } from "react-native";

export interface InputFieldProps extends TextInputProps {
    label?: string;
    error?: string | null;
    /**local image require() or remote URI string */
    icon?: number | string;
    showCount?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    rightIconName?: string;
    onRightIconPress?: () => void;
    title?: string;
    placeholder?: string;
    placeholderTextColor?: string;
}

