import * as Luxon from '../node_modules/luxon';

console.log('luxon');
console.log(Luxon);

const LogWindow = document.getElementById('activityLogWindow');
const StatsWindow = document.getElementById('statsWindow');
const ScheduleWindow = document.getElementById('scheduleWindow');
const GoalWindow = document.getElementById('goalWindow');

export const Utils = {
    clearChildren(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    },
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export const Renderer = {
    renderCurrentInfo(data) {
        if (data.error && data.error.includes("game not found")) {
            Utils.clearChildren(GoalWindow);
            this.showEndState(
                "Game not found.",
                "Make sure to start first and set game params."
            );
            window.clearInterval(window.PollingIntervalId);
        }

        this.showStats(data.stats);
        this.showSchedule(data.schedule);

        data.events.forEach(event => this.showLine(event));
        if (data.events.length > 0) {
            window.sinceTimestamp = data.events[data.events.length - 1].registered_at;
        }
    },

    showSchedule(schedule) {
        if (schedule.length > 0) {
            Utils.clearChildren(ScheduleWindow);
        }
        schedule.forEach(line => {
            const newChild = document.createElement('li');
            newChild.appendChild(document.createTextNode(line));
            ScheduleWindow.appendChild(newChild);
        })
    },

    showStats(stats) {
        if (!stats) return;

        Utils.clearChildren(StatsWindow);
        const newChild = document.createElement('li');
        newChild.appendChild(document.createTextNode(JSON.stringify(stats)));
        StatsWindow.appendChild(newChild);
    },

    showLine(event) {
        const newLi = document.createElement('li');
        const newContent = document.createTextNode(this.buildLogLine(event));
        newLi.appendChild(newContent);
        LogWindow.appendChild(newLi);

        if (event.end_state) {
            Utils.clearChildren(GoalWindow);
            this.showEndState(
                'Goal achieved!',
                `It took you ${event.elapsed} seconds to get there. Can you do it faster?`
            );
            window.clearInterval(window.PollingIntervalId);
        }

        const childNodes = LogWindow.childNodes;
        if (childNodes.length > 10) {
            const oldestLi = childNodes[0];
            LogWindow.removeChild(oldestLi);
        }
    },

    buildLogLine(event) {
        let result = ''
        if (event.errors.length > 0) {
            result = `Failed. ${event.errors.join(' ')}`;
        }
        let base = `${Utils.capitalize(event.action)} ${event.target}. ${result}`;
        if (event.game_time) {
            const dateTime = Luxon.DateTime.fromISO(event.game_time);
            return dateTime.toFormat('yyyy LLL dd') // + ' ' + event.registered_at + ' ' + event.since;
        } else {
            return ` ${base}` // ${event.registered_at} ${event.since}`;
        }
    },

    showEndState(headerText, contentText) {
        const header = document.createElement('h1')
        header.appendChild(document.createTextNode(headerText));
        const contents = document.createElement('h4')
        const base = contentText;
        contents.appendChild(document.createTextNode(base))
        GoalWindow.prepend(contents);
        GoalWindow.prepend(header);
    },
}