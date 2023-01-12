import Calendar from 'react-calendar';
import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';

export default function BookNow() {
    const [calendarVal, onChange] = useState(new Date());

    return (
        <div className="page">
            <h1 className="subsection-title">Available Days</h1>

            <div className="calendar-holder">
                <Calendar
                    onChange={onChange}
                    value={calendarVal}
                    minDate={new Date()}
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