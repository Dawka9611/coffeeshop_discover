import  Head  from 'next/head';
import { useRouter } from 'next/router'
const DynamicRoute = () => {
   const router = useRouter();
   const query = router.query

   return <div>
      <Head>
         <title>{query}</title>
      </Head>
      <h3>Hi there I am dynamic page: {query.dynamic}</h3>
   </div>
}
export default DynamicRoute