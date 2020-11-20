const router = require('express').Router()
const db = require('../models')

router.post('/', (req, res) => {
  
  // db.comment.create({
  //   content: req.body.content,
  //   name: req.body.name,
  //   articleId: req.body.articleId
  // })

  db.comment.create(req.body)
  .then((_comment) => {
    res.redirect(`/articles/${req.body.articleId}`)
  })

  // async function temp() {
  //   await db.comment.create(req.body)
  //   res.redirect(`/articles/${req.body.articleId}`)
  // }
  // temp()
})

module.exports = router