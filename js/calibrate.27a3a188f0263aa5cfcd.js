(()=>{"use strict";var e={991:(e,t,r)=>{e.exports=r.p+"assets/calibrate.mp3"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{var e=r(991);function t(e){const t=window.calibrateActx.currentTime-window.actxStartTime;console.log(t);var r=1;t>0&&t<=2.2&&(console.log("Calibration stage 1",e),r=1),t>2.2&&t<=4.2&&(console.log("Calibration stage 2",e),r=2),t>4.2&&t<=6.2&&(console.log("Calibration stage 3",e),r=3),t>6.2&&t<=8.2&&(console.log("Calibration stage 4",e),r=4),document.querySelector("#result"+r).innerText=Math.round(1e3*(t-2*r))}window.addEventListener("DOMContentLoaded",(function(){fetch(e).then((e=>e.arrayBuffer())).then((e=>{window.caliBrateAudioArrayBuffer=e})).catch((()=>{alert("错误：无法加载校准音频")}))})),document.querySelector("button#startBtn").addEventListener("click",(function(){null!=window.caliBrateAudioArrayBuffer?(window.calibrateActx=null,window.calibrateActx=new(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext),window.calibrateActx.decodeAudioData(window.caliBrateAudioArrayBuffer,(function(e){window.calibraceACtxSource=window.calibrateActx.createBufferSource(),window.calibraceACtxSource.buffer=e,window.calibraceACtxSource.connect(window.calibrateActx.destination),window.actxStartTime=window.calibrateActx.currentTime,window.calibraceACtxSource.start(0),window.calibraceACtxSource.addEventListener("ended",(function(){document.querySelector("button#startBtn").removeAttribute("disabled"),document.querySelector("button#clickBtn").removeEventListener("click",t)}))})),document.querySelector("button#startBtn").setAttribute("disabled","disabled"),document.querySelector("button#clickBtn").addEventListener("click",t)):alert("抱歉，校准音频尚在加载中，请稍后")})),document.body.addEventListener("keydown",(()=>{document.querySelector("button#clickBtn").click()})),document.querySelector("button#cancelBtn").addEventListener("click",(function(){document.querySelector("button#startBtn").removeAttribute("disabled"),document.querySelector("button#clickBtn").removeEventListener("click",t);try{window.calibraceACtxSource.stop()}catch(e){}const e=parseFloat(document.querySelector("#result1").innerText.replace("-","-0")),r=parseFloat(document.querySelector("#result2").innerText.replace("-","-0")),n=parseFloat(document.querySelector("#result3").innerText.replace("-","-0")),o=parseFloat(document.querySelector("#result4").innerText.replace("-","-0")),c=Math.round((e+r+n+o)/4),i=confirm("谱面延时即将被设置为 "+c+" ，是否确认？\n单击“取消”为继续而不保存");i&&(localStorage.setItem("input-offset",c),location.href="../settings/index.html"),i||(location.href="../settings/index.html")}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsY0FBYyxtQkFDZHlCLGFBQWEsV0FBWSxZQUMzQnpDLFNBQ0VnQixjQUFjLG1CQUNkSSxpQkFBaUIsUUFBU1gsSUFyQzNCa0IsTUFBTSx1QkF1Q1QzQixTQUFTMEMsS0FBS3RCLGlCQUFpQixXQUFXLEtBQ3pDcEIsU0FBU2dCLGNBQWMsbUJBQW1CMkIsV0F5QjNDM0MsU0FDRWdCLGNBQWMsb0JBQ2RJLGlCQUFpQixTQUFTLFdBQzFCcEIsU0FBU2dCLGNBQWMsbUJBQW1CdUIsZ0JBQWdCLFlBQzFEdkMsU0FDRWdCLGNBQWMsbUJBQ2R3QixvQkFBb0IsUUFBUy9CLEdBQy9CLElBQ0NiLE9BQU9zQyxvQkFBb0JVLE9BQzFCLE1BQU9qRCxJQUdULE1BQU1rRCxFQUFVQyxXQUNmOUMsU0FBU2dCLGNBQWMsWUFBWUMsVUFBVVYsUUFBUSxJQUFLLE9BRXJEd0MsRUFBVUQsV0FDZjlDLFNBQVNnQixjQUFjLFlBQVlDLFVBQVVWLFFBQVEsSUFBSyxPQUVyRHlDLEVBQVVGLFdBQ2Y5QyxTQUFTZ0IsY0FBYyxZQUFZQyxVQUFVVixRQUFRLElBQUssT0FFckQwQyxFQUFVSCxXQUNmOUMsU0FBU2dCLGNBQWMsWUFBWUMsVUFBVVYsUUFBUSxJQUFLLE9BRXJEMkMsRUFBY2hDLEtBQUtDLE9BQ3ZCMEIsRUFBVUUsRUFBVUMsRUFBVUMsR0FBVyxHQUVyQ0UsRUFBU0MsUUFDZCxjQUNDRixFQUNBLDBCQUVFQyxJQUNIRSxhQUFhQyxRQUFRLGVBQWdCSixHQUNyQ25ELFNBQVN3RCxLQUFPLDBCQUVaSixJQUNKcEQsU0FBU3dELEtBQU8sOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGktY29tbXVuaXR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BoaS1jb21tdW5pdHkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waGktY29tbXVuaXR5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BoaS1jb21tdW5pdHkvLi9zcmMvc2V0dGluZ3MvY2FsaWJyYXRlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNhbGlicmF0ZV9tcDMgZnJvbSAnLi9jYWxpYnJhdGUubXAzJztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRmZXRjaChjYWxpYnJhdGVfbXAzKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT5yZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuXHRcdC50aGVuKChhcnJheUJ1ZmZlcikgPT4ge1xuXHRcdFx0d2luZG93LmNhbGlCcmF0ZUF1ZGlvQXJyYXlCdWZmZXIgPSBhcnJheUJ1ZmZlcjtcblx0XHR9KVxuXHRcdC5jYXRjaCgoKSA9PiB7XG5cdFx0XHRhbGVydCgn6ZSZ6K+v77ya5peg5rOV5Yqg6L295qCh5YeG6Z+z6aKRJyk7XG5cdFx0fSk7XG59KTtcbmRvY3VtZW50XG5cdC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc3RhcnRCdG4nKVxuXHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHdpbmRvdy5jYWxpQnJhdGVBdWRpb0FycmF5QnVmZmVyID09IHVuZGVmaW5lZCkge1xuXHRcdFx0YWxlcnQoJ+aKseatie+8jOagoeWHhumfs+mikeWwmuWcqOWKoOi9veS4re+8jOivt+eojeWQjicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR3aW5kb3cuY2FsaWJyYXRlQWN0eCA9IG51bGw7XG5cdFx0d2luZG93LmNhbGlicmF0ZUFjdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHxcblx0XHRcdHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgfHxcblx0XHRcdHdpbmRvdy5tb3pBdWRpb0NvbnRleHQgfHxcblx0XHRcdHdpbmRvdy5tc0F1ZGlvQ29udGV4dCkoKTtcblx0XHR3aW5kb3cuY2FsaWJyYXRlQWN0eC5kZWNvZGVBdWRpb0RhdGEoXG5cdFx0XHR3aW5kb3cuY2FsaUJyYXRlQXVkaW9BcnJheUJ1ZmZlcixcblx0XHRcdGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdFx0d2luZG93LmNhbGlicmFjZUFDdHhTb3VyY2UgPVxuXHRcdFx0XHRcdHdpbmRvdy5jYWxpYnJhdGVBY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXHRcdFx0XHR3aW5kb3cuY2FsaWJyYWNlQUN0eFNvdXJjZS5idWZmZXIgPSBidWZmZXI7XG5cdFx0XHRcdHdpbmRvdy5jYWxpYnJhY2VBQ3R4U291cmNlLmNvbm5lY3QoXG5cdFx0XHRcdFx0d2luZG93LmNhbGlicmF0ZUFjdHguZGVzdGluYXRpb25cblx0XHRcdFx0KTtcblx0XHRcdFx0d2luZG93LmFjdHhTdGFydFRpbWUgPSB3aW5kb3cuY2FsaWJyYXRlQWN0eC5jdXJyZW50VGltZTtcblx0XHRcdFx0d2luZG93LmNhbGlicmFjZUFDdHhTb3VyY2Uuc3RhcnQoMCk7XG5cdFx0XHRcdHdpbmRvdy5jYWxpYnJhY2VBQ3R4U291cmNlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0J2VuZGVkJyxcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRkb2N1bWVudFxuXHRcdFx0XHRcdFx0XHQucXVlcnlTZWxlY3RvcignYnV0dG9uI3N0YXJ0QnRuJylcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50XG5cdFx0XHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCdidXR0b24jY2xpY2tCdG4nKVxuXHRcdFx0XHRcdFx0XHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxpYnJhdGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdGRvY3VtZW50XG5cdFx0XHQucXVlcnlTZWxlY3RvcignYnV0dG9uI3N0YXJ0QnRuJylcblx0XHRcdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5xdWVyeVNlbGVjdG9yKCdidXR0b24jY2xpY2tCdG4nKVxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsaWJyYXRlKTtcblx0fSk7XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNjbGlja0J0bicpLmNsaWNrKCk7XG59KTtcbmZ1bmN0aW9uIGNhbGlicmF0ZShlKSB7XG5cdGNvbnN0IGN1cnJlbnRUaW1lPSB3aW5kb3cuY2FsaWJyYXRlQWN0eC5jdXJyZW50VGltZSAtIHdpbmRvdy5hY3R4U3RhcnRUaW1lO1xuXHRjb25zb2xlLmxvZyhjdXJyZW50VGltZSk7XG5cdHZhciBzdGFnZSA9IDE7XG5cdGlmIChjdXJyZW50VGltZSA+IDAgJiYgY3VycmVudFRpbWUgPD0gMi4yKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NhbGlicmF0aW9uIHN0YWdlIDEnLGUpO1xuXHRcdHN0YWdlID0gMTtcblx0fVxuXHRpZiAoY3VycmVudFRpbWUgPiAyLjIgJiYgY3VycmVudFRpbWUgPD0gNC4yKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NhbGlicmF0aW9uIHN0YWdlIDInLGUpO1xuXHRcdHN0YWdlID0gMjtcblx0fVxuXHRpZiAoY3VycmVudFRpbWUgPiA0LjIgJiYgY3VycmVudFRpbWUgPD0gNi4yKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NhbGlicmF0aW9uIHN0YWdlIDMnLGUpO1xuXHRcdHN0YWdlID0gMztcblx0fVxuXHRpZiAoY3VycmVudFRpbWUgPiA2LjIgJiYgY3VycmVudFRpbWUgPD0gOC4yKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NhbGlicmF0aW9uIHN0YWdlIDQnLGUpO1xuXHRcdHN0YWdlID0gNDtcblx0fVxuXHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0JyArIHN0YWdlKTtcblx0cmVzdWx0LmlubmVyVGV4dCA9IE1hdGgucm91bmQoKGN1cnJlbnRUaW1lIC0gc3RhZ2UqMikqMTAwMCk7XG59XG5kb2N1bWVudFxuXHQucXVlcnlTZWxlY3RvcignYnV0dG9uI2NhbmNlbEJ0bicpXG5cdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc3RhcnRCdG4nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5xdWVyeVNlbGVjdG9yKCdidXR0b24jY2xpY2tCdG4nKVxuXHRcdFx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsaWJyYXRlKTtcblx0XHR0cnkge1xuXHRcdFx0d2luZG93LmNhbGlicmFjZUFDdHhTb3VyY2Uuc3RvcCgpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzdWx0MSA9IHBhcnNlRmxvYXQoXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0MScpLmlubmVyVGV4dC5yZXBsYWNlKCctJywgJy0wJylcblx0XHQpO1xuXHRcdGNvbnN0IHJlc3VsdDIgPSBwYXJzZUZsb2F0KFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdDInKS5pbm5lclRleHQucmVwbGFjZSgnLScsICctMCcpXG5cdFx0KTtcblx0XHRjb25zdCByZXN1bHQzID0gcGFyc2VGbG9hdChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHQzJykuaW5uZXJUZXh0LnJlcGxhY2UoJy0nLCAnLTAnKVxuXHRcdCk7XG5cdFx0Y29uc3QgcmVzdWx0NCA9IHBhcnNlRmxvYXQoXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0NCcpLmlubmVyVGV4dC5yZXBsYWNlKCctJywgJy0wJylcblx0XHQpO1xuXHRcdGNvbnN0IGZpbmFsUmVzdWx0ID0gTWF0aC5yb3VuZChcblx0XHRcdChyZXN1bHQxICsgcmVzdWx0MiArIHJlc3VsdDMgKyByZXN1bHQ0KSAvIDRcblx0XHQpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGNvbmZpcm0oXG5cdFx0XHQn6LCx6Z2i5bu25pe25Y2z5bCG6KKr6K6+572u5Li6ICcgK1xuXHRcdFx0XHRmaW5hbFJlc3VsdCArXG5cdFx0XHRcdCcg77yM5piv5ZCm56Gu6K6k77yfXFxu5Y2V5Ye74oCc5Y+W5raI4oCd5Li657un57ut6ICM5LiN5L+d5a2YJ1xuXHRcdCk7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lucHV0LW9mZnNldCcsIGZpbmFsUmVzdWx0KTtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnLi4vc2V0dGluZ3MvaW5kZXguaHRtbCc7XG5cdFx0fVxuXHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJy4uL3NldHRpbmdzL2luZGV4Lmh0bWwnO1xuXHRcdH1cblx0fSk7XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJFcnJvciIsInJlcGxhY2UiLCJwIiwiY2FsaWJyYXRlIiwiY3VycmVudFRpbWUiLCJjYWxpYnJhdGVBY3R4IiwiYWN0eFN0YXJ0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJzdGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJNYXRoIiwicm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJhcnJheUJ1ZmZlciIsImNhbGlCcmF0ZUF1ZGlvQXJyYXlCdWZmZXIiLCJjYXRjaCIsImFsZXJ0IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwibW96QXVkaW9Db250ZXh0IiwibXNBdWRpb0NvbnRleHQiLCJkZWNvZGVBdWRpb0RhdGEiLCJidWZmZXIiLCJjYWxpYnJhY2VBQ3R4U291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwic3RhcnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImNsaWNrIiwic3RvcCIsInJlc3VsdDEiLCJwYXJzZUZsb2F0IiwicmVzdWx0MiIsInJlc3VsdDMiLCJyZXN1bHQ0IiwiZmluYWxSZXN1bHQiLCJyZXN1bHQiLCJjb25maXJtIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9