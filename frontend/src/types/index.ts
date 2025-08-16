// Core types for the IU Study Planner application

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  description?: string;
  semester?: string;
  year?: number;
  completed: boolean;
  grade?: Grade;
  createdAt: Date;
  updatedAt: Date;
}

export interface StudyPlan {
  id: string;
  userId: string;
  name: string;
  description?: string;
  courses: Course[];
  targetGraduation: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Schedule {
  id: string;
  courseId: string;
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  location?: string;
  instructor?: string;
  type: ClassType;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  dueDate: Date;
  completed: boolean;
  priority: Priority;
  estimatedHours?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface StudySession {
  id: string;
  courseId?: string;
  assignmentId?: string;
  title: string;
  description?: string;
  startTime: Date;
  duration: number; // in minutes
  completed: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Enums
export enum Grade {
  A_PLUS = 'A+',
  A = 'A',
  A_MINUS = 'A-',
  B_PLUS = 'B+',
  B = 'B',
  B_MINUS = 'B-',
  C_PLUS = 'C+',
  C = 'C',
  C_MINUS = 'C-',
  D_PLUS = 'D+',
  D = 'D',
  F = 'F',
}

export enum DayOfWeek {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export enum ClassType {
  LECTURE = 'lecture',
  SEMINAR = 'seminar',
  LAB = 'lab',
  TUTORIAL = 'tutorial',
  WORKSHOP = 'workshop',
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CourseForm {
  code: string;
  name: string;
  credits: number;
  description?: string;
  semester?: string;
  year?: number;
}

export interface AssignmentForm {
  title: string;
  description?: string;
  dueDate: string; // ISO date string
  priority: Priority;
  estimatedHours?: number;
  courseId: string;
}

export interface StudySessionForm {
  title: string;
  description?: string;
  startTime: string; // ISO date string
  duration: number;
  courseId?: string;
  assignmentId?: string;
}

// Component Props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;
