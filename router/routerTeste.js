const express = require("express");
const cors = require("cors");
const router = express.Router();

router.get('/:nome', (req, res) => {
    res.status(200).json({mensagem: `Bem vindo à API ${req.params.nome}`})
})

module.exports = router;