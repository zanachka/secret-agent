(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{695:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},994:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a(695),n=a(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var s={VueRemarkRoot:i.a},d=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===o(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:a[e]=function(){return s[e]}}))},c=n.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> AudioTrack"};var p=function(e){e.options[u]&&(e.options[u]=l),n.a.util.defineReactive(e.options,u,l),e.options.computed=c.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},h=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"awaiteddom-spanspan-audiotrack"}},[a("a",{attrs:{href:"#awaiteddom-spanspan-audiotrack","aria-hidden":"true"}},[e._v("#")]),a("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),a("span",[e._v("/")]),e._v(" AudioTrack")]),a("div",{staticClass:"overview"},[a("span",{staticClass:"seoSummary"},[e._v("The "),a("strong",[a("code",[e._v("AudioTrack")])]),e._v(" interface represents a single audio track from one of the HTML media elements, "),a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/audio",title:"The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."}},[a("code",[e._v("<audio>")])]),e._v(" or "),a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/video",title:"The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."}},[a("code",[e._v("<video>")])]),e._v(". ")]),e._v("The most common use for accessing an "),a("code",[e._v("AudioTrack")]),e._v(" object is to toggle its "),a("a",{attrs:{href:"/en-US/docs/Web/API/AudioTrack/enabled",title:"The AudioTrack property enabled specifies whether or not the described audio track is currently enabled for use. If the track is disabled by setting enabled to false, the track is muted and does not produce audio."}},[a("code",[e._v("enabled")])]),e._v(" property in order to mute and unmute the track.")]),a("h2",{attrs:{id:"properties"}},[a("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),a("h3",{attrs:{id:"enabled"}},[a("a",{attrs:{href:"#enabled","aria-hidden":"true"}},[e._v("#")]),e._v(".enabled "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A Boolean value which controls whether or not the audio track's sound is enabled. Setting this value to "),a("code",[e._v("false\n")]),e._v(" mutes the track's audio.")]),a("h4",{attrs:{id:"type-null"}},[a("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h3",{attrs:{id:"id"}},[a("a",{attrs:{href:"#id","aria-hidden":"true"}},[e._v("#")]),e._v(".id "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" which uniquely identifies the track within the media. This ID can be used to locate a specific track within an audio track list by calling "),a("a",{attrs:{href:"/en-US/docs/Web/API/AudioTrackList/getTrackById",title:"The AudioTrackList method getTrackById() returns the first AudioTrack object from the track list whose id matches the specified string."}},[a("code",[e._v("AudioTrackList.getTrackById()")])]),e._v(". The ID can also be used as the fragment part of the URL if the media supports seeking by media fragment per the "),a("a",{staticClass:"external",attrs:{href:"https://www.w3.org/TR/media-frags/",rel:"noopener"}},[e._v("Media Fragments URI specification\n")]),e._v(".")]),a("h4",{attrs:{id:"type-null-1"}},[a("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h3",{attrs:{id:"kind"}},[a("a",{attrs:{href:"#kind","aria-hidden":"true"}},[e._v("#")]),e._v(".kind "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" specifying the category into which the track falls. For example, the main audio track would have a "),a("code",[e._v("kind")]),e._v(" of "),a("code",[e._v('"main"\n')]),e._v(".")]),a("h4",{attrs:{id:"type-null-2"}},[a("a",{attrs:{href:"#type-null-2","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h3",{attrs:{id:"label"}},[a("a",{attrs:{href:"#label","aria-hidden":"true"}},[e._v("#")]),e._v(".label "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" providing a human-readable label for the track. For example, an audio commentary track for a movie might have a "),a("code",[e._v("label")]),e._v(" of "),a("code",[e._v('"Commentary with director John Q. Public and actors John Doe and Jane Eod."\n')]),e._v(" This string is empty if no label is provided.")]),a("h4",{attrs:{id:"type-null-3"}},[a("a",{attrs:{href:"#type-null-3","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])]),a("h3",{attrs:{id:"language"}},[a("a",{attrs:{href:"#language","aria-hidden":"true"}},[e._v("#")]),e._v(".language "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" specifying the audio track's primary language, or an empty string if unknown. The language is specified as a BCP 47 ("),a("a",{staticClass:"external",attrs:{href:"https://tools.ietf.org/html/rfc5646",rel:"noopener"}},[e._v("RFC 5646")]),e._v(") language code, such as "),a("code",[e._v('"en-US"')]),e._v(" or "),a("code",[e._v('"pt-BR"\n')]),e._v(".")]),a("h4",{attrs:{id:"type-null-4"}},[a("a",{attrs:{href:"#type-null-4","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("null")])])])}),[],!1,null,null,null);"function"==typeof d&&d(h),"function"==typeof p&&p(h);t.default=h.exports}}]);