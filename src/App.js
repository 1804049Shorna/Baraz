
import './App.css';

import Navbar from './components/Navbar/Navbar';
import LogoBar from './components/LogoSearchBar/LogoBar';
import Carousel from './components/Carousel/Carousel';
import TopBanner from './components/TopBanner/TopBanner';
import FlashSale from './components/FlashSale/FlashSale';
import BarazeMall from './components/BarazeMall/BarazeMall';
import Products from './components/Product/Product';
import flashSaleData from './Data/flashData';
import barazMallData from './Data/BarazData';

function App() {
  return (
    <div className="App">
 
       <Navbar></Navbar>
       <LogoBar></LogoBar>
       <Carousel></Carousel>
       <TopBanner></TopBanner>
       {/* <FlashSale></FlashSale>
       <BarazeMall></BarazeMall> */}
       <Products title='FLASH SALE' products={flashSaleData} />
      <Products title='BARAZ MALL' products={barazMallData} />
       
    </div>
  );
}

export default App;
