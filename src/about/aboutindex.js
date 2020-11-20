import app from './app'
import db from './controller'
import initializeDatabase from './controller'


const port = 8000;

const start = async () => {
  const controller = await initializeDatabase()


  //app.get('/', (req, res) => res.send("ok"));

  //Get all 
  
  //About
  app.get('/about', async (req, res) => {
    try {
      const about = await controller.getAboutDesc()
      console.log(about)
      res.send(
        {
          success: true,
          about
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })




  //Get by ID
 

  //About
  app.get('/about/:id', async (req, res) => {
    try {
      const id = req.params.id
      const about = await controller.getAboutByID(id)
      res.send(
        {
          success: true,
          about
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })


  /* ===================================================================================================== */

  //Create New
  

  //About
  app.post('/about/insert', async (req, res) => {
    try {
      const { description } = req.query
      const about = await controller.createAbout(description)
      res.send(
        {
          success: true,
          about
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

 

  /*------------------------------------------------------------------*/
  /*------------------------------------------------------------------*/


  //Delete
 
  //About
  app.delete('/about/delete/:id', async (req, res) => {
    try {
      const { id } = req.params
      console.log(id)
      const about = await controller.deleteAbout(id)
      console.log(about)
      res.send(
        {
          success: true,
          about
        });
    } catch (error) {
      console.log(error)
      res.status(500).send('Server Error')
    }
  })

  

  //Update
 

  //About
  app.put('/about/update/:id', async (req, res) => {
    try {
      const { id } = req.params
      console.log(id)
      const about = await controller.updateAbout(id)
      console.log(about)
      res.send(
        {
          success: true,
          about
        });
    } catch (error) {
      console.log(error)
      res.status(500).send('Server Error')
    }
  })

 
 // app.listen(port, () => console.log('server is listening on port ' + port))
}

start();

