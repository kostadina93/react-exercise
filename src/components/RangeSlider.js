const RangeSlider = ({ stat, index }) => (
  <div className="RangeSlider">
    <div className="RangeSlider__header">
      <span>{stat.title}</span>
      <span>{stat.amount / 10}%</span>
    </div>
    <input className={`RangeSlider__slider slider-${index+1}`} type="range" min="1" max="100" value={stat.amount / 10} readOnly />
  </div>
)

export default RangeSlider;