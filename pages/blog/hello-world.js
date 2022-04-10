import Header from '../../components/Header';
// import Link from 'next/link';

export default function HelloWorld() {
    return (
      <div>
          <Header />

        {/* <ul>
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                <a>About Us</a>
                </Link>
            </li>
            <li>
                <Link href="/blog/hello-world">
                <a>Blog Post</a>
                </Link>
            </li>
        </ul> */}

        <h1> Hello World </h1>
      </div>
    );
  }