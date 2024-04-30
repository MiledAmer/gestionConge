import { UserProfileCard } from '@/components/component/user-profile-card';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { UserProfile } from '@auth0/nextjs-auth0/client';



export default withPageAuthRequired(async () => {
  const { user } :UserProfile  = await getSession();
  return new Promise((resolve) => {
    resolve(<div className='mt-12'><UserProfileCard user={user}/></div>);
  });
}, { returnTo: '/profile' });


