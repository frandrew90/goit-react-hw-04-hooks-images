(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),i=n(16),l=n(3),s=n(13),u=n(0),j={find:""},b=function(e){var t=e.onSubmit,n=Object(a.useState)(j),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(o.find),r({find:""})},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){r({find:e.target.value})},value:o.find})]})})},g=n(25),m=n.n(g),d="https://pixabay.com/api/",h="23295311-073afe862d674061f7939d2e4",f=function(e){var t=e.image,n=e.largeImg,a=e.onPictureOpen;return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:function(){a(n)},children:Object(u.jsx)("img",{src:t,alt:"#",className:"ImageGalleryItem-image"})})},O=function(e){var t=e.gallery,n=e.onPictureOpen;return Object(u.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(u.jsx)(f,{image:e.webformatURL,largeImg:e.largeImageURL,onPictureOpen:n},e.id)}))})},p=n(10),y=n(11),v=n(14),x=n(12),w=document.querySelector("#modal"),k=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={},e.onEsc=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:this.onBackdrop,children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:this.props.largeImage,alt:"#"})})}),w)}}]),n}(a.Component),I=k,S=function(e){var t=e.getPhoto;return Object(u.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})},L=n(26),N=n.n(L),C=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(u.jsx)(N.a,{type:"ThreeDots",color:"#00BFFF",height:70,width:100,timeout:3e3})}}]),n}(c.a.Component),F={find:"",gallery:[],page:1,total:0,largeImageURL:{},showModal:!1,isLoading:!1},E=function(){var e=Object(a.useState)(F),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){n.find&&(c((function(e){return Object(l.a)(Object(l.a)({},e),{},{gallery:[]})})),o())}),[n.find]);var o=function(){var e=n.find,t=n.page;c((function(e){return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0})})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return m.a.get("".concat(d,"?q=").concat(e,"&page=").concat(t,"&key=").concat(h,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))}(e,t).then((function(e){var n=e.hits,a=e.total;c((function(e){return Object(l.a)(Object(l.a)({},e),{},{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(n)),page:e.page+1,total:a})})),1!==t&&r(),0===a&&alert("There are no pictures")})).catch((function(e){return alert(e.message)})).finally((function(){return c((function(e){return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1})}))}))},r=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},j=function(){c((function(e){return Object(l.a)(Object(l.a)({},e),{},{showModal:!e.showModal})}))},g=n.gallery,f=n.showModal,p=n.largeImageURL,y=n.isLoading,v=n.total;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{onSubmit:function(e){c((function(t){return Object(l.a)(Object(l.a)({},t),{},{find:e,page:1})}))}}),0!==g.length&&Object(u.jsx)(O,{gallery:g,onPictureOpen:function(e){c((function(t){return Object(l.a)(Object(l.a)({},t),{},{largeImageURL:e})})),j()}}),f&&Object(u.jsx)(I,{onClose:j,largeImage:p}),y&&Object(u.jsx)(C,{}),Math.ceil(n.total/12)!==n.page-1&&0!==v&&Object(u.jsx)(S,{getPhoto:o})]})};n(70),n(71);r.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.d12fc3fb.chunk.js.map