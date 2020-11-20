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
    //Skills
    const getSkillsList = async () => {
      const rows = await db.all("SELECT id, name, description, image FROM skills")
      return rows
    }

    

    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Query by ID
    //SKills
    const getSkillsByID = async (id) => {
      const rows = await db.all(`SELECT id, name,  description ,image FROM skills WHERE id=${id}`)
      return rows
    }

    

    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Create New
    //Skill
    const createSkill = async (name, description,image) => {
      const rows = await db.run(`INSERT INTO skills (name,  description,image) VALUES ("${name}", "${description}", "${image}")`)
      return rows
    }

    


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Delete
    //SKills
    const deleteSkill = async (id) => {
      const result = await db.run(`DELETE FROM skills WHERE id=${id}`)
      if (result.stmt.changes === 0) {
        return false;
      }
      return true;
    };
    

    //Update
    //SKills
    const updateSkill = async (id, name,description,image) => {
      const result = await db.run(`DELETE FROM skills WHERE id=${id}`)
      if (result.stmt.changes === 0) {
        return false;
      }
      return true;
    };
   

    const controller = {
      getSkillsList,
      getSkillsByID,
      createSkill,
      deleteSkill,
      updateSkill
    }

    return controller;
  }




  // Creating Table
  // await db.run(`CREATE TABLE Skills (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL)`);
  

  catch (error) {
    console.log(error)
  }
}

export default initializeDatabase

