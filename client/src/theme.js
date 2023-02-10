// color design tokens export
export const tokensDark = {
  
  cerise: {
    50:  "#fdfcfb",
    100: "#fbeff0",
    200: "#f8cae3",
    300: "#ef9cc5",
    400: "#ee6ca3",
    500: "#e44986",
    600: "#d02f65",
    700: "#ab2449",
    800: "#7e1a2f",
    900: "#4e1119",
  },
  cerise: {
    50:  "#fdfcfa",
    100: "#fbf0ea",
    200: "#f8d0d5",
    300: "#eda3ad",
    400: "#e97382",
    500: "#dc4f5f",
    600: "#c43542",
    700: "#9d2831",
    800: "#711c20",
    900: "#451212",
  },
  cocoa: {
    50:  "#fcfbf8",
    100: "#faf0dd",
    200: "#f6d6b8",
    300: "#e8ac86",
    400: "#dc7e57",
    500: "#c85b36",
    600: "#ac4123",
    700: "#85311c",
    800: "#5d2115",
    900: "#3a150d",
  },
  gold: {
    50:  "#fbfaf6",
    100: "#f9f0cc",
    200: "#f2db99",
    300: "#dfb564",
    400: "#c8893a",
    500: "#ab681f",
    600: "#8d4e14",
    700: "#6b3a11",
    800: "#49280e",
    900: "#2f180a",
  },
  lemon: {
    50:  "#faf9f3",
    100: "#f7f0be",
    200: "#eddf81",
    300: "#d2bd4f",
    400: "#a9942a",
    500: "#867514",
    600: "#6b5c0d",
    700: "#52450c",
    800: "#382f0b",
    900: "#251d08",
  },
  green: {
    50:  "#f2f6f4",
    100: "#def0ea",
    200: "#b3e6d0",
    300: "#79caa3",
    400: "#36aa73",
    500: "#258e4a",
    600: "#207836",
    700: "#1d5b2c",
    800: "#153e22",
    900: "#0f261a",
  },
  teal: {
    50:  "#f1f7f7",
    100: "#d5f0f7",
    200: "#a3e4ec",
    300: "#6bc8d3",
    400: "#31a8b3",
    500: "#238a92",
    600: "#1f7177",
    700: "#1c565d",
    800: "#153a43",
    900: "#0d242f",
  },
  navy: {
    50:  "#f5f9fa",
    100: "#ddf1fb",
    200: "#b8def8",
    300: "#88beec",
    400: "#5799de",
    500: "#4276d0",
    600: "#375abc",
    700: "#2c4499",
    800: "#1f2e6e",
    900: "#121c47",
  },
  blue: {
    50:  "#f6f9fb",
    100: "#e3f0fd",
    200: "#c4dafa",
    300: "#9ab7f3",
    400: "#758fea",
    500: "#5e6ae2",
    600: "#4d4ed5",
    700: "#3b3ab5",
    800: "#292886",
    900: "#171955",
  },
  indigo: {
    50:  "#f7fafb",
    100: "#e6f0fc",
    200: "#cdd7fa",
    300: "#a7b3f3",
    400: "#888ae9",
    500: "#7065e2",
    600: "#5c49d4",
    700: "#4637b4",
    800: "#302686",
    900: "#1b1853",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.cerise,
              main: tokensDark.cerise[400],
              light: tokensDark.cerise[400],
            },
            secondary: {
              ...tokensDark.cocoa,
              main: tokensDark.cocoa[300],
            },
            neutral: {
              ...tokensDark.gold,
              main: tokensDark.gold[500],
            },
            background: {
              default: tokensDark.teal[600],
              alt: tokensDark.teal[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.blue,
              main: tokensDark.blue[50],
              light: tokensDark.blue[100],
            },
            secondary: {
              ...tokensLight.indigo,
              main: tokensDark.indigo[600],
              light: tokensDark.indigo[700],
            },
            neutral: {
              ...tokensLight.gold,
              main: tokensDark.gold[500],
            },
            background: {
              default: tokensDark.teal[0],
              alt: tokensDark.teal[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
