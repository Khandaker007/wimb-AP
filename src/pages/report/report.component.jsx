import React from 'react';

import "./report.style.scss";

// COMPONENTS
import SearchBox from '../../components/search-box/search-box.component';

const Report = () => (
    <div className="report">
        <div className="report--main">
            <SearchBox />
        </div>
        <div className="report--sidebar">
            sidebar
        </div>
    </div>
)

export default Report;