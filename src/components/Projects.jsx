import React from "react";
import rectangle1 from "../images/Rectangle40.jpg"
import rectangle2 from "../images/Rectangle41.jpg"
import rectangle3 from "../images/Rectangle42.jpg"


function Projects () {
    return (
<>
<div className="rectangle1">
<img src={rectangle1} alt="rectangle1"/>
<h2>Workintech</h2>
<p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
</div>


<div className="rectangle2">
<img src={rectangle2} alt="rectangle2"/>
<h2>Random Jokes</h2>
<p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>

</div>


<div className="rectangle3">
<img src={rectangle3} alt="rectangle3"/>
<h2>Journey</h2>
<p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>

</div>



</>
    )
}

export default Projects