import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const { role } = useParams();

  useEffect(() => {
    // If no user is logged in, redirect to login
    if (!user) {
      navigate('/auth/login');
      return;
    }

    // If the user's role doesn't match the URL role parameter, redirect to the correct dashboard
    if (profile && profile.role !== role) {
      navigate(`/dashboard/${profile.role}`);
    }
  }, [user, profile, role, navigate]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!user || !profile) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {profile.name}!</CardTitle>
            <CardDescription>
              You are logged in as a {profile.role}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Your Profile</h3>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Role: {profile.role}</p>
              </div>

              <Button
                variant="destructive"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard; 