console.log("loaded");

const URL = 'http://localhost:9292';
fetch(URL+'/stats')
    .then(res => res.json())
    .then(data => console.log(data));

const LogWindow = document.getElementById('activityLogWindow');
let i = 0;
function readStats() {
    const newLi = document.createElement('li');
    const newContent = document.createTextNode(`Hi - ${i}`);
    i += 1;
    newLi.appendChild(newContent);
    LogWindow.prepend(newLi);

    const childNodes = LogWindow.childNodes;
    if (childNodes.length > 10) {
        const oldestLi = childNodes[childNodes.length-1];
        LogWindow.removeChild(oldestLi);
    }
};

window.setInterval(readStats, 1000);