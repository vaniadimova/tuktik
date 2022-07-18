import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiTakeMyMoney } from 'react-icons/gi';
import { FaPaw, FaRegNewspaper, FaGamepad} from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
export const topics = [
  {
    name: 'coding',
    icon: <BsCode />,
  },
  {
    name: 'movies',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'gaming',
    icon: <FaGamepad />,
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'music',
    icon: <GiGalaxy />,
  },
  {
    name: 'money',
    icon: <GiTakeMyMoney />,
  },
  {
    name: 'pets',
    icon: <FaPaw />,
  },
  {
    name: 'news',
    icon: <FaRegNewspaper />,
  },
  {
    name: 'bookmarks',
    icon: <FiBookmark />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Studio', 'Contact', 'Carrers']
export const footerList2 = [ 'Advertise','Developers','TukTuk Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Community Guidelines' ]