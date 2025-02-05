import { Rooms } from "@/components/rooms";
import { BookForm } from "@/components/book-form";
import { HeroSlider } from "@/components/hero-slider";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container relative">
        <div className="w-full p-4 mt-4 bg-accent/20 lg:absolute lg:z-30 lg:left-0 lg:-top-12 lg:right-0 lg:p-0 lg:shadow-xl">
          <BookForm />
        </div>
      </div>
      <Rooms />
    </>
  );
};

export default Home;
