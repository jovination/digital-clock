let weekBox = document.querySelector('.container .pre-container .weeks');
let week = ['SUN', 'MON', 'TUR', 'WED', 'THU', 'FRI', 'SAT'];


let li = '';
let geeWeeks = ()=> {
    week.forEach((week)=>{
        li += `<span>${week}</span>`;
    })
weekBox.innerHTML = li;
}
geeWeeks();