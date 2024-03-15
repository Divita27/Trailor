import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './Pages/SignIn';
import LoginPage from './Pages/LoginPage';
import SignUpForm from './Pages/SignUpForm';
import Test from './Pages/Test';
import ExpandableCard from './Components/ExpandableCard';

function App() {
  return (
    // <div className="App">
    //   {/* <SignInPage /> */}
    //   {/* <LoginPage /> */}
    //   {/* <ExpandableCard
    //     header={{ profilePic: 'path_to_profile_pic.jpg', community: 'Community Name' }}
    //     imageSrc='path_to_image.jpg'
    //     text='Your post text'
    //   /> */}
    //   {/* <SignUpForm /> */}
    // </div>

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/form" element={<SignUpForm />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
