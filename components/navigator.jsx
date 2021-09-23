import Link from 'next/link'
// import { Link } from '@reach/router'


function Navigator() {
    return (
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">
                    About Us
                </Link>
            </li>
            <li>
                <Link href="/blog/hello-world">
                    Blog Post
                </Link>
            </li>
            <li>
                <Link href="/user">
                    User
                </Link>
            </li>
            <li>
                <Link href="/users">
                    Users
                </Link>
            </li>
        </ul>
    )
}

export default Navigator