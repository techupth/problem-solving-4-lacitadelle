function defangIPaddr(nums) {
  let defangedIP = "";
  for (const c of nums) {
    if (c === ".") {
      defangedIP = defangedIP.concat("[.]");
    }
    else {
      defangedIP = defangedIP.concat(c);
    }
  }

  return defangedIP;
}

const address = "255.100.50.0";

console.log(defangIPaddr(address))