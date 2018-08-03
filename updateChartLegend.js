function updateChartLegend(RAW, row, kolom) {

    // RAW
    var waarde = sheet_getValue(row, kolom, RAW);
    var naam = sheet_getValue(0, kolom, RAW);
    sheet_setValue(1, kolom, RAW, '[' + kolom + '] ' + naam + ' (' +
        waarde + ')');
}
