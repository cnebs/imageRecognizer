(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(45)},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t){},37:function(e,t){},38:function(e,t){},39:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(14),r=n.n(o),c=(n(29),n(15)),l=n(16),s=n(22),u=n(17),d=n(5),h=n(23),m=(n(30),n(18)),f=function(e){var t=m.a("mobilenet_v2"),n=window.innerWidth,o=window.innerHeight,r=Object(a.useRef)(null),c=Object(a.useRef)(null),l=function(e){var t=r.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height),t.strokeStyle="white",t.lineWidth=1,t.textBaseline="bottom",t.font="italic 12px sans-serif",e.forEach(function(e){var n="".concat(e.class),a=t.measureText(n).width,i=parseInt(t.font,10);t.strokeRect(e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]),t.fillStyle="#F00",t.fillRect(e.bbox[0]-t.lineWidth/2,e.bbox[1],a+t.lineWidth,-i),t.fillStyle="#FFF",t.fillText(n,e.bbox[0],e.bbox[1])})};return Object(a.useEffect)(function(){if(console.log(navigator),navigator.mediaDevices.getUserMedia){var e=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(e){return c.current.srcObject=e,new Promise(function(e){return c.current.onloadedmetadata=e})}).catch(function(e){alert("Please allow the browser to access your device's camera!")});Promise.all([t,e]).then(function(e){!function e(t,n){n.detect(t).then(function(e){l(e)}),requestAnimationFrame(function(){return e(t,n)})}(c.current,e[0])}).catch(function(e){return console.error("Error loading the models / cam ".concat(e))})}else alert("You should probably download Chrome(ium) to fix this")}),i.a.createElement(i.a.Fragment,null,i.a.createElement("video",{ref:c,className:"app-position",autoPlay:!0,playsInline:!0,muted:!0,width:n,height:o}),i.a.createElement("canvas",{ref:r,className:"app-position",width:n,height:o}))},b=(n(39),n(20)),g=n.n(b),v=n(9),w=n.n(v),p=n(21),E=n.n(p),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={begin:!1,loading:!1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleLoading=n.handleLoading.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState({begin:!0})}},{key:"handleLoading",value:function(e){!1===e?this.setState({loading:!1}):!0===e&&this.setState({loading:!0})}},{key:"render",value:function(){return i.a.createElement(g.a,{id:"container"},!1===this.state.begin?i.a.createElement(w.a,null,i.a.createElement("h3",{id:"header"},"Image Recognizer"),i.a.createElement("div",{id:"wrapper"},i.a.createElement(E.a,{onClick:this.handleClick,variant:"primary"},"Launch Camera & Recognizer"))):i.a.createElement(w.a,null,i.a.createElement("p",null),i.a.createElement("h3",{id:"header"},"Image Recognizer"),i.a.createElement(i.a.Fragment,null,!0===this.state.loading?i.a.createElement("span",{id:"header"},"Loading..."):i.a.createElement(i.a.Fragment,null),i.a.createElement(f,null)),i.a.createElement("a",{href:"github.com/cnebs",id:"header"},"Github")))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.5eb9b062.chunk.js.map