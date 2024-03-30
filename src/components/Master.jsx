import Boton from "./common/Boton.jsx";
import '../scss/components/master.scss';
const Master =()=> {
    return(
        <section className='master'>
            <div className="master__text">
                <h1 className="master__main-title text-upper text-blue">
                    typemaster keyboard
                </h1>
                <p className="master__main-paragraph text-grey">
                    Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.
                </p>
                <div className="master__btn-group">
                    <Boton/>
                    <p className='text-upper text-grey'>release on 5/27</p>
                </div>
            </div>
            <div className="master__img-group1">
                <div className="master__main-img"></div>
                <div className="master__main-sqr"></div>
            </div>
            <div className="master__img-group2">
                <div className="master__sqr"></div>
                <div className="master__phone"></div>
                <div className="master__glass"></div>
            </div>
            <div className="master__mechanical">
                <h2 className="master__title text-upper text-center text-blue">
                    mechanical wireless keyboard
                </h2>
                <p className="master__paragraph text-grey">
                    The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.
                </p>
            </div>
        </section>
    )
}

export default Master;