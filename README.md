<div align="center">

# ⏰ Ignite Call

A modern scheduling system built with Next.js and TypeScript.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-Latest-black.svg)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-Latest-2D3748.svg)](https://www.prisma.io/)
[![Ignite UI](https://img.shields.io/badge/Ignite_UI-Latest-00875F.svg)](https://github.com/rocketseat/ignite-ui)

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

---

### 🛠 Development Tools

![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)

---
</div >
## 🚀 Features

- **Modern Authentication**:
  - Cookie-based authentication system
  - Username uniqueness validation
  - Secure user registration flow
- **Smart Forms**:
  - Real-time validation with Zod
  - Form state management with React Hook Form
  - Pre-population of form fields via query parameters
- **Multi-step Registration**:
  - Progress indicator
  - Username claim system
  - Profile information collection
- **API Integration**:
  - RESTful endpoints with Next.js API routes
  - Prisma ORM for database operations
  - Axios for HTTP requests
- **Development Experience**:
  - TypeScript for type safety
  - Biome for code formatting and linting
  - Query logging for debugging
- **UI Components**:
  - Ignite UI component library
  - Responsive design
  - Custom error handling components

---

## 📦 Prerequisites

- Node.js 18+ (LTS version)
- Yarn package manager

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
cp .env.example .env.local
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
├── prisma/          # Database schema and migrations
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   │   ├── ui/     # UI components
│   │   └── forms/  # Form components
│   ├── pages/      # Next.js pages
│   │   ├── api/    # API routes
│   │   └── register/ # Registration flow pages
│   ├── styles/     # Global styles
│   ├── lib/        # Utility functions and configurations
│   └── services/   # External service integrations
├── biome.json      # Biome configuration
├── next.config.js  # Next.js configuration
└── tsconfig.json   # TypeScript configuration
```

---

## 📱 Components

Currently implemented components:

- Multi-step Registration Flow
  - Username claim form
  - Profile information form
  - Error handling components
- Form Components
  - Text input with validation
  - Error message display
  - Submit button with loading state
- Progress Indicators
  - Multi-step progress display
  - Form submission status

---

## 📚 Documentation

API documentation and component usage examples coming soon.

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

## 🔧 Environment Variables

```env
# Database connection (currently using SQLite)
DATABASE_URL="file:./dev.db"

# Add these when implementing authentication
# NEXTAUTH_SECRET="your-secret-here"
# NEXTAUTH_URL="http://localhost:3000"

# Add these when implementing Google Calendar integration
# GOOGLE_CLIENT_ID=""
# GOOGLE_CLIENT_SECRET=""
```

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
