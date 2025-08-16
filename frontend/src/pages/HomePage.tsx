import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            IU Study Planner
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Plan your academic journey with confidence. Track courses, assignments, 
            and study sessions all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <Card.Header>
              <h3 className="text-lg font-semibold text-gray-900">
                Course Management
              </h3>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-600">
                Keep track of all your courses, credits, and academic progress
                with our intuitive course management system.
              </p>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <h3 className="text-lg font-semibold text-gray-900">
                Assignment Tracking
              </h3>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-600">
                Never miss a deadline again. Organize assignments by priority
                and due date with smart notifications.
              </p>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <h3 className="text-lg font-semibold text-gray-900">
                Study Sessions
              </h3>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-600">
                Plan effective study sessions, track your progress, and
                optimize your learning schedule.
              </p>
            </Card.Content>
          </Card>
        </div>

        <div className="space-x-4">
          <Link to={ROUTES.REGISTER}>
            <Button size="lg">Get Started</Button>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <Button variant="outline" size="lg">Sign In</Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Built with ❤️ for IU students</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
