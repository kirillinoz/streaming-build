(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8247:function(e,t,a){Promise.resolve().then(a.bind(a,1191))},1191:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var s=a(7437),r=a(2265),l=a(732),i=e=>{let{id:t,cover:a,title:r}=e;return(0,s.jsxs)("div",{className:"card flex flex-col cursor-pointer",children:[(0,s.jsx)("a",{href:"/".concat(t),className:"rounded-lg overflow-hidden",children:(0,s.jsx)(l.E.img,{src:a,alt:r,whileHover:{scale:1.03},style:{width:"100%",height:"auto"}})}),(0,s.jsx)("div",{className:"text-left text-md font-bold mt-2 ml-2",children:r})]})},n=a(575),o=a(3026),d=a(2549),c=a(2169);let u=o.fC,f=o.xz,m=o.h_;o.x8;let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(o.aV,{ref:t,className:(0,c.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});x.displayName=o.aV.displayName;let p=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(m,{children:[(0,s.jsx)(x,{}),(0,s.jsxs)(o.VY,{ref:t,className:(0,c.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:[r,(0,s.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(d.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=o.VY.displayName;let g=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,c.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};g.displayName="DialogHeader";let h=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,c.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};h.displayName="DialogFooter";let v=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(o.Dx,{ref:t,className:(0,c.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});v.displayName=o.Dx.displayName;let j=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(o.dk,{ref:t,className:(0,c.cn)("text-sm text-muted-foreground",a),...r})});j.displayName=o.dk.displayName;let y=r.forwardRef((e,t)=>{let{className:a,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,c.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...l})});y.displayName="Input";var b=a(6743);let N=(0,a(9213).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),w=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(b.f,{ref:t,className:(0,c.cn)(N(),a),...r})});w.displayName=b.f.displayName;var k=a(3177);let z=r.forwardRef((e,t)=>{let{className:a,value:r,...l}=e;return(0,s.jsx)(k.fC,{ref:t,className:(0,c.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary",a),...l,children:(0,s.jsx)(k.z$,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:"translateX(-".concat(100-(r||0),"%)")}})})});z.displayName=k.fC.displayName;var C=a(509);let R=async e=>(await fetch("/api/upload/title",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e})})).json(),_=async(e,t)=>{let a=new FormData;return a.append("cover",t),(await fetch("/api/upload/cover/".concat(e),{method:"POST",body:a})).json()},S=async(e,t)=>{let a=new FormData;return a.append("video",t),(await fetch("/api/upload/video/".concat(e),{method:"POST",body:a})).json()};function D(){let[e,t]=(0,r.useState)([]),[a,o]=(0,r.useState)(!1),[d,c]=(0,r.useState)(0),[m,x]=(0,r.useState)(!1),b=(0,r.useRef)(null),N=(0,r.useRef)(null);(0,r.useEffect)(()=>{(0,C._)().then(e=>t(e))},[]);let k=async e=>{var a,s,r,l;e.preventDefault();let i=e.target.title.value,n=null===(s=b.current)||void 0===s?void 0:null===(a=s.files)||void 0===a?void 0:a[0],d=null===(l=N.current)||void 0===l?void 0:null===(r=l.files)||void 0===r?void 0:r[0];if(!n||!d)return alert("Please select a cover image and video");x(!1),e.target.reset(),b.current.value="",N.current.value="",o(!0),c(0);let u=await R(i);c(u.progress),c((await _(u.id,n)).progress),c((await S(u.id,d)).progress),c(0),o(!1),t(await (0,C._)())},D=async()=>{t(await (0,C._)())};return(0,s.jsxs)(u,{open:m,onOpenChange:x,children:[(0,s.jsxs)("main",{className:"flex min-h-screen items-center flex-col p-8 xs:p-16 sm:p-24",children:[(0,s.jsx)("div",{className:"z-10 max-w-5xl w-full items-center justify-between",children:(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-center",children:[(0,s.jsx)("h1",{className:"text-2xl",children:"Your collection"}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row w-full sm:w-fit",children:[(0,s.jsx)(f,{asChild:!0,children:(0,s.jsx)(n.z,{className:"mt-12 sm:mr-3 sm:mt-0",children:"New Movie"})}),(0,s.jsx)(n.z,{className:"mt-3 sm:mt-0",variant:"outline",onClick:D,children:"Refresh"})]})]})}),a&&(0,s.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"z-10 max-w-5xl w-full items-center justify-between mt-12",children:(0,s.jsx)(z,{value:d})}),(0,s.jsx)("div",{className:"z-10 max-w-5xl w-full items-center justify-between mt-12",children:(0,s.jsx)("div",{className:"flex justify-between",children:(0,s.jsx)("div",{className:"grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:e.map((e,t)=>(0,s.jsx)(i,{id:e.id,cover:"data:image/jpg;base64,".concat(e.cover),title:e.title},t))})})})]}),(0,s.jsx)(p,{className:"sm:max-w-[425px]",children:(0,s.jsxs)("form",{onSubmit:k,children:[(0,s.jsxs)(g,{children:[(0,s.jsx)(v,{children:"New Movie"}),(0,s.jsx)(j,{children:"Add a new movie to your existing collection."})]}),(0,s.jsxs)("div",{className:"grid gap-4 py-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,s.jsx)(w,{htmlFor:"title",className:"text-right",children:"Title"}),(0,s.jsx)(y,{id:"title",placeholder:"Pulp Fiction",className:"col-span-3",required:!0})]}),(0,s.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,s.jsx)(w,{htmlFor:"cover",className:"text-right",children:"Cover"}),(0,s.jsx)(y,{id:"cover",type:"file",accept:".jpg",className:"col-span-3",required:!0,ref:b})]}),(0,s.jsxs)("div",{className:"grid grid-cols-4 items-center gap-4",children:[(0,s.jsx)(w,{htmlFor:"video",className:"text-right",children:"Video"}),(0,s.jsx)(y,{id:"video",type:"file",accept:".mp4",className:"col-span-3",required:!0,ref:N})]})]}),(0,s.jsx)(h,{children:(0,s.jsx)(n.z,{type:"submit",children:"Save changes"})})]})})]})}},575:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var s=a(7437),r=a(2265),l=a(7256),i=a(9213),n=a(2169);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,s.jsx)(u,{className:(0,n.cn)(o({variant:r,size:i,className:a})),ref:t,...c})});d.displayName="Button"},2169:function(e,t,a){"use strict";a.d(t,{cn:function(){return l}});var s=a(7042),r=a(4769);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}},509:function(e,t,a){"use strict";a.d(t,{_:function(){return s}});let s=async()=>{let e=await fetch("/api/collection");return console.log(e),e.json()}}},function(e){e.O(0,[18,583,971,938,744],function(){return e(e.s=8247)}),_N_E=e.O()}]);