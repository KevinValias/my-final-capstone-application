(this["webpackJsonpmy-final-capstone-application"]=this["webpackJsonpmy-final-capstone-application"]||[]).push([[0],{79:function(e,t,a){e.exports=a(93)},84:function(e,t,a){},85:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(84),a(85),a(23)),l=a(70),s=a(7),u=a(42),m=a.n(u),d=a(12),h=a(33),p=a(14),g=a(15),b=a(17),f=a(16),E=a(120),v=a(134),y=a(124),O=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userName:"",userPassword:"",redirectHome:!1},e.handleTextChange=function(t){var a=Object(h.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.login=function(t){t.preventDefault();var a={userName:e.state.userName,userPassword:e.state.userPassword};console.log(a),console.log("the log in function ran"),e.props.loginUser(a),e.setState({redirectHome:!1}),console.log(e.props.user.userName),console.log(e.props.user.token),""!==e.props.user.token&&e.setState({redirectHome:!0})},e}return Object(g.a)(a,[{key:"render",value:function(){return this.state.redirectHome?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement(E.a,null,r.a.createElement("form",{className:"login-from",onSubmit:this.login},r.a.createElement("h3",null,"Welcome!"),r.a.createElement(v.a,{variant:"outlined",fullWidth:"500px",required:!0,onChange:this.handleTextChange,value:this.state.userName,name:"userName",label:"Username",type:"text"}),r.a.createElement(v.a,{variant:"outlined",fullWidth:"500px",required:!0,onChange:this.handleTextChange,value:this.state.userPassword,name:"userPassword",label:"Password",type:"password"}),r.a.createElement(y.a,{type:"submit",className:"btn btn-primary btn-block",variant:"contained"},"Login"),r.a.createElement(i.b,{to:"/sign-up"},r.a.createElement(y.a,{className:"btn btn-secondary btn-block",variant:"contained"},"New User?"))))))}}]),a}(n.Component),w=function(e){return{type:"LOGIN",value:e}},j=function(e){return function(t){fetch("/auth/signup",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json().then((function(e){t(function(e){return{type:"ADD_USER",value:e}}(e))}))})).catch((function(e){return{type:"error",value:e}}))}},N=Object(d.b)((function(e){return{user:e.user}}),(function(e){return{loginUser:function(t){return e((a=t,function(e){fetch("/auth/login",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json().then((function(t){document.cookie="loggedIn=true;max-age=600*1000",e(w(t))}))})).catch((function(e){return{type:"error",value:e}}))}));var a},setUser:function(t){return e(j(t))}}}))(O),x=a(125),k=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userName:"",userPassword:""},e.handleTextChange=function(t){var a=Object(h.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.createAccount=function(t){console.log("is create account running?");var a={userName:e.state.userName,userPassword:e.state.userPassword};console.log(a+"this is the user object"),t.preventDefault(),e.props.setUser(a),e.props.user.userName},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-up-auth-wrapper"},r.a.createElement("div",{className:"sign-up-auth-inner"},r.a.createElement("form",{onSubmit:this.createAccount},r.a.createElement("h3",null,"Sign Up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name"),r.a.createElement(v.a,{required:!0,onChange:this.handleTextChange,value:this.state.userName,name:"userName",className:"form-control",lable:"Name",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement(v.a,{required:!0,onChange:this.handleTextChange,value:this.state.userPassword,type:"password",className:"form-control",name:"userPassword",label:"Password"})),r.a.createElement(x.a,{to:"/login"},r.a.createElement(y.a,{type:"submit",className:"btn btn-secondary btn-block",variant:"contained"},"Create Account")))))}}]),a}(n.Component),C=Object(d.b)((function(e){return{user:e.user}}),(function(e){return{setUser:function(t){return e(j(t))}}}))(k),S=a(21),T=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{src:"https://www.youtube.com/embed/rMcg9YzNSEs?start'5'",frameborder:"100px",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",position:"absolute",width:"100%",height:"100%",styles:{height:"25px"},allowFullScreen:!0}))}}]),a}(n.Component),R=a(94),_=a(126),I=a(127),D=a(128),A=a(129),P=a(130),U=a(66),W=a.n(U),B=function(e){return r.a.createElement(E.a,{maxWidth:"lg",className:"car-container"},r.a.createElement(R.a,null,r.a.createElement(_.a,null,r.a.createElement(I.a,null,r.a.createElement(D.a,null,r.a.createElement(A.a,null,"Name"),r.a.createElement(A.a,null,"Description"),r.a.createElement(A.a,null,"Region"),r.a.createElement(A.a,null,"Action"),r.a.createElement(A.a,null,"Delete"))),r.a.createElement(P.a,null,e.regions.map((function(t,a){return r.a.createElement(D.a,{key:t.id},r.a.createElement(A.a,null,r.a.createElement(i.b,{to:"/region/".concat(t.id)},t.name)),r.a.createElement(A.a,null,t.description),r.a.createElement(A.a,null,t.region),r.a.createElement(A.a,null,t.action),r.a.createElement(A.a,null,r.a.createElement(W.a,{onClick:function(){return e.removeRegion(a)},style:{color:"red"}})))}))))))},G=Object(d.b)((function(e){return{regions:e.regions,loggedIn:e.loggedIn}}),(function(e){return{removeRegion:function(t){return e({type:"REMOVE_REGION",value:t})}}}))(B),L=a(69),M=function(e){var t=Object(n.useState)({name:"",description:"",region:"",action:"",redirect:!1}),a=Object(L.a)(t,2),o=a[0],c=a[1],i=function(e){var t=Object(h.a)({},o);t[e.target.id]=e.target.value,c(t)},l=function(t){t.preventDefault();var a=Object(h.a)({},o);a.id=e.regions.length+1,e.addRegion(a),c({redirect:!0})};return r.a.createElement("div",{className:"add-auth-wrapper"},r.a.createElement("div",{className:"add-auth-inner"},r.a.createElement("h1",null,"--ADD A REGION--"),r.a.createElement("form",{onSubmit:l},r.a.createElement(v.a,{onChange:i,placeholder:"Name",fullWidth:!0,id:"name"}),r.a.createElement(v.a,{onChange:i,placeholder:"Description",fullWidth:!0,id:"description"}),r.a.createElement(v.a,{onChange:i,placeholder:"Region",fullWidth:!0,id:"region"}),r.a.createElement(v.a,{onChange:i,placeholder:"Action",fullWidth:!0,id:"action"}),r.a.createElement(y.a,{variant:"contained",className:"button",type:"submit",size:"small",style:{paddingLeft:150,paddingRight:150,marginTop:25,marginBottom:30,marginLeft:2},onClick:l},"Save"),o.redirect&&r.a.createElement(s.a,{to:"/dashboard"}))))},H=Object(d.b)((function(e){return{regions:e.regions}}),(function(e){return{addRegion:function(t){return e({type:"ADD_REGION",value:t})}}}))(M),F=a(95),q=function(e){var t=e.match.params.id,a=e.regions.find((function(e){return e.id==t}));return console.log(t),r.a.createElement(E.a,{maxWidth:"sm",className:"car-container"},r.a.createElement(F.a,{className:"car-paper"},r.a.createElement("h2",null,a.name),r.a.createElement("h4",null,a.description),r.a.createElement("h4",null,a.region),r.a.createElement("p",null,a.action)))},z=Object(d.b)((function(e){return{regions:e.regions}}))(q),J=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{id:"myWidget",src:"https://human.biodigital.com/widget/?m=male_system_muscular_12&dk=034caada11965ad1a6e226ccb1844db9ede0c1cc",width:"100%",height:"90%",position:"fixed",marginBottom:"100px",styles:{height:"25px"},allowFullScreen:!0}))}}]),a}(n.Component),V=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{id:"myWidget",src:"https://human.biodigital.com/widget/?m=male_region_head_neck_12&dk=034caada11965ad1a6e226ccb1844db9ede0c1cc",width:"100%",height:"90%",position:"fixed",marginBottom:"100px",styles:{height:"25px"},allowFullScreen:!0}))}}]),a}(n.Component),Y=Object(d.b)((function(e){return{regions:e.regions}}))(V),K=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{id:"myWidget",src:"https://human.biodigital.com/widget/?m=male_region_thorax_12&dk=034caada11965ad1a6e226ccb1844db9ede0c1cc",width:"100%",height:"90%",position:"fixed",marginBottom:"100px",styles:{height:"25px"},allowFullScreen:!0}))}}]),a}(n.Component),Q=Object(d.b)((function(e){return{regions:e.regions}}))(K),X=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{id:"myWidget",src:"https://human.biodigital.com/widget/?m=male_region_upper_limb_12&dk=034caada11965ad1a6e226ccb1844db9ede0c1cc",width:"100%",height:"90%",position:"fixed",marginBottom:"100px",styles:{height:"25px"},allowFullScreen:!0}))}}]),a}(n.Component),Z=Object(d.b)((function(e){return{regions:e.regions}}))(X),$=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{id:"myWidget",src:"https://human.biodigital.com/widget/?m=male_region_back_12&dk=034caada11965ad1a6e226ccb1844db9ede0c1cc",width:"100%",height:"90%",position:"fixed",marginBottom:"100px",styles:{height:"25px"},allowFullScreen:!0}))}}]),a}(n.Component),ee=Object(d.b)((function(e){return{regions:e.regions}}))($),te=function(e){var t=e.component,a=Object(l.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return m.a.parse(document.cookie).loggedIn?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))},ae=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:T}),r.a.createElement(te,{exact:!0,path:"/add",component:H}),r.a.createElement(s.b,{path:"/login",component:N}),r.a.createElement(s.b,{path:"/sign-up",component:C}),r.a.createElement(te,{path:"/dashboard",component:G}),r.a.createElement(s.b,{exact:!0,path:"/bizz/:id",component:z}),r.a.createElement(s.b,{exact:!0,path:"/about",component:J}),r.a.createElement(te,{exact:!0,path:"/region/1",component:Y}),r.a.createElement(te,{exact:!0,path:"/region/2",component:Q}),r.a.createElement(te,{exact:!0,path:"/region/3",component:Z}),r.a.createElement(te,{exact:!0,path:"/region/4",component:ee}))},ne=a(131),re=a(132),oe=a(133),ce=a(67),ie=a.n(ce),le=function(e){m.a.parse(document.cookie);return r.a.createElement("div",null,r.a.createElement(ne.a,{postion:"relative"},r.a.createElement(re.a,null,r.a.createElement(oe.a,{color:"white"},r.a.createElement(ie.a,null)),r.a.createElement(F.a,{variant:"h6",style:{flexGrow:"1"}},"CloudBodyHost"),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(y.a,null,r.a.createElement(i.b,{to:"/about"},"ABOUT"))),r.a.createElement("li",{className:"nav-list-item"},"loggedIn=true"===document.cookie&&r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(i.b,{to:"/add"},"ADD")))),r.a.createElement("li",{className:"nav-list-item"},"loggedIn=true"===document.cookie&&r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(i.b,{to:"/dashboard"},"DASHBOARD")),r.a.createElement(y.a,{onClick:function(){e.user.token=null,document.cookie="loggedIn=false",window.location.replace("/")}},"Logout"))),r.a.createElement("li",{className:"nav-list-item"},"loggedIn=true"!==document.cookie&&r.a.createElement(y.a,{onClick:function(){window.location.replace("/login")}},"Login"))))))},se=Object(d.b)((function(e){return{loggedIn:e.loggedIn,user:e.user}}))(le),ue=(a(92),a(32)),me=a(55),de=Object(ue.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":case"LOGOUT":case"SET_USER":return t.value;default:return e}},regions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_REGION":return[].concat(Object(me.a)(e),[t.value]);case"REMOVE_REGION":var a=Object(me.a)(e);return a.splice(t.value,1),a;default:return e}}}),he=a(68),pe=Object(ue.d)(de,{user:{userName:"",userPassword:""},regions:[{id:1,name:"Frontalis",description:"The frontalis muscle is a muscle which covers parts of the forehead of the skull. Some sources consider the frontalis muscle to be a distinct muscle. However, Terminologia Anatomica currently classifies it as part of the occipitofrontalis muscle along with the occipitalis muscle. In humans, the frontalis muscle only serves for facial expressions. The frontalis muscle is supplied by the facial nerve and receives blood from the supraorbital and supratrochlear arteries.",region:"Head",action:"One function of the frontalis is to help a person focus on distant objects. The frontalis extends from the eyebrow to the hairline. An individual may undergo a brow lift in order to tighten the frontalis muscle."},{id:2,name:"Pectoralis Major",description:"The pectoralis major, the larger and more superficial, originates at the clavicle (collarbone), the sternum, the ribs, and a tendinous extension of the external oblique abdominal muscle. The pectoralis major extends across the upper part of the chest and is attached to a ridge at the rear of the humerus (the bone of the upper arm).",region:"Thorax",action:"Its major actions are adduction, or depression, of the arm (in opposition to the action of the deltoideus muscle) and rotation of the arm forward about the axis of the body."},{id:3,name:"Deltoid",description:"The Deltoid muscle is a large triangular shaped muscle which lies over the glenohumeral joint and which gives the shoulder its rounded contour. It is named after the Greek letter delta, which is shaped like an equilateral triangle.",region:"Upper Limb",action:"The deltoids work with the rotator cuff muscles and the terres major to help move your arms in several directions."},{id:4,name:"Rhomboids",description:"The Rhomboids are two muscles - Rhomboid Major & Rhomboid Minor. The two rhomboids lie deep to trapezius to form parallel bands that pass inferolaterally from the vertebrae to the medial border of the scapula. Rhomboid Major is thin and flat and twice as wide as the thicker Rhomboid Minor which lies superior to it.",region:"Back",action:" It also rotates the scapula and retracts it towards the spinal column."}]},Object(ue.a)(he.a));var ge=function(){return r.a.createElement(d.a,{store:pe},r.a.createElement(i.a,null,r.a.createElement(se,null),r.a.createElement(ae,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.1c75b6a8.chunk.js.map