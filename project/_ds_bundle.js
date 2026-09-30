/* @ds-bundle: {"format":4,"namespace":"OxfordDesignSystem_ec40d0","components":[{"name":"EventCard","sourcePath":"components/cards/EventCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"NewsCard","sourcePath":"components/cards/NewsCard.jsx"},{"name":"ProgramRow","sourcePath":"components/cards/ProgramRow.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GridLines","sourcePath":"components/core/GridLines.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PhoneInput","sourcePath":"components/forms/PhoneInput.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"HeroSlide","sourcePath":"components/media/HeroSlide.jsx"},{"name":"MediaShowcase","sourcePath":"components/media/MediaShowcase.jsx"},{"name":"Carousel","sourcePath":"components/navigation/Carousel.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"}],"sourceHashes":{"components/cards/EventCard.jsx":"31b4fd79998a","components/cards/FeatureCard.jsx":"01734c716f07","components/cards/NewsCard.jsx":"e29db8835a32","components/cards/ProgramRow.jsx":"9cf9406882d6","components/cards/StatCard.jsx":"7de515384336","components/core/Button.jsx":"ca89a0e08a45","components/core/Chip.jsx":"f398caca1d2a","components/core/Eyebrow.jsx":"b6701faecc48","components/core/GridLines.jsx":"db64fe928436","components/core/Icon.jsx":"7b2426a7535a","components/core/IconButton.jsx":"2c903479b5b9","components/core/SectionHeading.jsx":"afd03a199f69","components/core/Wordmark.jsx":"2899862dd2b7","components/forms/FormField.jsx":"4f8c02cade72","components/forms/Input.jsx":"af9fa17590d2","components/forms/PhoneInput.jsx":"5dbbac666d5c","components/forms/SearchField.jsx":"3b4e2a76960d","components/forms/Select.jsx":"31ef86a311e1","components/forms/Textarea.jsx":"03db875eb74f","components/media/HeroSlide.jsx":"3c41f575dc84","components/media/MediaShowcase.jsx":"87b85278bf4f","components/navigation/Carousel.jsx":"9ce49d6ac21a","components/navigation/Footer.jsx":"600f5f0e6a9d","components/navigation/NavBar.jsx":"e5d3a9c42e9c","components/navigation/NavItem.jsx":"dc15c6794510","ui_kits/website/ContactScreen.jsx":"c1ca58cbca5d","ui_kits/website/HomeScreen.jsx":"38df572ff9fc","ui_kits/website/NewsScreen.jsx":"a8f8fe576d0f","ui_kits/website/ProgramsScreen.jsx":"f805fa33e8f1","ui_kits/website/Shell.jsx":"ebb55b9683dd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OxfordDesignSystem_ec40d0 = window.OxfordDesignSystem_ec40d0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EventCard({
  image,
  title,
  year,
  venue,
  ratio = "3/2",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      cursor: "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      aspectRatio: ratio,
      background: "var(--neutral-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: h ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-body-l)",
      letterSpacing: "-.012em",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, year)), venue && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      lineHeight: 1.35,
      color: "var(--text-faint)",
      textAlign: "right",
      maxWidth: 96
    }
  }, venue)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  label,
  value,
  description,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-card)",
      padding: "24px 28px 30px",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      minHeight: 230,
      justifyContent: "space-between",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontStyle: "italic",
      fontSize: 19,
      letterSpacing: "-.01em",
      color: "var(--text-accent)",
      paddingBottom: 14
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-hairline)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-stat)",
      lineHeight: "var(--lh-stat)",
      letterSpacing: "var(--tr-stat)",
      color: "var(--text-strong)"
    }
  }, value), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)",
      maxWidth: 220
    }
  }, description)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = "muted",
  style,
  ...rest
}) {
  const color = tone === "gold" ? "var(--text-accent)" : tone === "inverse" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-core)",
      fontStyle: "italic",
      fontSize: "var(--fs-eyebrow)",
      lineHeight: "var(--lh-eyebrow)",
      fontWeight: "var(--fw-regular)",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GridLines.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GridLines({
  columns = 6,
  tone = "light",
  style,
  ...rest
}) {
  const c = tone === "inverse" ? "var(--border-inverse)" : "var(--border-grid)";
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      gridTemplateColumns: `repeat(${columns},1fr)`,
      pointerEvents: "none",
      zIndex: 0,
      ...style
    }
  }, rest), Array.from({
    length: columns
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderRight: i < columns - 1 ? `1px solid ${c}` : "none"
    }
  })));
}
Object.assign(__ds_scope, { GridLines });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GridLines.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pascal = n => n.split("-").map(s => s[0].toUpperCase() + s.slice(1)).join("");
function Icon({
  name = "arrow-right",
  size = 20,
  strokeWidth = 1.5,
  color = "currentColor",
  style,
  ...rest
}) {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    if (window.lucide) return;
    const t = setInterval(() => {
      if (window.lucide) {
        clearInterval(t);
        force();
      }
    }, 80);
    return () => clearInterval(t);
  }, []);
  const lib = window.lucide && (window.lucide.icons || window.lucide);
  let node = lib && (lib[pascal(name)] || lib[name]);
  if (node && node[0] === "svg") node = node[2];
  if (!Array.isArray(node)) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: size,
      height: size,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, rest), node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureCard({
  index,
  icon = "graduation-cap",
  title,
  description,
  raised = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: raised ? "var(--surface-inverse-raised)" : h ? "#181818" : "var(--surface-inverse-card)",
      border: "1px solid var(--border-inverse)",
      borderRadius: "var(--radius-card)",
      padding: "20px 22px 24px",
      boxShadow: raised ? "var(--shadow-inverse)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), index && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-on-dark-muted)",
      marginBottom: 26
    }
  }, index), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--white)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h4)",
      lineHeight: "var(--lh-h4)",
      letterSpacing: "var(--tr-h4)",
      color: "var(--text-on-dark)",
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-on-dark-muted)"
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  sm: {
    p: "6px 6px 6px 14px",
    fs: 12,
    badge: 18,
    ic: 11
  },
  md: {
    p: "7px 7px 7px 16px",
    fs: 13,
    badge: 21,
    ic: 12
  },
  lg: {
    p: "9px 9px 9px 20px",
    fs: 14,
    badge: 26,
    ic: 14
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = "arrow-up-right",
  showIcon = true,
  disabled = false,
  onClick,
  href,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  const s = SZ[size] || SZ.md;
  const primary = variant === "primary",
    inverse = variant === "inverse";
  const bg = primary ? a ? "var(--action-primary-bg-active)" : h ? "var(--action-primary-bg-hover)" : "var(--action-primary-bg)" : inverse ? h ? "#222" : "var(--surface-inverse-card)" : h ? "var(--surface-sunken)" : "var(--action-ghost-bg)";
  const fg = primary || inverse ? "var(--action-primary-fg)" : "var(--action-ghost-fg)";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: showIcon ? s.p : `${s.p.split(" ")[0]} ${s.p.split(" ")[3]}`,
    background: bg,
    color: fg,
    border: variant === "ghost" ? "1px solid " + (h ? "var(--border-strong)" : "var(--action-ghost-border)") : "1px solid transparent",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-core)",
    fontSize: s.fs,
    fontWeight: "var(--fw-medium)",
    letterSpacing: "-.01em",
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? .4 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transform: a && !disabled ? "scale(var(--press-scale))" : "none",
    transition: "var(--transition-ui)",
    ...style
  };
  const badge = {
    width: s.badge,
    height: s.badge,
    borderRadius: "var(--radius-pill)",
    background: primary || inverse ? "var(--white)" : "var(--surface-sunken)",
    color: primary || inverse ? "var(--oxford-blue)" : "var(--ink-000)",
    display: "grid",
    placeItems: "center",
    flex: "none",
    transform: h && !disabled ? "translateX(2px)" : "none",
    transition: "transform var(--dur-base) var(--ease-standard)"
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: base,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, rest), /*#__PURE__*/React.createElement("span", null, children), showIcon && /*#__PURE__*/React.createElement("span", {
    style: badge
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children,
  icon,
  tone = "light",
  style,
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const inv = tone === "inverse",
    glass = tone === "glass";
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "5px 5px 5px 11px",
      borderRadius: "var(--radius-pill)",
      background: glass ? "var(--glass)" : inv ? "var(--surface-inverse-raised)" : h && onClick ? "var(--surface-sunken)" : "var(--surface-chip)",
      backdropFilter: glass ? "blur(14px)" : undefined,
      color: inv || glass ? "var(--white)" : "var(--ink-000)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-regular)",
      lineHeight: 1,
      border: "1px solid " + (glass ? "rgba(255,255,255,.22)" : inv ? "var(--border-inverse)" : "var(--border-hairline)"),
      cursor: onClick ? "pointer" : "default",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 19,
      height: 19,
      borderRadius: "var(--radius-pill)",
      background: glass || inv ? "rgba(255,255,255,.14)" : "var(--white)",
      border: "1px solid " + (glass || inv ? "transparent" : "var(--border-hairline)"),
      display: "grid",
      placeItems: "center",
      transform: h && onClick ? "translateX(2px)" : "none",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 11,
    strokeWidth: 1.8
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/cards/NewsCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NewsCard({
  image,
  date,
  author,
  title,
  readTime,
  onRead,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      aspectRatio: "4/3",
      background: "var(--neutral-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: h ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-faint)",
      margin: "16px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("span", null, date), /*#__PURE__*/React.createElement("span", null, author)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-body-l)",
      lineHeight: 1.35,
      letterSpacing: "-.012em",
      color: "var(--text-strong)",
      margin: 0,
      textWrap: "pretty"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-faint)"
    }
  }, readTime), /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    icon: "arrow-right",
    onClick: onRead
  }, "Read more")));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon = "chevron-right",
  active = false,
  shape = "pill",
  size = 30,
  disabled = false,
  onClick,
  label,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || icon,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      width: size,
      height: size,
      display: "grid",
      placeItems: "center",
      flex: "none",
      borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-sm)",
      background: active ? h ? "var(--action-primary-bg-hover)" : "var(--action-primary-bg)" : h ? "var(--surface-sunken)" : "var(--white)",
      color: active ? "var(--white)" : "var(--ink-000)",
      border: "1px solid " + (active ? "transparent" : h ? "var(--border-strong)" : "var(--border-hairline)"),
      boxShadow: active ? "none" : "var(--shadow-chip)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      transform: a && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "var(--transition-ui)",
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .47),
    strokeWidth: 1.8
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProgramRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgramRow({
  index,
  title,
  description,
  onOpen,
  last = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "grid",
      gridTemplateColumns: "56px minmax(0,1.1fr) minmax(0,1.3fr) 48px",
      alignItems: "center",
      gap: 24,
      padding: "26px 0",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: last ? "1px solid var(--border-hairline)" : "none",
      background: h ? "var(--neutral-050)" : "transparent",
      transition: "background var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-accent)"
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-h3)",
      letterSpacing: "var(--tr-h3)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    shape: "square",
    size: 32,
    onClick: onOpen,
    label: typeof title === "string" ? title : "Open"
  }));
}
Object.assign(__ds_scope, { ProgramRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProgramRow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  children,
  accent,
  trail,
  size = "h2",
  align = "left",
  tone = "light",
  as = "h2",
  style,
  ...rest
}) {
  const S = {
    display: {
      fs: "var(--fs-display-l)",
      lh: "var(--lh-display-l)",
      tr: "var(--tr-display-l)"
    },
    h1: {
      fs: "var(--fs-h1)",
      lh: "var(--lh-h1)",
      tr: "var(--tr-h1)"
    },
    h2: {
      fs: "var(--fs-h2)",
      lh: "var(--lh-h2)",
      tr: "var(--tr-h2)"
    },
    h3: {
      fs: "var(--fs-h3)",
      lh: "var(--lh-h3)",
      tr: "var(--tr-h3)"
    }
  }[size] || {};
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: S.fs,
      lineHeight: S.lh,
      letterSpacing: S.tr,
      color: tone === "inverse" ? "var(--text-on-dark)" : "var(--text-strong)",
      textAlign: align,
      textWrap: "pretty",
      ...style
    }
  }, rest), children, accent && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, accent)), trail && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === "inverse" ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, trail)));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  text = "Oxford",
  size = 28,
  tone = "ink",
  weight = 500,
  style,
  ...rest
}) {
  const color = tone === "translucent" ? "rgba(255,255,255,.55)" : tone === "inverse" ? "var(--white)" : "var(--ink-000)";
  const grad = tone === "silver" ? {
    background: "linear-gradient(180deg,#ffffff 0%,#cfcfcf 38%,#4a4a4a 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  } : {
    color
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: weight,
      fontSize: size,
      lineHeight: .9,
      letterSpacing: "var(--tr-display-xl)",
      display: "inline-block",
      ...grad,
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormField({
  label,
  children,
  span = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      gridColumn: span === 2 ? "span 2" : "auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "-.01em",
      color: "var(--text-strong)"
    }
  }, label), children);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldStyle = focus => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-core)",
  fontSize: "var(--fs-body)",
  fontWeight: "var(--fw-regular)",
  color: "var(--text-strong)",
  background: "var(--surface-field)",
  border: "1px solid " + (focus ? "var(--oxford-blue)" : "var(--border-field)"),
  borderRadius: "var(--radius-field)",
  padding: "11px 13px",
  outline: "none",
  boxShadow: focus ? "var(--focus-ring)" : "none",
  transition: "var(--transition-ui)"
});
function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  disabled,
  style,
  ...rest
}) {
  const [fo, setFo] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFo(true),
    onBlur: () => setFo(false),
    style: {
      ...fieldStyle(fo),
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PhoneInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldStyle = focus => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-core)",
  fontSize: "var(--fs-body)",
  fontWeight: "var(--fw-regular)",
  color: "var(--text-strong)",
  background: "var(--surface-field)",
  border: "1px solid " + (focus ? "var(--oxford-blue)" : "var(--border-field)"),
  borderRadius: "var(--radius-field)",
  padding: "11px 13px",
  outline: "none",
  boxShadow: focus ? "var(--focus-ring)" : "none",
  transition: "var(--transition-ui)"
});
function PhoneInput({
  dialCode = "+62",
  dialCodes = ["+62", "+44", "+1", "+91"],
  value,
  onChange,
  onDialCodeChange,
  placeholder = "",
  disabled,
  style,
  ...rest
}) {
  const [fo, setFo] = React.useState(false);
  const [code, setCode] = React.useState(dialCode);
  React.useEffect(() => setCode(dialCode), [dialCode]);
  const changeCode = e => {
    setCode(e.target.value);
    if (onDialCodeChange) onDialCodeChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...fieldStyle(fo),
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 13px",
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: code,
    onChange: changeCode,
    disabled: disabled,
    style: {
      appearance: "none",
      border: "none",
      background: "transparent",
      font: "inherit",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      paddingRight: 14,
      outline: "none",
      cursor: "pointer"
    }
  }, dialCodes.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: "var(--border-field)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange || (() => {}),
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFo(true),
    onBlur: () => setFo(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      padding: "11px 0"
    }
  }, rest)));
}
Object.assign(__ds_scope, { PhoneInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PhoneInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  placeholder = "Search ...",
  value,
  onChange,
  onSubmit,
  style,
  ...rest
}) {
  const [fo, setFo] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFo(true),
    onBlur: () => setFo(false),
    style: {
      border: "none",
      borderBottom: "1px solid " + (fo ? "var(--border-strong)" : "transparent"),
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      fontStyle: "italic",
      color: "var(--text-strong)",
      width: 74,
      padding: "4px 0",
      transition: "var(--transition-ui)"
    }
  }, rest)), /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    "aria-label": "Search",
    style: {
      width: 26,
      height: 26,
      borderRadius: "var(--radius-sm)",
      background: "var(--action-primary-bg)",
      color: "var(--white)",
      border: "none",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 13,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldStyle = focus => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-core)",
  fontSize: "var(--fs-body)",
  fontWeight: "var(--fw-regular)",
  color: "var(--text-strong)",
  background: "var(--surface-field)",
  border: "1px solid " + (focus ? "var(--oxford-blue)" : "var(--border-field)"),
  borderRadius: "var(--radius-field)",
  padding: "11px 13px",
  outline: "none",
  boxShadow: focus ? "var(--focus-ring)" : "none",
  transition: "var(--transition-ui)"
});
function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled,
  style,
  ...rest
}) {
  const [fo, setFo] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFo(true),
    onBlur: () => setFo(false),
    style: {
      ...fieldStyle(fo),
      appearance: "none",
      paddingRight: 34,
      color: value ? "var(--text-strong)" : "var(--text-faint)",
      opacity: disabled ? .4 : 1
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldStyle = focus => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-core)",
  fontSize: "var(--fs-body)",
  fontWeight: "var(--fw-regular)",
  color: "var(--text-strong)",
  background: "var(--surface-field)",
  border: "1px solid " + (focus ? "var(--oxford-blue)" : "var(--border-field)"),
  borderRadius: "var(--radius-field)",
  padding: "11px 13px",
  outline: "none",
  boxShadow: focus ? "var(--focus-ring)" : "none",
  transition: "var(--transition-ui)"
});
function Textarea({
  placeholder,
  value,
  onChange,
  rows = 6,
  disabled,
  style,
  ...rest
}) {
  const [fo, setFo] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFo(true),
    onBlur: () => setFo(false),
    style: {
      ...fieldStyle(fo),
      resize: "vertical",
      lineHeight: "var(--lh-body)",
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/media/HeroSlide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HeroSlide({
  image,
  watermark = "Oxford",
  year = "2025",
  headline,
  body,
  height = 440,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      height,
      background: "var(--neutral-300)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "6%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    text: watermark,
    size: 200,
    tone: "translucent",
    style: {
      whiteSpace: "nowrap",
      transform: "scale(1.9)",
      transformOrigin: "top center"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      bottom: 26,
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      color: "rgba(255,255,255,.9)"
    }
  }, year), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "30%",
      bottom: 22,
      maxWidth: 300,
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "rgba(255,255,255,.88)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff",
      fontWeight: "var(--fw-semibold)"
    }
  }, headline), " ", body), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 26,
      bottom: 22
    }
  }, children));
}
Object.assign(__ds_scope, { HeroSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/HeroSlide.jsx", error: String((e && e.message) || e) }); }

// components/media/MediaShowcase.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MediaShowcase({
  image,
  eyebrow = "Our Facilities",
  headline,
  cornerLabel = "AVAILABLE FACILITY",
  counter = "02",
  total = "08",
  watermark = "Library",
  captionTitle,
  captionBody,
  height = 470,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      height,
      background: "var(--ink-900)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-top)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      top: 22,
      right: 26,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "inverse",
    style: {
      color: "rgba(255,255,255,.75)",
      marginBottom: 10
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-h2)",
      letterSpacing: "var(--tr-h2)",
      color: "#fff",
      textWrap: "pretty"
    }
  }, headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-caption)",
      letterSpacing: ".08em",
      color: "rgba(255,255,255,.85)",
      textAlign: "right",
      lineHeight: 1.4
    }
  }, cornerLabel)), captionTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "14%",
      top: "46%",
      maxWidth: 240,
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      background: "var(--glass)",
      backdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)",
      color: "#fff",
      marginBottom: 5
    }
  }, captionTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-caption)",
      lineHeight: 1.5,
      color: "rgba(255,255,255,.8)"
    }
  }, captionBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26,
      bottom: 96,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: 26,
      letterSpacing: "-.02em",
      color: "#fff"
    }
  }, counter, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.55)",
      fontSize: 18
    }
  }, "/", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      bottom: -26,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: 150,
      lineHeight: 1,
      letterSpacing: "var(--tr-display-xl)",
      color: "rgba(255,255,255,.62)"
    }
  }, watermark));
}
Object.assign(__ds_scope, { MediaShowcase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MediaShowcase.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Carousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Carousel({
  count = 2,
  index = 0,
  onChange,
  orientation = "horizontal",
  style,
  ...rest
}) {
  const vert = orientation === "vertical";
  const go = d => onChange && onChange((index + d + count) % count);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: vert ? "column" : "row",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: vert ? "chevron-up" : "chevron-left",
    label: "Previous",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: vert ? "chevron-down" : "chevron-right",
    label: "Next",
    active: true,
    onClick: () => go(1)
  }));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLUMNS = [{
  title: "Explore Oxford",
  links: ["Colleges", "History & Tours", "Public Engagement"]
}, {
  title: "Study With Us",
  links: ["UG Courses", "Grad Programs", "Online Learning"]
}, {
  title: "Research",
  links: ["Research Units", "Funding", "Impact Stories"]
}, {
  title: "Connect",
  links: ["Contact", "Press Office", "Careers"]
}];
function Footer({
  columns = COLUMNS,
  wordmark = "Oxford",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-inverse)",
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      padding: "34px 34px 0",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "200px repeat(4,1fr)",
      gap: 24,
      paddingBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    text: "Oxford",
    size: 30,
    tone: "inverse"
  })), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-on-dark)",
      marginBottom: 12
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      color: "var(--text-on-dark-muted)",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-inverse)",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    text: wordmark,
    size: 230,
    tone: "silver",
    style: {
      marginBottom: -46,
      marginTop: 14,
      whiteSpace: "nowrap"
    }
  })));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  children,
  hasMenu = true,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: "none",
      border: "none",
      padding: "6px 0",
      cursor: "pointer",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-regular)",
      letterSpacing: "-.008em",
      color: active || h ? "var(--text-strong)" : "var(--neutral-700)",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), children, hasMenu && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 13,
    strokeWidth: 1.6,
    style: {
      transform: h ? "translateY(1px)" : "none",
      transition: "transform var(--dur-fast) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GROUP_A = ["About", "Research", "Admissions", "News"],
  GROUP_B = ["Community", "Colleges", "Department"];
function NavBar({
  primary = GROUP_A,
  secondary = GROUP_B,
  active,
  onNavigate,
  onLogin,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 0,
      padding: "0 22px",
      height: 56,
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)",
      position: "relative",
      zIndex: 5,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingRight: 26,
      borderRight: "1px solid var(--border-hairline)",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontSize: 7.5,
      letterSpacing: ".14em",
      color: "var(--oxford-blue)",
      textTransform: "uppercase",
      lineHeight: 1.1,
      textAlign: "right"
    }
  }, "University", /*#__PURE__*/React.createElement("br", null), "of"), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    text: "OXFORD",
    size: 15,
    weight: 600,
    style: {
      letterSpacing: "-.01em",
      color: "var(--oxford-blue)"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 26,
      padding: "0 26px",
      height: "100%",
      borderRight: "1px solid var(--border-hairline)"
    }
  }, primary.map(i => /*#__PURE__*/React.createElement(__ds_scope.NavItem, {
    key: i,
    active: active === i,
    onClick: () => onNavigate && onNavigate(i)
  }, i))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 26,
      padding: "0 26px",
      height: "100%",
      marginLeft: "auto",
      borderLeft: "1px solid var(--border-hairline)"
    }
  }, secondary.map(i => /*#__PURE__*/React.createElement(__ds_scope.NavItem, {
    key: i,
    active: active === i,
    onClick: () => onNavigate && onNavigate(i)
  }, i))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      paddingLeft: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchField, null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    showIcon: false,
    size: "md",
    onClick: onLogin,
    style: {
      padding: "9px 24px"
    }
  }, "Login")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading,
  FormField,
  Input,
  PhoneInput,
  Select,
  Textarea,
  Button
} = window.DS || {};
function ContactScreen() {
  const [v, setV] = React.useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setV({
    ...v,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "58px 40px 70px",
      display: "grid",
      gridTemplateColumns: "1fr 1.35fr",
      gap: 52,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1"
  }, "Have Questions? We'd Love to Hear From You."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      maxWidth: 280,
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, "Whether you're interested in admissions, partnerships, or general enquiries, use the form below and we'll get back to you promptly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-lg)",
      padding: 26,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "First name"
  }, /*#__PURE__*/React.createElement(Input, {
    value: v.first,
    onChange: set("first"),
    placeholder: "Enter your first name"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Last name"
  }, /*#__PURE__*/React.createElement(Input, {
    value: v.last,
    onChange: set("last"),
    placeholder: "Enter your last name"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Input, {
    value: v.email,
    onChange: set("email"),
    placeholder: "Your email address"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Phone Number"
  }, /*#__PURE__*/React.createElement(PhoneInput, {
    value: v.phone,
    onChange: set("phone")
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Subject",
    span: 2
  }, /*#__PURE__*/React.createElement(Select, {
    value: v.subject,
    onChange: set("subject"),
    placeholder: "Select your subject",
    options: ["Admissions", "Research partnership", "Press office", "Alumni", "Other"]
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Message",
    span: 2
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: v.message,
    onChange: set("message"),
    rows: 6,
    placeholder: "Type your message"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, "Send Message"), sent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-muted)"
    }
  }, "Thank you \u2014 we'll be in touch shortly."))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  HeroSlide,
  Carousel,
  Eyebrow,
  SectionHeading,
  Button,
  StatCard,
  MediaShowcase,
  ProgramRow,
  FeatureCard,
  EventCard,
  IconButton
} = window.DS || {};
const HEROES = [{
  image: "../../assets/imagery/hero-christchurch.png",
  headline: "Fully Funded Graduate Studentship For 2025-2026.",
  body: "Check our selection of studentship accepting applications now"
}, {
  image: "../../assets/imagery/radcliffe-dome.png",
  headline: "Undergraduate Open Day, All Colleges.",
  body: "Meet tutors, tour the colleges and sit in on a sample tutorial"
}, {
  image: "../../assets/imagery/news-radcliffe-sky.png",
  headline: "Oxford Named Best University in the World.",
  body: "A record ninth consecutive year at the top of the global rankings"
}];
const STATS = [{
  label: "Students",
  value: "25,000+",
  description: "Across undergraduate and postgraduate levels"
}, {
  label: "Research Centers",
  value: "100+",
  description: "World-leading innovations hub"
}, {
  label: "Colleges",
  value: "39",
  description: "Each with its own tutors and community"
}, {
  label: "Nobel Laureates",
  value: "70+",
  description: "Across the sciences, medicine and literature"
}];
const FACILITIES = [{
  watermark: "Library",
  counter: "02",
  captionTitle: "Bodleian Libraries",
  captionBody: "One of the largest and oldest research libraries in Europe, offering access to millions of resources.",
  image: "../../assets/imagery/facility-bodleian.png"
}, {
  watermark: "Theatre",
  counter: "03",
  captionTitle: "Sheldonian Theatre",
  captionBody: "The ceremonial heart of the University, host to matriculation, degree days and public lectures.",
  image: "../../assets/imagery/event-sheldonian.png"
}];
const PROGRAMS = [{
  index: "01",
  title: "Undergraduate",
  description: "World-class bachelor's degrees with personalised tutorials and a rich academic environment across arts, sciences, and humanities."
}, {
  index: "02",
  title: "Graduate",
  description: "Advanced master's and doctoral studies guided by leading researchers, designed to shape future leaders and experts."
}, {
  index: "03",
  title: "Continuing Education",
  description: "Flexible learning for professionals and adults, offering online and in-person programs to support lifelong development."
}, {
  index: "04",
  title: "Short Courses",
  description: "Quick, focused learning across diverse topics — ideal for upskilling, exploring new interests, or experiencing Oxford in brief."
}];
const REASONS = [{
  index: "01",
  icon: "graduation-cap",
  title: "Top-Ranked Education",
  description: "Oxford consistently ranks among the world's top universities, recognised for its academic excellence across humanities, sciences, and social sciences."
}, {
  index: "02",
  icon: "landmark",
  title: "World-Class Faculty",
  description: "Students learn from world-renowned scholars and researchers at the forefront of their fields, including Nobel Laureates, policy advisors, and innovators."
}, {
  index: "03",
  icon: "book-open-text",
  title: "Unique Collegiate System",
  description: "At Oxford, you're not just part of a university, you belong to one of 39 colleges that provide personal academic support and close-knit communities.",
  raised: true
}, {
  index: "04",
  icon: "globe",
  title: "Global Network & Impact",
  description: "Oxford is home to students from over 160 countries and a vast international alumni network. Oxford's influence reaches across continents and industries."
}];
const EVENTS = [{
  image: "../../assets/imagery/event-sheldonian.png",
  title: "AI and the Future of Ethics",
  year: "2025",
  venue: "Sheldonian Theatre",
  ratio: "4/3"
}, {
  image: "../../assets/imagery/event-museum.png",
  title: "Oxford Science Festival",
  year: "2025",
  venue: "University Museum",
  ratio: "3/2"
}, {
  image: "../../assets/imagery/news-bodleian-gate.png",
  title: "Shakespeare in the Garden",
  year: "2025",
  venue: "Trinity Garden",
  ratio: "3/2"
}, {
  image: "../../assets/imagery/radcliffe-dome.png",
  title: "Undergraduate Open Day",
  year: "2025",
  venue: "On Campus (All Colleges)",
  ratio: "4/3"
}];
function HomeScreen({
  onNavigate
}) {
  const [hero, setHero] = React.useState(0);
  const [stat, setStat] = React.useState(0);
  const [fac, setFac] = React.useState(0);
  const h = HEROES[hero],
    fa = FACILITIES[fac];
  const visible = [STATS[stat % 4], STATS[(stat + 1) % 4]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 14px 0"
    }
  }, /*#__PURE__*/React.createElement(HeroSlide, _extends({}, h, {
    year: "2025",
    height: 430
  }), /*#__PURE__*/React.createElement(Carousel, {
    orientation: "vertical",
    count: HEROES.length,
    index: hero,
    onChange: setHero
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "58px 40px 10px",
      display: "grid",
      gridTemplateColumns: "170px 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      paddingTop: 76
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-strong)"
    }
  }, "2025"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "'S RECAP")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "About us"), /*#__PURE__*/React.createElement(SectionHeading, {
    trail: "impact in education, research, and innovation"
  }, "Our numbers reflect a tradition of excellence and forward-thinking"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "46px 40px 62px",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr 1.1fr",
      gap: 22,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1",
    style: {
      fontSize: 34
    }
  }, "Oxford at a Glance"), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 22
    },
    onClick: () => onNavigate("About")
  }, "Learn more")), visible.map(s => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: s.label
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "3",
      justifySelf: "end",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Carousel, {
    count: 4,
    index: stat,
    onChange: setStat
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px"
    }
  }, /*#__PURE__*/React.createElement(MediaShowcase, _extends({}, fa, {
    total: "08",
    eyebrow: "Our Facilities",
    cornerLabel: /*#__PURE__*/React.createElement(React.Fragment, null, "AVAILABLE", /*#__PURE__*/React.createElement("br", null), "FACILITY"),
    headline: "Exceptional Facilities Designed to Support Learning, Research, and Discovery",
    height: 460
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "14px 26px 0"
    }
  }, /*#__PURE__*/React.createElement(Carousel, {
    count: FACILITIES.length,
    index: fac,
    onChange: setFac
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "58px 40px 62px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "Our Programs"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1"
  }, "A World-Class Range of ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "Academic Programs"), " for Every Ambition and Passion")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 190,
      height: 112,
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/program-interior.png",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52
    }
  }, PROGRAMS.map((p, i) => /*#__PURE__*/React.createElement(ProgramRow, _extends({
    key: p.index
  }, p, {
    last: i === PROGRAMS.length - 1,
    onOpen: () => onNavigate("Admissions")
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)",
      borderRadius: "var(--radius-media)",
      padding: "46px 34px 40px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    style: {
      marginBottom: 12
    }
  }, "Why Choose us"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1",
    tone: "inverse",
    style: {
      maxWidth: 540
    }
  }, "A Legacy of Excellence, a Future of Possibility"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 330,
      marginTop: 56,
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-on-dark-muted)"
    }
  }, "From world-renowned academics to a one-of-a-kind collegiate experience, discover what sets Oxford apart\u2014and why it's the first choice for scholars, researchers, and leaders from around the globe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 18,
      marginTop: 52,
      alignItems: "start"
    }
  }, REASONS.map(r => /*#__PURE__*/React.createElement(FeatureCard, _extends({
    key: r.index
  }, r, {
    style: r.raised ? {
      transform: "translateY(-56px)"
    } : undefined
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 40px 70px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      textAlign: "center",
      marginBottom: 12
    }
  }, "Events"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1",
    align: "center",
    style: {
      maxWidth: 640,
      margin: "0 auto"
    }
  }, "Lectures, Conferences, Cultural Moments & More"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 22,
      marginTop: 56,
      alignItems: "start"
    }
  }, EVENTS.map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e, {
    style: {
      marginTop: i % 2 ? 46 : 0
    }
  }))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow,
  SectionHeading,
  NewsCard,
  Button
} = window.DS || {};
const NEWS = [{
  image: "../../assets/imagery/news-bodleian-gate.png",
  date: "10 Jun 2025",
  author: "Elizabeth Lincoln",
  title: "Oxford physicists set new world record for qubit operation accuracy",
  readTime: "9 min Read"
}, {
  image: "../../assets/imagery/news-graduation.png",
  date: "10 Jun 2025",
  author: "Elizabeth Lincoln",
  title: "Oxford tops national spinout rankings in 2025 report",
  readTime: "9 min Read"
}, {
  image: "../../assets/imagery/news-radcliffe-sky.png",
  date: "10 Jun 2025",
  author: "Elizabeth Lincoln",
  title: "Oxford named best university in the world for a record ninth consecutive year",
  readTime: "9 min Read"
}];
function NewsScreen({
  onOpenArticle
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "58px 40px 70px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      textAlign: "center",
      marginBottom: 12
    }
  }, "News"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1",
    align: "center"
  }, "Discover the Latest News in Oxford"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 26,
      marginTop: 56
    }
  }, NEWS.map(n => /*#__PURE__*/React.createElement(NewsCard, _extends({
    key: n.title
  }, n, {
    onRead: () => onOpenArticle && onOpenArticle(n)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 46
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-right"
  }, "View all news")));
}
function ArticleScreen({
  article,
  onBack
}) {
  if (!article) return null;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: "46px 40px 70px",
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-right",
    onClick: onBack,
    style: {
      marginBottom: 28
    }
  }, "Back to news"), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "News"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1"
  }, article.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      fontSize: "var(--fs-caption)",
      color: "var(--text-faint)",
      margin: "18px 0 26px"
    }
  }, /*#__PURE__*/React.createElement("span", null, article.date), /*#__PURE__*/React.createElement("span", null, article.author), /*#__PURE__*/React.createElement("span", null, article.readTime)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      aspectRatio: "16/9"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: article.image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: "var(--fs-body-l)",
      lineHeight: "var(--lh-body-l)",
      color: "var(--text-body)"
    }
  }, "Researchers across the University have reported a result that extends Oxford's long record of discovery. The work was carried out in collaboration with partners across four continents and will be published in full later this term."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: "var(--fs-body-l)",
      lineHeight: "var(--lh-body-l)",
      color: "var(--text-body)"
    }
  }, "Further detail was not present in the source material provided for this design system; this paragraph stands in for article body copy."));
}
Object.assign(window, {
  NewsScreen,
  ArticleScreen,
  NEWS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProgramsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow,
  SectionHeading,
  ProgramRow,
  StatCard,
  Button,
  MediaShowcase
} = window.DS || {};
const PROGRAMS = [{
  index: "01",
  title: "Undergraduate",
  description: "World-class bachelor's degrees with personalised tutorials and a rich academic environment across arts, sciences, and humanities."
}, {
  index: "02",
  title: "Graduate",
  description: "Advanced master's and doctoral studies guided by leading researchers, designed to shape future leaders and experts."
}, {
  index: "03",
  title: "Continuing Education",
  description: "Flexible learning for professionals and adults, offering online and in-person programs to support lifelong development."
}, {
  index: "04",
  title: "Short Courses",
  description: "Quick, focused learning across diverse topics — ideal for upskilling, exploring new interests, or experiencing Oxford in brief."
}];
function ProgramsScreen({
  onNavigate
}) {
  const [open, setOpen] = React.useState("01");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "58px 40px 40px",
      maxWidth: 700
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "Our Programs"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "h1"
  }, "A World-Class Range of ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "Academic Programs"), " for Every Ambition and Passion")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 40px 54px"
    }
  }, PROGRAMS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.index
  }, /*#__PURE__*/React.createElement(ProgramRow, _extends({}, p, {
    last: i === PROGRAMS.length - 1,
    onOpen: () => setOpen(open === p.index ? null : p.index)
  })), open === p.index && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "56px 1fr 1fr",
      gap: 24,
      padding: "0 0 30px"
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, "Applications for ", p.title.toLowerCase(), " study open in September. Entry requirements, fees and college choices differ by course."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNavigate("Admissions")
  }, "How to apply")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px 50px"
    }
  }, /*#__PURE__*/React.createElement(MediaShowcase, {
    image: "../../assets/imagery/facility-bodleian.png",
    eyebrow: "Our Facilities",
    counter: "02",
    total: "08",
    watermark: "Library",
    headline: "Exceptional Facilities Designed to Support Learning, Research, and Discovery",
    cornerLabel: /*#__PURE__*/React.createElement(React.Fragment, null, "AVAILABLE", /*#__PURE__*/React.createElement("br", null), "FACILITY"),
    captionTitle: "Bodleian Libraries",
    captionBody: "One of the largest and oldest research libraries in Europe, offering access to millions of resources.",
    height: 380
  })));
}
Object.assign(window, {
  ProgramsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgramsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  NavBar,
  Footer,
  GridLines
} = window.DS || {};
const DESIGN_WIDTH = 1180;
function Shell({
  active,
  onNavigate,
  children
}) {
  const [scale, setScale] = React.useState(1);
  const wrap = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      const w = wrap.current ? wrap.current.clientWidth : DESIGN_WIDTH;
      setScale(Math.min(1, w / DESIGN_WIDTH));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      background: "var(--surface-canvas)",
      minHeight: "100vh",
      padding: "26px 0 30px",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: DESIGN_WIDTH,
      margin: "0 auto",
      zoom: scale
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      borderRadius: "var(--radius-shell)",
      boxShadow: "var(--shadow-shell)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: active,
    onNavigate: onNavigate,
    onLogin: () => onNavigate("Login")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(GridLines, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px 14px"
    }
  }, /*#__PURE__*/React.createElement(Footer, null)))));
}
function Section({
  eyebrow,
  children,
  pad = "64px 40px",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: pad,
      ...style
    }
  }, children);
}
Object.assign(window, {
  Shell,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.ProgramRow = __ds_scope.ProgramRow;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GridLines = __ds_scope.GridLines;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PhoneInput = __ds_scope.PhoneInput;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.HeroSlide = __ds_scope.HeroSlide;

__ds_ns.MediaShowcase = __ds_scope.MediaShowcase;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NavItem = __ds_scope.NavItem;

})();
