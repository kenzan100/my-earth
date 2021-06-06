import * as PollGameState from './pollGameState';
import * as StaticComponent from './staticComponents';

console.log("loaded");

const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('game');

const URL = 'https://polar-citadel-77237.herokuapp.com';
let options = { method: 'GET', headers: { 'MY_JOB_GAME_ID': gameId } }

function fetchLogs() {
    const logsRequest = new Request(URL+`/logs?since=${window.sinceTimestamp}`, options)
    fetch(logsRequest)
        .then(res => res.json())
        .then(data => PollGameState.Renderer.renderCurrentInfo(data));
}
window.PollingIntervalId = window.setInterval(fetchLogs, 1000);

listRequest = new Request(URL+`/list`)
fetch(listRequest)
    .then(res => res.json())
    .then(data => StaticComponent.renderItems(data));