(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{2779:function(n,r){var e;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var n=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var s=typeof e;if("string"===s||"number"===s)n.push(e);else if(Array.isArray(e)){if(e.length){var a=i.apply(null,e);a&&n.push(a)}}else if("object"===s)if(e.toString===Object.prototype.toString)for(var c in e)t.call(e,c)&&e[c]&&n.push(c);else n.push(e.toString())}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(e=function(){return i}.apply(r,[]))||(n.exports=e)}()},6680:function(n,r,e){"use strict";e.d(r,{Z:function(){return o}});var t=e(2322);function i(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}function s(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,i=!1,s=void 0;try{for(var a,c=n[Symbol.iterator]();!(t=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);t=!0);}catch(l){i=!0,s=l}finally{try{t||null==c.return||c.return()}finally{if(i)throw s}}return e}}(n,r)||function(n,r){if(n){if("string"===typeof n)return i(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,r):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=e(2784),c=a.createContext();function l(n){var r=n.children,e=n.initialVariant,i=s(a.useState(e),2),l=i[0],o=i[1],u=a.useMemo((function(){return a.Children.map(r,(function(n){return n.props.name}))}),[r]),d=a.useMemo((function(){return{activeVariant:l,setActiveVariant:o}}),[l,o]);return(0,t.jsx)(c.Provider,{value:d,children:(0,t.jsxs)("div",{className:"pos_r",children:[(0,t.jsx)("nav",{className:"d_f",children:u.map((function(n){return(0,t.jsx)("button",{className:"bgc_white bd_lightgrey py_sm px_md cur_p bdtlrs_sm bdtrrs_sm bdb_n",style:{marginRight:"-1px",boxShadow:l===n?"0 1px 0 0 white":"none",opacity:l===n?"1":"0.3"},onClick:function(){return o(n)},children:n},n)}))}),r]})})}l.Variant=function(n){var r=n.children,e=n.name,i=(n.source,n.usage,(a.useContext(c)||{}).activeVariant===e?"d_b":"d_n");return(0,t.jsx)("div",{className:i,children:r})},l.Html=function(n){var r=n.children,e=n.label;return(0,t.jsxs)(t.Fragment,{children:[Boolean(e)&&(0,t.jsx)("h3",{children:e}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})},l.Render=function(n){var r=n.children;return(0,t.jsx)("div",{className:"bd_lightgrey bdrs_sm bdtlrs_0 p_xl mb_md",children:r})};var o=l},5765:function(n,r,e){"use strict";e.d(r,{Z:function(){return a}});var t=e(2322),i=e(5908),s={Forms:{Button:"/components/forms/Button",TextInput:"/components/forms/TextInput",Textarea:"/components/forms/Textarea",Checkbox:"/components/forms/Checkbox",Radio:"/components/forms/Radio"}};function a(n){var r=n.children;return(0,t.jsx)(i.Z,{nav:s,children:r})}},5908:function(n,r,e){"use strict";e.d(r,{Z:function(){return m}});var t=e(2322),i=e(9107),s=e(5811),a=e(9877),c=e(2784),l=e(9097);function o(n){var r=n.nav,e=void 0===r?{}:r;return(0,t.jsx)("aside",{className:"pos_f ovy_s t_4xl w_250 b_2xl pb_xl bdr_lightgrey",children:(0,t.jsx)("nav",{children:Object.keys(e).map((function(n){return"string"===typeof e[n]?(0,t.jsx)(d,{text:n,href:e[n]},n):(0,t.jsx)(u,{title:n,links:e[n]},n)}))})})}function u(n){var r=n.title,e=n.links;return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsx)("h3",{className:"mt_xl",children:r}),Object.keys(e).map((function(n){return(0,t.jsx)(d,{text:n,href:e[n]},n)}))]})}function d(n){var r=n.text,e=n.href;return(0,t.jsx)(l.default,{href:e,children:(0,t.jsx)("a",{className:"d_b mb_sm",children:r})})}function m(n){var r=n.children,e=n.nav;return(0,t.jsxs)("section",{className:"d_f fxd_c h_100vh",children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)(a.Z,{className:"d_f fx_1 pt_4xl pb_2xl",children:[(0,t.jsx)(o,{nav:e}),(0,t.jsx)("main",{className:"fx_1 ml_250",children:(0,t.jsx)("div",{className:"maw_720 m_0a px_lg pb_lg",children:r})})]}),(0,t.jsx)(s.Z,{})]})}},9864:function(n,r,e){"use strict";e.r(r),e.d(r,{__N_SSG:function(){return u},default:function(){return d}});var t=e(2322),i=e(5765),s=e(6680),a=e(2779),c=e.n(a);function l(n){var r=n.children,e=n.size,i=n.className,s=n.onClick,a=c()({"cur_p bd_n bgc_black:h c_white:h":!0,"px_lg py_sm bdrs_xs":"sm"===e,"px_xl py_md bdrs_sm fz_md":"md"===e,"px_xl py_md bdrs_sm fz_lg":"lg"===e},i);return(0,t.jsx)("button",{className:a,onClick:s,children:r})}function o(){return(0,t.jsxs)("div",{className:"d_f ai_c",children:[(0,t.jsx)(l,{size:"lg",className:"mr_md",children:"Large"}),(0,t.jsx)(l,{size:"md",className:"mr_md",children:"Medium"}),(0,t.jsx)(l,{size:"sm",className:"mr_md",children:"Small"})]})}var u=!0;function d(n){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h2",{children:"Button"}),(0,t.jsx)("p",{children:"Simple button component"}),(0,t.jsxs)(s.Z,{initialVariant:"react",children:[(0,t.jsxs)(s.Z.Variant,{name:"react",children:[(0,t.jsx)(s.Z.Render,{children:(0,t.jsx)(o,{})}),(0,t.jsx)(s.Z.Html,{label:"Usage",children:n.code.react.usageHighlighted}),(0,t.jsx)(s.Z.Html,{label:"Source",children:n.code.react.sourceHighlighted})]}),(0,t.jsxs)(s.Z.Variant,{name:"html",children:[(0,t.jsx)(s.Z.Render,{children:(0,t.jsx)(s.Z.Html,{children:n.code.html.source})}),(0,t.jsx)(s.Z.Html,{label:"Source",children:n.code.html.sourceHighlighted})]})]})]})}},316:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/forms/Button",function(){return e(9864)}])}},function(n){n.O(0,[701,774,888,179],(function(){return r=316,n(n.s=r);var r}));var r=n.O();_N_E=r}]);