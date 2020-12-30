import Header from '../../Components/Header';
import Product from '../../Components/Product'

const Home = () => {
  return(
    <>
    <Header/>
    <div className="wrapper">
      <div className="products">
        <Product/>
      </div>
    </div>
    </>
  )
}

export default Home;