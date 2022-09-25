const isValid = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    let char = stack[stack.length - 1];
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stack.push(s[i]);
      console.log(s[i]);
    } else if (
      (char == "(" && s[i] == ")") ||
      (char == "{" && s[i] == "}") ||
      (char == "[" && s[i] == "]")
    ) {
      stack.pop();
    } else return false;
  }

  return stack.length ? false : true;
};

let input = "{ [ ] ( ) }";
let input2 = "{ [ ( ] ) }";
console.log(isValid(input.split(" ")));
