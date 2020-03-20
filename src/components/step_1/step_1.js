import React from 'react';

import HeaderStep_1 from './header/HeaderStep_1';
import Filters from './filters/Filters';
import Games from './games/games';

const Step_1 = () => {
    return(
    <div className = "">
        <HeaderStep_1 />
        <Filters />
        <Games />
    </div>
    )
}
export default Step_1;