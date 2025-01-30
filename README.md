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

- **User Profiles**:
  - Customizable user bio
  - Profile avatar display and management
  - Profile page customization
  - API endpoints for profile updates
  - Dynamic profile preview

- **User Registration Flow**:
  - Multi-step registration process
  - Username claim system with validation
  - Calendar connection interface
  - Profile information collection
  - Time intervals management for availability

- **Time Management**:
  - Define working hours for each day of the week
  - Minimum 1-hour interval validation
  - Time conversion and validation system
  - Flexible scheduling options
  - Advanced interval management

- **Google Integration**:
  - OAuth2 authentication
  - Calendar API connection
  - Automatic scope verification
  - Error handling for missing permissions
  - Seamless calendar synchronization

- **API Architecture**:
  - Next.js API routes
  - Prisma ORM integration
  - Axios HTTP client
  - Type-safe endpoints
  - Cookie-based authentication
  - Robust error handling

- **UI/UX**:
  - Responsive design
  - Loading states
  - Error handling
  - Progress indicators
  - Form validation with Zod
  - Modern component architecture

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

3. Set up your environment variables:

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
│   │   └── next-auth.d.ts       # NextAuth type definitions
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/           # Authentication endpoints
│   │   │   ├── users/          # User management endpoints
│   │   │   └── profile/        # Profile management endpoints
│   │   ├── register/          # Registration flow pages
│   │   │   └── time-intervals/ # Time management pages
│   │   ├── profile/           # User profile pages
│   │   └── _app.page.tsx      # Next.js app configuration
│   ├── components/
│   │   ├── ConnectBox/        # Calendar connection component
│   │   ├── TimeIntervals/     # Time management components
│   │   └── Profile/           # Profile-related components
│   ├── lib/
│   │   ├── auth/
│   │   │   └── prisma-adapter.ts # Custom Prisma adapter for NextAuth
│   │   ├── axios.ts             # Axios instance configuration
│   │   └── prisma.ts           # Prisma client instance
│   └── styles/
│       └── globals.ts         # Global styles
├── prisma/
│   ├── migrations/           # Database migrations
│   ├── schema.prisma        # Database schema
│   └── dev.db              # SQLite database
└── biome.json            # Biome configuration
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
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

---

## 📱 Components

Currently implemented:

- **Authentication**
  - Google OAuth sign-in
  - Session management
  - Protected routes
  - Calendar permissions handling
  - NextPageContext support

- **Profile Management**
  - Bio field customization
  - Avatar management
  - Profile preview
  - Profile update API
  - User data persistence

- **Registration Flow**
  - Username claim form with validation
  - Calendar connection
  - Profile setup
  - Time intervals configuration
  - Multi-step validation

- **Form Components**
  - React Hook Form integration
  - Zod validation schemas
  - Error handling
  - Loading states
  - Field arrays for time intervals
  - Dynamic form updates

- **Layout**
  - Responsive design
  - Progress indicators
  - Status feedback
  - Multi-step navigation
  - Modern UI components

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

<img src="https://github.com/rafaumeu.png" width="100" height="100" style="border-radius: 50%;">

### Built with 💜 by Rafael Zendron

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-dias-zendron-528290132/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rafaumeu)

</div>
