'use client '
import BlockManager from "../../services/blockManager"


export default async function DynamicPage ({params}: any) {
  //fetch api based on slug

  const slug = params.slug
  let strapiRawData
  try {
    const res = await fetch(`http://127.0.0.1:1337/api/pages?populate=deep&filters[slug][$eq]=${slug}`, {next: { revalidate: 10 }})
    strapiRawData = await res.json()
  } catch (err) {
    return <div>Error...</div>
  }

  //Check if page "exists"
  if (strapiRawData.data.length === 0) return <div>404 Not Found</div>
  const data = strapiRawData.data[0].attributes
 

  return(
    <div className='h-200px my-20 mx-auto max-w-7xl text-white mt-[200px]'>

    {BlockManager(data.blocks)}
    
</div>
  )
}