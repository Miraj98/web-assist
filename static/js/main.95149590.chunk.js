(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,n){e.exports=n(318)},318:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(23),s=n.n(a),i=n(14),c=n(15),l=n(18),u=n(16),p=n(19),m=n(335),d=n(216),h=n(26),f=n(36),E=n(10),g=n(190),b=n(109),S=n(192),O=n.n(S),v=n(11),w=function(e,t){return fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",headers:{Authorization:"Token "+t}})},y=function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"POST",headers:{Authorization:"Token "+n,"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t})},T=n(7),_=n(3),I=function(e){return{type:"GET_FEED_REQUEST_FAIL",response:e}},j=function(e,t,n,r,o,a){return{type:"VOTE_REQUEST_FAIL",response:e,post_id:t,vote:n,community:r,prevVoteState:o,prevTotalLikes:a}},C=function(e){return{type:"GET_POST_BY_ID_FAIL",response:e}},P=function(e){return function(t,n){t({type:"GET_POST_BY_ID"});var r="https://getassist.app:8080/posts/getpost/"+e,o=n().auth;w(r,o).then(function(e){return 200===e.status?e.json():-1}).then(function(e){if(-1!==e){var n=function(e){for(var t={post:{},comments:{byId:{},allIds:[]}},n=0;n<e.comments.length;n++)t=Object(_.a)({},t,{comments:{byId:Object(_.a)({},t.comments.byId,Object(T.a)({},e.comments[n].id,e.comments[n])),allIds:[].concat(Object(v.a)(t.comments.allIds),[e.comments[n].id])}});return t=Object(_.a)({},t,{post:Object(_.a)({},e,{comments:t.comments.allIds})})}(e);t(function(e){return{type:"GET_POST_BY_ID_SUCCESS",response:e}}(n))}else t(C("Returned value: "+e))}).catch(function(e){console.warn(e),t(C(e))})}},k=function(e,t,n){return{type:"POST_COMMENT_FAIL",post_id:e,comment:t,error:n}},N=function(e){return{type:"POST_NEW_POST_FAIL",response:e}},U=Object(E.c)({byId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FEED_REQUEST_SUCCESS":for(var n=e,r=0;r<t.response.posts.allIds.length;r++)n=Object(_.a)({},n,Object(T.a)({},t.response.posts.allIds[r],Object(_.a)({},n[t.response.posts.allIds[r]],t.response.posts.byId[t.response.posts.allIds[r]])));return Object(_.a)({},n);case"VOTE_REQUEST":return Object(_.a)({},e,Object(T.a)({},t.post_id,Object(_.a)({},e[t.post_id],{likes:t.totalLikes,self_vote:t.vote})));case"VOTE_REQUEST_FAIL":return Object(_.a)({},e,Object(T.a)({},t.post_id,Object(_.a)({},e[t.post_id],{likes:t.prevTotalLikes,self_vote:t.prevVoteState})));case"GET_POST_BY_ID_SUCCESS":return Object(_.a)({},e,Object(T.a)({},t.response.post.id,t.response.post));default:return e}}}),A=Object(E.c)({byId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POST_BY_ID_SUCCESS":for(var n=e,r=0;r<t.response.comments.allIds.length;r++)n=Object(_.a)({},n,Object(T.a)({},t.response.comments.allIds[r],t.response.comments.byId[t.response.comments.allIds[r]]));return Object(_.a)({},n);case"POST_COMMENT_SUCCESS":return Object(_.a)({},e,Object(T.a)({},t.response.id,t.response));default:return e}},allIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(arguments.length>1?arguments[1]:void 0).type,e}}),L=function(e){return{type:"GET_INTERESTS_FAIL",response:e}},F=Object(E.c)({byId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INTERESTS_SUCCESS":return Object(_.a)({},t.response.byId);default:return e}},allIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INTERESTS_SUCCESS":return Object(v.a)(t.response.allIds);default:return e}}}),R=function(e){return{type:"GET_NEW_CLIENT_ID_FAIL",response:e}},x=Object(E.c)({clientId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEW_CLIENT_ID_SUCCESS":return t.response;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AUTH_TOKEN_SUCCESS":return console.log(t.response),t.response[3];case"LOGOUT":return null;default:return e}},posts:U,feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FEED_REQUEST_SUCCESS":return Object(v.a)(t.response.posts.allIds);default:return e}},comments:A,allInterests:F,userProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",phone_number:"",email:"",profile_picture_thumb:"null",profile_picture:"null"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AUTH_TOKEN_SUCCESS":return Object(_.a)({},e,{name:t.response[1],email:t.response[2]});default:return e}},isFetching:Object(E.c)({feed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_FEED_REQUEST":return!0;case"GET_FEED_REQUEST_SUCCESS":case"GET_FEED_REQUEST_FAIL":return!1;default:return e}},postById:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_POST_BY_ID":return!0;case"GET_POST_BY_ID_SUCCESS":case"GET_POST_BY_ID_FAIL":return!1;default:return e}},clientId:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"GET_NEW_CLIENT_ID":return!0;case"GET_NEW_CLIENT_ID_FAIL":return!1;case"GET_NEW_CLIENT_ID_SUCCESS":return!0;default:return e}}}),isPosting:Object(E.c)({comments:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"POST_COMMENT":return!0;case"POST_COMMENT_SUCCESS":return!1;case"POST_COMMENT_FAIL":return!0;default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"POST_NEW_POST":return!0;case"POST_NEW_POST_FAIL":case"POST_NEW_POST_SUCCESS":return!1;default:return e}}}),isRequestSuccessful:Object(E.c)({feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:!0,response:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FEED_REQUEST_SUCCESS":return{state:!0,response:t.response};case"GET_FEED_REQUEST_FAIL":return{state:!1,response:t.response};default:return e}},postById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POST_BY_ID_SUCCESS":return{state:!0,response:t.response};case"GET_POST_BY_ID_FAIL":return{state:!1,response:t.response};default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;switch((arguments.length>1?arguments[1]:void 0).type){case"POST_NEW_POST_SUCCESS":return!0;case"POST_NEW_POST_FAIL":return!1;case"POST_NEW_POST":return null;default:return e}},clientId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEW_CLIENT_ID_SUCCESS":return{state:!0,response:t.response};case"GET_NEW_CLIENT_ID_FAIL":return{state:!1,response:t.response};default:return e}}})}),G={key:"assist",storage:O.a,blacklist:["postRequestsState","isRequestSuccessful","isPosting","isFetching","notifications","clientId"]},B=Object(b.a)(G,x),M=Object(E.d)(B,Object(E.a)(g.a)),Q=Object(b.b)(M),W=M,z=n(12),D=n(193),q=n(338),V=n(329),J=n(328),H=n(330),Y=n(337),K=n(63),X=n.n(K),Z=n(339),$=n(324),ee=n(325),te=n(326),ne=n(327),re=function(e){return o.a.createElement(d.a,{direction:"row",margin:{top:"small"},pad:"small",align:"center",justify:"around",fill:"horizontal"},o.a.createElement(d.a,{direction:"row",align:"center",justify:"between",gap:"1.5rem"},o.a.createElement(Z.a,{icon:o.a.createElement($.a,{size:"1.25rem",color:1===e.self_vote?"green":null}),onClick:function(){return e.handleVote(1,e.post_id)},margin:"none"}),o.a.createElement(q.a,null,e.likes),o.a.createElement(Z.a,{icon:o.a.createElement(ee.a,{size:"1.25rem",color:-1===e.self_vote?"red":null}),onClick:function(){return e.handleVote(-1,e.post_id)},margin:"none"})),o.a.createElement(d.a,{direction:"row",align:"center",justify:"center",gap:"0.5rem"},o.a.createElement(h.b,{to:{pathname:"/post",state:{post_id:e.post_id,fromFeed:!0}}},o.a.createElement(Z.a,{icon:o.a.createElement(te.a,{size:"1.25rem"}),onClick:function(){}})),o.a.createElement(q.a,null,0===e.comments?"Comment":e.comments)),o.a.createElement(Z.a,{icon:o.a.createElement(ne.a,{size:"1.25rem"}),onClick:function(){},margin:"none"}))},oe=n(211),ae=n.n(oe),se=n(212),ie=n.n(se),ce=function(e){return o.a.createElement(d.a,{margin:{left:"small",top:"medium"}},o.a.createElement(ie.a,{url:e.url,style:{borderRadius:"0.5em"},size:"large"}))},le=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleVoteButtonPressed=function(e,t){var r=n.props.self_vote;console.log("Current vote state:",r);var o=n.props.likes;console.log("Current total likes:",o);var a,s=e===r?0:e;switch(console.log("New votes state:",s),s){case 0:a=o-r;break;default:a=o-r+s}console.log("New likes:",a),n.props.voteRequest(s,t,a,r,o)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{pad:"medium",align:"center",background:{color:"white"},width:"48rem",flex:!1,margin:{bottom:"2px"}},o.a.createElement(d.a,{direction:"row",fill:"horizontal",align:"center"},o.a.createElement(d.a,{height:"64px",width:"64px"},o.a.createElement(Y.a,{fit:"cover",src:n(99)})),o.a.createElement(q.a,{weight:"bold",color:"black",margin:"small",size:"1.25rem"},this.props.user_name)),o.a.createElement(d.a,{pad:{left:"64px"},justify:"center",fill:"horizontal",wrap:!0},o.a.createElement(d.a,{margin:{left:"small"},overflow:{horizontal:"hidden"}},o.a.createElement(h.b,{to:{pathname:"/post",state:{post_id:this.props.id,fromFeed:!0}},style:{textDecoration:"none"}},o.a.createElement(q.a,{weight:"bold",color:"black",size:"1.125rem"},this.props.post_title)),o.a.createElement(X.a,{properties:{target:"_blank",style:{color:"#1976d2",textDecoration:"none"}}},o.a.createElement("pre",{style:{fontFamily:"Roboto",fontWeight:400,fontSize:"1.125rem",color:"black"},wrap:"normal"},this.props.post_text))),this.props.linkPreview?function(e){var t=ae.a.extractUrls(e);return 0===t.length?null:t[0].includes("http")?o.a.createElement(ce,{url:t[0]}):null}(this.props.post_text):null),o.a.createElement(re,{comments:this.props.comments_number,likes:this.props.likes,self_vote:this.props.self_vote,post_id:this.props.id,handleVote:this.handleVoteButtonPressed}))}}]),t}(o.a.Component),ue={voteRequest:function(e,t,n,r,o){return function(a,s){a(function(e,t,n,r){return{type:"VOTE_REQUEST",post_id:e,vote:t,community:n,totalLikes:r}}(t,e,s().currentCommunitySelected,n));var i="email="+s().userProfile.email+"&post_id="+t+"&vote="+e,c=s().auth;y("https://getassist.app:8080/posts/votepost/",i,c).then(function(e){return 200===e.status||201===e.status?e.json():-1}).then(function(n){a(-1!==n?function(e,t,n,r){return{type:"VOTE_REQUEST_SUCCESS",response:e,post_id:t,vote:n,community:r}}(n,t,e,s().currentCommunitySelected):j(n,t,e,s().currentCommunitySelected,r,o))}).catch(function(n){a(j(n,t,e,s().currentCommunitySelected,r,o)),console.warn(n)})}}},pe=Object(z.b)(function(e,t){return Object(_.a)({},e.posts.byId[t.id])},ue)(le),me=n(32),de=n.n(me),he=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.requestFeedFromApi(),this.props.requestInterestsFromApi()}},{key:"render",value:function(){return null===this.props.auth?o.a.createElement(f.a,{to:"/"}):o.a.createElement(d.a,{fill:!0,justify:"start",align:"center",background:"light-3",pad:{top:"small"},style:{wordWrap:"anywhere"},overflow:{vertical:"scroll"}},o.a.createElement(d.a,{direction:"row",justify:"between",align:"center",pad:"medium",background:{color:"white"},width:"48rem",margin:{bottom:"xsmall"},elevation:"small",flex:!1},o.a.createElement(q.a,{weight:900,size:"1.5rem",color:"black"},"Feed"),this.props.isFetchingFeed?o.a.createElement(de.a,{type:"Triangle",color:"#4527a0",height:"2rem",width:"2rem"}):o.a.createElement(J.a,{color:"#4527a0"})),o.a.createElement(V.a,{items:this.props.feed},function(e){return o.a.createElement(pe,{key:e,id:e,linkPreview:!1})}),o.a.createElement(h.b,{to:"/createpost"},o.a.createElement(d.a,{direction:"row",pad:"medium",style:{position:"fixed",bottom:"2rem",right:"4em"},elevation:"medium",align:"center",justify:"between",gap:"small",background:"brand",round:"large"},o.a.createElement(H.a,null),o.a.createElement(q.a,{color:"white",weight:900},"Write a post"))))}}]),t}(o.a.PureComponent),fe={requestFeedFromApi:function(){return function(e,t){console.log("fetching feed..."),e({type:"GET_FEED_REQUEST"});var n="https://getassist.app:8080/posts/userfeed/"+t().userProfile.email,r=t().auth;w(n,r).then(function(e){return 200===e.status?e.json():-1}).then(function(t){if(-1!==t){console.log(t);var n=function(e,t){for(var n={posts:{byId:{},allIds:[]},users:{postsByUser:{},allEmails:[]},postsByInterest:{},postsVotedByUser:{byId:{},allIds:[]}},r=0;r<e.length;r++){var o=e[r];n.posts={byId:Object(_.a)({},n.posts.byId,Object(T.a)({},o.id,Object(_.a)({},o))),allIds:[].concat(Object(v.a)(n.posts.allIds),[o.id])},n.users={postsByUser:Object(_.a)({},n.users.postsByUser,Object(T.a)({},o.user_email,[].concat(Object(v.a)(n.users.postsByUser[o.user_email]||[]),[o.id]))),allEmails:[].concat(Object(v.a)(n.users.allEmails),[o.user_email])},n.postsByInterest=Object(_.a)({},n.postsByInterest,Object(T.a)({},o.shareinterest,[].concat(Object(v.a)(n.postsByInterest[o.shareinterest]||[]),[o.id])))}return n}(t);e(function(e){return{type:"GET_FEED_REQUEST_SUCCESS",response:e}}(n))}else e(I(t))}).catch(function(t){console.warn(t),e(I(t))})}},requestInterestsFromApi:function(){return function(e,t){e({type:"GET_INTERESTS_REQUEST"}),console.log(t().userProfile);var n="https://getassist.app:8080/profiles/getinterests/"+t().userProfile.email,r=t().auth;w(n,r).then(function(e){return 200===e.status?e.json():-1}).then(function(t){if(-1!==t){var n=function(e){for(var t={byId:{},allIds:[]},n=0;n<e.length;n++)t={byId:Object(_.a)({},t.byId,Object(T.a)({},e[n].name,e[n])),allIds:[].concat(Object(v.a)(t.allIds),[e[n].name])};return t}(t);console.log(n),e(function(e){return{type:"GET_INTERESTS_SUCCESS",response:e}}(n))}else e(L(t))}).catch(function(t){return e(L(t))})}}},Ee=Object(z.b)(function(e){return{feed:e.feed,isFetchingFeed:e.isFetching.feed,feedApiRequestState:e.isRequestSuccessful.feed,auth:e.auth}},fe)(he),ge=n(341),be=n(336),Se=n(334),Oe=n(332),ve=n(213),we=n.n(ve),ye=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",text:"",showModal:!1,interestSelected:"",submitPressed:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){we()(this.textarea)}},{key:"handleSubmitPost",value:function(){this.setState(function(e){return Object(_.a)({},e,{submitPressed:!0})}),this.props.postNewPost(this.state.title,this.state.text,this.state.interestSelected)}},{key:"render",value:function(){var e=this;return o.a.createElement(d.a,{fill:!0,pad:{top:"small"},overflow:{vertical:"scroll"},align:"center",justify:"start",background:"light-3"},o.a.createElement(d.a,{direction:"row",justify:"between",align:"center",pad:"medium",background:{color:"white"},width:"48rem",margin:{bottom:"xsmall"},elevation:"small",flex:!1},o.a.createElement(ge.a,{placeholder:"Post Title",value:this.state.title,onChange:function(t){var n=t.target;return e.setState(function(e){return Object(_.a)({},e,{title:n.value})})},plain:!0,resize:!1,style:{fontWeight:900,fontSize:"2rem"}})),o.a.createElement(d.a,{direction:"row",justify:"between",align:"center",pad:"medium",background:{color:"white"},width:"48rem",margin:{bottom:"xsmall"},elevation:"small",flex:"grow"},o.a.createElement(ge.a,{placeholder:"Post Content",value:this.state.text,onChange:function(t){var n=t.target;return e.setState(function(e){return Object(_.a)({},e,{text:n.value})})},ref:function(t){return e.textarea=t},fill:!0,plain:!0,resize:!1,style:{fontWeight:"bolder",fontSize:"2rem"}})),o.a.createElement(Z.a,{onClick:function(){return e.setState(function(e){return Object(_.a)({},e,{showModal:!0})})}},o.a.createElement(d.a,{direction:"row",pad:"medium",style:{position:"fixed",bottom:"2rem",right:"4em"},elevation:"medium",align:"center",justify:"between",gap:"small",background:"brand",round:"large"},o.a.createElement(Oe.a,null),o.a.createElement(q.a,{color:"white",weight:900},"Publish Post"))),this.state.showModal?o.a.createElement(be.a,{onEsc:function(){return e.setState(function(e){return Object(_.a)({},e,{showModal:!1})})},onClickOutside:function(){return e.setState(function(e){return Object(_.a)({},e,{showModal:!1})})}},o.a.createElement(d.a,{pad:"medium"},o.a.createElement(q.a,{weight:900,size:"1.125rem"},"Select a community to post in"),o.a.createElement(Se.a,{options:this.props.interests,dropHeight:"small",margin:"medium",value:this.state.interestSelected,onChange:function(t){var n=t.option;return e.setState(function(e){return Object(_.a)({},e,{interestSelected:n})})}}),o.a.createElement(Z.a,{color:"brand",primary:!0,icon:this.props.isPostingNewPost?o.a.createElement(de.a,{type:"Oval",color:"white",height:"1.2rem",width:"1.2rem"}):null,label:"Submit",alignSelf:"center",margin:"small",disabled:""===this.state.interestSelected,onClick:function(){return e.handleSubmitPost()}}),this.props.postNewPostRequestState?o.a.createElement(f.a,{to:"/feed"}):null)):null)}}]),t}(o.a.Component),Te={postNewPost:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"1 day",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"True",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"True",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"general";return function(i,c){i(function(e,t,n){return{type:"POST_NEW_POST",title:e,content:t,interest:n}}(e,t,n));var l=c().auth,u=c().userProfile.email,p="post_title="+encodeURIComponent(e)+"&post_text="+encodeURIComponent(t)+"&duration="+r+"&user_email="+u+"&friends="+o+"&public="+a+"&interest="+n+"&channel="+s;y("https://getassist.app:8080/posts/new-post/",p,l).then(function(e){return 201===e.status?e.json():(console.log(e.status),-1)}).then(function(e){-1!==e?i(function(e){return{type:"POST_NEW_POST_SUCCESS",response:e}}(e)):N(e)}).catch(function(e){console.warn(e),i(N(e))})}}},_e=Object(z.b)(function(e){return{interests:e.allInterests.allIds,isPostingNewPost:e.isPosting.post,postNewPostRequestState:e.isRequestSuccessful.post,auth:e.auth}},Te)(ye),Ie=n(214),je=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){null===this.props.authToken&&this.props.requestClientIdFromApi()}},{key:"render",value:function(){return o.a.createElement(d.a,{fill:!0,justify:"center",align:"center"},null===this.props.clientId?o.a.createElement(de.a,{type:"Grid",height:"3rem",width:"3rem"}):o.a.createElement(d.a,{justify:"center",align:"center",gap:"medium"},o.a.createElement(q.a,{weight:900,size:"2rem"},"Scan the QR code using your Assist app"),o.a.createElement(Ie.QRCode,{value:this.props.clientId[1],bgColor:"#FFFFFF",fgColor:"#000000",level:"Q",style:{width:256}})),null===this.props.authToken?null:o.a.createElement(f.a,{to:"/feed"}))}}]),t}(o.a.PureComponent),Ce={requestClientIdFromApi:function(){return function(e,t){return console.log("I'm beimg called"),e({type:"GET_NEW_CLIENT_ID"}),fetch("https://cors-anywhere.herokuapp.com/https://getassist.app:8080/profiles/createnewclient/",{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){return 200===e.status?e.json():(console.log(e),-1)}).then(function(t){-1!==t?(console.log(t),e(function(e){return{type:"GET_NEW_CLIENT_ID_SUCCESS",response:e}}(t)),e(function e(t){return function(n,r){return n({type:"GET_AUTH_TOKEN"}),fetch("https://cors-anywhere.herokuapp.com/https://getassist.app:8080/profiles/isqridvalidated/"+t).then(function(e){return 200===e.status?e.json():-1}).then(function(r){-1!==r&&(console.log(r),n(!1===r?e(t):function(e){return{type:"GET_AUTH_TOKEN_SUCCESS",response:e}}(r)))}).catch(function(e){console.log(e),n({type:"GET_AUTH_TOKEN_FAIL",response:e})})}}(t[0]))):(console.log(t),e(R(t)))}).catch(function(t){console.log(t),e(R(t))})}}},Pe=Object(z.b)(function(e){return{isFetchingClientId:e.isFetching.clientId,clientId:e.clientId,authToken:e.auth}},Ce)(je),ke=Object(z.b)(function(e,t){return Object(_.a)({},e.comments.byId[t.id])})(function(e){return console.log(e),o.a.createElement(d.a,{pad:"medium",align:"center",background:{color:"white"},width:"48rem",flex:!1,margin:{bottom:"2px"}},o.a.createElement(d.a,{direction:"row",fill:"horizontal",align:"center"},o.a.createElement(d.a,{height:"64px",width:"64px"},o.a.createElement(Y.a,{fit:"cover",src:n(99)})),o.a.createElement(q.a,{weight:"bold",color:"black",margin:"small",size:"1.25rem"},e.user_name)),o.a.createElement(d.a,{pad:{left:"64px"},justify:"center",fill:"horizontal",wrap:!0},o.a.createElement(d.a,{margin:{left:"small"},overflow:{horizontal:"hidden"}},o.a.createElement(X.a,{properties:{target:"_blank",style:{color:"#1976d2",textDecoration:"none"}}},o.a.createElement(q.a,{color:"black",size:"1rem",margin:{top:"xsmall"}},e.comment)))))}),Ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={comment:""},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handlePostComment",value:function(){var e=this;this.setState(function(){return{comment:""}}),this.props.postCommentRequest(this.props.post_id,this.state.comment),setTimeout(function(){return e.props.requestPostByIdFromApi(e.props.post_id)},100)}},{key:"render",value:function(){var e=this;return o.a.createElement(d.a,{pad:"medium",align:"center",background:{color:"white"},width:"48rem",flex:!1,margin:{bottom:"2px"}},o.a.createElement(d.a,{direction:"row",fill:"horizontal",align:"center",justify:"between"},o.a.createElement(d.a,{height:"64px",width:"64px",margin:{right:"small"}},o.a.createElement(Y.a,{fit:"cover",src:n(99)})),o.a.createElement(ge.a,{plain:!0,placeholder:"Write a comment",resize:!1,style:{backgroundColor:"#eeeeee"},value:this.state.comment,onChange:function(t){var n=t.target;return e.setState(function(){return{comment:n.value}})}}),this.props.isPostingComments?o.a.createElement(d.a,{margin:"medium"},o.a.createElement(de.a,{type:"Grid",color:"#7e57c2",height:"1.6em",width:"1.6em"})):o.a.createElement(Z.a,{margin:"small",icon:o.a.createElement(Oe.a,null),onClick:function(){return e.handlePostComment()}})))}}]),t}(o.a.Component),Ue={postCommentRequest:function(e,t){return function(n,r){n({type:"POST_COMMENT"});var o="email="+r().userProfile.email+"&post_id="+e+"&comment="+t,a=r().auth;y("https://getassist.app:8080/posts/createcomment/",o,a).then(function(e){return 201===e.status?e.json():(console.log("Reponse status:",e.status),-1)}).then(function(r){-1!==r?(console.log(r),n(function(e,t){return{type:"POST_COMMENT_SUCCESS",post_id:e,response:t}}(e,r))):(n(k(e,t,r)),console.warn(r))}).catch(function(r){n(k(e,t,r)),console.warn(r)})}},requestPostByIdFromApi:P},Ae=Object(z.b)(function(e){return{isPostingComments:e.isPosting.comments}},Ue)(Ne),Le=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.requestPostByIdFromApi(this.props.location.state.post_id)}},{key:"render",value:function(){return console.log(this.props.commentIds),o.a.createElement(d.a,{fill:!0,justify:"start",align:"center",background:"light-3",pad:{top:"small",bottom:"large"},style:{wordWrap:"anywhere"},overflow:{vertical:"scroll"}},o.a.createElement(d.a,{justify:"between",align:"center",pad:"medium",background:{color:"white"},width:"48rem",margin:{bottom:"xsmall"},elevation:"large",flex:!1},o.a.createElement(pe,{id:this.props.location.state.post_id,linkPreview:!0})),o.a.createElement(Ae,{post_id:this.props.location.state.post_id}),o.a.createElement(V.a,{items:this.props.commentIds},function(e){return o.a.createElement(ke,{key:e,id:e})}))}}]),t}(o.a.PureComponent),Fe={requestPostByIdFromApi:P},Re=Object(z.b)(function(e,t){return{commentIds:e.posts.byId[t.location.state.post_id].comments||[]}},Fe)(Le),xe=n(340),Ge=n(333),Be=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showLogoutModal:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(d.a,{tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},o.a.createElement(xe.a,{level:"3",margin:"none"},"Assist"),o.a.createElement(Z.a,{icon:o.a.createElement(Ge.a,null),onClick:function(){return e.setState(function(e){return Object(_.a)({},e,{showLogoutModal:!0})})}}),this.state.showLogoutModal?o.a.createElement(be.a,{onEsc:function(){return e.setState(function(e){return{showLogoutModal:!1}})},onClickOutside:function(){return e.setState(function(e){return{showLogoutModal:!1}})}},o.a.createElement(d.a,{pad:"medium",justify:"center",align:"center"},o.a.createElement(q.a,{weight:900,color:"black",margin:"medium"},"Are you sure you want to Logout?"),o.a.createElement(Z.a,{primary:!0,label:"YES",onClick:function(){e.props.logout(),e.setState(function(e){return Object(_.a)({},e,{showLogoutModal:!1})})}}))):null)}}]),t}(o.a.Component),Me={logout:function(){return{type:"LOGOUT"}}},Qe=Object(z.b)(function(e){return{auth:e.auth}},Me)(Be),We={global:{font:{family:"Roboto",size:"18px",height:"20px"}}},ze=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(m.a,{theme:We,full:!0},o.a.createElement(d.a,{fill:!0},o.a.createElement(z.a,{store:W},o.a.createElement(D.a,{persistor:Q,loading:null},o.a.createElement(Qe,null),o.a.createElement(f.d,null,o.a.createElement(f.b,{path:"/",exact:!0,component:Pe}),o.a.createElement(f.b,{path:"/feed",exact:!0,component:Ee}),o.a.createElement(f.b,{path:"/createpost",exact:!0,component:_e}),o.a.createElement(f.b,{path:"/post",exact:!0,component:Re})))))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t){e.exports="data:image/png;base64,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"}},[[220,1,2]]]);
//# sourceMappingURL=main.95149590.chunk.js.map