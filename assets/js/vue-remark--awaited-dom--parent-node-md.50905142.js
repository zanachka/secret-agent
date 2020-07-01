(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},848:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r(695),i=r(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var o={VueRemarkRoot:n.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(o).forEach((function(e){"object"===a(o[e])&&"function"==typeof o[e].render?t[e]=o[e]:r[e]=function(){return o[e]}}))},l=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",h={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> ParentNode"};var v=function(e){e.options[c]&&(e.options[c]=h),i.a.util.defineReactive(e.options,c,h),e.options.computed=l.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},m=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-parentnode"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-parentnode","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" ParentNode")]),r("div",{staticClass:"overview"},[r("span",{staticClass:"seoSummary"},[e._v("The "),r("code",[r("strong",[e._v("ParentNode")])]),e._v(" mixin contains methods and properties that are common to all types of "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" objects that can have children.")]),e._v(" It's implemented by "),r("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[r("code",[e._v("Element")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[r("code",[e._v("Document")])]),e._v(", and "),r("a",{attrs:{href:"/en-US/docs/Web/API/DocumentFragment",title:"The DocumentFragment interface represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document."}},[r("code",[e._v("DocumentFragment")])]),e._v(" objects.")]),r("div",{staticClass:"overview"},[e._v("See "),r("a",{attrs:{href:"/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors"}},[e._v("Locating DOM elements using selectors")]),e._v(" to learn how to use "),r("a",{attrs:{href:"/en-US/docs/Web/CSS/CSS_Selectors"}},[e._v("CSS selectors")]),e._v(" to find nodes or elements of interest.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"childElementCount"}},[r("a",{attrs:{href:"#childElementCount","aria-hidden":"true"}},[e._v("#")]),e._v(".childElementCount "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the number of children of this "),r("code",[e._v("ParentNode\n")]),e._v(" which are elements.")]),r("h4",{attrs:{id:"type-null"}},[r("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"children"}},[r("a",{attrs:{href:"#children","aria-hidden":"true"}},[e._v("#")]),e._v(".children "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a live "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLCollection",title:"The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list."}},[r("code",[e._v("HTMLCollection")])]),e._v(" containing all of the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[r("code",[e._v("Element")])]),e._v(" objects that are children of this "),r("code",[e._v("ParentNode\n")]),e._v(", omitting all of its non-element nodes.")]),r("h4",{attrs:{id:"type-null-1"}},[r("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"firstElementChild"}},[r("a",{attrs:{href:"#firstElementChild","aria-hidden":"true"}},[e._v("#")]),e._v(".firstElementChild "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the first node which is both a child of this "),r("code",[e._v("ParentNode")]),r("em",[e._v("and")]),e._v(" is also an "),r("code",[e._v("Element")]),e._v(", or "),r("code",[e._v("null\n")]),e._v(" if there is none.")]),r("h4",{attrs:{id:"type-null-2"}},[r("a",{attrs:{href:"#type-null-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"lastElementChild"}},[r("a",{attrs:{href:"#lastElementChild","aria-hidden":"true"}},[e._v("#")]),e._v(".lastElementChild "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the last node which is both a child of this "),r("code",[e._v("ParentNode")]),r("em",[e._v("and")]),e._v(" is an "),r("code",[e._v("Element")]),e._v(", or "),r("code",[e._v("null\n")]),e._v(" if there is none.")]),r("h4",{attrs:{id:"type-null-3"}},[r("a",{attrs:{href:"#type-null-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"append"}},[r("a",{attrs:{href:"#append","aria-hidden":"true"}},[e._v("#")]),e._v(".append"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Inserts a set of "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" objects or "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" objects after the last child of the "),r("code",[e._v("ParentNode")]),e._v(". "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" objects are inserted as equivalent "),r("a",{attrs:{href:"/en-US/docs/Web/API/Text",title:"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children."}},[r("code",[e._v("Text")])]),e._v(" nodes.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid"}},[r("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"prepend"}},[r("a",{attrs:{href:"#prepend","aria-hidden":"true"}},[e._v("#")]),e._v(".prepend"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Inserts a set of "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" objects or "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" objects before the first child of the "),r("code",[e._v("ParentNode")]),e._v(". "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" objects are inserted as equivalent "),r("a",{attrs:{href:"/en-US/docs/Web/API/Text",title:"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children."}},[r("code",[e._v("Text")])]),e._v(" nodes.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-1"}},[r("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"querySelector"}},[r("a",{attrs:{href:"#querySelector","aria-hidden":"true"}},[e._v("#")]),e._v(".querySelector"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the first "),r("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[r("code",[e._v("Element")])]),e._v(" with the current element as root that matches the specified group of selectors.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-2"}},[r("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"querySelectorAll"}},[r("a",{attrs:{href:"#querySelectorAll","aria-hidden":"true"}},[e._v("#")]),e._v(".querySelectorAll"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[r("code",[e._v("NodeList")])]),e._v(" representing a list of elements with the current element as root that matches the specified group of selectors.")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-3"}},[r("a",{attrs:{href:"#returns-promisevoid-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof d&&d(m),"function"==typeof v&&v(m);t.default=m.exports}}]);