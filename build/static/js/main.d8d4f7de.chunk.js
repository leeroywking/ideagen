(window.webpackJsonpideagen=window.webpackJsonpideagen||[]).push([[0],{11:function(e,n,t){e.exports=t.p+"static/media/lightbulbYellow.6edb6d85.png"},17:function(e,n,t){e.exports=t(28)},22:function(e,n,t){},23:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),i=t.n(o),l=(t(22),t(11)),c=t.n(l),u=(t(23),["Web development","Cyber Security","Pashto","AWS","Cloud","Bicycle riding","Rally fighter","Motocross","Concrete","Army","Military","Sigint","Raspberry pi","Accessibility","Hiking","Edge computing","Comedy","Tiny living","Ultralight","Web development","Linux","The thing to your left","git"]);var s=function(){var e=Math.floor(Math.random()*u.length),n=u.splice(e,1),t=Math.floor(Math.random()*u.length),r=u.splice(t,1);return a.a.createElement("div",null,a.a.createElement("h1",null,n),a.a.createElement("br",null)," and",a.a.createElement("h1",null,r," "))},m=t(6),d=t(4),f=t(1),g=t(30),p=t(2);function h(){var e=Object(f.a)(["\n  width: 3rem;\n  height: 3rem;\n  background: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.25rem;\n  cursor: pointer;\n"]);return h=function(){return e},e}function b(){var e=Object(f.a)(["\n  width: 100%;\n  margin: 0;\n  background: black;\n  font-weight: normal;\n  font-size: 0.875rem;\n  line-height: 3.5;\n  color: white;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  text-align: center;\n"]);return b=function(){return e},e}function v(){var e=Object(f.a)(["\n  display: flex;\n  background: light-yellow;\n  font-size: 0.6875rem;\n  line-height: 1.2;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: white;\n  height: 3rem;\n"]);return v=function(){return e},e}function w(){var e=Object(f.a)(["\n  width: 50vw;\n  overflow:hidden;\n  background: black;\n  max-height: 80vh;\n  z-index: 999999;\n  overflow: hidden;\n"]);return w=function(){return e},e}function y(){var e=Object(f.a)(["\n  background: rgba(0, 0, 0, 0.84);\n  height: 100%;\n  width: 25%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow:hidden;\n"]);return y=function(){return e},e}var E=p.a.div(y()),O=p.a.div(w()),j=p.a.div(v()),k=p.a.h2(b()),x=p.a.div(h()),C=function(e){var n=e.showCloseIcon,t=e.onClose,r=e.title,o=e.children,l=e.className,c=n?a.a.createElement(x,{onClick:t},"X"):a.a.createElement(x,null),u=a.a.createElement(E,{className:l},a.a.createElement(O,null,a.a.createElement(j,null,c,a.a.createElement(k,null,r)),o));return i.a.createPortal(u,document.body)};C.defaultProps={onClose:null,showCloseIcon:!0};var P=C;function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(){var e=Object(f.a)(["\n  &.modal-transition-enter {\n    transform: translateX(-100%);\n  }\n  &.modal-transition-enter-active {\n    transition: transform ","ms;\n    transform: translateX(0);\n  }\n  &.modal-transition-exit {\n    transform: translateX(0);\n  }\n  &.modal-transition-exit-active {\n    transition: transform ","ms;\n    transform: translateX(-100%);\n  }\n"]);return S=function(){return e},e}var A=Object(p.a)(P)(S(),250,250),M=function(e){e.props;var n,t,o=Object(r.useState)({}),i=Object(d.a)(o,2);function l(e){console.log(e.target.name),console.log(e.target.value),t(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(t,!0).forEach((function(n){Object(m.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,Object(m.a)({},e.target.name,e.target.value)))}n=i[0],t=i[1];var c=function(e){var n=Object(r.useState)(e),t=Object(d.a)(n,2),a=t[0],o=t[1];return[a,Object(r.useCallback)((function(){return o((function(e){return!e}))}))]}(!1),u=Object(d.a)(c,2),s=u[0],f=u[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",className:"slidebutton",onClick:f},"Add >"),a.a.createElement(g.a,{in:s,className:"modal-transition",classNames:"modal-transition",unmountOnExit:!0,timeout:250},a.a.createElement(A,{title:"new idea?",open:s,onClose:f,onSave:f},a.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(n)}(e)}},a.a.createElement("input",{type:"text",name:"newPrompt",className:"textInput",onChange:function(e){return l(e)}}),a.a.createElement("br",null),a.a.createElement("button",{className:"sendit"},"submit ")))))};var D=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo",onClick:function(){window.location.reload()}}),a.a.createElement("div",{className:"titletext"},"Your suggestions for today are to think about this!!"),a.a.createElement("p",null,a.a.createElement(s,null),a.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.d8d4f7de.chunk.js.map