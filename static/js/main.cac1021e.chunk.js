(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/spinner-red.d6578615.gif"},,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),o=a.n(r),i=(a(21),a(8)),l=a(9),s=a(14),d=a(10),b=a(3),u=a(15),f=(a(22),a(11)),h={person:"#f50422",bicycle:"#48b41b",car:"#9685eb",motorcycle:"#c79ed2",airplane:"#8fd883",bus:"#79352c",train:"#648177",truck:"#fc458e",boat:"#615af0","traffic light":"#e33e52","fire hydrant":"#3e464c","stop sign":"#ea9e70","parking meter":"#1c271",bench:"#ba96ce",bird:"#d70a9c",cat:"#1ec227",dog:"#e23dd0",horse:"#4a543f",sheep:"#96b00c",cow:"#cb5bea",elephant:"#aead3a",bear:"#ae90e2",zebra:"#67eb4b",giraffe:"#01ac53",backpack:"#0ec0ff",umbrella:"#d3486d",handbag:"#11dec1",tie:"#8a96c6",suitcase:"#cd2f00",frisbee:"#b11573",skis:"#916988",snowboard:"#fb21a3","sports ball":"#0971f0",kite:"#c6e1e8","baseball bat":"#3d6751","baseball glove":"#79bca0",skateboard:"#b2be57",surfboard:"#983f7a","tennis racket":"#880977",bottle:"#1bb699","wine glass":"#e0eeb8",cup:"#f50422",fork:"#792ed8",knife:"#436a9e",spoon:"#3cec35",bowl:"#ce00be",banana:"#640fc1",apple:"#ee91e3",sandwich:"#e4ac44",orange:"#1dc18",broccoli:"#651be6",carrot:"#9b5c2a","hot dog":"#1ae6db",pizza:"#a2f8a5",donut:"#f2510e",cake:"#ea24a3",chair:"#1350ce",couch:"#9e6d71","potted plant":"#4bb473",bed:"#f07815","dining table":"#0023b8",toilet:"#bde052",tv:"#d36647",laptop:"#06f43a",mouse:"#3b8c2a",remote:"#be608b",keyboard:"#d2737d","cell phone":"#4ca2f9",microwave:"#86e98f",oven:"#64820f",toaster:"#88e9b8",sink:"#e7dbce",refrigerator:"#1c65cb",book:"#a84a8f",clock:"#8fb413",vase:"#7fb411",scissors:"#911e20","teddy bear":"#c6c42c","hair drier":"#513d98",toothbrush:"#911e7e"},m=function(e){var t=f.a("mobilenet_v2"),a=window.innerWidth,r=window.innerHeight,o=Object(n.useRef)(null),i=Object(n.useRef)(null),l=function(e){var t=o.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height),t.lineWidth=2,t.textBaseline="bottom",t.font="14px sans-serif",e.forEach(function(e){var a="".concat(e.class);t.strokeStyle=h[a];var n=t.measureText(a).width,c=parseInt(t.font,10);t.strokeRect(e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]),t.fillStyle="white",t.fillRect(e.bbox[0]-t.lineWidth/2,e.bbox[1],n+t.lineWidth,-c),t.fillStyle="#fc0303",t.fillText(a,e.bbox[0],e.bbox[1])})};return Object(n.useEffect)(function(){if(navigator.mediaDevices.getUserMedia){var e=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(e){return i.current.srcObject=e,new Promise(function(e){return i.current.onloadedmetadata=e})}).catch(function(e){alert("Please allow the browser to access your device's camera!!!")});Promise.all([t,e]).then(function(e){!function e(t,a){a.detect(t).then(function(e){l(e)}),requestAnimationFrame(function(){return e(t,a)})}(i.current,e[0])}).catch(function(e){return console.error("Error loading the models / cam ".concat(e))})}else alert("You should probably download Chrome buddy")}),c.a.createElement(c.a.Fragment,null,c.a.createElement("video",{ref:i,className:"app-position",autoPlay:!0,playsInline:!0,muted:!0,width:a,height:r}),c.a.createElement("canvas",{ref:o,className:"app-position",width:a,height:r-100}))},p=(a(31),a(13)),g=a.n(p),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={begin:!1,loading:!0,framesProcessed:0,guessData:{}},a.handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleClick",value:function(){var e=this;this.setState({begin:!0}),setTimeout(function(){e.setState({loading:!1})},5e3)}},{key:"render",value:function(){return console.log(this.state.framesProcessed),c.a.createElement("div",{id:"container"},!1===this.state.begin?c.a.createElement("div",null,c.a.createElement("h1",{id:"header-title"},"Object Detector"),c.a.createElement("hr",null),c.a.createElement("br",null),c.a.createElement("a",{id:"header",href:"https://www.github.com/cnebs"},"Project GitHub"),c.a.createElement("br",null),c.a.createElement("span",{id:"header"},"Still image detection powered by:"),c.a.createElement("br",null),c.a.createElement("div",{id:"support-links"},c.a.createElement("a",{id:"header-links-1",href:"https://www.npmjs.com/package/@tensorflow/tfjs"},"Tensorflow.js"),c.a.createElement("span",{id:"header"},"|"),c.a.createElement("a",{id:"header-links-2",href:"https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd"},"Detection Model")),c.a.createElement("div",{id:"wrapper"},c.a.createElement("button",{onClick:this.handleClick,type:"button"},"Launch"))):c.a.createElement("div",null,c.a.createElement("h3",{id:"header"},"Object Detector"),c.a.createElement("hr",null),c.a.createElement(c.a.Fragment,null,!0===this.state.loading?c.a.createElement("span",{id:"header"},c.a.createElement("img",{src:g.a,alt:"loading ..."})):c.a.createElement(c.a.Fragment,null),c.a.createElement(m,{handleGuess:this.handleGuess,handleCountFrames:this.handleCountFrames,framesProcessed:this.state.framesProcessed}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,1,2]]]);
//# sourceMappingURL=main.cac1021e.chunk.js.map