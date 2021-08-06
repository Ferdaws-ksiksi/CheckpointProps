import './App.css';
import ProfileComp from './profile/profileComp';

function App() {
  return (
    <div className="App" style={{color:'white', backgroundColor:'black'}}>
       <ProfileComp fullName="Ferdaws Ksiksi " bio="I love reading books " profession="student">
         <img style={{height:'290px' , width :'250px' , textAlign : 'center', marginBottom:'20px'}} src="/images/me.jpg" alt="this is my pic" />
       </ProfileComp>
    </div>
  );
}

export default App;