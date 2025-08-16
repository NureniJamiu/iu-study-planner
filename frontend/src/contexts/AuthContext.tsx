import { createContext, useContext, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants';
import type { User, LoginForm, RegisterForm } from '@/types';
import { http } from '@/services';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginForm) => Promise<void>;
  register: (userData: RegisterForm) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async (): Promise<void> => {
      try {
        const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        const savedUser = localStorage.getItem(STORAGE_KEYS.USER_DATA);
        
        if (token && savedUser) {
          const userData = JSON.parse(savedUser);
          setUser(userData);
          
          // Optional: Verify token with server
          // await http.get('/auth/verify');
        }
      } catch (error) {
        console.error('Failed to load user:', error);
        // Clear invalid data
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (credentials: LoginForm): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await http.post<{ user: User; token: string }>('/auth/login', credentials);
      
      const { user: userData, token } = response;
      
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
      
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterForm): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await http.post<{ user: User; token: string }>('/auth/register', userData);
      
      const { user: newUser, token } = response;
      
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(newUser));
      
      setUser(newUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    setUser(null);
  };

  const updateUser = (userData: Partial<User>): void => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
