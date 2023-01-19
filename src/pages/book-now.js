import Calendar from 'react-calendar';
import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';

const max_years = 2;
const MAX_DATE = new Date();
MAX_DATE.setFullYear(MAX_DATE.getFullYear() + max_years);

export default function BookNow() {
    const [calendarVal, onChange] = useState(new Date());

    return (
        <div className="page">
            <h1 className="subsection-title">Available Days</h1>

            <div className="calendar-holder">
                <Calendar
                    onChange={onChange}
                    defaultValue={calendarVal}
                    minDate={new Date()}
                    maxDate={MAX_DATE}
                    minDetail={"year"}
                    selectRange={true}
                    returnValue={"range"}
                />
            </div>
            <button
                disabled={false}
                type="submit"
            >
                Book now
            </button>
        </div>
    )
}