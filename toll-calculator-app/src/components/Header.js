// components/Header.js
function Header() {
    return (
      <header id="tollCalculatorHeader">
        <h1>Toll Calculator App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div>
          <p>Welcome, User123!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
    );
  }
  