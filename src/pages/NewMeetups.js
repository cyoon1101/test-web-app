import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';


function NewMeetupPage() {
  const history = useHistory();

  function onAddMeetuphandler(meetupData) {
    fetch(
        'https://react-getting-started-aae29-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST', 
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    ).then(() => { //this allows you to return back to the main page after making a new submission
        history.replace('/');
    });
  }
 
  //the line "onAddMeetup={onAddMeetuphandler}" is taking in data from NewMeetupForm and utilizing it with the 
  // onAddMeetuphandler function. 
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetuphandler}/> 
    </section>
  );
}

export default NewMeetupPage;
