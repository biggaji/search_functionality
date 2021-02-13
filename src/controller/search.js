/**
 * Search functionality
 * @returns {Object\Array} - <Object of arrays of articles>
 * @author Tobi Ajibade
 */
const { db } = require("../../configs/db");

exports.search = (req, res) => {
    const { q } = req.query;
    // search for matching post with query
    try {
        db.query(`SELECT p.title, p.body, u.first_name, u.last_name FROM posts p 
                  INNER JOIN t_user u on p.authorid = u.id WHERE p.title ilike $1`, [`%${q}%`])
            .then(result => {
                if (result.rowCount > 0) {
                    const postResult = result;
                    // Use regex to highlight the search item
                    res.render('index', { posts: postResult, query: q });
                    // console.log(postResult.rows[0]);
                } else {
                    res.render('index', { errorMessage: `There is no article that matches  "${q}"`, query: q });
                }
            })
            .catch(e => {
                res.render('index', { errorMessage: `An error occured while fetching articles. - ${e}` });
                console.log(e);
            });
    } catch (error) {
        res.json({ message: "An error occured" });
    }
}