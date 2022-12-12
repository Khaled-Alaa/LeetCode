/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var obj1 = {};
  var obj2 = {};

  for (let i = 0; i < s.length; i++) {
    debugger;
    if (obj1[s[i]] !== obj2[t[i]]) {
      return false;
    }
    obj1[s[i]] = i + 1;
    obj2[t[i]] = i + 1;
  }
  return true;
};

isIsomorphic("egg", "add");