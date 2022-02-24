"use strict";(self.webpackChunklandingpage=self.webpackChunklandingpage||[]).push([[701],{3701:function(e,n,t){t.d(n,{Z:function(){return ee}});var r=t(9439),i=t(4942),o=t(7462),u=t(3366),a=t(2791),c=t(8182),l=t(767),s=t(7630),p=t(1046),d=t(4843),f=t(6868),h=t(3031),v=t(3433),m=t(168),b=t(7326),Z=t(4578),g=t(5545);function y(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function x(e,n,t){return null!=t[n]?t[n]:e.props[n]}function E(e,n,t){var r=y(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var u in e)u in n?o.length&&(i[u]=o,o=[]):o.push(u);var a={};for(var c in n){if(i[c])for(r=0;r<i[c].length;r++){var l=i[c][r];a[i[c][r]]=t(l)}a[c]=t(c)}for(r=0;r<o.length;r++)a[o[r]]=t(o[r]);return a}(n,r);return Object.keys(i).forEach((function(o){var u=i[o];if((0,a.isValidElement)(u)){var c=o in n,l=o in r,s=n[o],p=(0,a.isValidElement)(s)&&!s.props.in;!l||c&&!p?l||!c||p?l&&c&&(0,a.isValidElement)(s)&&(i[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:s.props.in,exit:x(u,"exit",e),enter:x(u,"enter",e)})):i[o]=(0,a.cloneElement)(u,{in:!1}):i[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:!0,exit:x(u,"exit",e),enter:x(u,"enter",e)})}})),i}var R=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},M=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind((0,b.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,Z.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,y(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:x(e,"appear",t),enter:x(e,"enter",t),exit:x(e,"exit",t)})}))):E(e,i,o),firstRender:!1}},t.handleExited=function(e,n){var t=y(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,o.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,u.Z)(e,["component","childFactory"]),i=this.state.contextValue,o=R(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?a.createElement(g.Z.Provider,{value:i},o):a.createElement(g.Z.Provider,{value:i},a.createElement(n,r,o))},n}(a.Component);M.propTypes={},M.defaultProps={component:"div",childFactory:function(e){return e}};var T=M,k=t(2554),w=t(184);var C=function(e){var n=e.className,t=e.classes,i=e.pulsate,o=void 0!==i&&i,u=e.rippleX,l=e.rippleY,s=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=a.useState(!1),v=(0,r.Z)(h,2),m=v[0],b=v[1],Z=(0,c.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),g={width:s,height:s,top:-s/2+l,left:-s/2+u},y=(0,c.Z)(t.child,m&&t.childLeaving,o&&t.childPulsate);return p||m||b(!0),a.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,w.jsx)("span",{className:Z,style:g,children:(0,w.jsx)("span",{className:y})})},P=t(208);var V,S,L,D,F,j,B,N,I=(0,P.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),O=["center","classes","className"],z=(0,k.F4)(F||(F=V||(V=(0,m.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),K=(0,k.F4)(j||(j=S||(S=(0,m.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),X=(0,k.F4)(B||(B=L||(L=(0,m.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),U=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root",skipSx:!0})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),A=(0,s.ZP)(C,{name:"MuiTouchRipple",slot:"Ripple"})(N||(N=D||(D=(0,m.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),I.rippleVisible,z,550,(function(e){return e.theme.transitions.easing.easeInOut}),I.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),I.child,I.childLeaving,K,550,(function(e){return e.theme.transitions.easing.easeInOut}),I.childPulsate,X,(function(e){return e.theme.transitions.easing.easeInOut})),Y=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiTouchRipple"}),i=t.center,l=void 0!==i&&i,s=t.classes,d=void 0===s?{}:s,f=t.className,h=(0,u.Z)(t,O),m=a.useState([]),b=(0,r.Z)(m,2),Z=b[0],g=b[1],y=a.useRef(0),x=a.useRef(null);a.useEffect((function(){x.current&&(x.current(),x.current=null)}),[Z]);var E=a.useRef(!1),R=a.useRef(null),M=a.useRef(null),k=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);var C=a.useCallback((function(e){var n=e.pulsate,t=e.rippleX,r=e.rippleY,i=e.rippleSize,o=e.cb;g((function(e){return[].concat((0,v.Z)(e),[(0,w.jsx)(A,{classes:{ripple:(0,c.Z)(d.ripple,I.ripple),rippleVisible:(0,c.Z)(d.rippleVisible,I.rippleVisible),ripplePulsate:(0,c.Z)(d.ripplePulsate,I.ripplePulsate),child:(0,c.Z)(d.child,I.child),childLeaving:(0,c.Z)(d.childLeaving,I.childLeaving),childPulsate:(0,c.Z)(d.childPulsate,I.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:r,rippleSize:i},y.current)])})),y.current+=1,x.current=o}),[d]),P=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=n.pulsate,i=void 0!==r&&r,o=n.center,u=void 0===o?l||n.pulsate:o,a=n.fakeElement,c=void 0!==a&&a;if("mousedown"===e.type&&E.current)E.current=!1;else{"touchstart"===e.type&&(E.current=!0);var s,p,d,f=c?null:k.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(u||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var v=e.touches?e.touches[0]:e,m=v.clientX,b=v.clientY;s=Math.round(m-h.left),p=Math.round(b-h.top)}if(u)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(d+=1);else{var Z=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,g=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(Z,2)+Math.pow(g,2))}e.touches?null===M.current&&(M.current=function(){C({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})},R.current=setTimeout((function(){M.current&&(M.current(),M.current=null)}),80)):C({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})}}),[l,C]),V=a.useCallback((function(){P({},{pulsate:!0})}),[P]),S=a.useCallback((function(e,n){if(clearTimeout(R.current),"touchend"===e.type&&M.current)return M.current(),M.current=null,void(R.current=setTimeout((function(){S(e,n)})));M.current=null,g((function(e){return e.length>0?e.slice(1):e})),x.current=n}),[]);return a.useImperativeHandle(n,(function(){return{pulsate:V,start:P,stop:S}}),[V,P,S]),(0,w.jsx)(U,(0,o.Z)({className:(0,c.Z)(d.root,I.root,f),ref:k},h,{children:(0,w.jsx)(T,{component:null,exit:!0,children:Z})}))})),H=Y,W=t(5159);function q(e){return(0,W.Z)("MuiButtonBase",e)}var G,J=(0,P.Z)("MuiButtonBase",["root","disabled","focusVisible"]),Q=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","type"],$=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((G={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,i.Z)(G,"&.".concat(J.disabled),{pointerEvents:"none",cursor:"default"}),(0,i.Z)(G,"@media print",{colorAdjust:"exact"}),G)),_=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonBase"}),i=t.action,s=t.centerRipple,v=void 0!==s&&s,m=t.children,b=t.className,Z=t.component,g=void 0===Z?"button":Z,y=t.disabled,x=void 0!==y&&y,E=t.disableRipple,R=void 0!==E&&E,M=t.disableTouchRipple,T=void 0!==M&&M,k=t.focusRipple,C=void 0!==k&&k,P=t.LinkComponent,V=void 0===P?"a":P,S=t.onBlur,L=t.onClick,D=t.onContextMenu,F=t.onDragLeave,j=t.onFocus,B=t.onFocusVisible,N=t.onKeyDown,I=t.onKeyUp,O=t.onMouseDown,z=t.onMouseLeave,K=t.onMouseUp,X=t.onTouchEnd,U=t.onTouchMove,A=t.onTouchStart,Y=t.tabIndex,W=void 0===Y?0:Y,G=t.TouchRippleProps,J=t.type,_=(0,u.Z)(t,Q),ee=a.useRef(null),ne=a.useRef(null),te=(0,h.Z)(),re=te.isFocusVisibleRef,ie=te.onFocus,oe=te.onBlur,ue=te.ref,ae=a.useState(!1),ce=(0,r.Z)(ae,2),le=ce[0],se=ce[1];function pe(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T;return(0,f.Z)((function(r){return n&&n(r),!t&&ne.current&&ne.current[e](r),!0}))}x&&le&&se(!1),a.useImperativeHandle(i,(function(){return{focusVisible:function(){se(!0),ee.current.focus()}}}),[]),a.useEffect((function(){le&&C&&!R&&ne.current.pulsate()}),[R,C,le]);var de=pe("start",O),fe=pe("stop",D),he=pe("stop",F),ve=pe("stop",K),me=pe("stop",(function(e){le&&e.preventDefault(),z&&z(e)})),be=pe("start",A),Ze=pe("stop",X),ge=pe("stop",U),ye=pe("stop",(function(e){oe(e),!1===re.current&&se(!1),S&&S(e)}),!1),xe=(0,f.Z)((function(e){ee.current||(ee.current=e.currentTarget),ie(e),!0===re.current&&(se(!0),B&&B(e)),j&&j(e)})),Ee=function(){var e=ee.current;return g&&"button"!==g&&!("A"===e.tagName&&e.href)},Re=a.useRef(!1),Me=(0,f.Z)((function(e){C&&!Re.current&&le&&ne.current&&" "===e.key&&(Re.current=!0,ne.current.stop(e,(function(){ne.current.start(e)}))),e.target===e.currentTarget&&Ee()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&Ee()&&"Enter"===e.key&&!x&&(e.preventDefault(),L&&L(e))})),Te=(0,f.Z)((function(e){C&&" "===e.key&&ne.current&&le&&!e.defaultPrevented&&(Re.current=!1,ne.current.stop(e,(function(){ne.current.pulsate(e)}))),I&&I(e),L&&e.target===e.currentTarget&&Ee()&&" "===e.key&&!e.defaultPrevented&&L(e)})),ke=g;"button"===ke&&(_.href||_.to)&&(ke=V);var we={};"button"===ke?(we.type=void 0===J?"button":J,we.disabled=x):(_.href||_.to||(we.role="button"),x&&(we["aria-disabled"]=x));var Ce=(0,d.Z)(ue,ee),Pe=(0,d.Z)(n,Ce),Ve=a.useState(!1),Se=(0,r.Z)(Ve,2),Le=Se[0],De=Se[1];a.useEffect((function(){De(!0)}),[]);var Fe=Le&&!R&&!x;var je=(0,o.Z)({},t,{centerRipple:v,component:g,disabled:x,disableRipple:R,disableTouchRipple:T,focusRipple:C,tabIndex:W,focusVisible:le}),Be=function(e){var n=e.disabled,t=e.focusVisible,r=e.focusVisibleClassName,i=e.classes,o={root:["root",n&&"disabled",t&&"focusVisible"]},u=(0,l.Z)(o,q,i);return t&&r&&(u.root+=" ".concat(r)),u}(je);return(0,w.jsxs)($,(0,o.Z)({as:ke,className:(0,c.Z)(Be.root,b),ownerState:je,onBlur:ye,onClick:L,onContextMenu:fe,onFocus:xe,onKeyDown:Me,onKeyUp:Te,onMouseDown:de,onMouseLeave:me,onMouseUp:ve,onDragLeave:he,onTouchEnd:Ze,onTouchMove:ge,onTouchStart:be,ref:Pe,tabIndex:x?-1:W,type:J},we,_,{children:[m,Fe?(0,w.jsx)(H,(0,o.Z)({ref:ne,center:v},G)):null]}))})),ee=_},6868:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(2791),i=t(5721);var o=function(e){var n=r.useRef(e);return(0,i.Z)((function(){n.current=e})),r.useCallback((function(){return n.current.apply(void 0,arguments)}),[])}},4843:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(2791),i=t(2971);var o=function(e,n){return r.useMemo((function(){return null==e&&null==n?null:function(t){(0,i.Z)(e,t),(0,i.Z)(n,t)}}),[e,n])}},3031:function(e,n,t){t.d(n,{Z:function(){return d}});var r,i=t(2791),o=!0,u=!1,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function l(){o=!1}function s(){"hidden"===this.visibilityState&&u&&(o=!0)}function p(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return o||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!a[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var d=function(){var e=i.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",c,!0),n.addEventListener("mousedown",l,!0),n.addEventListener("pointerdown",l,!0),n.addEventListener("touchstart",l,!0),n.addEventListener("visibilitychange",s,!0))}),[]),n=i.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!p(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(u=!0,window.clearTimeout(r),r=window.setTimeout((function(){u=!1}),100),n.current=!1,!0)},ref:e}}},2971:function(e,n,t){function r(e,n){"function"===typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:function(){return r}})},5721:function(e,n,t){var r=t(2791),i="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;n.Z=i},5545:function(e,n,t){var r=t(2791);n.Z=r.createContext(null)},4578:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9611);function i(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,(0,r.Z)(e,n)}}}]);
//# sourceMappingURL=701.708be74b.chunk.js.map