var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola' });
});

router.get('/ruta',function(req,res,next){
  res.render('paginaNueva',{
  nombre: 'Sebastian',
  apellido: 'Duque',
  interes: 'Mi nombre es Sebastian Duque Gallego y esta es mi historia?',
  hist: 'Naci el 05 de septiembre en bogota,no creo poder contarles algo interesante pero lo intentare',
  hist1: 'Primero que todo asisti al colegio Luis Carlos Galan Sarmiento desde preescolar hasta once practicamente',
  hist2: 'estudie la mayoria de mi juventud en esa institucion donde pasaron cualquier cantidad de cosas que no vale la',
  hist3: 'pena nombrar, actualmente me encuentro cursando la carrera de ingenieria de sistemas en la Universidad Distrital',
  hist4: 'y cursando en estos momentos el 5 semestre',
  hist5: 'Comparto una de mis canciones favoritas',
  info: 'imagenes que me llaman la atencion',
  info2: 'Estas las paginas donde paso mas el tiempo',
  info3: 'Ahora es tiempo de conocerte'
  });
});
module.exports = router;
