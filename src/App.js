import React from 'react'
import Navbar from './components/Navbar'
import Card from './Card'
import './styles/index.css'

const App = () => {
  return (
    <>
     <Navbar/>
     <Card imgsrc = "https://i.pinimg.com/736x/a0/70/b6/a070b684e47e4d5c8a94302b269e574a.jpg"
          sname = "Friends"
          link = "https://www.netflix.com/in/title/70153404"
          place = "A NETFLIX Original"
     />

     <Card sname ="Money Heist"
        place = "A NETFLIX Original" 
        imgsrc = "https://wallpapercave.com/wp/wp6201564.jpg"
        link= "https://www.netflix.com/in/title/80192098"
     />

     <Card sname = "Andhadhun"
        place = "A NETFLIX Original"
        imgsrc = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/96245c69898165.5b96482709d56.jpg"
        link = "https://www.netflix.com/in/title/81039381"
     />
     <Card  sname ="The Family Man"
        place = "Amazon Prime Original"
        imgsrc = "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg"
        link ="https://www.primevideo.com/detail/The-Family-Man/0H3DDB4KBJFNDCKKLHNRLRLVKQ"
     
     />
     <Card sname ="Breaking Bad"
        place ="A NETFLIX Original"
        imgsrc = "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR116,0,630,1200_AL_.jpg"
        link = "https://www.netflix.com/in/title/70143836" 
     />
     <Card sname ="The Shawshank Redemption"
        place ="A NETFLIX Original"
        imgsrc = "https://vistapointe.net/images/the-shawshank-redemption-wallpaper-18.jpg"
        link = "https://www.netflix.com/in/title/70005379"  
     />
    </>
  )
}

export default App
