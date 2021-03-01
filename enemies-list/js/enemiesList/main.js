// Put your code here
console.log("My Enemies List!");
console.log("----------------");
let enemies = []
const enemiesList = (FirstName, LastName, Offenses, isReallyHated) => {
    return {
        FirstName,
        LastName,
        Offenses: Offenses,
        addOffenses: (offense) => {
            this.offenses.push(offense);
        },
        isReallyHated,
    };
};
const Joshua = enemiesList("Joshua", "Flowers", ["Being a jerk to me in elementary school",
    "Not being nice to me in elementary school"], true);
const Darth = enemiesList("Darth", "Vader", ["Cut off Luke's hand",
    "Murdered all those kids",
    "Unkind management practices"], false);
const Betty = enemiesList("Betty", "Rudelady", ["Phone calls in the theater",
    "Phone calls on the bus",
    "Phone calls in line at the grocery store",
    "Poor conversationalist"], true)
const Leon = enemiesList("Leon", "Peck", ["Keeps giving me a hotplate"], false)

enemies.push(Joshua, Darth, Betty, Leon);
// console.log(enemies, "hate these guys")

for (let myEnemy of enemies) {
    if (myEnemy.isReallyHated) {
        console.log(`${myEnemy.FirstName} ${myEnemy.LastName} (Really, really dislike!)`);
    }
    else {
        console.log(`${myEnemy.FirstName} ${myEnemy.LastName}`);
    }
}