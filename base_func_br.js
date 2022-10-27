// version 0.1
// ====================================
//        ONLY BROWSER FUNCTION
// ====================================


let println = (s) => console.log(s);
let range = (s) => { m = []; for (let i = 0; i < s.toString().length; i++) m.push(s[i]); return m;}
let id = s => document.getElementById(s.toString());

String.prototype.format = function() {
  let i = 0, args = arguments;
  return this.replace(/{}/g, _ => { return typeof args[i] != 'undefined' ? args[i++] : ''; });
};
