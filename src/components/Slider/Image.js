const SliderImage = ({ data }) => {
  return (
    <div className="SliderImage">
      <div
        style={{ backgroundImage: `url(${data.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        className="SliderImage__image"
      >
        <div className="SliderImage__data">
          <h2 className="SliderImage__title">{data.title}</h2>
          <span className="SliderImage__subtitle">{data.subtitle}</span>
        </div>
      </div>
    </div>
  ) 
}

export default SliderImage;