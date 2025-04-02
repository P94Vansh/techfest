# Engineers Day Event Registration

This project is an **Engineers Day event registration** and details platform, developed for **UIT college at Uttaranchal University**. It allows users to register and view event-specific information. The platform was built using **Next.js** and hosted on **Vercel** with **PostgreSQL** as the database, and **Cloudflare** was used for domain hosting.

## Features

- **User Registration**: Allows participants to sign up for Engineers Day events.
- **Event Details**: Users can view event information such as date, time, venue, and agenda.
- **Participant Dashboard**: Each user has access to a personalized dashboard displaying their registered events and event details.
- **Admin Dashboard**: Allows organizers to manage events, view registered participants, and update event details.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: Vercel (for hosting the Next.js backend)
- **Database**: PostgreSQL
- **Domain Hosting**: Cloudflare

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/engineers-day-event-registration.git
   cd engineers-day-event-registration
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Set up your `.env` file with the following variables:
   ```plaintext
   DATABASE_URL=<your_postgresql_database_url>
   NEXT_PUBLIC_API_URL=<your_api_url>
   ```

4. **Run the Project**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Register for an Event**
   - Users can create an account and register for events by providing necessary details.

2. **View Event Information**
   - Participants can view event schedules, location, and specific event details on the dashboard.

3. **Manage Events (Admin)**
   - Admin users have access to add new events, edit details, and manage registrations.

## Limitations

- No **Google sign-in** is implemented for user authentication.

## Contributing

Contributions are welcome! Feel free to submit a pull request for any bug fixes or enhancements.

## License

This project is licensed under the MIT License.
