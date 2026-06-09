function showHebrew() {
    document.querySelector('.instructions-frame').classList.add('hide');
    document.querySelector('#hebrewInstructions').classList.remove('hide');
}
function showEnglish() {
    document.querySelector('#hebrewInstructions').classList.add('hide');
    document.querySelector('.instructions-frame').classList.remove('hide');
}