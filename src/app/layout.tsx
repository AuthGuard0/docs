import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {

}
 
const banner = <Banner storageKey="some-key">AuthGuard Docs is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>AuthGuard</b>}
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © AuthGuard.</Footer>
 
export default async function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
      >
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/AuthGuard0/docs/tree/main"
          footer={footer}
          editLink={null}
          feedback={{
            content: null
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}