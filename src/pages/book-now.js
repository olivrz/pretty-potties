import Calendar from 'react-calendar';
import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import { ddbDocClient } from '../../config/ddbDocClient'

const max_years = 2;
const MAX_DATE = new Date();
MAX_DATE.setFullYear(MAX_DATE.getFullYear() + max_years);

function BookNow(props) {
    const [calendarVal, setDate] = useState(new Date());

    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('email');
    const [phone, setPhone] = useState();

    const handleSubmit = async (event) => {
        //stop the form from submitting and refreshing the page
        event.preventDefault()

        const data = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'phoneVal': phone,
            'date': calendarVal
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = '/api/reservation-form1'

        //Form the request for sending data to the server through api endpoint
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSONdata
        }

        //send form data to api form and get a response
        const response = await fetch(endpoint, options)

        //If server returns the submitted data, that means the form successfully submitted
        const result = await response.json()
        console.log("server returned form data: ", result.data);

    }

    return (
        <div className="page">
            <h1 className="subsection-title">Available Days</h1>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

//TODO
export async function getStaticProps(context) {
    //directly call dynamoDB to get reservations
    const scanParams = {
        TableName: 'reservations',
        AttributesToGet: ['startdate', 'enddate'],
        //TODO
    }

    //return { props: someObject } to send props to the
    //BookNow component at build time
    return {
        props: {

        }
    }
}

export default BookNow