(self.webpackChunklandingpage=self.webpackChunklandingpage||[]).push([[831],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5649:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=o(1256)},3060:function(e,n,o){"use strict";o.d(n,{Z:function(){return M}});var t=o(9439),r=o(4942),i=o(3366),a=o(7462),u=o(2791),c=o(8182),l=o(767),s=o(8529),v=o(2065),d=o(4036),f=o(7630),p=o(1046),m=o(3031),Z=o(4843),h=o(890),b=o(5159);function w(e){return(0,b.Z)("MuiLink",e)}var S=(0,o(208).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=o(184),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=(0,f.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState,t=(0,s.D)(n,"palette.".concat(function(e){return x[e]||e}(o.color)))||o.color;return(0,a.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,v.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===o.component&&(0,r.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(S.focusVisible),{outline:"auto"}))})),M=u.forwardRef((function(e,n){var o=(0,p.Z)({props:e,name:"MuiLink"}),r=o.className,s=o.color,v=void 0===s?"primary":s,f=o.component,h=void 0===f?"a":f,b=o.onBlur,S=o.onFocus,x=o.TypographyClasses,M=o.underline,R=void 0===M?"always":M,C=o.variant,z=void 0===C?"inherit":C,N=(0,i.Z)(o,y),P=(0,m.Z)(),F=P.isFocusVisibleRef,I=P.onBlur,V=P.onFocus,B=P.ref,q=u.useState(!1),A=(0,t.Z)(q,2),D=A[0],T=A[1],_=(0,Z.Z)(n,B),j=(0,a.Z)({},o,{color:v,component:h,focusVisible:D,underline:R,variant:z}),E=function(e){var n=e.classes,o=e.component,t=e.focusVisible,r=e.underline,i={root:["root","underline".concat((0,d.Z)(r)),"button"===o&&"button",t&&"focusVisible"]};return(0,l.Z)(i,w,n)}(j);return(0,g.jsx)(k,(0,a.Z)({className:(0,c.Z)(E.root,r),classes:x,color:v,component:h,onBlur:function(e){I(e),!1===F.current&&T(!1),b&&b(e)},onFocus:function(e){V(e),!0===F.current&&T(!0),S&&S(e)},ref:_,ownerState:j,variant:z},N))}))},703:function(e,n,o){"use strict";o.d(n,{Z:function(){return h}});var t=o(3366),r=o(7462),i=o(2791),a=o(8182),u=o(767),c=o(2065),l=o(7630),s=o(1046),v=o(5159);function d(e){return(0,v.Z)("MuiPaper",e)}(0,o(208).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=o(184),p=["className","component","elevation","square","variant"],m=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},Z=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n[o.variant],!o.square&&n.rounded,"elevation"===o.variant&&n["elevation".concat(o.elevation)]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,r.Z)({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow")},!o.square&&{borderRadius:n.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.divider)},"elevation"===o.variant&&(0,r.Z)({boxShadow:n.shadows[o.elevation]},"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",m(o.elevation)),", ").concat((0,c.Fq)("#fff",m(o.elevation)),")")}))})),h=i.forwardRef((function(e,n){var o=(0,s.Z)({props:e,name:"MuiPaper"}),i=o.className,c=o.component,l=void 0===c?"div":c,v=o.elevation,m=void 0===v?1:v,h=o.square,b=void 0!==h&&h,w=o.variant,S=void 0===w?"elevation":w,g=(0,t.Z)(o,p),y=(0,r.Z)({},o,{component:l,elevation:m,square:b,variant:S}),x=function(e){var n=e.square,o=e.elevation,t=e.variant,r=e.classes,i={root:["root",t,!n&&"rounded","elevation"===t&&"elevation".concat(o)]};return(0,u.Z)(i,d,r)}(y);return(0,f.jsx)(Z,(0,r.Z)({as:l,ownerState:y,className:(0,a.Z)(x.root,i),ref:n},g))}))},9259:function(e,n,o){"use strict";o.d(n,{Z:function(){return h}});var t=o(7462),r=o(3366),i=o(2791),a=o(8182),u=o(767),c=o(4036),l=o(1046),s=o(7630),v=o(5159);function d(e){return(0,v.Z)("MuiSvgIcon",e)}(0,o(208).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=o(184),p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],m=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,"inherit"!==o.color&&n["color".concat((0,c.Z)(o.color))],n["fontSize".concat((0,c.Z)(o.fontSize))]]}})((function(e){var n,o,t=e.theme,r=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter}),fontSize:{inherit:"inherit",small:t.typography.pxToRem(20),medium:t.typography.pxToRem(24),large:t.typography.pxToRem(35)}[r.fontSize],color:null!=(n=null==(o=t.palette[r.color])?void 0:o.main)?n:{action:t.palette.action.active,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}})),Z=i.forwardRef((function(e,n){var o=(0,l.Z)({props:e,name:"MuiSvgIcon"}),i=o.children,s=o.className,v=o.color,Z=void 0===v?"inherit":v,h=o.component,b=void 0===h?"svg":h,w=o.fontSize,S=void 0===w?"medium":w,g=o.htmlColor,y=o.inheritViewBox,x=void 0!==y&&y,k=o.titleAccess,M=o.viewBox,R=void 0===M?"0 0 24 24":M,C=(0,r.Z)(o,p),z=(0,t.Z)({},o,{color:Z,component:b,fontSize:S,inheritViewBox:x,viewBox:R}),N={};x||(N.viewBox=R);var P=function(e){var n=e.color,o=e.fontSize,t=e.classes,r={root:["root","inherit"!==n&&"color".concat((0,c.Z)(n)),"fontSize".concat((0,c.Z)(o))]};return(0,u.Z)(r,d,t)}(z);return(0,f.jsxs)(m,(0,t.Z)({as:b,className:(0,a.Z)(P.root,s),ownerState:z,focusable:"false",color:g,"aria-hidden":!k||void 0,role:k?"img":void 0,ref:n},N,C,{children:[i,k?(0,f.jsx)("title",{children:k}):null]}))}));Z.muiName="SvgIcon";var h=Z},4223:function(e,n,o){"use strict";o.d(n,{Z:function(){return u}});var t=o(7462),r=o(2791),i=o(9259),a=o(184);function u(e,n){var o=function(o,r){return(0,a.jsx)(i.Z,(0,t.Z)({"data-testid":"".concat(n,"Icon"),ref:r},o,{children:e}))};return o.muiName=i.Z.muiName,r.memo(r.forwardRef(o))}},1256:function(e,n,o){"use strict";o.r(n),o.d(n,{capitalize:function(){return t.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return i.Z},debounce:function(){return a},deprecatedPropType:function(){return u},isMuiElement:function(){return l},ownerDocument:function(){return v},ownerWindow:function(){return d},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return k.Z},unstable_useEnhancedEffect:function(){return m},unstable_useId:function(){return b},unsupportedProp:function(){return w},useControlled:function(){return S.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return x.Z}});var t=o(4036);var r=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return n.reduce((function(e,n){return null==n?e:function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];e.apply(this,t),n.apply(this,t)}}),(function(){}))},i=o(4223);var a=function(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function t(){for(var t=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var u=function(){e.apply(t,i)};clearTimeout(n),n=setTimeout(u,o)}return t.clear=function(){clearTimeout(n)},t};var u=function(e,n){return function(){return null}},c=o(2791);var l=function(e,n){return c.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function s(e){return e&&e.ownerDocument||document}var v=s;var d=function(e){return s(e).defaultView||window};o(7462);var f=function(e,n){return function(){return null}},p=o(2971).Z,m=o(5721).Z,Z=o(9439),h=0;var b=function(e){var n=c.useState(e),o=(0,Z.Z)(n,2),t=o[0],r=o[1],i=e||t;return c.useEffect((function(){null==t&&r("mui-".concat(h+=1))}),[t]),i};var w=function(e,n,o,t,r){return null},S=o(8744),g=o(6868),y=o(4843),x=o(3031),k=o(7125)},8744:function(e,n,o){"use strict";o.d(n,{Z:function(){return i}});var t=o(9439),r=o(2791);var i=function(e){var n=e.controlled,o=e.default,i=(e.name,e.state,r.useRef(void 0!==n).current),a=r.useState(o),u=(0,t.Z)(a,2),c=u[0],l=u[1];return[i?n:c,r.useCallback((function(e){i||l(e)}),[])]}}}]);
//# sourceMappingURL=831.2dcf096b.chunk.js.map