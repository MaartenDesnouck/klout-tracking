function updateAndNotify(row, kolom, META, score, user) {
    var old = GoogleSheet.getValue(row, kolom, META);
    var scorefloor = Math.floor((score) * 100) / 100;
    var oldfloor = Math.floor((old) * 100) / 100;
    var diff = Math.floor((scorefloor - oldfloor) * 100) / 100;
    var diffFull = score - old

    if (Math.abs(diffFull) > 0) {
        GoogleSheet.setValue(row, kolom, META, score);
        score = Math.floor(score * 100) / 100;
        if (diff < 0) {
            var body = 'KLOUT ' + user + ' is now ' + scorefloor + ' [' + diff +
                ']';
        } else if (diff > 0) {
            body = 'KLOUT ' + user + ' is now ' + scorefloor + ' [+' + diff +
                ']';
        } else {
            body = 'KLOUT ' + user + ' is now ' + scorefloor + ' [no change]';
        }
        var subject = '##IFTTTnotification';
        var recipient = 'trigger@recipe.ifttt.com';

        MailApp.sendEmail(recipient, subject, body);
    }
}
