import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user);
    };
    checkUser();
  }, []);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🚀 L-OS.ai</h1>
          <p className="text-gray-600">Legacy Blueprint OS - Sovereign Infrastructure</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <span className="text-2xl">✅</span>
            <span className="text-gray-700">API Online</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <span className="text-2xl">✅</span>
            <span className="text-gray-700">Database Connected</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <span className="text-2xl">✅</span>
            <span className="text-gray-700">Agents Active</span>
          </div>
        </div>

        {user ? (
          <div className="space-y-4">
            <p className="text-center text-gray-700 font-medium">Welcome, {user.email}!</p>
            <button
              onClick={handleSignOut}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Sign Out
            </button>
            <a
              href="/console"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              📊 Owner's Console
            </a>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : '🔑 Sign In with GitHub'}
          </button>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Features</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ Sovereign Infrastructure</li>
            <li>✓ Autonomous Agents</li>
            <li>✓ Cryptographic Approvals</li>
            <li>✓ Real-time Monitoring</li>
            <li>✓ GitOps Automation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
