import Button from "components/Button/Button";
import Hero from "components/Hero/Hero";
import Navbar from "components/Navbar/Navbar";
import SectionCard from "components/SectionCard/SectionCard";
import SectionHeader from "components/SectionHeader/SectionHeader";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionCard>
        <SectionHeader
          title="shop from collections"
          actionElement={
            <Button variant="text" pd="4">
              view more
            </Button>
          }
        />
      </SectionCard>
    </>
  );
}

export default Home;
