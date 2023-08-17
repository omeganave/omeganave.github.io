import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import { Provider } from "../context/Context";
import Header from "../components/Header";

test('Home page renders correctly', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    const homeButton = screen.getByText("Click here!");
    expect(homeButton).toBeInTheDocument();
    const homeText = screen.getByText(/AromaGlow Naturals/i)
    expect(homeText).toBeInTheDocument();
});

test('Cart page renders correctly', () => {
    render(<Provider><MemoryRouter><Cart /></MemoryRouter></Provider>);
    const shopperImg = screen.getByAltText("Shopper");
    expect(shopperImg).toBeInTheDocument();
    const checkoutButton = screen.getByText("Checkout")
    expect(checkoutButton).toBeInTheDocument();
});

test('Header renders correctly', () => {
    render(<Provider><MemoryRouter><Header /></MemoryRouter></Provider>);
    const searchBar = screen.getByPlaceholderText("Search AromaGlowNaturals.com");
    expect(searchBar).toBeInTheDocument();
    const logo = screen.getByAltText("website logo");
    expect(logo).toBeInTheDocument();
});