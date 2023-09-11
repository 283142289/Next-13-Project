

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
  }
   
  export default function Page({ params }) {
    const { id } = params
    return(
      <>
        <h1>ID:~{id}</h1>
      </>
    )
  }