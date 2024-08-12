import React from 'react';



const Profil = ({ name, birthDate, city, education, role }) => {
  return (
    <>
    <div className='person-card'>
        <h2>Profile</h2>
        <h3>Profile</h3>
        <h3>{name}</h3>
        <p><strong>Doğum Tarihi:</strong> {birthDate}</p>
        <p><strong> İkamet Şehri:</strong> {city}</p>
        <p><strong>Eğitim Durumu:</strong> {education}</p>
        <p><strong>Tercih Ettiği Rol:</strong> {role}</p>
      </div>

    <div className='about-me'>
    <h3>About Me</h3>
    <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"</p>

    </div>

    </>
  );
};

export default Profil
