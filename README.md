#Práctica: Analizador de PL0 Usando Jison.

*Objetivo*
Reescriba el analizador sintáctico del lenguaje PL0 realizado en las prácticas [4.6](http://nereida.deioc.ull.es/~plgrado/javascriptexamples/node39.html#practica:pl0) y [6.13] (http://nereida.deioc.ull.es/~plgrado/javascriptexamples/node56.html#practica:pl0ampliado) usando Jison .

Material para empezar: 
======================

* [Repositorio de inicio de la práctica](https://github.com/crguezl/ull-etsii-grado-pl-jisoncalc)
* [Despliegue heroku de inicio](http://jisoncalc.herokuapp.com/)
* [Jison](http://zaach.github.io/jison/)

```bash
[~/jison/jisoncalc(develop)]$ pwd -P
/Users/casiano/local/src/javascript/PLgrado/jison/jisoncalc
```
```bash
[~/jison/jisoncalc(develop)]$ git remote -v
heroku  git@heroku.com:jisoncalc.git (fetch)
heroku  git@heroku.com:jisoncalc.git (push)
origin  git@github.com:crguezl/ull-etsii-grado-pl-jisoncalc.git (fetch)
origin  git@github.com:crguezl/ull-etsii-grado-pl-jisoncalc.git (push)
```
Tareas:
=======

* La salida debe ser el AST del programa de entrada
* Modifique `block` y `statement` para que los procedure reciban argumentos y las llamadas a procedimiento puedan pasar       argumentos.
* Añada `if ... then ... else ...`
* Actualice la documentación de la gramática para que refleje la gramática ampliada
* Limite el número de programas que se pueden salvar a un número prefijado, por ejemplo 10. Si se intenta salvar uno se   suprime uno al azar y se guarda el nuevo.
* Las pruebas deben comprobar que los AST generados reflejan la semántica del lenguaje así como alguna situación de       error
* Sólo usuarios autenticados pueden salvar sus programas en la base de datos.
* Extienda la autenticación [OAuth](http://oauth.net/) para que además de Google pueda hacerse con Twitter ó GitHub ó Facebook ó ... Sólo      debe implementar una.

Método de Entrega:
==================
* Use un repositorio privado en BitBucket o bien solicite al administrador del Centro de Cálculo un repositorio privado en GitHub.
* Comparta dicho repositorio con sus colaboradores y con el profesor.
* Suba la práctica al workshop/taller antes de la fecha límite
* Cuando el taller pase a la fase de evaluación haga público su repositorio.

Referencias para esta Práctica
==============================
* Véase el capítulo Oauth: Google, Twitter, GitHub, Facebook [32](http://nereida.deioc.ull.es/~plgrado/javascriptexamples/node200.html#chapter:googleoauth)
* Véase Intridea [Omniauth] (http://intridea.github.io/omniauth/) y [omniauth en GitHub](https://github.com/intridea/omniauth)
* La gema [omniauth-google-oauth2](https://github.com/zquestz/omniauth-google-oauth2)
* [Google Developers Console](https://console.developers.google.com/project)
* [Revoking Access to an App in Google](https://security.google.com/settings/security/permissions?pli=1)
* La gema [sinatra-flash](https://github.com/SFEley/sinatra-flash)
* Véase el capítulo Heroku [29](http://nereida.deioc.ull.es/~plgrado/javascriptexamples/node185.html#chapter:heroku)
* [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql)
* Véase el capítulo DataMapper [30](http://nereida.deioc.ull.es/~plgrado/javascriptexamples/node194.html#chapter:datamapper)

Alumnos:                                                                                                         
========
Jorge Gómez Weyler https://github.com/alu4399                                                       
Víctor Hernández Pérez https://github.com/alu0100697032
