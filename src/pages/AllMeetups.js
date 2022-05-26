import MeetupList from '../components/Meetups/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // fetch data from database 
    fetch(
      'https://react-getting-started-aae29-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json(); //reading the data from the database 
    }).then(data => {
       const meetups = [];

       //extract data from database 
       for (const key in data){ 
         const meetup = {
           id: key,
           ...data[key]
         };

         meetups.push(meetup) //add meetup to list of meetups
       }
       setIsLoading(false); //set to false once we have data
       setLoadedMeetups(meetups);
    });
  }, []);
  

  if (isLoading) { //loading screen if data is still loading
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;