(this["webpackJsonprooksgc-dev-client"]=this["webpackJsonprooksgc-dev-client"]||[]).push([[0],{317:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(62),c=a(37),s=a(38),i=a(20),o=a(320),u=a(328),l=a(336),j=a(337),b=a(30),d=a(329),p=a(332),O=function(e){return Object(r.d)(e,r.b)},m=a(3),h=[{key:"login",label:"\u0412\u043e\u0439\u0442\u0438",path:"/auth/login",icon:Object(m.jsx)(p.a,{})},{key:"register",label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/auth/register",icon:Object(m.jsx)(p.a,{})}],f=function(){var e,t=Object(b.h)(),a=Object(b.g)(),n=O((function(e){return e.auth.user})),r=null===(e=h.find((function(e){return t.pathname===e.path})))||void 0===e?void 0:e.key;if(n&&!r)return null;return Object(m.jsx)(d.a,{mode:"horizontal",selectedKeys:[r],onClick:function(e){if(e.key!==r){var t=h.find((function(t){return t.key===e.key}));a.push(t.path)}},children:h.map((function(e){return Object(m.jsx)(d.a.Item,{icon:e.icon,children:e.label},e.key)}))})},x=a(330),v=a(327),g=a(333),y=a(334),k=a(335),w=a(114),C=a(32),N=function(e,t){var a=Object(r.c)();return Object(n.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(C.bindActionCreators)(e,a)})):Object(C.bindActionCreators)(e,a)}),t?[a].concat(Object(w.a)(t)):[a])},S=a(331),T=Object(S.a)("AUTH/USER_LOGIN_REQUEST"),E=Object(S.a)("AUTH/USER_LOGOUT_REQUEST"),I=Object(S.a)("AUTH/USER_FETCH_SUCCESS"),F=Object(S.a)("AUTH/USER_FETCH_FAILURE"),A=function(){var e=Object(b.h)(),t=Object(b.g)(),a=N([E],null),n=Object(i.a)(a,1)[0],r=Object(m.jsxs)(d.a,{onClick:function(a){var r=a.key;if(e.pathname!=="/user/".concat(r))switch(r){case"profile":t.push("/user/profile");break;case"logout":n(),t.push("/auth/login")}},children:[Object(m.jsx)(d.a.Item,{icon:Object(m.jsx)(g.a,{}),children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},"profile"),Object(m.jsx)(d.a.Divider,{}),Object(m.jsx)(d.a.Item,{icon:Object(m.jsx)(y.a,{}),children:"\u0412\u044b\u0445\u043e\u0434"},"logout")]});return Object(m.jsx)(x.a,{overlay:r,trigger:["click"],children:Object(m.jsx)(v.a,{className:"user-profile",icon:Object(m.jsx)(k.a,{})})})},z=function(e){var t=e.children;return O((function(e){return e.auth.user}))?t:null},_=o.a.Header,P=function(e){var t=e.onSidebarToggle,a=e.sidebarCollapsed,n=e.currentChannel,r=function(){t(!a)};return Object(m.jsxs)(_,{className:"header background-white",children:[a?Object(m.jsx)(l.a,{style:{fontSize:"20px",padding:"22px"},className:"trigger",onClick:r,label:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c"}):Object(m.jsx)(j.a,{style:{fontSize:"20px",padding:"22px"},className:"trigger",onClick:r}),n&&Object(m.jsx)(u.a,{count:n,style:{marginBottom:"6px",backgroundColor:"#E7F3FF",color:"#000"}}),Object(m.jsxs)("div",{className:"header-menu",children:[Object(m.jsx)(f,{}),Object(m.jsx)(z,{children:Object(m.jsx)(A,{})})]})]})},R=a(338),U=a(339),H=a(340),q=a(341),L=function(e){Object(n.useEffect)((function(){var t=function(t){"Escape"===t.key&&e()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},B=Object(S.a)("CHAT/SET_ACTIVE_CHANNEL_ID"),D=Object(S.a)("CHAT/INIT_CHANNELS_DATA"),M=Object(S.a)("CHAT/ADD_CHANNEL_MESSAGE"),V=o.a.Sider,W=[{id:1,label:"\u041e\u0431\u0449\u0438\u0439 \u0447\u0430\u0442",icon:Object(m.jsx)(R.a,{})},{id:2,label:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043a\u0430\u043d\u0430\u043b",icon:Object(m.jsx)(U.a,{})},{id:3,label:"\u0414\u0432\u0430\u0447 \u0440\u0430\u043d\u0434\u043e\u043c\u0430\u0447",icon:Object(m.jsx)(R.a,{})},{id:4,label:"\u041a\u043b\u044e\u0431 \u043b\u044e\u0431\u0438\u0442\u0435\u043b\u0435\u0439 \u0441\u043e\u0441\u0443\u043b\u044c",icon:Object(m.jsx)(U.a,{})},{id:5,label:"\u0421\u043f\u043b\u0430\u0432\u044b \u0438 \u0431\u0430\u043d\u0438",icon:Object(m.jsx)(R.a,{})},{id:6,label:"\u041f\u043e\u0445\u043e\u0434\u044b \u0438 \u043f\u0435\u0440\u0434\u0430",icon:Object(m.jsx)(U.a,{})},{id:7,label:"\u0413\u0440\u0443\u043f\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0434\u0443\u043d\u043e\u0432",icon:Object(m.jsx)(R.a,{})},{id:8,label:"\u041a\u043e\u0442\u0438\u043a\u0438 \u0438 \u0441\u043b\u043e\u043d\u0438\u043a\u0438",icon:Object(m.jsx)(U.a,{})},{id:9,label:"\u041c\u0438\u0440 \u0434\u0438\u043a\u0438\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u0432",icon:Object(m.jsx)(R.a,{})},{id:10,label:"\u041f\u0430\u043a\u0435\u0442\u044b \u043c\u0443\u0441\u043e\u0440\u0430 \u0434\u043b\u044f \u0431\u0435\u0434\u043d\u044b\u0445",icon:Object(m.jsx)(U.a,{})},{id:11,label:"\u041f\u043e\u043a\u0443\u0440\u0438\u043c \u0431\u0430\u043c\u0431\u0443\u043a",icon:Object(m.jsx)(R.a,{})},{id:12,label:"\u0423\u043f\u043e\u0440\u043e\u0442\u044b\u0435 \u0441\u0443\u0441\u043b\u0438\u043a\u0438",icon:Object(m.jsx)(U.a,{})},{id:13,label:"\u0421\u043a\u0443\u0447\u043d\u044b\u0439 \u0432\u0442\u043e\u0440\u043d\u0438\u043a",icon:Object(m.jsx)(R.a,{})},{id:14,label:"\u0411\u0435\u0433\u0443, \u0430 \u0432\u043e\u043b\u043e\u0441\u044b \u043d\u0430\u0437\u0430\u0434",icon:Object(m.jsx)(R.a,{})},{id:15,label:"\u041f\u043e\u043f\u0435\u0440\u0445\u043d\u0438\u0441\u044c-\u043a\u0430",icon:Object(m.jsx)(R.a,{})},{id:16,label:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0410\u0439\u0422\u0418",icon:Object(m.jsx)(R.a,{})},{id:17,label:"\u041f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c \u0412\u042d",icon:Object(m.jsx)(R.a,{})},{id:18,label:"\u041f\u043e\u0434\u0441\u043b\u0443\u0448\u0430\u043d\u043e \u0432 \u0414\u0435\u0434\u043e\u0432\u0441\u043a\u0435",icon:Object(m.jsx)(R.a,{})}],G=function(e){var t=e.sidebarCollapsed,a=e.onSidebarToggle,n=e.onCurrentChannelChange,r=Object(b.h)(),c=Object(b.g)(),s=N([B],null),o=Object(i.a)(s,1)[0],u=O((function(e){return e.chat.activeChannelId}));L((function(){"/"===r.pathname&&u&&(o(""),n({id:0,label:""}))}));return Object(m.jsx)(z,{children:Object(m.jsxs)(V,{trigger:null,collapsed:t,collapsedWidth:0,className:"sider",theme:"dark",style:{overflow:"auto",height:"100vh"},children:[Object(m.jsx)(H.a,{className:"sidebar-lock"}),Object(m.jsx)(q.a,{}),Object(m.jsx)(d.a,{theme:"dark",mode:"inline",selectedKeys:[u],onClick:function(e){var t=e.key;if(t!==u){"/"!==r.pathname&&c.push("/");var s=W.find((function(e){return String(e.id)===t})),i=s.id,l=s.label;o(t),a(!0),n({id:i,label:l})}},children:W.map((function(e){return Object(m.jsx)(d.a.Item,{icon:e.icon,children:e.label},e.id)}))})]})})},J=a(186),K=function(e){var t=e.data.messages;return(null===t||void 0===t?void 0:t.length)?Object(m.jsx)("div",{className:"chat-window",children:t.map((function(e){var t=e.id,a=e.text,n=e.from;return Object(m.jsxs)("div",{children:[Object(m.jsx)("strong",{children:n}),": ",a]},t)}))}):Object(m.jsx)("div",{className:"chat-window"})},Q=a(10),$=a.n(Q),Z=a(26),X=a(322),Y=a(325),ee=a(80),te=a(342),ae=function(e){var t=e.sendMessage,a=X.a.useForm(),n=Object(i.a)(a,1)[0],r=function(){var e=Object(Z.a)($.a.mark((function e(a){var r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r=a.text,t(r),n.resetFields()}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"chat-input",children:Object(m.jsxs)(X.a,{size:"large",className:"input-form",form:n,onFinish:r,children:[Object(m.jsx)(X.a.Item,{className:"input-messaage",required:!0,name:"text",children:Object(m.jsx)(Y.a,{autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),Object(m.jsx)(X.a.Item,{className:"send-button",children:Object(m.jsx)(ee.a,{htmlType:"submit",type:"primary",icon:Object(m.jsx)(te.a,{}),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})},ne=Object(n.memo)(ae),re=a(43),ce=a(44),se=a(179),ie={socket:void 0,connect:function(){var e=Object(Z.a)($.a.mark((function e(t){var a,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),ie.socket||(ie.socket=Object(se.io)()),n=(a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]).reduce((function(e,t){return Object(ce.a)(Object(ce.a)({},e),{},Object(re.a)({},t,{title:"channel_".concat(t),messages:[]}))}),{}),ie.subscribeToChannels(a),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),disconnect:function(){ie.socket.disconnect(),ie.socket=void 0},subscribeToChannels:function(e){ie.socket.emit("channels:subscribe",e)},addMessageToChannel:function(e){ie.socket.emit("channel:message:add",e)}},oe=ie,ue=function(){var e=O((function(e){return e.auth.user})),t=N([M],null),a=Object(i.a)(t,1)[0],r=O((function(e){return e.chat})),c=r.activeChannelId,s=r.channels,o=Object(n.useCallback)((function(t){if(c&&t){var n={id:Object(J.a)(),text:t,from:e.name};a({activeChannelId:c,message:n}),oe.addMessageToChannel({activeChannelId:c,message:n})}}),[c,a,e.name]);if(!e||!c||!s)return null;var u=s[c];return u?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(K,{data:u}),Object(m.jsx)(ne,{sendMessage:o})]}):null},le=a(323),je=a(326),be=a(321),de=a(343),pe=a(90),Oe=a(135),me=a.n(Oe),he="auth",fe=function(e){var t=e.response,a=t.data,n=t.status;return"string"!==typeof a||502!==n&&500!==n?"No authorization token was found"===(null===a||void 0===a?void 0:a.message)?{type:"error",message:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e."}:a:{type:"error",message:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0434\u043d\u0435\u0435."}},xe={getAllUsers:function(){var e=Object(Z.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"get",endpoint:"/api/v1/auth/users"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),register:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"put",endpoint:"/api/v1/auth/register",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),activate:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"patch",endpoint:"/api/v1/auth/activate/".concat(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"post",endpoint:"/api/v1/auth/login",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchByToken:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"post",endpoint:"/api/v1/auth/fetch-by-token",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),recover:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"post",endpoint:"/api/v1/auth/recover",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),checkSecret:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"post",endpoint:"/api/v1/auth/check-secret",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changePassword:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xe.send({method:"patch",endpoint:"/api/v1/auth/change-password",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return localStorage.getItem(he)},setToken:function(e){return localStorage.setItem(he,e)},removeToken:function(){return localStorage.removeItem(he)},send:function(){var e=Object(Z.a)($.a.mark((function e(t){var a,n,r,c,s;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.method,n=t.endpoint,r=t.payload,c=void 0===r?{}:r,e.prev=1,e.next=4,me.a[a](n,c);case 4:return s=e.sent,e.abrupt("return",s.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",fe(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};me.a.interceptors.request.use((function(e){var t=xe.getToken();return t&&(e.headers={Authorization:"Bearer ".concat(t)}),e}),(function(e){return fe(e)}));var ve=xe,ge=function(){var e={type:"",message:""},t=X.a.useForm(),a=Object(i.a)(t,1)[0],r=Object(n.useState)(e),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(n.useState)(!1),j=Object(i.a)(l,2),d=j[0],p=j[1],O=N([T],null),h=Object(i.a)(O,1)[0],f=Object(b.g)(),x=function(){var t=Object(Z.a)($.a.mark((function t(a){var n,r,c,s,i,o,l;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(e),p(!0),n=a.email,r=a.password,t.next=6,ve.login({email:n,password:r});case 6:if(c=t.sent,s=c.type,i=c.message,o=c.token,l=c.data,!i){t.next=16;break}if(u({type:s,message:i}),p(!1),"error"!==s){t.next=16;break}return t.abrupt("return");case 16:h({data:l,token:o}),p(!1),f.push("/"),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(0),u(t.t0),p(!1);case 25:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"flex-center",children:Object(m.jsxs)(le.a,{className:"card",title:"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443",children:[o.message&&Object(m.jsx)(je.a,{className:"alert",message:o.message,type:o.type}),Object(m.jsxs)(X.a,{form:a,name:"login",className:"login-form",initialValues:{remember:!0},onFinish:x,children:[Object(m.jsx)(X.a.Item,{name:"email",rules:[{required:!0,type:"email",min:4,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(m.jsx)(Y.a,{prefix:Object(m.jsx)(de.a,{}),placeholder:"Email",size:"large"})}),Object(m.jsx)(X.a.Item,{name:"password",rules:[{required:!0,min:6,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}],children:Object(m.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(m.jsx)(H.a,{}),size:"large"})}),Object(m.jsxs)(X.a.Item,{children:[Object(m.jsx)(X.a.Item,{name:"register",noStyle:!0,children:Object(m.jsx)(c.b,{to:"/auth/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(m.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})]}),d&&Object(m.jsx)(be.a,{className:"center",indicator:Object(m.jsx)(pe.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(m.jsx)(ee.a,{size:"large",type:"primary",htmlType:"submit",block:!0,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},ye=function(){var e={type:"",message:""},t=X.a.useForm(),a=Object(i.a)(t,1)[0],r=Object(n.useState)(e),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(n.useState)(!1),l=Object(i.a)(u,2),j=l[0],b=l[1],d=function(){var t=Object(Z.a)($.a.mark((function t(n){var r,c,s,i,u,l;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(e),b(!0),r=n.name,c=n.email,s=n.password,t.next=6,ve.register({name:r,email:c,password:s});case 6:if(i=t.sent,u=i.type,!(l=i.message)){t.next=14;break}if(o({type:u,message:l}),b(!1),"error"!==u){t.next=14;break}return t.abrupt("return");case 14:a.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),o(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"flex-center",children:Object(m.jsxs)(le.a,{className:"card",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:[s.message&&Object(m.jsx)(je.a,{className:"alert",message:s.message,type:s.type}),Object(m.jsxs)(X.a,{form:a,name:"register",initialValues:{remember:!0},onFinish:d,validateTrigger:"onBlur",children:[Object(m.jsx)(X.a.Item,{name:"name",rules:[{required:!0,message:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0438\u043b\u0438 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0446\u0438\u0444\u0440\u044b \u0438 \u0437\u043d\u0430\u043a\u0438 '- _'",pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u04010-9-_\s]{4,}$/}],children:Object(m.jsx)(Y.a,{placeholder:"\u0418\u043c\u044f",size:"large",prefix:Object(m.jsx)(k.a,{})})}),Object(m.jsx)(X.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(m.jsx)(Y.a,{prefix:Object(m.jsx)(de.a,{}),placeholder:"Email",size:"large"})}),Object(m.jsx)(X.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6}],children:Object(m.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(m.jsx)(H.a,{}),size:"large"})}),Object(m.jsx)(X.a.Item,{name:"confirm-password",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(m.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(m.jsx)(H.a,{}),size:"large"})}),j&&Object(m.jsx)(be.a,{className:"center",indicator:Object(m.jsx)(pe.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(m.jsx)(ee.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:j,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})},ke=function(){var e={type:"",message:""},t=X.a.useForm(),a=Object(i.a)(t,1)[0],r=Object(n.useState)(e),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(n.useState)(!1),l=Object(i.a)(u,2),j=l[0],b=l[1],d=function(){var t=Object(Z.a)($.a.mark((function t(n){var r,c,s,i;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(e),b(!0),r=n.email,t.next=6,ve.recover({email:r});case 6:if(c=t.sent,s=c.type,!(i=c.message)){t.next=14;break}if(o({type:s,message:i}),b(!1),"error"!==s){t.next=14;break}return t.abrupt("return");case 14:a.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),o(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"flex-center",children:Object(m.jsxs)(le.a,{className:"card",title:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(m.jsx)(je.a,{className:"alert",message:s.message,type:s.type}),"success"!==s.type&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u043d\u0430 \u043d\u0435\u0433\u043e \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f."}),Object(m.jsxs)(X.a,{form:a,name:"recover",className:"login-form",initialValues:{remember:!0},onFinish:d,validateTrigger:"onBlur",children:[Object(m.jsx)(X.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email!"}],children:Object(m.jsx)(Y.a,{prefix:Object(m.jsx)(de.a,{}),placeholder:"Email",size:"large"})}),j&&Object(m.jsx)(be.a,{className:"center",indicator:Object(m.jsx)(pe.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(m.jsx)(ee.a,{size:"large",type:"primary",htmlType:"submit",block:!0,disabled:j,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},we=function(){var e=Object(b.i)().code,t={type:"",message:""},a=Object(n.useState)(t),r=Object(i.a)(a,2),s=r[0],o=r[1],u=Object(n.useState)(!1),l=Object(i.a)(u,2),j=l[0],d=l[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),h=O[0],f=O[1],x=Object(n.useState)(!1),v=Object(i.a)(x,2),g=v[0],y=v[1];Object(n.useEffect)((function(){var t=function(){var t=Object(Z.a)($.a.mark((function t(){var a,n,r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ve.checkSecret({code:e,secretType:"RECOVER_PASSWORD"});case 2:a=t.sent,n=a.type,r=a.message,"error"===n&&(o({type:n,message:r}),d(!0));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)?t():(o({type:"error",message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043e\u0434!"}),d(!0))}),[e]);var k=function(){var a=Object(Z.a)($.a.mark((function a(n){var r,c,s,i;return $.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o(t),y(!0),r=n.password,a.next=6,ve.changePassword({code:e,password:r});case 6:if(c=a.sent,s=c.type,!(i=c.message)){a.next=14;break}if(o({type:s,message:i}),y(!1),"error"!==s){a.next=14;break}return a.abrupt("return");case 14:f(!0),y(!1),a.next=22;break;case 18:a.prev=18,a.t0=a.catch(0),o(a.t0),y(!1);case 22:case"end":return a.stop()}}),a,null,[[0,18]])})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"flex-center",children:Object(m.jsxs)(le.a,{className:"card",title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(m.jsx)(je.a,{className:"alert",message:s.message,type:s.type}),h&&Object(m.jsxs)("p",{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",Object(m.jsx)(c.b,{to:"/auth/login",children:"\u0412\u043e\u0439\u0442\u0438"})," \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"]}),!j&&!h&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsxs)(X.a,{name:"change-password-request",initialValues:{remember:!0},onFinish:k,children:[Object(m.jsx)(X.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(m.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(m.jsx)(H.a,{}),size:"large"})}),Object(m.jsx)(X.a.Item,{name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(m.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(m.jsx)(H.a,{}),size:"large"})}),Object(m.jsx)(ee.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:g,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},Ce=function(){var e=Object(b.i)().code,t=Object(n.useState)({type:"",message:""}),a=Object(i.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(Z.a)($.a.mark((function t(){var a,n,r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ve.activate(e);case 2:a=t.sent,n=a.type,(r=a.message)&&s({type:n,message:r});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(m.jsx)("div",{className:"flex-center",children:Object(m.jsxs)(le.a,{className:"card",title:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:[r.message&&Object(m.jsx)(je.a,{className:"alert",message:r.message,type:r.type}),Object(m.jsx)(c.b,{className:"login-link",to:"/auth/login",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})})},Ne=a(187),Se=function(e){var t=e.component,a=e.children,n=Object(Ne.a)(e,["component","children"]),r=O((function(e){return e.auth.user}));return Object(m.jsx)(b.b,Object(ce.a)(Object(ce.a)({},n),{},{render:function(e){return null===r?null:!1===r?Object(m.jsx)(b.a,{to:{pathname:"/auth/login",state:{from:e.location}}}):t?Object(m.jsx)(t,Object(ce.a)({},e)):a}}))};Se.defaultProps={component:void 0};var Te=Se,Ee=function(){var e=O((function(e){return e.auth.user})),t=e.name,a=e.email,n=e.role;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(le.a,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",bordered:!1,style:{maxWidth:500},children:[Object(m.jsxs)("p",{children:["\u0418\u043c\u044f: ",t]}),Object(m.jsxs)("p",{children:["Email: ",a]}),Object(m.jsxs)("p",{children:["\u0420\u043e\u043b\u044c: ",n]})]})})},Ie=function(){return Object(m.jsxs)(b.d,{children:[Object(m.jsx)(Te,{exact:!0,path:"/",component:ue}),Object(m.jsx)(b.b,{path:"/auth/login",component:ge}),Object(m.jsx)(b.b,{path:"/auth/register",component:ye}),Object(m.jsx)(b.b,{path:"/auth/activation/:code",component:Ce}),Object(m.jsx)(b.b,{path:"/auth/recover",component:ke}),Object(m.jsx)(b.b,{path:"/auth/change-password/:code",component:we}),Object(m.jsx)(Te,{path:"/user/profile",component:Ee}),Object(m.jsx)(b.b,{path:"*",children:Object(m.jsx)(b.a,{to:"/auth/login"})})]})},Fe=o.a.Content,Ae=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),u=s[0],l=s[1],j=Object(n.useRef)(null),b=N([M],null),d=Object(i.a)(b,1)[0],p=O((function(e){return e.chat})).activeChannelId,h=function(e){l(e)};return Object(n.useEffect)((function(){return oe.socket?(j.current=oe.socket,j.current.on("channel:message:broadcast",(function(e){var t=e.activeChannelId,a=e.message,n=e.from;d({activeChannelId:t,message:a,from:n})})),function(){j.current.off("channel:message:broadcast")}):null}),[p,d]),Object(m.jsxs)(o.a,{className:"wrap-layout",children:[Object(m.jsx)(G,{sidebarCollapsed:u,onSidebarToggle:h,onCurrentChannelChange:function(e){var t=e.label;r(t)}}),Object(m.jsxs)(o.a,{className:"site-layout",children:[Object(m.jsx)(P,{sidebarCollapsed:u,onSidebarToggle:h,currentChannel:a}),Object(m.jsx)(Fe,{className:"content",children:Object(m.jsx)(Ie,{})})]})]})},ze=(a(317),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,344)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))}),_e=a(181),Pe=a(182),Re=a(23),Ue=$.a.mark(De),He=$.a.mark(Me),qe=$.a.mark(Ve),Le=$.a.mark(We),Be=$.a.mark(Ge);function De(e){var t,a,n,r;return $.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.data,n=t.token,c.next=3,Object(Re.c)(I(a));case 3:return c.next=5,Object(Re.a)([ve,ve.setToken],n);case 5:return c.next=7,Object(Re.a)([oe,oe.connect],a);case 7:return r=c.sent,c.next=10,Object(Re.c)(D(r));case 10:case"end":return c.stop()}}),Ue)}function Me(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(T,De);case 2:case"end":return e.stop()}}),He)}function Ve(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.a)([ve,ve.removeToken]);case 2:return e.next=4,Object(Re.c)(I(!1));case 4:return e.next=6,Object(Re.c)(B(""));case 6:return e.next=8,Object(Re.a)([oe,oe.disconnect]);case 8:case"end":return e.stop()}}),qe)}function We(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(E,Ve);case 2:case"end":return e.stop()}}),Le)}function Ge(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.b)(Me);case 2:return e.next=4,Object(Re.b)(We);case 4:case"end":return e.stop()}}),Be)}var Je,Ke,Qe=a(324),$e=Object(Qe.a)((Je={},Object(re.a)(Je,I,(function(e,t){return t.payload})),Object(re.a)(Je,F,(function(){return!1})),Je),null),Ze=Object(C.combineReducers)({user:$e}),Xe=Object(Qe.a)(Object(re.a)({},B,(function(e,t){return t.payload})),""),Ye=Object(Qe.a)((Ke={},Object(re.a)(Ke,D,(function(e,t){return t.payload})),Object(re.a)(Ke,M,(function(e,t){return Object(ce.a)(Object(ce.a)({},e),{},Object(re.a)({},t.payload.activeChannelId,Object(ce.a)(Object(ce.a)({},e[t.payload.activeChannelId]),{},{messages:[].concat(Object(w.a)(e[t.payload.activeChannelId].messages),[t.payload.message])})))})),Ke),null),et=Object(C.combineReducers)({activeChannelId:Xe,channels:Ye}),tt=$.a.mark((function e(){var t,a,n,r,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Re.a)([ve,ve.getToken]);case 3:if(t=e.sent){e.next=8;break}return e.next=7,Object(Re.c)(F());case 7:return e.abrupt("return");case 8:return e.next=10,Object(Re.a)([ve,ve.fetchByToken],{token:t});case 10:if(a=e.sent,n=a.data,"TokenExpiredError"!==(r=a.message)&&"JsonWebTokenError"!==r){e.next=18;break}return e.next=16,Object(Re.a)([ve,ve.removeToken]);case 16:return e.next=18,Object(Re.c)(F());case 18:if(!n){e.next=26;break}return e.next=21,Object(Re.c)(I(n));case 21:return e.next=23,Object(Re.a)([oe,oe.connect],n);case 23:return c=e.sent,e.next=26,Object(Re.c)(D(c));case 26:e.next=34;break;case 28:return e.prev=28,e.t0=e.catch(0),e.next=32,Object(Re.a)([ve,ve.removeToken]);case 32:return e.next=34,Object(Re.c)(F(e.t0));case 34:case"end":return e.stop()}}),e,null,[[0,28]])})),at=$.a.mark(rt),nt=Object(C.combineReducers)({auth:Ze,chat:et});function rt(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.b)(Ge);case 2:return e.next=4,Object(Re.b)(tt);case 4:case"end":return e.stop()}}),at)}var ct=function(){var e=Object(Pe.a)(),t=Object(C.createStore)(nt,Object(C.compose)(Object(_e.composeWithDevTools)(Object(C.applyMiddleware)(e))));return e.run(rt),t}();Object(s.render)(Object(m.jsx)(n.StrictMode,{children:Object(m.jsx)(r.a,{store:ct,children:Object(m.jsx)(c.a,{children:Object(m.jsx)(Ae,{})})})}),document.getElementById("root")),ze()}},[[318,1,2]]]);
//# sourceMappingURL=main.543dc069.chunk.js.map