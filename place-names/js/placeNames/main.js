// Put your code here
const placeNames = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China",]

console.log(placeNames, "All the place names")

placeNames.forEach(element => console.log(element))


function filterItems(placeNames, query) {
    return placeNames.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}


console.log(filterItems(placeNames, "the"), "stars with the")
