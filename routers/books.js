import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Lista dei prodotti')
})

export default router;