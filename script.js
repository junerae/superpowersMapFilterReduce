const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// Maak een array van alle superhelden namen
const superNames = superheroes.map(item => item.name)
console.log(superNames)


// Maak een array van alle "lichte" superhelden (< 190 pounds)
console.log("These heroes weigh less than 190 pounds:")
const superheroesLight = superheroes.map((item) => {
    if (item.weight <= 190) {
        console.log(item.name)
    }
})


// Maak een array met de namen van de superhelden die 200 pounds wegen
console.log("These heroes weigh more than 190 pounds:")
const superheroesHeavy = superheroes.filter((item) => {
    if (item.weight >= 190) {
        console.log(item.name)
    }
})

// Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const superheroesFirstApp = superheroes.map((item) => {
    return item.first_appearance
})
console.log(superheroesFirstApp)


// Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const dcHeroes = superheroes.filter((item) => {
    return item.publisher === "DC Comics"
})
console.log("This are DC heroes:", dcHeroes)


const marvelHeroes = superheroes.filter((item) => {
    return item.publisher === "Marvel Comics"
})
console.log("This are Marvel heroes:", marvelHeroes)


// Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! 
// Het gewicht dat je hier ziet, 
// // van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?
// const weightDcHeroes = dcHeroes.map((item) => {
//     return item.weight
// })
// console.log(weightDcHeroes)
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(weight1.reduce(reducer))


// Doe hetzelfde met alle superhelden van Marvel Comics




// Bonus: zoek de zwaarste superheld!
const weights = superheroes.map(item => item.weight)
console.log(weights)
const weightOverview = weights.map((item) => {
    return (typeof item === "number")
})
console.log(weightOverview)
console.log(Math.max(weightOverview))



