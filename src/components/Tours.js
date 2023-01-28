import { tours } from "../data";

const Tours = () => {
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div class="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            image,
            tourDate,
            tourTitle,
            tourInfo,
            duration,
            price,
            location,
          } = tour;
          return (
            <article class="tour-card" key={id}>
              <div class="tour-img-container">
                <img src={image} class="tour-img" alt={tourTitle} />
                <p class="tour-date">{tourDate}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{tourTitle}</h4>
                </div>
                <p>{tourInfo}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
