
emails = ["a@sdfas.com", "b@dfasdf.com", "c@sdfasdf.com", "d@dfasdf.com", "c@sdfasdf.com"]

hash = {};
for i in [0...emails.length]
  key = emails[i];
  if(key not in hash)
    hash[key] = true;
  hash[key].push 
  console.log("pushing email");

out = []
for key of hash
    out.push(key)

console.log(hash);
console.log(emails);
console.log(out)

// https://jsfiddle.net/94t6cdgx/2/

// https://jsfiddle.net/94t6cdgx/4/ This edition has 13339 strings with 10000 unique
// returns
// Object {a@sdfas.com: true, b@dfasdf.com: true, c@sdfasdf.com: true, d@dfasdf.com: true}
//["a@sdfas.com", "b@dfasdf.com", "c@sdfasdf.com", "d@dfasdf.com", "c@sdfasdf.com"]


