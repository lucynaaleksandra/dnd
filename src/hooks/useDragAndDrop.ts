import { useState } from "react"
import { Data, AnimalType } from "../types"

export const useDragAndDrop = (initialState: Data[]) => {
  const [isDragging, setIsDragging] = useState(false)
  const [listItems, setListItems] = useState<Data[]>(initialState)

  console.log('listItems', listItems)
  console.log('isDragging', isDragging)

  const handleUpdateList = (id: number, animalType: AnimalType) => {
    let card = listItems.find(item => item.id === id)

    if (card && card.animalType !== animalType) {
      card.animalType = animalType
      if (Array.isArray(listItems)) {
        setListItems(prev => ([
          card!,
          ...prev.filter(item => item.id !== id)
        ]))
      }
    }
  }

  const handleDragging = (dragging: boolean) => {
    setIsDragging(dragging)
  }
  
  return {
    isDragging,
    listItems,
    handleUpdateList,
    handleDragging,
  }
}