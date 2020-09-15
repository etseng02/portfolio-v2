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
      blinding: {
        text: "#2d3748",
        background: "#fff",
        primary: "#2b6cb0",
        primaryHover: "#2c5282",
        secondary: "#718096",
        muted: "#e2e8f0",
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
  // colors: {

  // },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
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
  styles: {
    a: {
      color: "primary",
      transition: "color .2s ease-out",
      ":hover,:focus": {
        color: "secondary",
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
    // a: {
    //   color: "primary",
    //   "&:hover": {
    //     color: "secondary",
    //   },
    // },
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
      borderColor: "muted",
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
      fontSize: 1,
      fontWeight: "bold",
      transition: "color .3s ease-out",
      ":hover,:focus": {
        color: "primary",
        //textDecoration: "underline",
      },
    },
    themeSelector: {
      border: "1px solid",
      borderRadius: 4,
      borderWidth: "1px",
      borderColor: "text",
      borderBottomWidth: 1,
      //background: "red",
      cursor: "pointer",
      display: "block",
      px: 2,
      py: 1,
      color: "inherit",
      textDecoration: "none",
      fontSize: 1,
      fontWeight: "bold",
      transition: "borderColor .3s ease-out,",
      ":hover,:focus": {
        borderColor: "primary",
        //textDecoration: "underline",
      },
    },
  },
}
