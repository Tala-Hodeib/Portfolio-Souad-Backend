import app from './app'
import db from './controller'
import initializeDatabase from './controller'


const port = 8000;

const start = async () => {
  const controller = await initializeDatabase()


  app.get('/', (req, res) => res.send("ok"));

  //Get all 


  //Experience
  app.get('/experience', async (req, res) => {
    try {
      const expList = await controller.getExperienceList()
      res.send(expList);
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

 


  //Get by ID
 

  //Experience
  app.get('/experience/:id', async (req, res) => {
    try {
      const id = req.params.id
      const experience = await controller.getExperienceByID(id)
      res.send(
        {
          success: true,
          experience
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

 

  /* ===================================================================================================== */

  //Create New

  //Experience
  app.post('/experience/insert', async (req, res) => {
    try {
      const { company_name, from_date, to_date, description } = req.query
      const experience = await controller.createExperience(company_name, from_date, to_date, description)
      res.send(
        {
          success: true,
          experience
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  

  /*------------------------------------------------------------------*/
  /*------------------------------------------------------------------*/


  //Delete
 

  //Experience
  app.delete('/experience/delete/:id', async (req, res) => {
    try {
      const { id } = req.params
      const experience = await controller.deleteExperience(id)
      res.send(
        {
          success: true,
          experience
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  

  //Update


  //Experience
  app.put('/experience/update/:id', async (req, res) => {
    try {
      const { id } = req.params
      const experience = await controller.updateExperience(id)
      res.send(
        {
          success: true,
          experience
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })


  //app.listen(port, () => console.log('server is listening on port ' + port))
}

start();

