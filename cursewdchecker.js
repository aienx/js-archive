//Name Password Text module
//Declared global variable userList to store user names from function.
//User list is an array.

let htDomVal = "";

function curseFinder(val) {
  let cursRegex = /fool|fuck|stupid|damn|asshole|jackass|wanker|bitch/i;
  if (cursRegex.test(val)) {
    htDomVal = "This content is not allowed because it contains vague words";
  } else {
    htDomVal = "Content is allowed";
  }
  return htDomVal;
}
curseFinder("fuck all of dem girls");
