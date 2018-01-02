let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

let fave_demo1 = []
let fave_demo2 = [];
let fave_demo3 = [];

fave_demo1 = ages.filter(j => j>17 && j<50)

for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 17 && ages[i] < 50) fave_demo2.push(ages[i]);
}

ages.forEach(k => {
    if (k > 17 && k < 50) fave_demo3.push(k);
});

console.log("for loop", fave_demo2);
console.log("forEach", fave_demo3);
console.log("filter", fave_demo1);


hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log("meaning of life:", hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let yoda_quote = ["the","greatest","teacher","failure","is"];

yoda_quote.map( function (y) { 
    if (y === "the") {
        y = y.charAt(0).toUpperCase;
    } else if (y === "teacher") {
        y = y + ",";
    }
    return y;
});

console.log(yoda_quote.join(" "))