/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sChar = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[sChar] === t[i]) {
      sChar++;
    }
  }
  return sChar === s.length;
};

isSubsequence("abc", "ahbgdc");
