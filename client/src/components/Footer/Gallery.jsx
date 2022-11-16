import React from 'react'
import Footer from '.'
import Navbar from '../Navbar'
import gallCss from "../../assets/styles/gallery.module.css"
const Gallery = () => {
    return (
        <>
            <div className={gallCss.body12}>

                <Navbar />

                <h1 className={gallCss.heading}><b>Welcome To Our Food Gallery </b></h1>
                <div className={gallCss.gallcontainer}>
                    <center>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646844/dish/chowminnew_tdvogd.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Chowmein</h3>
                                <br />Chow mein are Chinese stir-fried noodles with vegetables and sometimes meat or
                                tofu.
                            </figcaption>
                        </figure>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646848/dish/momo_kwj8nj.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Momos</h3>
                                <br />
                                Momo are a type of Tibetan and Nepalese dumpling dish popular in these regions. Momo is
                                found in the cuisines of Nepal and Tibet
                            </figcaption>
                        </figure>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646843/dish/cholebhature_qspkup.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Chhole Bhature</h3>
                                <br />
                                Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent.
                            </figcaption>
                        </figure>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646843/dish/chick_urjaof.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Chicken Soup</h3>
                                <br />
                                A soup made from chicken, simmered in water, usually with various other ingredients
                            </figcaption>
                        </figure>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646852/dish/maggi_rjvbqw.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Maggi</h3>
                                <br />
                                Maggi is an international brand of seasonings, instant soups, and noodles that
                                originated in Switzerland in the late 19th century.
                            </figcaption>
                        </figure>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646849/dish/pizza_dbb9qi.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Pizza</h3>
                                <br />
                                Pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th
                                century and emigrated from there.
                            </figcaption>
                        </figure>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646849/dish/rassmalayi_qnvrux.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Rasmalai</h3>
                                <br />
                                Ras malai is a rich Indian dessert made with small balls of paneer that are soaked in
                                flavored, thickened milk.
                            </figcaption>
                        </figure>
                        <figure className={gallCss.hoverimg}>
                            <img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1667646846/dish/manchurian_znfhku.jpg" alt="" className="img-zoom" />
                            <figcaption>
                                <h3 style={{ fontSize: "21px" }}>Manchurian</h3>
                                <br />
                                Manchurian is a className of Indo-chinese dishes made by roughly chopping and deep-frying
                                ingredient such as chicken, cauliflower (gobi), prawns, fish, mutton, and paneer, and
                                then sautéeing it in a sauce flavored with soy sauce.
                            </figcaption>
                        </figure>

                    </center>
                    <br />
                    <br />
                </div>



                <Footer />
            </div>
        </>
    )
}

export default Gallery