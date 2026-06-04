import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import Sidebar from './components/Sidebar';
import HomePage from './components/Home/HomePage';
import DetailsPage from './components/DetailsPage';
import ArenaPage from './components/ArenaPage';
import LeaderboardPage from './components/LeaderboardPage';
import ApplicationsPage from './components/ApplicationsPage';
import ProfilePage from './components/ProfilePage';
import RecruiterPage from './components/RecruiterPage';
import SocietyPage from './components/SocietyPage';
import LoginModal from './components/LoginModal';
import ResumeBuilderPage from './components/ResumeBuilderPage';
import InternshipsPage from './components/InternshipsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('student');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComp, setSelectedComp] = useState(null);
  const [myApplications, setMyApplications] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      if (session) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        if (profile) setUserRole(profile.role);
      }
    };
    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      if (session) {
        supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single()
          .then(({ data }) => {
            if (data) setUserRole(data.role);
          });
      }
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
        if (event.state.comp) setSelectedComp(event.state.comp);
      } else {
        setCurrentPage('home');
        setSelectedComp(null);
      }
      setShowLoginModal(false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const login = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin, // Dynamically picks localhost or zynaut.in
        },
      });
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    const email = authMode === 'signup' ? e.target[1].value : e.target[0].value;
    const password = authMode === 'signup' ? e.target[2].value : e.target[1].value;
    const fullName = authMode === 'signup' ? e.target[0].value : '';

    if (authMode === 'signup') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert("Sign Up Error: " + error.message);
        return;
      }

      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ id: data.user.id, full_name: fullName, role: userRole }]);
        
        if (profileError) {
          alert("Profile Error: " + profileError.message);
          return;
        }
      }
      alert("Account created successfully! You can now log in.");
      setAuthMode('login');
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Login Failed: " + error.message);
        return;
      }

      const { data: profileData } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();

      if (profileData) setUserRole(profileData.role);
      
      setIsAuthenticated(true);
      setShowLoginModal(false);
      
      if (profileData?.role === 'company') setCurrentPage('recruiter');
      else if (profileData?.role === 'college') setCurrentPage('society');
      else setCurrentPage('home');
    }
  };

  const navigateTo = (page, comp = null) => {
    if (!isAuthenticated && (page === 'arena' || page === 'applications' || page === 'recruiter' || page === 'society')) {
        setShowLoginModal(true);
        return;
    }
    
    if (isAuthenticated && userRole === 'company' && page === 'home') {
        setCurrentPage('recruiter');
        return;
    }
    if (isAuthenticated && userRole === 'college' && page === 'home') {
        setCurrentPage('society');
        return;
    }
    
    if (comp && comp.locked && !isAuthenticated) {
        alert("🔒 You need a Gold Card to access this.");
        return;
    }

    setSelectedComp(comp);
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Auto close sidebar on choice
    window.scrollTo(0, 0);
    window.history.pushState({ page, comp }, '', `#${page}`);
  };

  const goBack = () => window.history.back();

  const checkAuthAndRegister = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      alert('Registration form would open here.');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigateTo={navigateTo} isAuthenticated={isAuthenticated} />;
      case 'details':
        return <DetailsPage selectedComp={selectedComp} navigateTo={navigateTo} goBack={goBack} isAuthenticated={isAuthenticated} checkAuthAndRegister={checkAuthAndRegister} isApplied={myApplications.some(app => app.id === selectedComp?.id)} />;
      case 'arena':
        return <ArenaPage selectedComp={selectedComp} goBack={goBack} />;
      case 'leaderboard':
        return <LeaderboardPage navigateTo={navigateTo} />;
      case 'resume':
        return <ResumeBuilderPage navigateTo={navigateTo} />;
      case 'applications':
        return <ApplicationsPage navigateTo={navigateTo} myApplications={myApplications} />;
      case 'internships':
        return <InternshipsPage navigateTo={navigateTo} />;
      case 'profile':
        return <ProfilePage navigateTo={navigateTo} isAuthenticated={isAuthenticated} setShowLoginModal={setShowLoginModal} />;
      case 'recruiter':
        return <RecruiterPage setIsAuthenticated={setIsAuthenticated} setCurrentPage={setCurrentPage} />;
      case 'society':
        return <SocietyPage setIsAuthenticated={setIsAuthenticated} setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigateTo={navigateTo} isAuthenticated={isAuthenticated} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F8FAFC] font-sans text-slate-900 antialiased">
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          authMode={authMode}
          setAuthMode={setAuthMode}
          userRole={userRole}
          setUserRole={setUserRole}
          handleAuth={handleAuth}
        />
      )}

      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-slate-200 md:hidden sticky top-0 z-50">
        <span className="font-bold text-xl tracking-tight text-indigo-600">Zynaut</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Responsive Wrapper for Sidebar */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block fixed inset-y-0 left-0 z-40 top-14 md:top-0 w-64`}>
        <Sidebar 
          isAuthenticated={isAuthenticated} 
          myApplications={myApplications} 
          navigateTo={navigateTo} 
          login={login} 
          setIsAuthenticated={setIsAuthenticated} 
        />
      </div>

      {/* Responsive Main Container */}
      <main className="flex-1 md:ml-64 p-6 md:p-12 relative w-full overflow-x-hidden">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;