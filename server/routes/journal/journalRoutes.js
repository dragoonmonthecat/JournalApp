import express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
    console.log('called')
    res.json({journal: 'entry'});
});


export { router as journalRoutes };
