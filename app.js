const express = require('express');
const app = express();

app.use(express.json());

console.log('Start...');

app.post('/customPieChart', (req,res)=>{
    const response = {
        total: 35.0,
        data: [
            { name: 'Incomplete Data', y: 7 },
            { name: 'Credit blocks', y: 18 },
            { name: 'Billing Blocks', y: 10}
        ]
    };

    console.log('Custome Pie Chart data requested');
    res.status(200).json(response);
});

app.get('/health', (req, res) => {
 res.status(200).send('OK');
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});