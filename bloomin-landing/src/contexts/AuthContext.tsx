import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User, AuthChangeEvent, Session } from '@supabase/supabase-js';

export type UserRole = 'patient' | 'doctor' | 'institution' | 'student' | 'researcher';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface PatientProfile extends UserProfile {
  date_of_birth?: string;
  gender?: string;
  address?: string;
  phone?: string;
  medical_history?: string;
  allergies?: string;
}

export interface DoctorProfile extends UserProfile {
  specialization?: string;
  license_number?: string;
  hospital?: string;
  experience_years?: number;
  education?: string;
}

export interface InstitutionProfile extends UserProfile {
  institution_type?: string;
  address?: string;
  phone?: string;
  website?: string;
  license_number?: string;
}

export interface StudentProfile extends UserProfile {
  university?: string;
  field_of_study?: string;
  graduation_year?: number;
  student_id?: string;
}

export interface ResearcherProfile extends UserProfile {
  institution?: string;
  field_of_research?: string;
  publications?: string;
  research_grant?: string;
}

export type AuthUserProfile = PatientProfile | DoctorProfile | InstitutionProfile | StudentProfile | ResearcherProfile;

interface AuthContextType {
  user: User | null;
  profile: AuthUserProfile | null;
  loading: boolean;
  error: string | null;
  signUp: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<AuthUserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<AuthUserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check active sessions and sets the user
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event: AuthChangeEvent, session: Session | null) => {
      if (session?.user) {
        setUser(session.user);
        await fetchProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      // First, get the base profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (profileError) throw profileError;
      if (!profileData) throw new Error('Profile not found');

      // Then, get the role-specific data
      let roleSpecificData = {};
      switch (profileData.role) {
        case 'patient':
          const { data: patientData } = await supabase
            .from('patients')
            .select('*')
            .eq('id', userId)
            .single();
          roleSpecificData = patientData || {};
          break;
        case 'doctor':
          const { data: doctorData } = await supabase
            .from('doctors')
            .select('*')
            .eq('id', userId)
            .single();
          roleSpecificData = doctorData || {};
          break;
        case 'institution':
          const { data: institutionData } = await supabase
            .from('institutions')
            .select('*')
            .eq('id', userId)
            .single();
          roleSpecificData = institutionData || {};
          break;
        case 'student':
          const { data: studentData } = await supabase
            .from('students')
            .select('*')
            .eq('id', userId)
            .single();
          roleSpecificData = studentData || {};
          break;
        case 'researcher':
          const { data: researcherData } = await supabase
            .from('researchers')
            .select('*')
            .eq('id', userId)
            .single();
          roleSpecificData = researcherData || {};
          break;
      }

      setProfile({ ...profileData, ...roleSpecificData } as AuthUserProfile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while fetching profile');
    }
  };

  const signUp = async (email: string, password: string, name: string, role: UserRole) => {
    try {
      setError(null);
      setLoading(true);
      
      console.log('Starting signup process with:', { email, name, role });
      
      // Sign up the user with Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role,
          },
        },
      });
      
      console.log('Signup response:', { authData, authError });
      
      if (authError) {
        console.error('Supabase auth error:', authError);
        setError(`Auth error: ${authError.message || 'Failed to sign up'}`);
        throw authError;
      }
      
      if (!authData.user) {
        console.error('No user data returned from signup');
        setError('No user data returned from signup');
        throw new Error('No user data returned from signup');
      }
      
      console.log('User created successfully:', authData.user.id);
      
      // The profile will be created automatically by the database trigger
      // We'll fetch it here to make sure it exists
      try {
        await fetchProfile(authData.user.id);
        console.log('Profile fetched successfully');
      } catch (profileError) {
        console.error('Error fetching profile after signup:', profileError);
        // Don't throw here, as the user is already created
      }
      
    } catch (error: any) {
      console.error('Registration error:', error);
      setError(`Registration error: ${error.message || 'An unexpected error occurred during registration'}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      if (data.user) {
        setUser(data.user);
        await fetchProfile(data.user.id);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during sign in');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setProfile(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during sign out');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: Partial<AuthUserProfile>) => {
    try {
      setLoading(true);
      setError(null);
      
      if (!user) throw new Error('No user logged in');
      
      // Update base profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          name: data.name,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);
        
      if (profileError) throw profileError;
      
      // Update role-specific data
      let roleSpecificTable = '';
      switch (profile?.role) {
        case 'patient':
          roleSpecificTable = 'patients';
          break;
        case 'doctor':
          roleSpecificTable = 'doctors';
          break;
        case 'institution':
          roleSpecificTable = 'institutions';
          break;
        case 'student':
          roleSpecificTable = 'students';
          break;
        case 'researcher':
          roleSpecificTable = 'researchers';
          break;
      }
      
      if (roleSpecificTable) {
        const { error: roleError } = await supabase
          .from(roleSpecificTable)
          .update({
            ...data,
            updated_at: new Date().toISOString(),
          })
          .eq('id', user.id);
          
        if (roleError) throw roleError;
      }
      
      // Refresh profile
      await fetchProfile(user.id);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred while updating profile');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    profile,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 