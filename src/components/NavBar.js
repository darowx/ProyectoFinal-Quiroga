import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <Link to="/" style={{ marginRight: '16px' }}>Inicio</Link>
        <Link to="/categoria/snacks" style={{ marginRight: '16px' }}>Snacks</Link>
        <Link to="/categoria/bebidas" style={{ marginRight: '16px' }}>Bebidas</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;