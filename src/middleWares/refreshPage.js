export default function refreshPage(req, res, next) {
    console.log('refresh page')
    const backUrl = req.header('Referer') || '/'
    res.redirect(backUrl)
    next()
}
