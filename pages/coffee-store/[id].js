import Link from "next/link"
import { useRouter } from "next/router"

const CoffeeStore = () => {
   const router = useRouter()
   return <div>
      <div>CoffeeStore{router.query.id}</div>
      <Link href='/'>
         <a>Back to home</a>
      </Link>
      <Link href='/coffee-store/two'>
         <a>go to page dynamic</a>
      </Link>
   </div>
}

export default CoffeeStore