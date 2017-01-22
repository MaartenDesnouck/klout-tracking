function updateChartLegend(RAW, row, kolom) {

    // RAW
    var waarde = SheetAccess.getValue(row, kolom, RAW);
    var naam = SheetAccess.getValue(0, kolom, RAW);
    SheetAccess.setValue(1, kolom, RAW, '[' + kolom + '] ' + naam + ' (' +
        waarde + ')');
}
