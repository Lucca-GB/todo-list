const getAll = (req, res) => {
    return res.status(200).json({message: 'testando controller'});
};

module.exports = {
    getAll
};