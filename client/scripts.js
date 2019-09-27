const recordTable = document.getElementById("recordTable");
var records = [];

function addRecord(form) {
    let record = {};
    for (let element of form.elements) {
        if (element.id) {
            record[element.id] = element.value;
        }
    }
    registerRecord(record);
    $('#addNewModal').modal('hide');
    return false;
}

function updateRecord(form) {
    let record = {};
    for (let element of form.elements) {
        if (element.id) {
            let id = element.id;
            id = id.replace('update', '');
            id = id.toLowerCase();
            record[id] = element.value;
        } 
    }
    editRecord(record.recordid, record);
    return false;
}

function registerRecord(record) {
    const req = new XMLHttpRequest();
    req.onload = () => {
        location.href = "index.html";
    };
    req.open('POST', 'http://34.89.0.182:8444/record/');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(record));
}

function editRecord(id, record) {
    const req = new XMLHttpRequest();
    req.onload = () => {
        location.href = "index.html";
    };
    req.open('PUT', 'http://34.89.0.182:8444/record/' + id);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(record));
}

function createDeleteButton(record) {
    let button = document.createElement('button');
    button.type = "button";
    button.className = "btn btn-danger";
    button.innerHTML = "remove";
    button.id = "tableButton";
    button.dataset['id'] = record.id;
    button.addEventListener("click", function (event) {
        // build and send http delete here
        this.parentNode.parentNode.removeChild(this.parentNode);
        const req = new XMLHttpRequest;
        
        req.open("DELETE", 'http://34.89.0.182:8444/record/' + event.toElement.dataset.id);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(null);
    });

    return button;
}

function createUpdateButton(record) {
    let button = document.createElement('button');
    button.type = "button";
    button.className = "btn btn-primary";
    button.innerHTML = "update";
    button.id = "tableButton";
    button.dataset['id'] = record.id;

    button.addEventListener("click", function (event) {
        $('#updateModal').modal('show');
        $('#updateLabel').val(record.label);
        $('#updateTitle').val(record.title);
        $('#updateArtist').val(record.artist);
        $('#updateYear').val(record.year);
        $('#updateValue').val(record.value);
        $('#updateRecordId').val(record.id);
    });

    return button;
}

function tableEntries(table, record) {
    let row = document.createElement("tr");
    const deleteButton = createDeleteButton(record);
    const updateButton = createUpdateButton(record);

    for (let param in record) {
        if (param === "id") {
            continue;
        }
        let tbox = document.createElement("td");
        tbox.innerHTML = param === "value" ? "£" + record[param] : record[param];
        row.append(tbox);
    }

    table.append(row);
    row.append(updateButton);
    row.append(deleteButton);
}

function onLoadRec() {
    const recReq = new XMLHttpRequest;
    recReq.onload = () => {
        records = JSON.parse(recReq.response);
        for (let i = 0; i < records.length; i++) {
            let record = records[i];
            tableEntries(recordTable, record);
        }
    }
    recReq.open('GET', 'http://34.89.0.182:8444/record');
    recReq.send();
}
