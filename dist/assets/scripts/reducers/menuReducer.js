//reducers are just functions that return an array of objects
//step: 1, write a reducer
//step: 2, wire it up with the application via index.js(combinereducer)
//step: 3, combine reducer gives a key to the reducer a global application state.
//step: 4, created a functional component and connected with the redux store
export default function(){
  return [
    {title: 'Academics',
    description: 'Yes. Your Academic results are the most important part. Remember an UNKNOWN person will assess your eligibility. So, your talent without paper may not work.'},
    {title: 'Language',
     description: 'Only admission in an university is not enough to study in Canada. One must have to apply for a Study permit in Canada. So, even if, you have received an admission letter through ESL program, a double screening by embassy might reject your application.'},
    {title: 'Finance', description: 'One of the most difficult and important thing is how you represent your financial situation for your entire stay in Canada. Please,vist the link provided below to understand this topic clearly'},
    {title: 'Family-Ties', description: 'This is the most complicated topic of all.70% study permit application get rejected due to this issue. You have to be very careful in this part.'},
    {title: 'Health', description: 'Last & least complex if your in good health. If any applicant get rejected for medical issues, he/she might have to wait at least 5+ years to re-apply.'}
  ];
}
