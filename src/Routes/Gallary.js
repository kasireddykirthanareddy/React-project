import React from 'react'

export default function Gallary({productItems,handleAddToCart}) {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height:"500px"}}>
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/R.299e0d3ff6441db640ce09af0fad4cd3?rik=EcVZgM2NsmDPNA&riu=http%3a%2f%2fmedia3.s-nbcnews.com%2fi%2fnewscms%2f2017_30%2f1268446%2fshopping-bag-set-today-tease-170728_97f9cacf6f033f2885bc97028cbb85e0.jpg&ehk=V6RDsHpGbcWwwSgW117qTaD8hjyAXtFSPxBOHzawWh8%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="image1"/>
    </div>
    <div className="carousel-item" >
      <img src="https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="image2"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/7621138/pexels-photo-7621138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="image3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
      <div className='container row' style={{margin:"auto"}}>
        {productItems.map((product)=>(
          <div className='card col5' style={{margin:"25px"}}>
            <img className='card-image-top' style={{height:"255px"}} src={product.pic}/>
            <div className='card body'>
              <h5 className='card-title'>{product.name}</h5>
              <p>Product is good</p>
              <button className='btn btn-primary'onClick={()=>handleAddToCart(product)}>Add to cart</button>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}
