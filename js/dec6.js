var messedUp = [45, 'I', true, null, 'am', 3.56, 'a', undefined, { catchphrase: 'Oh hai, Mark' }, 'JS', 'rockstar'].filter(function (item) {
    return typeof (item) === "string";
});

console.log("statement:", messedUp.join(" "));