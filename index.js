const express = require('express')
const app = express();

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    return res.json({ message: "Hello This noejs app"});
});

app.listen(PORT, () => console.log(`Seerver started on port ${PORT}`))
