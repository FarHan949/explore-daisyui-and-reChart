import SimpleParallax  from "simple-parallax-js";

const SParallax = () => {
    return (
        <div>
             <SimpleParallax delay={0.4} transition="cubic-bezier(0,0,0,1)">
                <img src={"https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"} alt={"image"} />
             </SimpleParallax>
        </div>
    );
};

export default SParallax;