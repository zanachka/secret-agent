(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{695:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},803:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(695),s=a(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var o={VueRemarkRoot:n.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(o).forEach((function(e){"object"===i(o[e])&&"function"==typeof o[e].render?t[e]=o[e]:a[e]=function(){return o[e]}}))},d=s.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",h={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> TextTrackList"};var l=function(e){e.options[v]&&(e.options[v]=h),s.a.util.defineReactive(e.options,v,h),e.options.computed=d.computed({$frontmatter:function(){return e.options[v]}},e.options.computed)},u=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"awaiteddom-spanspan-texttracklist"}},[a("a",{attrs:{href:"#awaiteddom-spanspan-texttracklist","aria-hidden":"true"}},[e._v("#")]),a("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),a("span",[e._v("/")]),e._v(" TextTrackList")]),a("div",{staticClass:"overview"},[a("span",{staticClass:"seoSummary"},[e._v("The "),a("strong",[a("code",[e._v("TextTrackList")])]),e._v(" interface is used to represent a list of the text tracks defined by the "),a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/track",title:"The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."}},[a("code",[e._v("<track>")])]),e._v(" element, with each track represented by a separate "),a("a",{attrs:{href:"/en-US/docs/Web/API/TextTrack",title:"This interface also inherits properties from EventTarget."}},[a("code",[e._v("textTrack")])]),e._v(" object in the list.")])]),a("div",{staticClass:"overview"},[e._v("Retrieve an instance of this object with "),a("a",{attrs:{href:"/en-US/docs/Web/API/HTMLMediaElement/textTracks",title:"The read-only textTracks property on HTMLMediaElement objects returns a TextTrackList object listing all of the TextTrack objects representing the media element's text tracks"}},[a("code",[e._v("HTMLMediaElement.textTracks")])]),e._v(". The individual tracks can be accessed using array syntax or functions such as "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",title:"The forEach() method executes a provided function once for each array element."}},[a("code",[e._v("forEach()")])]),e._v(" for example.")]),a("h2",{attrs:{id:"properties"}},[a("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),a("h3",{attrs:{id:"length"}},[a("a",{attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("The number of tracks in the list.")]),a("h4",{attrs:{id:"type-null"}},[a("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h3",{attrs:{id:"onaddtrack"}},[a("a",{attrs:{href:"#onaddtrack","aria-hidden":"true"}},[e._v("#")]),e._v(".onaddtrack "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("An event handler to be called when the "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/Events/addtrack",title:"/en-US/docs/Web/Events/addtrack"}},[e._v("addtrack")])]),e._v(" event is fired, indicating that a new text track has been added to the media element.")]),a("h4",{attrs:{id:"type-null-1"}},[a("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h3",{attrs:{id:"onchange"}},[a("a",{attrs:{href:"#onchange","aria-hidden":"true"}},[e._v("#")]),e._v(".onchange "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("An event handler to be called when the "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/Events/change",title:"/en-US/docs/Web/Events/change"}},[e._v("change")])]),e._v(" event occurs.")]),a("h4",{attrs:{id:"type-null-2"}},[a("a",{attrs:{href:"#type-null-2","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h3",{attrs:{id:"onremovetrack"}},[a("a",{attrs:{href:"#onremovetrack","aria-hidden":"true"}},[e._v("#")]),e._v(".onremovetrack "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("An event handler to call when the "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/Events/removetrack",title:"/en-US/docs/Web/Events/removetrack"}},[e._v("removetrack")])]),e._v(" event is sent, indicating that a text track has been removed from the media element.")]),a("h4",{attrs:{id:"type-null-3"}},[a("a",{attrs:{href:"#type-null-3","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h2",{attrs:{id:"methods"}},[a("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),a("h3",{attrs:{id:"getTrackById"}},[a("a",{attrs:{href:"#getTrackById","aria-hidden":"true"}},[e._v("#")]),e._v(".getTrackById"),a("em",[e._v("(...args)")]),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Returns the "),a("a",{attrs:{href:"/en-US/docs/Web/API/TextTrack",title:"This interface also inherits properties from EventTarget."}},[a("code",[e._v("TextTrack")])]),e._v(" found within the "),a("code",[e._v("TextTrackList")]),e._v(" whose "),a("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/TextTrack/id",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[a("code",[e._v("id")])]),e._v(" matches the specified string. If no match is found, "),a("code",[e._v("null\n")]),e._v(" is returned.")]),a("h4",{attrs:{id:"arguments"}},[a("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("none")])]),a("h4",{attrs:{id:"returns-promisevoid"}},[a("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof l&&l(u);t.default=u.exports}}]);