# Inn Management Application

This project is an **Inn Management Application** designed to streamline the management of online bookings and reservations across various platforms like **MakeMyTrip**, **Agoda**, and **OYO**. The application serves as a central hub, where bookings made on these third-party platforms are aggregated, allowing users to manage payments, confirmations, ID verification, and cancellation processes all in one place.

Through this platform, inn owners and managers can efficiently track and process bookings, improving overall operational efficiency and user experience. The goal is to provide an easy-to-use interface for handling the entire booking lifecycle, from initial reservation to final check-out.

## Features & Functionalities:
- **Online Booking Integration**: Seamlessly pulls in bookings made on popular travel platforms (MakeMyTrip, Agoda, OYO) into the application, offering a consolidated view of all reservations.
- **Payment Management**: Facilitates the payment process for bookings directly within the application.
- **Booking Confirmation & ID Verification**: Automatically confirms bookings and verifies user identification details as part of the reservation process.
- **Booking Cancellation**: Enables cancellation of bookings directly through the platform, managing refunds and status updates.

---

## Modules:

### 1. Login & Dashboard
- **Login**: Secure user authentication, allowing access to the application based on credentials.
- **Dashboard**: 
  - Displays a comprehensive financial overview of the inn's revenue.
  - Shows income generated from bookings, cancellations, and payments.
  - Provides quick insights into the inn's performance and key metrics.

### 2. Booking
- **Booking Overview**: 
  - Displays all online bookings from various platforms (MakeMyTrip, Agoda, OYO).
  - Allows the user to view detailed information about each booking.
- **Manage Bookings**: 
  - Enable users to perform actions such as booking confirmation, modification, or cancellation.
  - Tracks the current status of each reservation (e.g., pending, confirmed, cancelled).

### 3. Make Booking
- **Create New Booking**: 
  - Facilitates new reservations for guests.
  - Allows users to input essential details like guest information, room preferences, and dates.
- **Centralized Booking Management**: 
  - All new bookings are stored in the system for easy management and tracking.
  - Integrates with room availability and pricing details for accurate bookings.

### 4. User
- **User Profiles**: 
  - Manages individual user profiles with details like name, contact info, and booking history.
  - Allows users to update their personal preferences and contact details.
- **Admin Features**: 
  - Admins can manage user accounts, including activating/deactivating accounts and modifying user details.
  - Helps track user activity and preferences for better service.

### 5. Roles
- **Role Management**: 
  - Allows the creation and assignment of different roles within the application (e.g., Admin, Manager, Staff).
  - Assigns specific access rights and permissions based on roles.
- **Access Control**: 
  - Ensures that users only have access to the features they need, enhancing security and operational efficiency.

### 6. Business Unit
- **Property Profiles**: 
  - Defines and manages each property or location the inn owns or operates.
  - Each business unit can have unique settings, pricing models, and room availability.
- **Multi-Property Support**: 
  - Suitable for managing multiple properties under a single system, making it ideal for larger inn chains or franchises.

### 7. Floor & Rooms
- **Room Profiles**: 
  - Defines room types, features, and specifications (e.g., single, double, suite).
  - Allows users to set room pricing, availability, and amenities.
- **Floor Configuration**: 
  - Manages the layout of floors and room arrangements, ensuring availability reflects the actual setup of the inn.
  - Room availability is automatically updated when bookings are made or cancelled.

---

With this application, inn managers can significantly reduce the complexity of handling multiple booking sources and ensure seamless customer experiences from check-in to check-out.


---

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2. **Install Dependencies**:
    ```bash
    cd your-repository-name
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Stay in touch

- Author - Antony Joseph Raj
- Gmail: antonyjo113@gamil.com
- LinkedIn - (https://www.linkedin.com/in/antony-joseph-raj-9a1a93185/)

## License

This project is licensed under the MIT License.
