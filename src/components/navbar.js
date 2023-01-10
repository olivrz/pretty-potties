import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <h2 className="nav-button">
                <Link href="aboutus">About us</Link>
            </h2>
        </>
    )
}