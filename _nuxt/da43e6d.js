(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4,5],{269:function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return d}));var o="/web-panorama-static",r=[{id:"view_chinh_du_an",imgThumb:"/thumb_view_chinh_du_an.jpg"},{id:"view_phu_du_an",imgThumb:"/thumb_view_phu_du_an.jpg"},{id:"view_biet_thu",label:"View biệt thự",imgThumb:"/thumb_view_biet_thu.jpg"},{id:"cau_my_thuan",imgThumb:"/thumb_cau_my_thuan.jpg"},{id:"trung_tam_vinh_long",imgThumb:"thumb_trung_tam_vinh_long.jpg"}],l=[{id:"view_chinh_du_an",panorama:o+"/360_view_chinh_du_an.webp",links:[{nodeId:"view_biet_thu",longitude:"56deg",latitude:"-12deg",markerStyle:{scale:[1,1.5,2],html:'\n          <div class="marker">\n            <div class="marker-stick">\n              <div class="marker-bubble">\n                <img class="marker-bubble-img" src="'.concat(o,'/icon_view_biet_thu.jpg"}/>\n              </div>\n              <div class="marker-label">View biệt thự</div>\n            </div>\n          </div>\n          ')}},{nodeId:"view_phu_du_an",longitude:"54deg",latitude:"-33.5deg",markerStyle:{scale:[1,1.5,2],html:'\n          <div class="marker">\n            <div class="marker-stick">\n              <div class="marker-bubble">\n                <img class="marker-bubble-img" src="'.concat(o,'/icon_view_phu_du_an.jpg"}/>\n              </div>\n              <div class="marker-label">View phụ dự án</div>\n            </div>\n          </div>')}},{nodeId:"trung_tam_vinh_long",longitude:"100deg",latitude:"-33.5deg",markerStyle:{scale:[1,1.5,2],html:'\n          <div class="marker"><div class="marker-stick">\n            <div class="marker-banner">\n              <div class="marker-banner-icon">\n                <i class="material-icons md-36">expand_circle_down</i>\n              </div>\n              <div class="marker-banner-label">Trung tâm Vĩnh Long</div>\n            </div>\n          </div>\n          '}},{nodeId:"cau_my_thuan",longitude:"0deg",latitude:"-33.5deg",markerStyle:{scale:[1,1.5,2],html:'\n            <div class="marker"><div class="marker-stick">\n            <div class="marker-banner">\n              <div class="marker-banner-icon">\n                <i class="material-icons md-36">expand_circle_down</i>\n              </div>\n              <div class="marker-banner-label">Cầu Mỹ Thuận</div>\n            </div>\n          </div>\n          '}}]},{id:"view_phu_du_an",panorama:o+"/360_view_phu_du_an.webp",links:[{nodeId:"view_chinh_du_an",x:1500,y:780}]},{id:"view_biet_thu",panorama:o+"/360_view_biet_thu.webp",links:[{nodeId:"view_chinh_du_an",x:1500,y:780}]},{id:"cau_my_thuan",panorama:o+"/360_cau_my_thuan.webp",links:[{nodeId:"view_chinh_du_an",x:1500,y:780}]},{id:"trung_tam_vinh_long",panorama:o+"/360_trung_tam_vinh_long.webp",links:[{nodeId:"view_chinh_du_an",x:1500,y:780}]}],c={tong_quan:r,tien_ich:r,can_ho_mau:r},d={tong_quan:l,tien_ich:l,can_ho_mau:[]}},270:function(n,t,e){var content=e(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(116).default)("63b03c7c",content,!0,{sourceMap:!1})},271:function(n,t,e){"use strict";e.r(t);e(23),e(21),e(22),e(11),e(31),e(18),e(32);var o=e(10),r=e(269);function l(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}function c(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}var d={props:{shouldDisplay:Boolean},computed:{currentView:function(){return this.$store.state.currentView},currentMode:function(){return this.$store.state.currentMode},isAutoPlaying:function(){return this.$store.state.isAutoPlaying}},methods:{onChange:function(view){return this.isAutoPlaying&&this.$store.commit("stopAutoplay"),this.$store.commit("setView",view.id)}},watch:{currentMode:function(n){this.items=r.b[n]}},data:function(){return{slider:void 0,items:r.c,carousel:{isDown:!1}}},mounted:function(){var n=this;this.slider=document.querySelector("#carousel"),this.slider.addEventListener("mousedown",(function(t){n.slider.classList.add("active"),n.carousel=c(c({},n.carousel),{},{isDown:!0,startX:t.pageX-n.slider.offsetLeft,scrollLeft:n.slider.scrollLeft})})),this.slider.addEventListener("mouseleave",(function(){n.carousel=c(c({},n.carousel),{},{isDown:!1}),n.slider.classList.remove("active")})),this.slider.addEventListener("mouseup",(function(){n.carousel=c(c({},n.carousel),{},{isDown:!1}),n.slider.classList.remove("active")})),this.slider.addEventListener("mousemove",(function(t){if(n.carousel.isDown){t.preventDefault();var e=3*(t.pageX-n.slider.offsetLeft-n.carousel.startX);n.slider.scrollLeft=n.carousel.scrollLeft-e}}))}},m=(e(274),e(36)),component=Object(m.a)(d,(function(){var n=this,t=n._self._c;return t("main",{class:{hidden:!this.shouldDisplay}},[t("ul",{staticClass:"carousel",attrs:{id:"carousel"}},n._l(n.items,(function(e){return t("li",{key:e.id,staticClass:"carousel-item",class:{active:e.id===n.currentView},on:{click:function(t){return n.onChange(e)}}},[t("nuxt-img",{staticClass:"carousel-item-image",attrs:{src:e.imgThumb}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports},273:function(n,t,e){var content=e(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(116).default)("688ca0dd",content,!0,{sourceMap:!1})},274:function(n,t,e){"use strict";e(270)},275:function(n,t,e){var o=e(115)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\nmain{\n  display:flex;\n  flex:1;\n  border:1px solid #deb887\n}\nul li{\n  margin-right:16px\n}\nul li:last-child{\n  margin-right:0\n}\n.carousel{\n  flex:1;\n  overflow-x:scroll;\n  overflow-y:hidden;\n  white-space:nowrap;\n  transition:all .5s;\n  transform:scale(.98);\n  will-change:transform;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none;\n  cursor:pointer;\n  -ms-overflow-style:none;\n  scrollbar-width:none;\n  padding:4px;\n  margin:0\n}\n.carousel.active{\n  cursor:grabbing;\n  cursor:-webkit-grabbing\n}\n.carousel::-webkit-scrollbar{\n  display:none\n}\n.carousel-item{\n  display:inline-flex;\n  width:128px;\n  font-size:0;\n  opacity:.5;\n  height:88px;\n  justify-content:center;\n  align-items:center;\n  transition:all .2s;\n  border:2px solid #fff;\n  border-radius:4px\n}\n.carousel-item.active{\n  opacity:1;\n  transition:all .2s;\n  padding:0\n}\n.carousel-item-image{\n  margin:0;\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content\n}\n.carousel-item-label{\n  position:absolute;\n  bottom:4px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},276:function(n,t,e){var content=e(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(116).default)("744605ef",content,!0,{sourceMap:!1})},278:function(n,t,e){"use strict";e(273)},279:function(n,t,e){var o=e(115)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.viewer{\n  width:100vw;\n  height:100vh;\n  background-color:#f0f8ff\n}\n.marker{\n  width:8px;\n  height:8px;\n  border-radius:4px\n}\n.marker,.marker-stick{\n  background-color:#fff;\n  position:absolute\n}\n.marker-stick{\n  width:1px;\n  height:100px;\n  bottom:0;\n  right:3.5px\n}\n.marker-bubble{\n  width:90px;\n  height:90px;\n  position:absolute;\n  bottom:90px;\n  right:-44px;\n  border-radius:45px;\n  border:2px solid #eeaa10;\n  outline:12px solid hsla(0,0%,100%,.4);\n  overflow:hidden;\n  transition:all .25s\n}\n.marker-bubble:hover{\n  width:140px;\n  height:140px;\n  bottom:116px;\n  right:-69px;\n  border-radius:70px\n}\n.marker-bubble-img{\n  width:100%;\n  margin:0\n}\n.marker-label{\n  padding:4px 12px;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  background-color:#772e0b;\n  color:#eeaa10;\n  border-radius:16px;\n  font-weight:700\n}\n.marker-banner,.marker-label{\n  position:absolute;\n  transform:translateX(-50%)\n}\n.marker-banner{\n  display:flex\n}\n.marker-banner-icon{\n  background-color:#8b0000;\n  padding:4px\n}\n.marker-banner-label{\n  background-color:#fff;\n  padding:4px 8px;\n  width:-webkit-max-content;\n  width:-moz-max-content;\n  width:max-content;\n  color:#8b0000\n}\ni{\n  color:#fff\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},280:function(n,t,e){"use strict";e(276)},281:function(n,t,e){var o=e(115)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.navbar{\n  position:absolute;\n  bottom:16px;\n  width:50%;\n  max-width:720px;\n  min-width:360px;\n  background-color:rgba(146,100,60,.8);\n  left:50%;\n  transform:translate(-50%);\n  flex-direction:column;\n  z-index:10;\n  border-radius:4px\n}\n.carousel_container{\n  border:1px solid #deb887\n}\n.menu_button_container{\n  flex:1;\n  padding:0 8px;\n  justify-content:space-between\n}\n.btn{\n  background-color:transparent;\n  border:0;\n  color:#fff;\n  margin:0 4px;\n  padding:2px;\n  transition:all .2s\n}\n.btn:hover{\n  transform:scale(1.3)\n}\nimg{\n  width:20%;\n  margin-left:4%\n}\n.menu_button{\n  text-align:center;\n  border:1px solid #fff;\n  width:30%;\n  font-weight:600;\n  font-size:14px;\n  background-color:#d3d3d3;\n  color:#92643c;\n  transition:all .2s;\n  opacity:.9\n}\n.menu_button:hover{\n  transform:scale(1.1)\n}\n.menu_button.active{\n  background-color:#fff;\n  opacity:1\n}\n.action{\n  padding:16px;\n  border:1px solid #deb887\n}\ni.active{\n  -webkit-animation-name:spin;\n          animation-name:spin;\n  -webkit-animation-duration:2s;\n          animation-duration:2s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite;\n  -webkit-animation-timing-function:linear;\n          animation-timing-function:linear\n}\n@-webkit-keyframes spin{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes spin{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},282:function(n,t,e){"use strict";e.r(t);var o=e(25),r=(e(284),e(272)),l=e(286),c=e(287),d=e(288),m=e(269),h=(e(289),e(290),e(291),e(292),{data:function(){return{viewer:Object(o.a)(r.Viewer),tour:null,compass:null,autoplay1:null,autoplay2:null,autoplay3:null,marker:null}},computed:{currentView:function(){return this.$store.state.currentView},currentMode:function(){return this.$store.state.currentMode},isAutoPlaying:function(){return this.$store.state.isAutoPlaying}},watch:{currentView:function(n){var t;null===(t=this.tour)||void 0===t||t.setCurrentNode(n),this.isAutoPlaying&&this.autoRotating()},currentMode:function(n){var t,e;if("tong_quan"===n)null===(e=this.compass)||void 0===e||e.show();else if(n="tien_ich"){var o;null===(o=this.compass)||void 0===o||o.hide()}this.$store.commit("setView",m.a[n][0].id),null===(t=this.tour)||void 0===t||t.setNodes(m.a[n])},isAutoPlaying:function(n){n?this.autoRotating():this.onClearRotating()}},methods:{intro:function(){var n=this;this.viewer.renderer.camera.far*=2,new r.Animation({properties:{lat:{start:-Math.PI/2,end:0},long:{start:Math.PI,end:0},zoom:{start:0,end:50},fisheye:{start:4,end:0}},duration:2e3,easing:"inOutQuad",onTick:function(t){n.viewer.setOption("fisheye",t.fisheye),n.viewer.rotate({longitude:t.long,latitude:t.lat}),n.viewer.zoom(t.zoom)}})},onClearRotating:function(){var n,t,e,o,r,l;null===(n=this.autoplay1)||void 0===n||null===(t=n.cancel)||void 0===t||t.call(n),null===(e=this.autoplay2)||void 0===e||null===(o=e.cancel)||void 0===o||o.call(e),null===(r=this.autoplay3)||void 0===r||null===(l=r.cancel)||void 0===l||l.call(r)},autoRotating:function(){var n,t=this,e=this.viewer.getPosition(),o=this.viewer.getZoomLevel(),l=m.a[this.currentMode],c=l.findIndex((function(n){return n.id===t.currentView}));this.autoplay1=new r.Animation({properties:{long:{start:e.longitude,end:Math.PI/2},lat:{start:e.latitude,end:0},zoom:{start:o,end:10}},duration:2e3,onTick:function(n){t.viewer.rotate({longitude:n.long,latitude:n.lat}),t.viewer.zoom(n.zoom)}}),null===(n=this.autoplay1)||void 0===n||n.then((function(n){var e;t.autoplay1=null,n&&(t.autoplay2=new r.Animation({properties:{long:{start:Math.PI/2,end:2.5*Math.PI},lat:{start:0,end:0}},duration:12e3,onTick:function(n){t.viewer.rotate({longitude:n.long,latitude:n.lat})}}),null===(e=t.autoplay2)||void 0===e||e.then((function(n){var e;t.autoplay2=null,n&&(t.autoplay3=new r.Animation({properties:{long:{start:2.5*Math.PI,end:2.5*Math.PI},lat:{start:0,end:-Math.PI/2}},duration:2e3,onTick:function(n){t.viewer.rotate({longitude:n.long,latitude:n.lat})}}),null===(e=t.autoplay3)||void 0===e||e.then((function(n){var e,o;(t.autoplay3=null,n)&&(c<l.length-1?t.$store.commit("setView",null===(e=l[c+1])||void 0===e?void 0:e.id):t.$store.commit("setView",null===(o=l[0])||void 0===o?void 0:o.id))})))})))}))}},mounted:function(){var n=this;this.viewer=new r.Viewer({container:document.querySelector("#viewer"),defaultLat:-.5,defaultLong:1.6,plugins:[l.MarkersPlugin,[d.CompassPlugin,{position:"top right"}],[c.VirtualTourPlugin,{dataMode:c.VirtualTourPlugin.MODE_CLIENT,positionMode:c.VirtualTourPlugin.MODE_MANUAL,renderMode:c.VirtualTourPlugin.MODE_MARKERS,nodes:m.a.tong_quan}]]}),this.viewer.on("ready",(function(){n.viewer.navbar.hide(),n.tour=n.viewer.getPlugin(c.VirtualTourPlugin),n.compass=n.viewer.getPlugin(d.CompassPlugin),n.marker=n.viewer.getPlugin(l.MarkersPlugin),n.viewer.on("click",(function(){n.$store.commit("stopAutoplay")})),n.$store.commit("setView",m.a.tong_quan[0].id),n.intro()}))}}),f=(e(278),e(36)),component=Object(f.a)(h,(function(){return(0,this._self._c)("div",{staticClass:"viewer",attrs:{id:"viewer"}})}),[],!1,null,null,null);t.default=component.exports},283:function(n,t,e){"use strict";e.r(t);var o={components:{ThumbCarousel:e(271).default},computed:{currentMode:function(){return this.$store.state.currentMode},isAutoPlaying:function(){return this.$store.state.isAutoPlaying}},methods:{onFullscreen:function(){var n=this.container;return this.isFullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),this.isFullscreen=!this.isFullscreen},toggleDisplayCarousel:function(){this.shouldDisplayCarousel=!this.shouldDisplayCarousel},togglePlayAudio:function(){this.shouldPlayAudio=!this.shouldPlayAudio},onClickMode:function(n){this.$store.commit("setMode",n)},toggleAutoPlay:function(){this.$store.commit("toggleAutoPlay")}},data:function(){return{container:null,audio:null,isFullscreen:!1,shouldDisplayCarousel:!0,shouldPlayAudio:!0}},watch:{shouldPlayAudio:function(n){var t,e;n?null===(t=this.audio)||void 0===t||t.play():null===(e=this.audio)||void 0===e||e.pause()}},mounted:function(){var n=this;this.container=document.getElementById("app"),this.audio=document.getElementById("myAudio"),this.audio.addEventListener("canplaythrough",(function(){return n.audio.play().catch((function(t){return window.addEventListener("click",(function(){return n.audio.play()}),{once:!0})}))}))}},r=(e(280),e(36)),component=Object(r.a)(o,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"navbar"},[t("ThumbCarousel",{attrs:{shouldDisplay:this.shouldDisplayCarousel}}),n._v(" "),t("div",{staticClass:"action"},[t("button",{staticClass:"btn",on:{click:this.onFullscreen}},[this.isFullscreen?n._e():t("i",{staticClass:"material-icons md-48"},[n._v("fullscreen")]),n._v(" "),this.isFullscreen?t("i",{staticClass:"material-icons md-48"},[n._v("fullscreen_exit")]):n._e()]),n._v(" "),t("button",{staticClass:"btn",on:{click:this.toggleDisplayCarousel}},[this.shouldDisplayCarousel?n._e():t("i",{staticClass:"material-icons md-48"},[n._v("arrow_circle_up")]),n._v(" "),this.shouldDisplayCarousel?t("i",{staticClass:"material-icons md-48"},[n._v("arrow_circle_down")]):n._e()]),n._v(" "),t("div",{staticClass:"menu_button_container"},[t("button",{staticClass:"menu_button",class:{active:"tong_quan"===n.currentMode},on:{click:function(t){return n.onClickMode("tong_quan")}}},[n._v("\n        Tổng quan\n      ")]),n._v(" "),t("button",{staticClass:"menu_button",class:{active:"tien_ich"===n.currentMode},on:{click:function(t){return n.onClickMode("tien_ich")}}},[n._v("\n        Tiện ích\n      ")]),n._v(" "),t("button",{staticClass:"menu_button"},[n._v("Căn hộ mẫu")])]),n._v(" "),t("button",{staticClass:"btn",on:{click:this.toggleAutoPlay}},[t("i",{staticClass:"material-icons md-48",class:{active:this.isAutoPlaying}},[n._v("cameraswitch")])]),n._v(" "),t("button",{staticClass:"btn",on:{click:this.togglePlayAudio}},[this.shouldPlayAudio?t("i",{staticClass:"material-icons md-48"},[n._v("volume_up")]):n._e(),n._v(" "),this.shouldPlayAudio?n._e():t("i",{staticClass:"material-icons md-48"},[n._v("volume_off")])])]),n._v(" "),n._m(0)],1)}),[function(){var n=this._self._c;return n("audio",{staticClass:"hidden",attrs:{id:"myAudio",controls:"",autoplay:""}},[n("source",{attrs:{src:"/web-panorama-static/sound.mp3",type:"audio/mpeg"}})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ThumbCarousel:e(271).default})},293:function(n,t,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(116).default)("3c64e4f0",content,!0,{sourceMap:!1})},298:function(n,t,e){"use strict";e(293)},299:function(n,t,e){var o=e(115)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\ndiv,html{\n  display:flex\n}\nimg,nuxt-image{\n  pointer-events:none\n}\ni{\n  -moz-user-select:none;\n  -webkit-user-select:none;\n  user-select:none\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},305:function(n,t,e){"use strict";e.r(t);var o=e(282),r=e(283),l={name:"IndexPage",components:{PanoramaViewer:o.default,ActionController:r.default},mounted:function(){this.$store.commit("initializeState")}},c=(e(298),e(36)),component=Object(c.a)(l,(function(){var n=this._self._c;return n("div",{attrs:{id:"app"}},[n("PanoramaViewer",{ref:"panoramaViewer"}),this._v(" "),n("ActionController")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PanoramaViewer:e(282).default,ActionController:e(283).default})}}]);