const { db } = require("../../configs/db");

exports.search = (req, res) => {
    const { q } = req.query;
    // search for matching post with query
    // res.json({ query: q })
    try {
        db.query("SELECT p.title, p.body FROM posts p WHERE p.title ilike $1", [`%${q}%`])
            .then(result => {
                if (result.rowCount > 0) {
                    const postResult = result;
                    res.render('index', { posts: postResult });
                    console.log(postResult.rows)
                } else {
                    res.render('index', { errorMessage: `The is no article that matches  "${q}"` });
                }
            })
            .catch(e => {
                res.render('index', { errorMessage: `An error occured while fetching articles : ${e}` });
                console.log(e);
            });
    } catch (error) {
        res.json({ message: "An error occured" });
    }
}