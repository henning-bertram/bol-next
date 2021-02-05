import Layout from '../components/layout'


export const getStaticProps = async () => {

  const res = await fetch('https://bertramonline.com/get-links.php')
  const linkList = await res.json()        
  const res2 = await fetch('https://bertramonline.com/get-images.php')
  const imageList = await res2.json()        
        
  return {
    props: { linkList, imageList },
    revalidate: 5, 
  }
}


const Home = (props) => (

  <Layout>
    <div id="links">
      <h2>duly noted</h2>
    <ul>
    {props.linkList.map((aLink,i) => (
            <li key={i}>&rarr;&nbsp; <a href={aLink.addr}>{aLink.name}</a>
						&nbsp; {aLink.description}</li>
    ))}
    </ul>
    </div>

    <div id="images">
      <h2>imagery found</h2>
      {props.imageList.map((anImage,i) => (
          <figure key={i}>
            <img src={`https://bertramonline.com/images/${anImage.filename}`} alt="" effect="opacity" />
            <figcaption>
							{`${anImage.comment}`}&nbsp;
							{anImage.origin ? <a href={`${anImage.origin}`}>&rarr;</a> : '' }
						</figcaption>
          </figure>
      ))}

	  </div>



  </Layout>
)

export default Home;
