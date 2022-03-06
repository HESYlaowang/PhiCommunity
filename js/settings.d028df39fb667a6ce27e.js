(()=>{"use strict";const e=[{type:"slide",title:"谱面延时(MS)",codename:"input-offset",range:[-500,500],defaultValue:0,offset:5},{type:"button",title:"根据声音调整偏移率",onClick(){location.href="./calibrate"}},{type:"slide",title:"按键缩放",codename:"select-scale-ratio",range:[1,5],defaultValue:3},{type:"slide",title:"背景亮度",codename:"select-global-alpha",range:[1,5],defaultValue:3},{type:"toggle",title:"开启多押辅助",codename:"highLight",defaultValue:!0},{type:"toggle",title:"开启打击音效",codename:"hitSong",defaultValue:!0},{type:"toggle",title:"游玩时自动全屏",codename:"autoFullscreen",defaultValue:!0},{type:"toggle",title:"开启FC/AP指示器",codename:"lineColor"},{type:"toggle",title:"使用游玩友好型Note",codename:"usePlayerFriendlyUI"},{type:"slide",title:"界面宽高比",codename:"select-aspect-ratio",range:[1,8],defaultValue:8},{type:"button",title:"界面宽高比数值说明",onClick(){alert("1=>5:4     (1.25)\n2=>4:3     (1.333333)\n3=>10:7   (1.428571)\n4=>19:13 (1.461538)\n5=>8:5     (1.6)\n6=>5:3     (1.666667)\n7=>22:13 (1.692308)\n8=>16:9   (1.777778)")}},{type:"toggle",title:"开启HyperMode",codename:"hyperMode"},{type:"toggle",title:"启用旧版本打歌界面UI",codename:"useOldUI"},{type:"toggle",title:"背景模糊显示",codename:"imageBlur",defaultValue:!0},{type:"toggle",title:"启用AutoPlay",codename:"autoplay"},{type:"toggle",title:"开启触摸反馈",codename:"feedback"},{type:"toggle",title:"显示定位点",codename:"showPoint"},{type:"button",title:"修改玩家昵称",onClick(){const e=prompt("输入昵称","GUEST");localStorage.setItem("playerName",e)}},{type:"button",title:"关于我们",onClick(){location.href="../aboutUs/index.html"}},{type:"button",title:"清除全部数据",onClick(){window.localStorage.clear(),location.href="../index.html"}},{type:"button",title:"导出本地数据到剪贴板",onClick(){navigator.clipboard.writeText(JSON.stringify(localStorage)),this.innerHTML='<img src="../assets/images/Tick.svg"> 成功';const e=setTimeout((()=>{this.innerHTML="导出本地数据到剪贴板",clearTimeout(e)}),2e3)}},{type:"button",title:"从剪贴板导入数据",onClick(){navigator.clipboard.readText().then((e=>{try{const t=JSON.parse(e),n=Object.keys(t);for(const e in n)console.log(e,t[e]),localStorage.setItem(n[e],t[n[e]]);this.innerHTML='<img src="../assets/images/Tick.svg"> 成功';const a=setTimeout((()=>{this.innerHTML="导出本地数据到剪贴板",clearTimeout(a)}),2e3);location.reload()}catch(e){alert("导入失败，请检查剪贴板内容是否正确\n"+e)}}))}}];window.addEventListener("DOMContentLoaded",(()=>{window.localStorage.length,document.querySelector("#backBtn").addEventListener("click",(()=>{location.href="../chapterSelect/index.html"})),fetch("https://api.github.com/repos/HanHan233/PhiCommunity/commits?per_page=1").then((e=>e.json())).then((e=>{document.querySelector("#ver").innerText=e[0].sha.slice(0,7)}));try{document.querySelector("#device").innerText="Platform: "+navigator.userAgentData.platform+" ; isMobile:"+navigator.userAgentData.mobile}catch(e){document.querySelector("#device").innerText="User-Agent : "+navigator.userAgent.slice(navigator.userAgent.lastIndexOf(" "))}document.querySelector("#device").title=navigator.userAgent,e.forEach((e=>{let t;switch(e.type){case"slide":e.defaultValue=parseFloat(window.localStorage.getItem(e.codename))||e.defaultValue,t=function({title:e,codename:t,range:n,defaultValue:a=n[0],offset:o=1}){let l=a;const i=document.createElement("div");i.className="item";const c=document.createElement("div");c.className="title",c.dataset.name=e,c.dataset.value=l;const d=function({range:e,defaultValue:t=e[0],offset:n=1,onValueChange:a}){let o;const l=e[1]-e[0],i=document.createElement("div");i.className="slider";const c=document.createElement("div");c.className="slideBlock",i.appendChild(c),i.addEventListener("click",(e=>{e.offsetX>i.offsetWidth-35&&m(n),e.offsetX<35&&m(0-n)}));let d=!1;const s=t=>{u(Math.round(e[0]+(t.offsetX-50)/(i.clientWidth-100)*l))};c.addEventListener("mousedown",(()=>{d=!0,window.addEventListener("mousemove",s)})),window.addEventListener("mouseup",(()=>{d&&(d=!1,window.removeEventListener("mousemove",s))}));const r=t=>{u(Math.round(e[0]+(t.targetTouches[0].pageX-i.clientLeft-150)/(i.clientWidth-100)*l))};return c.addEventListener("touchstart",(()=>{d=!0,window.addEventListener("touchmove",r)})),window.addEventListener("touchend",(()=>{d&&(d=!1,window.removeEventListener("touchmove",r))})),u(t),{element:i,set:u,add:m};function u(t){return t<e[0]&&(t=e[0]),t>e[1]&&(t=e[1]),c.style.marginLeft=(t-(e[0]+e[1])/2)/l*2*80+"%",a(t),o=t,o}function m(e){return console.log(e),u(o+e)}}({range:n,defaultValue:a,offset:o,onValueChange:function(e){c.dataset.value=e,window.localStorage.setItem(t,e),l=e}});return i.appendChild(c),i.appendChild(d.element),{element:i,getValue:()=>l}}(e);break;case"toggle":e.defaultValue="true"==window.localStorage.getItem(e.codename)||e.defaultValue,t=function({title:e,codename:t,defaultValue:n=!1}){let a=n;const o=document.createElement("div");o.className="item";const l=document.createElement("div");l.className="title",l.dataset.name=e;const i=document.createElement("div");return i.classList.add("toggle"),a&&i.classList.add("checked"),o.appendChild(l),o.appendChild(i),o.addEventListener("click",(()=>{a?(i.classList.remove("checked"),window.localStorage.setItem(t,!1)):(i.classList.add("checked"),window.localStorage.setItem(t,!0)),a=!a})),{element:o}}(e);break;case"button":t=function({title:e,onClick:t}){const n=document.createElement("div");n.className="item";const a=document.createElement("button");return a.innerText=e,a.className="button",n.appendChild(a),a.onclick=t,{element:n}}(e);break;default:throw new Error("Unknown setting: "+e)}document.getElementById("settingItems").appendChild(t.element)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdGd0JUcUMsQ0FBVzFDLEdBQ2xCLE1BQ0QsSUFBSyxTQUNKQyxFR3ZESSxVQUFvQixNQUFFdkQsRUFBSyxRQUFFSyxJQUNuQyxNQUFNc0QsRUFBWXBCLFNBQVNxQixjQUFjLE9BQ3pDRCxFQUFVRSxVQUFZLE9BRXRCLE1BQU1vQyxFQUFTMUQsU0FBU3FCLGNBQWMsVUFRdEMsT0FQQXFDLEVBQU9wRCxVQUFZN0MsRUFDbkJpRyxFQUFPcEMsVUFBWSxTQUVuQkYsRUFBVVMsWUFBWTZCLEdBRXRCQSxFQUFPQyxRQUFVN0YsRUFFVixDQUFFK0UsUUFBU3pCLEdIMkNUd0MsQ0FBVzdDLEdBQ2xCLE1BQ0QsUUFDQyxNQUFNLElBQUk4QyxNQUFNLG9CQUFzQjlDLEdBRXZDZixTQUFTOEQsZUFBZSxnQkFBZ0JqQyxZQUFZYixFQUFLNkIsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGktY29tbXVuaXR5Ly4vc3JjL3NldHRpbmdzL3NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vcGhpLWNvbW11bml0eS8uL3NyYy9zZXR0aW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waGktY29tbXVuaXR5Ly4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vcGhpLWNvbW11bml0eS8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly9waGktY29tbXVuaXR5Ly4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge3tcbiAqIFx0dGl0bGU6IHN0cmluZyxcbiAqIFx0Y29kZW5hbWU6IHN0cmluZ1xuICogfX0gQmFzZVNldHRpbmdcbiAqXG4gKiBAdHlwZWRlZiB7IEJhc2VTZXR0aW5nICYge1xuICogIHJhbmdlOiBbbnVtYmVyLG51bWJlcl0sXG4gKiBcdGRlZmF1bHRWYWx1ZT86IG51bWJlciA9IHJhbmdlWzBdLFxuICogXHRvZmZzZXQ6IG51bWJlciA9IDEsXG4gKiB9fSBTbGlkZVNldHRpbmdcbiAqXG4gKiAgQHR5cGVkZWYgeyBCYXNlU2V0dGluZyAmIHtcbiAqIFx0ZGVmYXVsdFZhbHVlOmJvb2xlYW4gPSBmYWxzZSxcbiAqIH19IFRvZ2dsZVNldHRpbmdcbiAqXG4gKiAgQHR5cGVkZWYge3tcbiAqIFx0dGl0bGU6IHN0cmluZyxcbiAqIFx0b25DbGljazogKHRoaXM6IEdsb2JhbEV2ZW50SGFuZGxlcnMsIGV2OiBNb3VzZUV2ZW50KSA9PiBhbnlcbiAqIH19IEJ1dHRvblNldHRpbmdcbiAqXG4gKi9cblxuLyoqXG4gKiBAdHlwZSB7QXJyYXkgPFxuICogKFNsaWRlU2V0dGluZyAmIHt0eXBlOiAnc2xpZGUnfSl8XG4gKiAoVG9nZ2xlU2V0dGluZyAmIHt0eXBlOiAndG9nZ2xlJ318XG4gKiAoQnV0dG9uU2V0dGluZyAmIHt0eXBlOiAnYnV0dG9uJ30pPlxuICogfVxuICovXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSBbXG5cdHtcblx0XHR0eXBlOiAnc2xpZGUnLFxuXHRcdHRpdGxlOiAn6LCx6Z2i5bu25pe2KE1TKScsXG5cdFx0Y29kZW5hbWU6ICdpbnB1dC1vZmZzZXQnLFxuXHRcdHJhbmdlOiBbLTUwMCwgNTAwXSxcblx0XHRkZWZhdWx0VmFsdWU6IDAsXG5cdFx0b2Zmc2V0OiA1LFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0dGl0bGU6ICfmoLnmja7lo7Dpn7PosIPmlbTlgY/np7vnjocnLFxuXHRcdG9uQ2xpY2soKSB7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJy4vY2FsaWJyYXRlJztcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3NsaWRlJyxcblx0XHR0aXRsZTogJ+aMiemUrue8qeaUvicsXG5cdFx0Y29kZW5hbWU6ICdzZWxlY3Qtc2NhbGUtcmF0aW8nLFxuXHRcdHJhbmdlOiBbMSwgNV0sXG5cdFx0ZGVmYXVsdFZhbHVlOiAzLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3NsaWRlJyxcblx0XHR0aXRsZTogJ+iDjOaZr+S6ruW6picsXG5cdFx0Y29kZW5hbWU6ICdzZWxlY3QtZ2xvYmFsLWFscGhhJyxcblx0XHRyYW5nZTogWzEsIDVdLFxuXHRcdGRlZmF1bHRWYWx1ZTogMyxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5byA5ZCv5aSa5oq86L6F5YqpJyxcblx0XHRjb2RlbmFtZTogJ2hpZ2hMaWdodCcsXG5cdFx0ZGVmYXVsdFZhbHVlOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3RvZ2dsZScsXG5cdFx0dGl0bGU6ICflvIDlkK/miZPlh7vpn7PmlYgnLFxuXHRcdGNvZGVuYW1lOiAnaGl0U29uZycsXG5cdFx0ZGVmYXVsdFZhbHVlOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3RvZ2dsZScsXG5cdFx0dGl0bGU6ICfmuLjnjqnml7boh6rliqjlhajlsY8nLFxuXHRcdGNvZGVuYW1lOiAnYXV0b0Z1bGxzY3JlZW4nLFxuXHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5byA5ZCvRkMvQVDmjIfnpLrlmagnLFxuXHRcdGNvZGVuYW1lOiAnbGluZUNvbG9yJyxcblx0fSxcblx0Ly/kuIvpnaLlsLHmmK/mqKHmi5/lmajlhbbku5bnmoTlip/og73kuoZcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5L2/55So5ri4546p5Y+L5aW95Z6LTm90ZScsXG5cdFx0Y29kZW5hbWU6ICd1c2VQbGF5ZXJGcmllbmRseVVJJyxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdzbGlkZScsXG5cdFx0dGl0bGU6ICfnlYzpnaLlrr3pq5jmr5QnLFxuXHRcdGNvZGVuYW1lOiAnc2VsZWN0LWFzcGVjdC1yYXRpbycsXG5cdFx0cmFuZ2U6IFsxLCA4XSxcblx0XHRkZWZhdWx0VmFsdWU6IDgsXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR0aXRsZTogJ+eVjOmdouWuvemrmOavlOaVsOWAvOivtOaYjicsXG5cdFx0b25DbGljaygpIHtcblx0XHRcdGFsZXJ0KFxuXHRcdFx0XHQnMT0+NTo0ICAgICAoMS4yNSlcXG4yPT40OjMgICAgICgxLjMzMzMzMylcXG4zPT4xMDo3ICAgKDEuNDI4NTcxKVxcbjQ9PjE5OjEzICgxLjQ2MTUzOClcXG41PT44OjUgICAgICgxLjYpXFxuNj0+NTozICAgICAoMS42NjY2NjcpXFxuNz0+MjI6MTMgKDEuNjkyMzA4KVxcbjg9PjE2OjkgICAoMS43Nzc3NzgpJ1xuXHRcdFx0KTtcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3RvZ2dsZScsXG5cdFx0dGl0bGU6ICflvIDlkK9IeXBlck1vZGUnLFxuXHRcdGNvZGVuYW1lOiAnaHlwZXJNb2RlJyxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5ZCv55So5pen54mI5pys5omT5q2M55WM6Z2iVUknLFxuXHRcdGNvZGVuYW1lOiAndXNlT2xkVUknLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3RvZ2dsZScsXG5cdFx0dGl0bGU6ICfog4zmma/mqKHns4rmmL7npLonLFxuXHRcdGNvZGVuYW1lOiAnaW1hZ2VCbHVyJyxcblx0XHRkZWZhdWx0VmFsdWU6IHRydWUsXG5cdH0sXG5cdC8vIHtcblx0Ly8gXHR0eXBlOiAndG9nZ2xlJyxcblx0Ly8gXHR0aXRsZTogJ+aYvuekuui/h+a4oeWKqOeUuycsXG5cdC8vIFx0Y29kZW5hbWU6ICdzaG93VHJhbnNpdGlvbicsXG5cdC8vIH0sXG5cdHtcblx0XHR0eXBlOiAndG9nZ2xlJyxcblx0XHR0aXRsZTogJ+WQr+eUqEF1dG9QbGF5Jyxcblx0XHRjb2RlbmFtZTogJ2F1dG9wbGF5Jyxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5byA5ZCv6Kem5pG45Y+N6aaIJyxcblx0XHRjb2RlbmFtZTogJ2ZlZWRiYWNrJyxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5pi+56S65a6a5L2N54K5Jyxcblx0XHRjb2RlbmFtZTogJ3Nob3dQb2ludCcsXG5cdH0sXG5cdC8vIHtcblx0Ly8gXHR0eXBlOiAnYnV0dG9uJyxcblx0Ly8gXHR0aXRsZTogJ+ingueci+aVmeWtpicsXG5cdC8vIFx0b25DbGljaygpIHtcblx0Ly8gXHRcdGxvY2F0aW9uLmhyZWYgPSAnLi4vd2hpbGVQbGF5aW5nL2luZGV4Lmh0bWw/cGxheT1pbnRyb2R1Y3Rpb24mbD1leic7XG5cdC8vIFx0fSxcblx0Ly8gfSxcblx0e1xuXHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdHRpdGxlOiAn5L+u5pS5546p5a625pi156ewJyxcblx0XHRvbkNsaWNrKCkge1xuXHRcdFx0Y29uc3QgbmFtZSA9IHByb21wdCgn6L6T5YWl5pi156ewJywgJ0dVRVNUJyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyTmFtZScsIG5hbWUpO1xuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR0aXRsZTogJ+WFs+S6juaIkeS7rCcsXG5cdFx0b25DbGljaygpIHtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnLi4vYWJvdXRVcy9pbmRleC5odG1sJztcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0dGl0bGU6ICfmuIXpmaTlhajpg6jmlbDmja4nLFxuXHRcdG9uQ2xpY2soKSB7XG5cdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJy4uL2luZGV4Lmh0bWwnO1xuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR0aXRsZTogJ+WvvOWHuuacrOWcsOaVsOaNruWIsOWJqui0tOadvycsXG5cdFx0b25DbGljaygpIHtcblx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZSkpO1xuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9hc3NldHMvaW1hZ2VzL1RpY2suc3ZnXCI+IOaIkOWKnyc7XG5cdFx0XHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gJ+WvvOWHuuacrOWcsOaVsOaNruWIsOWJqui0tOadvyc7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdH0sIDIwMDApO1xuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR0aXRsZTogJ+S7juWJqui0tOadv+WvvOWFpeaVsOaNricsXG5cdFx0b25DbGljaygpIHtcblx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKChjbGlwVGV4dCkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IGNsaXBUZXh0T2JqID0gSlNPTi5wYXJzZShjbGlwVGV4dCk7XG5cdFx0XHRcdFx0Y29uc3QgY2xpcFRleHRPYmpLZXlzID0gT2JqZWN0LmtleXMoY2xpcFRleHRPYmopO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5cyBpbiBjbGlwVGV4dE9iaktleXMpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGtleXMsIGNsaXBUZXh0T2JqW2tleXNdKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuXHRcdFx0XHRcdFx0XHRjbGlwVGV4dE9iaktleXNba2V5c10sXG5cdFx0XHRcdFx0XHRcdGNsaXBUZXh0T2JqW2NsaXBUZXh0T2JqS2V5c1trZXlzXV1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID1cblx0XHRcdFx0XHRcdCc8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvVGljay5zdmdcIj4g5oiQ5YqfJztcblx0XHRcdFx0XHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9ICflr7zlh7rmnKzlnLDmlbDmja7liLDliarotLTmnb8nO1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0XHRcdH0sIDIwMDApO1xuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGFsZXJ0KCflr7zlhaXlpLHotKXvvIzor7fmo4Dmn6XliarotLTmnb/lhoXlrrnmmK/lkKbmraPnoa5cXG4nICsgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHR9LFxuXTtcbiIsImltcG9ydCB7IHNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5nLmpzJztcbmltcG9ydCB7IFNsaWRlckl0ZW0sIFRvZ2dsZUl0ZW0sIEJ1dHRvbkl0ZW0gfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXguanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vXHTlhajlsYDliJ3lp4vljJbpvKDmoIfmu5rova4v56e75Yqo56uv5ruR5Yqo5Z2Q5qCHXG4vLyB2YXIgeUNvb3JkID0gMCxcbi8vIFx0cHJldmlvdXNUb3VjaFlDb29yZCA9IDA7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0aWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcuLi9jaGFwdGVyU2VsZWN0L2luZGV4Lmh0bWwnO1xuXHRcdFx0Ly8gbG9jYXRpb24uaHJlZj0nLi4vd2hpbGVQbGF5aW5nL2luZGV4Lmh0bWw/cGxheT1pbnRyb2R1Y3Rpb24mbD1leic7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnLi4vY2hhcHRlclNlbGVjdC9pbmRleC5odG1sJztcblx0XHR9KTtcblx0fVxuXHRmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9IYW5IYW4yMzMvUGhpQ29tbXVuaXR5L2NvbW1pdHM/cGVyX3BhZ2U9MScpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZXInKS5pbm5lclRleHQgPSBkYXRhWzBdLnNoYS5zbGljZShcblx0XHRcdFx0MCxcblx0XHRcdFx0N1xuXHRcdFx0KTtcblx0XHR9KTtcblxuXHR0cnkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXZpY2UnKS5pbm5lclRleHQgPVxuXHRcdFx0J1BsYXRmb3JtOiAnICtcblx0XHRcdG5hdmlnYXRvci51c2VyQWdlbnREYXRhLnBsYXRmb3JtICtcblx0XHRcdCcgOyBpc01vYmlsZTonICtcblx0XHRcdG5hdmlnYXRvci51c2VyQWdlbnREYXRhLm1vYmlsZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV2aWNlJykuaW5uZXJUZXh0ID1cblx0XHRcdCdVc2VyLUFnZW50IDogJyArXG5cdFx0XHRuYXZpZ2F0b3IudXNlckFnZW50LnNsaWNlKG5hdmlnYXRvci51c2VyQWdlbnQubGFzdEluZGV4T2YoJyAnKSk7XG5cdH1cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldmljZScpLnRpdGxlID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0Ly8gbG9hZFNldHRpbmdzKCk7XG5cdC8v5Yib5bu66K6+572u5p2h55uuXG5cdHNldHRpbmdzLmZvckVhY2goKHNldHRpbmcpID0+IHtcblx0XHRsZXQgaXRlbTtcblx0XHRzd2l0Y2ggKHNldHRpbmcudHlwZSkge1xuXHRcdGNhc2UgJ3NsaWRlJzpcblx0XHRcdHNldHRpbmcuZGVmYXVsdFZhbHVlID1cblx0XHRcdFx0XHRwYXJzZUZsb2F0KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nLmNvZGVuYW1lKSkgfHxcblx0XHRcdFx0XHRzZXR0aW5nLmRlZmF1bHRWYWx1ZTtcblx0XHRcdGl0ZW0gPSBTbGlkZXJJdGVtKHNldHRpbmcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAndG9nZ2xlJzpcblx0XHRcdHNldHRpbmcuZGVmYXVsdFZhbHVlID1cblx0XHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc2V0dGluZy5jb2RlbmFtZSkgPT0gJ3RydWUnXG5cdFx0XHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0XHRcdDogZmFsc2UgfHwgc2V0dGluZy5kZWZhdWx0VmFsdWU7XG5cdFx0XHRpdGVtID0gVG9nZ2xlSXRlbShzZXR0aW5nKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRpdGVtID0gQnV0dG9uSXRlbShzZXR0aW5nKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gc2V0dGluZzogJyArIHNldHRpbmcpO1xuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ0l0ZW1zJykuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcblx0fSk7XG59KTtcbiIsImNvbnN0IG1hcmdpblJhbmdlID0gODA7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vc2V0dGluZycpLlNsaWRlU2V0dGluZ30gb3B0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTbGlkZXJJdGVtKHtcblx0dGl0bGUsXG5cdGNvZGVuYW1lLFxuXHRyYW5nZSxcblx0ZGVmYXVsdFZhbHVlID0gcmFuZ2VbMF0sXG5cdG9mZnNldCA9IDEsXG59KSB7XG5cdGxldCBjdXJyZW50VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaXRlbSc7XG5cblx0Y29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAndGl0bGUnO1xuXHR0aXRsZUVsZW1lbnQuZGF0YXNldFsnbmFtZSddID0gdGl0bGU7XG5cdHRpdGxlRWxlbWVudC5kYXRhc2V0Wyd2YWx1ZSddID0gY3VycmVudFZhbHVlO1xuXG5cdGNvbnN0IHNsaWRlciA9IFNsaWRlcih7IHJhbmdlLCBkZWZhdWx0VmFsdWUsIG9mZnNldCwgb25WYWx1ZUNoYW5nZSB9KTtcblxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlci5lbGVtZW50KTtcblxuXHRyZXR1cm4geyBlbGVtZW50OiBjb250YWluZXIsIGdldFZhbHVlOiAoKSA9PiBjdXJyZW50VmFsdWUgfTtcblxuXHRmdW5jdGlvbiBvblZhbHVlQ2hhbmdlKHZhbHVlKSB7XG5cdFx0dGl0bGVFbGVtZW50LmRhdGFzZXRbJ3ZhbHVlJ10gPSB2YWx1ZTtcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY29kZW5hbWUsIHZhbHVlKTtcblx0XHRjdXJyZW50VmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7e1xuICogIHJhbmdlOiBbbnVtYmVyLG51bWJlcl0sXG4gKiBcdGRlZmF1bHRWYWx1ZT86IG51bWJlciA9IHJhbmdlWzBdLFxuICogXHRvZmZzZXQ6IG51bWJlciA9IDEsXG4gKiAgb25WYWx1ZUNoYW5nZToobnVtYmVyKSA9PiB2b2lkXG4gKiB9fSBvcHRpb25cbiAqL1xuZnVuY3Rpb24gU2xpZGVyKHsgcmFuZ2UsIGRlZmF1bHRWYWx1ZSA9IHJhbmdlWzBdLCBvZmZzZXQgPSAxLCBvblZhbHVlQ2hhbmdlIH0pIHtcblx0bGV0IGN1cnJlbnRWYWx1ZTtcblx0Y29uc3QgdG90YWwgPSByYW5nZVsxXSAtIHJhbmdlWzBdO1xuXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250YWluZXIuY2xhc3NOYW1lID0gJ3NsaWRlcic7XG5cblx0Y29uc3Qgc2xpZGVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzbGlkZUJsb2NrLmNsYXNzTmFtZSA9ICdzbGlkZUJsb2NrJztcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlQmxvY2spO1xuXG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0aWYgKGUub2Zmc2V0WCA+IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIDM1KSB7XG5cdFx0XHRhZGQob2Zmc2V0KTtcblx0XHR9XG5cdFx0aWYgKGUub2Zmc2V0WCA8IDM1KSB7XG5cdFx0XHRhZGQoMCAtIG9mZnNldCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvL+aLluabs+a7muWKqOadoVxuXHRsZXQgaXNEcmFnU3RhcnQgPSBmYWxzZTtcblxuXHQvKipcblx0ICog55S16ISR56uvXG5cdCAqIEBwYXJhbSB7TW91c2VFdmVudH0gZVxuXHQgKi9cblx0Y29uc3Qgb25Nb3VzZURyYWcgPSAoZSkgPT4ge1xuXHRcdHNldChcblx0XHRcdE1hdGgucm91bmQoXG5cdFx0XHRcdHJhbmdlWzBdICtcblx0XHRcdFx0XHQoKGUub2Zmc2V0WCAtIDUwKSAvIChjb250YWluZXIuY2xpZW50V2lkdGggLSAxMDApKSAqIHRvdGFsXG5cdFx0XHQpXG5cdFx0KTtcblx0fTtcblx0c2xpZGVCbG9jay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG5cdFx0aXNEcmFnU3RhcnQgPSB0cnVlO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcblx0XHRpZiAoIWlzRHJhZ1N0YXJ0KSByZXR1cm47XG5cdFx0aXNEcmFnU3RhcnQgPSBmYWxzZTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuXHR9KTtcblxuXHQvKipcblx0ICog56e75Yqo56uvXG5cdCAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZVxuXHQgKi9cblx0Y29uc3Qgb25Ub3VjaERyYWcgPSAoZSkgPT4ge1xuXHRcdHNldChcblx0XHRcdE1hdGgucm91bmQoXG5cdFx0XHRcdHJhbmdlWzBdICtcblx0XHRcdFx0XHQoKGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0IC0gMTUwKSAvXG5cdFx0XHRcdFx0XHQoY29udGFpbmVyLmNsaWVudFdpZHRoIC0gMTAwKSkgKlxuXHRcdFx0XHRcdFx0dG90YWxcblx0XHRcdClcblx0XHQpO1xuXHR9O1xuXG5cdHNsaWRlQmxvY2suYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcblx0XHRpc0RyYWdTdGFydCA9IHRydWU7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hEcmFnKTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuXHRcdGlmICghaXNEcmFnU3RhcnQpIHJldHVybjtcblx0XHRpc0RyYWdTdGFydCA9IGZhbHNlO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoRHJhZyk7XG5cdH0pO1xuXG5cdHNldChkZWZhdWx0VmFsdWUpO1xuXG5cdHJldHVybiB7IGVsZW1lbnQ6IGNvbnRhaW5lciwgc2V0LCBhZGQgfTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcblx0XHRpZiAobmV3VmFsdWUgPCByYW5nZVswXSkgbmV3VmFsdWUgPSByYW5nZVswXTtcblx0XHRpZiAobmV3VmFsdWUgPiByYW5nZVsxXSkgbmV3VmFsdWUgPSByYW5nZVsxXTtcblxuXHRcdHNsaWRlQmxvY2suc3R5bGUubWFyZ2luTGVmdCA9XG5cdFx0XHQoKG5ld1ZhbHVlIC0gKHJhbmdlWzBdICsgcmFuZ2VbMV0pIC8gMikgLyB0b3RhbCkgKiAyICogbWFyZ2luUmFuZ2UgK1xuXHRcdFx0JyUnO1xuXG5cdFx0b25WYWx1ZUNoYW5nZShuZXdWYWx1ZSk7XG5cblx0XHRjdXJyZW50VmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRyZXR1cm4gY3VycmVudFZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcblx0ICovXG5cdGZ1bmN0aW9uIGFkZChvZmZzZXQpIHtcblx0XHRjb25zb2xlLmxvZyhvZmZzZXQpO1xuXHRcdHJldHVybiBzZXQoY3VycmVudFZhbHVlICsgb2Zmc2V0KTtcblx0fVxufVxuIiwiLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9zZXR0aW5nJykuVG9nZ2xlU2V0dGluZ30gb3B0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUb2dnbGVJdGVtKHsgdGl0bGUsIGNvZGVuYW1lLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSB9KSB7XG5cdGxldCBpc0NoZWNrZWQgPSBkZWZhdWx0VmFsdWU7XG5cblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaXRlbSc7XG5cblx0Y29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAndGl0bGUnO1xuXHR0aXRsZUVsZW1lbnQuZGF0YXNldFsnbmFtZSddID0gdGl0bGU7XG5cblx0Y29uc3QgdG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuXHRpZiAoaXNDaGVja2VkKSB0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUVsZW1lbnQpO1xuXG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRpZiAoaXNDaGVja2VkKSB7XG5cdFx0XHR0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb2RlbmFtZSwgZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb2RlbmFtZSwgdHJ1ZSk7XG5cdFx0fVxuXHRcdGlzQ2hlY2tlZCA9ICFpc0NoZWNrZWQ7XG5cdH0pO1xuXG5cdHJldHVybiB7IGVsZW1lbnQ6IGNvbnRhaW5lciB9O1xufVxuIiwiLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vc2V0dGluZycpLkJ1dHRvblNldHRpbmd9IG9wdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uSXRlbSh7IHRpdGxlLCBvbkNsaWNrIH0pIHtcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaXRlbSc7XG5cblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGJ1dHRvbi5pbm5lclRleHQgPSB0aXRsZTtcblx0YnV0dG9uLmNsYXNzTmFtZSA9ICdidXR0b24nO1xuXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cdGJ1dHRvbi5vbmNsaWNrID0gb25DbGljaztcblxuXHRyZXR1cm4geyBlbGVtZW50OiBjb250YWluZXIgfTtcbn1cbiJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsInR5cGUiLCJ0aXRsZSIsImNvZGVuYW1lIiwicmFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJvZmZzZXQiLCJvbkNsaWNrIiwibG9jYXRpb24iLCJocmVmIiwiYWxlcnQiLCJuYW1lIiwicHJvbXB0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsImNsZWFyIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoaXMiLCJpbm5lckhUTUwiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJlYWRUZXh0IiwidGhlbiIsImNsaXBUZXh0IiwiY2xpcFRleHRPYmoiLCJwYXJzZSIsImNsaXBUZXh0T2JqS2V5cyIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwibG9nIiwicmVsb2FkIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaW5uZXJUZXh0Iiwic2hhIiwic2xpY2UiLCJ1c2VyQWdlbnREYXRhIiwicGxhdGZvcm0iLCJtb2JpbGUiLCJ1c2VyQWdlbnQiLCJsYXN0SW5kZXhPZiIsImZvckVhY2giLCJzZXR0aW5nIiwiaXRlbSIsInBhcnNlRmxvYXQiLCJnZXRJdGVtIiwiY3VycmVudFZhbHVlIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlRWxlbWVudCIsImRhdGFzZXQiLCJzbGlkZXIiLCJvblZhbHVlQ2hhbmdlIiwidG90YWwiLCJzbGlkZUJsb2NrIiwiYXBwZW5kQ2hpbGQiLCJlIiwib2Zmc2V0WCIsIm9mZnNldFdpZHRoIiwiYWRkIiwiaXNEcmFnU3RhcnQiLCJvbk1vdXNlRHJhZyIsInNldCIsIk1hdGgiLCJyb3VuZCIsImNsaWVudFdpZHRoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uVG91Y2hEcmFnIiwidGFyZ2V0VG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50TGVmdCIsImVsZW1lbnQiLCJuZXdWYWx1ZSIsInN0eWxlIiwibWFyZ2luTGVmdCIsIlNsaWRlciIsInZhbHVlIiwiZ2V0VmFsdWUiLCJTbGlkZXJJdGVtIiwiaXNDaGVja2VkIiwidG9nZ2xlRWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIlRvZ2dsZUl0ZW0iLCJidXR0b24iLCJvbmNsaWNrIiwiQnV0dG9uSXRlbSIsIkVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9