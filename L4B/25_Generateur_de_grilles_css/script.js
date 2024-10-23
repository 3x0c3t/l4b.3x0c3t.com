const rowsInput = document.getElementById('rows');
const columnsInput = document.getElementById('columns');
const gridPreview = document.getElementById('gridPreview');
const codeContainer = document.getElementById('code');

function generateGrid() {
    const rows = parseInt(rowsInput.value);
    const columns = parseInt(columnsInput.value);
    let gridHTML = '<div class="grid">';
    let cssCode = `.grid { display: grid; grid-template-columns: repeat(${columns}, 1fr); }`;

    for (let i = 0; i < rows * columns; i++) {
        gridHTML += `<div class="grid-item">Item ${i + 1}</div>`;
    }

    gridHTML += '</div>';

    gridPreview.innerHTML = gridHTML;
    codeContainer.textContent = `<div class="grid">\n`;
    codeContainer.textContent += `    ${gridHTML}\n`;
    codeContainer.textContent += `</div>\n\n`;
    codeContainer.textContent += `<style>\n`;
    codeContainer.textContent += `    ${cssCode}\n`;
    codeContainer.textContent += `</style>`;
}

rowsInput.addEventListener('input', generateGrid);
columnsInput.addEventListener('input', generateGrid);

generateGrid();
