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
 

    //Experience
    const getExperienceList = async () => {
      const rows = await db.all("SELECT id,title,company_name, from_date, to_date, description,icon FROM experience")
      return rows
    }

   


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Query by ID


    //Experience
    const getExperienceByID = async (id) => {
      const rows = await db.all(`SELECT id, title,company_name, from_date, to_date, description,icon FROM experience WHERE id=${id}`)
      return rows
    }

    

    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Create New
    //Skill
    //Experience
    const createExperience = async (title,company_name, from_date, to_date, description,icon) => {
      const rows = await db.all(`INSERT INTO experience (title,company_name, from_date, to_date, description,icon) VALUES ("${title}","${company_name}", "${from_date}", "${to_date}", "${description}", "${icon}")`)
      return rows
    }

    


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Delete
    
    //Experience
    const deleteExperience = async (id) => {
      const rows = await db.run(`DELETE FROM experience WHERE id=${id}`)
      if (rows.stmt.changes === 0) {
        return false
      }
      return true
    }

    
    //Update
 
    //Experience
    const updateExperience = async (id) => {
      const rows = await db.run(`DELETE FROM experience WHERE id=${id}`)
      if (rows.stmt.changes === 0) {
        return false
      }
      return true
    }

   

    const controller = {
      getExperienceList,
      getExperienceByID,
      createExperience,
      deleteExperience,
      updateExperience,
      
    }

    return controller;
  }




  // Creating Table
  // await db.run(`CREATE TABLE Experience (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL,company_name TEXT NOT NULL, from_date DATE NOT NULL, to_date DATE NOT NULL, description TEXT NOT NULL,icon TEXT NOT NULL )`);

  catch (error) {
    console.log(error)
  }
}

export default initializeDatabase

