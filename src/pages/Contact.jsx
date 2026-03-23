import Coninfo from '../components/Coninfo/Coninfo';
import ContactBanner from '../components/ContactBanner/ContactBanner';
import banner from '../assets/cont141625.jpg';

export default function Contact() {
  return (
    <>
      <ContactBanner image={banner} />
      <Coninfo />
    </>
  );
}
