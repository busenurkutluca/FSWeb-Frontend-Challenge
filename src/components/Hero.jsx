import React from "react"
import profil from "../images/profil.jpg"
import Button from "./Button";


function Hero () {
  return (
    <>
<div className="container">
    <h3>Busenur Kutluca Yılmaz</h3>
    <h2 className="paragraf">
        Creative thinker <br />
        Minimalism lover
        </h2>
    <p>Hi, I am Busenur. I am full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let`s shake hands with me.</p> 
</div>


<div className="profil">

<img src={profil} alt="profil"/>

</div>


<div className="alt-button">
<Button type="primary">Hire me</Button>
      <Button type="outline">Github</Button>
      <Button type="outline">LinkedIn</Button>
      </div>



</>
  )
}
export default Hero