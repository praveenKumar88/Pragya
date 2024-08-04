'use client';

import { useSupabase } from '@/components/supabase/provider';
import Brand from '@/components/ui/Brand';
import { useState } from 'react';
import { GoogleProvider } from '../AuthProviderButtons';

export default () => {
  const { supabase } = useSupabase();
  const [isGoogleAuthLoad, setGoogleAuthLoad] = useState<boolean>(false);

  const handleGoogleLogin = async () => {
    setGoogleAuthLoad(true);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `https://zoaubybcjyhuxeuceucj.supabase.co/auth/v1/callback`,
      },
    });
  };

  return (
    <section>
      <div className="h-screen px-4 w-full flex items-center justify-center">
        <div className="text-center max-w-xl">
          <div className="space-y-3">
            <Brand w="180" h="50" className="mx-auto" />
            <h1 className="text-slate-50 text-2xl font-semibold">Log in to your account</h1>
            <p className="text-slate-300 whitespace-pre-wrap mb-2">We use GitHub, and Google provider to filter out bots and fakes.</p>
            <p className="text-slate-300 whitespace-pre-wrap"><a className="text-orange-500 whitespace-pre-wrap" href="/the-story">Read the Rules </a>for voting and what dev tools you can submit here</p>
          </div>
          <GoogleProvider isLoad={isGoogleAuthLoad} onClick={handleGoogleLogin} />
        </div>
      </div>
    </section>
  );
};
