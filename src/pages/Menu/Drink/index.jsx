import drink from '/images/cloudpot-menu/menu-drink.jpg'
import drink2 from '/images/cloudpot-menu/menu-drink2.jpg'
import drink3 from '/images/cloudpot-menu/drink_dessert.jpg'
import './drink.css'

export default function Drink() {

  return (
    <section id='section__Drink' className='w-75 m-auto'>
      <div className='drink-list d-md-flex'>
        <div className='col-md-6'>
          <h1 className='section__Title'>Drinks</h1>
          <hr className="w-75" style={{ border: "1px solid var(--secondary-color)" }} />

          <div className='drink-item'>
            <img src={drink3} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='drink-item'>
            <img src={drink} />
          </div>
          <div className='drink-item'>
            <img src={drink2} />
          </div>
        </div>
      </div>
    </section>
  )
}
