# Vehicle System Management

Vehicle System Management is a comprehensive web application for managing vehicle inventory. It provides functionality for adding, viewing, editing, and deleting vehicles in a user-friendly interface. The system allows users to keep track of their vehicle inventory and manage their vehicle listings efficiently.

## Features

- View all vehicles: Browse through the list of existing vehicles in the system.
- Add new vehicles: Add new vehicles to the inventory by providing relevant details.
- Edit vehicle details: Update the information of existing vehicles.
- Delete vehicles: Remove vehicles from the inventory.
- Contact information: Access contact details to get in touch with the system administrators.
- About page: Learn more about the Vehicle System Management application.

## Technologies Used

- Frontend: React, Redux, React Router, Axios, ReactDOM
- Backend: Node.js, srever.js
- Database: JSON (db.json)

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the frontend directory: `cd frontend`
3. Install frontend dependencies: `npm install`
4. Start the frontend development server: `npm start`
5. Open a new terminal window/tab
6. Navigate to the backend directory: `cd backend`
7. Install backend dependencies: `npm install`
8. Start the backend server: `npm start`

The frontend server will run on `http://localhost:3000`, and the backend server will run on `http://localhost:3001`.

## Usage

- Access the application by visiting `http://localhost:3000` in your web browser.
- Use the navigation links to explore different sections of the application.
- Follow the provided forms and buttons to perform various operations on the vehicle inventory.
- The frontend communicates with the backend using Axios to fetch and send data.
- Redux is used for state management in the frontend, providing a centralized store for managing vehicle data.
- React Router is used for client-side routing, enabling navigation between different pages.
- The db.json file serves as the backend database and provides the following operations:
  - GET `/api/vehicles`: Retrieves the list of vehicles.
  - POST `/api/vehicles`: Adds a new vehicle to the inventory.
  - PUT `/api/vehicles/:id`: Updates the details of a specific vehicle.
  - DELETE `/api/vehicles/:id`: Deletes a vehicle from the inventory.

Make sure to have both the frontend and backend servers running to ensure proper functionality.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
