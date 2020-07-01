(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{695:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},856:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o(695),a=o(0);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},i=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===d(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:o[e]=function(){return s[e]}}))},c=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",h={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> NodeFilter"};var u=function(e){e.options[l]&&(e.options[l]=h),a.a.util.defineReactive(e.options,l,h),e.options.computed=c.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},p=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"awaiteddom-spanspan-nodefilter"}},[o("a",{attrs:{href:"#awaiteddom-spanspan-nodefilter","aria-hidden":"true"}},[e._v("#")]),o("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),o("span",[e._v("/")]),e._v(" NodeFilter")]),o("div",{staticClass:"overview"},[e._v("A "),o("strong",[o("code",[e._v("NodeFilter")])]),e._v(" interface represents an object used to filter the nodes in a "),o("a",{attrs:{href:"/en-US/docs/Web/API/NodeIterator",title:"The NodeIterator interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order."}},[o("code",[e._v("NodeIterator")])]),e._v(" or "),o("a",{attrs:{href:"/en-US/docs/Web/API/TreeWalker",title:"The TreeWalker object represents the nodes of a document subtree and a position within them."}},[o("code",[e._v("TreeWalker")])]),e._v(". They don't know anything about the DOM or how to traverse nodes; they just know how to evaluate a single node against the provided filter.")]),o("h2",{attrs:{id:"methods"}},[o("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),o("h3",{attrs:{id:"acceptNode"}},[o("a",{attrs:{href:"#acceptNode","aria-hidden":"true"}},[e._v("#")]),e._v(".acceptNode"),o("em",[e._v("(...args)")]),o("div",{staticClass:"specs"},[o("i",[e._v("W3C")])])]),o("p",[e._v("Returns an "),o("code",[e._v("unsigned short")]),e._v(" that will be used to tell if a given "),o("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[o("code",[e._v("Node")])]),e._v(" must be accepted or not by the "),o("a",{attrs:{href:"/en-US/docs/Web/API/NodeIterator",title:"The NodeIterator interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order."}},[o("code",[e._v("NodeIterator")])]),e._v(" or "),o("a",{attrs:{href:"/en-US/docs/Web/API/TreeWalker",title:"The TreeWalker object represents the nodes of a document subtree and a position within them."}},[o("code",[e._v("TreeWalker")])]),e._v(" iteration algorithm. This method is expected to be written by the user of a "),o("code",[e._v("NodeFilter\n")]),e._v(". Possible return values are:")]),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[e._v('<table class="standard-table">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td class="header">Constant</td>\n\t\t\t<td class="header">Description</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>FILTER_ACCEPT</code></td>\n\t\t\t<td>Value returned by the <a href="/en-US/docs/Web/API/NodeFilter/acceptNode" title="The NodeFilter.acceptNode() method returns an unsigned short that will be used to tell if a given Node must be accepted or not by the NodeIterator or TreeWalker iteration algorithm. This method is expected to be written by the user of a NodeFilter. Possible return values are:"><code>NodeFilter.acceptNode()</code></a> method when a node should be accepted.</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>FILTER_REJECT</code></td>\n\t\t\t<td>Value to be returned by the <a href="/en-US/docs/Web/API/NodeFilter/acceptNode" title="The NodeFilter.acceptNode() method returns an unsigned short that will be used to tell if a given Node must be accepted or not by the NodeIterator or TreeWalker iteration algorithm. This method is expected to be written by the user of a NodeFilter. Possible return values are:"><code>NodeFilter.acceptNode()</code></a> method when a node should be rejected. For&nbsp;<a href="/en-US/docs/Web/API/TreeWalker" title="The TreeWalker object represents the nodes of a document subtree and a position within them."><code>TreeWalker</code></a>, child nodes are also rejected. For&nbsp;<a href="/en-US/docs/Web/API/NodeIterator" title="The NodeIterator interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order."><code>NodeIterator</code></a>, this flag is synonymous with FILTER_SKIP.</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>FILTER_SKIP</code></td>\n\t\t\t<td>Value to be returned by <a href="/en-US/docs/Web/API/NodeFilter/acceptNode" title="The NodeFilter.acceptNode() method returns an unsigned short that will be used to tell if a given Node must be accepted or not by the NodeIterator or TreeWalker iteration algorithm. This method is expected to be written by the user of a NodeFilter. Possible return values are:"><code>NodeFilter.acceptNode()</code></a> for nodes to be skipped by the <a href="/en-US/docs/Web/API/NodeIterator" title="The NodeIterator interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order."><code>NodeIterator</code></a> or <a href="/en-US/docs/Web/API/TreeWalker" title="The TreeWalker object represents the nodes of a document subtree and a position within them."><code>TreeWalker</code></a> object. The children of skipped nodes are still considered. This is treated as "skip this node but not its children".</td>\n\t\t</tr>\n\t</tbody>\n</table>')])]),o("h4",{attrs:{id:"arguments"}},[o("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Arguments")]),e._v(":")]),o("ul",[o("li",[e._v("none")])]),o("h4",{attrs:{id:"returns-promisevoid"}},[o("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),o("strong",[e._v("Returns")]),e._v(": "),o("code",{pre:!0},[e._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof i&&i(p),"function"==typeof u&&u(p);t.default=p.exports}}]);