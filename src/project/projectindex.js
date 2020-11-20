import app from './app'
import db from './controller'
import initializeDatabase from './controller'


const port = 8000;

const start = async () => {
  const controller = await initializeDatabase()


  app.get('/', (req, res) => res.send("ok"));

  //Get all 


  //Projects
  app.get('/projects', async (req, res) => {
    try {
      const projList = await controller.getProjetctsList()
      res.send(
        {
          success: true,
          projList
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })



  //Get by ID
 
  //Project
  app.get('/projects/:id', async (req, res) => {
    try {
      const id = req.params.id
      const project = await controller.getProjectByID(id)
      res.send(
        {
          success: true,
          project
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

 

  /* ===================================================================================================== */

  //Create New
 

  //Project
  app.post('/projects/insert', async (req, res) => {
    try {
      const { project_name, project_github_link, project_demo_link, project_image, description } = req.query
      const project = await controller.createProject(project_name, project_github_link, project_demo_link, project_image, description)
      res.send(
        {
          success: true,
          project
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

 
  /*------------------------------------------------------------------*/
  /*------------------------------------------------------------------*/


  //Delete


  //Project
  app.delete('/projects/delete/:id', async (req, res) => {
    try {
      const { id } = req.params
      const project = await controller.deleteProject(id)
      res.send(
        {
          success: true,
          project
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })




  //Update


  //Project
  app.put('/projects/update/:id', async (req, res) => {
    try {
      const { id } = req.params
      const project = await controller.updateProject(id)
      res.send(
        {
          success: true,
          project
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })


  //app.listen(port, () => console.log('server is listening on port ' + port))
}

start();

