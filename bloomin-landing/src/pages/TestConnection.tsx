import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestConnection = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking connection...');
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const testConnection = async () => {
    try {
      setConnectionStatus('Testing connection...');
      setError(null);
      
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
      console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
      
      // Test auth connection
      const { data: authData, error: authError } = await supabase.auth.getSession();
      
      if (authError) {
        console.error('Auth connection error:', authError);
        setError(`Auth error: ${authError.message}`);
        setConnectionStatus('Connection failed');
        return;
      }
      
      console.log('Auth connection successful:', authData);
      
      // Test database connection
      const { data: dbData, error: dbError } = await supabase
        .from('profiles')
        .select('count')
        .limit(1);
      
      if (dbError) {
        console.error('Database connection error:', dbError);
        setError(`Database error: ${dbError.message}`);
        setConnectionStatus('Connection failed');
        return;
      }
      
      console.log('Database connection successful:', dbData);
      setData(dbData);
      setConnectionStatus('Connection successful');
      
    } catch (err) {
      console.error('Error testing connection:', err);
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
      setConnectionStatus('Connection failed');
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Supabase Connection Test</CardTitle>
          <CardDescription>
            Testing connection to Supabase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-gray-100 rounded">
              <p className="font-medium">Status: {connectionStatus}</p>
            </div>
            
            {error && (
              <div className="p-3 bg-red-50 text-red-700 rounded">
                <p className="font-medium">Error:</p>
                <p className="text-sm">{error}</p>
              </div>
            )}
            
            {data && (
              <div className="p-3 bg-green-50 text-green-700 rounded">
                <p className="font-medium">Data:</p>
                <pre className="text-sm overflow-auto">{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}
            
            <Button onClick={testConnection} className="w-full">
              Test Connection Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestConnection; 