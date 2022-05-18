import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link prefetch={true} href={{
        pathname: '/[username]',
        query: { username: 'enrico' }
      }}>
        <a>Enrico's Profile</a>
      </Link>
    </div>
  )
}
