import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { ROUTES } from '@/constants';

// Layout Components
import Layout from '@/components/layouts/Layout';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Page Components
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import CoursesPage from '@/pages/courses/CoursesPage';
import AssignmentsPage from '@/pages/assignments/AssignmentsPage';
import SchedulePage from '@/pages/SchedulePage';
import StudySessionsPage from '@/pages/study-sessions/StudySessionsPage';
import ProfilePage from '@/pages/ProfilePage';
import NotFoundPage from '@/pages/NotFoundPage';

// Context Providers
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Public Routes */}
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

                {/* Protected Routes with Layout */}
                <Route element={<Layout />}>
                  <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
                  <Route path={ROUTES.COURSES} element={<CoursesPage />} />
                  <Route
                    path={ROUTES.ASSIGNMENTS}
                    element={<AssignmentsPage />}
                  />
                  <Route path={ROUTES.SCHEDULE} element={<SchedulePage />} />
                  <Route
                    path={ROUTES.STUDY_SESSIONS}
                    element={<StudySessionsPage />}
                  />
                  <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                </Route>

                {/* Catch all route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
