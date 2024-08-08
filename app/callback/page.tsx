import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react'

const CallbackPage = async () => {

    const { getUser } = getKindeServerSession();

    const user = await getUser();

    // config store data into db

  return (
    <div>
        {user?.given_name} {user?.family_name}
    </div>
  )
}

export default CallbackPage;