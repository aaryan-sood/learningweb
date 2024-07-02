const express = require('express');
const morgan = require('morgan');
const app = express();
const AppError=require('./appError')
let port = 3000;

// app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     console.log('Hello from first middleware')
//    return next()
// })

// app.use((req, res, next) => {
//     console.log('Hello from second middleware')
//    return next()
// })
app.use((req, res, next) => {
    req.requestTime = Date.now(); //Just defined req.requestTime for every route handler  
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I Love Dogs!!');
    next();
});

const verifypassword = ((req, res, next) => {
    let { password } = req.query;
    if (password === 'chickennuggets') {
        return next();
    }
    // res.send('sorry you need a password to enter here!!')
    throw new AppError('Sorry a password is required',401)
});

app.get('/', (req, res) => {
    console.log(`${req.requestTime}`);
    res.send('Home Page');
});

app.get('/secret', verifypassword, (req, res, next) => {
    res.send(`My Secret is : sometimes I wear headphones in public so I don't have to talk to people`);
});

app.get('/dogs', (req, res) => {
    console.log(`${req.requestTime}`);
    res.send('Woof Woof');
});

app.get('/admin',(req,res) => {
    throw new AppError('you are not an admin',403)
})

app.get('/error', (req, res) => {
    chicken.fly();
});

// Setting up a 404 route. app.use is generally used to set up a 404 route, and it is set up at the end so when nothing matches it could render at the end
app.use((req, res) => {
    res.status(404).send('Not Found!!!');
});

// app.use((err, req, res, next) => {
//     console.log('***************************');
//     console.log('**********Error************');
//     console.log('***************************');
//     console.error(err);
//     // Pass the error to the default error handler
//     next(err);
// });

app.use((err, req, res, next) => {
        // our custom error handler
        let {status = 500, message='Something went wrong'}= err

        res.status(status).send(message)
        next(err);
    });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
