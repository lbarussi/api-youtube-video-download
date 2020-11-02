const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server is running!'); 
});

app.get('/download', (req, res) => {
    const url = req.query.URL;
    const type = req.query.type;
    let name = req.query.name;
    //res.json({ url: url });
    name = name.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?Λ]/g, '_');
    console.log(name);
    res.header('Content-Disposition', `attachment; filename="${name}.${type}"`);
    ytdl(url, {
    format: type
    }).pipe(res);

});