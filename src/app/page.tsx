import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Searchbar/>
    </main>
  )
}
