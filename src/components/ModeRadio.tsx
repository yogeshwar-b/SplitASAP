import { TextRadio } from './TextRadio'

interface props {
  RadioStates: {
    state: number
    changestate: React.Dispatch<React.SetStateAction<number>>
  }
}

export const ModeRadio = (props: props) => {
  return (
    <div>
      <div>{props.RadioStates.state}</div>
      <TextRadio items={['Equally', 'Shares', 'Custom']}></TextRadio>
    </div>
  )
}
