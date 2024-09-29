import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import { Footer } from "./components/Footer";
import ProfileOverview from "./components/ProfileOverview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";


export default function Home() {
  return (
    <>
      <ProfileOverview/>
      <Projects/>
      <Skills/>
      <WorkExperience/>
      <BlogSection/>
      <ContactForm/>
      <Footer/>
    </>
  );
}
