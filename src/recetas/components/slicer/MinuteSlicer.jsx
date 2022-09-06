import { useState } from "react"
import { Input, Slider, Stack } from "@mui/material"


export const MinuteSlicer = ({ setValue, register }) => {

  const { onChange, onBlur, name, ...rest } = register('minutes')

  const [ minutesSliderValue, setMinutesSliderValue] = useState(1)

  const onSliderChange = (event) => {

    setMinutesSliderValue(event.target.value === '' ? '' : Number(event.target.value));
    setValue('minutes', minutesSliderValue);
  }

  const onSlideInputBlur = () => {

    if ( minutesSliderValue < 0 ) {
      setMinutesSliderValue(0)
    } else if ( minutesSliderValue >= 1440 ) {
      setMinutesSliderValue(1440)
    }
  }

  return (
    <Stack
      direction="row" 
      spacing={3} 
      alignItems="center"
    >
      <Slider
        value={
          typeof minutesSliderValue === 'number' ? minutesSliderValue : 0
        }
        min={1}
        step={1}
        max={720}
        onChange={onSliderChange}
      />
      <Input
        value={minutesSliderValue}
        size="small"
        name='minutes'
        onChange={onSliderChange}
        onBlur={onSlideInputBlur}
        inputProps={{
          step: 1,
          min: 1,
          max: 720,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
        {...rest}
      />
    </Stack>
  )
}
