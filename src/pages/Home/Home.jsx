import Button from "components/Button/Button";
import Hero from "components/Hero/Hero";
import Navbar from "components/Navbar/Navbar";
import ProductImage from "components/ProductImage/ProductImage";
import SectionCard from "components/SectionCard/SectionCard";
import SectionCardContent from "components/SectionContent/SectionContent";
import SectionHeader from "components/SectionHeader/SectionHeader";
import InventoryCard from "components/InventoryCard/InventoryCard";
import InventoryDetails from "components/InventoryDetails/InventoryDetails";
import { collectionImages } from "data/index";
import c from "./home.module.css";

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
        <SectionCardContent>
          {collectionImages.map((item, index) => (
            <InventoryCard key={index}>
              <ProductImage image={item.img} />
              <InventoryDetails
                quantity={item.qty_left}
                category={item.category}
              />
            </InventoryCard>
          ))}
        </SectionCardContent>
      </SectionCard>
      <div className={c.discounts}></div>
    </>
  );
}

export default Home;
