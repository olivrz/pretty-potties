import Calendar from 'react-calendar';
import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';

const max_years = 2;
const MAX_DATE = new Date();
MAX_DATE.setFullYear(MAX_DATE.getFullYear() + max_years);

const AWS = require('aws-sdk');

export async function getStaticProps(context) {

    const [calendarVal, setDate] = useState(new Date());
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('email');

    return (
        <div className="page">
            <h1 className="subsection-title">Available Days</h1>

            <div className="calendar-holder">
                <Calendar
                    onChange={setDate}
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