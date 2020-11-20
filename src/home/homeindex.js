import App from "../app.js";

import initializeDatabase from './homecontroller'
//db.test();
const start =async()=>{
    const controller = await initializeDatabase()
    //const string =await controller.gethomeList();
    //console.log(string);
    App.get( '/', (req, res) => res.send("ok") );
    App.get( '/home', async (req, res) =>{ 
        const homelist =await controller.gethomeList();
            res.send(
                {
                    success: true,
                    homelist
                } 
                //console.log(string)
            )} );

    App.get( '/home/:id', async (req, res) =>{
        const id =req.params.id; 
        const homeById =await controller.gethomeById(id);
            res.send(
                {
                    success: true,
                    homeById
                } 
                //console.log(string)
            )} );
   
   
   // App.listen( 8000, () => console.log('server listening on port 8000') )

}
start();