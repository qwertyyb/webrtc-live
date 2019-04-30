(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29ff438e"],{"40e5":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-accept mx-8"},[o("el-row",{attrs:{type:"flex"}},[o("el-col",{staticClass:"flex items-center",attrs:{span:20}},[o("h1",{staticClass:"font-bold text-2xl"},[e._v("正在通话")])]),o("el-col",{attrs:{span:4}},[o("el-button",{attrs:{type:"danger"},on:{click:e.stopCall}},[e._v("挂断")])],1)],1),o("el-row",{staticClass:"mx-4",attrs:{gutter:20}},[o("el-col",{directives:[{name:"loading",rawName:"v-loading",value:e.selfLoading,expression:"selfLoading"}],attrs:{span:12,"element-loading-text":"正在连接...","element-loading-spinner":"el-icon-loading"}},[o("video",{ref:"self-video",staticClass:"w-full",attrs:{src:"",autoplay:"",poster:n("b8b5")}}),o("p",{staticClass:"text-center"},[e._v("我")])]),o("el-col",{directives:[{name:"loading",rawName:"v-loading",value:e.friendLoading,expression:"friendLoading"}],attrs:{span:12,"element-loading-text":"正在连接...","element-loading-spinner":"el-icon-loading"}},[o("video",{ref:"friend-video",staticClass:"w-full",attrs:{src:"",autoplay:"",poster:n("b8b5")}}),o("p",{staticClass:"text-center"},[e._v(e._s(e.inviter.nickname))])])],1)],1)},i=[],s=n("d5db"),a=n("4777"),c=null,r=null,l={name:"page-accept",data:function(){return{inviter:{},selfLoading:!1,friendLoading:!1}},watch:{"$route.query":{immediate:!1,handler:function(){var e=decodeURIComponent(this.$route.query.inviter||""),t=e&&JSON.parse(e),n=decodeURIComponent(this.$route.query.linkId||"");t&&n&&this.acceptCall(t,n)}}},created:function(){window.addEventListener("unload",this.stopCall),this.stopCall()},mounted:function(){var e=decodeURIComponent(this.$route.query.inviter||""),t=e&&JSON.parse(e),n=decodeURIComponent(this.$route.query.linkId||"");t&&n&&this.acceptCall(t,n)},beforeDestroy:function(){this.stopCall(),window.removeEventListener("unload",this.stopCall)},methods:{acceptCall:function(e,t){var n=this;this.inviter=e,this.selfLoading=!0,this.friendLoading=!0,c=new s["a"](this.$refs["self-video"]),c.on("start",function(){n.selfLoading=!1,c.socket.emit("acceptcall",{from:e}),r=new a["a"](n.$refs["friend-video"],t),r.on("start",function(e){n.friendLoading=!1}),r.on("presentorgone",function(e){n.stopCall()}),r.start()}),c.start()},stopCall:function(){c&&c.stop(),r&&r.stop()}}},d=l,u=n("2877"),f=Object(u["a"])(d,o,i,!1,null,null,null);t["default"]=f.exports},4777:function(e,t,n){"use strict";n("7f7f");var o=n("a4bb"),i=n.n(o),s=(n("6762"),n("2fdb"),n("f499")),a=n.n(s),c=n("795b"),r=n.n(c),l=n("d225"),d=n("b0b4"),u=n("bd86"),f=n("a825"),v=n("d519"),p=n.n(v),h=n("8055"),b=n.n(h),m=n("c0d6"),g=function(){function e(t,n){var o=this;Object(l["a"])(this,e),Object(u["a"])(this,"socket",null),Object(u["a"])(this,"videoDom",null),Object(u["a"])(this,"webRtcPeer",null),Object(u["a"])(this,"events",{start:[],stop:[],presentorgone:[]}),Object(u["a"])(this,"_onVideoCanplay",function(e){o.emit("start")}),Object(u["a"])(this,"bindEvent",function(){var e=o.socket,t=o.webRtcPeer;e.on("startResponse",function(e){var n=e.sdpAnswer;console.log("SDP answer received from server. Processing ..."),t.processAnswer(n)}),e.on("iceCandidate",function(e){var n=e.candidate;console.log("iceCandidate",n),t.addIceCandidate(n)}),e.on("presentorgone",function(e){o.videoDom.pause(),o.videoDom.srcObject=null,o.videoDom.load(),o.emit("presentorgone"),o.socket.close(),o.emit("stop")}),console.log(t)}),Object(u["a"])(this,"start",function(){var e={remoteVideo:o.videoDom,onicecandidate:o.onIceCandidate,configuration:{iceServers:f["a"]}};return new r.a(function(t,n){o.webRtcPeer=p.a.WebRtcPeer.WebRtcPeerRecvonly(e,function(e){if(e)return n(e);t()})}).then(function(e){return o.bindEvent(),new r.a(function(e,t){return o.webRtcPeer.generateOffer(function(n,o){if(n)return t(n);e(o)})})}).then(function(e){console.info("Invoking SDP offer callback function "+location.host),o.socket.emit("createViewer",{sdpOffer:e})})}),Object(u["a"])(this,"stop",function(){console.log("Stopping viewer ..."),o.webRtcPeer&&(o.webRtcPeer.dispose(),console.log("dispose"),o.webRtcPeer=null),o.socket.emit("stopViewer")}),Object(u["a"])(this,"onIceCandidate",function(e){console.log("Local candidate"+a()(e)),o.socket.emit("onIceCandidate",{candidate:e})}),console.log(t),this.socket=b()({path:"/socket.io/webrtc",query:{token:m["a"].state.token,presentorId:n},reconnection:!1}),this.socket.on("error",function(e){o.emit("error",e)}),this.socket.on("connect_error",function(e){console.log("error"),o.emit("error",e)}),this.videoDom=t,t.addEventListener("canplay",this._onVideoCanplay)}return Object(d["a"])(e,[{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(i()(this.events).includes(e)){var s=this.events[e];return s.map(function(e){return e.apply(void 0,n)})}}},{key:"on",value:function(e,t){if(i()(this.events).includes(e)){var n=this.events[e];n.includes(t)||n.push(t)}}}]),e}();t["a"]=g},d5db:function(e,t,n){"use strict";n("7f7f");var o=n("a4bb"),i=n.n(o),s=(n("6762"),n("2fdb"),n("f499")),a=n.n(s),c=n("795b"),r=n.n(c),l=n("d225"),d=n("b0b4"),u=n("bd86"),f=n("a825"),v=n("d519"),p=n.n(v),h=n("6c23"),b=function(){function e(t){var n=this;Object(l["a"])(this,e),Object(u["a"])(this,"socket",null),Object(u["a"])(this,"localVideo",null),Object(u["a"])(this,"webRtcPeer",null),Object(u["a"])(this,"events",{start:[],stop:[],error:[],message:[]}),Object(u["a"])(this,"_onVideoCanplay",function(e){console.log("onvideocanplay"),n.emit("start")}),Object(u["a"])(this,"bindEvent",function(){var e=n.socket,t=n.webRtcPeer;e.on("startResponse",function(e){var n=e.sdpAnswer;console.log("SDP answer received from server. Processing ..."),t.processAnswer(n)}),e.on("iceCandidate",function(e){var n=e.candidate;t.addIceCandidate(n)})}),Object(u["a"])(this,"start",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={remoteVideo:n.localVideo,mediaConstraints:{video:{width:640,height:480},audio:!0},onicecandidate:n.onIceCandidate,configuration:{iceServers:f["a"]}};return new r.a(function(e,o){n.webRtcPeer=p.a.WebRtcPeer.WebRtcPeerSendrecv(t,function(t){if(t)return o(t);e()})}).then(function(e){return n.bindEvent(),new r.a(function(e,t){return n.webRtcPeer.generateOffer(function(n,o){if(n)return t(n);e(o)})})}).then(function(t){console.info("Invoking SDP offer callback function "+location.host),n.socket.emit("createPresentor",{sdpOffer:t,invite:e})})}),Object(u["a"])(this,"stop",function(){console.log("Stopping video call ..."),n.webRtcPeer&&(n.webRtcPeer.dispose(),n.webRtcPeer=null),n.localVideo.removeEventListener("canplay",n._onVideoCanplay),n.socket.emit("stopPresentor"),n.socket.close(),n.emit("stop")}),Object(u["a"])(this,"onIceCandidate",function(e){console.log("Local candidate"+a()(e)),n.socket.emit("onIceCandidate",{candidate:e})}),this.socket=Object(h["b"])(),console.log(this.socket),this.socket.on("error",function(e){n.emit("error",e)}),this.socket.on("connect_error",function(e){n.emit("error",e)}),this.socket.on("callaccepted",function(e){n.emit("callaccepted",e)}),this.socket.on("callrejected",function(e){n.emit("callrejected",e)}),this.socket.on("callerror",function(e){n.emit("callerror",e)}),this.socket.on("message",function(e){n.emit("message",e)}),this.localVideo=t,t.addEventListener("canplay",this._onVideoCanplay)}return Object(d["a"])(e,[{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(console.log(e,this.events),i()(this.events).includes(e)){var s=this.events[e];return s.map(function(e){return e.apply(void 0,n)})}}},{key:"on",value:function(e,t){if(i()(this.events).includes(e)){var n=this.events[e];if(!n.includes(t))return n.push(t),this}}}]),e}();t["a"]=b}}]);
//# sourceMappingURL=chunk-29ff438e.fd95faee.js.map