const multer = require ('multer');
const recognizeMusic = require ('../controllers/recognize');

const makeConfigForMulter = () => {
    return {
        filename: (req, file, cb) => {
            cb (null, req.fingerprint.hash + file.originalname);
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
    app.post ('/api/recognize', upload.single ('recognize'), recognizeMusic.searchMusicByUserFile, recognizeMusic.deleteFile);
    app.post ('/api/recognizeByHumming', upload.single ('recognize'), recognizeMusic.searchMusicByHumming, recognizeMusic.deleteFile);
};