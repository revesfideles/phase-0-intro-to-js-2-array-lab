// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
 function destructivelyPrependCat(name) {
    cats.unshift(name);
 }
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(Broom) {
    const newCats = [...cats, Broom];
    return newCats;
}
function prependCat(Arnold) {
    const newCats = [Arnold, ...cats];
    return newCats;
}
function destructivelyRemoveLastCat() {
    const newCats = cats.pop();
    return newCats;
}
function removeFirstCat() {
   const newCats = cats.slice(1);
    return newCats;
}
function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
}