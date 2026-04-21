import { useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom'; // or your navigation method

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // Successfully logged in
        navigate('/');
      } else {
        // Handle error
        navigate('/login');
      }
    });
  }, [navigate]);

  return <div>Completing login...</div>;
}