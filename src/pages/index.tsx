import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { Layout } from '@/components/layouts'


const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de Pokemones'>

      <ul>
        <li></li>
      </ul>

    </Layout>
  )
}

export default HomePage;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  return {
    props: {

    }
  }
}