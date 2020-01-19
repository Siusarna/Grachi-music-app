const multer = require ('multer');
const controllerForRecognize = require ('../controllers/recognize');

const makeConfigForMulter = () => {
    return {
        filename: (req, file, cb) => {
            cb (null, file.originalname);
        },
        destination: (req, file, cb) => {
            cb (null, 'uploads');
        }
    };
};

const storage = multer.diskStorage (makeConfigForMulter ());
const upload = multer ({
    storage
});

module.exports = app => {
    app.post ('/api/recognize', upload.single ('recognize'), controllerForRecognize.searchMusicByUserFile);
    app.post ('/api/recognizeByHumming', upload.single ('recognize'), controllerForRecognize.searchMusicByHumming);
};