import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="navbar">
            <h2 className="nav-button">
                <Link href="/">Home</Link>
            </h2>
            <h2 className="nav-button">
                <Link href="about-us">About us</Link>
            </h2>
            <h2 className="nav-button">
                <Link href="book-now">Book now</Link>
            </h2>
            <h2 className="nav-button">
                <Link href="gallery">Gallery</Link>
            </h2>
            <h2 className="nav-button">
                <Link href="faqs">FAQs</Link>
            </h2>
        </div>
    )
}