import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import qrimage from 'qr-image';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.port||3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

function isvalid(url) {
    try {
        new URL(url);
        return true; 
    } catch (e) {
        return false; 
    }
}

let flag = 0;

app.get('/', (req, res) => {
    flag = 0;
    res.render('index', { valid: true, alertmessage: '', flag: flag });
});

app.post('/generate', (req, res) => {
    const url = req.body.url;
    let valid = true;
    let alert = '';
    
    if (!isvalid(url)) {
        valid = false;
        alert = 'Invalid format! Try again.';
        return res.render('index', { valid: valid, alertmessage: alert, flag: flag });
    }

    try {
        const qrcode = qrimage.image(url, { type: 'png' });
        const qrImagePath = path.join(__dirname, 'public', 'qr_image.png');
        
        qrcode.pipe(fs.createWriteStream(qrImagePath));
        console.log('QR code image saved as public/qr_image.png');
        
        flag = 1;
        setTimeout(() => {
            fs.unlink(qrImagePath, (err) => {
                if (err) {
                    console.error('Error deleting QR image after redirect:', err);
                } else {
                    console.log('QR image deleted successfully after timeout');
                }
            });
        }, 100);
        res.redirect('/qr-success');
    } catch (err) {
        console.error('Error generating QR code:', err);
        valid = false;
        alert = 'Failed to generate QR code. Try again later.';
        return res.render('index', { valid: valid, alertmessage: alert, flag: flag });
    }
});

app.get('/qr-success', (req, res) => {
    
    res.render('index', { valid: true, alertmessage: '', flag: 1 });
});
app.get('/download-qr', (req, res) => {
    const qrImagePath = path.join(__dirname, 'public', 'qr_image.png');
    res.download(qrImagePath, 'qr_image.png', (err) => {
        if (err) {
            console.error('Error downloading the QR image:', err);
            res.status(500).send('Failed to download the QR code image');
        } else {
            fs.unlink(qrImagePath, (err) => {
                if (err) {
                    console.error('Error deleting QR image after download:', err);
                } else {
                    console.log('QR image deleted successfully after download');
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);
});
