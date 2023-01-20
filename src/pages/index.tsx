import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { Layout } from '@/components/layouts'


const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de Pokemones'>
      <Button color="gradient">
        Hola mundo
      </Button>
    </Layout>
  )
}

export default HomePage