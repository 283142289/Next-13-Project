"use client"

export default function AR({ news }) {
  return (
    <>
    <h1>HI NE AIR {JSON.stringify(news)}</h1>
    </>
  )
}



/* 
"use client"
export async function getStaticProps(context) {

    const newsData = await fetch('https://jsonplaceholder.typicode.com/posts/')

    return {
      props: {
        news: newsData
      },
      // 每分钟重新生成
      revalidate: 60 
    }
  }



  export default function AISR({ news }) {
    return <h1>AISR~~{JSON.stringify(news)}</h1> 
  }
  

 */