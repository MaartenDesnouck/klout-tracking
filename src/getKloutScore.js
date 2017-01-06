function getKloutScore(user, BUFFER) {
    var apikey = '5vwvv52dxujawj6hzfyhsbue';
    var data = JSON.parse(Web.getHTML(
        'http://api.klout.com/v2/identity.json/twitter?screenName=' + user +
        '&key=' + apikey, BUFFER));
    var score = JSON.parse(Web.getHTML('http://api.klout.com/v2/user.json/' +
        data.id + '/score?key=' + apikey, BUFFER));

    return score.score;
}
