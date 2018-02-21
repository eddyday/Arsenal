import Typography from "typography";
import '../fonts/stylesheet.css';
import kirkhamTheme from "typography-theme-grand-view";
kirkhamTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h1, h3': {
      marginBottom: rhythm(1/2),
      marginTop: rhythm(2),
      color: 'rgb(216, 9, 25)',
      fontFamily: 'Clearface Gothic LH'
    }
  })

const typography = new Typography(kirkhamTheme)

export default typography;