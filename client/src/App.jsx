import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Login from './Components/Login'; // Ensure the path is correct

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="p-4" style={{ marginTop: '70px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/pricing" element={<Pricing />} />
                </Routes>
                <StockMarketInfo />
            </div>
        </Router>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Observe Market on the go</a>
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pricing">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const StockMarketInfo = () => {
    return (
        <div className="stock-market-info text-center">
            <h2>FINANCE MARKET OVERVIEW</h2>
            <img src="https://example.com/stock-market-image.jpg" alt="Finance Market" style={{ width: '100%', height: 'auto' }} />
            <p>Stay updated with the latest trends in the stock market. Analyze stock performance, market trends, and make informed investment decisions.</p>
        </div>
    );
};

// Sample components for routing
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Pricing = () => <h2>Pricing Page</h2>;

export default App;