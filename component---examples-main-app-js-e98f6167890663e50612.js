(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/KAi":function(t,e,n){var i=n("XKFU"),r=n("dyZX").isFinite;i(i.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},HsME:function(t,e,n){"use strict";n.r(e);n("91GP"),n("f3/d");var i,r,o=n("q1tI"),s=n.n(o),a=n("i8i4"),h=(n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn"),n("QFtD")),u=n.n(h),c={mousedown:1,mousemove:2,mouseup:4};i=u.a.PointerEventInput,r=i.prototype.handler,i.prototype.handler=function(t){var e=this.store;t.button>0&&(function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return!0;return!1}(e,(function(e){return e.pointerId===t.pointerId}))||e.push(t)),r.call(this,t)},u.a.MouseInput.prototype.handler=function(t){var e=c[t.type];1&e&&t.button>=0&&(this.pressed=!0),2&e&&0===t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))};var l=u.a.Manager,p=u.a,v=p?[[p.Rotate,{enable:!1}],[p.Pinch,{enable:!1}],[p.Swipe,{enable:!1}],[p.Pan,{threshold:0,enable:!1}],[p.Press,{enable:!1}],[p.Tap,{event:"doubletap",taps:2,enable:!1}],[p.Tap,{event:"anytap",enable:!1}],[p.Tap,{enable:!1}]]:null,d={rotate:["pinch"],pan:["press","doubletap","anytap","tap"],doubletap:["anytap"],anytap:["tap"]},f={doubletap:["tap"]},m={pointerdown:"pointerdown",pointermove:"pointermove",pointerup:"pointerup",touchstart:"pointerdown",touchmove:"pointermove",touchend:"pointerup",mousedown:"pointerdown",mousemove:"pointermove",mouseup:"pointerup"},g=["keydown","keyup"],y=["mousedown","mousemove","mouseup","mouseover","mouseout","mouseleave"],E=["wheel","mousewheel","DOMMouseScroll"],b={tap:"tap",anytap:"anytap",doubletap:"doubletap",press:"press",pinch:"pinch",pinchin:"pinch",pinchout:"pinch",pinchstart:"pinch",pinchmove:"pinch",pinchend:"pinch",pinchcancel:"pinch",rotate:"rotate",rotatestart:"rotate",rotatemove:"rotate",rotateend:"rotate",rotatecancel:"rotate",pan:"pan",panstart:"pan",panmove:"pan",panup:"pan",pandown:"pan",panleft:"pan",panright:"pan",panend:"pan",pancancel:"pan",swipe:"swipe",swipeleft:"swipe",swiperight:"swipe",swipeup:"swipe",swipedown:"swipe"},T={click:"tap",anyclick:"anytap",dblclick:"doubletap",mousedown:"pointerdown",mousemove:"pointermove",mouseup:"pointerup",mouseover:"pointerover",mouseout:"pointerout",mouseleave:"pointerleave"},_=n("Zs1x"),w=-1!==_.b.indexOf("firefox"),I=E,x=function(){function t(t,e,n){var i=this;void 0===n&&(n={}),this.element=t,this.callback=e,this.options=Object.assign({enable:!0},n),this.events=I.concat(n.events||[]),this.handleEvent=this.handleEvent.bind(this),this.events.forEach((function(e){return t.addEventListener(e,i.handleEvent,!!_.a&&{passive:!1})}))}var e=t.prototype;return e.destroy=function(){var t=this;this.events.forEach((function(e){return t.element.removeEventListener(e,t.handleEvent)}))},e.enableEventType=function(t,e){"wheel"===t&&(this.options.enable=e)},e.handleEvent=function(t){if(this.options.enable){var e=t.deltaY;_.c.WheelEvent&&(w&&t.deltaMode===_.c.WheelEvent.DOM_DELTA_PIXEL&&(e/=_.c.devicePixelRatio),t.deltaMode===_.c.WheelEvent.DOM_DELTA_LINE&&(e*=40));var n={x:t.clientX,y:t.clientY};0!==e&&e%4.000244140625==0&&(e=Math.floor(e/4.000244140625)),t.shiftKey&&e&&(e*=.25),this._onWheel(t,-e,n)}},e._onWheel=function(t,e,n){this.callback({type:"wheel",center:n,delta:e,srcEvent:t,pointerType:"mouse",target:t.target})},t}(),k=y,O=function(){function t(t,e,n){var i=this;void 0===n&&(n={}),this.element=t,this.callback=e,this.pressed=!1,this.options=Object.assign({enable:!0},n),this.enableMoveEvent=this.options.enable,this.enableLeaveEvent=this.options.enable,this.enableOutEvent=this.options.enable,this.enableOverEvent=this.options.enable,this.events=k.concat(n.events||[]),this.handleEvent=this.handleEvent.bind(this),this.events.forEach((function(e){return t.addEventListener(e,i.handleEvent)}))}var e=t.prototype;return e.destroy=function(){var t=this;this.events.forEach((function(e){return t.element.removeEventListener(e,t.handleEvent)}))},e.enableEventType=function(t,e){"pointermove"===t&&(this.enableMoveEvent=e),"pointerover"===t&&(this.enableOverEvent=e),"pointerout"===t&&(this.enableOutEvent=e),"pointerleave"===t&&(this.enableLeaveEvent=e)},e.handleEvent=function(t){this.handleOverEvent(t),this.handleOutEvent(t),this.handleLeaveEvent(t),this.handleMoveEvent(t)},e.handleOverEvent=function(t){this.enableOverEvent&&"mouseover"===t.type&&this.callback({type:"pointerover",srcEvent:t,pointerType:"mouse",target:t.target})},e.handleOutEvent=function(t){this.enableOutEvent&&"mouseout"===t.type&&this.callback({type:"pointerout",srcEvent:t,pointerType:"mouse",target:t.target})},e.handleLeaveEvent=function(t){this.enableLeaveEvent&&"mouseleave"===t.type&&this.callback({type:"pointerleave",srcEvent:t,pointerType:"mouse",target:t.target})},e.handleMoveEvent=function(t){if(this.enableMoveEvent)switch(t.type){case"mousedown":t.button>=0&&(this.pressed=!0);break;case"mousemove":0===t.which&&(this.pressed=!1),this.pressed||this.callback({type:"pointermove",srcEvent:t,pointerType:"mouse",target:t.target});break;case"mouseup":this.pressed=!1}},t}(),A=g,M=function(){function t(t,e,n){var i=this;void 0===n&&(n={}),this.element=t,this.callback=e,this.options=Object.assign({enable:!0},n),this.enableDownEvent=this.options.enable,this.enableUpEvent=this.options.enable,this.events=A.concat(n.events||[]),this.handleEvent=this.handleEvent.bind(this),t.tabIndex=1,t.style.outline="none",this.events.forEach((function(e){return t.addEventListener(e,i.handleEvent)}))}var e=t.prototype;return e.destroy=function(){var t=this;this.events.forEach((function(e){return t.element.removeEventListener(e,t.handleEvent)}))},e.enableEventType=function(t,e){"keydown"===t&&(this.enableDownEvent=e),"keyup"===t&&(this.enableUpEvent=e)},e.handleEvent=function(t){var e=t.target||t.srcElement;"INPUT"===e.tagName&&"text"===e.type||"TEXTAREA"===e.tagName||(this.enableDownEvent&&"keydown"===t.type&&this.callback({type:"keydown",srcEvent:t,key:t.key,target:t.target}),this.enableUpEvent&&"keyup"===t.type&&this.callback({type:"keyup",srcEvent:t,key:t.key,target:t.target}))},t}(),L=function(){function t(t,e,n){void 0===n&&(n={}),this.element=t,this.callback=e,this.options=Object.assign({enable:!0},n),this.handleEvent=this.handleEvent.bind(this),t.addEventListener("contextmenu",this.handleEvent)}var e=t.prototype;return e.destroy=function(){this.element.removeEventListener("contextmenu",this.handleEvent)},e.enableEventType=function(t,e){"contextmenu"===t&&(this.options.enable=e)},e.handleEvent=function(t){this.options.enable&&this.callback({type:"contextmenu",center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:"mouse",target:t.target})},t}(),C=(n("xfY5"),n("/KAi"),{pointerdown:1,pointermove:2,pointerup:4,mousedown:1,mousemove:2,mouseup:4});var P={srcElement:"root",priority:0},z=function(){function t(t){this.eventManager=t,this.handlers=[],this.handlersByElement=new Map,this.handleEvent=this.handleEvent.bind(this)}var e=t.prototype;return e.isEmpty=function(){return 0===this.handlers.length},e.add=function(t,e,n,i){void 0===i&&(i=!1);var r=this.handlers,o=this.handlersByElement;n&&("object"!=typeof n||n.addEventListener)&&(n={srcElement:n}),n=n?Object.assign({},P,n):P;var s=o.get(n.srcElement);s||(s=[],o.set(n.srcElement,s));var a={type:t,handler:e,srcElement:n.srcElement,priority:n.priority,once:i};r.push(a);for(var h=s.length-1;h>=0&&!(s[h].priority>=a.priority);)h--;s.splice(h+1,0,a)},e.remove=function(t,e){for(var n=this.handlers,i=this.handlersByElement,r=n.length-1;r>=0;r--){var o=n[r];if(o.type===t&&o.handler===e){n.splice(r,1);var s=i.get(o.srcElement);s.splice(s.indexOf(o),1),0===s.length&&i.delete(o.srcElement)}}},e.handleEvent=function(t){if(!this.isEmpty()){for(var e=this._normalizeEvent(t),n=t.srcEvent.target;n&&n!==e.rootElement;){if(this._emit(e,n),e.handled)return;n=n.parentNode}this._emit(e,"root")}},e._emit=function(t,e){var n=this.handlersByElement.get(e);if(n){for(var i=!1,r=function(){t.handled=!0},o=function(){t.handled=!0,i=!0},s=[],a=0;a<n.length;a++){var h=n[a],u=h.type,c=h.handler,l=h.once;if(c(Object.assign({},t,{type:u,stopPropagation:r,stopImmediatePropagation:o})),l&&s.push(n[a]),i)break}for(var p=0;p<s.length;p++){var v=s[p],d=v.type,f=v.handler;this.remove(d,f)}}},e._normalizeEvent=function(t){var e=this.eventManager.element;return Object.assign({},t,function(t){var e=C[t.srcEvent.type];if(!e)return null;var n=t.srcEvent,i=n.buttons,r=n.button,o=n.which,s=!1,a=!1,h=!1;return 4===e||2===e&&!Number.isFinite(i)?(s=1===o,a=2===o,h=3===o):2===e?(s=Boolean(1&i),a=Boolean(4&i),h=Boolean(2&i)):1===e&&(s=0===r,a=1===r,h=2===r),{leftButton:s,middleButton:a,rightButton:h}}(t),function(t,e){var n=t.srcEvent;if(!t.center&&!Number.isFinite(n.clientX))return null;var i=t.center||{x:n.clientX,y:n.clientY},r=e.getBoundingClientRect(),o=r.width/e.offsetWidth,s=r.height/e.offsetHeight;return{center:i,offsetCenter:{x:(i.x-r.left-e.clientLeft)/o,y:(i.y-r.top-e.clientTop)/s}}}(t,e),{handled:!1,rootElement:e})},t}(),D={events:null,recognizers:null,recognizerOptions:{},Manager:l,touchAction:"none"},R=function(){function t(t,e){void 0===t&&(t=null),void 0===e&&(e={}),this.options=Object.assign({},D,e),this.events=new Map,this._onBasicInput=this._onBasicInput.bind(this),this._onOtherEvent=this._onOtherEvent.bind(this),this.setElement(t);var n=e.events;n&&this.on(n)}var e=t.prototype;return e.setElement=function(t){var e=this;if(this.element&&this.destroy(),this.element=t,t){var n=this.options,i=n.Manager;for(var r in this.manager=new i(t,{touchAction:n.touchAction,recognizers:n.recognizers||v}).on("hammer.input",this._onBasicInput),n.recognizers||Object.keys(d).forEach((function(t){var n=e.manager.get(t);n&&d[t].forEach((function(t){n.recognizeWith(t)}))})),n.recognizerOptions){var o=this.manager.get(r);if(o){var s=n.recognizerOptions[r];delete s.enable,o.set(s)}}this.wheelInput=new x(t,this._onOtherEvent,{enable:!1}),this.moveInput=new O(t,this._onOtherEvent,{enable:!1}),this.keyInput=new M(t,this._onOtherEvent,{enable:!1}),this.contextmenuInput=new L(t,this._onOtherEvent,{enable:!1});var a=this.events,h=Array.isArray(a),u=0;for(a=h?a:a[Symbol.iterator]();;){var c;if(h){if(u>=a.length)break;c=a[u++]}else{if((u=a.next()).done)break;c=u.value}var l=c,p=l[0],f=l[1];f.isEmpty()||(this._toggleRecognizer(f.recognizerName,!0),this.manager.on(p,f.handleEvent))}}},e.destroy=function(){this.element&&(this.wheelInput.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy(),this.wheelInput=null,this.moveInput=null,this.keyInput=null,this.contextmenuInput=null,this.manager=null,this.element=null)},e.on=function(t,e,n){this._addEventHandler(t,e,n,!1)},e.once=function(t,e,n){this._addEventHandler(t,e,n,!0)},e.off=function(t,e){this._removeEventHandler(t,e)},e._toggleRecognizer=function(t,e){var n=this.manager;if(n){var i=n.get(t);if(i&&i.options.enable!==e){i.set({enable:e});var r=f[t];r&&!this.options.recognizers&&r.forEach((function(r){var o=n.get(r);e?(o.requireFailure(t),i.dropRequireFailure(r)):o.dropRequireFailure(t)}))}this.wheelInput.enableEventType(t,e),this.moveInput.enableEventType(t,e),this.keyInput.enableEventType(t,e),this.contextmenuInput.enableEventType(t,e)}},e._addEventHandler=function(t,e,n,i){if("string"==typeof t){var r=this.manager,o=this.events,s=T[t]||t,a=o.get(s);a||(a=new z(this),o.set(s,a),a.recognizerName=b[s]||s,r&&r.on(s,a.handleEvent)),this._toggleRecognizer(a.recognizerName,!0),a.add(t,e,n,i)}else for(var h in n=e,t)this._addEventHandler(h,t[h],n,i)},e._removeEventHandler=function(t,e){if("string"==typeof t){var n=this.events,i=T[t]||t,r=n.get(i);if(r&&(r.remove(t,e),r.isEmpty())){var o=r.recognizerName,s=!1,a=n.values(),h=Array.isArray(a),u=0;for(a=h?a:a[Symbol.iterator]();;){var c;if(h){if(u>=a.length)break;c=a[u++]}else{if((u=a.next()).done)break;c=u.value}var l=c;if(l.recognizerName===o&&!l.isEmpty()){s=!0;break}}s||this._toggleRecognizer(o,!1)}}else for(var p in t)this._removeEventHandler(p,t[p])},e._onBasicInput=function(t){var e=t.srcEvent,n=m[e.type];n&&this.manager.emit(n,t)},e._onOtherEvent=function(t){this.manager.emit(t.type,t)},t}(),S=(n("7vtz"),["click","anyclick","contextmenu","pointerdown","pointermove","pointerup","pointerover","pointerout","pointerleave","doubletap","pinchin","pinchout","pinchstart","pinchmove","pinchend","pinchcancel","rotatestart","rotatemove","rotateend","rotatecancel","panstart","panmove","panend","pancancel","panup","pandown","panleft","panright","swipe","swipeleft","swiperight","swipeup","swipedown","keydown","keyup","wheel"]),N={click:!0,doubletap:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,panstart:!0,panmove:!0,panend:!0,wheel:!0};function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"default",(function(){return X})),n.d(e,"renderToDOM",(function(){return Y}));var X=function(t){var e,n;function i(e){var n;return(n=t.call(this,e)||this)._onLoad=n._onLoad.bind(F(n)),n._onLoadRedBox=n._onLoadRedBox.bind(F(n)),n._onUpdateOption=n._onUpdateOption.bind(F(n)),n._handleEvent=n._handleEvent.bind(F(n)),n._renderCheckbox=n._renderCheckbox.bind(F(n)),n.eventListeners={},S.forEach((function(t){N[t]&&(n.eventListeners[t]=n._handleEvent)})),n._eventManager=new R(null,{events:n.eventListeners}),n.state={events:[],options:N},n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=i.prototype;return r._onLoad=function(t){this._eventManager.setElement(t)},r._onLoadRedBox=function(t){t&&this._eventManager.on(this.eventListeners,t),this._redBox=t},r._onUpdateOption=function(t){var e,n=t.target,i=n.name,r=n.checked;r?(this.eventListeners[i]=this._handleEvent,this._eventManager.on(i,this._handleEvent),this._eventManager.on(i,this._handleEvent,this._redBox)):(delete this.eventListeners[i],this._eventManager.off(i,this._handleEvent),this._eventManager.off(i,this._handleEvent,this._redBox)),this.setState({options:Object.assign({},this.state.options,(e={},e[i]=r,e))})},r._handleEvent=function(t){t.preventDefault(),t.stopPropagation();var e=this.state.events.slice(0,30);e.unshift(t),this.setState({events:e})},r._renderCheckbox=function(t){var e=this.state.options,n="input-"+t;return s.a.createElement("div",{key:t},s.a.createElement("input",{id:n,type:"checkbox",name:t,checked:e[t]||!1,onChange:this._onUpdateOption}),s.a.createElement("label",{htmlFor:n},t))},r._renderEvent=function(t,e){return s.a.createElement("div",{key:e},s.a.createElement("span",{key:"type"},t.type),s.a.createElement("span",{key:"position"},t.offsetCenter?"("+t.offsetCenter.x.toFixed(0)+", "+t.offsetCenter.y.toFixed(0)+")":""),s.a.createElement("span",{key:"button"},t.key||t.leftButton&&"left button"||t.middleButton&&"middle button"||t.rightButton&&"right button"),s.a.createElement("span",{key:"target"},t.target.id))},r.render=function(){var t=this.state.events;return s.a.createElement(o.Fragment,null,s.a.createElement("div",{id:"container",ref:this._onLoad},s.a.createElement("div",{id:"red-box",ref:this._onLoadRedBox})),s.a.createElement("div",{id:"logs"},t.map(this._renderEvent)),s.a.createElement("div",{id:"options"},S.map(this._renderCheckbox)))},i}(o.Component);function Y(t){Object(a.render)(s.a.createElement(X,null),t)}},QFtD:function(t,e,n){var i;n("0l/t"),n("Vd3H"),n("Tze0"),n("KKXr"),n("V+eJ"),n("hHhE"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("pIFo"),n("8+KV"),n("LK8F"),n("eM6i"),function(r,o,s,a){"use strict";var h,u=["","webkit","Moz","MS","ms","o"],c=o.createElement("div"),l=Math.round,p=Math.abs,v=Date.now;function d(t,e,n){return setTimeout(T(t,n),e)}function f(t,e,n){return!!Array.isArray(t)&&(m(t,n[e],n),!0)}function m(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(void 0!==t.length)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function g(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}h="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var y=g((function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&void 0===t[i[r]])&&(t[i[r]]=e[i[r]]),r++;return t}),"extend","Use `assign`."),E=g((function(t,e){return y(t,e,!0)}),"merge","Use `assign`.");function b(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&h(i,n)}function T(t,e){return function(){return t.apply(e,arguments)}}function _(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function w(t,e){return void 0===t?e:t}function I(t,e,n){m(A(e),(function(e){t.addEventListener(e,n,!1)}))}function x(t,e,n){m(A(e),(function(e){t.removeEventListener(e,n,!1)}))}function k(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function O(t,e){return t.indexOf(e)>-1}function A(t){return t.trim().split(/\s+/g)}function M(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function L(t){return Array.prototype.slice.call(t,0)}function C(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];M(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function P(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<u.length;){if((i=(n=u[o])?n+r:e)in t)return i;o++}}var z=1;function D(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var R="ontouchstart"in r,S=void 0!==P(r,"PointerEvent"),N=R&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),F=["x","y"],X=["clientX","clientY"];function Y(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){_(t.options.enable,[t])&&n.handler(e)},this.init()}function B(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=1&e&&i-r==0,s=12&e&&i-r==0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=W(e));r>1&&!n.firstMultiple?n.firstMultiple=W(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,h=e.center=H(i);e.timeStamp=v(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=V(a,h),e.distance=U(a,h),function(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};1!==e.eventType&&4!==o.eventType||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}(n,e),e.offsetDirection=q(e.deltaX,e.deltaY);var u=j(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=p(u.x)>p(u.y)?u.x:u.y,e.scale=s?(c=s.pointers,l=i,U(l[0],l[1],X)/U(c[0],c[1],X)):1,e.rotation=s?function(t,e){return V(e[1],e[0],X)+V(t[1],t[0],X)}(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,r,o,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp;if(8!=e.eventType&&(a>25||void 0===s.velocity)){var h=e.deltaX-s.deltaX,u=e.deltaY-s.deltaY,c=j(a,h,u);i=c.x,r=c.y,n=p(c.x)>p(c.y)?c.x:c.y,o=q(h,u),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}(n,e);var c,l;var d=t.element;k(e.srcEvent.target,d)&&(d=e.srcEvent.target);e.target=d}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function W(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:l(t.pointers[n].clientX),clientY:l(t.pointers[n].clientY)},n++;return{timeStamp:v(),pointers:e,center:H(e),deltaX:t.deltaX,deltaY:t.deltaY}}function H(t){var e=t.length;if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:l(n/e),y:l(i/e)}}function j(t,e,n){return{x:e/t||0,y:n/t||0}}function q(t,e){return t===e?1:p(t)>=p(e)?t<0?2:4:e<0?8:16}function U(t,e,n){n||(n=F);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function V(t,e,n){n||(n=F);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}Y.prototype={handler:function(){},init:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(D(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&x(this.element,this.evEl,this.domHandler),this.evTarget&&x(this.target,this.evTarget,this.domHandler),this.evWin&&x(D(this.element),this.evWin,this.domHandler)}};var G={mousedown:1,mousemove:2,mouseup:4};function K(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,Y.apply(this,arguments)}b(K,Y,{handler:function(t){var e=G[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Z={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},J={2:"touch",3:"pen",4:"mouse",5:"kinect"},Q="pointerdown",$="pointermove pointerup pointercancel";function tt(){this.evEl=Q,this.evWin=$,Y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(Q="MSPointerDown",$="MSPointerMove MSPointerUp MSPointerCancel"),b(tt,Y,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Z[i],o=J[t.pointerType]||t.pointerType,s="touch"==o,a=M(e,t.pointerId,"pointerId");1&r&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):12&r&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var et={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function nt(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,Y.apply(this,arguments)}function it(t,e){var n=L(t.touches),i=L(t.changedTouches);return 12&e&&(n=C(n.concat(i),"identifier",!0)),[n,i]}b(nt,Y,{handler:function(t){var e=et[t.type];if(1===e&&(this.started=!0),this.started){var n=it.call(this,t,e);12&e&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var rt={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function ot(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},Y.apply(this,arguments)}function st(t,e){var n=L(t.touches),i=this.targetIds;if(3&e&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=L(t.changedTouches),a=[],h=this.target;if(o=n.filter((function(t){return k(t.target,h)})),1===e)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),12&e&&delete i[s[r].identifier],r++;return a.length?[C(o.concat(a),"identifier",!0),a]:void 0}b(ot,Y,{handler:function(t){var e=rt[t.type],n=st.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});function at(){Y.apply(this,arguments);var t=T(this.handler,this);this.touch=new ot(this.manager,t),this.mouse=new K(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ht(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,ut.call(this,e)):12&t&&ut.call(this,e)}function ut(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),2500)}}function ct(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=25&&s<=25)return!0}return!1}b(at,Y,{handler:function(t,e,n){var i="touch"==n.pointerType,r="mouse"==n.pointerType;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)ht.call(this,e,n);else if(r&&ct.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var lt=P(c.style,"touchAction"),pt=void 0!==lt,vt=function(){if(!pt)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||r.CSS.supports("touch-action",n)})),t}();function dt(t,e){this.manager=t,this.set(e)}dt.prototype={set:function(t){"compute"==t&&(t=this.compute()),pt&&this.manager.element.style&&vt[t]&&(this.manager.element.style[lt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,(function(e){_(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(O(t,"none"))return"none";var e=O(t,"pan-x"),n=O(t,"pan-y");if(e&&n)return"none";if(e||n)return e?"pan-x":"pan-y";if(O(t,"manipulation"))return"manipulation";return"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=O(i,"none")&&!vt.none,o=O(i,"pan-y")&&!vt["pan-y"],s=O(i,"pan-x")&&!vt["pan-x"];if(r){var a=1===t.pointers.length,h=t.distance<2,u=t.deltaTime<250;if(a&&h&&u)return}if(!s||!o)return r||o&&6&n||s&&24&n?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function ft(t){this.options=h({},this.defaults,t||{}),this.id=z++,this.manager=null,this.options.enable=w(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function mt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function gt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function yt(t,e){var n=e.manager;return n?n.get(t):t}function Et(){ft.apply(this,arguments)}function bt(){Et.apply(this,arguments),this.pX=null,this.pY=null}function Tt(){Et.apply(this,arguments)}function _t(){ft.apply(this,arguments),this._timer=null,this._input=null}function wt(){Et.apply(this,arguments)}function It(){Et.apply(this,arguments)}function xt(){ft.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function kt(t,e){return(e=e||{}).recognizers=w(e.recognizers,kt.defaults.preset),new Ot(t,e)}ft.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(f(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=yt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return f(t,"dropRecognizeWith",this)?this:(t=yt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(f(t,"requireFailure",this))return this;var e=this.requireFail;return-1===M(e,t=yt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(f(t,"dropRequireFailure",this))return this;t=yt(t,this);var e=M(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<8&&i(e.options.event+mt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=8&&i(e.options.event+mt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=h({},t);if(!_(this.options.enable,[this,e]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},b(Et,ft,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=6&e,r=this.attrTest(t);return i&&(8&n||!r)?16|e:i||r?4&n?8|e:2&e?4|e:2:32}}),b(bt,Et,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push("pan-y"),24&t&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(6&e.direction?(r=0===o?1:o<0?2:4,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?1:s<0?8:16,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return Et.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=gt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),b(Tt,Et,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),b(_t,ft,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=d((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=v(),this.manager.emit(this.options.event,this._input)))}}),b(wt,Et,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),b(It,Et,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return bt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return 30&n?e=t.overallVelocity:6&n?e=t.overallVelocityX:24&n&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&p(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=gt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),b(xt,ft,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(i&&r&&n){if(4!=t.eventType)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||U(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=d((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return 32},failTimeout:function(){return this._timer=d((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),kt.VERSION="2.0.7",kt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[wt,{enable:!1}],[Tt,{enable:!1},["rotate"]],[It,{direction:6}],[bt,{direction:6},["swipe"]],[xt],[xt,{event:"doubletap",taps:2},["tap"]],[_t]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Ot(t,e){var n;this.options=h({},kt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(S?tt:N?ot:R?at:K))(n,B),this.touchAction=new dt(this,this.options.touchAction),At(this,!0),m(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function At(t,e){var n,i=t.element;i.style&&(m(t.options.cssProps,(function(r,o){n=P(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}Ot.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&14&n.state&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof ft)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(f(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(f(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=M(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(void 0!==t&&void 0!==e){var n=this.handlers;return m(A(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(void 0!==t){var n=this.handlers;return m(A(t),(function(t){e?n[t]&&n[t].splice(M(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&At(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(kt,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Ot,Input:Y,TouchAction:dt,TouchInput:ot,MouseInput:K,PointerEventInput:tt,TouchMouseInput:at,SingleTouchInput:nt,Recognizer:ft,AttrRecognizer:Et,Tap:xt,Pan:bt,Swipe:It,Pinch:Tt,Rotate:wt,Press:_t,on:I,off:x,each:m,merge:E,extend:y,assign:h,inherit:b,bindFn:T,prefixed:P}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=kt,void 0===(i=function(){return kt}.call(e,n,e,t))||(t.exports=i)}(window,document)},Zs1x:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r="undefined"!=typeof window?window:t,o=(void 0!==t||window,"undefined"!=typeof document&&document,!1);try{var s={get passive(){return o=!0,!0}};r.addEventListener("test",s,s),r.removeEventListener("test",s,s)}catch(a){}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---examples-main-app-js-e98f6167890663e50612.js.map