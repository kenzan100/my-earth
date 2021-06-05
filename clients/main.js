import * as PollGameState from './pollGameState';
import * as StaticComponent from './staticComponents';

console.log("loaded");

const URL = 'http://localhost:9292';
let options = { method: 'GET', headers: { 'MY_JOB_GAME_ID': 1 } }

function fetchLogs() {
    console.info(window.sinceTimestamp);
    const logsRequest = new Request(URL+`/logs?since=${window.sinceTimestamp}`, options)
    fetch(logsRequest)
        .then(res => res.json())
        .then(data => PollGameState.Renderer.renderCurrentInfo(data));
}
window.PollingIntervalId = window.setInterval(fetchLogs, 1000);

fetch(URL+`/list`)
    .then(res => res.json())
    .then(data => StaticComponent.renderItems(data));