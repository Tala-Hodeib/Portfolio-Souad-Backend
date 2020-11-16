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
      const rows = await db.all("SELECT id, name, label, description FROM skills")
      return rows
    }

    //Experience
    const getExperienceList = async () => {
      const rows = await db.all("SELECT id, company_name, from_date, to_date, description FROM experience")
      return rows
    }

    //Projects
    const getProjetctsList = async () => {
      const rows = await db.all("SELECT id, project_name, project_github_link, project_demo_link, project_image, description FROM projects")
      return rows
    }

    //About
    const getAboutDesc = async () => {
      const rows = await db.all("SELECT id, description FROM about")
      return rows
    }

    //Contact Links
    const getContactLinks = async () => {
      const rows = await db.all("SELECT id, facebook_link, youtube_link, twitter_link, email FROM contact_links")
      return rows
    }


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Query by ID
    //SKills
    const getSkillsByID = async (id) => {
      const rows = await db.all(`SELECT id, name, label, description FROM skills WHERE id=${id}`)
      return rows
    }

    //Experience
    const getExperienceByID = async (id) => {
      const rows = await db.all(`SELECT id, company_name, from_date, to_date, description FROM experience WHERE id=${id}`)
      return rows
    }

    //Projects
    const getProjectByID = async (id) => {
      const rows = await db.all(`SELECT id, project_name, project_github_link, project_demo_link, project_image, description FROM projects WHERE id=${id}`)
      return rows
    }

    //About
    const getAboutByID = async (id) => {
      const rows = await db.all(`SELECT id, description FROM about WHERE id=${id}`)
      return rows
    }

    //Contact Links
    const getLinkByID = async (id) => {
      const rows = await db.all(`SELECT id, facebook_link, youtube_link, twitter_link, email FROM contact_links WHERE id=${id}`)
      return rows
    }


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Create New
    //Skill
    const createSkill = async (props) => {
      const { name, label, description } = props
      const rows = await db.run(`INSERT INTO skills (name, label, description) VALUES (${name}, ${label}, ${description})`)
      return rows
    }

    //Experience
    const createExperience = async (props) => {
      const { company_name, from_date, to_date, description } = props
      const rows = await db.all(`INSERT INTO experience (company_name, from_date, to_date, description) VALUES (${company_name}, ${from_date}, ${to_date}, ${description})`)
      return rows
    }

    //Project
    const createProject = async (props) => {
      const { project_name, project_github_link, project_demo_link, project_image, description } = props
      const rows = await db.all(`INSERT INTO projects (project_name, project_github_link, project_demo_link, project_image, description) VALUES (${project_name}, ${project_github_link}, ${project_demo_link}, ${project_image}, ${description})`)
      return rows
    }
    //About
    const createAbout = async (props) => {
      const { description } = props
      const rows = await db.all(`INSERT INTO about (description) VALUES (${description})`)
      return rows
    }

    //Link
    const createLink = async (props) => {
      const { facebook_link, youtube_link, twitter_link, email } = props
      const rows = await db.all(`INSERT INTO contact_links (facebook_link, youtube_link, twitter_link, email) VALUES (${facebook_link}, ${youtube_link}, ${twitter_link}, ${email})`)
      return rows
    }


    /*------------------------------------------------------------------*/
    /*------------------------------------------------------------------*/


    //Delete
    //SKills
    const deleteSkill = async (id) => {
      const rows = await db.run(`DELETE FROM table_name WHERE id=${id}`)
      return rows
    }

    //Experience
    const deleteExperience = async (id) => {
      const rows = await db.run(`DELETE FROM table_name WHERE id=${id}`)
      return rows
    }

    //Projects
    const deleteProject = async (id) => {
      const rows = await db.run(`DELETE FROM table_name WHERE id=${id}`)
      return rows
    }

    //About
    const deleteAbout = async (id) => {
      const rows = await db.run(`DELETE FROM table_name WHERE id=${id}`)
      return rows
    }

    //Contact Links
    const deleteLink = async (id) => {
      const rows = await db.run(`DELETE FROM table_name WHERE id=${id}`)
      return rows
    }

    const controller = {
      getSkillsList,
      getExperienceList,
      getProjetctsList,
      getAboutDesc,
      getContactLinks,
      getSkillsByID,
      getExperienceByID,
      getProjectByID,
      getAboutByID,
      getLinkByID,
      createSkill,
      createExperience,
      createProject,
      createAbout,
      createLink,
      deleteSkill,
      deleteExperience,
      deleteProject,
      deleteAbout,
      deleteLink
    }

    return controller;
  }




  // Creating Table
  // await db.run(`CREATE TABLE About (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT NOT NULL)`);
  // await db.run(`CREATE TABLE Skills (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, label TEXT NOT NULL, description TEXT NOT NULL)`);
  // await db.run(`CREATE TABLE Experience (id INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT NOT NULL, from_date DATE NOT NULL, to_date DATE NOT NULL, description TEXT NOT NULL)`);
  // await db.run(`CREATE TABLE Projects (id INTEGER PRIMARY KEY AUTOINCREMENT, project_name TEXT NOT NULL, project_github_link TEXT NOT NULL, project_demo_link TEXT NOT NULL, project_image TEXT NOT NULL, description TEXT NOT NULL)`);
  // await db.run(`CREATE TABLE Contact_Links (id INTEGER PRIMARY KEY AUTOINCREMENT, facebook_link TEXT NOT NULL, twitter_link TEXT NOT NULL, youtube_link TEXT NOT NULL, email TEXT NOT NULL)`);}

  catch (error) {
    console.log(error)
  }
}

export default initializeDatabase

