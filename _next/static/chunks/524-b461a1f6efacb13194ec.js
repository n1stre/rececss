(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{4184:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)t.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},6071:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var a=o(r(7294)),i=r(1689),s=r(2441),c=r(5749),l={};function u(e,n,r,t){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,r=(0,s.useRouter)(),o=r&&r.asPath||"/",f=a.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),r=t(n,2),a=r[0],s=r[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,x=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),_=y&&"object"===typeof y&&y.ref,g=(0,c.useIntersection)({rootMargin:"200px"}),j=t(g,2),k=j[0],w=j[1],C=a.default.useCallback((function(e){k(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,k]);(0,a.useEffect)((function(){var e=w&&n&&(0,i.isLocalURL)(d),t="undefined"!==typeof b?b:r&&r.locale,o=l[d+"%"+p+(t?"%"+t:"")];e&&!o&&u(r,d,p,{locale:t})}),[p,d,w,b,n,r]);var N={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=t.indexOf("#")<0),n[o?"replace":"push"](r,t,{shallow:a,locale:c,scroll:s}))}(e,r,d,p,h,m,x,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var M="undefined"!==typeof b?b:r&&r.locale,L=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,M,r&&r.locales,r&&r.domainLocales);N.href=L||(0,i.addBasePath)((0,i.addLocale)(p,M,r&&r.defaultLocale))}return a.default.cloneElement(y,N)};n.default=f},5749:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=t(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=s.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return s.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),a=r(8391),i="undefined"!==typeof IntersectionObserver;var s=new Map},8656:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(5893);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==s.return||s.return()}finally{if(o)throw a}}return r}}(e,n)||function(e,n){if(e){if("string"===typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r(7294),s=i.createContext();function c(e){var n=e.children,r=e.initialVariant,o=a(i.useState(r),2),c=o[0],l=o[1],u=i.useMemo((function(){return i.Children.map(n,(function(e){return e.props.name}))}),[n]),f=i.useMemo((function(){return{activeVariant:c,setActiveVariant:l}}),[c,l]);return(0,t.jsx)(s.Provider,{value:f,children:(0,t.jsxs)("div",{className:"pos_r",children:[(0,t.jsx)("nav",{className:"d_f",children:u.map((function(e){return(0,t.jsx)("button",{className:"bgc_white bd_lightgrey py_sm px_md cur_p bdtlrs_sm bdtrrs_sm bdb_n",style:{marginRight:"-1px",boxShadow:c===e?"0 1px 0 0 white":"none",opacity:c===e?"1":"0.3"},onClick:function(){return l(e)},children:e},e)}))}),n]})})}c.Variant=function(e){var n=e.children,r=e.name,o=(e.source,e.usage,(i.useContext(s)||{}).activeVariant===r?"d_b":"d_n");return(0,t.jsx)("div",{className:o,children:n})},c.Html=function(e){var n=e.children,r=e.label;return(0,t.jsxs)(t.Fragment,{children:[Boolean(r)&&(0,t.jsx)("h3",{children:r}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})},c.Render=function(e){var n=e.children;return(0,t.jsx)("div",{className:"bd_lightgrey bdrs_sm bdtlrs_0 p_xl mb_md",children:n})};var l=c},5869:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(5893),o=r(7817),a={Forms:{Button:"/components/forms/Button",TextInput:"/components/forms/TextInput",Textarea:"/components/forms/Textarea",Checkbox:"/components/forms/Checkbox",Radio:"/components/forms/Radio"}};function i(e){var n=e.children;return(0,t.jsx)(o.Z,{nav:a,children:n})}},7817:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var t=r(5893),o=r(4677),a=r(6155),i=r(2953),s=r(7294),c=r(1664);function l(e){var n=e.nav,r=void 0===n?{}:n;return(0,t.jsx)("aside",{className:"pos_f ovy_s t_4xl w_250 b_2xl pb_xl bdr_lightgrey",children:(0,t.jsx)("nav",{children:Object.keys(r).map((function(e){return"string"===typeof r[e]?(0,t.jsx)(f,{text:e,href:r[e]},e):(0,t.jsx)(u,{title:e,links:r[e]},e)}))})})}function u(e){var n=e.title,r=e.links;return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsx)("h3",{className:"mt_xl",children:n}),Object.keys(r).map((function(e){return(0,t.jsx)(f,{text:e,href:r[e]},e)}))]})}function f(e){var n=e.text,r=e.href;return(0,t.jsx)(c.default,{href:r,children:(0,t.jsx)("a",{className:"d_b mb_sm",children:n})})}function d(e){var n=e.children,r=e.nav;return(0,t.jsxs)("section",{className:"d_f fxd_c h_100vh",children:[(0,t.jsx)(o.Z,{}),(0,t.jsxs)(i.Z,{className:"d_f fx_1 pt_4xl pb_2xl",children:[(0,t.jsx)(l,{nav:r}),(0,t.jsx)("main",{className:"fx_1 ml_250",children:(0,t.jsx)("div",{className:"maw_720 m_0a px_lg pb_lg",children:n})})]}),(0,t.jsx)(a.Z,{})]})}},1664:function(e,n,r){e.exports=r(6071)}}]);