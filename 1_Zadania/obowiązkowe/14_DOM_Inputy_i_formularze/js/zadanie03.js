document.addEventListener('DOMContentLoaded', function() {

    const team1 = document.querySelector('#team1');
    const team2 = document.querySelector('#team2');
    const points1 = document.querySelector('#points1');
    const points2 = document.querySelector('#points2');
    const table = document.querySelector('table');
    const submitBtn = document.querySelector('button');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (checkTeams(team1.value, team2.value) && checkGoals(points1.value, points2.value)) {
            let td1 = document.createElement('td');
            td1.innerText = team1.value;

            let td2 = document.createElement('td');
            td2.innerText = team2.value;

            let td3 = document.createElement('td');
            td3.innerText = `${points1.value} - ${points2.value}`;

            let tr = document.createElement('tr');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.children[0].appendChild(tr);
        }
    });

    function checkTeams(t1, t2) {
        let toReturn;
        t1 !== t2 ? toReturn = true: toReturn = false;
        return toReturn;
    }

    function checkGoals(g1, g2) {
        if (g1 >= 0 && g2 >=0) {
            return true;
        } else {
            return false;
        }
    }

});