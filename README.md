# Barbershop Appointment App Backend

This is the **backend for a barbershop appointment application**, built with **Node.js, TypeScript, Express, and Prisma**, using **MySQL** as the database. It supports multiple user roles, scheduling, barbershop management, services, reviews, payments, notifications, and chat functionality.

---

## 🚀 Features

- **User Management**
  - Users can register and login.
  - All users start as `CLIENT`.
  - Users who create a barbershop become the **admin** of that barbershop.
- **Barbershop Management**
  - Admins can create barbershops, set opening hours, add closed days, and manage services.
  - Each barbershop is linked to its owner (`ownerId`).
- **Appointments**
  - Clients can book appointments with available barbers.
  - Appointment status tracking: `PENDING`, `CONFIRMED`, `CANCELLED`, `DONE`.
- **Services**
  - Barbershops can offer multiple services with duration and price.
- **Payments**
  - Support for online payments with status tracking (`PENDING`, `PAID`, `FAILED`).
- **Reviews**
  - Clients can leave reviews and ratings for barbershops.
- **Notifications**
  - Reminders, confirmations, and cancellations.
- **Chat**
  - Simple messaging between clients and barbers.

---

## 📦 Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Database:** MySQL (using Prisma ORM)
- **Authentication:** JWT / password hashing with `bcrypt`
- **Others:**
  - CORS for cross-origin requests
  - Environment variables via `dotenv`

---

## ⚙️ Project Structure

src/
├── modules/
│ ├── users/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── repositories/
│ │ └── routes.ts
│ ├── barbershops/
│ ├── appointments/
│ └── ... other modules
├── config/
│ ├── prisma.ts
│ └── cors.ts
├── routes/
│ └── index.ts
├── app.ts
└── server.ts

---

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/barbershop-backend.git
cd barbershop-backend

```

2. Install dependencies:

```bash
npm install

```

3. Set up your environment variables in .env:
   DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/barbershop_db"
   PORT=3000

4. Initialize Prisma:

```bash
npx prisma generate
npx prisma migrate dev --name init

```

Start the development server:

```bash
npm run dev

```

The backend should now be running at: http://localhost:3000

## 🛠️ Scripts

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "prisma:migrate": "prisma migrate dev",
  "prisma:generate": "prisma generate"
}

```

## 🔗 Dependencies

Main Dependencies

```bash
npm install express cors dotenv @prisma/client bcrypt

```

Dev Dependencies

```bash
npm install -D typescript ts-node-dev @types/node @types/express @types/cors prisma

```

## 📌 Notes

User Roles: Users start as CLIENT. Admins are determined automatically when a user creates a barbershop (ownerId).
UUID: All IDs are UUIDs for security and scalability.
CORS: Configured to work with React Native, web front-end, and multiple domains.

## Future Features

Online payment integration (Stripe, PayPal, Pix).
More detailed chat functionality (real-time messaging).
Multi-barber scheduling and availability.

## 📫 License

This project is open-source and free to use.
