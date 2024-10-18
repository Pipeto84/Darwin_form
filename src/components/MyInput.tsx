import { Input, InputProps } from 'antd'
import { define, string } from '@react-form-builder/core'

type MyInputProps = InputProps & {
  onChange?: (value: any) => void
}

const MyInput = (props: MyInputProps) => {
  const { onChange, ...otherProps } = props
  return <Input {...otherProps} onChange={event => {
    onChange?.(event.target.value)
  }}/>
}

export const myInput = define(MyInput, 'MyInput')
  .name('Input')
  .props({
    value: string.valued.default('')
  })