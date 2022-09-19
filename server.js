const express = require ('express') ;
const d = new Date( Date.now());
const app = express () ;
const middleware = (req , res , next) => {
    const day =d.getDay();
    const hour =d.getHours();
    if ((day >=1 && day<=6 )  && (hour >=9 && hour<=17 )  === true ){
        next();
         }
        else {
        return res.send('you are not authorizied !') ;
    };
    
};
app.use(middleware) ;

app.get ( '/' ,  function( req , res )  {
      res.sendFile(__dirname + '/static/home.html' ) ;
    //  listen on a post
} ) ;

app.get ( '/services' ,  function( req , res )  {
  res.sendFile(__dirname + '/static/Services.html' ) ;

} ) ;

app.get ( '/contact' ,  function( req , res )  {
    res.sendFile(__dirname + '/static/Contact.html' ) ;
 
} ) ;



app.use(express.static(__dirname + '/static')) ;

app.listen (3000, (err) => {
 err ?console.log(err) : console.log('server is runnig in 5000')
}) ;