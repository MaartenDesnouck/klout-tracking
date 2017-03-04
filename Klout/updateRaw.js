function updateRaw(RAW, META, BUFFER, row, kolom, date) {
    var index = kolom;
    var user = GoogleSheet.getValue(0, kolom, RAW);
    var score = getKloutScore(user, BUFFER);

    // zet score op juiste plaats in RAW
    GoogleSheet.setValue(row, kolom, RAW, score);

    // laten weten via IFTTT
    if (user == 'maartendesnouck') {
        updateAndNotify(1, 1, META, score, 'MaartenDesnouck');
    } else if (user == 'VTKGent') {
        updateAndNotify(2, 1, META, score, 'VTKGent');
    }
}
