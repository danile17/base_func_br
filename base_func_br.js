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

let equals = (s, s1) => {
  if (s.length == s1.length) {
    for (let i = 0; i < s.length; s++) {
      if (s.charCodeAt(i) != s1.charCodeAt(i)) return false;
    }
    return true;
  }
  return false;
}
