const SliderNavigation = ({ images, currentIndex, handleNavigation }) => {

  return (
    <div className="SliderNavigation">
      {
        images.map((image, i) => (
          <div key={i} className="SliderNavigation__nav-dots" onClick={() => handleNavigation(i)}>
            <svg className={`SliderNavigation__dot ${currentIndex === i ? "selected" : ""}`} xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="none"/>
            </svg>
          </div>
        ))
      }
    </div>
  )
}

export default SliderNavigation;