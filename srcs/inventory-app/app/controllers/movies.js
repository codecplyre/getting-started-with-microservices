export default (db) => {
    return {
        getMovies(req, res) {
            console.log('/api/movies');
            db.movies
                .findAll({
                    attributes: ['id', 'title', 'description'],
                })
                .then((movies) => {
                    res.json(movies);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
        getMoviesByTitle(req, res) {
            console.log('/api/movies?title=[name]');
            db.movies
                .findAll({
                    where: {
                        title: req.query.title,
                    },
                    attributes: ['id', 'title', 'description'],
                })
                .then((movies) => {
                    res.json(movies);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
        createMovie(req, res) {
            console.log('/api/movies', req.body, res.body);
            const { title, description } = req.body;
            db.movies
                .create({
                    title: String(title),
                    description: String(description),
                })
                .then((movie) => {
                    res.json(movie);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
        deleteAllMovie(req, res) {
            console.log('/api/movies');
            db.movies
                .destroy({
                    where: {},
                })
                .then((result) => {
                    res.json(result);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
        getMovieById(req, res) {
            console.log('/api/movies/:id');
            db.movies
                .findByPk(req.params.id, {
                    attributes: ['title', 'description'],
                })
                .then((movie) => {
                    res.json(movie);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
        updateMovie(req, res) {
            console.log('/api/movies/:id');
            db.movies
                .update(
                    {
                        title: req.body.title,
                        description: req.body.description,
                    },
                    {
                        where: {
                            id: req.params.id,
                        },
                    }
                )
                .then((result) => {
                    res.json(result);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
        deleteMovie(req, res) {
            console.log('/api/movies/:id');
            db.movies
                .destroy({
                    where: {
                        id: req.params.id,
                    },
                })
                .then((result) => {
                    res.json(result);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
    };
};