(this["webpackJsonprooksgc-dev-client"]=this["webpackJsonprooksgc-dev-client"]||[]).push([[0],{135:function(e,t,r){},232:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(31),c=(r(135),r(35)),n=r(24),i=r(25),l=r(235),u=r(240),j=r(245),o=r(246),b=r(247),p=r.p+"static/media/svelte.88cbbc75.png",d=r(4),m=function(){return Object(d.jsxs)("div",{className:"flex-center flex-column",children:[Object(d.jsx)("h1",{children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e Svelte"}),Object(d.jsx)("img",{src:p,style:{width:700,maxWidth:"100%"},alt:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e Svelte"})]})},h=r(241),x=[{key:"1",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/",icon:Object(d.jsx)(h.a,{})},{key:"2",label:"\u0412\u043e\u0439\u0442\u0438",path:"/auth/login",icon:Object(d.jsx)(h.a,{})},{key:"3",label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/auth/register",icon:Object(d.jsx)(h.a,{})}],O=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),r=t[0],s=t[1],c=Object(i.h)(),l=Object(i.g)(),j=Object(a.useCallback)((function(){var e=x.find((function(e){return c.pathname===e.path}));return(null===e||void 0===e?void 0:e.key)||""}),[c.pathname]);return Object(a.useEffect)((function(){s(j())}),[c,j]),Object(d.jsx)(u.a,{style:{float:"right"},mode:"horizontal",selectedKeys:[r],onClick:function(e){var t=x.find((function(t){return t.key===e.key}));l.push(t.path)},children:x.map((function(e){return Object(d.jsx)(u.a.Item,{icon:e.icon,children:e.label},e.key)}))})},f=function(){return Object(d.jsx)("h1",{children:"Chat window"})},v=r(15),g=r.n(v),y=r(27),w=r(236),k=r(237),N=r(238),S=r(239),F=r(234),z=r(126),I=r(242),P=r(243),E=r(65),q=r(46),C=r.n(q),T=function(e){var t=e.response;return"Internal Server Error"===t.statusText?{type:"error",message:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0434\u043d\u0435\u0435."}:t.data},A={register:function(){var e=Object(y.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("/api/v1/auth/register",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",T(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),activate:function(){var e=Object(y.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.patch("/api/v1/auth/activate/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",T(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(y.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("/api/v1/auth/login",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",T(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),recover:function(){var e=Object(y.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("/api/v1/auth/recover",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",T(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),checkSecretcode:function(){var e=Object(y.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("/api/v1/auth/check-secret",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",T(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),changePassword:function(){var e=Object(y.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.patch("/api/v1/auth/change-password",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",T(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e={type:"",message:""},t=w.a.useForm(),r=Object(n.a)(t,1)[0],s=Object(a.useState)(e),i=Object(n.a)(s,2),l=i[0],u=i[1],j=Object(a.useState)(!1),o=Object(n.a)(j,2),b=o[0],p=o[1],m=function(){var t=Object(y.a)(g.a.mark((function t(r){var a,s,c,n,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(e),p(!0),a=r.email,s=r.password,t.next=6,A.login({email:a,password:s});case 6:if(c=t.sent,n=c.type,!(i=c.message)){t.next=14;break}if(u({type:n,message:i}),p(!1),"error"!==n){t.next=14;break}return t.abrupt("return");case 14:p(!1),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),u(t.t0),p(!1);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(k.a,{className:"card",title:"\u0412\u043e\u0439\u0442\u0438",children:[l.message&&Object(d.jsx)(N.a,{className:"alert",message:l.message,type:l.type}),Object(d.jsxs)(w.a,{form:r,name:"login",className:"login-form",initialValues:{remember:!0},onFinish:m,children:[Object(d.jsx)(w.a.Item,{name:"email",rules:[{required:!0,type:"email",min:4,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(d.jsx)(S.a,{prefix:Object(d.jsx)(I.a,{}),placeholder:"Email",size:"large"})}),Object(d.jsx)(w.a.Item,{name:"password",rules:[{required:!0,min:6,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}],children:Object(d.jsx)(S.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(P.a,{}),size:"large"})}),Object(d.jsxs)(w.a.Item,{children:[Object(d.jsx)(w.a.Item,{name:"register",noStyle:!0,children:Object(d.jsx)(c.b,{to:"/auth/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})]}),b&&Object(d.jsx)(F.a,{className:"center",indicator:Object(d.jsx)(E.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)(z.a,{size:"large",type:"primary",htmlType:"submit",block:!0,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},B=r(244),D=function(){var e={type:"",message:""},t=w.a.useForm(),r=Object(n.a)(t,1)[0],s=Object(a.useState)(e),c=Object(n.a)(s,2),i=c[0],l=c[1],u=Object(a.useState)(!1),j=Object(n.a)(u,2),o=j[0],b=j[1],p=function(){var t=Object(y.a)(g.a.mark((function t(a){var s,c,n,i,u,j;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(e),b(!0),s=a.name,c=a.email,n=a.password,t.next=6,A.register({name:s,email:c,password:n});case 6:if(i=t.sent,u=i.type,!(j=i.message)){t.next=14;break}if(l({type:u,message:j}),b(!1),"error"!==u){t.next=14;break}return t.abrupt("return");case 14:r.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),l(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(k.a,{className:"card",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:[i.message&&Object(d.jsx)(N.a,{className:"alert",message:i.message,type:i.type}),Object(d.jsxs)(w.a,{form:r,name:"register",initialValues:{remember:!0},onFinish:p,validateTrigger:"onBlur",children:[Object(d.jsx)(w.a.Item,{name:"name",rules:[{required:!0,message:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0438\u043b\u0438 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0446\u0438\u0444\u0440\u044b \u0438 \u0437\u043d\u0430\u043a\u0438 '- _'",pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u04010-9-_\s]{4,}$/}],children:Object(d.jsx)(S.a,{placeholder:"\u0418\u043c\u044f",size:"large",prefix:Object(d.jsx)(B.a,{})})}),Object(d.jsx)(w.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(d.jsx)(S.a,{prefix:Object(d.jsx)(I.a,{}),placeholder:"Email",size:"large"})}),Object(d.jsx)(w.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6}],children:Object(d.jsx)(S.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(P.a,{}),size:"large"})}),Object(d.jsx)(w.a.Item,{name:"confirm-password",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(d.jsx)(S.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(d.jsx)(P.a,{}),size:"large"})}),o&&Object(d.jsx)(F.a,{className:"center",indicator:Object(d.jsx)(E.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)(z.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:o,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})},R=function(){var e={type:"",message:""},t=w.a.useForm(),r=Object(n.a)(t,1)[0],s=Object(a.useState)(e),c=Object(n.a)(s,2),i=c[0],l=c[1],u=Object(a.useState)(!1),j=Object(n.a)(u,2),o=j[0],b=j[1],p=function(){var t=Object(y.a)(g.a.mark((function t(a){var s,c,n,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(e),b(!0),s=a.email,t.next=6,A.recover({email:s});case 6:if(c=t.sent,n=c.type,!(i=c.message)){t.next=14;break}if(l({type:n,message:i}),b(!1),"error"!==n){t.next=14;break}return t.abrupt("return");case 14:r.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),l(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(k.a,{className:"card",title:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[i.message&&Object(d.jsx)(N.a,{className:"alert",message:i.message,type:i.type}),"success"!==i.type&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u043d\u0430 \u043d\u0435\u0433\u043e \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f."}),Object(d.jsxs)(w.a,{form:r,name:"recover",className:"login-form",initialValues:{remember:!0},onFinish:p,validateTrigger:"onBlur",children:[Object(d.jsx)(w.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email!"}],children:Object(d.jsx)(S.a,{prefix:Object(d.jsx)(I.a,{}),placeholder:"Email",size:"large"})}),o&&Object(d.jsx)(F.a,{className:"center",indicator:Object(d.jsx)(E.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)(z.a,{size:"large",type:"primary",htmlType:"submit",block:!0,disabled:o,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},_=function(){var e=Object(i.i)().code,t={type:"",message:""},r=Object(a.useState)(t),s=Object(n.a)(r,2),l=s[0],u=s[1],j=Object(a.useState)(!1),o=Object(n.a)(j,2),b=o[0],p=o[1],m=Object(a.useState)(!1),h=Object(n.a)(m,2),x=h[0],O=h[1],f=Object(a.useState)(!1),v=Object(n.a)(f,2),F=v[0],I=v[1];Object(a.useEffect)((function(){var t=function(){var t=Object(y.a)(g.a.mark((function t(){var r,a,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.checkSecretcode({code:e,secretType:"RECOVER_PASSWORD"});case 2:r=t.sent,a=r.type,s=r.message,"error"===a&&(u({type:a,message:s}),p(!0));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)?t():(u({type:"error",message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043e\u0434!"}),p(!0))}),[e]);var E=function(){var r=Object(y.a)(g.a.mark((function r(a){var s,c,n,i;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u(t),I(!0),s=a.password,r.next=6,A.changePassword({code:e,password:s});case 6:if(c=r.sent,n=c.type,!(i=c.message)){r.next=14;break}if(u({type:n,message:i}),I(!1),"error"!==n){r.next=14;break}return r.abrupt("return");case 14:O(!0),I(!1),r.next=22;break;case 18:r.prev=18,r.t0=r.catch(0),u(r.t0),I(!1);case 22:case"end":return r.stop()}}),r,null,[[0,18]])})));return function(e){return r.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(k.a,{className:"card",title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[l.message&&Object(d.jsx)(N.a,{className:"alert",message:l.message,type:l.type}),x&&Object(d.jsxs)("p",{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",Object(d.jsx)(c.b,{to:"/auth/login",children:"\u0412\u043e\u0439\u0442\u0438"})," \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"]}),!b&&!x&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsxs)(w.a,{name:"change-password-request",initialValues:{remember:!0},onFinish:E,children:[Object(d.jsx)(w.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(d.jsx)(S.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(P.a,{}),size:"large"})}),Object(d.jsx)(w.a.Item,{name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f!"},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(d.jsx)(S.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(d.jsx)(P.a,{}),size:"large"})}),Object(d.jsx)(z.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:F,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},H=function(){var e=Object(i.i)().code,t=Object(a.useState)({type:"",message:""}),r=Object(n.a)(t,2),s=r[0],l=r[1];return Object(a.useEffect)((function(){(function(){var t=Object(y.a)(g.a.mark((function t(){var r,a,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.activate(e);case 2:r=t.sent,a=r.type,(s=r.message)&&l({type:a,message:s});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(k.a,{className:"card",title:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:[s.message&&Object(d.jsx)(N.a,{className:"alert",message:s.message,type:s.type}),Object(d.jsx)(c.b,{className:"login-link",to:"/auth/login",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})})},J=l.a.Header,L=l.a.Content,W=l.a.Footer,$=l.a.Sider,K=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),r=t[0],s=t[1],c=function(e){e.preventDefault(),s(!r)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.a,{style:{minHeight:"100vh"},children:[Object(d.jsx)($,{theme:"light",collapsible:!0,trigger:null,collapsed:r,children:Object(d.jsxs)(u.a,{mode:"inline",children:[Object(d.jsx)(u.a.Item,{icon:Object(d.jsx)(j.a,{}),children:"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 1"},"1"),Object(d.jsx)(u.a.Item,{icon:Object(d.jsx)(j.a,{}),children:"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 2"},"2")]})}),Object(d.jsxs)(l.a,{className:"site-layout",children:[Object(d.jsxs)(J,{className:"header site-layout-background",children:[r?Object(d.jsx)(o.a,{className:"trigger",onClick:c}):Object(d.jsx)(b.a,{className:"trigger",onClick:c}),Object(d.jsx)(O,{})]}),Object(d.jsx)(L,{className:"content",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",exact:!0,children:Object(d.jsx)(m,{})}),Object(d.jsx)(i.b,{path:"/auth/login",children:Object(d.jsx)(V,{})}),Object(d.jsx)(i.b,{path:"/auth/register",children:Object(d.jsx)(D,{})}),Object(d.jsx)(i.b,{path:"/auth/activation/:code",children:Object(d.jsx)(H,{})}),Object(d.jsx)(i.b,{path:"/auth/recover",children:Object(d.jsx)(R,{})}),Object(d.jsx)(i.b,{path:"/auth/change-password/:code",children:Object(d.jsx)(_,{})}),Object(d.jsx)(i.b,{path:"/chat",children:Object(d.jsx)(f,{})}),Object(d.jsx)(i.b,{path:"*",children:Object(d.jsx)(i.a,{to:"/auth/login"})})]})}),Object(d.jsx)(W,{style:{textAlign:"center"},children:"\xa9 [\u041f\u0438\u0448\u0435\u043c \u0447\u0430\u0442\u0438\u043a]"})]})]})})},M=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,248)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;r(e),a(e),s(e),c(e),n(e)}))};Object(s.render)(Object(d.jsx)(a.StrictMode,{children:Object(d.jsx)(c.a,{children:Object(d.jsx)(K,{})})}),document.getElementById("root")),M()}},[[232,1,2]]]);
//# sourceMappingURL=main.4d2c9a09.chunk.js.map