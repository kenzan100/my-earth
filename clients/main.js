import * as PollGameState from './pollGameState';
import * as StaticComponent from './staticComponents';

console.log("loaded");

const URL = 'http://localhost:9292';

function fetchLogs() {
    fetch(URL+`/logs?since=${window.sinceTimestamp}`)
        .then(res => res.json())
        .then(data => PollGameState.Renderer.renderCurrentInfo(data));
}
window.PollingIntervalId = window.setInterval(fetchLogs, 1000);

fetch(URL+`/list`)
    .then(res => res.json())
    .then(data => StaticComponent.renderItems(data));