import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. At our restaurant, we take pride in creating a warm and inviting atmosphere where every guest feels like part of the family. Come experience the rich flavors of the Mediterranean, expertly crafted to delight both the traditional connoisseur and the modern palate.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        {/* <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" /> */}
      </div>
    </section>
  );
};

export default OurStory;
