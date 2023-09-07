import express from 'express';
import Genre from './genresModel';

const router = express.Router(); 

// Get all users
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

// // Get genre details
// router.get('/:id/genres', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (genres.id == id) {
//         res.status(200).json(genres);
//     } else {
//         res.status(404).json({
//             message: 'The resource you requested could not be found.',
//             status_code: 404
//         });
//     }
// });

export default router;