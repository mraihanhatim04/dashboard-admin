# Dashboard Admin

A modern, production-ready admin dashboard built with Next.js, TypeScript, and Tailwind CSS. This application demonstrates advanced UI layout, table management, filtering, and chart integration.

## Features

### 🔐 Authentication
- Login system with role-based access control
- Protected routes for authenticated users
- Role-based navigation (Admin/User)

### 📊 Dashboard Overview
- **KPI Cards**: Display key metrics (Total Users, Revenue, Orders)
- **Line Chart**: Visualize user growth over time
- **Bar Chart**: Compare revenue across different periods

### 📋 Data Table Management
- **Paginated Table**: Efficiently handle large datasets
- **Search**: Real-time search by name or email
- **Filtering**: Filter users by status (Active, Inactive, Pending)
- **Sorting**: Sortable table columns
- **Loading States**: Skeleton loaders for better UX
- **Empty States**: User-friendly empty state UI

### 🎨 Sidebar Layout
- **Collapsible Sidebar**: Toggle sidebar visibility
- **Active Route Highlight**: Visual indication of current page
- **Responsive Navigation**: Mobile-friendly navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix UI primitives)
- **State Management**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **HTTP Client**: Axios
- **Charts**: Recharts
- **Date Formatting**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login Credentials

The application uses mock authentication. You can login with any credentials:
- **Admin Role**: Use an email containing "admin" (e.g., `admin@example.com`)
- **User Role**: Use any other email (e.g., `user@example.com`)
- **Password**: Any password will work

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   │   ├── page.tsx       # Dashboard overview
│   │   ├── users/         # Users management page
│   │   └── layout.tsx     # Dashboard layout with sidebar
│   ├── login/             # Login page
│   ├── layout.tsx         # Root layout
│   ├── providers.tsx      # React Query provider
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── sidebar.tsx       # Sidebar navigation
│   └── protected-route.tsx # Route protection
├── lib/                  # Utility functions
│   ├── api.ts            # Axios configuration
│   ├── api-client.ts     # API client functions
│   └── utils.ts          # Utility functions
└── store/                # State management
    └── auth-store.ts     # Authentication store (Zustand)
```

## Key Features Implementation

### State Management
- **Zustand**: Used for authentication state with persistence
- **React Query**: Handles server state, caching, and data fetching

### API Integration
- Mock API client simulates real API calls
- Type-safe API responses
- Optimistic UI updates where applicable

### Error Handling
- Error boundaries implemented
- Graceful error states in UI

### Performance
- React Query caching for optimized data fetching
- Skeleton loaders for perceived performance
- Optimized re-renders with proper React patterns

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
