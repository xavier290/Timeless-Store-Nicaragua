import Carousel from "../carousel"
import Slides from "../datacatalog/data"

function Catalog() {
    return (
      <main className='catalog'>
        <h1>— catálogo de relojes</h1>
        <Carousel items={Slides} />
      </main>
    )
  }
  
  export default Catalog