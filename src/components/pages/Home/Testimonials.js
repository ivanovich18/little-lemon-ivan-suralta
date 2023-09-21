import customer1Image from './assets/Anna.png';
import customer2Image from './assets/Zayn.png';
import customer3Image from './assets/Daniela.png';
import customer4Image from './assets/Harry.png';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Anna Johnson',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Food is not only affordable, hygienic, and delicious, but it also offers a diverse range of culinary experiences that cater to every palate.`,
  },
  {
    fullName: 'Zayn Jones',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `The best restaurant in the area to eat and relax offers a serene ambiance, delectable cuisine, and impeccable service, making it the perfect destination for both culinary enjoyment and unwinding.`,
  },
  {
    fullName: 'Daniela Smith',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I love all the food on the menu; it's not just delicious but also incredibly comforting, making every dining experience truly enjoyable.`,
  },
  {
    fullName: 'Harry Antonio',
    image: customer4Image,
    rating: [1, 1, 1, 1, 1],
    says: `The best Mediterranean restaurant in town serves up an authentic and mouthwatering culinary journey through the Mediterranean region, offering a delightful blend of flavors and dishes that captivate the senses.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) =>
          <TestimonialCard key={index} customer={customer} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
