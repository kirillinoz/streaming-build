exports.id=667,exports.ids=[667],exports.modules={4739:(e,t,r)=>{var s,o,i=Object.create,l=Object.defineProperty,a=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of n(t))u.call(e,o)||o===r||l(e,o,{get:()=>t[o],enumerable:!(s=a(t,o))||s.enumerable});return e},c=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>b}),e.exports=h(l({},"__esModule",{value:!0}),y);var m=(o=null!=(s=r(3729))?i(p(s)):{},h(s&&s.__esModule?o:l(o,"default",{value:s,enumerable:!0}),s)),f=r(8662),g=r(8623);class b extends m.Component{constructor(){super(...arguments),c(this,"callPlayer",f.callPlayer),c(this,"duration",null),c(this,"currentTime",null),c(this,"secondsLoaded",null),c(this,"mute",()=>{}),c(this,"unmute",()=>{}),c(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((e,t)=>{this.currentTime=e,this.duration=t}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){let{url:e,config:t}=this.props,r=e.match(g.MATCH_URL_MIXCLOUD)[1],s=(0,f.queryString)({...t.options,feed:`/${r}/`});return m.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:`https://www.mixcloud.com/widget/iframe/?${s}`,frameBorder:"0",allow:"autoplay"})}}c(b,"displayName","Mixcloud"),c(b,"canPlay",g.canPlay.mixcloud),c(b,"loopOnEnded",!0)}};