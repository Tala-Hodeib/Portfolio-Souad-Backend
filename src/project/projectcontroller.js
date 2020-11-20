import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import SQL from 'sql-template-strings'

const initializeDatabase = async () => {
  try {
    const db = await open({
      filename: 'db.sqlite',
      driver: sqlite3.Database
    })

    //Query all
  

    //Projects
    const getProjetctsList = async () => {
      const rows = await db.all("SELECT id, project_name, project_github_link, project_demo_link, project_image, description FROM projects")
      return rows
    }

 


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Query by ID
  

    //Projects
    const getProjectByID = async (id) => {
      const rows = await db.all(`SELECT id, project_name, project_github_link, project_demo_link, project_image, description FROM projects WHERE id=${id}`)
      return rows
    }

  


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Create New
 

    //Project
    const createProject = async (project_name, project_github_link, project_demo_link, project_image, description) => {
      const rows = await db.all(`INSERT INTO projects (project_name, project_github_link, project_demo_link, project_image, description) VALUES ("${project_name}", "${project_github_link}", "${project_demo_link}", "${project_image}", "${description}")`)
      return rows
    }


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Delete


    //Projects
    const deleteProject = async (id) => {
      const rows = await db.run(`DELETE FROM projects WHERE id=${id}`)
      if (rows.stmt.changes === 0) {
        return false
      }
      return true
    }

    //Update


    //Projects
    const updateProject = async (id) => {
      const rows = await db.run(`DELETE FROM projects WHERE id=${id}`)
      if (rows.stmt.changes === 0) {
        return false
      }
      return true
    }


    const controller = {

      getProjetctsList,
      getProjectByID,
      createProject,
      deleteProject,
      updateProject,
    }

    return controller;
  }




  // Creating Table
  // await db.run(`CREATE TABLE Projects (id INTEGER PRIMARY KEY AUTOINCREMENT, project_name TEXT NOT NULL, project_github_link TEXT NOT NULL, project_demo_link TEXT NOT NULL, project_image TEXT NOT NULL, description TEXT NOT NULL)`);

  catch (error) {
    console.log(error)
  }
}

export default initializeDatabase

