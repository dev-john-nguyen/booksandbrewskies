(this.webpackJsonpbeersandbrewskies=this.webpackJsonpbeersandbrewskies||[]).push([[7],{244:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return i}));var n=a(32),r=a.n(n),l=a(58),s=a.n(l),c=a(243),m=function(e,t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!Object(c.isEmpty)(e)){a.next=2;break}throw Object.assign(new Error("No Rating"),{code:402});case 2:if(!Object(c.isEmpty)(t)){a.next=4;break}throw Object.assign(new Error("Id is empty"),{code:402});case 4:return a.prev=4,a.next=7,r.a.awrap(s.a.post("reviews/rating",{rating:e,id:t}));case 7:a.sent,a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(4),console.log(a.t0),a.abrupt("return",{err:"Sorry, we are having issues submitting your rating"});case 14:return a.abrupt("return",{rating:e});case 15:case"end":return a.stop()}}),null,null,[[4,10]])},i=function(e,t,a){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!Object(c.isEmpty)(t)){n.next=2;break}throw Object.assign(new Error("No Comment"),{code:402});case 2:if(!Object(c.isEmpty)(e)){n.next=4;break}throw Object.assign(new Error("No Name"),{code:402});case 4:if(!Object(c.isEmpty)(a)){n.next=6;break}throw Object.assign(new Error("Id is Empty"),{code:402});case 6:return n.prev=6,n.next=9,r.a.awrap(s.a.post("reviews/comment",{name:e,comment:t,id:a}));case 9:n.sent,n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(6),console.log(n.t0),n.abrupt("return",{err:"Sorry, we are having issues submitting your comment"});case 16:return n.abrupt("return",{name:e,comment:t});case 17:case"end":return n.stop()}}),null,null,[[6,12]])}},249:function(e,t,a){"use strict";var n=a(25),r=a(26),l=a(28),s=a(27),c=a(29),m=a(0),i=a.n(m),o=a(244),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleOnClick=function(e){var t=a.props,n=t.itemId,r=t.setError;Object(o.b)(e.target.name,n).then((function(e){if(e.err)return r();a.setState({rating:e.rating})})).catch((function(e){console.log(e),r()}))},a.state={rating:0,hover:0,error:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.itemId,a=i.a.createElement("svg",{className:"bi bi-check-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}),i.a.createElement("path",{fillRule:"evenodd",d:"M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z",clipRule:"evenodd"})),n=i.a.createElement("svg",{className:"bi bi-star",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z",clipRule:"evenodd"})),r=i.a.createElement("svg",{className:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),l=[];if(0===this.state.rating)for(var s=1;s<6;s++)l.push(i.a.createElement("a",{className:"p-1 mb-0",key:t+s,name:s,onClick:this.handleOnClick,onMouseOver:function(t){return e.setState({hover:t.target.name})},style:this.state.hover>s?{color:"#eabf00"}:{}},n));else for(var c=1;c<6;c++)this.state.rating>=c?l.push(i.a.createElement("p",{className:"p-1 mb-0",key:t+c},r)):l.push(i.a.createElement("p",{className:"p-1 mb-0",key:t+c},n));return i.a.createElement("div",{className:"star d-flex user-star-rating m-auto",onMouseLeave:function(){return e.setState({hover:0})},style:{width:"fit-content",fontSize:"1.5rem"}},l,0!==this.state.rating&&a)}}]),t}(i.a.Component);t.a=u},325:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),l=a(25),s=a(26),c=a(28),m=a(27),i=a(29),o=a(0),u=a.n(o),d=a(243),p=a(58),v=a.n(p),g=a(39),h=a(53),b=a(99),f=a(249),E=a(244),w=function(e){var t=e.name,a=e.id,n=e.comments,r=e.image,l=e.custAvg,s=e.custStar,c=e.myAvg,m=e.myStar,i=e.myComment,p=e.handleClose,v=Object(o.useState)(""),h=Object(b.a)(v,2),w=h[0],y=h[1],N=Object(o.useState)(""),x=Object(b.a)(N,2),O=x[0],k=x[1],C=Object(o.useState)(!1),j=Object(b.a)(C,2),S=j[0],L=j[1],B=Object(o.useState)(!1),R=Object(b.a)(B,2),z=R[0],A=R[1],M=Object(o.useState)({}),I=Object(b.a)(M,2),D=I[0],V=I[1],W=Object(o.useState)(!1),T=Object(b.a)(W,2),_=T[0],F=T[1];if(S)return u.a.createElement(g.a,{showValue:!0,closeDirect:"/bb",buttonName:"Back",handleState:function(){L(!1)},title:"Empty",description:"One of the fields are empty.",svgType:"empty"});if(z)return u.a.createElement(g.a,{showValue:!0,closeDirect:"/bb",buttonName:"Back",handleState:function(){A(!1),p()},title:"Error",description:"Sorry, something went wrong",svgType:"error"});Object(d.isEmpty)(D)||(n.push(D),V({}));var q=[];return Object(d.isEmpty)(n)||(q=n.map((function(e,t){return u.a.createElement("div",{className:"media",key:t},u.a.createElement("img",{src:"./media/logo.png",className:"mr-3",alt:"BB"}),u.a.createElement("div",{className:"media-body"},u.a.createElement("p",{className:"mt-0 mb-0",style:{fontSize:"1rem"}},e.name),u.a.createElement("p",{className:"text-muted"},e.comment)))}))),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"modal d-flex",tabIndex:"-1",role:"dialog",id:"main",mousewheel:"passive"},u.a.createElement("div",{className:"position-absolute h-100 w-100",onClick:p}),u.a.createElement("div",{className:"modal-dialog w-100",role:"document"},u.a.createElement("div",{className:"modal-content",style:{height:"90vh",overflow:"auto"}},u.a.createElement("div",{className:"modal-header justify-content-end"},u.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:p},u.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"row m-auto",style:{fontSize:".6rem"}},u.a.createElement("div",{className:"col-6 text-right"},u.a.createElement("img",{src:r,className:"img-fluid rounded shadow",alt:"item image"})),u.a.createElement("div",{className:"col"},u.a.createElement("h5",{className:"modal-title"},t),u.a.createElement("div",{className:"d-flex"},u.a.createElement("p",null,"Our",u.a.createElement("br",null),"Rating:"),u.a.createElement("div",{className:"star d-flex mb-0 ml-1"},m,c)),u.a.createElement("div",{className:"d-flex"},u.a.createElement("p",null,"Average",u.a.createElement("br",null),"Rating:"),u.a.createElement("div",{className:"star d-flex mb-0 ml-1"},s,l)),u.a.createElement("div",{className:"d-flex"},"Our",u.a.createElement("br",null),"Comment:",u.a.createElement("p",{className:"text-muted mb-0 ml-1"},i)))),u.a.createElement("div",{className:"row m-auto w-100"},u.a.createElement("div",{className:"col"},u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),F(!0),(Object(d.isEmpty)(w)||Object(d.isEmpty)(O))&&(L(!0),F(!1)),Object(E.a)(w,O,a).then((function(e){V({name:e.name,comment:e.comment}),k(""),F(!1)})).catch((function(e){console.log(e),A(!0),F(!1)}))}},u.a.createElement("div",{className:"modal-body"},Object(d.isEmpty)(q)?u.a.createElement("p",null,"No Comments"):q,u.a.createElement("div",{className:"form-group"},u.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"Name",onChange:function(e){return y(e.target.value)},value:w,required:!0})),u.a.createElement("div",{className:"form-group"},u.a.createElement("textarea",{type:"text",className:"form-control",maxLength:"500",placeholder:"What do you think?",name:"Comment",onChange:function(e){return k(e.target.value)},value:O,style:{minHeight:"150px"},required:!0})),u.a.createElement("p",{className:"m-0"},"Rating"),u.a.createElement(f.a,{itemId:a,setError:function(){return A(!0)}})),u.a.createElement("div",{className:"modal-footer"},u.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},_&&u.a.createElement("span",{className:"spinner-border spinner-border-sm mb-1",role:"status","aria-hidden":"true"}),"Submit"))))))))))},y=u.a.createElement("svg",{className:"bi bi-star",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{fillRule:"evenodd",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z",clipRule:"evenodd"})),N=u.a.createElement("svg",{className:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),x=u.a.createElement("svg",{className:"bi bi-star-half",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{fillRule:"evenodd",d:"M5.354 5.119L7.538.792A.516.516 0 018 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0116 6.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 01-.171-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.906-2.77-4.052-.576a.525.525 0 01-.393-.288L8.002 2.223 8 2.226v9.8z",clipRule:"evenodd"})),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(v.a.get("/reviews"));case 3:e=t.sent,t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",a.setState({error:!0,loading:!1}));case 10:a.setState({reviewItems:e.data,loading:!1});case 11:case"end":return t.stop()}}),null,null,[[0,6]])},a.handleLogin=function(e){e.preventDefault(),a.state.password===a.state.login.password?a.setState({login:{enter:!0}}):alert("Incorrect Password")},a.state={reviewItems:[],error:!1,loading:!0,itemObj:{},filterBB:"all",login:{enter:!1,password:"ShaneHasABigLeftNut"},password:""},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;if(!this.state.login.enter)return u.a.createElement("div",{className:"row align-items-center m-auto text-center",style:{height:"90vh"}},u.a.createElement("div",{className:"col align-self-center m-auto"},u.a.createElement("form",{className:"login m-auto w-50 rounded",onSubmit:this.handleLogin,style:{minWidth:"290px"}},u.a.createElement("h1",null,"Only Men Can Enter"),u.a.createElement("input",{type:"password",placeholder:"password",name:"password",className:"form-control",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),u.a.createElement("button",{type:"submit",className:"btn btn-primary mt-3 ml-auto mr-auto"},"Login"))));var t=u.a.createElement("svg",{className:"bi bi-star",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{fillRule:"evenodd",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z",clipRule:"evenodd"})),a=u.a.createElement("svg",{className:"bi bi-star-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),n=u.a.createElement("svg",{className:"bi bi-star-half",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("path",{fillRule:"evenodd",d:"M5.354 5.119L7.538.792A.516.516 0 018 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0116 6.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 01-.171-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.906-2.77-4.052-.576a.525.525 0 01-.393-.288L8.002 2.223 8 2.226v9.8z",clipRule:"evenodd"}));if(this.state.loading)return u.a.createElement(h.a,null);if(this.state.error)return u.a.createElement(g.a,{showValue:!0,closeDirect:"/",buttonName:"Close",title:"Error",description:"Sorry, we are undergoing maintenance. Check back again later.",svgType:"error"});if(Object(d.isEmpty)(this.state.reviewItems))return u.a.createElement(g.a,{showValue:!0,closeDirect:"/",buttonName:"Close",title:"Empty",description:"We currently don't have any items. Check back again later.",svgType:"empty"});var r=this.state.reviewItems.filter((function(t){return"all"===e.state.filterBB||t.type===e.state.filterBB})).map((function(r,l){for(var s=[],c=1;c<6;c++)r.myReview.rating>=c?s.push(u.a.createElement("p",{className:"p-1",key:r._id+c},a)):r.myReview.rating<=c-.5&&r.myReview.rating>c-1?s.push(u.a.createElement("p",{className:"p-1",key:r._id+c},n)):s.push(u.a.createElement("p",{className:"p-1",key:r._id+c},t));var m=function(e){e.length<1&&e.push(0);for(var t=0,a=0;a<e.length;a++)t+=parseInt(e[a],10);var n=t/e.length;n%1!==0&&(n=n.toFixed(1));for(var r=[],l=1;l<6;l++)n>=l?r.push(u.a.createElement("p",{className:"p-1",key:"avg"+l},N)):n<=l-.5&&n>l-1?r.push(u.a.createElement("p",{className:"p-1",key:"avg"+l},x)):r.push(u.a.createElement("p",{className:"p-1",key:"avg"+l},y));return{avgCustomerRating:n,avgCustStarRating:r}}(r.ratings);return u.a.createElement("div",{className:"bb-item m-3 p-2 d-flex align-items-start flex-column rounded",style:{width:"250px"},key:l},u.a.createElement("img",{className:"img-fluid rounded shadow",src:r.imageUrl,alt:r.name,width:"250",height:"350",key:l,style:{height:"350px"}}),u.a.createElement("div",{className:"item-content"},u.a.createElement("h2",null,r.name),u.a.createElement("p",null,"From: ",r.description),u.a.createElement("div",{className:"d-flex"},u.a.createElement("p",null,"Our",u.a.createElement("br",null),"Rating:"),u.a.createElement("div",{className:"star d-flex ml-1"},s,u.a.createElement("div",null,r.myReview.rating))),u.a.createElement("div",{className:"cust-avg-rating d-flex"},u.a.createElement("p",null,"Average",u.a.createElement("br",null),"rating:"),u.a.createElement("div",{className:"star ml-1 d-flex"},m.avgCustStarRating,m.avgCustomerRating))),u.a.createElement("button",{className:"btn btn-primary btn-block mt-auto p-2",onClick:function(){return e.setState({itemObj:{name:r.name,id:r._id,comments:r.comments,image:r.imageUrl,custAvg:m.avgCustomerRating,custStar:m.avgCustStarRating,myAvg:r.myReview.rating,myComment:r.myReview.comment,myStar:s}})}},"View"))})),l=this.state,s=l.itemObj;l.filterBB;return u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row mb-5"},u.a.createElement("h1",{className:"m-auto position-relative",style:{top:"20px"}},"B/B Reviews")),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"btn-group btn-group-toggle m-auto w-50","data-toggle":"buttons",style:{minWidth:"300px"}},u.a.createElement("label",{className:"btn btn-secondary"},u.a.createElement("input",{type:"radio",name:"book",id:"book",autoComplete:"off",onClick:function(){return e.setState({filterBB:"book"})}}),"Books"),u.a.createElement("label",{className:"btn btn-secondary active"},u.a.createElement("input",{type:"radio",name:"all",id:"all",autoComplete:"off",onClick:function(){return e.setState({filterBB:"all"})},defaultChecked:!0}),"All"),u.a.createElement("label",{className:"btn btn-secondary"},u.a.createElement("input",{type:"radio",name:"beer",id:"beer",autoComplete:"off",onClick:function(){return e.setState({filterBB:"beer"})}}),"Beers"))),u.a.createElement("div",{className:"d-flex justify-content-center",style:{flexWrap:"wrap"}},r),!Object(d.isEmpty)(s)&&u.a.createElement(w,{name:s.name,id:s.id,comments:s.comments,image:s.image,custAvg:s.custAvg,custStar:s.custStar,myAvg:s.myAvg,myStar:s.myStar,myComment:s.myComment,handleClose:function(){return e.setState({itemObj:{}})}}))}}]),t}(u.a.Component);t.default=O}}]);
//# sourceMappingURL=7.12760cb0.chunk.js.map