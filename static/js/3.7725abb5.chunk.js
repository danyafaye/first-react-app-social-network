(this["webpackJsonpreact-2"]=this["webpackJsonpreact-2"]||[]).push([[3],{395:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2PNxs",mainPhoto:"ProfileInfo_mainPhoto__Ddm9Z",contact:"ProfileInfo_contact__2kjn6"}},396:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__sP9qn",posts:"MyPosts_posts__rz_ul"}},397:function(t,e,s){t.exports={item:"Post_item__2EufB"}},401:function(t,e,s){"use strict";s.r(e);var c=s(1),o=s(40),i=s(41),n=s(43),r=s(42),a=s(0),j=s.n(a),l=s(7),u=s(395),b=s.n(u),d=s(78),h=s(2),p=function(t){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),c=s[0],o=s[1],i=Object(a.useState)(t.status),n=Object(l.a)(i,2),r=n[0],j=n[1];Object(a.useEffect)((function(){j(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!c&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Status:"}),Object(h.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"----"})]}),c&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},onBlur:function(){o(!1),t.updateStatus(r)},autoFocus:!0,value:r})})]})},O=s(188),f=s(60),x=s(189),m=s(90),v=s.n(m),P=Object(x.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,c=t.error;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"save"})}),c&&Object(h.jsx)("div",{className:v.a.formSummaryError,children:c}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",Object(f.c)("Full name","fullName",[],f.a)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",Object(f.c)("","lookingForAJob",[],f.a,{type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),": ",Object(f.c)("My professional skills","lookingForAJobDescription",[],f.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),":",Object(f.c)("About me","aboutMe",[],f.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(h.jsx)("div",{className:b.a.contact,children:Object(h.jsxs)("b",{children:[" ",t,":",Object(f.c)(t,"contacts."+t,[],f.a)]})},t)}))]})]})})),k=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(h.jsxs)("div",{children:[s&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:c,children:"edit"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(h.jsx)(g,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},g=function(t){var e=t.contactTitle,s=t.contactValue;return Object(h.jsxs)("div",{className:b.a.contact,children:[Object(h.jsx)("b",{children:e}),": ",s]})},S=function(t){var e=t.profile,s=t.status,c=t.updateStatus,o=t.isOwner,i=t.savePhoto,n=t.saveProfile,r=Object(a.useState)(!1),j=Object(l.a)(r,2),u=j[0],f=j[1];if(!e)return Object(h.jsx)(d.a,{});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(h.jsx)("img",{src:e.photos.large||O.a,className:b.a.mainPhoto}),o&&Object(h.jsx)("input",{type:"file",onChange:function(t){var e;(null===(e=t.target.files)||void 0===e?void 0:e.length)&&i(t.target.files[0])}}),u?Object(h.jsx)(P,{initialValues:e,profile:e,onSubmit:function(t){n(t).then((function(){f(!1)}))}}):Object(h.jsx)(k,{goToEditMode:function(){f(!0)},profile:e,isOwner:o}),Object(h.jsx)(p,{status:s,updateStatus:c})]})})},_=s(158),y=s(396),I=s.n(y),A=s(397),N=s.n(A),w=function(t){return Object(h.jsxs)("div",{className:N.a.item,children:[Object(h.jsx)("img",{src:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}),t.message,Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"like"})," ",t.likesCount]})]})},C=s(112),M=Object(x.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(f.c)("Post message","newPostText",[C.b],f.b)}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),F=function(t){var e=t.posts.map((function(t){return Object(h.jsx)(w,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:I.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(M,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(h.jsx)("div",{className:I.a.posts,children:e})]})},B=j.a.memo(F),D=s(16),J=Object(D.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:_.a.addPostCreator})(B),T=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{isOwner:t.isOwner,savePhoto:t.savePhoto,profile:t.profile,status:t.status,updateStatus:t.updateStatus,saveProfile:t.saveProfile}),Object(h.jsx)(J,{})]})},U=s(21),E=s(20),z=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getUserProfile(t),this.props.getStatus(t)):console.error("ID should exists in URI params or in state(authorizedUserId)")}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(T,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);e.default=Object(E.d)(Object(D.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:_.d,getStatus:_.c,updateStatus:_.g,savePhoto:_.e,saveProfile:_.f}),U.h)(z)}}]);
//# sourceMappingURL=3.7725abb5.chunk.js.map