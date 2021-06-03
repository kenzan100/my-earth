console.log("loaded");

const URL = 'http://localhost:9292';

const LogWindow = document.getElementById('activityLogWindow');
const StatsWindow = document.getElementById('statsWindow');
const ScheduleWindow = document.getElementById('scheduleWindow');

let sinceTimestamp;

function fetchLogs() {
    fetch(URL+`/logs?since=${sinceTimestamp}`)
        .then(res => res.json())
        .then(data => renderCurrentInfo(data));
}

function renderCurrentInfo(data) {
    showStats(data.stats);
    showSchedule(data.schedule);
    data.events.forEach(event => showLine(event));
    if (data.events.length > 0) {
        sinceTimestamp = data.events[data.events.length-1].registered_at;
    }
};

function showSchedule(schedule) {
    clearChildren(ScheduleWindow);
    schedule.forEach(line => {
        const newChild = document.createElement('li');
        newChild.appendChild(document.createTextNode(line));
        ScheduleWindow.appendChild(newChild);
    })
}

function showStats(stats) {
    clearChildren(StatsWindow);
    const newChild = document.createElement('li');
    newChild.appendChild(document.createTextNode(JSON.stringify(stats)));
    StatsWindow.appendChild(newChild);
}

function clearChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function showLine(event) {
    const newLi = document.createElement('li');
    const newContent = document.createTextNode(buildLogLine(event));
    newLi.appendChild(newContent);
    LogWindow.prepend(newLi);

    const childNodes = LogWindow.childNodes;
    if (childNodes.length > 10) {
        const oldestLi = childNodes[childNodes.length-1];
        LogWindow.removeChild(oldestLi);
    }
}

function buildLogLine(event) {
    let base = `${event.action} ${event.target} ${event.violations.join()}`;
    if (event.game_time) {
        return base + event.game_time;
    } else {
        return base;
    }
}

window.setInterval(fetchLogs, 1000);