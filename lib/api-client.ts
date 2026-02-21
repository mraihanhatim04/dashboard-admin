import api from './api'

export interface DashboardStats {
  totalUsers: number
  totalRevenue: number
  totalOrders: number
  userGrowth: Array<{ date: string; users: number }>
  revenueComparison: Array<{ month: string; revenue: number }>
}

export interface TableData {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive' | 'pending'
  role: string
  createdAt: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Mock data generators
const generateMockUsers = (count: number): TableData[] => {
  const statuses: TableData['status'][] = ['active', 'inactive', 'pending']
  const roles = ['Admin', 'User', 'Manager', 'Viewer']
  
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: statuses[i % statuses.length],
    role: roles[i % roles.length],
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
  }))
}

const generateMockStats = (): DashboardStats => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const userGrowth = Array.from({ length: 6 }, (_, i) => ({
    date: months[i],
    users: Math.floor(Math.random() * 500) + 100
  }))
  
  const revenueComparison = Array.from({ length: 6 }, (_, i) => ({
    month: months[i],
    revenue: Math.floor(Math.random() * 50000) + 10000
  }))
  
  return {
    totalUsers: 1248,
    totalRevenue: 45678,
    totalOrders: 342,
    userGrowth,
    revenueComparison
  }
}

// API functions
export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return generateMockStats()
  },
  
  getUsers: async (
    page: number = 1,
    pageSize: number = 10,
    search?: string,
    status?: string
  ): Promise<PaginatedResponse<TableData>> => {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    let users = generateMockUsers(100)
    
    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase()
      users = users.filter(
        u => 
          u.name.toLowerCase().includes(searchLower) ||
          u.email.toLowerCase().includes(searchLower)
      )
    }
    
    // Apply status filter
    if (status && status !== 'all') {
      users = users.filter(u => u.status === status)
    }
    
    const total = users.length
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginatedUsers = users.slice(start, end)
    
    return {
      data: paginatedUsers,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    }
  }
}
