(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-557e7b22"],{"10f1":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mx-4"},[o("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("el-col",{staticClass:"text-right",attrs:{span:8}},[e._v("\n      请输入对方的用户名：\n    ")]),o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{size:"small"},model:{value:e.friend.nickname,callback:function(t){e.$set(e.friend,"nickname",t)},expression:"friend.nickname"}})],1),o("el-col",{staticClass:"ml-2",attrs:{span:8}},[o("el-button",{attrs:{size:"small",type:"primary",disabled:"free"!=e.status},on:{click:e.askACall}},[e._v(e._s("free"==e.status?"呼叫":"正在呼叫..."))]),o("el-button",{attrs:{size:"small",type:"danger",disabled:"free"==e.status},on:{click:e.stopACall}},[e._v("挂断")])],1)],1),o("el-row",{staticClass:"mt-4",attrs:{gutter:10,hidden:"free"===e.status}},[o("el-col",{staticClass:"transition-all",attrs:{span:12,offset:3,hidden:"linking"===e.status}},[o("video",{ref:"friend-video",staticClass:"m-2 friend-video border",attrs:{src:"",autoplay:"",poster:n("b8b5")}}),o("p",{staticClass:"text-center"},[e._v(e._s(e.friend.nickname))])]),o("el-col",{staticClass:"transition-all",attrs:{span:"linking"===e.status?12:6,offset:"linking"===e.status?6:0}},[o("video",{ref:"self-video",staticClass:"w-full m-2 border",attrs:{src:"",id:"self-video",autoplay:"",poster:n("b8b5"),muted:""},domProps:{muted:!0}}),o("p",{staticClass:"text-center"},[e._v("我")])])],1)],1)},i=[],s=n("5c96"),a=n("d5db"),c=n("4777"),r=n("6c23"),l=null,d=null,u={name:"page-call",data:function(){return{friend:{nickname:""},status:"free"}},created:function(){window.addEventListener("unload",this.stopACall)},mounted:function(){console.log(this)},beforeDestroy:function(){this.stopACall(),window.removeEventListener("unload",this.stopACall)},methods:{askACall:function(){var e=this.friend.nickname;e&&e.trim()?(this.stopACall(),l=new a["a"](this.$refs["self-video"]),l.on("error",this.onCallerror),l.start(e.trim(),!1),this.status="linking",this.bindEvents()):this.$message.warning("请输入对方用户名")},stopACall:function(){this.offEvents(),l&&l.stop(),d&&d.stop(),this.status="free"},bindEvents:function(){var e=Object(r["a"])();e.once("callaccepted",this.onCallaccepted),e.once("callrejected",this.onCallrejected),e.on("callerror",this.onCallerror)},offEvents:function(){var e=Object(r["a"])();e.off("callaccepted",this.onCallaccepted),e.off("callrejected",this.onCallrejected),e.off("callerror",this.onCallerror)},onCallrejected:function(e){var t=e.to;this.stopACall(),this.status="free",s["Notification"].warning({title:"呼叫已被".concat(t.nickname,"拒绝")})},onCallaccepted:function(e){var t=this,n=e.to,o=e.linkId;console.log("呼叫已被".concat(n.nickname,"接听")),this.status="calling",s["Notification"].success({title:"呼叫已被".concat(n.nickname,"接听"),message:"正在建立连接..."}),d=new c["a"](this.$refs["friend-video"],o),d.on("presentorgone",function(e){t.stopACall()}),d.start()},onCallerror:function(e){var t=e.message;this.stopACall(),s["Notification"].error({title:t}),this.status="free"}}},f=u,v=(n("8b98"),n("2877")),h=Object(v["a"])(f,o,i,!1,null,null,null);t["default"]=h.exports},4777:function(e,t,n){"use strict";n("7f7f");var o=n("a4bb"),i=n.n(o),s=(n("6762"),n("2fdb"),n("f499")),a=n.n(s),c=n("795b"),r=n.n(c),l=n("d225"),d=n("b0b4"),u=n("bd86"),f=n("a825"),v=n("d519"),h=n.n(v),p=n("8055"),b=n.n(p),m=n("c0d6"),k=function(){function e(t,n){var o=this;Object(l["a"])(this,e),Object(u["a"])(this,"socket",null),Object(u["a"])(this,"videoDom",null),Object(u["a"])(this,"webRtcPeer",null),Object(u["a"])(this,"events",{start:[],stop:[],presentorgone:[]}),Object(u["a"])(this,"_onVideoCanplay",function(e){o.emit("start")}),Object(u["a"])(this,"bindEvent",function(){var e=o.socket,t=o.webRtcPeer;e.on("startResponse",function(e){var n=e.sdpAnswer;console.log("SDP answer received from server. Processing ..."),t.processAnswer(n)}),e.on("iceCandidate",function(e){var n=e.candidate;console.log("iceCandidate",n),t.addIceCandidate(n)}),e.on("presentorgone",function(e){o.videoDom.pause(),o.videoDom.srcObject=null,o.videoDom.load(),o.emit("presentorgone"),o.socket.close(),o.emit("stop")}),console.log(t)}),Object(u["a"])(this,"start",function(){var e={remoteVideo:o.videoDom,onicecandidate:o.onIceCandidate,configuration:{iceServers:f["a"]}};return new r.a(function(t,n){o.webRtcPeer=h.a.WebRtcPeer.WebRtcPeerRecvonly(e,function(e){if(e)return n(e);t()})}).then(function(e){return o.bindEvent(),new r.a(function(e,t){return o.webRtcPeer.generateOffer(function(n,o){if(n)return t(n);e(o)})})}).then(function(e){console.info("Invoking SDP offer callback function "+location.host),o.socket.emit("createViewer",{sdpOffer:e})})}),Object(u["a"])(this,"stop",function(){console.log("Stopping viewer ..."),o.webRtcPeer&&(o.webRtcPeer.dispose(),console.log("dispose"),o.webRtcPeer=null),o.socket.emit("stopViewer")}),Object(u["a"])(this,"onIceCandidate",function(e){console.log("Local candidate"+a()(e)),o.socket.emit("onIceCandidate",{candidate:e})}),console.log(t),this.socket=b()({path:"/socket.io/webrtc",query:{token:m["a"].state.token,presentorId:n},reconnection:!1}),this.socket.on("error",function(e){o.emit("error",e)}),this.socket.on("connect_error",function(e){console.log("error"),o.emit("error",e)}),this.videoDom=t,t.addEventListener("canplay",this._onVideoCanplay)}return Object(d["a"])(e,[{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(i()(this.events).includes(e)){var s=this.events[e];return s.map(function(e){return e.apply(void 0,n)})}}},{key:"on",value:function(e,t){if(i()(this.events).includes(e)){var n=this.events[e];n.includes(t)||n.push(t)}}}]),e}();t["a"]=k},"8b98":function(e,t,n){"use strict";var o=n("e5a6"),i=n.n(o);i.a},d5db:function(e,t,n){"use strict";n("7f7f");var o=n("a4bb"),i=n.n(o),s=(n("6762"),n("2fdb"),n("f499")),a=n.n(s),c=n("795b"),r=n.n(c),l=n("d225"),d=n("b0b4"),u=n("bd86"),f=n("a825"),v=n("d519"),h=n.n(v),p=n("6c23"),b=function(){function e(t){var n=this;Object(l["a"])(this,e),Object(u["a"])(this,"socket",null),Object(u["a"])(this,"localVideo",null),Object(u["a"])(this,"webRtcPeer",null),Object(u["a"])(this,"events",{start:[],stop:[],error:[],message:[]}),Object(u["a"])(this,"_onVideoCanplay",function(e){console.log("onvideocanplay"),n.emit("start")}),Object(u["a"])(this,"bindEvent",function(){var e=n.socket,t=n.webRtcPeer;e.on("startResponse",function(e){var n=e.sdpAnswer;console.log("SDP answer received from server. Processing ..."),t.processAnswer(n)}),e.on("iceCandidate",function(e){var n=e.candidate;t.addIceCandidate(n)})}),Object(u["a"])(this,"start",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o={remoteVideo:n.localVideo,mediaConstraints:{video:{width:640,height:480},audio:!0},onicecandidate:n.onIceCandidate,configuration:{iceServers:f["a"]}};return new r.a(function(e,t){n.webRtcPeer=h.a.WebRtcPeer.WebRtcPeerSendrecv(o,function(n){if(n)return t(n);e()})}).then(function(e){return n.bindEvent(),new r.a(function(e,t){return n.webRtcPeer.generateOffer(function(n,o){if(n)return t(n);e(o)})})}).then(function(o){console.info("Invoking SDP offer callback function "+location.host),n.socket.emit("createPresentor",{sdpOffer:o,invite:e,record:t})})}),Object(u["a"])(this,"stop",function(){console.log("Stopping video call ..."),n.webRtcPeer&&(n.webRtcPeer.dispose(),n.webRtcPeer=null),n.localVideo.removeEventListener("canplay",n._onVideoCanplay),n.socket.emit("stopPresentor"),n.socket.close(),n.emit("stop")}),Object(u["a"])(this,"onIceCandidate",function(e){console.log("Local candidate"+a()(e)),n.socket.emit("onIceCandidate",{candidate:e})}),this.socket=Object(p["b"])(),console.log(this.socket),this.socket.on("error",function(e){n.emit("error",e)}),this.socket.on("connect_error",function(e){n.emit("error",e)}),this.socket.on("callaccepted",function(e){n.emit("callaccepted",e)}),this.socket.on("callrejected",function(e){n.emit("callrejected",e)}),this.socket.on("callerror",function(e){n.emit("callerror",e)}),this.socket.on("message",function(e){n.emit("message",e)}),this.localVideo=t,t.addEventListener("canplay",this._onVideoCanplay)}return Object(d["a"])(e,[{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(console.log(e,this.events),i()(this.events).includes(e)){var s=this.events[e];return s.map(function(e){return e.apply(void 0,n)})}}},{key:"on",value:function(e,t){if(i()(this.events).includes(e)){var n=this.events[e];if(!n.includes(t))return n.push(t),this}}}]),e}();t["a"]=b},e5a6:function(e,t,n){}}]);
//# sourceMappingURL=chunk-557e7b22.dc9a87a9.js.map