import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we are curious about is food.</p>
                    </div>
                    <p className='mid'>
                    We are committed to using only the finest, locally-sourced ingredients, ensuring that each dish is as fresh and flavorful as possible. Our chefs take pride in crafting a menu that showcases a variety of tastes and textures, with something to delight every palate. Whether you’re enjoying a hearty meal with family, a romantic dinner for two, or simply a quick bite with friends, we want every visit to feel special.
                    </p>
                    <Link to={"/"}>Explore <span>
                     <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="about1.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About