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
    

    //About
    const getAboutDesc = async () => {
      const rows = await db.all("SELECT * FROM about")
      return rows
    }

   


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Query by ID
    

    //About
    const getAboutByID = async (id) => {
      const rows = await db.all(`SELECT id,title, description,image FROM about WHERE id=${id}`)
      return rows
    }

   


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Create New
    
    //About
    const createAbout = async (title, description,image) => {
      const rows = await db.all(`INSERT INTO about (title, description,image) VALUES ("${title}","${description}","${image}")`)
      return rows
    }

    


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Delete
    

    //About
    const deleteAbout = async (id) => {
      const rows = await db.run(`DELETE FROM about WHERE id=${id}`)
      return rows
    }

    

    //Update
    

    //About
    const updateAbout = async (id) => {
      const rows = await db.run(`DELETE FROM about WHERE id=${id}`)
      return rows
    }

   

    const controller = {
      getAboutDesc,
      getAboutByID,
      createAbout,
      deleteAbout,
      updateAbout,
    }

    return controller;
  }




  // Creating Table
  // await db.run(`CREATE TABLE About (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL, description TEXT NOT NULL,image TEXT NOT NULL)`);
  

  catch (error) {
    console.log(error)
  }
}

export default initializeDatabase

