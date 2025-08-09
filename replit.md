# Overview

This is a professional portfolio website for Harsh P. Bajaj, a Senior ML Engineer specializing in production AI systems and infrastructure. The application showcases expertise in Databricks Agent Framework, production ML pipelines, and enterprise-scale AI solutions. The portfolio features a modern, responsive design with animated statistics, project showcases, and professional contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing with simple page navigation
- **Styling**: Tailwind CSS with custom design tokens and shadcn/ui component library for consistent UI
- **Animations**: Custom intersection observer hooks for scroll-triggered animations and animated counters
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Development**: TypeScript with ES modules for modern JavaScript features
- **API Structure**: Route-based organization with middleware for request logging and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user data

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless connection for cloud-based PostgreSQL
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL storage backend
- **User Schema**: Basic user model with username/password authentication structure
- **Validation**: Zod schemas for request validation and type inference

## External Dependencies
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **UI Components**: Radix UI primitives for accessible, unstyled component foundations
- **Icons**: Lucide React for consistent iconography throughout the application
- **Fonts**: Google Fonts (Inter) for professional typography
- **Development Tools**: Replit-specific plugins for runtime error handling and cartographer integration