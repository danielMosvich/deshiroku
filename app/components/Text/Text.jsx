export default function Text({
  children,
  color,
  bold,
  light,
  weight,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  size,
  spacing,

  p1,
  p2,
  p3,
  p4,
  contain,
  className,
  styles

}) {
  let boldStyle;
  let sizeStyle;
  let containStyle;
  if (bold) {
    boldStyle = "bold";
  } else if (light) {
    boldStyle = "lighter";
  } else {
    boldStyle = "normal";
  }

  if (h1) {
    sizeStyle = "7rem";
    weight ? (boldStyle = weight) : (boldStyle = "bold");
  } else if (h2) {
    sizeStyle = "6rem";
    weight ? (boldStyle = weight) : (boldStyle = "bold");
  } else if (h3) {
    sizeStyle = "5rem";
    weight ? (boldStyle = weight) : (boldStyle = "bold");
  } else if (h4) {
    sizeStyle = "4rem";
    weight ? (boldStyle = weight) : (boldStyle = "bold");
  } else if (h5) {
    sizeStyle = "3rem";
    weight ? (boldStyle = weight) : (boldStyle = "bold");
  } else if (h6) {
    sizeStyle = "2rem";
    weight ? (boldStyle = weight) : (boldStyle = "bold");
  }

  if (p1) {
    sizeStyle = "1.5rem";
  } else if (p2) {
    sizeStyle = "1.3rem";
  } else if (p3) {
    sizeStyle = "1.1rem";
  } else if (p4) {
    sizeStyle = "0.9rem";
  }

  
  let styleText = {
    color: color ? color : "var(--text-1)",
    fontWeight: boldStyle ? boldStyle : weight,
    fontSize: size ? size : sizeStyle,
    letterSpacing: spacing && spacing,
    ...styles,
  };

  let styleTextHover = {
    color:'red'
  }

  if(contain){
    containStyle = {
      textOverflow:"ellipsis",
      whiteSpace:"nowrap",
      overflow:"hidden"
    }

    styleText = {
      ...styleText,
      ...containStyle,
    }
  }
  return <p style={styleText} className={className} >{children}</p>;
}
