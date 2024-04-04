function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./BookShelf-giXtcpck.js","./vendor-BZRk0hZB.js","./vendor-CmztZ7Xh.css","./loading-DEPdKinF.js","./loading-rid_2_Na.css","./BookShelf-FGqXuaeo.css","./BookChapter-I3tKEWlC.js","./BookChapter-BdT6tpAK.css","./config-B_MdNjw3.js","./config-B2IgxNHB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{o as c,c as w,r as xe,a as se,b as ie,d as B,e as m,w as h,f as v,u as i,l as z,g as y,F as O,E as Ve,h as he,p as Ie,i as Ne,j as Te,k as C,m as ge,s as Y,n as G,t as X,q as me,v as Se,x as le,y as $e,z as P,A as K,B as _e,C as Le,D as Re,G as ce,V as Oe,H as Pe,I as Z,J as Je,K as ye,L as De,M as $,N as Ae,O as je,P as A,Q as fe,R as be,S as H,T as Ke,U as Me,W as He,X as qe,Y as Fe,Z as ze,_ as We,$ as Ge,a0 as Qe,a1 as Xe}from"./vendor-BZRk0hZB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const Ye="modulepreload",Ze=function(e,t){return new URL(e,t).href},ue={},ne=function(t,o,s){let n=Promise.resolve();if(o&&o.length>0){const r=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),f=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=Promise.all(o.map(u=>{if(u=Ze(u,s),u in ue)return;ue[u]=!0;const b=u.endsWith(".css"),V=b?'[rel="stylesheet"]':"";if(!!s)for(let a=r.length-1;a>=0;a--){const _=r[a];if(_.href===u&&(!b||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${V}`))return;const S=document.createElement("link");if(S.rel=b?"stylesheet":Ye,b||(S.as="script",S.crossOrigin=""),S.href=u,f&&S.setAttribute("nonce",f),document.head.appendChild(S),b)return new Promise((a,_)=>{S.addEventListener("load",a),S.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}return n.then(()=>t()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})},J=(e,t)=>{const o=e.__vccOpts||e;for(const[s,n]of t)o[s]=n;return o},et={};function tt(e,t){const o=xe("router-view");return c(),w(o)}const ot=J(et,[["render",tt]]),ke=[{path:"/",name:"shelf",component:()=>ne(()=>import("./BookShelf-giXtcpck.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/chapter",name:"chapter",component:()=>ne(()=>import("./BookChapter-I3tKEWlC.js"),__vite__mapDeps([6,1,2,3,4,7]),import.meta.url)}];se({history:ie(),routes:ke});const L=e=>(Ie("data-v-aee57c78"),e=e(),Ne(),e),nt=L(()=>y("br",null,null,-1)),rt=L(()=>y("br",null,null,-1)),st=L(()=>y("br",null,null,-1)),it=L(()=>y("br",null,null,-1)),lt=L(()=>y("br",null,null,-1)),at={style:{"margin-top":"20px"}},ct=L(()=>y("code",null,"^$()[]{}.?+*|",-1)),ut=L(()=>y("br",null,null,-1)),dt=L(()=>y("code",null,"(?s)",-1)),pt=L(()=>y("br",null,null,-1)),ht=L(()=>y("code",null,"(?m)",-1)),gt=L(()=>y("br",null,null,-1)),mt=L(()=>y("code",null,"(?i)",-1)),St=L(()=>y("br",null,null,-1)),_t={__name:"SourceHelp",setup(e){return(t,o)=>{const s=Ve,n=he;return c(),B(O,null,[m(s,{icon:i(z),href:"https://alanskycn.gitee.io/teachme/",target:"_blank"},{default:h(()=>[v("书源制作教程")]),_:1},8,["icon"]),nt,m(s,{icon:i(z),href:"https://zhuanlan.zhihu.com/p/29436838",target:"_blank"},{default:h(()=>[v("xpath基础教程")]),_:1},8,["icon"]),rt,m(s,{icon:i(z),href:"https://zhuanlan.zhihu.com/p/32187820",target:"_blank"},{default:h(()=>[v("xpath高级教程")]),_:1},8,["icon"]),st,m(s,{icon:i(z),href:"https://www.w3cschool.cn/regex_rmjc",target:"_blank"},{default:h(()=>[v("正则表达式教程")]),_:1},8,["icon"]),it,m(s,{icon:i(z),href:"https://regexr-cn.com/",target:"_blank"},{default:h(()=>[v("正则表达式在线验证工具")]),_:1},8,["icon"]),lt,y("div",at,[y("span",null,[m(n,null,{default:h(()=>[ct,v(" 这些是Java正则特殊符号,匹配需转义")]),_:1})]),ut,y("span",null,[m(n,null,{default:h(()=>[dt,v(" 前缀表示跨行解析")]),_:1})]),pt,y("span",null,[m(n,null,{default:h(()=>[ht,v(" 前缀表示逐行匹配")]),_:1})]),gt,y("span",null,[m(n,null,{default:h(()=>[mt,v(" 前缀表示忽略大小写")]),_:1})]),St])],64)}}},yt=J(_t,[["__scopeId","data-v-aee57c78"]]),ft=1e3,U=Te.create({baseURL:location.origin,timeout:120*ft}),{hostname:ve,port:we}=new URL(location.origin),bt=/source/i.test(location.href),kt=e=>{throw bt&&C({message:"后端错误，检查网络或者阅读app",type:"error"}),e};U.interceptors.response.use(e=>e,kt);const vt=()=>U.get("/getReadConfig"),wt=e=>U.post("/saveReadConfig",e),Ct=e=>U.post("/saveBookProgress",e),Bt=e=>{e&&navigator.sendBeacon(`${location.origin}/saveBookProgress`,JSON.stringify(e))},Ut=()=>U.get("/getBookshelf"),Et=e=>U.get("/getChapterList?url="+encodeURIComponent(e)),xt=(e,t)=>U.get("/getBookContent?url="+encodeURIComponent(e)+"&index="+t),Vt=(e,t,o)=>{const s=`ws://${ve}:${Number(we)+1}/searchBook`,n=new WebSocket(s);n.onopen=()=>{n.send(`{"key":"${e}"}`)},n.onmessage=({data:r})=>t(r),n.onclose=()=>{o()}},It=e=>U.post("/saveBook",e),Nt=e=>U.post("/deleteBook",e),Q=/bookSource/i.test(location.href),Tt=()=>Q?U.get("getBookSources"):U.get("getRssSources"),$t=e=>Q?U.post("saveBookSource",e):U.post("saveRssSource",e),Lt=e=>Q?U.post("saveBookSources",e):U.post("saveRssSources",e),Rt=e=>Q?U.post("deleteBookSources",e):U.post("deleteRssSources",e),Ot=(e,t,o,s)=>{const n=`ws://${ve}:${Number(we)+1}/${Q?"bookSource":"rssSource"}Debug`,r=new WebSocket(n);r.onopen=()=>{r.send(JSON.stringify({tag:e,key:t}))},r.onmessage=({data:l})=>o(l),r.onclose=()=>{C({message:"调试已关闭！",type:"info"}),s()}},j={getReadConfig:vt,saveReadConfig:wt,saveBookProgress:Ct,saveBookProgressWithBeacon:Bt,getBookShelf:Ut,getChapterList:Et,getBookContent:xt,search:Vt,saveBook:It,deleteBook:Nt,getSources:Tt,saveSources:Lt,saveSource:$t,deleteSource:Rt,debug:Ot},W=e=>e==null||e.length===0||/^\s+$/.test(e),ae=e=>"bookSourceName"in e,Pt=e=>ae(e)?!W(e.bookSourceName)&&!W(e.bookSourceUrl)&&!W(e.bookSourceType):!W(e.sourceName)&&!W(e.sourceName),ee=e=>ae(e)?e.bookSourceUrl:e.sourceUrl,Jt=(e,t)=>{var o,s,n,r,l,f,u,b;return ae(e)?(((o=e.bookSourceName)==null?void 0:o.includes(t))||((s=e.bookSourceUrl)==null?void 0:s.includes(t))||((n=e.bookSourceGroup)==null?void 0:n.includes(t))||((r=e.bookSourceComment)==null?void 0:r.includes(t)))??!1:(((l=e.sourceName)==null?void 0:l.includes(t))||((f=e.sourceUrl)==null?void 0:f.includes(t))||((u=e.sourceGroup)==null?void 0:u.includes(t))||((b=e.sourceComment)==null?void 0:b.includes(t)))??!1},re=e=>{const t=new Map;return e.forEach(o=>t.set(ee(o),o)),t},Dt={ruleSearch:{},ruleBookInfo:{},ruleToc:{},ruleContent:{},ruleReview:{},ruleExplore:{}},At={},q=/bookSource/i.test(location.href),de=q?Dt:At,M=ge("source",{state:()=>({bookSources:[],rssSources:[],savedSources:[],currentSource:de,currentTab:localStorage.getItem("tabName")||"editTab",editTabSource:{},isDebuging:!1}),getters:{sources:e=>q?e.bookSources:e.rssSources,sourcesMap:e=>re(e.sources),savedSourcesMap:e=>re(e.savedSources),currentSourceUrl:e=>q?e.currentSource.bookSourceUrl:e.currentSource.sourceUrl,searchKey:e=>q?e.currentSource.ruleSearch.checkKeyWord||"我的":null},actions:{startDebug(){this.currentTab="editDebug",this.isDebuging=!0},debugFinish(){this.isDebuging=!1},saveSources(e){q?this.bookSources=e:this.rssSources=e},setPushReturnSources(e){this.savedSources=e},deleteSources(e){let t=q?this.bookSources:this.rssSources;e.forEach(o=>{let s=t.indexOf(o);s>-1&&t.splice(s,1)})},saveCurrentSource(){let e=this.currentSource,t=this.sourcesMap;t.set(ee(e),JSON.parse(JSON.stringify(e))),this.saveSources(Array.from(t.values()))},changeCurrentSource(e){this.currentSource=JSON.parse(JSON.stringify(e))},changeTabName(e){this.currentTab=e,localStorage.setItem("tabName",e)},changeEditTabSource(e){this.editTabSource=JSON.parse(JSON.stringify(e))},editHistory(e){let t;if(localStorage.getItem("history"))t=JSON.parse(localStorage.getItem("history")),t.new.push(e),t.new.length>50&&t.new.shift(),t.old.length>50&&t.old.shift(),localStorage.setItem("history",JSON.stringify(t));else{const o={new:[e],old:[]};localStorage.setItem("history",JSON.stringify(o))}},editHistoryUndo(){if(localStorage.getItem("history")){let e=JSON.parse(localStorage.getItem("history"));e.old.push(this.currentSource),e.new.length&&(this.currentSource=e.new.pop()),localStorage.setItem("history",JSON.stringify(e))}},clearAllHistory(){localStorage.setItem("history",JSON.stringify({new:[],old:[]}))},clearEdit(){this.editTabSource={},this.currentSource=de},clearAllSource(){this.bookSources=[],this.rssSources=[],this.savedSources=[]}}}),jt={__name:"SourceItem",props:["source"],setup(e){const t=e,o=M(),{savedSourcesMap:s,currentSourceUrl:n}=Y(o),r=G(()=>ee(t.source)),l=u=>{o.changeCurrentSource(u)},f=G(()=>{const u=s.value;return u.size==0?!1:!u.has(r.value)});return(u,b)=>{const V=le,E=$e;return c(),w(E,{size:"large",border:"",label:i(r),class:Se({error:i(f),edit:i(r)==i(n)})},{default:h(()=>[v(X(e.source.bookSourceName||e.source.sourceName)+" ",1),m(V,{text:"",icon:i(me),onClick:b[0]||(b[0]=S=>l(e.source))},null,8,["icon"])]),_:1},8,["label","class"])}}},Kt=J(jt,[["__scopeId","data-v-830cee5a"]]),Mt={class:"tool"},Ht={__name:"SourceList",setup(e){const t=M(),o=P([]),s=P(""),{sources:n,sourcesMap:r}=Y(t),l=G(()=>{const a=s.value;return a===""?n.value:n.value.filter(_=>Jt(_,a))}),f=G(()=>{const a=o.value;if(a.length==0)return[];const _=s.value==""?r.value:re(l.value);return a.reduce((x,k)=>{const I=_.get(k);return I&&x.push(I),x},[])}),u=()=>{const a=f.value;j.deleteSource(a).then(({data:_})=>{if(!_.isSuccess)return C.error(_.errorMsg);t.deleteSources(a);const x=Pe(o.value);a.forEach(k=>{const I=x.indexOf(ee(k));I>-1&&x.splice(I,1)}),o.value=x})},b=()=>{t.clearAllSource(),o.value=[]},V=()=>{const a=document.createElement("input");a.type="file",a.accept=".json,.txt",a.addEventListener("change",_=>{const x=_.target.files[0];var k=new FileReader;k.readAsText(x),k.onload=()=>{try{const I=JSON.parse(k.result);t.saveSources(I)}catch{C({message:"上传的源格式错误",type:"error"})}}}),a.click()},E=/bookSource/.test(window.location.href),S=()=>{const a=document.createElement("a");let _=o.value.length===0?l.value:f.value,x=E?"BookSource":"RssSource";a.download=`${x}_${Date().replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/,"$2$1$3").replace(/:/g,"")}.json`;let k=new Blob([JSON.stringify(_,null,4)],{type:"application/json"});a.href=window.URL.createObjectURL(k),a.click()};return(a,_)=>{const x=Z,k=le,I=Je;return c(),B(O,null,[m(x,{modelValue:i(s),"onUpdate:modelValue":_[0]||(_[0]=N=>K(s)?s.value=N:null),class:"search","prefix-icon":i(_e),placeholder:"筛选源"},null,8,["modelValue","prefix-icon"]),y("div",Mt,[m(k,{onClick:V,icon:i(Le)},{default:h(()=>[v("打开")]),_:1},8,["icon"]),m(k,{disabled:i(l).length===0,onClick:S,icon:i(Re)},{default:h(()=>[v(" 导出")]),_:1},8,["disabled","icon"]),m(k,{type:"danger",icon:i(ce),onClick:u,disabled:i(f).length===0},{default:h(()=>[v("删除")]),_:1},8,["icon","disabled"]),m(k,{type:"danger",icon:i(ce),onClick:b,disabled:i(n).length===0},{default:h(()=>[v("清空")]),_:1},8,["icon","disabled"])]),m(I,{id:"source-list",modelValue:i(o),"onUpdate:modelValue":_[1]||(_[1]=N=>K(o)?o.value=N:null)},{default:h(()=>[m(i(Oe),{style:{height:"100%","overflow-y":"auto","overflow-x":"hidden"},"data-key":N=>N.bookSourceUrl||N.sourceUrl,"data-sources":i(l),"data-component":Kt,"estimate-size":45},null,8,["data-key","data-sources"])]),_:1},8,["modelValue"])],64)}}},qt=J(Ht,[["__scopeId","data-v-cd1572ca"]]),Ft={__name:"SourceDebug",setup(e){const t=M(),o=P(""),s=P("");ye(()=>t.isDebuging,()=>{t.isDebuging&&r()});const n=f=>{let u=document.querySelector("#debug-text");u.scrollTop=u.scrollHeight,o.value+=f+`
`},r=async()=>{o.value="",await j.saveSource(t.currentSource),j.debug(t.currentSourceUrl,s.value||t.searchKey,n,t.debugFinish)},l=G(()=>/bookSource/.test(window.location.href));return(f,u)=>{const b=Z;return c(),B(O,null,[i(l)?(c(),w(b,{key:0,id:"debug-key",modelValue:i(s),"onUpdate:modelValue":u[0]||(u[0]=V=>K(s)?s.value=V:null),placeholder:"搜索书名、作者","prefix-icon":i(_e),style:{"padding-bottom":"4px"},onKeydown:De(r,["enter"])},null,8,["modelValue","prefix-icon"])):$("",!0),m(b,{id:"debug-text",modelValue:i(o),"onUpdate:modelValue":u[1]||(u[1]=V=>K(o)?o.value=V:null),type:"textarea",readonly:"",rows:"29",placeholder:"这里用于输出调试信息"},null,8,["modelValue"])],64)}}},zt=J(Ft,[["__scopeId","data-v-f7a4e94b"]]),yo=ge("book",{state:()=>({connectStatus:"正在连接后端服务器……",connectType:"",newConnect:!0,searchBooks:[],shelf:[],catalog:[],readingBook:{index:0,chapterPos:0},popCataVisible:!1,contentLoading:!0,showContent:!1,config:{theme:0,font:0,fontSize:18,readWidth:800,infiniteLoading:!1,customFontName:"",jumpDuration:1e3,spacing:{paragraph:1,line:.8,letter:0}},miniInterface:!1,readSettingsVisible:!1}),getters:{bookProgress:e=>{var l;if(e.catalog.length==0)return;const{index:t,chapterPos:o,bookName:s,bookAuthor:n}=e.readingBook;let r=(l=e.catalog[t])==null?void 0:l.title;if(r)return{name:s,author:n,durChapterIndex:t,durChapterPos:o,durChapterTime:new Date().getTime(),durChapterTitle:r}}},actions:{setConnectStatus(e){this.connectStatus=e},setConnectType(e){this.connectType=e},setNewConnect(e){this.newConnect=e},addBooks(e){this.shelf=e},setCatalog(e){this.catalog=e},setPopCataVisible(e){this.popCataVisible=e},setContentLoading(e){this.contentLoading=e},setReadingBook(e){this.readingBook=e},setConfig(e){Object.assign(this.config,e)},setReadSettingsVisible(e){this.readSettingsVisible=e},setShowContent(e){this.showContent=e},setMiniInterface(e){this.miniInterface=e},async setSearchBooks(e){e.forEach(t=>{this.shelf.find(s=>s.bookUrl==t.bookUrl)===void 0&&this.searchBooks.push(t)})},clearSearchBooks(){this.searchBooks=[]},async saveBookProgress(){return this.bookProgress?j.saveBookProgress(this.bookProgress):Promise.resolve()}}}),Wt=Ae(),Gt={__name:"SourceJson",setup(e){const t=M(),o=P(""),s=async n=>{try{t.changeEditTabSource(JSON.parse(n))}catch{C({message:"粘贴的源格式错误",type:"error"})}};return je(async()=>{let n=t.editTabSource;Object.keys(n).length>0?o.value=JSON.stringify(n,null,4):o.value=""}),(n,r)=>{const l=Z;return c(),w(l,{id:"source-json",modelValue:i(o),"onUpdate:modelValue":r[0]||(r[0]=f=>K(o)?o.value=f:null),type:"textarea",placeholder:"这里输出序列化的JSON数据,可直接导入'阅读'APP",rows:"30",onChange:s,style:{"margin-bottom":"4px"}},null,8,["modelValue"])}}},Qt=J(Gt,[["__scopeId","data-v-7e91a802"]]),Xt={__name:"SourceTabTools",setup(e){const t=M(),{currentTab:o}=Y(t),s=P([["editTab","编辑源"],["editDebug","调试源"],["editList","源列表"],["editHelp","帮助信息"]]);return(n,r)=>{const l=Qt,f=zt,u=qt,b=yt,V=fe,E=be;return c(),w(E,{modelValue:i(o),"onUpdate:modelValue":r[0]||(r[0]=S=>K(o)?o.value=S:null)},{default:h(()=>[(c(!0),B(O,null,A(i(s),(S,a)=>(c(),w(V,{key:S[0],name:S[0],label:S[1]},{default:h(()=>[a==0?(c(),w(l,{key:0})):$("",!0),a==1?(c(),w(f,{key:1})):$("",!0),a==2?(c(),w(u,{key:2})):$("",!0),a==3?(c(),w(b,{key:3})):$("",!0)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])}}},Yt=J(Xt,[["__scopeId","data-v-dcce2457"]]),Zt={class:"menu flex-column-center"},eo={class:"hotkeys-header flex-space-between"},to=["id"],oo={key:0},no={class:"hotkeys-settings flex-column-center"},ro={class:"title"},so={class:"hotkeys-item__content"},io={key:0},lo={key:0},ao={__name:"ToolBar",setup(e){const t=M(),o=()=>{const p=C({message:"加载中……",showClose:!0,duration:0});j.getSources().then(({data:g})=>{g.isSuccess?(t.changeTabName("editList"),t.saveSources(g.data),C({message:`成功拉取${g.data.length}条源`,type:"success"})):C({message:g.errorMsg??"后端错误",type:"error"})}).finally(()=>p.close())},s=()=>{let p=t.sources;if(t.changeTabName("editList"),p.length===0)return C({message:"空空如也",type:"info"});C({message:"正在推送中",type:"info"}),j.saveSources(p).then(({data:g})=>{if(g.isSuccess){let d=g.data;if(Array.isArray(d)){let D="";p.length>d.length&&(D=`
推送失败的源将用红色字体标注!`,t.setPushReturnSources(d)),C({message:`批量推送源到「阅读3.0APP」
共计: ${p.length} 条
成功: ${d.length} 条
失败: ${p.length-d.length} 条${D}`,type:"success"})}}else C({message:`批量推送源失败!
ErrorMsg: ${g.errorMsg}`,type:"error"})})},n=()=>{t.changeTabName("editTab"),t.changeEditTabSource(t.currentSource)},r=()=>{t.changeCurrentSource(t.editTabSource)},l=()=>{t.editHistoryUndo()},f=()=>{t.clearEdit(),C({message:"已清除",type:"success"})},u=()=>{t.clearEdit(),t.clearAllHistory(),C({message:"已清除所有历史记录",type:"success"})},b=()=>{let p=/bookSource/.test(location.href),g=t.currentSource;Pt(g)?j.saveSource(g).then(({data:d})=>{d.isSuccess?(C({message:`源《${p?g.bookSourceName:g.sourceName}》已成功保存到「阅读3.0APP」`,type:"success"}),t.saveCurrentSource()):C({message:`源《${p?g.bookSourceName:g.sourceName}》保存失败!
ErrorMsg: ${d.errorMsg}`,type:"error"})}):C({message:"请检查<必填>项是否全部填写",type:"error"})},V=()=>{t.startDebug()},E=P(Array.of({name:"⇈推送源",hotKeys:[],action:s},{name:"⇊拉取源",hotKeys:[],action:o},{name:"⋙生成源",hotKeys:[],action:n},{name:"⋘编辑源",hotKeys:[],action:r},{name:"✗清空表单",hotKeys:[],action:f},{name:"↶撤销操作",hotKeys:[],action:l},{name:"↷重做操作",hotKeys:[],action:u},{name:"⇏调试源",hotKeys:[],action:V},{name:"✓保存源",hotKeys:[],action:b})),S=P(!0),a=P(!1),_=P(-1),x=()=>{a.value||(S.value=!1),a.value=!1};ye(S,p=>{if(!p){H.unbind("*"),F(),N();return}F(),H.unbind(),H("*",g=>{g.preventDefault();let d=H.getPressedKeyString();d.length==1&&d[0]=="esc"||a.value&&_.value>-1&&(E.value[_.value].hotKeys=d)})},{immediate:!0});const k=p=>{a.value=!0,C({message:"按ESC键或者点击空白处结束录入",type:"info"}),E.value[p].hotKeys=[],_.value=p},I=()=>{const p=[];E.value.forEach(({hotKeys:g})=>{p.push(g)}),R(p),S.value=!1},N=()=>{H.filter=()=>!0,E.value.forEach(({hotKeys:p,action:g})=>{p.length!=0&&H(p.join("+"),d=>{d.preventDefault(),g.call(null)})})},R=p=>{localStorage.setItem("legado_web_hotkeys",JSON.stringify(p))};function F(){try{const p=JSON.parse(localStorage.getItem("legado_web_hotkeys"));return!Array.isArray(p)||p.length==0?!1:(E.value.forEach((g,d)=>g.hotKeys=p[d]),!0)}catch{C({message:"快捷键配置错误",type:"error"}),localStorage.removeItem("legado_web_hotkeys")}return!1}return Ke(()=>{F()&&(S.value=!1)}),(p,g)=>{const d=le,D=he,Ue=He;return c(),B(O,null,[y("div",Zt,[(c(!0),B(O,null,A(i(E),T=>(c(),w(d,{size:"large",key:T.name,onClick:T.action},{default:h(()=>[v(X(T.name),1)]),_:2},1032,["onClick"]))),128)),m(d,{size:"large",onClick:g[0]||(g[0]=()=>S.value=!0)},{default:h(()=>[v("快捷键")]),_:1})]),m(Ue,{modelValue:i(S),"onUpdate:modelValue":g[1]||(g[1]=T=>K(S)?S.value=T:null),"show-close":!1,"before-close":x},{header:h(({titleClass:T,titleId:te})=>[y("div",eo,[y("div",{id:te,class:Se(T)},[v(" 快捷键设置 "),i(a)?(c(),B("span",oo,[m(D,null,{default:h(()=>[v(" / 录入中 ")]),_:1})])):$("",!0)],10,to),m(d,{disabled:i(a),onClick:I,icon:i(Me)},{default:h(()=>[v("保存")]),_:1},8,["disabled","icon"])])]),default:h(()=>[y("div",no,[(c(!0),B(O,null,A(i(E),(T,te)=>(c(),B("div",{key:T.name,class:"hotkeys-item flex-space-between"},[y("span",ro,[m(D,null,{default:h(()=>[v(X(T.name),1)]),_:2},1024)]),y("div",so,[(c(!0),B(O,null,A(T.hotKeys,(oe,Ee)=>(c(),B("div",{key:oe},[y("kbd",null,X(oe),1),Ee+1<T.hotKeys.length?(c(),B("span",io,[m(D,null,{default:h(()=>[v("+")]),_:1})])):$("",!0)]))),128)),T.hotKeys.length==0?(c(),B("span",lo,"未设置")):$("",!0)]),m(d,{disabled:i(a),text:"",icon:i(me),onClick:oe=>k(te)},{default:h(()=>[v("编辑")]),_:2},1032,["disabled","icon","onClick"])]))),128))])]),_:1},8,["modelValue"])],64)}}},co=J(ao,[["__scopeId","data-v-9fd45dad"]]),uo={__name:"SourceTabForm",props:["config"],setup(e){const t=M(),{currentSource:o}=Y(t);return(s,n)=>{const r=Z,l=qe,f=Fe,u=ze,b=We,V=Ge,E=Qe,S=fe,a=be;return c(),w(a,{id:"source-edit"},{default:h(()=>[(c(!0),B(O,null,A(Object.values(e.config),({name:_,children:x})=>(c(),w(S,{label:_,key:_},{default:h(()=>[m(E,{"label-position":"right","label-width":"auto"},{default:h(()=>[(c(!0),B(O,null,A(x,({type:k,title:I,namespace:N,id:R,array:F,hint:p,required:g})=>(c(),w(V,{label:I,key:I,required:g},{default:h(()=>[k=="String"&&typeof N>"u"?(c(),w(r,{key:0,type:"textarea",modelValue:i(o)[R],"onUpdate:modelValue":d=>i(o)[R]=d,placeholder:p,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):$("",!0),k=="String"&&typeof N<"u"?(c(),w(r,{key:1,type:"textarea",modelValue:i(o)[N][R],"onUpdate:modelValue":d=>i(o)[N][R]=d,placeholder:p,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):$("",!0),k=="Boolean"?(c(),w(l,{key:2,modelValue:i(o)[R],"onUpdate:modelValue":d=>i(o)[R]=d},null,8,["modelValue","onUpdate:modelValue"])):$("",!0),k=="Number"?(c(),w(f,{key:3,modelValue:i(o)[R],"onUpdate:modelValue":d=>i(o)[R]=d,min:0},null,8,["modelValue","onUpdate:modelValue"])):$("",!0),k=="Array"?(c(),w(b,{key:4,modelValue:i(o)[R],"onUpdate:modelValue":d=>i(o)[R]=d},{default:h(()=>[(c(!0),B(O,null,A(F,(d,D)=>(c(),w(u,{value:D,key:d,label:d},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):$("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})}}},po=J(uo,[["__scopeId","data-v-bced2b97"]]),ho={base:{name:"基础",children:[{title:"源类型",id:"bookSourceType",type:"Array",array:["文本","音频","图片","文件"],required:!0},{title:"源域名",id:"bookSourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"源名称",id:"bookSourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"bookSourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"bookSourceComment",type:"String",hint:"描述源作者和状态"},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"链接验证",id:"bookUrlPattern",type:"String",hint:"书籍URL正则，当详情页URL与源URL的域名不一致时有效，用于添加网址"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"书源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率，如1000(访问间隔1000ms)或者1/1000(1000ms内访问1次)"},{title:"js库",id:"jsLib",type:"String",hint:"js库, 可填写js或者key-value object获取在线js文件"}]},search:{name:"搜索",children:[{title:"搜索地址",id:"searchUrl",type:"String",hint:"[域名可省略]/search.php@kw={{key}}"},{title:"校验文字",namespace:"ruleSearch",id:"checkKeyWord",type:"String",hint:"校验关键字，强烈建议填写"},{title:"列表规则",namespace:"ruleSearch",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleSearch",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleSearch",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleSearch",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleSearch",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleSearch",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleSearch",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleSearch",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleSearch",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},find:{name:"发现",children:[{title:"发现地址",id:"exploreUrl",type:"String",hint:"单个发现格式<name>::<url>或者{url:<url>,title:<name>,style:...}；前者用换行符或者&&连接，后者放在数组内；可用js动态生成"},{title:"列表规则",namespace:"ruleExplore",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleExplore",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleExplore",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleExplore",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleExplore",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleExplore",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleExplore",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleExplore",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleExplore",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},detail:{name:"详情",children:[{title:"预处理",namespace:"ruleBookInfo",id:"init",type:"String",hint:"用于加速详情信息检索，只支持AllInOne规则"},{title:"书名规则",namespace:"ruleBookInfo",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleBookInfo",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleBookInfo",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleBookInfo",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleBookInfo",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleBookInfo",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleBookInfo",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"目录地址",namespace:"ruleBookInfo",id:"tocUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url, 与详情页相同时可省略)"},{title:"修改书籍",namespace:"ruleBookInfo",id:"canReName",type:"String",hint:"允许修改书名作者(规则结果为String类型, 默认不允许)"},{title:"下载URL",namespace:"ruleBookInfo",id:"downloadUrls",type:"String",hint:"文件类书源下载地址 (规则结果为String类型的url, 多个链接返回数组)"}]},directory:{name:"目录",children:[{title:"更新前JS",namespace:"ruleToc",id:"preUpdateJs",type:"String",hint:"更新目录前调用JS 动态更新目录链接"},{title:"列表规则",namespace:"ruleToc",id:"chapterList",type:"String",hint:"选择目录列表的章节节点 (规则结果为List<Element>)"},{title:"章节名称",namespace:"ruleToc",id:"chapterName",type:"String",hint:"选择章节名称 (规则结果为String)"},{title:"章节地址",namespace:"ruleToc",id:"chapterUrl",type:"String",hint:"选择章节链接 (规则结果为String类型的Url)"},{title:"标题处理",namespace:"ruleToc",id:"formatJs",type:"String",hint:"遍历去重后的章节列表的回调，提供index(章节序号从1开始)、title(章节标题)变量，额外提供gInt(初始值0)，返回值作为新的标题"},{title:"卷名标识",namespace:"ruleToc",id:"isVolume",type:"String",hint:"章节名称是否是卷名 (规则结果为Bool)"},{title:"章节信息",namespace:"ruleToc",id:"updateTime",type:"String",hint:"选择章节信息（如更新时间） (规则结果为String)"},{title:"收费标识",namespace:"ruleToc",id:"isVip",type:"String",hint:"章节是否为VIP章节 (规则结果为Bool)"},{title:"购买标识",namespace:"ruleToc",id:"isPay",type:"String",hint:"章节是否为已购买 (规则结果为Bool)"},{title:"翻页规则",namespace:"ruleToc",id:"nextTocUrl",type:"String",hint:"选择目录下一页链接 (规则结果为List<String>或String)"}]},content:{name:"正文",children:[{title:"正文规则",namespace:"ruleContent",id:"content",type:"String",hint:"选择正文内容 (规则结果为String)"},{title:"标题规则",namespace:"ruleContent",id:"title",type:"String",hint:"获取结果将会覆盖章节标题 (规则结果为String)"},{title:"翻页规则",namespace:"ruleContent",id:"nextContentUrl",type:"String",hint:"选择下一分页(不是下一章)链接 (规则结果为String类型的Url)"},{title:"脚本注入",namespace:"ruleContent",id:"webJs",type:"String",hint:"注入javascript，用于模拟鼠标点击等，必须有返回值，一般为String类型"},{title:"资源正则",namespace:"ruleContent",id:"sourceRegex",type:"String",hint:"匹配资源的url特征，用于嗅探"},{title:"替换规则",namespace:"ruleContent",id:"replaceRegex",type:"String",hint:"多页内容合并后替换，用于正文净化"},{title:"图片样式",namespace:"ruleContent",id:"imageStyle",type:"String",hint:"FULL:铺满 不填:默认样式"},{title:"图片解密",namespace:"ruleContent",id:"imageDecode",type:"String",hint:"填写JavaScript 返回解密图片的bytes "},{title:"购买操作",namespace:"ruleContent",id:"payAction",type:"String",hint:"填写JavaScript 返回购买链接或者调用购买接口"}]},other:{name:"其他",children:[{title:"启用搜索",id:"enabled",type:"Boolean"},{title:"启用发现",id:"enabledExplore",type:"Boolean"},{title:"CookieJar",id:"enabledCookieJar",type:"Boolean"},{title:"搜索权重",id:"weight",type:"Number"},{title:"排序编号",id:"customOrder",type:"Number"}]}},go={base:{name:"基础",children:[{title:"源域名",id:"sourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"图标",id:"sourceIcon",type:"String",hint:"填写图片网络链接"},{title:"源名称",id:"sourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"sourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"sourceComment",type:"String",hint:"描述源作者和状态"},{title:"分类地址",id:"sortUrl",type:"String",hint:`名称1::链接1
名称2::链接2`},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率"}]},list:{name:"列表",children:[{title:"列表规则",id:"ruleArticles",type:"String",hint:"规则结果为List<Element>"},{title:"翻页规则",id:"ruleNextPage",type:"String",hint:"下一页链接 规则结果为List<String>或String"},{title:"标题规则",id:"ruleTitle",type:"String",hint:"文章标题 规则结果为String"},{title:"时间规则",id:"rulePubDate",type:"String",hint:"文章发布时间 规则结果为String"},{title:"描述规则",id:"ruleDescription",type:"String",hint:"文章简要描述 规则结果为String"},{title:"图片规则",id:"ruleImage",type:"String",hint:"文章图片链接 规则结果为String"},{title:"链接规则",id:"ruleLink",type:"String",hint:"文章链接 规则结果为String"}]},webView:{name:"WebView",children:[{title:"内容规则",id:"ruleContent",type:"String",hint:"文章正文"},{title:"样式规则",id:"style",type:"String",hint:"文章正文样式 填写css"},{title:"注入规则",id:"injectJs",type:"String",hint:"注入网页的JavaScript"},{title:"黑名单",id:"contentBlacklist",type:"String",hint:"webView链接加载黑名单，英文逗号隔开"},{title:"白名单",id:"contentWhitelist",type:"String",hint:"webView链接加载白名单，英文逗号隔开"},{title:"链接拦截",id:"shouldOverrideUrlLoading",type:"String",hint:"填写js，变量url为当前资源链接，返回true拦截"}]},other:{name:"其他",children:[{title:"列表样式",id:"articleStyle",type:"Array",array:["默认","大图","双列"]},{title:"加载地址",id:"loadWithBaseUrl",type:"Boolean"},{title:"启用JS",id:"enableJs",type:"Boolean"},{title:"启用",id:"enabled",type:"Boolean"},{title:"Cookie",id:"enabledCookieJar",type:"Boolean"},{title:"单URL",id:"singleUrl",type:"Boolean"},{title:"排序编号",id:"customOrder",type:"Number"}]}},mo={class:"editor"},So={__name:"SourceEditor",setup(e){let t;return/bookSource/i.test(location.href)?(t=ho,document.title="书源管理"):(t=go,document.title="订阅源管理"),(o,s)=>{const n=po,r=co,l=Yt;return c(),B("div",mo,[m(n,{class:"left",config:i(t)},null,8,["config"]),m(r),m(l,{class:"right"})])}}},pe=J(So,[["__scopeId","data-v-5fe2b79d"]]),Ce=[{path:"/bookSource",name:"book-home",component:pe},{path:"/rssSource",name:"rss-home",component:pe}];se({history:ie(),routes:Ce});const Be=se({history:ie(),routes:ke.concat(Ce)});Be.afterEach(e=>{e.name=="shelf"&&(document.title="书架")});Xe(ot).use(Wt).use(Be).mount("#app");ne(()=>import("./config-B_MdNjw3.js"),__vite__mapDeps([8,1,2,9]),import.meta.url);export{j as A,J as _,yo as u};
