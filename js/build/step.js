!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.step=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/widget.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";s.d(r,{default:()=>c});var e=s("ckeditor5/src/core.js"),t=s("ckeditor5/src/widget.js");class n extends e.Command{execute(){const{model:e}=this.editor;e.change((t=>{t.insertText("[step]Step Text[/step]",e.document.selection.getFirstPosition())}))}}class i extends e.Plugin{static get requires(){return[t.Widget]}init(){this.editor.commands.add("insertStep",new n(this.editor))}}var o=s("ckeditor5/src/ui.js");class l extends e.Plugin{init(){const e=this.editor;e.ui.componentFactory.add("step",(t=>{const s=e.commands.get("insertStep"),r=new o.ButtonView(t);return r.set({label:e.t("Step"),icon:'<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 27.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#3F3C3C;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}\n\t.st2{fill-rule:evenodd;clip-rule:evenodd;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n\t.st3{fill:#FFFFFF;}\n\t.st4{font-family:\'PingFangTC-Ultralight-B5pc-H\';}\n\t.st5{font-size:1.7443px;}\n</style>\n<rect x="0.7" y="1" class="st0" width="18.7" height="8.5"/>\n<line class="st1" x1="2.7" y1="5.3" x2="17.1" y2="5.3"/>\n<line class="st1" x1="2.7" y1="6.2" x2="17.1" y2="6.2"/>\n<line class="st1" x1="2.7" y1="7" x2="17.1" y2="7"/>\n<line class="st1" x1="2.7" y1="7.9" x2="17.1" y2="7.9"/>\n<line class="st2" x1="0.7" y1="1.9" x2="19.4" y2="1.9"/>\n<text transform="matrix(1.1466 0 0 1 1.2625 2.3799)" class="st3 st4 st5">Step</text>\n<rect x="0.7" y="10.5" class="st0" width="18.7" height="8.5"/>\n<line class="st1" x1="2.7" y1="14.8" x2="17.1" y2="14.8"/>\n<line class="st1" x1="2.7" y1="15.8" x2="17.1" y2="15.8"/>\n<line class="st1" x1="2.7" y1="16.6" x2="17.1" y2="16.6"/>\n<line class="st1" x1="2.7" y1="17.4" x2="17.1" y2="17.4"/>\n<line class="st2" x1="0.7" y1="11.5" x2="19.4" y2="11.5"/>\n<text transform="matrix(1.1466 0 0 1 1.2392 11.938)" class="st3 st4 st5">Step</text>\n</svg>\n',tooltip:!0}),r.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(r,"execute",(()=>e.execute("insertStep"))),r}))}}class d extends e.Plugin{static get requires(){return[i,l]}}const c={Step:d}})(),r=r.default})()));