import { useEffect, useState } from "react";
import LiquidBackground from "./components/LiquidBackground";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import LoginOnboarding from "./pages/LoginOnboarding";
import AboutModal from "./modals/AboutModal";
import SupportModal from "./modals/SupportModal";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [userData, setUserData] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("careCircleUser");
    if (savedUser) setUserData(JSON.parse(savedUser));

    setTimeout(() => setShowSplash(false), 3000);
  }, []);

  if (!userData) {
    return (
      <>
        {showSplash && <SplashScreen />}
        <LiquidBackground />
        <LoginOnboarding onComplete={setUserData} />
      </>
    );
  }

  return (
    <>
      <LiquidBackground />
      <Header onNavigate={(v)=> v==="about"?setShowAbout(true):setShowSupport(true)} userData={userData}/>
      <Dashboard userData={userData}/>
      {showAbout && <AboutModal onClose={()=>setShowAbout(false)} />}
      {showSupport && <SupportModal onClose={()=>setShowSupport(false)} />}
    </>
  );
}
