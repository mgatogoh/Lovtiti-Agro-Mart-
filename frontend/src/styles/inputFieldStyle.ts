import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        marginBottom: 12,
    },
    label: {
        fontSize: 13,
        marginBottom: 6,
        color: "#111827",
        fontWeight: "600",
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        borderRadius: 8,
        minHeight: 44,
        backgroundColor: "#fff",
    },
    inputBorder: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    inputErrorBorder: {
        borderWidth: 1,
        borderColor: "#EF4444",
    },
    leftIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: "contain",
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        color: "#111827",
    },
    rightIconTouch: {
        padding: 8,
        marginLeft: 6,
    },
    metaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
    },
    errorText: {
        color: "#EF4444",
        fontSize: 12,
    },
    countText: {
        fontSize: 12,
        color: "#6B7280",
    },
});

export default styles;
