import Link from 'next/link';
import { BsFacebook, BsTwitterX } from 'react-icons/bs';

const SocialLinks = ({navigationOpen}) => (
  <div className="mt-7 flex items-center gap-6 xl:mt-0">
    <Link
      href="https://facebook.com/"
      className="text-regular font-medium text-waterloo hover:text-primary"
    >
      <BsFacebook size={32} fill="blue" />
    </Link>

    <Link
      href="https://twitter.com/"
      className="text-regular font-medium text-waterloo hover:text-primary"
    >
      <BsTwitterX size={32} fill="blue" />
    </Link>
  </div>
);

export default SocialLinks;
