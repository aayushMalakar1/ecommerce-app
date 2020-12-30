const Header = () => {
  return(
    <header id="header">
      <div className="logo">Header logo</div>
      <div className="search">
        <input className="search__input"></input>
      </div>
      <div className="nav">
        <ul className="nav__list">
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Prime</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;