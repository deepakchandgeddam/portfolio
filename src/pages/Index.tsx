import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import HeroSection from '@/components/sections/HeroSection';
import SkillsPreview from '@/components/sections/SkillsPreview';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <SkillsPreview />
        <FeaturedProjects />
        <CTASection />
      </PageTransition>
    </Layout>
  );
};

export default Index;
