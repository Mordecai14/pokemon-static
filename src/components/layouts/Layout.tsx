import Head from 'next/head'
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui';

interface Props extends PropsWithChildren {
    title?: string;
}

const origin = (typeof window === "undefined") ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name='autor' content='Aramen Meza'></meta>
                <meta name='description' content={`Informacion sobreel pokemon ${title}`}></meta>
                <meta name='keywords' content={`${title}, pokemon, pokedex, pokimon`}></meta>
                {/*  */}
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{ padding: "0 20px", overflow: "hidden" }}>
                {children}
            </main>
        </>
    )
}
