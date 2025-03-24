import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", // Corrigido "Center" para "center"
        alignItems: "center",
        backgroundColor: "ghostwhite",
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight },
        }),
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center", // Adicionado para centralizar o texto dentro da box
        backgroundColor: "lightgray",
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },
});
