(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{695:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},833:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o(695),r=o(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:o[e]=function(){return i[e]}}))},d=r.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",m={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> SuperText"};var u=function(e){e.options[l]&&(e.options[l]=m),r.a.util.defineReactive(e.options,l,m),e.options.computed=d.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"awaiteddom-spanspan-supertext"}},[o("a",{attrs:{href:"#awaiteddom-spanspan-supertext","aria-hidden":"true"}},[e._v("#")]),o("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),o("span",[e._v("/")]),e._v(" SuperText")]),o("div",{staticClass:"overview"},[o("span",{staticClass:"seoSummary"},[e._v("The "),o("strong",[o("code",[e._v("Text")])]),e._v(" interface represents the textual content of "),o("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[o("code",[e._v("Element")])]),e._v(" or "),o("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[o("code",[e._v("Attr")])]),e._v(". ")])]),o("div",{staticClass:"overview"},[e._v("If an element has no markup within its content, it has a single child implementing "),o("code",[e._v("Text")]),e._v(" that contains the element's text. However, if the element contains markup, it is parsed into information items and "),o("code",[e._v("Text")]),e._v(" nodes that form its children.")]),o("div",{staticClass:"overview"},[e._v("New documents have a single "),o("code",[e._v("Text")]),e._v(" node for each block of text. Over time, more "),o("code",[e._v("Text")]),e._v(" nodes may be created as the document's content changes. The "),o("a",{attrs:{href:"/en-US/docs/Web/API/Node/normalize",title:'The Node.normalize() method puts the specified node and all of its sub-tree into a "normalized" form. In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.'}},[o("code",[e._v("Node.normalize()")])]),e._v(" method merges adjacent "),o("code",[e._v("Text")]),e._v(" objects back into a single node for each block of text.")]),o("h2",{attrs:{id:"dependencies"}},[o("a",{attrs:{href:"#dependencies","aria-hidden":"true"}},[e._v("#")]),e._v("Dependencies")]),o("p",[e._v("SuperText implements all the properties and methods of the following classes:")]),o("table",[o("thead",[o("tr",[o("th"),o("th")])]),o("tbody",[o("tr",[o("td",[o("a",{attrs:{href:"./cdata-section"}},[e._v("CDATASection")])]),o("td",[o("a",{attrs:{href:"./character-data"}},[e._v("CharacterData")])])]),o("tr",[o("td",[o("a",{attrs:{href:"./child-node"}},[e._v("ChildNode")])]),o("td",[o("a",{attrs:{href:"./event-target"}},[e._v("EventTarget")])])]),o("tr",[o("td",[o("a",{attrs:{href:"./node"}},[e._v("Node")])]),o("td",[o("a",{attrs:{href:"./non-document-type-child-node"}},[e._v("NonDocumentTypeChildNode")])])]),o("tr",[o("td",[o("a",{attrs:{href:"./slotable"}},[e._v("Slotable")])]),o("td",[o("a",{attrs:{href:"./text"}},[e._v("Text")])])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof u&&u(f);t.default=f.exports}}]);