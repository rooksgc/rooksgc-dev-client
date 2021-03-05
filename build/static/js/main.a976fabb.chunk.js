(this["webpackJsonprooksgc-dev-client"]=this["webpackJsonprooksgc-dev-client"]||[]).push([[0],{156:function(e,t,r){},255:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(34),c=(r(156),r(38)),s=r(48),i=r(23),u=r(28),o=r(258),l=r(264),j=r(270),b=r(271),p=r(272),d=r(4),m=function(){return Object(d.jsxs)("div",{className:"flex-center flex-column",children:[Object(d.jsx)("h1",{children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e Svelte"}),Object(d.jsx)("img",{src:"/images/svelte.png",style:{width:700,maxWidth:"100%"},alt:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e Svelte"})]})},O=r(266),h=function(e){return Object(s.d)(e,s.b)},x=r(144),f=r(35),g=function(e,t){var r=Object(s.c)();return Object(a.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(f.b)(e,r)})):Object(f.b)(e,r)}),t?[r].concat(Object(x.a)(t)):[r])},v=r(265),y="AUTH/USER_FETCH_REQUEST",w=Object(v.a)("AUTH/SET_USER"),k=Object(v.a)("AUTH/USER_SET_TOKEN"),S=Object(v.a)("AUTH/USER_LOGOUT_REQUEST"),E=Object(v.a)(y),T=Object(v.a)("AUTH/USER_FETCH_SUCCESS"),N=Object(v.a)("AUTH/USER_FETCH_FAILURE"),F=[{key:"1",name:"login",label:"\u0412\u043e\u0439\u0442\u0438",path:"/auth/login",icon:Object(d.jsx)(O.a,{})},{key:"2",name:"register",label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/auth/register",icon:Object(d.jsx)(O.a,{})}],_=[{key:"1",name:"home",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/",icon:Object(d.jsx)(O.a,{})},{key:"2",name:"logout",label:"\u0412\u044b\u0439\u0442\u0438",path:"/auth/logout",icon:Object(d.jsx)(O.a,{})}],I=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),r=t[0],n=t[1],c=Object(u.h)(),s=Object(u.g)(),o=h((function(e){return e.auth.user})),j=g([S],null),b=Object(i.a)(j,1)[0],p=Object(a.useCallback)((function(){return o?_:F}),[o]),m=Object(a.useCallback)((function(){var e=p().find((function(e){return c.pathname===e.path}));return(null===e||void 0===e?void 0:e.key)||""}),[c.pathname,p]);return Object(a.useEffect)((function(){n(m())}),[c,m]),Object(d.jsx)(l.a,{style:{float:"right"},mode:"horizontal",selectedKeys:[r],onClick:function(e){var t=p().find((function(t){return t.key===e.key}));if("logout"===t.name)return b(),void s.push("/auth/login");s.push(t.path)},children:p().map((function(e){return Object(d.jsx)(l.a.Item,{icon:e.icon,children:e.label},e.key)}))})},U=function(){return Object(d.jsx)("h1",{children:"Chat window"})},z=r(10),A=r.n(z),C=r(29),P=r(259),R=r(260),H=r(262),q=r(263),V=r(257),B=r(143),D=r(267),L=r(268),X=r(75),J=r(137),K=r.n(J),M="auth",Q=function(e){var t=e.response;return"Internal Server Error"===t.statusText?{type:"error",message:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0434\u043d\u0435\u0435."}:t.data},W={register:function(){var e=Object(C.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.send({method:"post",endpoint:"/api/v1/auth/register",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),activate:function(){var e=Object(C.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.send({method:"patch",endpoint:"/api/v1/auth/activate/".concat(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(C.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.send({method:"post",endpoint:"/api/v1/auth/login",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchByToken:function(){var e=Object(C.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.send({method:"post",endpoint:"/api/v1/auth/fetch-by-token",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),recover:function(){var e=Object(C.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.send({method:"post",endpoint:"/api/v1/auth/recover",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),checkSecretcode:function(){var e=Object(C.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.send({method:"post",endpoint:"/api/v1/auth/check-secret",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changePassword:function(){var e=Object(C.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.send({method:"patch",endpoint:"/api/v1/auth/change-password",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return localStorage.getItem(M)},setToken:function(e){return localStorage.setItem(M,e)},removeToken:function(){return localStorage.removeItem(M)},send:function(){var e=Object(C.a)(A.a.mark((function e(t){var r,a,n,c,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.method,a=t.endpoint,n=t.payload,c=void 0===n?{}:n,e.prev=1,e.next=4,K.a[r](a,c);case 4:return s=e.sent,e.abrupt("return",s.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Q(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},$=W,G=function(){var e={type:"",message:""},t=P.a.useForm(),r=Object(i.a)(t,1)[0],n=Object(a.useState)(e),s=Object(i.a)(n,2),o=s[0],l=s[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),p=b[0],m=b[1],O=g([w,k],null),h=Object(i.a)(O,2),x=h[0],f=h[1],v=Object(u.g)(),y=function(){var t=Object(C.a)(A.a.mark((function t(r){var a,n,c,s,i,u,o;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(e),m(!0),a=r.email,n=r.password,t.next=6,$.login({email:a,password:n});case 6:if(c=t.sent,s=c.type,i=c.message,u=c.token,o=c.data,!i){t.next=16;break}if(l({type:s,message:i}),m(!1),"error"!==s){t.next=16;break}return t.abrupt("return");case 16:x(o),f(u),m(!1),v.push("/"),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(0),l(t.t0),m(!1);case 26:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(R.a,{className:"card",title:"\u0412\u043e\u0439\u0442\u0438",children:[o.message&&Object(d.jsx)(H.a,{className:"alert",message:o.message,type:o.type}),Object(d.jsxs)(P.a,{form:r,name:"login",className:"login-form",initialValues:{remember:!0},onFinish:y,children:[Object(d.jsx)(P.a.Item,{name:"email",rules:[{required:!0,type:"email",min:4,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(d.jsx)(q.a,{prefix:Object(d.jsx)(D.a,{}),placeholder:"Email",size:"large"})}),Object(d.jsx)(P.a.Item,{name:"password",rules:[{required:!0,min:6,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}],children:Object(d.jsx)(q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(L.a,{}),size:"large"})}),Object(d.jsxs)(P.a.Item,{children:[Object(d.jsx)(P.a.Item,{name:"register",noStyle:!0,children:Object(d.jsx)(c.b,{to:"/auth/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})]}),p&&Object(d.jsx)(V.a,{className:"center",indicator:Object(d.jsx)(X.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)(B.a,{size:"large",type:"primary",htmlType:"submit",block:!0,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},Z=r(269),Y=function(){var e={type:"",message:""},t=P.a.useForm(),r=Object(i.a)(t,1)[0],n=Object(a.useState)(e),c=Object(i.a)(n,2),s=c[0],u=c[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],b=l[1],p=function(){var t=Object(C.a)(A.a.mark((function t(a){var n,c,s,i,o,l;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(e),b(!0),n=a.name,c=a.email,s=a.password,t.next=6,$.register({name:n,email:c,password:s});case 6:if(i=t.sent,o=i.type,!(l=i.message)){t.next=14;break}if(u({type:o,message:l}),b(!1),"error"!==o){t.next=14;break}return t.abrupt("return");case 14:r.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),u(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(R.a,{className:"card",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:[s.message&&Object(d.jsx)(H.a,{className:"alert",message:s.message,type:s.type}),Object(d.jsxs)(P.a,{form:r,name:"register",initialValues:{remember:!0},onFinish:p,validateTrigger:"onBlur",children:[Object(d.jsx)(P.a.Item,{name:"name",rules:[{required:!0,message:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0438\u043b\u0438 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0446\u0438\u0444\u0440\u044b \u0438 \u0437\u043d\u0430\u043a\u0438 '- _'",pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u04010-9-_\s]{4,}$/}],children:Object(d.jsx)(q.a,{placeholder:"\u0418\u043c\u044f",size:"large",prefix:Object(d.jsx)(Z.a,{})})}),Object(d.jsx)(P.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(d.jsx)(q.a,{prefix:Object(d.jsx)(D.a,{}),placeholder:"Email",size:"large"})}),Object(d.jsx)(P.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6}],children:Object(d.jsx)(q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(L.a,{}),size:"large"})}),Object(d.jsx)(P.a.Item,{name:"confirm-password",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(d.jsx)(q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(d.jsx)(L.a,{}),size:"large"})}),j&&Object(d.jsx)(V.a,{className:"center",indicator:Object(d.jsx)(X.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)(B.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:j,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})},ee=function(){var e={type:"",message:""},t=P.a.useForm(),r=Object(i.a)(t,1)[0],n=Object(a.useState)(e),c=Object(i.a)(n,2),s=c[0],u=c[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],b=l[1],p=function(){var t=Object(C.a)(A.a.mark((function t(a){var n,c,s,i;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(e),b(!0),n=a.email,t.next=6,$.recover({email:n});case 6:if(c=t.sent,s=c.type,!(i=c.message)){t.next=14;break}if(u({type:s,message:i}),b(!1),"error"!==s){t.next=14;break}return t.abrupt("return");case 14:r.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),u(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(R.a,{className:"card",title:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(d.jsx)(H.a,{className:"alert",message:s.message,type:s.type}),"success"!==s.type&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u043d\u0430 \u043d\u0435\u0433\u043e \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f."}),Object(d.jsxs)(P.a,{form:r,name:"recover",className:"login-form",initialValues:{remember:!0},onFinish:p,validateTrigger:"onBlur",children:[Object(d.jsx)(P.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email!"}],children:Object(d.jsx)(q.a,{prefix:Object(d.jsx)(D.a,{}),placeholder:"Email",size:"large"})}),j&&Object(d.jsx)(V.a,{className:"center",indicator:Object(d.jsx)(X.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)(B.a,{size:"large",type:"primary",htmlType:"submit",block:!0,disabled:j,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},te=function(){var e=Object(u.i)().code,t={type:"",message:""},r=Object(a.useState)(t),n=Object(i.a)(r,2),s=n[0],o=n[1],l=Object(a.useState)(!1),j=Object(i.a)(l,2),b=j[0],p=j[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),h=O[0],x=O[1],f=Object(a.useState)(!1),g=Object(i.a)(f,2),v=g[0],y=g[1];Object(a.useEffect)((function(){var t=function(){var t=Object(C.a)(A.a.mark((function t(){var r,a,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.checkSecretcode({code:e,secretType:"RECOVER_PASSWORD"});case 2:r=t.sent,a=r.type,n=r.message,"error"===a&&(o({type:a,message:n}),p(!0));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)?t():(o({type:"error",message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043e\u0434!"}),p(!0))}),[e]);var w=function(){var r=Object(C.a)(A.a.mark((function r(a){var n,c,s,i;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o(t),y(!0),n=a.password,r.next=6,$.changePassword({code:e,password:n});case 6:if(c=r.sent,s=c.type,!(i=c.message)){r.next=14;break}if(o({type:s,message:i}),y(!1),"error"!==s){r.next=14;break}return r.abrupt("return");case 14:x(!0),y(!1),r.next=22;break;case 18:r.prev=18,r.t0=r.catch(0),o(r.t0),y(!1);case 22:case"end":return r.stop()}}),r,null,[[0,18]])})));return function(e){return r.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(R.a,{className:"card",title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(d.jsx)(H.a,{className:"alert",message:s.message,type:s.type}),h&&Object(d.jsxs)("p",{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",Object(d.jsx)(c.b,{to:"/auth/login",children:"\u0412\u043e\u0439\u0442\u0438"})," \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"]}),!b&&!h&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsxs)(P.a,{name:"change-password-request",initialValues:{remember:!0},onFinish:w,children:[Object(d.jsx)(P.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(d.jsx)(q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(L.a,{}),size:"large"})}),Object(d.jsx)(P.a.Item,{name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f!"},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(d.jsx)(q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(d.jsx)(L.a,{}),size:"large"})}),Object(d.jsx)(B.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:v,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},re=function(){var e=Object(u.i)().code,t=Object(a.useState)({type:"",message:""}),r=Object(i.a)(t,2),n=r[0],s=r[1];return Object(a.useEffect)((function(){(function(){var t=Object(C.a)(A.a.mark((function t(){var r,a,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.activate(e);case 2:r=t.sent,a=r.type,(n=r.message)&&s({type:a,message:n});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(R.a,{className:"card",title:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:[n.message&&Object(d.jsx)(H.a,{className:"alert",message:n.message,type:n.type}),Object(d.jsx)(c.b,{className:"login-link",to:"/auth/login",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})})},ae=r(100),ne=r(148),ce=function(e){var t=e.component,r=e.children,a=Object(ne.a)(e,["component","children"]),n=Object(s.d)((function(e){return e.auth.user}));return Object(d.jsx)(u.b,Object(ae.a)(Object(ae.a)({},a),{},{render:function(e){return!1===n?Object(d.jsx)(u.a,{to:{pathname:"/auth/login",state:{from:e.location}}}):t?Object(d.jsx)(t,Object(ae.a)({},e)):r}}))};ce.defaultProps={component:void 0};var se=ce,ie=o.a.Header,ue=o.a.Content,oe=o.a.Footer,le=o.a.Sider,je=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],n=t[1],c=function(e){e.preventDefault(),n(!r)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{style:{minHeight:"100vh"},children:[Object(d.jsx)(le,{theme:"light",collapsible:!0,trigger:null,collapsed:r,children:Object(d.jsxs)(l.a,{mode:"inline",children:[Object(d.jsx)(l.a.Item,{icon:Object(d.jsx)(j.a,{}),children:"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 1"},"1"),Object(d.jsx)(l.a.Item,{icon:Object(d.jsx)(j.a,{}),children:"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 2"},"2")]})}),Object(d.jsxs)(o.a,{className:"site-layout",children:[Object(d.jsxs)(ie,{className:"header site-layout-background",children:[r?Object(d.jsx)(b.a,{className:"trigger",onClick:c}):Object(d.jsx)(p.a,{className:"trigger",onClick:c}),Object(d.jsx)(I,{})]}),Object(d.jsx)(ue,{className:"content",children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(se,{path:"/",exact:!0,children:Object(d.jsx)(m,{})}),Object(d.jsx)(u.b,{path:"/auth/login",children:Object(d.jsx)(G,{})}),Object(d.jsx)(u.b,{path:"/auth/register",children:Object(d.jsx)(Y,{})}),Object(d.jsx)(u.b,{path:"/auth/activation/:code",children:Object(d.jsx)(re,{})}),Object(d.jsx)(u.b,{path:"/auth/recover",children:Object(d.jsx)(ee,{})}),Object(d.jsx)(u.b,{path:"/auth/change-password/:code",children:Object(d.jsx)(te,{})}),Object(d.jsx)(u.b,{path:"/chat",children:Object(d.jsx)(U,{})}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsx)(u.a,{to:"/auth/login"})})]})}),Object(d.jsx)(oe,{style:{textAlign:"center"},children:"\xa9 [\u041f\u0438\u0448\u0435\u043c \u0447\u0430\u0442\u0438\u043a]"})]})]})})},be=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,273)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))},pe=r(145),de=r(32),me=A.a.mark(ye),Oe=A.a.mark(we),he=A.a.mark(ke),xe=A.a.mark(Se),fe=A.a.mark(Ee),ge=A.a.mark(Te),ve=A.a.mark(Ne);function ye(e){var t;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(de.a)([$,$.setToken],t);case 3:case"end":return r.stop()}}),me)}function we(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.d)(k,ye);case 2:case"end":return e.stop()}}),Oe)}function ke(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.a)([$,$.removeToken]);case 2:return e.next=4,Object(de.c)(w(null));case 4:case"end":return e.stop()}}),he)}function Se(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.d)(S,ke);case 2:case"end":return e.stop()}}),xe)}function Ee(){var e,t;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(de.a)([$,$.getToken]);case 3:if(e=r.sent){r.next=7;break}return r.next=7,Object(de.c)(N());case 7:return r.next=9,Object(de.a)([$,$.fetchByToken],{token:e});case 9:if(!(t=r.sent).data){r.next=13;break}return r.next=13,Object(de.c)(T(t.data));case 13:r.next=19;break;case 15:return r.prev=15,r.t0=r.catch(0),r.next=19,Object(de.c)(N(r.t0));case 19:case"end":return r.stop()}}),fe,null,[[0,15]])}function Te(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)(E,Ee);case 2:case"end":return e.stop()}}),ge)}function Ne(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.b)(we);case 2:return e.next=4,Object(de.b)(Te);case 4:return e.next=6,Object(de.b)(Se);case 6:case"end":return e.stop()}}),ve)}var Fe,_e=r(55),Ie=r(261),Ue=Object(Ie.a)((Fe={},Object(_e.a)(Fe,E,(function(){return null})),Object(_e.a)(Fe,T,(function(e,t){return t.payload})),Object(_e.a)(Fe,N,(function(){return!1})),Object(_e.a)(Fe,w,(function(e,t){return t.payload})),Fe),null),ze=Object(f.c)({user:Ue}),Ae=A.a.mark(Pe),Ce=Object(f.c)({auth:ze});function Pe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.b)(Ne);case 2:case"end":return e.stop()}}),Ae)}var Re=function(){var e=Object(pe.a)(),t=Object(f.e)(Ce,Object(f.d)(Object(f.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));return e.run(Pe),t.dispatch({type:y}),t}();Object(n.render)(Object(d.jsx)(a.StrictMode,{children:Object(d.jsx)(s.a,{store:Re,children:Object(d.jsx)(c.a,{children:Object(d.jsx)(je,{})})})}),document.getElementById("root")),be()}},[[255,1,2]]]);
//# sourceMappingURL=main.a976fabb.chunk.js.map