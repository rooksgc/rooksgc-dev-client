(this["webpackJsonprooksgc-dev-client"]=this["webpackJsonprooksgc-dev-client"]||[]).push([[0],{317:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(62),c=n(37),s=n(38),i=n(20),o=n(320),u=n(328),l=n(336),j=n(337),b=n(30),d=n(329),p=n(332),m=function(e){return Object(r.d)(e,r.b)},O=n(3),h=[{key:"login",label:"\u0412\u043e\u0439\u0442\u0438",path:"/auth/login",icon:Object(O.jsx)(p.a,{})},{key:"register",label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/auth/register",icon:Object(O.jsx)(p.a,{})}],f=function(){var e,t=Object(b.h)(),n=Object(b.g)(),a=m((function(e){return e.auth.user})),r=null===(e=h.find((function(e){return t.pathname===e.path})))||void 0===e?void 0:e.key;if(a&&!r)return null;return Object(O.jsx)(d.a,{mode:"horizontal",selectedKeys:[r],onClick:function(e){if(e.key!==r){var t=h.find((function(t){return t.key===e.key}));n.push(t.path)}},children:h.map((function(e){return Object(O.jsx)(d.a.Item,{icon:e.icon,children:e.label},e.key)}))})},x=n(330),v=n(327),g=n(333),y=n(334),k=n(335),w=n(114),C=n(32),N=function(e,t){var n=Object(r.c)();return Object(a.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(C.bindActionCreators)(e,n)})):Object(C.bindActionCreators)(e,n)}),t?[n].concat(Object(w.a)(t)):[n])},S=n(331),T=Object(S.a)("AUTH/USER_LOGIN_REQUEST"),E=Object(S.a)("AUTH/USER_LOGOUT_REQUEST"),I=Object(S.a)("AUTH/USER_FETCH_SUCCESS"),F=Object(S.a)("AUTH/USER_FETCH_FAILURE"),A=function(){var e=Object(b.h)(),t=Object(b.g)(),n=N([E],null),a=Object(i.a)(n,1)[0],r=Object(O.jsxs)(d.a,{onClick:function(n){var r=n.key;if(e.pathname!=="/user/".concat(r))switch(r){case"profile":t.push("/user/profile");break;case"logout":a(),t.push("/auth/login")}},children:[Object(O.jsx)(d.a.Item,{icon:Object(O.jsx)(g.a,{}),children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},"profile"),Object(O.jsx)(d.a.Divider,{}),Object(O.jsx)(d.a.Item,{icon:Object(O.jsx)(y.a,{}),children:"\u0412\u044b\u0445\u043e\u0434"},"logout")]});return Object(O.jsx)(x.a,{overlay:r,trigger:["click"],children:Object(O.jsx)(v.a,{className:"user-profile",icon:Object(O.jsx)(k.a,{})})})},z=function(e){var t=e.children;return m((function(e){return e.auth.user}))?t:null},_=o.a.Header,P=function(e){var t=e.onSidebarToggle,n=e.sidebarCollapsed,a=e.currentChannel,r=function(){t(!n)};return Object(O.jsxs)(_,{className:"header background-white",children:[n?Object(O.jsx)(l.a,{style:{fontSize:"20px",padding:"22px"},className:"trigger",onClick:r,label:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c"}):Object(O.jsx)(j.a,{style:{fontSize:"20px",padding:"22px"},className:"trigger",onClick:r}),a&&Object(O.jsx)(u.a,{count:a,style:{marginBottom:"6px",backgroundColor:"#E7F3FF",color:"#000"}}),Object(O.jsxs)("div",{className:"header-menu",children:[Object(O.jsx)(f,{}),Object(O.jsx)(z,{children:Object(O.jsx)(A,{})})]})]})},U=n(338),R=n(339),H=n(340),q=n(341),D=function(e){Object(a.useEffect)((function(){var t=function(t){"Escape"===t.key&&e()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},L=Object(S.a)("CHAT/SET_ACTIVE_CHANNEL_ID"),B=Object(S.a)("CHAT/INIT_CHANNELS_DATA"),M=Object(S.a)("CHAT/ADD_CHANNEL_MESSAGE"),V=o.a.Sider,W=[{id:1,label:"\u041e\u0431\u0449\u0438\u0439 \u0447\u0430\u0442",icon:Object(O.jsx)(U.a,{})},{id:2,label:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043a\u0430\u043d\u0430\u043b",icon:Object(O.jsx)(R.a,{})},{id:3,label:"\u0414\u0432\u0430\u0447 \u0440\u0430\u043d\u0434\u043e\u043c\u0430\u0447",icon:Object(O.jsx)(U.a,{})},{id:4,label:"\u041a\u043b\u044e\u0431 \u043b\u044e\u0431\u0438\u0442\u0435\u043b\u0435\u0439 \u0441\u043e\u0441\u0443\u043b\u044c",icon:Object(O.jsx)(R.a,{})},{id:5,label:"\u0421\u043f\u043b\u0430\u0432\u044b \u0438 \u0431\u0430\u043d\u0438",icon:Object(O.jsx)(U.a,{})},{id:6,label:"\u041f\u043e\u0445\u043e\u0434\u044b \u0438 \u043f\u0435\u0440\u0434\u0430",icon:Object(O.jsx)(R.a,{})},{id:7,label:"\u0413\u0440\u0443\u043f\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0434\u0443\u043d\u043e\u0432",icon:Object(O.jsx)(U.a,{})},{id:8,label:"\u041a\u043e\u0442\u0438\u043a\u0438 \u0438 \u0441\u043b\u043e\u043d\u0438\u043a\u0438",icon:Object(O.jsx)(R.a,{})},{id:9,label:"\u041c\u0438\u0440 \u0434\u0438\u043a\u0438\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u0432",icon:Object(O.jsx)(U.a,{})},{id:10,label:"\u041f\u0430\u043a\u0435\u0442\u044b \u043c\u0443\u0441\u043e\u0440\u0430 \u0434\u043b\u044f \u0431\u0435\u0434\u043d\u044b\u0445",icon:Object(O.jsx)(R.a,{})},{id:11,label:"\u041f\u043e\u043a\u0443\u0440\u0438\u043c \u0431\u0430\u043c\u0431\u0443\u043a",icon:Object(O.jsx)(U.a,{})},{id:12,label:"\u0423\u043f\u043e\u0440\u043e\u0442\u044b\u0435 \u0441\u0443\u0441\u043b\u0438\u043a\u0438",icon:Object(O.jsx)(R.a,{})},{id:13,label:"\u0421\u043a\u0443\u0447\u043d\u044b\u0439 \u0432\u0442\u043e\u0440\u043d\u0438\u043a",icon:Object(O.jsx)(U.a,{})},{id:14,label:"\u0411\u0435\u0433\u0443, \u0430 \u0432\u043e\u043b\u043e\u0441\u044b \u043d\u0430\u0437\u0430\u0434",icon:Object(O.jsx)(U.a,{})},{id:15,label:"\u041f\u043e\u043f\u0435\u0440\u0445\u043d\u0438\u0441\u044c-\u043a\u0430",icon:Object(O.jsx)(U.a,{})},{id:16,label:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0410\u0439\u0422\u0418",icon:Object(O.jsx)(U.a,{})},{id:17,label:"\u041f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c \u0412\u042d",icon:Object(O.jsx)(U.a,{})},{id:18,label:"\u041f\u043e\u0434\u0441\u043b\u0443\u0448\u0430\u043d\u043e \u0432 \u0414\u0435\u0434\u043e\u0432\u0441\u043a\u0435",icon:Object(O.jsx)(U.a,{})}],G=function(e){var t=e.sidebarCollapsed,n=e.onSidebarToggle,a=e.onCurrentChannelChange,r=Object(b.h)(),c=Object(b.g)(),s=N([L],null),o=Object(i.a)(s,1)[0],u=m((function(e){return e.chat.activeChannelId}));D((function(){"/"===r.pathname&&u&&(o(""),a({id:0,label:""}))}));return Object(O.jsx)(z,{children:Object(O.jsxs)(V,{trigger:null,collapsed:t,collapsedWidth:0,className:"sider",theme:"dark",style:{overflow:"auto",height:"100vh"},children:[Object(O.jsx)(H.a,{className:"sidebar-lock"}),Object(O.jsx)(q.a,{}),Object(O.jsx)(d.a,{theme:"dark",mode:"inline",selectedKeys:[u],onClick:function(e){var t=e.key;if(t!==u){"/"!==r.pathname&&c.push("/");var s=W.find((function(e){return String(e.id)===t})),i=s.id,l=s.label;o(t),n(!0),a({id:i,label:l})}},children:W.map((function(e){return Object(O.jsx)(d.a.Item,{icon:e.icon,children:e.label},e.id)}))})]})})},J=n(186),K=function(e){var t=e.data.messages;return(null===t||void 0===t?void 0:t.length)?Object(O.jsx)("div",{className:"chat-window",children:t.map((function(e){var t=e.id,n=e.text,a=e.from;return Object(O.jsxs)("div",{children:[Object(O.jsx)("strong",{children:a}),": ",n]},t)}))}):Object(O.jsx)("div",{className:"chat-window"})},Q=n(8),$=n.n(Q),Z=n(23),X=n(322),Y=n(325),ee=n(80),te=n(342),ne=function(e){var t=e.sendMessage,n=X.a.useForm(),a=Object(i.a)(n,1)[0],r=function(){var e=Object(Z.a)($.a.mark((function e(n){var r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r=n.text,t(r),a.resetFields()}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"chat-input",children:Object(O.jsxs)(X.a,{size:"large",className:"input-form",form:a,onFinish:r,children:[Object(O.jsx)(X.a.Item,{className:"input-messaage",required:!0,name:"text",children:Object(O.jsx)(Y.a,{autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),Object(O.jsx)(X.a.Item,{className:"send-button",children:Object(O.jsx)(ee.a,{htmlType:"submit",type:"primary",icon:Object(O.jsx)(te.a,{}),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})},ae=Object(a.memo)(ne),re=n(43),ce=n(44),se=n(179),ie={getUserChannelsData:function(){var e=Object(Z.a)($.a.mark((function e(t){var n,a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],e.next=4,n.reduce((function(e,t){return Object(ce.a)(Object(ce.a)({},e),{},Object(re.a)({},t,{title:"channel_".concat(t),messages:[]}))}),{});case 4:return a=e.sent,e.abrupt("return",{userChannelsList:n,userChannelsData:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},oe={socket:void 0,connect:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return oe.socket||(oe.socket=Object(se.io)({autoConnect:!1}),oe.socket.connect()),e.abrupt("return",oe.subscribeToChannels(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),subscribeToChannels:function(){var e=Object(Z.a)($.a.mark((function e(t){var n,a,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.getUserChannelsData(t);case 2:return n=e.sent,a=n.userChannelsList,r=n.userChannelsData,oe.socket.emit("channels:subscribe",a),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addMessageToChannel:function(e){oe.socket.emit("channel:message:add",e)},disconnect:function(){oe.socket.disconnect(),oe.socket=void 0}},ue=oe,le=function(){var e=m((function(e){return e.auth.user})),t=N([M],null),n=Object(i.a)(t,1)[0],r=m((function(e){return e.chat})),c=r.activeChannelId,s=r.channels,o=Object(a.useCallback)((function(t){if(c&&t){var a={id:Object(J.a)(),text:t,from:e.name};n({activeChannelId:c,message:a}),ue.addMessageToChannel({activeChannelId:c,message:a})}}),[c,n,e.name]);if(!e||!c||!s)return null;var u=s[c];return u?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(K,{data:u}),Object(O.jsx)(ae,{sendMessage:o})]}):null},je=n(323),be=n(326),de=n(321),pe=n(343),me=n(90),Oe=n(135),he=n.n(Oe),fe="auth",xe=function(e){var t=e.response,n=t.data,a=t.status;return"string"!==typeof n||502!==a&&500!==a?"No authorization token was found"===(null===n||void 0===n?void 0:n.message)?{type:"error",message:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e."}:n:{type:"error",message:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0434\u043d\u0435\u0435."}},ve={getAllUsers:function(){var e=Object(Z.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"get",endpoint:"/api/v1/auth/users"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),register:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"put",endpoint:"/api/v1/auth/register",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),activate:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"patch",endpoint:"/api/v1/auth/activate/".concat(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"post",endpoint:"/api/v1/auth/login",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchByToken:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"post",endpoint:"/api/v1/auth/fetch-by-token",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),recover:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"post",endpoint:"/api/v1/auth/recover",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),checkSecret:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"post",endpoint:"/api/v1/auth/check-secret",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changePassword:function(){var e=Object(Z.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ve.send({method:"patch",endpoint:"/api/v1/auth/change-password",payload:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getToken:function(){return localStorage.getItem(fe)},setToken:function(e){return localStorage.setItem(fe,e)},removeToken:function(){return localStorage.removeItem(fe)},send:function(){var e=Object(Z.a)($.a.mark((function e(t){var n,a,r,c,s;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,a=t.endpoint,r=t.payload,c=void 0===r?{}:r,e.prev=1,e.next=4,he.a[n](a,c);case 4:return s=e.sent,e.abrupt("return",s.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",xe(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};he.a.interceptors.request.use((function(e){var t=ve.getToken();return t&&(e.headers={Authorization:"Bearer ".concat(t)}),e}),(function(e){return xe(e)}));var ge=ve,ye=function(){var e={type:"",message:""},t=X.a.useForm(),n=Object(i.a)(t,1)[0],r=Object(a.useState)(e),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!1),j=Object(i.a)(l,2),d=j[0],p=j[1],m=N([T],null),h=Object(i.a)(m,1)[0],f=Object(b.g)(),x=function(){var t=Object(Z.a)($.a.mark((function t(n){var a,r,c,s,i,o,l;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(e),p(!0),a=n.email,r=n.password,t.next=6,ge.login({email:a,password:r});case 6:if(c=t.sent,s=c.type,i=c.message,o=c.token,l=c.data,!i){t.next=16;break}if(u({type:s,message:i}),p(!1),"error"!==s){t.next=16;break}return t.abrupt("return");case 16:h({data:l,token:o}),p(!1),f.push("/"),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(0),u(t.t0),p(!1);case 25:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"flex-center",children:Object(O.jsxs)(je.a,{className:"card",title:"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443",children:[o.message&&Object(O.jsx)(be.a,{className:"alert",message:o.message,type:o.type}),Object(O.jsxs)(X.a,{form:n,name:"login",className:"login-form",initialValues:{remember:!0},onFinish:x,children:[Object(O.jsx)(X.a.Item,{name:"email",rules:[{required:!0,type:"email",min:4,message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(O.jsx)(Y.a,{prefix:Object(O.jsx)(pe.a,{}),placeholder:"Email",size:"large"})}),Object(O.jsx)(X.a.Item,{name:"password",rules:[{required:!0,min:6,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}],children:Object(O.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(O.jsx)(H.a,{}),size:"large"})}),Object(O.jsxs)(X.a.Item,{children:[Object(O.jsx)(X.a.Item,{name:"register",noStyle:!0,children:Object(O.jsx)(c.b,{to:"/auth/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(O.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})]}),d&&Object(O.jsx)(de.a,{className:"center",indicator:Object(O.jsx)(me.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(O.jsx)(ee.a,{size:"large",type:"primary",htmlType:"submit",block:!0,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},ke=function(){var e={type:"",message:""},t=X.a.useForm(),n=Object(i.a)(t,1)[0],r=Object(a.useState)(e),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),j=l[0],b=l[1],d=function(){var t=Object(Z.a)($.a.mark((function t(a){var r,c,s,i,u,l;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(e),b(!0),r=a.name,c=a.email,s=a.password,t.next=6,ge.register({name:r,email:c,password:s});case 6:if(i=t.sent,u=i.type,!(l=i.message)){t.next=14;break}if(o({type:u,message:l}),b(!1),"error"!==u){t.next=14;break}return t.abrupt("return");case 14:n.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),o(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"flex-center",children:Object(O.jsxs)(je.a,{className:"card",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:[s.message&&Object(O.jsx)(be.a,{className:"alert",message:s.message,type:s.type}),Object(O.jsxs)(X.a,{form:n,name:"register",initialValues:{remember:!0},onFinish:d,validateTrigger:"onBlur",children:[Object(O.jsx)(X.a.Item,{name:"name",rules:[{required:!0,message:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0438\u043b\u0438 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0446\u0438\u0444\u0440\u044b \u0438 \u0437\u043d\u0430\u043a\u0438 '- _'",pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u04010-9-_\s]{4,}$/}],children:Object(O.jsx)(Y.a,{placeholder:"\u0418\u043c\u044f",size:"large",prefix:Object(O.jsx)(k.a,{})})}),Object(O.jsx)(X.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}],children:Object(O.jsx)(Y.a,{prefix:Object(O.jsx)(pe.a,{}),placeholder:"Email",size:"large"})}),Object(O.jsx)(X.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6}],children:Object(O.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(O.jsx)(H.a,{}),size:"large"})}),Object(O.jsx)(X.a.Item,{name:"confirm-password",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f! \u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",min:6},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(O.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(O.jsx)(H.a,{}),size:"large"})}),j&&Object(O.jsx)(de.a,{className:"center",indicator:Object(O.jsx)(me.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(O.jsx)(ee.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:j,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})},we=function(){var e={type:"",message:""},t=X.a.useForm(),n=Object(i.a)(t,1)[0],r=Object(a.useState)(e),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),j=l[0],b=l[1],d=function(){var t=Object(Z.a)($.a.mark((function t(a){var r,c,s,i;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(e),b(!0),r=a.email,t.next=6,ge.recover({email:r});case 6:if(c=t.sent,s=c.type,!(i=c.message)){t.next=14;break}if(o({type:s,message:i}),b(!1),"error"!==s){t.next=14;break}return t.abrupt("return");case 14:n.resetFields(),b(!1),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),o(t.t0),b(!1);case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"flex-center",children:Object(O.jsxs)(je.a,{className:"card",title:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(O.jsx)(be.a,{className:"alert",message:s.message,type:s.type}),"success"!==s.type&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u043d\u0430 \u043d\u0435\u0433\u043e \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f."}),Object(O.jsxs)(X.a,{form:n,name:"recover",className:"login-form",initialValues:{remember:!0},onFinish:d,validateTrigger:"onBlur",children:[Object(O.jsx)(X.a.Item,{name:"email",rules:[{required:!0,type:"email",message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email!"}],children:Object(O.jsx)(Y.a,{prefix:Object(O.jsx)(pe.a,{}),placeholder:"Email",size:"large"})}),j&&Object(O.jsx)(de.a,{className:"center",indicator:Object(O.jsx)(me.a,{style:{fontSize:40},spin:!0}),delay:500}),Object(O.jsx)(ee.a,{size:"large",type:"primary",htmlType:"submit",block:!0,disabled:j,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},Ce=function(){var e=Object(b.i)().code,t={type:"",message:""},n=Object(a.useState)(t),r=Object(i.a)(n,2),s=r[0],o=r[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),j=l[0],d=l[1],p=Object(a.useState)(!1),m=Object(i.a)(p,2),h=m[0],f=m[1],x=Object(a.useState)(!1),v=Object(i.a)(x,2),g=v[0],y=v[1];Object(a.useEffect)((function(){var t=function(){var t=Object(Z.a)($.a.mark((function t(){var n,a,r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge.checkSecret({code:e,secretType:"RECOVER_PASSWORD"});case 2:n=t.sent,a=n.type,r=n.message,"error"===a&&(o({type:a,message:r}),d(!0));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)?t():(o({type:"error",message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043e\u0434!"}),d(!0))}),[e]);var k=function(){var n=Object(Z.a)($.a.mark((function n(a){var r,c,s,i;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(t),y(!0),r=a.password,n.next=6,ge.changePassword({code:e,password:r});case 6:if(c=n.sent,s=c.type,!(i=c.message)){n.next=14;break}if(o({type:s,message:i}),y(!1),"error"!==s){n.next=14;break}return n.abrupt("return");case 14:f(!0),y(!1),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(0),o(n.t0),y(!1);case 22:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(e){return n.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"flex-center",children:Object(O.jsxs)(je.a,{className:"card",title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",children:[s.message&&Object(O.jsx)(be.a,{className:"alert",message:s.message,type:s.type}),h&&Object(O.jsxs)("p",{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",Object(O.jsx)(c.b,{to:"/auth/login",children:"\u0412\u043e\u0439\u0442\u0438"})," \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"]}),!j&&!h&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(O.jsxs)(X.a,{name:"change-password-request",initialValues:{remember:!0},onFinish:k,children:[Object(O.jsx)(X.a.Item,{name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:Object(O.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",prefix:Object(O.jsx)(H.a,{}),size:"large"})}),Object(O.jsx)(X.a.Item,{name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c!")):Promise.resolve()}}}],children:Object(O.jsx)(Y.a.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",prefix:Object(O.jsx)(H.a,{}),size:"large"})}),Object(O.jsx)(ee.a,{className:"submit-button",type:"primary",htmlType:"submit",size:"large",block:!0,disabled:g,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})]})})},Ne=function(){var e=Object(b.i)().code,t=Object(a.useState)({type:"",message:""}),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){(function(){var t=Object(Z.a)($.a.mark((function t(){var n,a,r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge.activate(e);case 2:n=t.sent,a=n.type,(r=n.message)&&s({type:a,message:r});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(O.jsx)("div",{className:"flex-center",children:Object(O.jsxs)(je.a,{className:"card",title:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:[r.message&&Object(O.jsx)(be.a,{className:"alert",message:r.message,type:r.type}),Object(O.jsx)(c.b,{className:"login-link",to:"/auth/login",children:"\u0412\u0445\u043e\u0434"}),Object(O.jsx)(c.b,{className:"link-recover",to:"/auth/recover",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})})},Se=n(187),Te=function(e){var t=e.component,n=e.children,a=Object(Se.a)(e,["component","children"]),r=m((function(e){return e.auth.user}));return Object(O.jsx)(b.b,Object(ce.a)(Object(ce.a)({},a),{},{render:function(e){return null===r?null:!1===r?Object(O.jsx)(b.a,{to:{pathname:"/auth/login",state:{from:e.location}}}):t?Object(O.jsx)(t,Object(ce.a)({},e)):n}}))};Te.defaultProps={component:void 0};var Ee=Te,Ie=function(){var e=m((function(e){return e.auth.user})),t=e.name,n=e.email,a=e.role;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(je.a,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",bordered:!1,style:{maxWidth:500},children:[Object(O.jsxs)("p",{children:["\u0418\u043c\u044f: ",t]}),Object(O.jsxs)("p",{children:["Email: ",n]}),Object(O.jsxs)("p",{children:["\u0420\u043e\u043b\u044c: ",a]})]})})},Fe=function(){return Object(O.jsxs)(b.d,{children:[Object(O.jsx)(Ee,{exact:!0,path:"/",component:le}),Object(O.jsx)(b.b,{path:"/auth/login",component:ye}),Object(O.jsx)(b.b,{path:"/auth/register",component:ke}),Object(O.jsx)(b.b,{path:"/auth/activation/:code",component:Ne}),Object(O.jsx)(b.b,{path:"/auth/recover",component:we}),Object(O.jsx)(b.b,{path:"/auth/change-password/:code",component:Ce}),Object(O.jsx)(Ee,{path:"/user/profile",component:Ie}),Object(O.jsx)(b.b,{path:"*",children:Object(O.jsx)(b.a,{to:"/auth/login"})})]})},Ae=o.a.Content,ze=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2),u=s[0],l=s[1],j=Object(a.useRef)(null),b=N([M],null),d=Object(i.a)(b,1)[0],p=m((function(e){return e.chat})).activeChannelId,h=m((function(e){return e.auth.user})),f=function(e){l(e)};return Object(a.useEffect)((function(){return ue.socket?(j.current=ue.socket,ue.socket.on("disconnect",(function(e){if(alert(e),"transport error"===e||"ping timeout"===e){if(!h)return;ue.disconnect(),ue.connect(h)}})),j.current.on("channel:message:broadcast",(function(e){var t=e.activeChannelId,n=e.message,a=e.from;d({activeChannelId:t,message:n,from:a})})),function(){j.current.off("channel:message:broadcast")}):null}),[h,p,d]),Object(O.jsxs)(o.a,{className:"wrap-layout",children:[Object(O.jsx)(G,{sidebarCollapsed:u,onSidebarToggle:f,onCurrentChannelChange:function(e){var t=e.label;r(t)}}),Object(O.jsxs)(o.a,{className:"site-layout",children:[Object(O.jsx)(P,{sidebarCollapsed:u,onSidebarToggle:f,currentChannel:n}),Object(O.jsx)(Ae,{className:"content",children:Object(O.jsx)(Fe,{})})]})]})},_e=(n(317),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,344)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))}),Pe=n(181),Ue=n(182),Re=n(24),He=$.a.mark(Me),qe=$.a.mark(Ve),De=$.a.mark(We),Le=$.a.mark(Ge),Be=$.a.mark(Je);function Me(e){var t,n,a,r;return $.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.data,a=t.token,c.next=3,Object(Re.c)(I(n));case 3:return c.next=5,Object(Re.a)([ge,ge.setToken],a);case 5:return c.next=7,Object(Re.a)([ue,ue.connect],n);case 7:return r=c.sent,c.next=10,Object(Re.c)(B(r));case 10:case"end":return c.stop()}}),He)}function Ve(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(T,Me);case 2:case"end":return e.stop()}}),qe)}function We(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.a)([ge,ge.removeToken]);case 2:return e.next=4,Object(Re.c)(I(!1));case 4:return e.next=6,Object(Re.c)(L(""));case 6:return e.next=8,Object(Re.a)([ue,ue.disconnect]);case 8:case"end":return e.stop()}}),De)}function Ge(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(E,We);case 2:case"end":return e.stop()}}),Le)}function Je(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.b)(Ve);case 2:return e.next=4,Object(Re.b)(Ge);case 4:case"end":return e.stop()}}),Be)}var Ke,Qe,$e=n(324),Ze=Object($e.a)((Ke={},Object(re.a)(Ke,I,(function(e,t){return t.payload})),Object(re.a)(Ke,F,(function(){return!1})),Ke),null),Xe=Object(C.combineReducers)({user:Ze}),Ye=Object($e.a)(Object(re.a)({},L,(function(e,t){return t.payload})),""),et=Object($e.a)((Qe={},Object(re.a)(Qe,B,(function(e,t){return t.payload})),Object(re.a)(Qe,M,(function(e,t){return Object(ce.a)(Object(ce.a)({},e),{},Object(re.a)({},t.payload.activeChannelId,Object(ce.a)(Object(ce.a)({},e[t.payload.activeChannelId]),{},{messages:[].concat(Object(w.a)(e[t.payload.activeChannelId].messages),[t.payload.message])})))})),Qe),null),tt=Object(C.combineReducers)({activeChannelId:Ye,channels:et}),nt=$.a.mark((function e(){var t,n,a,r,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Re.a)([ge,ge.getToken]);case 3:if(t=e.sent){e.next=8;break}return e.next=7,Object(Re.c)(F());case 7:return e.abrupt("return");case 8:return e.next=10,Object(Re.a)([ge,ge.fetchByToken],{token:t});case 10:if(n=e.sent,a=n.data,"TokenExpiredError"!==(r=n.message)&&"JsonWebTokenError"!==r){e.next=18;break}return e.next=16,Object(Re.a)([ge,ge.removeToken]);case 16:return e.next=18,Object(Re.c)(F());case 18:if(!a){e.next=26;break}return e.next=21,Object(Re.c)(I(a));case 21:return e.next=23,Object(Re.a)([ue,ue.connect],a);case 23:return c=e.sent,e.next=26,Object(Re.c)(B(c));case 26:e.next=34;break;case 28:return e.prev=28,e.t0=e.catch(0),e.next=32,Object(Re.a)([ge,ge.removeToken]);case 32:return e.next=34,Object(Re.c)(F(e.t0));case 34:case"end":return e.stop()}}),e,null,[[0,28]])})),at=$.a.mark(ct),rt=Object(C.combineReducers)({auth:Xe,chat:tt});function ct(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.b)(Je);case 2:return e.next=4,Object(Re.b)(nt);case 4:case"end":return e.stop()}}),at)}var st=function(){var e=Object(Ue.a)(),t=Object(C.createStore)(rt,Object(C.compose)(Object(Pe.composeWithDevTools)(Object(C.applyMiddleware)(e))));return e.run(ct),t}();Object(s.render)(Object(O.jsx)(a.StrictMode,{children:Object(O.jsx)(r.a,{store:st,children:Object(O.jsx)(c.a,{children:Object(O.jsx)(ze,{})})})}),document.getElementById("root")),_e()}},[[318,1,2]]]);
//# sourceMappingURL=main.254ee299.chunk.js.map