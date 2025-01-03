# This application is a simple Login application using Okta

#App Setup
		1. Install nodejs from "https://nodejs.org/en/download" (download the latest)
		2. Install VS Code from "https://code.visualstudio.com/" (download for windows)
			a. Install Prettier - Code format extension
			b. Go to File --> Preferences --> Settings --> Serach for Format On Save and check the checkbox.
		3. Install Visual Studio 2022 Community edition from "https://visualstudio.microsoft.com/downloads/"
  		4. In Visual Studio, select create new project and search for react template and create project. This will create the react app with VITE and .net Core API
    		5. Run below commands to install required react libraries
      			npm install react-router-dom
			npm i @auth0/auth0-react
			npm install axios 
			npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
			npm install @mui/x-data-grid
   		6. Add Below nuget packages to your backend application.
     			dotnet add package Microsoft.EntityFrameworkCore
			dotnet add package Microsoft.EntityFrameworkCore.SqlServer
			dotnet add package Microsoft.EntityFrameworkCore.Tools
   		7. Create Database in SQL and run the below script to create clients table: 
     			CREATE TABLE Clients (
    						Id INT IDENTITY PRIMARY KEY,
    						Name NVARCHAR(100) NOT NULL
						);
   		8. In backend appsettings.json change SQL connection string to your local DB
     			ex: "DefaultConnection": "Server=DESKTOP-BT4EUHD\\MSSQLLOCAL;Database=MyLogInApp;Trusted_Connection=True;TrustServerCertificate=True;"

  
