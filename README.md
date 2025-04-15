# UCLA Blog POC

A Proof of Concept (POC) demonstrating the integration of a headless CMS (Strapi) with Astro as the frontend renderer, creating an optimized and modern content management stack.

## Overview

This project explores the benefits of combining:

- **Strapi** as a headless CMS for content management
- **Astro** as a modern static site generator for frontend rendering
- **MinIO** for object storage
- **PostgreSQL** for database

The goal is to showcase how this stack can provide:

- Better performance through static site generation
- Flexible content management through a headless CMS
- Modern development experience
- Optimized content delivery

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Astro     │     │   Strapi    │     │   MinIO     │
│  Frontend   │◄────┤   Headless  │◄────┤   Storage   │
│             │     │     CMS     │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ PostgreSQL  │
                    │  Database   │
                    └─────────────┘
```

## Features

- **Content Management**: Strapi provides a flexible and user-friendly interface for content management
- **Static Site Generation**: Astro generates static HTML for optimal performance
- **Markdown Support**: Rich text content with markdown support
- **Image Management**: MinIO integration for efficient image storage and delivery
- **Responsive Design**: Modern, responsive UI built with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ucla-blog-poc.git
   cd ucla-blog-poc
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Update the variables as needed

4. Start the development environment:
   ```bash
   pnpm dev
   ```

## Development

- Frontend: `http://localhost:4321`
- Strapi Admin: `http://localhost:1337/admin`
- MinIO Console: `http://localhost:9001`

## Why This Stack?

This POC demonstrates several advantages of using Strapi with Astro:

1. **Performance**: Astro's static site generation provides excellent performance and SEO benefits
2. **Developer Experience**: Modern tooling and frameworks make development efficient
3. **Content Management**: Strapi offers a powerful and flexible CMS without the overhead of traditional CMS platforms
4. **Scalability**: The headless architecture allows for easy scaling and integration with other services
5. **Cost-Effective**: Static hosting is typically more cost-effective than traditional CMS hosting

## Future Improvements

- [ ] Add authentication and user management
- [ ] Implement content preview functionality
- [ ] Add search functionality
- [ ] Optimize image delivery with a CDN
- [ ] Add analytics integration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Project Structure

- `frontend/`: Astro-based frontend application
- `backend/`: Strapi-based backend application
- `docker-compose.yml`: Docker configuration for PostgreSQL
- `.env`: Environment variables

## Setup Instructions

1. Start the PostgreSQL database:

   ```bash
   docker-compose up -d
   ```
