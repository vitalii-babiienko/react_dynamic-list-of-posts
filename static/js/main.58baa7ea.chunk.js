(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),s=(n(15),n(16),n(17),n(5)),r=n(2),i=n(3),o=n.n(i),l=n(1),u=n(4),d=n.n(u),j=n(0),b=function(e){var t=e.names,n=e.selectedUserName,c=e.chooseUser;return Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(j.jsx)("div",{className:"dropdown-content",children:t&&t.map((function(e,t){var a=e.name===n;return Object(j.jsx)("a",{href:"#user-".concat(t+1),className:d()("dropdown-item",{"is-active":a}),onClick:function(){return c(e.name,e.id)},children:e.name},e.id)}))})})},m=function(e){var t=e.selectedUserName,n=e.handleDropDown;return Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:n,children:[Object(j.jsx)("span",{children:t}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})})},O="https://mate.academy/students-api";function h(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),h(300).then((function(){return fetch(O+e,c)})).then((function(e){return e.json()}))}var f=function(e){return x(e)},v=function(e,t){return x(e,"POST",t)},p=function(e){return x(e,"DELETE")},N=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/users");case 2:return t=e.sent,e.abrupt("return",t||null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=Object(l.createContext)({users:null,selectedUserName:"Choose a user",selectedUserId:0}),y=Object(l.createContext)({handleUserNameSelection:function(){}}),g=function(e){var t=e.children,n=Object(l.useState)(null),c=Object(r.a)(n,2),a=c[0],i=c[1],u=Object(l.useState)("Choose a user"),d=Object(r.a)(u,2),b=d[0],m=d[1],O=Object(l.useState)(0),h=Object(r.a)(O,2),x=h[0],f=h[1],v=Object(l.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:t=e.sent,i(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unable to load users from the server!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),p=Object(l.useCallback)((function(e,t){m((function(){return e})),f((function(){return t}))}),[]);Object(l.useEffect)((function(){v()}),[]);var g={users:a,selectedUserName:b,selectedUserId:x},k={handleUserNameSelection:p};return Object(j.jsx)(C.Provider,{value:g,children:Object(j.jsx)(y.Provider,{value:k,children:t})})},k=Object(l.memo)((function(){var e=Object(l.useContext)(C),t=e.users,n=e.selectedUserName,c=Object(l.useContext)(y).handleUserNameSelection,a=Object(l.useState)(!1),i=Object(r.a)(a,2),u=i[0],d=i[1],O=Object(l.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e){return{name:e.name,id:e.id}}))}),[t]),h=Object(l.useCallback)((function(){return d((function(e){return!e}))}),[]),x=Object(l.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t,n),d((function(e){return!e}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]);return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(j.jsx)(m,{selectedUserName:n,handleDropDown:h}),u&&O&&Object(j.jsx)(b,{names:O,selectedUserName:n,chooseUser:x})]})})),w=Object(l.createContext)({userPosts:null,hasError:!1,isLoading:!1,selectedPost:null,handlePostSelection:function(){}}),S=function(e){var t=e.children,n=Object(l.useContext)(C).selectedUserId,c=Object(l.useState)(null),a=Object(r.a)(c,2),i=a[0],u=a[1],d=Object(l.useState)(null),b=Object(r.a)(d,2),m=b[0],O=b[1],h=Object(l.useState)(!1),x=Object(r.a)(h,2),v=x[0],p=x[1],N=Object(l.useState)(!1),y=Object(r.a)(N,2),g=y[0],k=y[1],S=Object(l.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!1),k(!0),e.next=5,f("/posts?userId=".concat(n));case 5:t=e.sent,u(t),k(!1),e.next=15;break;case 10:throw e.prev=10,e.t0=e.catch(0),p(!0),k(!1),new Error("Unable to load user posts!");case 15:case"end":return e.stop()}}),e,null,[[0,10]])}))),[n]),E=Object(l.useCallback)((function(e){O((function(t){return t&&t.id===(null===e||void 0===e?void 0:e.id)?null:e}))}),[]);Object(l.useEffect)((function(){u(null),O(null),0!==n&&S()}),[n]);var P={userPosts:i,selectedPost:m,hasError:v,isLoading:g,handlePostSelection:E};return Object(j.jsx)(w.Provider,{value:P,children:t})},E=(n(20),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),P=Object(l.memo)((function(e){var t=e.post,n=Object(l.useContext)(w),c=n.selectedPost,a=n.handlePostSelection,s=t.id,r=t.title,i=Object(l.useMemo)((function(){return s===(null===c||void 0===c?void 0:c.id)}),[c]),o=Object(l.useCallback)((function(){s===(null===c||void 0===c?void 0:c.id)?a(null):a(t)}),[c]);return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:s}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:r}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{type:"button","data-cy":"PostButton",className:d()("button is-link",{"is-light":!i}),onClick:o,children:i?"Close":"Open"})})]})})),U=Object(l.memo)((function(){var e=Object(l.useContext)(w).userPosts;return Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:" table is-fullwidth is-striped is-hoverable is-narrow ",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:e&&e.map((function(e){return Object(j.jsx)(P,{post:e},e.id)}))})]})]})})),L=Object(l.memo)((function(){var e=Object(l.useContext)(C).selectedUserName,t=Object(l.useContext)(w),n=t.userPosts,c=t.hasError,a=t.isLoading,s=Object(l.useMemo)((function(){return"Choose a user"===e}),[e]),r=Object(l.useMemo)((function(){return 0===(null===n||void 0===n?void 0:n.length)&&!s&&!a}),[n,a]),i=Object(l.useMemo)((function(){return 0!==(null===n||void 0===n?void 0:n.length)&&!s&&!a}),[n,a]);return Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[s&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),a&&Object(j.jsx)(E,{}),c&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),r&&Object(j.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),i&&Object(j.jsx)(U,{})]})})),M=n(10),I=function(e){return p("/comments/".concat(e))},T=Object(l.createContext)({comments:null,hasError:!1,isLoading:!1,addCommentToServer:function(){},removeCommentFromServer:function(){}}),F=function(e){var t=e.children,n=Object(l.useContext)(w).selectedPost,c=Object(l.useState)(null),a=Object(r.a)(c,2),i=a[0],u=a[1],d=Object(l.useState)(!1),b=Object(r.a)(d,2),m=b[0],O=b[1],h=Object(l.useState)(!1),x=Object(r.a)(h,2),p=x[0],N=x[1],C=Object(l.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=16;break}return e.prev=1,O(!1),N(!0),e.next=6,c=n.id,f("/comments?postId=".concat(c));case 6:t=e.sent,u(t),N(!1),e.next=16;break;case 11:throw e.prev=11,e.t0=e.catch(1),O(!0),N(!1),new Error("Unable to get post comments!");case 16:case"end":return e.stop()}var c}),e,null,[[1,11]])}))),[n]),y=Object(l.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}return e.prev=1,O(!1),e.next=5,a=n.id,s=t,v("/comments?postId=".concat(a),s);case 5:c=e.sent,u((function(e){return e&&c?[].concat(Object(M.a)(e),[c]):[c]})),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),O(!0),new Error("Unable to add a post comment!");case 13:case"end":return e.stop()}var a,s}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),[n]),g=Object(l.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=12;break}return e.prev=1,O(!1),u((function(e){return(null===e||void 0===e?void 0:e.filter((function(e){return e.id!==t})))||null})),e.next=6,I(t);case 6:e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),O(!0),new Error("Unable to remove a post comment!");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[n]);Object(l.useEffect)((function(){u(null),null!==n&&C()}),[n]);var k={comments:i,hasError:m,isLoading:p,addCommentToServer:y,removeCommentFromServer:g};return Object(j.jsx)(T.Provider,{value:k,children:t})},B=function(e){var t=e.children;return Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:t})},D=Object(l.memo)((function(e){var t=e.body,n=e.isBodyValid,c=e.handleBodyChange;return Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:d()("textarea",{"is-danger":!n}),value:t,onChange:c})}),!n&&Object(j.jsx)(B,{children:"Enter some text!"})]})})),V=function(){return Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})},A=Object(l.memo)((function(e){var t=e.email,n=e.isEmail,c=e.isEmailValid,a=e.handleEmailInput,s=Object(l.useMemo)((function(){return!n||!c}),[n,c]);return Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:d()("input",{"is-danger":s}),value:t,onChange:a}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),s&&Object(j.jsx)(V,{})]}),!n&&Object(j.jsx)(B,{children:"Email is required!"}),!c&&Object(j.jsx)(B,{children:"You have entered an invalid email address!"})]})})),_=Object(l.memo)((function(e){var t=e.isLoading,n=e.shouldClear,c=e.handleReset;return Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:d()("button is-link",{"is-loading":t}),children:"Add"})}),Object(j.jsx)("div",{className:"control",children:n&&Object(j.jsx)("button",{type:"button",className:"button is-link is-light","aria-label":"reset",onClick:c,children:"Clear"})})]})})),J=Object(l.memo)((function(e){var t=e.name,n=e.isNameValid,c=e.handleNameInput;return Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:d()("input",{"is-danger":!n}),value:t,onChange:c}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),!n&&Object(j.jsx)(V,{})]}),!n&&Object(j.jsx)(B,{children:"Name is required!"})]})})),q=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,R=function(){var e=Object(l.useContext)(T).addCommentToServer,t=Object(l.useContext)(w).selectedPost,n=Object(l.useState)(!1),c=Object(r.a)(n,2),a=c[0],i=c[1],u=Object(l.useState)(""),d=Object(r.a)(u,2),b=d[0],m=d[1],O=Object(l.useState)(!0),h=Object(r.a)(O,2),x=h[0],f=h[1],v=Object(l.useState)(""),p=Object(r.a)(v,2),N=p[0],C=p[1],y=Object(l.useState)(!0),g=Object(r.a)(y,2),k=g[0],S=g[1],E=Object(l.useState)(!0),P=Object(r.a)(E,2),U=P[0],L=P[1],M=Object(l.useState)(""),I=Object(r.a)(M,2),F=I[0],B=I[1],V=Object(l.useState)(!0),R=Object(r.a)(V,2),W=R[0],Y=R[1],G=Object(l.useMemo)((function(){return b||N||F}),[b,N,F]),$=Object(l.useCallback)((function(e){m(e.target.value),f(!0)}),[]),z=Object(l.useCallback)((function(e){C(e.target.value),S(!0),L(!0)}),[]),H=Object(l.useCallback)((function(e){B(e.target.value),Y(!0)}),[]),K=Object(l.useCallback)((function(){m(""),C(""),B(""),S(!0),f(!0),L(!0),Y(!0)}),[]),Q=Object(l.useCallback)(function(){var n=Object(s.a)(o.a.mark((function n(c){var a,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=!0,c.preventDefault(),i((function(){return!0})),b.trim()||(f(!1),a=!1),N.trim()||(S(!1),a=!1),q.test(N)||(L(!1),a=!1),F.trim()||(Y(!1),a=!1),!a||!t){n.next=12;break}return s={id:0,postId:t.id,name:b,email:N,body:F},n.next=11,e(s);case 11:B("");case 12:i((function(){return!1}));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[b,N,F]);return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:Q,children:[Object(j.jsx)(J,{name:b,isNameValid:x,handleNameInput:$}),Object(j.jsx)(A,{email:N,isEmail:k,isEmailValid:U,handleEmailInput:z}),Object(j.jsx)(D,{body:F,isBodyValid:W,handleBodyChange:H}),Object(j.jsx)(_,{isLoading:a,shouldClear:G,handleReset:K})]})},W=Object(l.memo)((function(){var e=Object(l.useContext)(T),t=e.comments,n=e.removeCommentFromServer;return Object(j.jsxs)(j.Fragment,{children:[t&&Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),t&&t.map((function(e){var t=e.id,c=e.email,a=e.body,s=e.name;return Object(j.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(c),"data-cy":"CommentAuthor",children:s}),Object(j.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(t)},children:"delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:a})]},t)}))]})})),Y=Object(l.memo)((function(){var e=Object(l.useContext)(T),t=e.comments,n=e.hasError,c=e.isLoading,a=Object(l.useContext)(w).selectedPost,s=Object(l.useState)(!0),i=Object(r.a)(s,2),o=i[0],u=i[1],d=Object(l.useMemo)((function(){return 0===(null===t||void 0===t?void 0:t.length)&&!c}),[t,c]),b=Object(l.useMemo)((function(){return 0!==(null===t||void 0===t?void 0:t.length)&&!c}),[t,c]),m=Object(l.useMemo)((function(){return o&&!c}),[o,c]),O=Object(l.useMemo)((function(){return!o&&!c}),[o,c]),h=Object(l.useCallback)((function(){return u(!1)}),[]);return Object(l.useEffect)((function(){return u(!0)}),[]),Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:a?"#".concat(a.id,": ").concat(a.title):""}),Object(j.jsx)("p",{"data-cy":"PostBody",children:null===a||void 0===a?void 0:a.body})]}),Object(j.jsxs)("div",{className:"block",children:[c&&Object(j.jsx)(E,{}),n&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong!"}),d&&Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),b&&Object(j.jsx)(W,{}),m&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:h,children:"Write a comment"})]}),O&&Object(j.jsx)(R,{})]})})})),G=Object(l.memo)((function(){var e=Object(l.useContext)(w),t=e.selectedPost,n=e.isLoading,c=Object(l.useMemo)((function(){return null!==t&&!n}),[t,n]);return Object(j.jsx)("div",{"data-cy":"Sidebar",className:d()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":c}),children:Object(j.jsx)("div",{className:"tile is-child box is-success",children:c&&Object(j.jsx)(Y,{})})})})),$=function(){return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(S,{children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(k,{})}),Object(j.jsx)(L,{})]})}),Object(j.jsx)(F,{children:Object(j.jsx)(G,{})})]})})})})};a.a.render(Object(j.jsx)(g,{children:Object(j.jsx)($,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.58baa7ea.chunk.js.map