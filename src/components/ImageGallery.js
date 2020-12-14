import eyeIcon from '../assets/eye-icon.png';

const ImageGallery = ({ data }) => (
  <div className="ImageGallery">
    {
      data.images.map((image, i) => (
        <div key={i} className={`ImageGallery__image-wrapper image-${i+1}`}>
          <div
            style={{ backgroundImage: `url(${image.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            className="ImageGallery__image"
          >
            <div className="image__data">
              <img src={eyeIcon} alt="icon" />
              <h3 className="image__title">{image.title}</h3>
              <span className="image__divider"></span>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

export default ImageGallery;