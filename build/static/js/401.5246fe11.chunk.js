"use strict";(self.webpackChunkadmin_dashboard=self.webpackChunkadmin_dashboard||[]).push([[401],{8409:(e,r,s)=>{s.d(r,{R:()=>d});var a=s(2791),n=s(7590),t=s(1827),l=s(4732),i=s(184);const o=e=>(e||[]).map((e=>({id:e.id,name:e.name,value:e.id}))),d=e=>{let{control:r,name:s,parent:d,label:c="Agents",errors:m,...u}=e;const[h,x]=(0,a.useState)({size:20,page:0,search:"",totalItems:0,id:1}),[p,g]=(0,a.useState)(""),v=(0,l.Z)(p,500),[Z,j]=(0,a.useState)([]),[f,P]=(0,a.useState)({id:"",name:"",value:""});(0,a.useEffect)((()=>{g(v),x((e=>({...e,search:v})))}),[v]);const{data:b,isFetching:w}=(0,t.aN)({size:h.size,page:h.page,search:h.search,id:1},{refetchOnMountOrArgChange:!0});function S(e){const r=e.target;if(r.scrollHeight===r.scrollTop+r.clientHeight&&(b.data.page+1)*b.data.size<b.data.totalItems)return x((e=>({...e,page:h.page+1})))}(0,a.useEffect)((()=>{x({search:v||"",id:1,totalItems:0,page:0,size:20}),j([])}),[v,d]),(0,a.useEffect)((()=>j(d?e=>{var r;const s=[...e,...o(null===b||void 0===b||null===(r=b.data)||void 0===r?void 0:r.data)].slice();return s.unshift((e=>({id:e.id,name:e.name,value:e.value}))(d)),s}:e=>[...e,...o(null===b||void 0===b?void 0:b.data.data)])),[b,d]),(0,a.useEffect)((()=>{null!==f&&void 0!==f&&f.id&&j((e=>{const r=e.slice();return r.unshift(f),r}))}),[f,b]);const y=(0,a.useMemo)((()=>{const e=[],r=new Set;for(const s of Z)r.has(s.id)||(r.add(s.id),e.push(s));return e}),[Z]);return(0,i.jsx)(n.P,{onScroll:S,name:s,label:c,options:y,control:r,MenuProps:{className:"infinity-select",autoFocus:!1,PaperProps:{onScroll:S},style:{maxHeight:500,padding:0}},isFetching:w,onSearch:g,searchTerm:p,errors:m,setSelected:P,...u})}},7590:(e,r,s)=>{s.d(r,{P:()=>Z,n:()=>j});var a=s(5403),n=s(8096),t=s(4925),l=s(9321),i=s(9834),o=s(8550),d=s(3466),c=s(3786),m=s(697),u=s(3239),h=s(7071),x=s(2791),p=s(1134),g=s(184);const v=e=>{var r;let{control:s,name:x,label:v,options:Z,isFetching:j,errors:f,searchTerm:P,onSearch:b,setSelected:w,...S}=e;return s?(0,g.jsx)(p.Qr,{control:s,name:x,render:e=>{var r;let{field:s}=e;return(0,g.jsxs)(n.Z,{fullWidth:!0,children:[(0,g.jsx)(t.Z,{id:"demo-simple-select-label",sx:{color:null!==f&&void 0!==f&&f[x]&&!s.value?"#FF1943":"inherit"},children:v}),(0,g.jsxs)(l.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:v,value:(null===s||void 0===s?void 0:s.value)||"",error:!(null===f||void 0===f||!f[x])&&!s.value,...s,...S,children:[b&&(0,g.jsx)(i.Z,{children:(0,g.jsx)(o.Z,{size:"small",autoFocus:!0,placeholder:"Type to search...",fullWidth:!0,InputProps:{startAdornment:(0,g.jsx)(d.Z,{position:"start",children:(0,g.jsx)(a.Z,{})})},value:P,onChange:e=>b(e.target.value),onKeyDown:e=>{"Escape"!==e.key&&e.stopPropagation()}})}),null===Z||void 0===Z?void 0:Z.map((e=>(0,g.jsx)(c.Z,{value:e.value,onKeyDown:e=>e.stopPropagation(),onClick:()=>{return r=e,void(null===w||void 0===w||w(r));var r},children:e.name},e.id))),j&&(0,g.jsx)(m.Z,{display:"flex",justifyContent:"center",marginTop:"12px",marginBottom:"12px",children:(0,g.jsx)(u.Z,{size:32,disableShrink:!0,thickness:3})})]}),(null===f||void 0===f?void 0:f[x])&&!s.value&&(0,g.jsx)(h.Z,{sx:{color:"#FF1943"},children:null===f||void 0===f||null===(r=f[x])||void 0===r?void 0:r.message})]})}}):(0,g.jsxs)(n.Z,{fullWidth:!0,children:[(0,g.jsx)(t.Z,{id:"demo-simple-select-label",sx:{color:null!==f&&void 0!==f&&f[x]?"#FF1943":"inherit"},children:v}),(0,g.jsx)(l.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:v,...S,error:!(null===f||void 0===f||!f[x]),children:null===Z||void 0===Z?void 0:Z.map((e=>(0,g.jsx)(c.Z,{value:e.value,children:e.name},e.id)))}),!(null===f||void 0===f||!f[x])&&(0,g.jsx)(h.Z,{sx:{color:"#FF1943"},children:null===f||void 0===f||null===(r=f[x])||void 0===r?void 0:r.message})]})},Z=(0,x.memo)(v),j=e=>{let{label:r,name:s,errors:a,register:n,...t}=e;return(0,g.jsx)(o.Z,{label:r,error:!!a[s],helperText:a[s]?a[s].message:"",fullWidth:!0,...n(s),...t})}},5756:(e,r,s)=>{s.d(r,{Z:()=>h});var a=s(697),n=s(9164),t=s(1889),l=s(4708),i=s(5527),o=s(6934),d=s(6907),c=s(6871),m=s(184);const u=(0,o.ZP)(a.Z)((()=>"\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    display: flex;\n    align-items: center;\n    height: 100vh;\n")),h=e=>{let{children:r}=e;const s=(0,c.TH)();return(0,m.jsxs)(u,{children:[(0,m.jsx)(d.ql,{children:(0,m.jsx)("title",{children:"/register"===s.pathname?"Sign Up":"Sign In"})}),(0,m.jsx)(n.Z,{component:"main",maxWidth:"lg",children:(0,m.jsx)(a.Z,{children:(0,m.jsxs)(t.ZP,{container:!0,children:[(0,m.jsx)(l.ZP,{}),(0,m.jsx)(t.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center",height:"80vh"}}),(0,m.jsx)(t.ZP,{item:!0,xs:12,sm:8,md:5,component:i.Z,elevation:6,square:!0,children:(0,m.jsx)(a.Z,{sx:{mx:4,display:"flex",flexDirection:"column",alignItems:"center",height:"100%",justifyContent:"center"},children:r})})]})})})]})}},9419:(e,r,s)=>{s.d(r,{Z:()=>f});var a=s(4695),n=s(9709),t=s(697),l=s(1889),i=s(8550),o=s(2791),d=s(1134),c=s(4349),m=s(6871),u=s(7590),h=s(8409),x=s(1927),p=s(5674),g=s(7837),v=s(8007),Z=s(184);const j=v.Ry().shape({username:v.Z_().trim("Username no space").matches(/[a-zA-Z]/,"Username can only contain letters.").required("Username is required"),name:v.Z_().matches(/[a-zA-Z]/,"Name can only contain letters.").required("First name is required"),type:v.Z_().nullable(),rate:v.Rx().positive().moreThan(0,"Rate is required").nullable(),roleId:v.Rx().positive().moreThan(0,"Role is required").nullable(),parentAgentId:v.Z_().required("Parent Agent is required"),email:v.Z_().email("Invalid email format").required("First name is required"),password:v.Z_().min(8,"Password is too short - should be 8 chars minimum.").matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,"Password contains characters, numbers and at least one special character").required("Password is required"),confirmPassword:v.Z_().oneOf([v.iH("password"),null],"Passwords must match").required("Password is required")}),f=e=>{let{isUserRegister:r=!1,isAgentRegister:s=!1,isSubmit:v=!1,setIsSubmit:f,refetch:P,onClose:b}=e;const[w,{isLoading:S}]=(0,x.l4)(),{notify:y,message:q}=(0,g.p)(),I=(0,m.s0)(),{register:T,handleSubmit:F,reset:A,control:R,setValue:C,formState:{errors:k}}=(0,d.cI)({resolver:(0,a.X)(j),defaultValues:{name:"",rate:r?null:0,email:"",username:"",parentAgentId:r?null:"",type:r?"player":"agent",roleId:r?2:0,password:"",confirmPassword:""}});(0,o.useEffect)((()=>{v&&(F(E)(),v&&f())}),[v]);const{data:z}=(0,p.ev)({},{refetchOnMountOrArgChange:!0}),W=(0,o.useMemo)((()=>{var e;return null===z||void 0===z||null===(e=z.data)||void 0===e?void 0:e.map((e=>({id:e.id,name:e.name,value:e.id})))}),[z]),E=async e=>{try{const a=await w(e).unwrap();a&&"CREATED"===a.message&&(A(),y({message:"Registered Successfully"}),r||s?(P(),b()):I("/login"))}catch(a){return"DUPLICATE"===a.data.message?y({message:"Duplicated username or email",type:"error"}):y({message:q.ERROR,type:"error"})}};return(0,Z.jsxs)(t.Z,{component:"form",noValidate:!0,onSubmit:F(E),sx:{mt:1},children:[(0,Z.jsxs)(l.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,Z.jsx)(l.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,label:"Name",autoFocus:!0,error:!!k.name,helperText:k.name?k.name.message:"",...T("name"),onBlur:e=>C("name",e.target.value.trim())})}),(0,Z.jsx)(l.ZP,{item:!0,xs:12,marginY:1,children:(0,Z.jsxs)(l.ZP,{container:!0,columnSpacing:{xs:1},rowSpacing:2,children:[(0,Z.jsx)(l.ZP,{item:!0,xs:r?12:8,children:(0,Z.jsx)(h.R,{control:R,name:"parentAgentId",errors:k})}),!r&&(0,Z.jsx)(l.ZP,{item:!0,xs:4,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,label:"Rate",autoFocus:!0,error:!!k.rate,helperText:k.rate?k.rate.message:"",...T("rate"),onBlur:e=>C("rate",parseFloat(e.target.value.trim()))})})]})}),(0,Z.jsx)(l.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(l.ZP,{container:!0,columnSpacing:{xs:1},rowSpacing:2,children:[(0,Z.jsx)(l.ZP,{item:!0,xs:r?12:8,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,label:"Email",type:"email",error:!!k.email,helperText:k.email?k.email.message:"",...T("email"),onBlur:e=>C("email",e.target.value.trim())})}),!r&&(0,Z.jsx)(l.ZP,{item:!0,xs:4,children:(0,Z.jsx)(u.P,{label:"Role",name:"roleId",options:W,errors:k,control:R})})]})}),(0,Z.jsx)(l.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,label:(0,Z.jsx)(c.Z,{id:"label.username"}),sx:{my:1},error:!!k.username,helperText:k.username?k.username.message:"",...T("username"),onBlur:e=>C("username",e.target.value.trim())})}),(0,Z.jsx)(l.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(l.ZP,{container:!0,columnSpacing:{xs:1},children:[(0,Z.jsx)(l.ZP,{item:!0,xs:6,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,label:"Password",type:"password",error:!!k.password,helperText:k.password?k.password.message:"",...T("password"),onBlur:e=>C("password",e.target.value.trim())})}),(0,Z.jsx)(l.ZP,{item:!0,xs:6,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,label:"Confirm Password",type:"password",error:!!k.confirmPassword,helperText:k.confirmPassword?k.confirmPassword.message:"",...T("confirmPassword"),onBlur:e=>C("confirmPassword",e.target.value.trim())})})]})})]}),!r&&!s&&(0,Z.jsx)(n.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:S,children:"Sign Up"})]})}},1401:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});var a=s(697),n=s(890),t=s(5756),l=s(3504),i=s(9419),o=s(184);const d=()=>(0,o.jsxs)(t.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(n.Z,{component:"h1",variant:"h5",width:"100%",textAlign:"center",children:"Sign Up"}),(0,o.jsx)(i.Z,{})]}),(0,o.jsx)(a.Z,{width:"100%",textAlign:"right",children:(0,o.jsx)(l.rU,{to:"/login",children:"Already have account? Sign in"})})]})},4732:(e,r,s)=>{s.d(r,{Z:()=>n});var a=s(2791);const n=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;const[s,n]=(0,a.useState)(e);return(0,a.useEffect)((()=>{const s=setTimeout((()=>{n(e)}),r);return()=>{clearTimeout(s)}}),[e,r]),s}},5403:(e,r,s)=>{var a=s(4836);r.Z=void 0;var n=a(s(5649)),t=s(184),l=(0,n.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");r.Z=l}}]);
//# sourceMappingURL=401.5246fe11.chunk.js.map