(this["webpackJsonpreact-2"]=this["webpackJsonpreact-2"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(44),A=n(3),a="SEND_MESSAGE",s={messages:[{id:1,message:"Hi"},{id:2,message:"How do you do?"},{id:3,message:"Yo."},{id:4,message:"yo"},{id:5,message:"yo"}],dialogs:[{id:1,name:"Danya"},{id:2,name:"Ivan"},{id:3,name:"Den"},{id:4,name:"Vlad"},{id:5,name:"Georgiy"}]},c=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.newMessageBody;return Object(A.a)(Object(A.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2q1pi"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var r=n(130),A=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ec60d246-4717-4541-adc2-20e30e3bdf4b"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return A.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return A.post("follow/".concat(e))},unfollow:function(e){return A.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use ProfileAPI"),s.getProfile(e)}},s={getProfile:function(e){return A.get("profile/"+e)},getStatus:function(e){return A.get("profile/status/"+e)},updateStatus:function(e){return A.put("profile/status",{status:e})}},c={me:function(){return A.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return A.get("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return A.delete("auth/login")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3W41f",item:"Navbar_item__3donR",active:"Navbar_active__27ST8"}},166:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var r=n(65),A=n.n(r),a=n(0),s=n.n(a),c=n(36),i=n(37),o=n(39),u=n(38),l=(n(166),n(16)),d=n.n(l),j=n(15),f=n(1),b=function(){return Object(f.jsxs)("nav",{className:d.a.nav,children:[Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(j.b,{to:"/profile",activeClassName:d.a.active,children:"Profile"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(j.b,{to:"/dialogs",activeClassName:d.a.active,children:"Messages"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(j.b,{to:"/users",activeClassName:d.a.active,children:"Users"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(j.b,{to:"/news",activeClassName:d.a.active,children:"News"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(j.b,{to:"/music",activeClassName:d.a.active,children:"Music"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(j.b,{to:"/settings",activeClassName:d.a.active,children:"Settings"})})]})},p=n(11),O=(n(175),function(){return Object(f.jsx)("div",{children:"News"})}),g=(n(176),function(){return Object(f.jsx)("div",{children:"Music"})}),v=(n(177),function(){return Object(f.jsx)("div",{children:"Settings"})}),h=n(91),m=n.n(h),x=function(e){return Object(f.jsxs)("aside",{className:m.a.aside,children:[Object(f.jsx)("h4",{children:"Friends"}),Object(f.jsx)("div",{className:m.a.sidebarItem})]})},w=n(18),C=n(10),y=n.n(C),P=n(21),L=n(44),S=n(3),k=n(14),N=function(e,t,n,r){e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},B="FOLLOW",M="UNFOLLOW",z="SET_USERS",E="SET_CURRENT_PAGE",D="SET_TOTAL_USERS_COUNT",U="TOGGLE_IS_FETCHING",q="TOGGLE_IS_FOLLOWING_PROGRESS",I={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Z=function(e){return{type:B,userId:e}},V=function(e){return{type:M,userId:e}},F=function(e){return{type:E,currentPage:e}},G=function(e){return{type:U,isFetching:e}},W=function(e,t){return{type:q,isFetching:e,userId:t}},Q=function(){var e=Object(P.a)(y.a.mark((function e(t,n,r,A){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(W(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(A(n)),t(W(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,A){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(S.a)(Object(S.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!0})});case M:return Object(S.a)(Object(S.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!1})});case z:return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case E:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case D:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case U:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case q:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(L.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},K=n(52),T=n(68),Y=n(127),J=n(70),R=n.n(J),H=n(131),_=n.n(H),$=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,A=e.onPageChanged,s=e.portionSize,c=void 0===s?10:s,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/c),d=Object(a.useState)(1),j=Object(Y.a)(d,2),b=j[0],p=j[1],O=(b-1)*c+1,g=b*c;return Object(f.jsxs)("div",{className:R.a.paginator,children:[b>1&&Object(f.jsx)("button",{onClick:function(){p(b-1)},children:"PREV"}),o.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(f.jsx)("span",{className:_()(Object(T.a)({},R.a.selectedPage,r===e),R.a.pageNumber),onClick:function(t){A(e)},children:e},e)})),l>b&&Object(f.jsx)("button",{onClick:function(){p(b+1)},children:"NEXT"})]})},ee=n(132),te=n.n(ee),ne=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,A=e.follow;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",className:te.a.userPhoto})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){A(t.id)},children:"Follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"user.location.country"}),Object(f.jsx)("div",{children:"user.location.city"})]})]})]})},re=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,A=e.pageSize,a=e.users,s=Object(K.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(f.jsxs)("div",{children:[Object(f.jsx)($,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:A}),Object(f.jsx)("div",{children:a.map((function(e){return Object(f.jsx)(ne,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},Ae=n(40),ae=n(9),se=n(133),ce=Object(se.a)((function(e){return e.usersPage.users}),(function(e){return e})),ie=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsersCount},ue=function(e){return e.usersPage.currentPage},le=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},je=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,A=new Array(r),a=0;a<r;a++)A[a]=arguments[a];return(e=t.call.apply(t,[this].concat(A))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(Ae.a,{}):null,Object(f.jsx)(re,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),fe=Object(ae.d)(Object(w.b)((function(e){return{users:ce(e),pageSize:ie(e),totalUsersCount:oe(e),currentPage:ue(e),isFetching:le(e),followingInProgress:de(e)}}),{follow:function(e){return function(){var t=Object(P.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Q(n,e,k.c.follow.bind(k.c),Z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Q(n,e,k.c.unfollow.bind(k.c),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:F,toggleFollowingProgress:W,getUsers:function(e,t){return function(){var n=Object(P.a)(y.a.mark((function n(r){var A;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(G(!0)),r(F(e)),n.next=4,k.c.getUsers(e,t);case 4:A=n.sent,r(G(!1)),r((s=A.data.items,{type:z,users:s})),r((a=A.data.totalCount,{type:D,count:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()}})(je)),be=n(92),pe=n.n(be),Oe=function(e){return Object(f.jsxs)("header",{className:pe.a.header,children:[Object(f.jsx)("img",{src:"https://api.freelogodesign.org/assets/thumb/logo/21833077_400.png"}),Object(f.jsx)("div",{className:pe.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[e.login," - ",Object(f.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(f.jsx)(j.b,{to:"/login",children:"Login"})})]})},ge=(n(34),"SET_USER_DATA"),ve={userId:null,email:null,login:null,isAuth:!1},he=function(e,t,n,r){return{type:ge,payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(){return function(){var e=Object(P.a)(y.a.mark((function e(t){var n,r,A,a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,A=r.id,a=r.login,s=r.email,t(he(A,s,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},we=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)(Oe,Object(S.a)({},this.props))}}]),n}(s.a.Component),Ce=Object(ae.d)(Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(P.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.logout();case 2:0===e.sent.data.resultCode&&t(he(null,null,null,!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(we),ye=n(126),Pe=n(56),Le=n(33),Se=n(53),ke=n.n(Se),Ne=Object(ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(Le.c)("Email","email",[Pe.b],Le.a),Object(Le.c)("Password","password",[Pe.b],Le.a,{type:"password"}),Object(Le.c)(null,"rememberMe",[],Le.a,{type:"checkbox"},"rememberMe"),n&&Object(f.jsx)("div",{className:ke.a.formSummaryError,children:n}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Login"})})]})})),Be=function(e){return e.isAuth?Object(f.jsx)(p.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"LOGIN"}),Object(f.jsx)(Ne,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})},Me=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),{Login:Be})(Be),ze="INITIALIZED_SUCCESS",Ee={initialized:null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},Ue=n(95),qe=n(125),Ie={friends:[{name:"Vlad"},{name:"Georgiy"},{name:"Den"}]},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return e},Ve=n(136),Fe=n(128),Ge=Object(ae.c)({profilePage:Ue.b,dialogsPage:qe.a,sidebar:Ze,usersPage:X,auth:xe,form:Fe.a,app:De}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,Qe=Object(ae.e)(Ge,We(Object(ae.a)(Ve.a))),Xe=function(e){return function(t){return Object(f.jsx)(s.a.Suspense,{fallback:Object(f.jsx)(Ae.a,{}),children:Object(f.jsx)(e,Object(S.a)({},t))})}},Ke=s.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Te=s.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),Ye=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(Ce,{}),Object(f.jsx)(b,{}),Object(f.jsx)(x,{}),Object(f.jsxs)("div",{className:"app-wrapper-content",children:[Object(f.jsx)(p.b,{path:"/dialogs",render:Xe(Ke)}),Object(f.jsx)(p.b,{path:"/profile/:userId?",render:Xe(Te)}),Object(f.jsx)(p.b,{path:"/users",render:function(){return Object(f.jsx)(fe,{})}}),Object(f.jsx)(p.b,{path:"/news",render:function(){return Object(f.jsx)(O,{})}}),Object(f.jsx)(p.b,{path:"/music",render:function(){return Object(f.jsx)(g,{})}}),Object(f.jsx)(p.b,{path:"/settings",render:function(){return Object(f.jsx)(v,{})}}),Object(f.jsx)(p.b,{path:"/login",render:function(){return Object(f.jsx)(Me,{})}})]})]}):Object(f.jsx)(Ae.a,{})}}]),n}(s.a.Component),Je=Object(ae.d)(p.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e({type:ze})}))}}}))(Ye),Re=function(e){return Object(f.jsx)(j.a,{children:Object(f.jsx)(w.a,{store:Qe,children:Object(f.jsx)(Je,{})})})};A.a.render(Object(f.jsx)(Re,{}),document.getElementById("root"))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n(3),A=n(52),a=(n(0),n(53)),s=n.n(a),c=(n(56),n(88)),i=n(1),o=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,A=e.children,a=n&&r;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(a?s.a.error:""),children:[Object(i.jsx)("div",{children:A}),Object(i.jsx)("div",{children:a&&Object(i.jsx)("span",{children:r})})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(A.a)(e,["input","meta","child"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(A.a)(e,["input","meta","child"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n,A){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(r.a)({placeholder:e,validate:n,name:t,component:A},a))," ",s]})}},40:function(e,t,n){"use strict";var r=n.p+"static/media/Spinner-1s-200px.c800ed5b.svg",A=(n(0),n(1));t.a=function(e){return Object(A.jsx)("img",{src:r})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2VfJ9",error:"FormsControls_error__1Ygah",formSummaryError:"FormsControls_formSummaryError__3GRpP"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return A}));var r=function(e){if(!e)return"Field is required"},A=function(e){return function(t){if(t.length>e)return"Max Length is ".concat(e," symbols")}}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__3Y-K5",pageNumber:"Paginator_pageNumber__2m9lN",selectedPage:"Paginator_selectedPage__2J4yv"}},91:function(e,t,n){e.exports={aside:"Sidebar_aside__2tWTX",sidebarItem:"Sidebar_sidebarItem__1KlYv"}},92:function(e,t,n){e.exports={header:"Header_header__k0htO",loginBlock:"Header_loginBlock__1oLo3"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(10),A=n.n(r),a=n(21),s=n(44),c=n(3),i=n(14),o="ADD-POST",u="SET_USER_PROFILE",l="SET_STATUS",d="DELETE_POST",j={posts:[{id:1,message:"Hi, how are you?",likesCount:0},{id:2,message:"It's my first post",likesCount:23}],profile:null,status:""},f=function(e){return{type:o,newPostText:e}},b=function(e){return{type:l,status:e}},p=function(e){return function(){var t=Object(a.a)(A.a.mark((function t(n){var r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n((A=r.data,{type:u,profile:A}));case 4:case"end":return t.stop()}var A}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(A.a.mark((function t(n){var r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case u:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case l:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case d:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[297,1,2]]]);
//# sourceMappingURL=main.3ef27aca.chunk.js.map