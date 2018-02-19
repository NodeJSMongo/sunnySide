//reducers are just functions that return an array of objects
//step: 1, write a reducer
//step: 2, wire it up with the application via index.js(combinereducer)
//step: 3, combine reducer gives a key to the reducer a global application state.
//step: 4, created a functional component and connected with the redux store
export default function(){
  return [
    {title: 'Admission',
    description: 'First step towards getting a study permit in Canada is Admission. You must have to apply in university or college you intent to study'},
    {title: 'Visa',
     description: 'Only admission in an university is not enough to study in Canada. One must have to apply for a TRV of Canada'},
    {title: 'Sponsor', description: 'One of the most difficult and important thing is how you represent your financial situation for your entire stay in Canada'},
    {title: 'Spouse', description: 'You can apply with or without your spouse. Always keep an eye towards your financial plan'},
    {title: 'English', description: 'Your capability of understanding english and be able to show a proof of your english efficiency is very important towards getting an offer letter as well as visa'}
  ];
}
