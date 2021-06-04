const JobListWindow = document.getElementById('jobList');
const ItemListWindow = document.getElementById('itemList');

function renderItems(list) {
    renderCategory(list.items, ItemListWindow);
    renderCategory(list.jobs, JobListWindow);
}

function renderCategory(items, parentNode) {
    Object.entries(items).forEach(([target, obj]) => {
        const targetNode = document.createElement('li')
        const targetName = document.createTextNode(target);
        const innerList = document.createElement('ul');
        targetNode.appendChild(targetName)
        targetNode.appendChild(innerList);
        parentNode.appendChild(targetNode);

        Object.entries(obj.actions).forEach(([actionName, details]) => {
            console.info(details.rules)
            const base = `${actionName} (${details.vectors.join(', ')})`
            const text = document.createTextNode(base);
            const innerLi = document.createElement('li')
            innerLi.appendChild(text)
            innerList.appendChild(innerLi)

            const ruleLi = document.createElement('ul');
            details.rules.forEach(rule => {
                const text = document.createTextNode(`${rule.rule}`);
                const eachRule = document.createElement('li');
                eachRule.appendChild(text)
                ruleLi.append(eachRule)
            });
            innerLi.appendChild(ruleLi);
        });
    });
}

fetch(URL+`/list`)
    .then(res => res.json())
    .then(data => renderItems(data));
