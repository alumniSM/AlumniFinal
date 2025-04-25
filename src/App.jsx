import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import AllEvents from "./pages/Dashboard/AllEvents";
import AllJobs from "./pages/Dashboard/AllJobs";
import Allumni from "./pages/Dashboard/Allumni";
import CreateJob from "./pages/Dashboard/CreateJob";
import CreateEvent from "./pages/Dashboard/CreateEvent";
import MyJobs from "./pages/Dashboard/MyJobs";
import MyEvent from "./pages/Dashboard/MyEvent";
import AllNews from "./pages/Dashboard/AllNews";
import AddNews from "./pages/Dashboard/AddNews";
import CreateSurvey from "./components/Dashboard/Survey/CreateSurvey";
import AnswerSurvey from "./components/Dashboard/Survey/AnswerSurvey";
import AnswerSurvey2 from "./components/Dashboard/Survey/AnswerSurvey2";
import SurveyList from "./components/Dashboard/Survey/SurveyList";
import SurveyResults from "./components/Dashboard/Survey/SurveyResults";
import Profile from "./pages/Dashboard/Profile";
import Messages from "./pages/Dashboard/Messages";
import CreateAccountPage from "./pages/CreateAccount";
import SignIn from "./components/auth/SignIn";
import ForgotPassword from "./components/auth/ForgotPassword";
import UpdateEvent from "./pages/Dashboard/UpdateEvent";
import EventDetail from "./pages/Dashboard/EventDetail";
import UpdateNews from "./pages/Dashboard/UpdateNews";
import NewsDetail from "./pages/Dashboard/NewsDetail";
import UpdateJob from "./pages/Dashboard/UpdateJob";
import JobDetail from "./pages/Dashboard/JobDetail";
import CreateInternship from "./pages/Dashboard/CreateInternship";
import MyInternships from "./pages/Dashboard/MyInternships";
import AllInternships from "./pages/Dashboard/AllInternships";
import StudentAlumni from "./pages/Dashboard/StudentAlumni";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/events/all" element={<AllEvents />} />
      <Route path="/dashboard/events/create" element={<CreateEvent />} />
      <Route path="/dashboard/jobs/all" element={<AllJobs />} />
      <Route path="/dashboard/jobs/create" element={<CreateJob />} />
      <Route path="/dashboard/jobs/my-posts" element={<MyJobs />} />
      <Route path="/dashboard/update-job/:id" element={<UpdateJob />} />
      <Route path="/dashboard/job/:id" element={<JobDetail />} />
      <Route path="/dashboard/events/my-events" element={<MyEvent />} />
      <Route path="/dashboard/update-event/:id" element={<UpdateEvent />} />
      <Route path="/dashboard/event/:id" element={<EventDetail />} />
      <Route path="/dashboard/news/all" element={<AllNews />} />
      <Route path="/dashboard/news/update/:id" element={<UpdateNews />} />
      <Route path="/dashboard/news/:id" element={< NewsDetail />} />
      <Route path="/dashboard/internship/create" element={< CreateInternship />} />
      <Route path="/dashboard/internship/my-internships" element={< MyInternships />} />
      <Route path="/dashboard/internship/all" element={< AllInternships />} />
      <Route path="/dashboard/student-alumni" element={< StudentAlumni />} />
      

      
      <Route path="/dashboard/news/create" element={<AddNews />} />
      <Route path="/dashboard/alumni" element={<Allumni />} />
      <Route path="/dashboard/surveys/create" element={<CreateSurvey />} />
      <Route path="/dashboard/surveys/answer/:id" element={<AnswerSurvey />} />
      {/* <Route path="/dashboard/surveys/answer2/:id" element={<AnswerSurvey2 />} /> */}
      <Route path="/dashboard/surveys" element={<SurveyList />} />
      <Route path="/dashboard/surveys/:id" element={<SurveyResults />} />
      <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/messages" element={<Messages />} />
      
      <Route path="/create-account/*" element={<CreateAccountPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
