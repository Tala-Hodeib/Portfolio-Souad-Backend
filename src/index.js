import app from './app'
import db from './controller'
import initializeDatabase from './controller'


const port = 8000;

const start = async () => {
  const controller = await initializeDatabase()


  app.get('/', (req, res) => res.send("ok"));

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

  //Experience
  app.get('/experience', async (req, res) => {
    try {
      const expList = await controller.getExperienceList()
      res.send(
        {
          success: true,
          expList
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

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

  //About
  app.get('/about', async (req, res) => {
    try {
      const about = await controller.getAboutDesc()
      res.send(
        {
          success: true,
          about
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  //Contact Links
  app.get('/contact_links', async (req, res) => {
    try {
      const links = await controller.getContactLinks()
      res.send(
        {
          success: true,
          links
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

  //Contact Link
  app.get('/contact_links/:id', async (req, res) => {
    try {
      const id = req.params.id
      const link = await controller.getLinkByID(id)
      res.send(
        {
          success: true,
          link
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  /* ===================================================================================================== */

  //Create New
  //Skill
  app.post('/skills', async (req, res) => {
    try {
      const id = req.params.id
      const skill = await controller.createSkill(id)
      res.send(
        {
          success: true,
          skill
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  //Experience
  app.post('/experience', async (req, res) => {
    try {
      const id = req.params.id
      const experience = await controller.createExperience(id)
      res.send(
        {
          success: true,
          experience
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  //Project
  app.post('/projects', async (req, res) => {
    try {
      const id = req.params.id
      const project = await controller.createProject(id)
      res.send(
        {
          success: true,
          project
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  //About
  app.post('/about', async (req, res) => {
    try {
      const id = req.params.id
      const about = await controller.createAbout(id)
      res.send(
        {
          success: true,
          about
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  //Contact Link
  app.post('/contact_links', async (req, res) => {
    try {
      const id = req.params.id
      const link = await controller.createLink(id)
      res.send(
        {
          success: true,
          link
        });
    } catch (error) {
      res.status(500).send('Server Error')
    }
  })

  app.listen(port, () => console.log('server is listening on port ' + port))
}


/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


//Delete
//Skill
app.delete('/skills/:id', async (req, res) => {
  try {
    const id = req.params.id
    const skill = await controller.deleteSkill(id)
    res.send(
      {
        success: true,
        skill
      });
  } catch (error) {
    res.status(500).send('Server Error')
  }
})

//Experience
app.delete('/experience/:id', async (req, res) => {
  try {
    const id = req.params.id
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

//Project
app.delete('/projects/:id', async (req, res) => {
  try {
    const id = req.params.id
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

//About
app.delete('/about/:id', async (req, res) => {
  try {
    const id = req.params.id
    const about = await controller.deleteAbout(id)
    res.send(
      {
        success: true,
        about
      });
  } catch (error) {
    res.status(500).send('Server Error')
  }
})

//Contact Link
app.delete('/contact_links/:id', async (req, res) => {
  try {
    const id = req.params.id
    const link = await controller.deleteLink(id)
    res.send(
      {
        success: true,
        link
      });
  } catch (error) {
    res.status(500).send('Server Error')
  }
})

start();

