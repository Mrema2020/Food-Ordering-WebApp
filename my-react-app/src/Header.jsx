import rahisiLogo from './assets/rahisiLogo.png'

function Header() {
    return (
        <header>
            <div className="header">
                <a href="#" className="logo">
                    <img src={rahisiLogo} alt=""/>
                    <h1>Rahisi Food</h1>
                </a>
                <div className="right-container">
                    <a className='active' href="#home">Home</a>
                    <a href="sample.html#home">About</a>-
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <button className="book-button">Book</button>
                </div>
            </div>
        </header>
    );
}

export default Header