"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{8321:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,o,i,c,d,s,u,p,l,x,f,h,m,b,g=t(9439),Z=t(2791),v=t(9434),j=t(3661),w=t(5861),k=t(7757),P=t.n(k),y=t(6382),C=t(1243),z=(0,y.hg)("contacts/fetchAll",(0,w.Z)(P().mark((function n(){var e;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.Z.get("https://6526e0d7917d673fd76d2701.mockapi.io/contacts");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))),I=(0,y.hg)("contacts/addContact",function(){var n=(0,w.Z)(P().mark((function n(e){var t;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.Z.post("https://6526e0d7917d673fd76d2701.mockapi.io/contacts",e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),A=(0,y.hg)("contacts/deleteContact",function(){var n=(0,w.Z)(P().mark((function n(e){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.Z.delete("https://6526e0d7917d673fd76d2701.mockapi.io/contacts/".concat(e));case 2:return n.abrupt("return",e);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),F=t(168),K=t(5867),L=K.ZP.form(r||(r=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin: 0 0 20px 0;\n  border: 1px solid #ccc;\n  padding: 20px;\n"]))),_=K.ZP.label(a||(a=(0,F.Z)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),N=K.ZP.input(o||(o=(0,F.Z)(["\n  padding: 5px;\n  margin-bottom: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 18px;\n"]))),S=K.ZP.button(i||(i=(0,F.Z)(["\n  width: 150px;\n  font-size: 17px;\n  border-radius: 4px;\n  padding: 5px 10px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),q=t(3329),D=function(){var n=(0,Z.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],a=(0,Z.useState)(""),o=(0,g.Z)(a,2),i=o[0],c=o[1],d=(0,v.v9)(j.K2),s=(0,v.I0)(),u={name:t,number:i};return(0,q.jsxs)(L,{onSubmit:function(n){(n.preventDefault(),""!==t.trim()&&""!==i.trim())&&(d.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts.")):(s(I(u)),r(""),c("")))},children:[(0,q.jsx)(_,{htmlFor:"nameInput",children:"Name"}),(0,q.jsx)(N,{id:"nameInput",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){r(n.target.value)}}),(0,q.jsx)(_,{htmlFor:"numberInput",children:"Number"}),(0,q.jsx)(N,{id:"numberInput",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:function(n){c(n.target.value)}}),(0,q.jsx)(S,{type:"submit",disabled:!t||!i,children:"Add contact"})]})},B=t(6895),E=K.ZP.div(c||(c=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin: 0;\n  padding: 20px;\n"]))),J=K.ZP.label(d||(d=(0,F.Z)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),M=K.ZP.input(s||(s=(0,F.Z)(["\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 18px;\n"]))),T=function(){var n=(0,v.v9)(B.zK),e=(0,v.I0)();return(0,q.jsxs)(E,{children:[(0,q.jsx)(J,{htmlFor:"nameFilterInput",children:"Find contacts by name"}),(0,q.jsx)(M,{id:"nameFilterInput",type:"text",value:n,onChange:function(n){e((0,B.Tv)(n.target.value))}})]})},$=K.ZP.li(u||(u=(0,F.Z)([""]))),G=K.ZP.div(p||(p=(0,F.Z)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),H=K.ZP.span(l||(l=(0,F.Z)([""]))),O=K.ZP.button(x||(x=(0,F.Z)(["\n  background-color: #f44336;\n  color: #fff;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #d32f2f;\n  }\n"]))),Q=function(){var n=(0,v.v9)(j.K2),e=(0,v.v9)(B.zK),t=(0,v.I0)(),r=(0,v.v9)(j.Kv),a=(0,v.v9)(j.by);(0,Z.useEffect)((function(){t(z())}),[t]);var o=n?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):[];return r?(0,q.jsx)("h2",{children:"Loading..."}):a?(0,q.jsx)("h2",{children:a}):n.length>0?o.map((function(n){return(0,q.jsx)($,{children:(0,q.jsxs)(G,{children:[(0,q.jsxs)(H,{children:[n.name,": ",n.number]}),(0,q.jsx)(O,{onClick:function(){return t(A(n.id))},children:"Delete"})]})},n.id)})):void 0},R=K.ZP.ul(f||(f=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  gap: 10px;\n  margin: 0;\n  padding: 20px 40px;\n"]))),U=function(){return(0,q.jsx)(R,{children:(0,q.jsx)(Q,{})})},V=K.ZP.div(h||(h=(0,F.Z)(["\n  padding: 20px;\n"]))),W=K.ZP.h2(m||(m=(0,F.Z)(["\n  margin: 0 0 20px 0;\n  padding: 0;\n"]))),X=K.ZP.h2(b||(b=(0,F.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),Y=function(){return(0,q.jsxs)(V,{children:[(0,q.jsx)(W,{children:"Phonebook"}),(0,q.jsx)(D,{}),(0,q.jsx)(X,{children:"Contacts"}),(0,q.jsx)(T,{}),(0,q.jsx)(U,{})]})}}}]);
//# sourceMappingURL=321.80d8cec8.chunk.js.map