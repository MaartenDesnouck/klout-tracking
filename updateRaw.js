function updateRaw(RAW, META, BUFFER, row, kolom, date) {
    var index = kolom;
    var user = sheet_getValue(0, kolom, RAW);
    var score = getKloutScore(user, BUFFER);

    // Put score in sheet
    sheet_setValue(row, kolom, RAW, score);

    // Notify me via IFTTT
    // TODO just read from sheet which ones to notify me about
    if (user == 'maartendesnouck') {
        updateAndNotify(1, 1, META, score, 'MaartenDesnouck');
    } 
  // else if (user == 'VTKGent') {
     //   updateAndNotify(2, 1, META, score, 'VTKGent');
   // }
}
