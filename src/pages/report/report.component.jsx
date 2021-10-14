import React from 'react';

import "./report.style.scss";

// COMPONENTS
import SearchBox from '../../components/search-box/search-box.component';
import Calendar from '../../components/calendar/calendar.component';

const Report = () => (
    <div className="report">
        <div className="report__main">
            <div className="report__main--header">
                <p className="live">Live</p>
                <SearchBox />
            </div>
            <div className="report__main--body">
                <div className="live-reports">
                    <div className="report-block first-block">
                        &nbsp;
                    </div>
                    <div className="report-block">
                        &nbsp;
                    </div>
                    <div className="report-block">
                        &nbsp;
                    </div>
                    <div className="report-block">
                        &nbsp;
                    </div>
                    <div className="report-block">
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div className="report__sidebar">
            <div className="report__sidebar--calendar-area">
                <Calendar/>
            </div>
        </div>
    </div>
)

export default Report;