import React from 'react';

import { useAuth } from '../../hook/useAuth';

export function Dashboard({ code }) {
    const accessToken = useAuth(code)

    return (
        <div>
            {code}
        </div>
    );
}
