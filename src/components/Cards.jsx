import {CardData} from "./CardData.jsx";
import '../scss/components/cards.scss';
const Cards =()=> {
    return(
        <section>
            <ul className="card text-center">
                {
                    CardData.map((data)=> {
                        return(
                            <li key={data.id} className={`card__${data.cName}`}>
                                <img className={`card__icon-${data.cName} bg-orange`} src= {data.icon} alt=""/>
                                <h3 className='card__title text-upper text-blue'>{data.title}</h3>
                                <p className='card__paragraph text-grey'>{data.paragraph}</p>
                            </li>
                        )
                    })
                }
            </ul>

            <p className= 'text-grey text-center'><span>Typemaster 2021</span>  |  All Rights Reserved</p>
        </section>
    )
}

export default Cards;