function formFun(who, id) {
    let content = document.getElementsByClassName('popContent')[0];
    content.innerHTML = '';
    if (who.localeCompare("addVillage") === 0) {
        document.getElementById('popH2').innerText = 'Add New Village';
        let fields = [["text", "Village Name:"], ["text", "Region/District:"], ["text", "Land Area (sq km):"], ["text", "Latitude:"], ["text", "Longitude:"], ["file", "Upload Image:"], ["text", "Categories/Tags:"]];

        for (let x of fields) {
            let temp = x[1].replace(/[^a-zA-Z]/g, "");
            let label = document.createElement('label');
            let input = document.createElement('input');
            input.classList.add('popInput');
            input.type = x[0];
            input.required = true;

            label.htmlFor = temp;
            label.innerText = x[1];
            label.classList.add('popLabel');
            input.name = temp;
            input.id = temp;

            content.appendChild(label);
            content.appendChild(input);
        }
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute("onclick", "addNewVillage()");
        btn.classList.add('popSubmit');
        btn.innerText = 'Add';

        content.appendChild(btn);
        popUpShow();
    } else if (who.localeCompare("view") === 0) {
        document.getElementById('popH2').innerText = 'Village Details';
        let par = document.createElement('p');
        par.innerText = 'The data is appearing here';

        content.appendChild(par);
        popUpShow();
    } else if (who.localeCompare("update") === 0) {
        document.getElementById('popH2').innerText = 'Update Village';
        let fields = [["text", "Village Name:"], ["text", "Region/District:"], ["text", "Land Area (sq km):"], ["text", "Latitude:"], ["text", "Longitude:"], ["file", "Upload Image:"], ["text", "Categories/Tags:"]];

        for (let x of fields) {
            let temp = x[1].replace(/[^a-zA-Z]/g, "");
            let label = document.createElement('label');
            let input = document.createElement('input');
            input.classList.add('popInput');
            input.type = x[0];
            input.required = true;

            label.htmlFor = temp;
            label.innerText = x[1];
            label.classList.add('popLabel');
            input.name = temp;
            input.id = temp;

            content.appendChild(label);
            content.appendChild(input);
        }
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute("onclick", "updateVillage()");
        btn.classList.add('popSubmit');
        btn.innerText = 'Update Village';

        content.appendChild(btn);
        popUpShow();
    } else if (who.localeCompare("delete") === 0) {

    } else if (who.localeCompare("data") === 0) {
        document.getElementById('popH2').innerText = 'Add Demographic Data for ' + 'Jabalia';
        let fields = [["", "Population Size:"], ["e.g., 0-14: 30%, 65+: 10%", "Age Distribution:"], ["e.g., Male: 51%, Female: 49%", "Gender Ratios:"], ["", "Population Growth Rate:"]];

        for (let x of fields) {
            let temp = x[1].replace(/[^a-zA-Z]/g, "");
            let label = document.createElement('label');
            let input = document.createElement('input');
            input.classList.add('popInput');
            input.type = 'text';
            input.required = true;

            label.htmlFor = temp;
            label.innerText = x[1];
            label.classList.add('popLabel');
            input.name = temp;
            input.id = temp;
            input.placeholder = x[0];

            content.appendChild(label);
            content.appendChild(input);
        }
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute("onclick", "updateData()");
        btn.classList.add('popSubmit');
        btn.innerText = 'Add Demographic Data';

        content.appendChild(btn);
        popUpShow();
    }
}

function addNewVillage() {
    console.log("AddNewVillage");
    popUpHide();
}

function updateVillage() {
    console.log("updateVillage");
    popUpHide();
}

function updateData() {
    console.log("updateData");
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
    let villagelist = document.getElementById('villagesList');
    console.log(villagelist);
    let divcom = document.createElement('div');
    divcom.classList.add('villageCom');

    let par = document.createElement('p');
    par.classList.add('villageName');
    par.innerText = "Jabalia - Gaza Strip";

    let divbtn = document.createElement('div');
    divbtn.classList.add('villageBtn');

    let btnview = document.createElement('button');
    btnview.setAttribute("onclick", "formFun('view', 'id')");
    btnview.innerText = 'View';
    divbtn.appendChild(btnview);

    let btnupdate = document.createElement('button');
    btnupdate.setAttribute("onclick", "formFun('update', 'id')");
    btnupdate.innerText = 'Update Village';
    divbtn.appendChild(btnupdate);

    let btndelete = document.createElement('button');
    btndelete.setAttribute("onclick", "formFun('delete', 'id')");
    btndelete.innerText = 'Delete Village';
    divbtn.appendChild(btndelete);

    let btndata = document.createElement('button');
    btndata.setAttribute("onclick", "formFun('data', 'id')");
    btndata.innerText = 'Update Demographic Data';
    divbtn.appendChild(btndata);

    divcom.appendChild(par);
    divcom.appendChild(divbtn);

    villagelist.appendChild(divcom);
}