import '../../scss/TextRadio.scss'

interface props {
  items: string[]
}

export const TextRadio = (props: props) => {
  return (
    <ul className='tab-list flex-row'>
      {props.items.map((item: string) => (
        <li>
          <input
            className='radio-basic'
            type='radio'
            id={item}
            key={item}
            name='mode'
          />
          <label htmlFor={item} className='elegant selected'>
            {item}
          </label>
        </li>
      ))}
    </ul>
  )
}
