
const allFaqs = [
    {question: 'How much does it cost to rent Pretty Potty?',
        answer: 'We love transparency! Pretty Potty goes for a flat rate of $1,000.00/ day. Having a multi-day event? Call us and we’ll talk specifics for discounts!'},
    {question: 'How far in advance should I book Pretty Potty?',
    answer: 'As soon as you know you’ll need a potty for your event and have a date, book since we are one of a kind!'},
    {question: 'Is a deposit required? Is it returnable?',
    answer: 'A 50% deposit is required upon booking. The other half will be required the day before delivering Pretty Potty. Need to cancel? Let us know within ten days of the booking and we’ll give you 50% back of your deposit in the method you paid ($250) and the other 50% ($250) will be Pretty Potty credit for future use that never expires. If you need to cancel less than ten days before the event, we can only give you your first deposit in Pretty Potty credit ($500) for future use.'},
    {question: 'Where will Pretty Potty be placed?',
        answer: 'We will do everything we can to best accommodate your ideal positioning. However, we need to ensure safety of the positioning at all times, so we will make the best decision, together.'},
    {question: 'Is there a delivery fee?',
        answer: 'There are no additional fees on top of our flat rate. However, we currently are only servicing within a 50 mile radius of 07874. Beyond the 50 miles? No worries, we can still serve you! This will cost $3 per mile beyond the 50 miles.'},
    {question:'When is Pretty Potty delivered / picked up?',
        answer: 'Pretty Potty is delivered 6 hours prior to your event. Have an early event? We’ll deliver the evening before. Pretty Potty will be picked up the following day.'},
    {question: 'Do you only have one Pretty Potty?',
        answer: 'Yes, only one… for now! We are new to the game and hope to quickly expand. We are looking to create multiple Pretty Potties with different amount of stalls in each to better accommodate your needs!'},
    {question: 'What makes pretty potties so good?',
        answer: 'Our pretty potties are beautiful on the inside and outside. You no longer need to worry about bathrooms being an eyesore at all kinds of formal events.'}
];

export default function FAQs() {

    return (
        <div className="page faqs">
            <h1 className="subsection-title qa">Frequently asked questions</h1>
            {allFaqs.map( (obj,index) =>
                <div className="qa" id={index}>
                    <h3 className="question">{obj.question}</h3>
                    <h4 className="answer">{obj.answer}</h4>
                </div>) }
        </div>
    )
}