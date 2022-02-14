import React from 'react';
import styles from '@/Styles/Layout.module.css'
import  Link  from 'next/link';
const Header = () => {
  return <div className={styles.header}>
      <div className={styles.innerDiv}>
      <div className={styles.logo}>
     <Link href="/">Our Blog</Link>
      </div>
      <div className={styles.navbar}>
          <ul>
              <li><Link href="/AllPosts">All Posts</Link></li>
          </ul>
      </div>
      </div>
  </div>;
};

export default Header;
