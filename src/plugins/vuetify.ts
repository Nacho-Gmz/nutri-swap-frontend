/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";

// Themes
const customLight: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#F7FBF2",
    surface: "#F7FBF2",
    primary: "#35693E",
    primaryContainer: "#B7F1BA",
    secondary: "#516351",
    secondaryContainer: "#D4E8D1",
    error: "#BA1A1A",
    errorContainer: "#FFDAD6",
    warning: "#735c0c",
    warningContainer: "#ffe08b",
    info: "#39656D",
    infoContainer: "#BDEAF3",
    "on-background": "#181D18",
    "on-surface": "#181D18",
    "on-primary": "#FFFFFF",
    "on-primaryContainer": "#1C5128",
    "on-secondary": "#FFFFFF",
    "on-secondaryContainer": "#3A4B3A",
    "on-error": "#FFFFFF",
    "on-errorContainer": "#93000A",
    "on-warning": "#ffffff",
    "on-warningContainer": "#584400",
    "on-info": "#FFFFFF",
    "on-infoContainer": "#1F4D54",
  },
};

const customDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#101510",
    surface: "#101510",
    primary: "#9CD49F",
    primaryContainer: "#1C5128",
    secondary: "#B8CCB6",
    secondaryContainer: "#3A4B3A",
    error: "#FFB4AB",
    errorContainer: "#93000a",
    warning: "#e3c46d",
    warningContainer: "#584400",
    info: "#A1CED7",
    infoContainer: "#1F4D54",
    "on-background": "#E0E4DB",
    "on-surface": "#E0E4DB",
    "on-primary": "#003914",
    "on-primaryContainer": "#B7F1BA",
    "on-secondary": "#3A4B3A",
    "on-secondaryContainer": "#D4E8D1",
    "on-error": "#690005",
    "on-errorContainer": "#FFDAD6",
    "on-warning": "#3d2f00",
    "on-warningContainer": "#ffe08b",
    "on-info": "#00363D",
    "on-infoContainer": "#BDEAF3",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "customLight",
    themes: {
      customLight,
      customDark,
    },
  },
});
