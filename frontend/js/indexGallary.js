function addImage(url, discription) {
    if (url == null || url == "" || discription == null || discription == "") {
        return;
    }
    const container = document.getElementsByClassName('images');

    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.height = 'fit-content';
    div.style.backgroundColor = '#1f2937';
    div.style.borderRadius = '10px';

    const img = document.createElement('img');
    img.src = url;
    img.height = 150;
    img.width = 250;
    img.style.margin = '12px';

    const par = document.createElement('p');
    par.innerHTML = discription;
    par.style.color = '#ffffff';
    par.style.margin = '0 0 12px 12px';

    div.appendChild(img);
    div.appendChild(par);
    container[0].appendChild(div);

    document.getElementById('URLPhoto').value = '';
    document.getElementById('Description').value = '';

    popUpHide();
}

function popUpShow() {
    const popup = document.getElementById('popUp-overlay');
    popup.style.display = 'block';
}

function popUpHide() {
    const popup = document.getElementById('popUp-overlay');
    popup.style.display = 'none';
}

window.onload = function () {
    addImage('https://cdn.sanity.io/images/cxgd3urn/production/b1926606eb060a45238026795d47c7da826a1166-2000x1326.jpg?rect=0,0,2000,1325&w=640&h=424&fit=crop&auto=format', 'Hello');
    addImage('https://cdn.sanity.io/images/cxgd3urn/production/b1926606eb060a45238026795d47c7da826a1166-2000x1326.jpg?rect=0,0,2000,1325&w=640&h=424&fit=crop&auto=format', 'Hello');
    addImage('https://cdn.sanity.io/images/cxgd3urn/production/b1926606eb060a45238026795d47c7da826a1166-2000x1326.jpg?rect=0,0,2000,1325&w=640&h=424&fit=crop&auto=format', 'Hello');
    addImage('https://cdn.sanity.io/images/cxgd3urn/production/b1926606eb060a45238026795d47c7da826a1166-2000x1326.jpg?rect=0,0,2000,1325&w=640&h=424&fit=crop&auto=format', 'Hello');
};