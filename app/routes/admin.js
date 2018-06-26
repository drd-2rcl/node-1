module.exports = function(application) {
  application.get('/formulario_inclusao_noticias', function(req, res){
    res.render("admin/form_add_noticias");
  });
  application.post('/noticias/salvar', function(req, res){
    var noticia = req.body;

    req.assert('título', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
      res.render("admin/form_add_noticia");
      return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NotciasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
      res.redirect('/noticias');
    });


  });
}
