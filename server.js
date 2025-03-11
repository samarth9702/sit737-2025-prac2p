const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/calculate-mul', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please enter valid num' });
    }

    const mul = num1 * num2; 
    res.json({ mul });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});