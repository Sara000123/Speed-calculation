function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
const ul = document.querySelector('#movielist');
const url = 'http://localhost:3000/api/speedcalc';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log('speedcalc' + data.speedcalc);
        let speedcalc = data.speedcalc;
        return speedcalc.map(function(speedcalc) {
            let li = createNode('li');
            li.innerHTML = `${movie.movieName} <img src="img/${movie.movieImg}">`
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });