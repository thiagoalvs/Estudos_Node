var routes = require('express').Router();
var sampleUser = require('./sample');
var EventEmitter = require('events').EventEmitter;

routes.get('/', function(req, res){
    console.log('Root');
    res.send('You\'ve reached the root');
});

routes.get('/page', function(req, res){

    var eventListener = FazerAlgoComEventos();
    console.log('Antes');

    eventListener.on('start', function() {
        console.log('The task has began');
    })

    eventListener.on('half', function() {
        console.log('The task has reachead half of the process');
    })

    eventListener.on('end', function() {
        console.log('The task has completed');
    })

    console.log('Depois');

    res.send();
});

routes.get('/page/details', function(req, res){

    console.log('Inicio');
    FazerAlgoComCallbacks(function(err, result){
        if (err != null)
            console.log('Deu erro');

        console.log(result.length);
    });
    console.log('Fim');
    res.send();
});

function FazerAlgoComEventos(){
    
    var emissor = new EventEmitter();
    var arr = [];

    setInterval(function() {
        
        emissor.emit('start');
    
        for (i=0; i<2000; i++){
            arr.push(i);
        if (i == 1000)
            emissor.emit('half');
        }

        emissor.emit('end');
    }, 5000);

    return(emissor);
}

function FazerAlgoComCallbacks(callback){

    var arr = [];
    
    for (i=0; i<1000; i++){
        arr.push(i);
    }
    
    setTimeout(() => {
        callback(null, arr);
    }, 5000);    
}

module.exports = routes;