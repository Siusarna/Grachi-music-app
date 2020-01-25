(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(69)},45:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),s=a.n(c),l=(a(45),a(9)),o=a(3),i=function(e){return{type:"SONG_RESPONSE",payload:{data:e}}},m=function(){return{type:"END"}},u=function(e){return{type:"ADD_TO_HISTORY",payload:e}},d=function(){return{type:"PENDING_STATUS"}},g=a(7),h={start:function(e){return{type:"START"}}},E=Object(g.b)(null,h)((function(e){var t=e.start,a=Object(n.useState)(!0),c=Object(l.a)(a,2),s=c[0],i=c[1],m=[{name:s?"Instructions":"Start Page",func:function(){i(!s)}},{name:"Start",func:function(){t(!0)}}];return r.a.createElement(o.i,{className:"d-flex flex-column"},r.a.createElement("div",{className:"d-flex flex-column my-auto mt-2"},r.a.createElement(o.m,{className:"justify-content-center mx-0"},r.a.createElement(o.h,{xl:"10"},r.a.createElement(o.d,{className:"".concat(s?"animate-main":""," to-normal-size")},r.a.createElement(o.g,null,r.a.createElement("h2",{className:"h2-responsive text-center font-weight-normal pt-4 pr-2 pl-2"},s?"Welcome to Music-Akinator App!":"Instructions")),r.a.createElement(o.e,{className:"pt-1"},s?r.a.createElement("h3",{className:"text-center h3-responsive"},"This is gaming app, which allows you to challenge our mighty server in song recognition. Feel free to read instructions before starting the game."):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"1. You are free to enter your song by: Humming, Actual Song and Lyrics."),r.a.createElement("p",null,"2. For Humming and Song you will be provided by our special recorder and for Lyrics there will be a text editor."),r.a.createElement("p",null,'3. After sending request by pressing "Finish" or "Send" you will be provided with a list of results.'),r.a.createElement("p",null,"4. You will be provided by 3 buttons:"),r.a.createElement("p",null,'"Guessed!" - means that there is a song you were searching for. Server will get the point.'),r.a.createElement("p",null,'"Give a chance" - means that you want to play one more round, giving a chance to our server to recognize the song'),r.a.createElement("p",null,'"Finish game" - server could not find the needed one. You will get the point.'),r.a.createElement("p",null,"5. There is games and rounds system."),r.a.createElement("p",null," It means that you are providing different pieces of song in different rounds and diffrerent songs in different games.(Max amount of rounds - 5)"),r.a.createElement("p",null,"After 2 games, you will be availiable to see the results of you challenging our server, provided with the history of songs"),r.a.createElement("h4",{className:"text-center"},"Have fun!")))))),r.a.createElement(o.m,{className:"justify-content-center mt-3"},m.map((function(e,t){return r.a.createElement(o.h,{xs:"2",key:t},r.a.createElement(o.c,{className:"stable-width",color:"elegant",onClick:e.func},r.a.createElement("h4",{className:"mb-0"},e.name)))})))))})),f={guessed:function(){return{type:"GUESSED"}},giveChance:function(){return{type:"GIVE_CHANCE"}},finish:function(){return{type:"FINISH"}},end:m,guessEnd:function(){return{type:"GUESS_END"}}},p=Object(g.b)(null,f)((function(e){var t=e.data,a=e.guessed,n=e.giveChance,c=e.finish,s=(e.end,e.guessEnd),l=e.round,i=[{name:"Guessed!",func:a},{name:"Give a chance",func:n},{name:"Finish game",func:c}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.m,{className:"row d-flex justify-content-center text-center mt-10"},r.a.createElement(o.h,null,r.a.createElement("h1",null,t&&!t.message&&0!==t.length&&Array.isArray(t)?"Are there something familliar?":"Sorry, nothing found"))),t&&!t.message&&Array.isArray(t)?t.map((function(e,t){return r.a.createElement(o.m,{className:"d-flex justify-content-center",key:t},r.a.createElement(o.h,{lg:"5",className:"mt-3"},r.a.createElement(o.d,{className:"text-center"},r.a.createElement(o.f,{className:"card-header-black"}," ",r.a.createElement("h5",null,e.artist," - ",e.title)),r.a.createElement(o.e,{className:"card-body-black"},e.preview?r.a.createElement("audio",{id:"player",className:"audio-width",controls:!0},r.a.createElement("source",{src:e.preview,type:"audio/mp3"})):r.a.createElement(o.g,null,r.a.createElement("h4",{className:"mb-0"},"Sorry, no preview for this one"))))))})):"",r.a.createElement(o.m,{className:"justify-content-center mt-4"},t&&!t.message&&0!==t.length&&Array.isArray(t)?i.map((function(e){return r.a.createElement(o.c,{key:e.name,className:"stable-width",color:"elegant",disabled:"Give a chance"===e.name&&l>=5,onClick:function(){e.func(),s()}},r.a.createElement("h4",{className:"mb-0"},e.name))})):i.filter((function(e,t){return 0!==t})).map((function(e){return r.a.createElement(o.c,{key:e.name,className:"stable-width",color:"elegant",disabled:"Give a chance"===e.name&&l>=5,onClick:function(){e.func(),s()}},r.a.createElement("h4",{className:"mb-0"},e.name))}))))})),y=a(10),b=a.n(y),v=a(38),N=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},w={songResponse:i,addToHistory:u,pendingStatus:d},S=Object(g.b)((function(e){return{songs:e.songs}}),w)((function(e){var t=e.songResponse,a=e.addToHistory,c=e.apiQuery,s=e.pendingStatus,i=e.songs,m=Object(n.useState)(!1),u=Object(l.a)(m,2),d=u[0],g=u[1],h=Object(n.useState)({}),E=Object(l.a)(h,2),f=E[0],p=E[1],y=Object(n.useState)(!1),w=Object(l.a)(y,2),S=w[0],O=w[1],j=Object(n.useState)(N()),x=Object(l.a)(j,2),T=x[0],k=x[1];Object(n.useEffect)((function(){function e(){k(N())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.h,{xs:"1",className:"align-self-center"},r.a.createElement(v.a,{record:d,className:"sound-wave normalize-width rounded-borders",onStop:function(e){p(e),O(!0)},strokeColor:"#FFF",backgroundColor:"#3a3a3a",mimeType:"audio/mp3",width:T.width>840?"640":"300"})),r.a.createElement(o.m,{className:"justify-content-center"},r.a.createElement(o.c,{className:"stable-width",color:"elegant",onClick:function(e){return g(!d)}},r.a.createElement("h4",{className:"mb-0"},d?"Stop":"Record")),r.a.createElement(o.c,{className:"stable-width",color:"elegant",onClick:function(e){var n,r,l,o,i;return b.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return n=e.target,r=n,0===n.children.length&&(r=n.parentElement),r.children[0].innerText="Waiting",s(),(l=new FormData).append("recognize",f.blob,"recognize.mp3"),o="sound"===c?"/api/recognize":"/api/recognizeByHumming",m.next=10,b.a.awrap(fetch(o,{method:"POST",body:l}).then((function(e){return e.ok?e.json():{message:"error"}})).catch((function(e){return console.log("Something went wrong")})));case 10:i=m.sent,t(i),i&&a(i);case 13:case"end":return m.stop()}}))},disabled:!(!d&&S&&!i.pending)},r.a.createElement("h4",{className:"mb-0"},"Finish"))))})),O={songResponse:i,addToHistory:u,pendingStatus:d},j=Object(g.b)((function(e){return{songs:e.songs}}),O)((function(e){var t=e.songResponse,a=e.addToHistory,c=e.pendingStatus,s=e.songs,i=Object(n.useState)(""),m=Object(l.a)(i,2),u=m[0],d=m[1];return r.a.createElement("form",{onSubmit:function(e){var n,r;return b.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e.preventDefault(),c(),e.target.lastChild.children[0].children[0].innerText="Waiting",n={data:u},s.next=7,b.a.awrap(fetch("/api/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():{message:"error"}})).catch((function(e){return console.log("Something went wrong")})));case 7:r=s.sent,t(r),r&&a(r);case 11:case"end":return s.stop()}}))}},r.a.createElement(o.h,{md:"5",className:"mx-auto"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"basic-addon"},r.a.createElement("i",{className:"fas fa-pencil-alt prefix"}))),r.a.createElement("textarea",{className:"form-control text-blacktheme",rows:"5",value:u,onChange:function(e){return d(e.target.value)},required:!0}))),r.a.createElement(o.m,null,r.a.createElement(o.c,{type:"submit",className:"stable-width mx-auto mt-3",color:"elegant",disabled:!!s.pending},r.a.createElement("h4",{className:"mb-0"},"Send"))))})),x=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=["humming","sound","lyrics"],i=function(e){var t;"button"!==e.target.tag&&(t=e.target.parentElement.children[0].innerText.toLowerCase()),c(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.m,{className:"d-flex justify-content-center mt-10"},r.a.createElement("h1",null,"Recognize by")),r.a.createElement(o.m,{className:"d-flex justify-content-center mt-3"},s.map((function(e,t){return r.a.createElement(o.h,{xs:"2",key:t},r.a.createElement(o.c,{className:"stable-width",color:"elegant",disabled:a===e,onClick:i},r.a.createElement("h4",{className:"mb-0"},e)))}))),r.a.createElement(o.m,{className:"d-flex flex-column justify-content-center mt-3"},a?a!==s[2]?r.a.createElement(S,{apiQuery:a}):r.a.createElement(j,null):""))},T=function(e){var t=e.data,a=e.games,n=e.round,c=e.end,s=e.received;return r.a.createElement("div",null,s?r.a.createElement(p,{data:t,round:n}):r.a.createElement(x,null),a>=3?r.a.createElement(o.m,{className:"justify-content-center mt-4"},r.a.createElement(o.c,{className:"stable-width",onClick:c,color:"elegant"},r.a.createElement("h4",{className:"mb-0"},"Show Results"))):"")},k={startOver:function(){return{type:"START_OVER"}}},_=Object(g.b)((function(e){return{songHistory:e.songHistory}}),k)((function(e){var t=e.songHistory,a=e.player,n=e.server,c=e.startOver;return t=t.flat().filter((function(e){return e.title})),r.a.createElement("div",null,r.a.createElement(o.m,{className:"row d-flex justify-content-center text-center mt-10"},r.a.createElement(o.h,null,r.a.createElement("h1",null,a===n?"Oh, it's a draw!":a>n?"Congratulations!":"Oh sorry, looks like our server is lucky enough"," "))),r.a.createElement(o.m,{className:"row d-flex justify-content-center text-center mt-2"},r.a.createElement(o.h,null,r.a.createElement("h2",null,0!==t.length?"Here is your song history:":"But you got this far without server guesses?"))),t?t.map((function(e,t){return r.a.createElement(o.m,{className:"d-flex justify-content-center",key:t},r.a.createElement(o.h,{lg:"5",className:"mt-3"},r.a.createElement(o.d,{className:"text-center"},r.a.createElement(o.f,{className:"card-header-black"}," ",r.a.createElement("h5",null,e.artist," - ",e.title)),r.a.createElement(o.e,{className:"card-body-black"},e.preview?r.a.createElement("audio",{id:"player",className:"audio-width",controls:!0},r.a.createElement("source",{src:e.preview,type:"audio/mp3"})):r.a.createElement(o.g,null,r.a.createElement("h4",{className:"mb-0"},"Sorry, no preview for this one"))))))})):"",r.a.createElement(o.m,{className:"justify-content-center mt-4 mb-4"},r.a.createElement(o.c,{className:"stable-width",onClick:c,color:"elegant"},r.a.createElement("h4",{className:"mb-0"},"To Main Menu"))))})),A={end:m},C=Object(g.b)((function(e){return{songs:e.songs,game:e.game}}),A)((function(e){var t=e.songs,a=e.game,n=e.end,c=a.player,s=a.server,l=a.games,i=a.round,m=a.results,u=t.data,d=t.received;return r.a.createElement(o.i,{className:"app-color"},r.a.createElement(o.m,{className:"d-flex justify-content-center"},r.a.createElement(o.h,{sm:"5",className:"d-flex counter"},r.a.createElement("table",{className:"full-width text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"h3-responsive th-sm"},"You"),r.a.createElement("th",{className:"h3-responsive th-sm"},"Server"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"h3-responsive"},c),r.a.createElement("td",{className:"h3-responsive"},s)))))),r.a.createElement(o.m,{className:"d-flex justify-content-center mt-8"},r.a.createElement("h2",null,"Game ",l,", Round ",i)),m?r.a.createElement(_,{player:c,server:s}):r.a.createElement(T,{data:u,round:i,games:l,received:d,end:n}))})),R=Object(g.b)((function(e){return{game:e.game}}))((function(e){var t=e.game;return r.a.createElement("div",{className:"cover-full"},t.status?r.a.createElement(C,null):r.a.createElement(E,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(66),a(67),a(68);var H=a(39),D=a(14),G=a(16),I=Object(G.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:!1,player:0,server:0,games:1,round:1,results:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START":return Object(D.a)({},e,{status:!0});case"GUESSED":return Object(D.a)({},e,{server:e.server+1,games:e.games+1,round:1});case"GIVE_CHANCE":return Object(D.a)({},e,{round:e.round+1});case"FINISH":return Object(D.a)({},e,{player:e.player+1,games:e.games+1,round:1});case"END":return Object(D.a)({},e,{results:!0});case"START_OVER":return{status:!1,player:0,server:0,games:1,round:1,results:!1};default:return e}},songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:"",received:!1,pending:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SONG_RESPONSE":return Object(D.a)({},t.payload,{received:!0,pending:!1});case"GUESS_END":return Object(D.a)({},e,{received:!1});case"PENDING_STATUS":return Object(D.a)({},e,{pending:!0});default:return e}},songHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_HISTORY":return[].concat(Object(H.a)(e),[t.payload]);case"CLEAR_HISTORY":return[];default:return e}}}),F=Object(G.c)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(g.a,{store:F},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.a283c11c.chunk.js.map