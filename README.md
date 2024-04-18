# Ash-M-Care - A Full Stack MERN Doctor Appoinment App

Ash-M-care is a full stack MERN application that serves as a doctor appointment app. It utilizes the authentication service using node.js and express.js and database service from MongoDB. The app incorporates features like editing/adding/deleting user and doctor, React Router for navigation, Javascript for form handling, Redux Toolkit and React-Redux for state management, and Tailwind CSS for styling and making user friendly and visually appealing.

## Features

- Patient/User Login and Registration using node.js and express.js as backend.
- Using redux toolkit for state management.
- Authentication using JWT from  jsonwebtoken.
- A user can book a doctor by choosing the time slot and then booking by finally doing payment.
- Payment service is implemented with the help of stripe.
- It has a star rating and feedback system integrated for the patients who can rate the doctor and accordingly the doctor's total patients and average rating is calculated.
- Cloudinary is used as a service for easy image storage inside the database.

## Getting Started

Follow the steps below to download and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashmit7465/Ash-M-care.git
   cd Ash-M-Care


2. Install dependencies
    ```bash
    npm install

3. Create an .env file at the root of the project and add your Appwrite API endpoint and project details


4. npm run dev


5. Open your browser and navigate to localhost view the app

## Dependencies (The major ones)

-React
-React Router
-Redux Toolkit
-React-Redux
-TinyMCE
-Tailwind CSS
-Stripe
-Express
-Node
-Mongoose
-JWT

## Project Structure

The project is organized into components, each handling a specific part of the application. 
The structure is as follows:
Frontend:
- `/src/components`: Contains individual components.
- `/src/pages`: Defines different pages of the application.
- `/redux`: Manages Redux store setup and slices.
- `/src/utils`:: Contains some functions that are to be used at several places. 

Backend:
-`/index.js` : The main file of the backend
-`/routes` : The routes of the backend API
-`/controllers` : The actual logic of the functions behind the routes of the REST API
-`/models`: The database schemas of different entities in the project.
-`/data`: contains the databse connection file

## Contribution

Feel free to contribute to the project by creating issues or pull requests. Your contributions are highly appreciated!

## Author

Ashmit Shukla

## Acknowledgements

- MongoDB - For providing authentication, database writing services.
- React - A JavaScript library for building user interfaces.
- Tailwind CSS - A utility-first CSS framework.
- Redux Toolkit - The official, opinionated, batteries-included toolset for efficient Redux development.
- Stripe - For providing payment gateway
