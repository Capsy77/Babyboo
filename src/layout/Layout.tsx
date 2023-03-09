import './layout.scss';
import Menu from '../components/menu/Menu';
import Bestillingsliste from '../components/bestillingsliste/Bestillingsliste';
import SenesteOrdrer from '../components/seneste_ordrer/SenesteOrdrer';
import FavoritProdukter from '../components/favoritprodukter/FavoritProdukter';
import Kampagner from '../components/kampagner/Kampagner';
import Footer from '../components/footer/Footer';


const Layout = () => {

    return(
        <div className='layout_container'>
        <Menu />
        <div className='layout_container-center'>
        <Bestillingsliste />
        <SenesteOrdrer />
        <FavoritProdukter />
        </div>
        <div className='layout_container-center2'>
        <Kampagner />
        </div>
        <div className='layout-container2'>
        <div className='layout_container-center3'>
        <Footer />
        </div>
        </div>
        </div>
    );
}

export default Layout;