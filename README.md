<div align="center">

# ⏰ Ignite Call

A modern scheduling system built with Next.js and TypeScript, featuring Google Calendar integration and automated scheduling capabilities.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-Latest-black.svg)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-Latest-2D3748.svg)](https://www.prisma.io/)
[![Ignite UI](https://img.shields.io/badge/Ignite_UI-Latest-00875F.svg)](https://github.com/rocketseat/ignite-ui)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-Latest-000000.svg)](https://next-auth.js.org/)

---

## 📖 Table of Contents

| [⚡ Tech Stack](#⚡-tech-stack) | [🛠 Development Tools](#🛠-development-tools) | [🚀 Features](#🚀-features) |
|--------------------------------|-----------------------------------------------|----------------------------|
| [📦 Prerequisites](#📦-prerequisites) | [🛠️ Setup](#🛠️-setup) | [📱 Components](#📱-components) |
| [🏗️ Project Structure](#🏗️-project-structure) | [📚 Documentation](#📚-documentation) | [🔧 Environment Variables](#🔧-environment-variables) |
| [🛡️ License](#🛡️-license) | [🤝 Contributing](#🤝-contributing) | |

---

### ⚡ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Day.js](https://img.shields.io/badge/Day.js-FF5F4C?style=for-the-badge&logo=day.js&logoColor=white)

---

### 🛠 Development Tools

![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)

---
</div>

## 🚀 Features

- **Advanced Authentication**:
  - NextAuth.js integration with Google provider
  - Custom Prisma adapter for NextAuth with NextPageContext support
  - Session management and user data persistence
  - Google Calendar scope authorization
  - Username uniqueness validation

- **Scheduling System**:
  - Interactive calendar interface with date selection
  - Dynamic time slots based on user availability
  - Blocked dates and times management
  - Past dates blocking
  - Real-time availability updates
  - User-specific scheduling pages

- **Calendar Management**:
  - Integration with Google Calendar
  - Dynamic calendar display with weeks and days
  - Blocked days visualization
  - Available times calculation
  - Time zone support with Day.js
  - Error handling for calendar operations

- **User Profiles**:
  - Customizable user bio
  - Profile avatar display
  - Dynamic profile preview
  - API endpoints for profile updates
  - Username-based routing

- **Time Management**:
  - Weekly schedule configuration
  - Custom time intervals for each day
  - Minimum 1-hour interval validation
  - Automatic time conversion
  - Blocked weekdays management

- **Data Management**:
  - React Query integration for data fetching
  - Optimistic updates
  - Cache management
  - Real-time data synchronization
  - Error boundary handling

- **Form Handling**:
  - React Hook Form integration
  - Zod validation schemas
  - Dynamic form updates
  - Error messages display
  - Field array support for time intervals

- **UI/UX**:
  - Responsive design
  - Loading states
  - Error feedback
  - Progress indicators
  - Modern component architecture
  - Tailwind CSS styling

---

## 📦 Prerequisites

- Node.js 18+ (LTS version)
- Yarn package manager
- Google Cloud Platform account (for Calendar API)
- SQLite (for development)

---

## 🛠️ Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ignite-call.git
cd ignite-call
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Run Prisma migrations:

```bash
yarn prisma migrate dev
```

5. Start the development server:

```bash
yarn dev
```

---

## 🏗️ Project Structure

```
ignite-call/
├── src/
│   ├── @types/
│   │   └── next-auth.d.ts        # NextAuth type definitions
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/            # Authentication endpoints
│   │   │   ├── users/           # User management endpoints
│   │   │   └── availability/    # Availability management endpoints
│   │   ├── schedule/           # Scheduling pages
│   │   ├── register/           # Registration flow pages
│   │   └── _app.page.tsx       # Next.js app configuration
│   ├── components/
│   │   ├── Calendar/           # Calendar components
│   │   ├── TimeIntervals/      # Time management components
│   │   └── ScheduleForm/       # Scheduling form components
│   ├── lib/
│   │   ├── auth/              # Authentication utilities
│   │   ├── dayjs.ts          # Day.js configuration
│   │   └── prisma.ts         # Prisma client instance
│   └── styles/
│       └── globals.ts         # Global styles
├── prisma/
│   ├── migrations/           # Database migrations
│   └── schema.prisma        # Database schema
└── biome.json             # Biome configuration
```

---

## 🔧 Environment Variables

```env
# Prisma
DATABASE_URL="file:./dev.db"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# NextAuth.js
# Generate a secure secret using: openssl rand -base64 32
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Setting up Google OAuth

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure the OAuth consent screen:
   - Add authorized domains
   - Add scopes for Google Calendar API
6. Create OAuth 2.0 credentials:
   - Set authorized JavaScript origins (e.g., `http://localhost:3000`)
   - Set authorized redirect URIs (e.g., `http://localhost:3000/api/auth/callback/google`)
7. Copy the generated Client ID and Client Secret to your .env file

### Generating NextAuth Secret

Run this command to generate a secure secret for NextAuth:

```bash
openssl rand -base64 32
```

Copy the output to your .env file as NEXTAUTH_SECRET

## 📱 Latest Updates

Recent implementations based on the latest commits:

- **Calendar Enhancements**:
  - Blocked days visualization
  - Past dates blocking
  - Dynamic availability updates
  - Week and day display optimization

- **Availability Management**:
  - New API endpoints for availability
  - Real-time blocked dates updates
  - Error handling improvements
  - Scheduling validation

- **Data Fetching**:
  - React Query integration
  - Optimistic updates
  - Cache management
  - Error handling improvements

- **Form Improvements**:
  - Enhanced validation
  - Dynamic updates
  - Better error feedback
  - Loading states

---

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
Made with ❤️ by Rafael Dias Zendron
</div>
<div align="center">
<img src="https://github.com/rafaumeu.png" width="100" height="100" style="border-radius: 50%;">

### Built with 💜 by Rafael Zendron

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-dias-zendron-528290132/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rafaumeu)

</div>
