const Database = require("@replit/database")
const db = new Database()

let counterDisplayElemT = document.querySelector('.counter-display');
let counterMinusElemT = document.querySelector('.counter-minus');
let counterPlusElemT = document.querySelector('.counter-plus');

let count = parseInt(db.get("count").then(value => {}));

updateDisplay();

counterPlusElemT.addEventListener("click",()=>{
    count++;
    db.set("countT", count.toString()).then(() => {})
    updateDisplay();
}) ;

counterMinusElemT.addEventListener("click",()=>{
    count--;
    db.set("countT", count.toString()).then(() => {})
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElemT.innerHTML = count;
};

