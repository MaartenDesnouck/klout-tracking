function updateChartLegend(RAW, row, kolom) {

    // RAW
    var waarde = getValue(row, kolom, RAW);
    var naam = getValue(0, kolom, RAW);
    setValue(1, kolom, RAW, '[' + kolom + '] ' + naam + ' (' +
        waarde + ')');
}
