import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider } from '@mui/material'
import { useState } from "react";

export default function Home() {
  const [listSize, setListSize] = useState<number>(50);
  const [listAlgorithm, setListAlgorithm] = useState<string>();

  const handleListSizeChange = (event: Event, newValue: number | number[]) => {
    setListSize(newValue as number);
  };
  const handleAlgorithmChange = (event: SelectChangeEvent) => {
    setListAlgorithm(event.target.value);
  };
  

  return (
    <div className="min-h-[100dvh] h-[100dvh] flex flex-row bg-black" id="list-page">
      <div className="bg-green-300 w-[80%] min-h-[100dvh] h-[100dvh] flex flex-col items-center" id="list-view">
        <h1>List</h1>
      </div>
      <div className="bg-yellow-200 w-[20%] min-h-[100dvh] h-[100dvh] flex flex-col gap-10 items-start pl-2 pr-2" id="list-menu">
        <h1>Menu</h1>
        <FormControl className = "bg-yellow-300 w-[100%] flex flex-row items-center gap-2">
          <InputLabel id="algorithm-select-label">Select Algorithm</InputLabel>
          <Select variant="outlined" className="w-[60%] pl-1 pr-1" onChange={handleAlgorithmChange} id="algorithm-select" label = "Select Algorithm">
            <MenuItem value = {"insertion"}>Insertion Sort</MenuItem>
            <MenuItem value = {"merge"}>Merge Sort</MenuItem>
            <MenuItem value = {"quick"}>Quick Sort</MenuItem>
          </Select>
          <Button variant="outlined" size="large" className="w-[40%] h-[100%] pl-1 pr-1">Sort</Button>
        </FormControl>
        <div className= "bg-yellow-300 w-[100%] flex flex-row items-center">
          <Slider className="w-[100%] ml-2 mr-2" value={listSize} onChange={handleListSizeChange}></Slider>
        </div>
        List Size: {listSize}
      </div>
    </div>
  )
}
