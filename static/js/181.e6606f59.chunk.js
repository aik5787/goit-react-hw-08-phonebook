"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[181],{2181:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var r=t(8410),s=t(9589),a=t(9439),i=t(2791),c=t(9434),o=t(3661),l=t(9544),d=t(9657),u=t(930),h=t(6336),m=t(9055),x=t(3329),j=function(){var e=(0,i.useState)(""),n=(0,a.Z)(e,2),t=n[0],s=n[1],j=(0,i.useState)(""),p=(0,a.Z)(j,2),f=p[0],v=p[1],b=(0,c.v9)(o.K2),C=(0,c.I0)(),g={name:t,number:f};return(0,x.jsx)(r.W,{maxW:"md",children:(0,x.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),""!==t.trim()&&""!==f.trim())&&(b.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts.")):(C((0,l.uK)(g)),s(""),v("")))},children:[(0,x.jsxs)(d.NI,{children:[(0,x.jsx)(u.l,{htmlFor:"nameInput",children:"Name"}),(0,x.jsx)(h.I,{id:"nameInput",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(e){s(e.target.value)}})]}),(0,x.jsxs)(d.NI,{children:[(0,x.jsx)(u.l,{htmlFor:"numberInput",children:"Number"}),(0,x.jsx)(h.I,{id:"numberInput",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,onChange:function(e){v(e.target.value)}})]}),(0,x.jsx)(m.z,{mt:4,type:"submit",disabled:!t||!f,children:"Add contact"})]})})},p=t(824),f=t(6895),v=function(){var e=(0,c.v9)(f.zK),n=(0,c.I0)();return(0,x.jsx)(p.xu,{mb:8,children:(0,x.jsxs)(d.NI,{children:[(0,x.jsx)(u.l,{htmlFor:"nameFilterInput",children:"Find contacts by name"}),(0,x.jsx)(h.I,{id:"nameFilterInput",type:"text",value:e,onChange:function(e){n((0,f.Tv)(e.target.value))}})]})})},b=t(1022),C=t(1339),g=t(6484),y=t(2577),I=t(2949),k=t(6848),z=t(1463),w=t(3959),A=t(2715),F=t(6582),N=t(3541),K=function(){var e=(0,c.v9)(N.To),n=(0,c.v9)(o.K2),t=(0,c.v9)(f.zK),r=(0,c.I0)(),s=(0,c.v9)(o.Kv),a=(0,c.v9)(o.by);(0,i.useEffect)((function(){e&&r((0,l.yF)())}),[r,e]);var d=n&&Array.isArray(n)?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):[];return s?(0,x.jsx)(g.M,{h:"60vh",children:(0,x.jsx)(y.$,{size:"xl",thickness:"4px",speed:"0.65s",color:"teal.500"})}):a?(0,x.jsxs)(I.b,{status:"error",children:[(0,x.jsx)(k.z,{}),(0,x.jsxs)(p.xu,{flex:"1",children:[(0,x.jsx)(z.C,{children:"Error"}),(0,x.jsx)(w.X,{display:"block",children:a})]})]}):0===n.length?(0,x.jsx)(A.x,{fontSize:"lg",mt:4,children:"No contacts to display."}):(0,x.jsx)(C.M,{columns:1,spacing:4,children:d.map((function(e){return(0,x.jsx)(p.xu,{border:"1px",borderColor:"primary.300",borderRadius:"md",p:4,children:(0,x.jsxs)(F.k,{justify:"space-between",align:"center",children:[(0,x.jsxs)(A.x,{fontWeight:"bold",children:[e.name,": ",e.number]}),(0,x.jsxs)(F.k,{children:[(0,x.jsx)(m.z,{onClick:function(){return r((0,o.Kk)(e))},mr:2,children:"Edit"}),(0,x.jsx)(m.z,{onClick:function(){return r((0,l.GK)(e.id))},children:"Delete"})]})]})},e.id)}))})},S=t(990),Z=t(8874),O=t(4624),W=t(5473),E=t(634),M=t(6241),_=t(7685),L=t(1686),P=t.n(L),q=function(){var e=(0,c.v9)(o.mW),n=(0,c.v9)(o.mn),t=(0,c.I0)(),r=(0,i.useState)(n.name),s=(0,a.Z)(r,2),d=s[0],u=s[1],j=(0,i.useState)(n.number),p=(0,a.Z)(j,2),f=p[0],v=p[1],b={name:d,number:f};return e&&n&&(0,x.jsxs)(S.u_,{isOpen:!0,onClose:function(){t((0,o.UO)())},children:[(0,x.jsx)(Z.Z,{}),(0,x.jsxs)(O.h,{children:[(0,x.jsx)(W.x,{children:"Edit Contact"}),(0,x.jsx)(E.o,{}),(0,x.jsx)(M.f,{children:(0,x.jsxs)("form",{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{htmlFor:"name",children:"Name"}),(0,x.jsx)(h.I,{type:"text",id:"name",name:"name",value:d||"",onChange:function(e){u(e.target.value)}})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,x.jsx)(h.I,{type:"tel",id:"phone",name:"phone",value:f||"",onChange:function(e){v(e.target.value)}})]})]})}),(0,x.jsx)(_.m,{children:(0,x.jsx)(m.z,{colorScheme:"teal",onClick:function(e){e.preventDefault(),""!==d.trim()&&""!==f.trim()&&t((0,l.mP)({contactId:n.id,editedContact:b})).unwrap().then((function(e){e?P().Notify.success("Contact updated successfully"):P().Notify.failure("Edit contact failed"),t((0,o.UO)())})).catch((function(e){console.error("Registration error:",e)}))},children:"Save"})})]})]})},D=function(){var e=(0,c.v9)(o.mW),n=(0,b.q)(),t=n.isOpen,r=n.onOpen,s=n.onClose;return(0,x.jsxs)(C.M,{columns:1,spacing:4,children:[e&&(0,x.jsx)(q,{isOpen:t,onClose:s}),(0,x.jsx)(K,{onOpenModal:r})]})},X=function(){return(0,x.jsxs)(r.W,{maxW:"md",pt:100,children:[(0,x.jsx)(s.X,{as:"h1",size:"lg",textAlign:"center",mb:4,children:"Phonebook"}),(0,x.jsx)(j,{}),(0,x.jsx)(s.X,{as:"h2",size:"md",textAlign:"center",mt:4,mb:2,children:"Contacts"}),(0,x.jsx)(v,{}),(0,x.jsx)(D,{})]})}}}]);
//# sourceMappingURL=181.e6606f59.chunk.js.map