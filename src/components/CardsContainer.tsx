import { Data, AnimalType } from "../types"
import Card from "./Card"

interface Props {
  items: Data[]
  animalType: AnimalType
  isDragging: boolean
  handleUpdateList: (id: number, animalType: AnimalType) => void
  handleDragging: (dragging: boolean) => void
}

const CardsContainer = ({ items = [], animalType, isDragging, handleDragging, handleUpdateList }: Props) => {

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      handleUpdateList(+e.dataTransfer.getData('text'), animalType)
      handleDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

  return (
    <div
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p>{animalType} hero</p>
      {items.map(item => (
          animalType === item.animalType
          && <Card
               data={item}
                key={item.id}
                handleDragging={handleDragging}
              />
        ))
      }
    </div>
  )
}

export default CardsContainer