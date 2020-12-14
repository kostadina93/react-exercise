import ServicesValidationForm from './ValidationForm';
import RangeSlider from '../RangeSlider';

const ServicesContent = ({ data }) => (
  <div className="ServicesContent">
    <h4 className="ServicesContent__title">{data.title}</h4>
    <div className="ServicesContent__wrapper">
      <div className="ServicesContent__percentages">
        <h3 className="percentages__title">{data.graphText}</h3>
        {
          data.stats.map((s, i) => (
            <RangeSlider key={s.title} stat={s} index={i} />
          ))
        }
      </div>
      <ServicesValidationForm />
    </div>
  </div>
)

export default ServicesContent;