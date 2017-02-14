import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Page1 from './component/page1'
import csshook from 'css-modules-require-hook/preset' // import hook before routes

import router from './router.js'


const app= express();
app.use(express.static('public'))

app.engine('handlebars' , exphbs())
app.set('view engine' , 'handlebars')
app.set('views' , path.join(__dirname , './templete'))
app.use(router)




var server = app.listen(3000 , function(){
  console.log('senior project running on port 3000')
})

/*app.get('*' , function(req , res){
  res.render('index.handlebars' , {
      markup: ReactDOMServer.renderToString(React.createElement(Page1))
  })
})*/
