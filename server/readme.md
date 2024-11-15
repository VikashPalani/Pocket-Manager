## 1st Commit
1. npm init and describe the project while initialising
2. install all necessary packages using npm install
3. Create Folders (models,config,routes,middlewares)
4. Setup the server & test it with a sample get api
5. Create new project in MongoDB Atlas website and get the connection string
6. Add the conenction string in env and using mongoose create the connectDB() and connect it before starting the server
7. Initialise the GIT repository and push it till here 
(In .gitignore add node_modules and .env)

## 2nd Commit
8. Create new js files for routes in Routes Folder and list down the required APIs in apilist.md file
9. Define all the routers in their respective files with a sample GET API for initial testing
10. Import all the routes in app.js(entry point of the project)

## 3rd Commit
11. Define all the models (with their Schema and other validation constraints) and export them
(We include Helper functions while defining Model if needed)
12. Create a validation file under Utils folder and include signup validations
13. Write all the Auth APIs (Signup, login and logut)