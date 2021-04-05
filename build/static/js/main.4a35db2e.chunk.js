(this["webpackJsonprooksgc-dev-client"]=this["webpackJsonprooksgc-dev-client"]||[]).push([[0],{316:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(62),c=n(36),s=n(37),i=n(20),o=n(319),u=n(30),l=n(327),j=n(330),b=function(e){return Object(r.d)(e,r.b)},d=n(3),p=[{key:"login",label:"\u0412\u043e\u0439\u0442\u0438",path:"/auth/login",icon:Object(d.jsx)(j.a,{})},{key:"register",label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/auth/register",icon:Object(d.jsx)(j.a,{})}],m=[{key:"home",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/",icon:Object(d.jsx)(j.a,{})},{key:"chat",label:"\u0427\u0430\u0442",path:"/chat",icon:Object(d.jsx)(j.a,{})}],h=function(){var e,t=Object(u.h)(),n=Object(u.g)(),a=b((function(e){return e.auth.user})),r=function(){return a?m:p},c=null===(e=r().find((function(e){return t.pathname===e.path})))||void 0===e?void 0:e.key;if(!c&&!a)return null;return Object(d.jsx)(l.a,{mode:"horizontal",selectedKeys:[c],onClick:function(e){if(e.key!==c){var t=r().find((function(t){return t.key===e.key}));n.push(t.path)}},children:r().map((function(e){return Object(d.jsx)(l.a.Item,{icon:e.icon,children:e.label},e.key)}))})},O=n(328),f=n(326),x=n(331),v=n(332),g=n(333),y=n(113),k=n(32),w=function(e,t){var n=Object(r.c)();return Object(a.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(k.bindActionCreators)(e,n)})):Object(k.bindActionCreators)(e,n)}),t?[n].concat(Object(y.a)(t)):[n])},N=n(329),T=Object(N.a)("AUTH/USER_LOGIN_REQUEST"),S=Object(N.a)("AUTH/USER_LOGOUT_REQUEST"),C=Object(N.a)("AUTH/USER_FETCH_SUCCESS"),I=Object(N.a)("AUTH/USER_FETCH_FAILURE"),E=function(){var e=Object(u.h)(),t=Object(u.g)(),n=w([S],null),a=Object(i.a)(n,1)[0],r=Object(d.jsxs)(l.a,{onClick:function(n){var r=n.key;if(e.pathname!=="/user/".concat(r))switch(r){case"profile":t.push("/user/profile");break;case"logout":a(),t.push("/auth/login")}},children:[Object(d.jsx)(l.a.Item,{icon:Object(d.jsx)(x.a,{}),children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},"profile"),Object(d.jsx)(l.a.Divider,{}),Object(d.jsx)(l.a.Item,{icon:Object(d.jsx)(v.a,{}),children:"\u0412\u044b\u0445\u043e\u0434"},"logout")]});return Object(d.jsx)(O.a,{overlay:r,trigger:["click"],children:Object(d.jsx)(f.a,{className:"user-profile",icon:Object(d.jsx)(g.a,{})})})},A=function(e){var t=e.children;return b((function(e){return e.auth.user}))?t:null},F=o.a.Header,z=function(){return Object(d.jsx)(F,{className:"header background-white",children:Object(d.jsxs)("div",{className:"header-menu",children:[Object(d.jsx)(h,{}),Object(d.jsx)(A,{children:Object(d.jsx)(E,{})})]})})},_=n(334),P=function(e){Object(a.useEffect)((function(){var t=function(t){"Escape"===t.key&&e()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},R=Object(N.a)("CHAT/SET_ACTIVE_CHANNEL_ID"),U=Object(N.a)("CHAT/INIT_CHANNELS_DATA"),H=Object(N.a)("CHAT/ADD_CHANNEL_MESSAGE"),q=o.a.Sider,L=[{id:1,label:"\u041e\u0431\u0449\u0438\u0439 \u0447\u0430\u0442",icon:Object(d.jsx)(_.a,{})},{id:2,label:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043a\u0430\u043d\u0430\u043b",icon:Object(d.jsx)(_.a,{})}],B=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(u.h)(),s=w([R],null),o=Object(i.a)(s,1)[0],j=b((function(e){return e.chat.activeChannelId}));P((function(){"/chat"===c.pathname&&j&&o("")}));return Object(d.jsx)(A,{children:Object(d.jsx)(q,{collapsible:!0,collapsed:n,onCollapse:function(e){r(e)},className:"sider",theme:"dark",children:Object(d.jsx)(l.a,{theme:"dark",mode:"inline",selectedKeys:[j],onClick:function(e){var t=e.key;t!==j&&o(t)},children:L.map((function(e){return Object(d.jsx)(l.a.Item,{icon:e.icon,children:e.label},e.id)}))})})})},D=function(){return Object(d.jsxs)("div",{className:"flex-center flex-column",children:[Object(d.jsx)("h1",{children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e Svelte"}),Object(d.jsx)("img",{src:"/images/svelte.png",style:{width:700,maxWidth:"100%"},alt:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e \u043e Svelte"})]})},M=n(185),V=function(e){var t=e.data.messages;return(null===t||void 0===t?void 0:t.length)?Object(d.jsx)("div",{className:"chat-window",children:t.map((function(e){var t=e.id,n=e.text,a=e.from;return Object(d.jsxs)("div",{children:[a,": ",n]},t)}))}):Object(d.jsx)("div",{className:"chat-window"})},W=n(9),G=n.n(W),J=n(29),K=n(321),Q=n(324),$=n(80),Z=n(335),X=function(e){var t=e.sendMessage,n=K.a.useForm(),a=Object(i.a)(n,1)[0],r=function(){var e=Object(J.a)(G.a.mark((function e(n){var r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r=n.text,t(r),a.resetFields()}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"chat-input",children:Object(d.jsxs)(K.a,{size:"large",className:"input-form",form:a,onFinish:r,children:[Object(d.jsx)(K.a.Item,{className:"input-messaage",required:!0,name:"text",children:Object(d.jsx)(Q.a,{autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),Object(d.jsx)(K.a.Item,{className:"send-button",children:Object(d.jsx)($.a,{htmlType:"submit",type:"primary",icon:Object(d.jsx)(Z.a,{}),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})},Y=Object(a.memo)(X),ee=n(178),te={socket:void 0,connect:function(){te.socket||(te.socket=Object(ee.io)())},disconnect:function(){te.socket.disconnect(),te.socket=void 0},subscribeToChannels:function(e){te.socket.emit("channels:subscribe",e)},addMessageToChannel:function(e){te.socket.emit("channel:message:add",e)}},ne=te,ae=function(){var e=b((function(e){return e.auth.user})),t=w([H],null),n=Object(i.a)(t,1)[0],r=b((function(e){return e.chat})),c=r.activeChannelId,s=r.channels,o=Object(a.useCallback)((function(t){if(c&&t){var a={id:Object(M.a)(),text:t,from:e.name};n({activeChannelId:c,message:a}),ne.addMessageToChannel({activeChannelId:c,message:a})}}),[c,n,e.name]);if(!e||!c||!s)return null;var u=s[c];return u?Object(d.jsxs)("div",{className:"chat-wrapper",children:[Object(d.jsx)(V,{data:u}),Object(d.jsx)(Y,{sendMessage:o})]}):null},re=n(322),ce=n(325),se=n(320),ie=n(336),oe=n(337),ue=n(90),le=n(134),je=n.n(le),be="auth",de=function(e){var t=e.response,n=t.data,a=t.status;return"string"!==typeof n||502!==a&&500!==a?"No authorization token was found"===(null===n||void 0===n?void 0:n.message)?{type:"error",message:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e."}:n:{type:"error",message:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0434\u043d\u0435\u0435."}},pe={getAllUsers:function(){var e=Object(J.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"get",endpoint:"/api/v1/auth/users"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),register:function(){var e=Object(J.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"put",endpoint:"/api/v1/auth/register",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),activate:function(){var e=Object(J.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"patch",endpoint:"/api/v1/auth/activate/".concat(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(J.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"post",endpoint:"/api/v1/auth/login",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchByToken:function(){var e=Object(J.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"post",endpoint:"/api/v1/auth/fetch-by-token",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),recover:function(){var e=Object(J.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"post",endpoint:"/api/v1/auth/recover",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),checkSecret:function(){var e=Object(J.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"post",endpoint:"/api/v1/auth/check-secret",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changePassword:function(){var e=Object(J.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe.send({method:"patch",endpoint:"/api/v1/auth/change-password",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return localStorage.getItem(be)},setToken:function(e){return localStorage.setItem(be,e)},removeToken:function(){return localStorage.removeItem(be)},send:function(){var e=Object(J.a)(G.a.mark((function e(t){var n,a,r,c,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,a=t.endpoint,r=t.payload,c=void 0===r?{}:r,e.prev=1,e.next=4,je.a[n](a,c);case 4:return s=e.sent,e.abrupt("return",s.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",de(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};je.a.interceptors.request.use((function(e){var t=pe.getToken();return t&&(e.headers={Authorization:"Bearer ".concat(t)}),e}),(function(e){return de(e)}));var me=pe,he=function(){var e={type:"",message:""},t=K.a.useForm(),n=Object(i.a)(t,1)[0],r=Object(a.useState)(e),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),p=b[0],m=b[1],h=w([T],null),O=Object(i.a)(h,1)[0],f=Object(u.g)(),x=function(){var t=Object(J.a)(G.a.mark((function t(n){var a,r,c,s,i,o,u;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(e),m(!0),a=n.email,r=n.password,t.next=6,me.login({email:a,password:r});case 6:if(c=t.sent,s=c.type,i=c.message,o=c.token,u=c.data,!i){t.next=16;break}if(l({type:s,message:i}),m(!1),"error"!==s){t.next=16;break}return t.abrupt("return");case 16:O({data:u,token:o}),m(!1),f.push("/chat"),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(0),l(t.t0),m(!1);case 25:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(re.a,{className:"card",title:"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443",children:[o.message&&Object(d.jsx)(ce.a,{className:"alert",message:o.message,type:o.type}),Object(d.jsxs)(K.a,{form:n,name:"login",className:"login-form",initialValues:{remember:!0},onFinish:x,children:[Object(d.jsx)(K.a.Item,{name:"email",rules:[{required:!0,type:"email",min:4,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(d.jsx)(Q.a,{prefix:Object(d.jsx)(ie.a,{}),placeholder:"Email",size:"large"})}),Object(d.jsx)(K.a.Item,{name:"password",rules:[{required:!0,min:6,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}],children:Object(d.jsx)(Q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(oe.a,{}),size:"large"})}),Object(d.jsxs)(K.a.Item,{children:[Object(d.jsx)(K.a.Item,{name:"register",noStyle:!0,children:Object(d.jsx)(c.b,{to:"/auth/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})]}),p&&Object(d.jsx)(se.a,{className:"center",indicator:Object(d.jsx)(ue.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)($.a,{size:"large",type:"primary",htmlType:"submit",block:!0,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},Oe=function(){var e={type:"",message:""},t=K.a.useForm(),n=Object(i.a)(t,1)[0],r=Object(a.useState)(e),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),j=l[0],b=l[1],p=function(){var t=Object(J.a)(G.a.mark((function t(a){var r,c,s,i,u,l;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(e),b(!0),r=a.name,c=a.email,s=a.password,t.next=6,me.register({name:r,email:c,password:s});case 6:if(i=t.sent,u=i.type,!(l=i.message)){t.next=14;break}if(o({type:u,message:l}),b(!1),"error"!==u){t.next=14;break}return t.abrupt("return");case 14:n.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),o(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(re.a,{className:"card",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:[s.message&&Object(d.jsx)(ce.a,{className:"alert",message:s.message,type:s.type}),Object(d.jsxs)(K.a,{form:n,name:"register",initialValues:{remember:!0},onFinish:p,validateTrigger:"onBlur",children:[Object(d.jsx)(K.a.Item,{name:"name",rules:[{required:!0,message:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0438\u043b\u0438 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0446\u0438\u0444\u0440\u044b \u0438 \u0437\u043d\u0430\u043a\u0438 '- _'",pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u04010-9-_\s]{4,}$/}],children:Object(d.jsx)(Q.a,{placeholder:"\u0418\u043c\u044f",size:"large",prefix:Object(d.jsx)(g.a,{})})}),Object(d.jsx)(K.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(d.jsx)(Q.a,{prefix:Object(d.jsx)(ie.a,{}),placeholder:"Email",size:"large"})}),Object(d.jsx)(K.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6}],children:Object(d.jsx)(Q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(oe.a,{}),size:"large"})}),Object(d.jsx)(K.a.Item,{name:"confirm-password",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(d.jsx)(Q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(d.jsx)(oe.a,{}),size:"large"})}),j&&Object(d.jsx)(se.a,{className:"center",indicator:Object(d.jsx)(ue.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)($.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:j,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})},fe=function(){var e={type:"",message:""},t=K.a.useForm(),n=Object(i.a)(t,1)[0],r=Object(a.useState)(e),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),j=l[0],b=l[1],p=function(){var t=Object(J.a)(G.a.mark((function t(a){var r,c,s,i;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(e),b(!0),r=a.email,t.next=6,me.recover({email:r});case 6:if(c=t.sent,s=c.type,!(i=c.message)){t.next=14;break}if(o({type:s,message:i}),b(!1),"error"!==s){t.next=14;break}return t.abrupt("return");case 14:n.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),o(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(re.a,{className:"card",title:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(d.jsx)(ce.a,{className:"alert",message:s.message,type:s.type}),"success"!==s.type&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u043d\u0430 \u043d\u0435\u0433\u043e \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f."}),Object(d.jsxs)(K.a,{form:n,name:"recover",className:"login-form",initialValues:{remember:!0},onFinish:p,validateTrigger:"onBlur",children:[Object(d.jsx)(K.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email!"}],children:Object(d.jsx)(Q.a,{prefix:Object(d.jsx)(ie.a,{}),placeholder:"Email",size:"large"})}),j&&Object(d.jsx)(se.a,{className:"center",indicator:Object(d.jsx)(ue.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(d.jsx)($.a,{size:"large",type:"primary",htmlType:"submit",block:!0,disabled:j,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},xe=function(){var e=Object(u.i)().code,t={type:"",message:""},n=Object(a.useState)(t),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(a.useState)(!1),j=Object(i.a)(l,2),b=j[0],p=j[1],m=Object(a.useState)(!1),h=Object(i.a)(m,2),O=h[0],f=h[1],x=Object(a.useState)(!1),v=Object(i.a)(x,2),g=v[0],y=v[1];Object(a.useEffect)((function(){var t=function(){var t=Object(J.a)(G.a.mark((function t(){var n,a,r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me.checkSecret({code:e,secretType:"RECOVER_PASSWORD"});case 2:n=t.sent,a=n.type,r=n.message,"error"===a&&(o({type:a,message:r}),p(!0));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)?t():(o({type:"error",message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043e\u0434!"}),p(!0))}),[e]);var k=function(){var n=Object(J.a)(G.a.mark((function n(a){var r,c,s,i;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(t),y(!0),r=a.password,n.next=6,me.changePassword({code:e,password:r});case 6:if(c=n.sent,s=c.type,!(i=c.message)){n.next=14;break}if(o({type:s,message:i}),y(!1),"error"!==s){n.next=14;break}return n.abrupt("return");case 14:f(!0),y(!1),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(0),o(n.t0),y(!1);case 22:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(e){return n.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(re.a,{className:"card",title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(d.jsx)(ce.a,{className:"alert",message:s.message,type:s.type}),O&&Object(d.jsxs)("p",{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",Object(d.jsx)(c.b,{to:"/auth/login",children:"\u0412\u043e\u0439\u0442\u0438"})," \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"]}),!b&&!O&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsxs)(K.a,{name:"change-password-request",initialValues:{remember:!0},onFinish:k,children:[Object(d.jsx)(K.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(d.jsx)(Q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(d.jsx)(oe.a,{}),size:"large"})}),Object(d.jsx)(K.a.Item,{name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(d.jsx)(Q.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(d.jsx)(oe.a,{}),size:"large"})}),Object(d.jsx)($.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:g,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},ve=function(){var e=Object(u.i)().code,t=Object(a.useState)({type:"",message:""}),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){(function(){var t=Object(J.a)(G.a.mark((function t(){var n,a,r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me.activate(e);case 2:n=t.sent,a=n.type,(r=n.message)&&s({type:a,message:r});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(d.jsx)("div",{className:"flex-center",children:Object(d.jsxs)(re.a,{className:"card",title:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:[r.message&&Object(d.jsx)(ce.a,{className:"alert",message:r.message,type:r.type}),Object(d.jsx)(c.b,{className:"login-link",to:"/auth/login",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})})},ge=n(38),ye=n(186),ke=function(e){var t=e.component,n=e.children,a=Object(ye.a)(e,["component","children"]),r=b((function(e){return e.auth.user}));return Object(d.jsx)(u.b,Object(ge.a)(Object(ge.a)({},a),{},{render:function(e){return null===r?null:!1===r?Object(d.jsx)(u.a,{to:{pathname:"/auth/login",state:{from:e.location}}}):t?Object(d.jsx)(t,Object(ge.a)({},e)):n}}))};ke.defaultProps={component:void 0};var we=ke,Ne=function(){var e=b((function(e){return e.auth.user})),t=e.name,n=e.email,a=e.role;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(re.a,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",bordered:!1,style:{maxWidth:500},children:[Object(d.jsxs)("p",{children:["\u0418\u043c\u044f: ",t]}),Object(d.jsxs)("p",{children:["Email: ",n]}),Object(d.jsxs)("p",{children:["\u0420\u043e\u043b\u044c: ",a]})]})})},Te=function(){return Object(d.jsxs)(u.d,{children:[Object(d.jsx)(we,{exact:!0,path:"/",component:D}),Object(d.jsx)(u.b,{path:"/auth/login",component:he}),Object(d.jsx)(u.b,{path:"/auth/register",component:Oe}),Object(d.jsx)(u.b,{path:"/auth/activation/:code",component:ve}),Object(d.jsx)(u.b,{path:"/auth/recover",component:fe}),Object(d.jsx)(u.b,{path:"/auth/change-password/:code",component:xe}),Object(d.jsx)(we,{path:"/user/profile",component:Ne}),Object(d.jsx)(we,{path:"/chat",component:ae}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsx)(u.a,{to:"/auth/login"})})]})},Se=o.a.Content,Ce=function(){var e=Object(a.useRef)(null),t=w([H],null),n=Object(i.a)(t,1)[0],r=b((function(e){return e.chat})).activeChannelId;return Object(a.useEffect)((function(){return ne.socket?(e.current=ne.socket,e.current.on("channel:message:broadcast",(function(e){var t=e.activeChannelId,a=e.message,r=e.from;n({activeChannelId:t,message:a,from:r})})),function(){e.current.off("channel:message:broadcast")}):null}),[r,n]),Object(d.jsxs)(o.a,{className:"wrap-layout",children:[Object(d.jsx)(B,{}),Object(d.jsxs)(o.a,{className:"site-layout",children:[Object(d.jsx)(z,{}),Object(d.jsx)(Se,{className:"content",children:Object(d.jsx)(Te,{})})]})]})},Ie=(n(316),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,338)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))}),Ee=n(180),Ae=n(181),Fe=n(22),ze=n(40),_e=G.a.mark(qe),Pe=G.a.mark(Le),Re=G.a.mark(Be),Ue=G.a.mark(De),He=G.a.mark(Me);function qe(e){var t,n,a,r,c;return G.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.data,a=t.token,s.next=3,Object(Fe.c)(C(n));case 3:return s.next=5,Object(Fe.a)([me,me.setToken],a);case 5:return s.next=7,Object(Fe.a)([ne,ne.connect]);case 7:return c=(r=[1,2]).reduce((function(e,t){return Object(ge.a)(Object(ge.a)({},e),{},Object(ze.a)({},t,{title:"channel".concat(t),messages:[]}))}),{}),s.next=11,Object(Fe.a)([ne,ne.subscribeToChannels],r);case 11:return s.next=13,Object(Fe.c)(U(c));case 13:case"end":return s.stop()}}),_e)}function Le(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)(T,qe);case 2:case"end":return e.stop()}}),Pe)}function Be(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.a)([me,me.removeToken]);case 2:return e.next=4,Object(Fe.c)(C(!1));case 4:return e.next=6,Object(Fe.c)(R(""));case 6:return e.next=8,Object(Fe.a)([ne,ne.disconnect]);case 8:case"end":return e.stop()}}),Re)}function De(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)(S,Be);case 2:case"end":return e.stop()}}),Ue)}function Me(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.b)(Le);case 2:return e.next=4,Object(Fe.b)(De);case 4:case"end":return e.stop()}}),He)}var Ve,We,Ge=n(323),Je=Object(Ge.a)((Ve={},Object(ze.a)(Ve,C,(function(e,t){return t.payload})),Object(ze.a)(Ve,I,(function(){return!1})),Ve),null),Ke=Object(k.combineReducers)({user:Je}),Qe=Object(Ge.a)(Object(ze.a)({},R,(function(e,t){return t.payload})),""),$e=Object(Ge.a)((We={},Object(ze.a)(We,U,(function(e,t){return t.payload})),Object(ze.a)(We,H,(function(e,t){return Object(ge.a)(Object(ge.a)({},e),{},Object(ze.a)({},t.payload.activeChannelId,Object(ge.a)(Object(ge.a)({},e[t.payload.activeChannelId]),{},{messages:[].concat(Object(y.a)(e[t.payload.activeChannelId].messages),[t.payload.message])})))})),We),null),Ze=Object(k.combineReducers)({activeChannelId:Qe,channels:$e}),Xe=G.a.mark((function e(){var t,n,a,r,c,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Fe.a)([me,me.getToken]);case 3:if(t=e.sent){e.next=8;break}return e.next=7,Object(Fe.c)(I());case 7:return e.abrupt("return");case 8:return e.next=10,Object(Fe.a)([me,me.fetchByToken],{token:t});case 10:if(n=e.sent,a=n.data,"TokenExpiredError"!==(r=n.message)&&"JsonWebTokenError"!==r){e.next=18;break}return e.next=16,Object(Fe.a)([me,me.removeToken]);case 16:return e.next=18,Object(Fe.c)(I());case 18:if(!a){e.next=29;break}return e.next=21,Object(Fe.c)(C(a));case 21:return e.next=23,Object(Fe.a)([ne,ne.connect]);case 23:return s=(c=[1,2]).reduce((function(e,t){return Object(ge.a)(Object(ge.a)({},e),{},Object(ze.a)({},t,{title:"channel".concat(t),messages:[]}))}),{}),e.next=27,Object(Fe.a)([ne,ne.subscribeToChannels],c);case 27:return e.next=29,Object(Fe.c)(U(s));case 29:e.next=37;break;case 31:return e.prev=31,e.t0=e.catch(0),e.next=35,Object(Fe.a)([me,me.removeToken]);case 35:return e.next=37,Object(Fe.c)(I(e.t0));case 37:case"end":return e.stop()}}),e,null,[[0,31]])})),Ye=G.a.mark(tt),et=Object(k.combineReducers)({auth:Ke,chat:Ze});function tt(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.b)(Me);case 2:return e.next=4,Object(Fe.b)(Xe);case 4:case"end":return e.stop()}}),Ye)}var nt=function(){var e=Object(Ae.a)(),t=Object(k.createStore)(et,Object(k.compose)(Object(Ee.composeWithDevTools)(Object(k.applyMiddleware)(e))));return e.run(tt),t}();Object(s.render)(Object(d.jsx)(a.StrictMode,{children:Object(d.jsx)(r.a,{store:nt,children:Object(d.jsx)(c.a,{children:Object(d.jsx)(Ce,{})})})}),document.getElementById("root")),Ie()}},[[317,1,2]]]);
//# sourceMappingURL=main.4a35db2e.chunk.js.map