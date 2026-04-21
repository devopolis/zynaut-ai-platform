import { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import SearchHeader from './SearchHeader';
import GoldSection from './GoldSection';
import InternshipsHeroSection from './InternshipsHeroSection';
import GradeOSection from './GradeOSection';
import GradeASection from './GradeASection';
import GradeBSection from './GradeBSection';
import { filterData } from '../../utils/helpers';

export default function HomePage({ searchQuery, setSearchQuery, navigateTo, isAuthenticated }) {
  const [assessments, setAssessments] = useState({
    goldPPI: [],
    gradeO: [],
    gradeA: [],
    gradeB: [],
    internships: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('assessments').select('*');
    if (error) {
      console.error('Error fetching assessments:', error);
    } else if (data) {
      // Separate internships from competitions
      const internships = data.filter(item => item.category === 'internship');
      const competitions = data.filter(item => item.category !== 'internship');

      // Further categorize competitions (adjust logic based on your actual fields)
      const goldPPI = competitions.filter(item => item.difficulty === 'Grade O' && item.locked === true);
      const gradeO = competitions.filter(item => item.difficulty === 'Grade O' && item.locked !== true);
      const gradeA = competitions.filter(item => item.difficulty === 'Grade A');
      const gradeB = competitions.filter(item => item.difficulty === 'Grade B');

      setAssessments({ goldPPI, gradeO, gradeA, gradeB, internships });
    }
    setLoading(false);
  };

  // Apply search filter
  const filteredGoldPPI = filterData(assessments.goldPPI, ['Gold', 'PPI'], searchQuery);
  const filteredGradeO = filterData(assessments.gradeO, ['Grade O', 'Elite'], searchQuery);
  const filteredGradeA = filterData(assessments.gradeA, ['Grade A', 'Premium'], searchQuery);
  const filteredGradeB = filterData(assessments.gradeB, ['Grade B', 'College'], searchQuery);
  const filteredInternships = filterData(assessments.internships, ['Internship', 'Job'], searchQuery);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <>
      <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Gold section (if any) */}
      {filteredGoldPPI.length > 0 && (
        <GoldSection items={filteredGoldPPI} navigateTo={navigateTo} isAuthenticated={isAuthenticated} />
      )}

      {/* Internships hero section */}
      {filteredInternships.length > 0 && (
        <InternshipsHeroSection internships={filteredInternships} navigateTo={navigateTo} />
      )}

      {/* Grade O section */}
      {filteredGradeO.length > 0 && <GradeOSection items={filteredGradeO} navigateTo={navigateTo} />}

      {/* Grade A and B side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
        <GradeASection items={filteredGradeA} navigateTo={navigateTo} />
        <GradeBSection items={filteredGradeB} navigateTo={navigateTo} />
      </div>
    </>
  );
}