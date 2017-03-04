function updateChartLegend(RAW, row, kolom) {

    // RAW
    var waarde = GoogleSheet.getValue(row, kolom, RAW);
    var naam = GoogleSheet.getValue(0, kolom, RAW);
    GoogleSheet.setValue(1, kolom, RAW, '[' + kolom + '] ' + naam + ' (' +
        waarde + ')');
}
