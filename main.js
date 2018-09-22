const rowNumber = document.querySelector('#row-number');
const columnNumber = document.querySelector('#column-number');
const tableWidth = document.querySelector('#table-width');
const borderWidth = document.querySelector('#border-width');
const tableColor = document.querySelector('#table-color');
const headColor = document.querySelector('#head-color');
const bodyColor = document.querySelector('#body-color');
const borderColor = document.querySelector('#border-color');
const fontColor = document.querySelector('#font-color');
const fontType = document.querySelector('#font-type');
const fontWeight = document.querySelector('#font-weight');
const textAlign = document.querySelector('#text-align');
const generateBtn = document.querySelector('#generate');
const tableWrapper = document.querySelector('#table-wrapper');

// function to generate table

function tableGenerating() {
   tableWrapper.innerHTML = '';
    const newTable = document.createElement('table');
    newTable.style.width = `${tableWidth.value}%`;//no need for + ;
    newTable.style.border = `${borderWidth.value}px solid  ${borderColor.value}`;  // ` ` open and close for the whole string, NOT for each
    tableWrapper.style.backgroundColor = tableColor.value;
    newTable.style.color = fontColor.value;
    newTable.style.textAlign = textAlign.value;
    newTable.style.fontFamily = fontType.value;
    newTable.style.fontWeight = fontWeight.value;
    tableWrapper.appendChild(newTable);

    //create rows:
    for (let i = 0; i < rowNumber.value; i++) {
        const tableRow = document.createElement('tr');
        newTable.appendChild(tableRow);
    }

    //create heads:
    const tableAllRows = document.querySelectorAll('tr');
  
    for (let i = 0; i < columnNumber.value; i++) {
        const tableHead = document.createElement('th');
        tableAllRows[0].appendChild(tableHead);

        tableHead.textContent = 'Head';
        tableHead.style.border = `${borderWidth.value}px solid ${borderColor.value}`;
        tableHead.style.backgroundColor = headColor.value;
    }

    for (let row = 1; row < rowNumber.value; row++) {
        for (let column = 0; column < columnNumber.value; column++) {
            const data = document.createElement('td');
            data.textContent = 'data';
            tableAllRows[row].appendChild(data);
            data.style.backgroundColor = bodyColor.value;
            data.style.border = `${borderWidth.value}px  solid  ${borderColor.value}`;

        }
    }
}



generateBtn.addEventListener('click', tableGenerating);




