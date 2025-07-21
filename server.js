    import express from 'express';
    
    const app = express();
    const port = 3000;

    app.use(express.json()); //Middleware to parse JSON bodies

    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    //This code sets up a basic server that listens on port 3000 and responds with "Hello, World!" when the root URL is accessed.