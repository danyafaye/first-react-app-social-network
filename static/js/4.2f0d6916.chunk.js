(this["webpackJsonpreact-2"]=this["webpackJsonpreact-2"]||[]).push([[4],{394:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1sQM2",dialogsItems:"Dialogs_dialogsItems__20BOt",active:"Dialogs_active__qx0Yz",messages:"Dialogs_messages__33Ru2",dialog:"Dialogs_dialog__34IlP"}},402:function(e,s,a){"use strict";a.r(s);var t=a(1),i=a(187),c=(a(0),a(394)),n=a.n(c),d=a(35),o=a(2),l=function(e){var s="/dialogs/"+e.id;return Object(o.jsx)("div",{className:n.a.dialog+" "+n.a.active,children:Object(o.jsxs)(d.c,{to:s,children:[Object(o.jsx)("img",{src:"https://studio21.ru/wp-content/uploads/2019/10/TVETH-1024x674.jpg"}),e.name]})})},r=function(e){return Object(o.jsx)("div",{className:n.a.dialog,children:e.message})},g=a(189),j=a(60),b=a(112),u=Object(b.a)(50),m=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(j.c)("Enter your message","newMessageBody",[b.b,u],j.a)}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Send"})})]})})),O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(o.jsx)(l,{name:e.name,id:e.id})})),t=s.messages.map((function(e){return Object(o.jsx)(r,{message:e.message})}));return Object(o.jsxs)("div",{className:n.a.dialogs,children:[Object(o.jsx)("div",{className:n.a.dialogsItems,children:a}),Object(o.jsx)("div",{className:n.a.messages,children:Object(o.jsx)("div",{children:t})}),Object(o.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},x=a(16),h=a(20);s.default=Object(h.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage}}),Object(t.a)({},i.a)))(O)}}]);
//# sourceMappingURL=4.2f0d6916.chunk.js.map