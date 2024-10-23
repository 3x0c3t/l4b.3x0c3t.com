function showCode(buttonId) {
    let htmlCode = '';
    let cssCode = '';

    switch(buttonId) {
        case 'button1':
            htmlCode = '<button class="btn btn-hover-1">Bouton 1</button>';
            cssCode = `
                .btn-hover-1 {
                    background-color: #007bff;
                    color: white;
                    padding: 10px 20px;
                    transition: transform 0.3s ease, background-color 0.3s ease;
                    border-radius: 4px;
                }
                .btn-hover-1:hover {
                    background-color: #0056b3;
                    transform: scale(1.1);
                }
            `;
            break;
        case 'button2':
            htmlCode = '<button class="btn btn-hover-2">Bouton 2</button>';
            cssCode = `
                .btn-hover-2 {
                    background-color: #28a745;
                    color: white;
                    padding: 10px 20px;
                    border: 2px solid transparent;
                    transition: border-color 0.3s ease, color 0.3s ease;
                }
                .btn-hover-2:hover {
                    border-color: #fff;
                    color: #28a745;
                    background-color: white;
                }
            `;
            break;
        case 'button3':
            htmlCode = '<button class="btn btn-hover-3">Bouton 3</button>';
            cssCode = `
                .btn-hover-3 {
                    background: linear-gradient(45deg, #ff0066, #ffcc00);
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    transition: box-shadow 0.3s ease;
                    border-radius: 8px;
                }
                .btn-hover-3:hover {
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
                }
            `;
            break;
        case 'button4':
            htmlCode = '<button class="btn btn-hover-4">Bouton 4</button>';
            cssCode = `
                .btn-hover-4 {
                    background-color: #ff6600;
                    color: #fff;
                    padding: 10px 20px;
                    border: 2px dashed #fff;
                    transition: all 0.3s ease;
                }
                .btn-hover-4:hover {
                    border-style: solid;
                    background-color: #ff3300;
                }
            `;
            break;
        case 'button5':
            htmlCode = '<button class="btn btn-hover-5">Bouton 5</button>';
            cssCode = `
                .btn-hover-5 {
                    background-color: transparent;
                    color: #000;
                    padding: 10px 20px;
                    border: 2px solid #000;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .btn-hover-5:hover {
                    background-color: #000;
                    color: #fff;
                }
            `;
            break;
        case 'button6':
            htmlCode = '<button class="btn btn-hover-6">Bouton 6</button>';
            cssCode = `
                .btn-hover-6 {
                    background-color: #6f42c1;
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 50px;
                    transition: transform 0.3s ease;
                }
                .btn-hover-6:hover {
                    transform: rotate(10deg);
                }
            `;
            break;
        case 'button7':
            htmlCode = '<button class="btn btn-hover-7">Bouton 7</button>';
            cssCode = `
                .btn-hover-7 {
                    background-color: #17a2b8;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    transition: background-color 0.3s ease;
                }
                .btn-hover-7:hover {
                    background-color: #138496;
                    border-radius: 0;
                }
            `;
            break;
        case 'button8':
            htmlCode = '<button class="btn btn-hover-8">Bouton 8</button>';
            cssCode = `
                .btn-hover-8 {
                    background-color: #343a40;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    transition: all 0.3s ease;
                }
                .btn-hover-8:hover {
                    color: #f8f9fa;
                    background-color: #212529;
                    text-transform: uppercase;
                }
            `;
            break;
        case 'button9':
            htmlCode = '<button class="btn btn-hover-9">Bouton 9</button>';
            cssCode = `
                .btn-hover-9 {
                    background-color: #f39c12;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 20px;
                    transition: opacity 0.3s ease;
                }
                .btn-hover-9:hover {
                    opacity: 0.7;
                }
            `;
            break;
        case 'button10':
            htmlCode = '<button class="btn btn-hover-10">Bouton 10</button>';
            cssCode = `
                .btn-hover-10 {
                    background-color: #e74c3c;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                }
                .btn-hover-10:hover {
                    transform: scale(1.2);
                }
            `;
            break;
    }

    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('cssCode').textContent = cssCode;
}
