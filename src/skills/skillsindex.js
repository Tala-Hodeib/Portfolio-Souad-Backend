import app from './app'
import db from './controller'
import initializeDatabase from './controller'


const port = 8000;

const start = async () => {
  const controller = await initializeDatabase()


  //app.get('/', (req, res) => res.send("ok"));

  //Get all 
  //Skills
  app.get('/skills', async (req, res) => {
    try {
      const skillList = await controller.getSkillsList()
      res.send(
        {
          success: true,
          skillList
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  


  //Get by ID
  //Skill
  app.get('/skills/:id', async (req, res) => {
    try {
      const id = req.params.id
      const skill = await controller.getSkillsByID(id)
      res.send(
        {
          success: true,
          skill
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  

  /* ===================================================================================================== */

  //Create New
  //Skill
  app.post('/skills/insert', async (req, res) => {
    try {
      const { name, label, description } = req.query
      const skill = await controller.createSkill(name, label, description)
      res.send(
        {
          success: true,
          skill
        });
    } catch (error) {
      console.log(error)
      res.status(500).send('Server Error')
    }
  })

  

  /*------------------------------------------------------------------*/
  /*------------------------------------------------------------------*/


  //Delete
  //Skill
  app.delete('/skills/delete/:id', async (req, res) => {
    try {
      const { id } = req.params
      const skill = await controller.deleteSkill(id)
      res.send(
        {
          success: true,
          skill
        });
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })

  



  //Update
  //Skill
  app.put('/skills/update/:id', async (req, res) => {
    try {
      const { id } = req.params
      const skill = await controller.updateSkill(id)
      res.send(
        {
          success: true,
          skill
        });
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  })

  //Experience
  //app.listen(port, () => console.log('server is listening on port ' + port))

  }

start();

