const matchPattern = (str, p) => {
   if (typeof str !== 'string' || typeof p !== 'string') {
       throw new TypeError("(str : string, pattern: string ) required") 
   }
   let si = 0, pi = 0;
   let pre_s = -1, pre_p = -1;
   while (si < str.length) {
       if (pi < p.length) {
          if (str[si] == p[pi]) {
              si++;
              pi++;
              continue;
          }
          if (p[pi] == '*') {
              pre_s = si;
              pre_p = pi;
              pi++;
              continue;
          } 
       }
       if (pre_s != -1) {
           si = pre_s + 1;
           pi = pre_p;
           pre_s = si;
           continue
       }
       return false
   }
   for (let i = pi; i < p.length; i++){
       if (p[i] != '*') {
          return false
       }
   }
   return true;
} 

module.exports = {
    matchPattern
}
