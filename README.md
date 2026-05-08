<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFCA28&height=180&section=header&text=Ignite%20Call&fontSize=42&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Scheduling%20Platform%20with%20Google%20Calendar&descSize=18&descAlignY=52"/>
</div>

## Overview

<div align="center">
  <img src="./docs/screenshot.png" alt="Ignite Call Screenshot" width="100%" />
</div>


<div align="center">

A modern scheduling system built with Next.js and TypeScript, featuring Google Calendar integration, Google Meet automation, and advanced scheduling capabilities.

[<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.0-blue.svg"/>](https://www.typescriptlang.org/)
[<img alt="Next.js" src="https://img.shields.io/badge/Next.js-Latest-black.svg"/>](https://nextjs.org/)
[<img alt="Prisma" src="https://img.shields.io/badge/Prisma-6.3.0-2D3748.svg"/>](https://www.prisma.io/)
[<img alt="Ignite UI" src="https://img.shields.io/badge/Ignite_UI-Latest-00875F.svg"/>](https://github.com/rocketseat/ignite-ui)
[<img alt="NextAuth.js" src="https://img.shields.io/badge/NextAuth.js-Latest-000000.svg"/>](https://next-auth.js.org/)
[<img alt="Google API" src="https://img.shields.io/badge/Google_APIs-4285F4.svg"/>](https://developers.google.com/apis)
[<img alt="Codecov" src="https://img.shields.io/codecov/c/github/rafaumeu/ignitecall-app"/>](https://codecov.io/gh/rafaumeu/ignitecall-app)
[<img alt="Coverage" src="https://codecov.io/gh/rafaumeu/ignitecall-app/branch/main/graph/badge.svg"/>](https://codecov.io/gh/rafaumeu/ignitecall-app)
[<img alt="CI" src="https://github.com/rafaumeu/ignitecall-app/actions/workflows/ci.yml/badge.svg"/>](https://github.com/rafaumeu/ignitecall-app/actions/workflows/ci.yml)
[<img alt="Docker" src="https://img.shields.io/badge/Docker-ready-2496ED.svg"/>](https://docker.com/)
[<img alt="Swagger" src="https://img.shields.io/badge/Swagger_UI-85EA2D.svg"/>](https://swagger.io/)

**🌐 [Live Demo](https://ignitecall-app.vercel.app)** • **📸 [Screenshots](#-screenshots)**

---

<p align="center">
  <a href="https://github.com/rafaumeu/ignitecall-app/generate"><img src="https://img.shields.io/badge/Use_This_Template-FFCA28?style=for-the-badge&logo=github&logoColor=white" alt="Use this template"/></a>
</p>


## 📖 Table of Contents

| [Features](#-features) | [Tech Stack](#-tech-stack) | [Development Tools](#-development-tools) |
|----------------------|---------------------------|------------------------------------------|
| [Prerequisites](#-prerequisites) | [Setup](#️-setup) | [Environment Variables](#-environment-variables) |
| [Project Structure](#️-project-structure) | [Docker Setup](#-docker-setup) | [Contributing](#-contributing) |

---
</div>

## 📸 Screenshots

<!-- Add screenshots of: scheduling interface, calendar view, profile page, time interval configuration -->

| Scheduling | Calendar | Profile |
|:---:|:---:|:---:|
| *Scheduling form with date/time selection* | *Interactive calendar with availability* | *User profile with bio* |

## 🚀 Features

### Google Integration

- **Google Meet Integration**:
  - Automated Google Meet creation for scheduled meetings
  - Direct integration with Google Calendar API
  - Secure OAuth token management and refresh
  - Attendee management and conference data handling

- **Google Calendar Integration**:
  - Seamless calendar synchronization
  - OAuth 2.0 authentication with offline access
  - Automatic token refresh mechanism
  - Event creation and management
  - Calendar scope authorization

### Scheduling System

- **Advanced Scheduling**:
  - Interactive calendar interface with blocked dates
  - Dynamic time slots based on user availability
  - Conflict detection and prevention
  - Past dates blocking
  - Real-time availability updates
  - Multi-step scheduling form with confirmation

### User Management

- **Profile System**:
  - Custom user profiles with bio
  - Username-based routing
  - Profile customization options
  - Cascade relationship configuration
  - Session management with NextAuth.js

### Time Management

- **Availability Control**:
  - Flexible weekly schedule configuration
  - Custom time intervals for each day
  - Automated availability calculation
  - Time zone support with Day.js
  - Conflict prevention system

### Data Handling

- **Efficient Data Management**:
  - React Query for efficient data fetching
  - Optimistic updates
  - Error boundary handling
  - Form validation with Zod
  - Real-time data synchronization

## Tech Stack

| | | |
|:---:|:---:|:---:|
| <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/> | <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/> | <img alt="Prisma" src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"/> |
| <img alt="React Hook Form" src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"/> | <img alt="Axios" src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/> | <img alt="NextAuth.js" src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/> |
| <img alt="React Query" src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white"/> | <img alt="Day.js" src="https://img.shields.io/badge/Day.js-FF5F4C?style=for-the-badge&logo=day.js&logoColor=white"/> | |

## Development Tools

| | | |
|:---:|:---:|:---:|
| <img alt="Biome" src="https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white"/> | <img alt="Zod" src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white"/> | <img alt="Yarn" src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"/> |

---

## 🔄 CI/CD Pipeline

### Continuous Integration

Our CI pipeline automatically runs on every push and pull request:

- **Code Quality Checks**:
  - TypeScript type checking
  - ESLint for code style
  - Biome formatting validation
  - Super-linter for additional checks

- **Testing Strategy**:
  - Unit tests with Vitest
  - Multi-node version testing (16, 18, 20)
  - Automated test runs on pull requests

### Automated Workflows

- **Project Board Automation**:
  - Automatic issue/PR tracking
  - Status updates (Todo → In Progress → Done)
  - Integration with GitHub Projects

- **Pull Request Management**:
  - Automated PR labeling
  - Code review enforcement
  - Branch protection rules

### Workflow Files

- `ci.yml`: Main CI pipeline
- `code-review.yml`: Code quality checks
- `project-automation.yml`: Project board automation
- `labeler.yml`: PR labeling automation

To view the workflow runs, visit the [Actions tab](https://github.com/rafaumeu/ignitecall-app/actions) in the repository.

---

## 📦 Prerequisites

- Node.js 20+ (LTS version)
- Yarn package manager
- Docker and Docker Compose
- Google Cloud Platform account with Calendar and Meet APIs enabled
- PostgreSQL (production) / SQLite (development)

## 🛠️ Setup

1. Clone the repository:

```bash
git clone https://github.com/rafaumeu/ignitecall-app.git
cd ignitecall-app
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
   - Add credentials to .env file

5. Start the development environment:

```bash
docker-compose up -d  # Start PostgreSQL
yarn prisma migrate dev  # Run database migrations
yarn dev  # Start development server
```

## 🐳 Docker Setup

The project uses Docker to provide a complete development environment (approximately 300MB). With a single command, you get both the application and database running:

```yaml
# docker-compose.yml
version: '3'

services:
  postgres:
    image: postgres
    container_name: ignitecall-postgres
    ports:
      - 5432:5432
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=docker
      - POSTGRES_DB=ignitecall
    volumes:
      - pgdata:/var/lib/postgresql/data

  app:
    build: .
    container_name: ignitecall-app
    ports:
      - 3000:3000
    depends_on:
      - postgres
    environment:
      - DATABASE_URL=postgresql://postgres:docker@postgres:5432/ignitecall

volumes:
  pgdata:
```

Quick Start with Docker:

```bash
# Start the entire application
docker-compose up -d

# The application will be available at http://localhost:3000
# PostgreSQL will be available at postgresql://postgres:docker@localhost:5432/ignitecall
```

Features of this setup:

- Complete development environment in a single command
- PostgreSQL database with persistent data
- Optimized production-ready Node.js image
- Automatic database connection
- Hot reload for development
- Total size: ~300MB

## 🔧 Environment Variables

```env
# Database
DATABASE_URL="postgresql://postgres:docker@localhost:5432/ignitecall"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# NextAuth.js
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 🏗️ Project Structure

```bash
ignitecall-app/
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

## 📱 Components

To be documented based on project implementation.

## 📚 API Documentation

Interactive Swagger UI available at `/docs` when running the server.

### Endpoints

| Method | Route | Description |
|---|---|---|
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/profile` | Update authenticated user's bio |
| `GET` | `/api/users/metrics` | Get scheduling metrics for authenticated user |
| `POST` | `/api/users/time-intervals` | Set weekly availability time intervals |
| `GET` | `/api/users/{username}/availability` | Get available time slots for a date |
| `POST` | `/api/users/{username}/schedule` | Book a scheduling slot |
| `GET` | `/api/users/{username}/blocked-dates` | Get blocked dates for a month |

### Generate Typed Client

```bash
yarn generate:client
```

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
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFCA28&height=100&section=footer"/>
  <br/><sub>Built with ❤️ by <a href="https://github.com/rafaumeu">Rafael Zendron</a></sub>
  <br/>
  <a href="https://www.linkedin.com/in/rafael-dias-zendron-528290132/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="https://github.com/rafaumeu"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>
</div>