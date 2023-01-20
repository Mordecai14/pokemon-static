import Head from 'next/head'
import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name='autor' content='Aramen Meza'></meta>
                <meta name='description' content={`Informacion sobreel pokemon ${title}`}></meta>
                <meta name='keywords' content={`{${title}, pokemon, pokedex, pokimon}`}></meta>
            </Head>

            {/* Navbar */}

            <main>
                {children}
            </main>
        </>
    )
}
