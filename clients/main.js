console.log("loaded");

const URL = 'http://localhost:9292';

const LogWindow = document.getElementById('activityLogWindow');
const StatsWindow = document.getElementById('statsWindow');
let sinceTimestamp;

function fetchLogs() {
    fetch(URL+`/logs?since=${sinceTimestamp}`)
        .then(res => res.json())
        .then(data => renderCurrentInfo(data));
}

function renderCurrentInfo(data) {
    showStats(data.stats);
    data.events.forEach(event => showLine(event));
    if (data.events.length > 0) {
        sinceTimestamp = data.events[data.events.length-1].registered_at;
    }
};

function showStats(stats) {
    const child = StatsWindow.childNodes[0];
    const newChild = document.createTextNode(JSON.stringify(stats));
    StatsWindow.replaceChild(newChild, child);
}

function showLine(event) {
    const newLi = document.createElement('li');
    const newContent = document.createTextNode(`
    ${event.action} ${event.target}
    ${event.violations.join()} ${event.game_time}`
    );
    newLi.appendChild(newContent);
    LogWindow.prepend(newLi);

    const childNodes = LogWindow.childNodes;
    if (childNodes.length > 10) {
        const oldestLi = childNodes[childNodes.length-1];
        LogWindow.removeChild(oldestLi);
    }
}

window.setInterval(fetchLogs, 1000);