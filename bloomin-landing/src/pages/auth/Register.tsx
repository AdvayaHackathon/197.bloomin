import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabaseClient';

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signUp, error: authError } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: searchParams.get('role') || 'patient'
  });
  const [loading, setLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>('');

  // Debug Supabase connection
  useEffect(() => {
    const checkSupabaseConnection = async () => {
      try {
        console.log('Checking Supabase connection...');
        console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
        console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
        
        const { data, error } = await supabase.from('profiles').select('count').limit(1);
        
        if (error) {
          console.error('Supabase connection error:', error);
          setDebugInfo(`Connection error: ${error.message}`);
        } else {
          console.log('Supabase connection successful:', data);
          setDebugInfo('Connection successful');
        }
      } catch (err) {
        console.error('Error checking Supabase connection:', err);
        setDebugInfo(`Error: ${err instanceof Error ? err.message : String(err)}`);
      }
    };
    
    checkSupabaseConnection();
  }, []);

  const roles = [
    { value: 'student', label: 'Medical Student' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'patient', label: 'Patient' },
    { value: 'institution', label: 'Medical Institution' },
    { value: 'researcher', label: 'Medical Researcher' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setDebugInfo('Passwords do not match');
      return;
    }

    setLoading(true);
    setDebugInfo('Attempting to register...');

    try {
      console.log('Registering with:', { 
        email: formData.email, 
        name: formData.name, 
        role: formData.role 
      });
      
      await signUp(formData.email, formData.password, formData.name, formData.role);
      setDebugInfo('Registration successful, redirecting...');
      
      // Redirect to dashboard based on role
      navigate(`/dashboard/${formData.role}`);
    } catch (err: any) {
      console.error('Registration error:', err);
      setDebugInfo(`Registration error: ${err.message || 'Unknown error'}`);
      // Error is handled by AuthContext
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleChange = (value: string) => {
    setFormData({
      ...formData,
      role: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>
            Join Bloomin and connect with the medical community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {authError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{authError}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Select
                value={formData.role}
                onValueChange={handleRoleChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Register'}
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <Button
                variant="link"
                className="p-0 h-auto font-semibold"
                onClick={() => navigate(`/auth/login?role=${formData.role}`)}
              >
                Login
              </Button>
            </div>
            
            {/* Debug Information */}
            {debugInfo && (
              <div className="mt-4 p-3 bg-gray-100 rounded text-xs font-mono overflow-auto max-h-40">
                <p className="font-bold">Debug Info:</p>
                <p>{debugInfo}</p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register; 