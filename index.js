let fliglet = require('figlet');
fliglet ('Intocode', function (err, data) {
    if (err) {
        console.log('Something went wrong...')
        console.log(err);
        return
    }
    console.log(data)
})