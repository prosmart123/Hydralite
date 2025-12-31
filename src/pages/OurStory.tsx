import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Header />

      <main className="pt-20">
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
