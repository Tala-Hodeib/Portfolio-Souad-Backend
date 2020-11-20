import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


const initializeDatabase = async () => {
    try {
      const db = await open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
      })
    
      const gethomeList = async () => {
        
        const rows = await db.all("SELECT id AS id, title, description,image FROM home")
        //rows.forEach( ({ id, title, description }) => returnString+=`[id:${id}] - ${title} - ${description}` )
        return rows
      }
      const gethomeById = async (id) => {
        const rows = await db.all(`SELECT id AS id, title, description,image FROM home WHERE id = ${id}`)
        return rows
        
      }
      const Createhome = async () => {
        
      }
      const Edithome = async () => {
        
      }
      const Deletehome = async () => {

      }
      const controller = {
        gethomeList,
        gethomeById,
        Createhome,
        Edithome,
        Deletehome
      }
      return controller;

      //Create home TABLE
      //await db.run(`CREATE TABLE home (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL,image TEXT NOT NULL);`);

    
    
    
    
    
    
    
    
    
    
    
    
    }catch (error) {
        console.log(error)
      }
    }
    export default initializeDatabase;