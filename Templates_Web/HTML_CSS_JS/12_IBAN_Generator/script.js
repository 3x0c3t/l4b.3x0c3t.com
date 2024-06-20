function generateRIBIBAN() {
    const country = document.getElementById('country').value;
    let rib, iban;

    switch (country) {
        case 'FR':
            rib = generateRIBFR();
            iban = generateIBANFR(rib);
            break;
        case 'DE':
            rib = generateRIBDE();
            iban = generateIBANDE(rib);
            break;
        case 'ES':
            rib = generateRIBES();
            iban = generateIBANES(rib);
            break;
        // Ajouter d'autres pays et leurs fonctions respectives
        default:
            rib = "Pays non supporté";
            iban = "Pays non supporté";
    }

    document.getElementById('rib').textContent = `RIB: ${rib}`;
    document.getElementById('iban').textContent = `IBAN: ${iban}`;
}

function generateRIBFR() {
    const bankCode = getRandomNumberString(5);
    const branchCode = getRandomNumberString(5);
    const accountNumber = getRandomNumberString(11);
    const key = getRandomNumberString(2); // Calculé selon les règles de la banque (ici simplifié)
    return `${bankCode} ${branchCode} ${accountNumber} ${key}`;
}

function generateIBANFR(rib) {
    const countryCode = "FR";
    const checksum = "76"; // Simplifié, devrait être calculé
    return `${countryCode}${checksum}${rib.replace(/ /g, '')}`;
}

function generateRIBDE() {
    const bankCode = getRandomNumberString(8);
    const accountNumber = getRandomNumberString(10);
    return `${bankCode} ${accountNumber}`;
}

function generateIBANDE(rib) {
    const countryCode = "DE";
    const checksum = "89"; // Simplifié, devrait être calculé
    return `${countryCode}${checksum}${rib.replace(/ /g, '')}`;
}

function generateRIBES() {
    const bankCode = getRandomNumberString(4);
    const branchCode = getRandomNumberString(4);
    const controlDigits = getRandomNumberString(2);
    const accountNumber = getRandomNumberString(10);
    return `${bankCode} ${branchCode} ${controlDigits} ${accountNumber}`;
}

function generateIBANES(rib) {
    const countryCode = "ES";
    const checksum = "91"; // Simplifié, devrait être calculé
    return `${countryCode}${checksum}${rib.replace(/ /g, '')}`;
}

function getRandomNumberString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent.split(': ')[1];
    navigator.clipboard.writeText(text).then(() => {
        alert(`${elementId.toUpperCase()} copié dans le presse-papier!`);
    }, (err) => {
        alert('Erreur lors de la copie dans le presse-papier', err);
    });
}
