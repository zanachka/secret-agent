(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},930:function(e,t,r){"use strict";r.r(t);var i=r(1),a=r(695),n=r(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var o={VueRemarkRoot:a.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(o).forEach((function(e){"object"===s(o[e])&&"function"==typeof o[e].render?t[e]=o[e]:r[e]=function(){return o[e]}}))},c=n.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",p={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> HTMLSourceElement"};var u=function(e){e.options[l]&&(e.options[l]=p),n.a.util.defineReactive(e.options,l,p),e.options.computed=c.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},v=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-htmlsourceelement"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-htmlsourceelement","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" HTMLSourceElement")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("HTMLSourceElement")])]),e._v(" interface provides special properties (beyond the regular "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLElement",title:"The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it."}},[r("code",[e._v("HTMLElement")])]),e._v(" object interface it also has available to it by inheritance) for manipulating "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/source",title:"The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."}},[r("code",[e._v("<source>")])]),e._v(" elements.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"media"}},[r("a",{attrs:{href:"#media","aria-hidden":"true"}},[e._v("#")]),e._v(".media "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/source#attr-media"}},[e._v("media")])]),e._v(" HTML attribute, containing the intended type of the media resource.")]),r("h4",{attrs:{id:"type-null"}},[r("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"sizes"}},[r("a",{attrs:{href:"#sizes","aria-hidden":"true"}},[e._v("#")]),e._v(".sizes "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" representing image sizes between breakpoints")]),r("h4",{attrs:{id:"type-null-1"}},[r("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"src"}},[r("a",{attrs:{href:"#src","aria-hidden":"true"}},[e._v("#")]),e._v(".src "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/source#attr-src"}},[e._v("src")])]),e._v(" HTML attribute, containing the URL for the media resource. The "),r("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/HTMLSourceElement/src",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[r("code",[e._v("HTMLSourceElement.src")])]),e._v(" property has a meaning only when the associated "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/source",title:"The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."}},[r("code",[e._v("<source>")])]),e._v(" element is nested in a media element that is a "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/video",title:"The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."}},[r("code",[e._v("<video>")])]),e._v(" or an "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/audio",title:"The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."}},[r("code",[e._v("<audio>")])]),e._v(" element. It has no meaning and is ignored when it is nested in a "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/picture",title:"The HTML <picture> element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios."}},[r("code",[e._v("<picture>")])]),e._v(" element. ")]),r("div",{staticClass:"note"},[r("strong",[e._v("Note")]),e._v(": If the "),r("code",[e._v("src")]),e._v(" property is updated (along with any siblings), the parent "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLMediaElement",title:"The HTMLMediaElement interface adds to HTMLElement the properties and methods needed to support basic media-related capabilities that are common to audio and video."}},[r("code",[e._v("HTMLMediaElement")])]),e._v("'s "),r("code",[e._v("load")]),e._v(" method should be called when done, since "),r("code",[e._v("<source>")]),e._v(" elements are not re-scanned automatically.")]),r("h4",{attrs:{id:"type-null-2"}},[r("a",{attrs:{href:"#type-null-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"srcset"}},[r("a",{attrs:{href:"#srcset","aria-hidden":"true"}},[e._v("#")]),e._v(".srcset "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/source#attr-srcset"}},[e._v("srcset")])]),e._v(" HTML attribute, containing a list of candidate images, separated by a comma ("),r("code",[e._v("',', U+002C COMMA")]),e._v("). A candidate image is a URL followed by a "),r("code",[e._v("'w'")]),e._v(" with the width of the images, or an "),r("code",[e._v("'x'\n")]),e._v(" followed by the pixel density.")]),r("h4",{attrs:{id:"type-null-3"}},[r("a",{attrs:{href:"#type-null-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"type"}},[r("a",{attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(".type "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/source#attr-type"}},[e._v("type")])]),e._v(" HTML attribute, containing the type of the media resource.")]),r("h4",{attrs:{id:"type-null-4"}},[r("a",{attrs:{href:"#type-null-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])])])}),[],!1,null,null,null);"function"==typeof d&&d(v),"function"==typeof u&&u(v);t.default=v.exports}}]);