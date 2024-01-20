import React from 'react'
import Image from 'next/image'
const data =[{
    id:"1",
    title:"Blog-1",
    description:"Certainly! In the context of a Next.js application,  typically refers to a user interface element that presents information in a structured and visually appealing way. Cards are commonly used to display individual pieces of content, such as articles, products, or user profiles. They often consist of a combination of text, images, and other UI elements.",
    Image:"/card1.jpg"
},
{
    id:"2",
    title:"Blog-2",
    description:"Certainly! In the context of a Next.js application,  typically refers to a user interface element that presents information in a structured and visually appealing way. Cards are commonly used to display individual pieces of content, such as articles, products, or user profiles. They often consist of a combination of text, images, and other UI elements.",
    Image:"/card2.jpg"
},
{
    id:"3",
    title:"Blog-3",
    description:"Certainly! In the context of a Next.js application,  typically refers to a user interface element that presents information in a structured and visually appealing way. Cards are commonly used to display individual pieces of content, such as articles, products, or user profiles. They often consist of a combination of text, images, and other UI elements.",
    Image:"/card3.jpg"
},
{
    id:"4",
    title:"Blog-4",
    description:"Certainly! In the context of a Next.js application,  typically refers to a user interface element that presents information in a structured and visually appealing way. Cards are commonly used to display individual pieces of content, such as articles, products, or user profiles. They often consist of a combination of text, images, and other UI elements.",
    Image:"/card-3.jpg"
},
{
    id:"5",
    title:"Blog-5",
    description:"Certainly! In the context of a Next.js application,  typically refers to a user interface element that presents information in a structured and visually appealing way. Cards are commonly used to display individual pieces of content, such as articles, products, or user profiles. They often consist of a combination of text, images, and other UI elements.",
    Image:"/card3.jpg"
},
]
export default function Slug({ params }: { params: { slug:string } }) {
    const showData=data.filter((item)=>{
        return item.id===params.slug
" "   })
  return (
    <div >
        <h1 className=' text-white'>{showData[0]?.title}</h1>
        <Image src={showData[0]?.Image} width={550} height={300} alt="pic"></Image>
        <p className=' text-white mt-2 w-[400px]'>{showData[0]?.description}</p>

    </div>
  )
}
