/**
 * Created with Eighlark Innovations.
 * User: Akshay
 * Date: 9/22/13
 * Time: 9:13 PM
 * Email: akshay.x666@gmail.com
 */

/**
 * Default Controller Route
 */

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/forum', function(req, res) {
        res.render('forum');
    });

}