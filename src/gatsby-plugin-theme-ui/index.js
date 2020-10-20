export default {
  initialColorModeName: "dark",
  colors: {
    text: "hsl(210, 50%, 96%)",
    background: "hsl(230, 25%, 18%)",
    primary: "#0cf",
    secondary: "hsl(0, 0%, 100%)",
    highlight: "hsl(260, 20%, 40%)",
    purple: "hsl(290, 100%, 80%)",
    muted: "hsla(230, 20%, 0%, 20%)",
    gray: "hsl(210, 50%, 60%)",
    teal: "#5fb3b3",
    yellow: "#FAC863",
    black: "#2d3748",
    modes: {
      light: {
        text: "#2d3748",
        background: "#fff",
        //primary: "#2b6cb0",
        primary: "#ff4154",
        primaryHover: "#2c5282",
        secondary: "hsl(210, 50%, 96%)",
        muted: "#161e2e",
        //muted: "#e2e8f0",
        //muted:"#dce7f3 ",
        success: "#9ae6b4",
        info: "#63b3ed",
        warning: "#faf089",
        danger: "#feb2b2",
        light: "#f7fafc",
        dark: "#2d3748",
        textMuted: "#718096",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  text: {
    underline: {
      display: "inline-block",
      borderBottom: "solid",
      borderColor: "primary",
      borderWidth: ["4px", "4px", "4px"],
    },
  },
  buttons: {
    primary: {
      backgroundColor: "transparent",
      borderRadius: 4,
      border: "solid 2px",
      borderColor: "text",
      padding: 3,
      color: "text",
      cursor: "pointer",
      transition: "all 0.3s ease",
      ":hover,:focus": {
        borderColor: "primary",
      },
    },
  },
  styles: {
    a: {
      color: "primary",
      transition: "color .2s ease-out",
      ":hover,:focus": {
        color: "primary",
      },
    },
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "text",
      maxWidth: "800px",
      textAlign: "center",
      margin: "auto",
    },
    img: {
      maxWidth: "100%",
    },
  },
  prism: {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "gray",
    },
    ".comment": {
      fontStyle: "italic",
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
      color: "purple",
    },
    ".atrule,.attr-value,.keyword": {
      color: "primary",
    },
    ".selector,.attr-name,.string,.char,.bultin,.inserted": {
      color: "secondary",
    },
  },
  variants: {
    nav: {
      cursor: "pointer",
      display: "block",
      px: 2,
      py: 1,
      color: "inherit",
      textDecoration: "none",
      fontSize: 2,
      fontWeight: "bold",
      transition: "color .3s ease-out",
      ":hover,:focus": {
        color: "primary",
      },
    },
    navThemeSelector: {
      ml: 1,
      px: 2,
      py: 1,
      fontSize: 2,
      borderRadius: 4,
      border: "solid 2px",
      borderColor: "text",
      color: "text",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      ":hover,:focus": {
        borderColor: "primary",
      },
    },
    themeSelector: {
      borderRadius: 4,
      border: "solid 1px",
      borderColor: "secondary",
      color: "secondary",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      ":hover,:focus": {
        borderColor: "primary",
      },
    },
    projectCard: {
      border: "1px solid",
      borderRadius: 4,
      borderWidth: "1px",
      borderColor: "text",
      p: 1,
    },
    mediaIcons: {
      cursor: "pointer",
      transition: "color .3s ease-out",
      ":hover,:focus": {
        color: "primary",
      },
    },
  },
}
