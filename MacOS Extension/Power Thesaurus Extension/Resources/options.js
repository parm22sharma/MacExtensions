(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n(2),c=n.n(r),o=(n(63),n(78),n(20));function i(e,t,n,a,r,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function o(e){i(c,a,r,o,u,"next",e)}function u(e){i(c,a,r,o,u,"throw",e)}o(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m={synonyms:!0,antonyms:!0,definition:!1,darkMode:Object(o.a)()?"auto":"off",size:"standard",numberOfResults:5,preview:"icon",contextMenuSearch:"search"},p=Object(a.createContext)(null),h=function(e){var t=e.children,n=f(Object(a.useState)((function(){return s({},m)})),2),r=n[0],o=n[1];Object(a.useEffect)(u(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.storage.sync.get(m);case 2:if("boolean"!=typeof(t=e.sent).contextMenuSearch){e.next=8;break}return n=t.contextMenuSearch?"search":"disabled",t.contextMenuSearch=n,e.next=8,c.a.storage.sync.set({contextMenuSearch:n});case 8:o(t);case 9:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)((function(){var e=function(){var e=u(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.keys(t).map((function(e){return d({},e,t[e].newValue)})),e.next=3,c.a.storage.sync.get(m);case 3:a=e.sent,n.map((function(e){a=s({},a,{},e)})),o(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.storage.onChanged.addListener(e),function(){c.a.storage.onChanged.removeListener(e)}}),[]);var i=function(e){c.a.storage.sync.set(e)},l=Object(a.useCallback)((function(){return{options:r,update:i}}),[r]);return a.default.createElement(p.Provider,{value:l()},t)}},20:function(e,t,n){"use strict";t.a=function(){var e="(prefers-color-scheme: dark)";if(!window.matchMedia)return!1;var t=window.matchMedia(e),n=window.matchMedia("(-ms-high-contrast: active)");return t.media===e||"(-ms-high-contrast: active)"===n.media}},385:function(e,t,n){e.exports={container:"U3yftPcrBsDPaTF-gEmzJ",checkbox:"_1F280kN7tWHnR-323tY07f"}},386:function(e,t,n){e.exports={container:"V6yV2sP8xf0Yvuh61xqXL",radio:"_2ZuXbRJFhlm6QhDC6tVP0P"}},387:function(e,t,n){e.exports={"pt-options":"Jwe8Ggyk63l0bDNS6AwDN",ptOptions:"Jwe8Ggyk63l0bDNS6AwDN","pt-options__header":"_3CQAAlmuGE2ZFE1WNkGuex",ptOptionsHeader:"_3CQAAlmuGE2ZFE1WNkGuex","pt-options__logo":"_1w9B10TyLduDmh4c1fsUSk",ptOptionsLogo:"_1w9B10TyLduDmh4c1fsUSk","pt-options__content":"_3GDY6LFoCZhR2nNsEQUUuB",ptOptionsContent:"_3GDY6LFoCZhR2nNsEQUUuB","pt-options__inline-item":"_99nhjDYgLhTO94S0KWeK_",ptOptionsInlineItem:"_99nhjDYgLhTO94S0KWeK_","pt-options__title":"G1dpEk7qYMPQ0vVzXJzPA",ptOptionsTitle:"G1dpEk7qYMPQ0vVzXJzPA","pt-options__title--note":"_3m87fCalQk0jPjwQB580IH",ptOptionsTitleNote:"_3m87fCalQk0jPjwQB580IH","pt-options__card":"_21LKdmmKEPnIOsWjI0cX2k",ptOptionsCard:"_21LKdmmKEPnIOsWjI0cX2k","pt-options__card--inline":"_2kmMSLI7pWc_slhuTBg8aN",ptOptionsCardInline:"_2kmMSLI7pWc_slhuTBg8aN","pt-options__card--toggle":"_2p3_GBZKBhYf6i85GyQScD",ptOptionsCardToggle:"_2p3_GBZKBhYf6i85GyQScD","pt-options__label":"_2K7IWvYDxsQxedWDJgJKUt",ptOptionsLabel:"_2K7IWvYDxsQxedWDJgJKUt"}},395:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(48);n(385);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(){return c(Object(a.useState)(Math.random().toString(16).substr(8)),1)[0]};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=function(e){var t=e.children,n=u(e,["children"]),r=o();return a.default.createElement("label",{className:"U3yftPcrBsDPaTF-gEmzJ",htmlFor:r},a.default.createElement("input",i({className:"_1F280kN7tWHnR-323tY07f "+(n&&n.className||""),type:"checkbox",id:r},n)),t)};n(386);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=function(e){var t=e.children,n=d(e,["children"]),r=o();return a.default.createElement("label",{className:"V6yV2sP8xf0Yvuh61xqXL",htmlFor:r},a.default.createElement("input",s({className:"_2ZuXbRJFhlm6QhDC6tVP0P "+(n&&n.className||""),type:"radio",id:r},n)),t)},m=n(11),p=n(20);n(387);var h=document.createElement("div");document.body.appendChild(h),a.default.render(a.default.createElement(m.b,null,a.default.createElement((function(){var e=Object(a.useContext)(m.a),t=e.options,n=e.update;Object(r.a)();var c=Object(p.a)(),o=function(e){var t=e.target,a=t.name,r=t.value,c=t.type,o=t.checked;n(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},a,"checkbox"===c?o:isNaN(r)?r:parseInt(r,10)))},i=function(e){return["synonyms","antonyms","definition"].filter((function(t){return t!==e})).every((function(e){return!1===t[e]}))};return a.default.createElement(a.Fragment,null,a.default.createElement("div",{className:"Jwe8Ggyk63l0bDNS6AwDN"},a.default.createElement("div",{className:"_3GDY6LFoCZhR2nNsEQUUuB"},a.default.createElement("div",{className:"G1dpEk7qYMPQ0vVzXJzPA"},"show"),a.default.createElement("div",{className:"_21LKdmmKEPnIOsWjI0cX2k"},a.default.createElement(l,{name:"synonyms",checked:t.synonyms,onChange:o,disabled:i("synonyms")},"Synonyms"),a.default.createElement(l,{name:"antonyms",checked:t.antonyms,onChange:o,disabled:i("antonyms")},"Antonyms"),a.default.createElement(l,{name:"definition",checked:t.definition,onChange:o,disabled:i("definition")},"Definition")),a.default.createElement("div",{className:"G1dpEk7qYMPQ0vVzXJzPA"},"dark mode"),a.default.createElement("div",{className:"_21LKdmmKEPnIOsWjI0cX2k"},a.default.createElement(f,{name:"darkMode",value:"auto",checked:"auto"===t.darkMode,onChange:o,disabled:!c},"Auto",!c&&a.default.createElement("span",{className:"_2K7IWvYDxsQxedWDJgJKUt"},"  (not supported)")),a.default.createElement(f,{name:"darkMode",value:"on",checked:"on"===t.darkMode,onChange:o},"On"),a.default.createElement(f,{name:"darkMode",value:"off",checked:"off"===t.darkMode,onChange:o},"Off")),a.default.createElement("div",{className:"G1dpEk7qYMPQ0vVzXJzPA"},"size"),a.default.createElement("div",{className:"_21LKdmmKEPnIOsWjI0cX2k"},a.default.createElement(f,{name:"size",value:"small",checked:"small"===t.size,onChange:o},"Small"),a.default.createElement(f,{name:"size",value:"standard",checked:"standard"===t.size,onChange:o},"Standard"),a.default.createElement(f,{name:"size",value:"large",checked:"large"===t.size,onChange:o},"Large")),a.default.createElement("div",{className:"G1dpEk7qYMPQ0vVzXJzPA"},"number of synonyms / antonyms"),a.default.createElement("div",{className:"_21LKdmmKEPnIOsWjI0cX2k"},a.default.createElement(f,{name:"numberOfResults",value:"5",checked:5===t.numberOfResults,onChange:o},"5"),a.default.createElement(f,{name:"numberOfResults",value:"10",checked:10===t.numberOfResults,onChange:o},"10")),a.default.createElement("div",{className:"G1dpEk7qYMPQ0vVzXJzPA"},"pop-up"," ",a.default.createElement("span",{className:"_3m87fCalQk0jPjwQB580IH"},"(on word selection)")),a.default.createElement("div",{className:"_21LKdmmKEPnIOsWjI0cX2k"},a.default.createElement(f,{name:"preview",value:"icon",checked:"icon"===t.preview,onChange:o},"Icon"),a.default.createElement(f,{name:"preview",value:"preview",checked:"preview"===t.preview,onChange:o},"Preview"),a.default.createElement(f,{name:"preview",value:"disabled",checked:"disabled"===t.preview,onChange:o},"Disabled")),a.default.createElement("div",{className:"G1dpEk7qYMPQ0vVzXJzPA"},"Context Menu"," ",a.default.createElement("span",{className:"_3m87fCalQk0jPjwQB580IH"},"(Right Click)")),a.default.createElement("div",{className:"_21LKdmmKEPnIOsWjI0cX2k"},a.default.createElement(f,{name:"contextMenuSearch",value:"search",checked:"search"===t.contextMenuSearch,onChange:o},"Search"),a.default.createElement(f,{name:"contextMenuSearch",value:"popup",checked:"popup"===t.contextMenuSearch,onChange:o},"Open pop up"),a.default.createElement(f,{name:"contextMenuSearch",value:"disabled",checked:"disabled"===t.contextMenuSearch,onChange:o},"Disabled")))))}),null)),h)},48:function(e,t,n){"use strict";var a=n(0),r=n(11),c=n(20),o="(prefers-color-scheme: dark)";t.a=function(){var e=Object(a.useRef)(!1),t=Object(a.useContext)(r.a).options;Object(a.useEffect)((function(){if(Object(c.a)()){var t=window.matchMedia(o),n=window.matchMedia("(-ms-high-contrast: active)");t.media!==o&&"(-ms-high-contrast: active)"!==n.media||(e.current=t.matches||n.matches);var a=function(t){var n=t.matches;e.current=n};return t.addListener(a),n.addListener(a),function(){t.removeListener(a),n.removeListener(a)}}}),[]),Object(a.useEffect)((function(){var n=document.getElementsByTagName("body")[0];"auto"===t.darkMode?n.dataset.ptExtTheme=e.current?"dark":"light":"on"===t.darkMode?n.dataset.ptExtTheme="dark":"off"===t.darkMode&&(n.dataset.ptExtTheme="light"),n.dataset.ptExtSize=t.size}),[t.darkMode,t.size,e.current])}}},[[395,0,1,2]]]);