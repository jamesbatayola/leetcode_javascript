function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sm = new Map();
  const tm = new Map();

  for (const _s of s) {
    if (sm.has(_s)) sm.set(_s, sm.get(_s) + 1);
    else sm.set(_s, 1);
  }

  for (const _t of t) {
    if (tm.has(_t)) tm.set(_t, tm.get(_t) + 1);
    else tm.set(_t, 1);
  }

  for (const each of sm) {
    if (each[1] !== tm.get(each[1])) return false;
  }

  return true;
}

console.log(isAnagram("racecar", "carrace"));
