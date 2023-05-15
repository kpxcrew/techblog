const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const commentData = await Post.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = commentData.id;
        req.session.logged_in = true;
  
        res.status(200).json(commentData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', (req, res) => {
   Comment.destroy({
        where: {
          id: req.params.id,
        },
      })
  .then((commentData) =>{
      if (!commentData) {
        res.status(404).json({ message: 'This ID has no comment' });
        return;
      }
  
      res.status(200).json(commentData);
    }) .catch ((err) => {
        console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;