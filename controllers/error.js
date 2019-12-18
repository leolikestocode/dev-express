exports.get404Page = (req, res, next) => {
    res.status(404).render('404', {
        titlePage: '404 - Not Found',
        path: '/views/404.html'
    })
}