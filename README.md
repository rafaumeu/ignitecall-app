<div align="center">

# ⏰ Ignite Call

A modern scheduling system built with Next.js and TypeScript, featuring Google Calendar integration and automated scheduling capabilities.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-Latest-black.svg)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-Latest-2D3748.svg)](https://www.prisma.io/)
[![Ignite UI](https://img.shields.io/badge/Ignite_UI-Latest-00875F.svg)](https://github.com/rocketseat/ignite-ui)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-Latest-000000.svg)](https://next-auth.js.org/)
[![Google API](https://img.shields.io/badge/Google_APIs-4285F4.svg)](https://developers.google.com/apis)

---

## 📖 Table of Contents

| [Tech Stack](#-tech-stack) | [Development Tools](#-development-tools) | [Features](#-features) |
|---------------------------|------------------------------------------|------------------------|
| [Prerequisites](#-prerequisites) | [Setup](#️-setup) | [Components](#-components) |
| [Project Structure](#️-project-structure) | [Documentation](#-documentation) | [Environment Variables](#-environment-variables) |
| [License](#️-license) | [Contributing](#-contributing) | |

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

- **Google Meet Integration (New!)**:
  - Automated Google Meet creation for scheduled meetings
  - Integration with Google Calendar API
  - Secure OAuth token management
  - Attendee management and conference data handling

- **Advanced Scheduling System**:
  - Interactive calendar interface with blocked dates
  - Dynamic time slots based on user availability
  - Conflict detection and prevention
  - Past dates blocking
  - Real-time availability updates
  - Multi-step scheduling form with confirmation

- **Google Calendar Integration**:
  - Seamless synchronization with Google Calendar
  - OAuth 2.0 authentication with offline access
  - Automatic token refresh
  - Event creation and management
  - Calendar scope authorization

- **User Management**:
  - Custom user profiles with bio
  - Username-based routing
  - Profile customization
  - Cascade relationship configuration
  - Session management with NextAuth.js

- **Time Management**:
  - Flexible weekly schedule configuration
  - Custom time intervals for each day
  - Automated availability calculation
  - Time zone support with Day.js
  - Conflict prevention system

- **Data Handling**:
  - React Query integration for efficient data fetching
  - Optimistic updates
  - Error boundary handling
  - Form validation with Zod
  - Real-time data synchronization

## 📦 Prerequisites

- Node.js 18+ (LTS version)
- Yarn package manager
- Google Cloud Platform account with Calendar API enabled
- SQLite (for development)

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

4. Configure Google OAuth:
   - Enable Calendar and Meet APIs in Google Cloud Console
   - Set up OAuth consent screen with required scopes
   - Create OAuth credentials and add redirect URIs

5. Run Prisma migrations:

```bash
yarn prisma migrate dev
```

6. Start the development server:

```bash
yarn dev
```

## 🔧 Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# NextAuth.js
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 📱 Components

To be documented based on project implementation.

## 🏗️ Project Structure

```
ignite-call/
├── src/
│   ├── @types/
│   │   └── next-auth.d.ts
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   └── schedule/
│   │   ├── schedule/
│   │   └── register/
│   ├── components/
│   │   ├── Calendar/
│   │   ├── ScheduleForm/
│   │   └── TimeIntervals/
│   ├── lib/
│   │   ├── google/
│   │   ├── auth/
│   │   └── prisma.ts
│   └── styles/
│       └── globals.ts
├── prisma/
│   ├── migrations/
│   └── schema.prisma
└── biome.json
```

## 📚 Documentation

To be added based on project implementation.

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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
