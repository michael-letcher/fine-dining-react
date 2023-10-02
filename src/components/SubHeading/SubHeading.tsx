import { images } from '../../constants';
import './SubHeading.scss';

interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => (
  <div className="app__subheading">
    <p>{title}</p>
    <img className="app__subheading-img" src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
