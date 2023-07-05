import { data } from "../data"
import { useDragAndDrop } from "../hooks/useDragAndDrop"
import { AnimalType } from "../types"
import CardsContainer from "./CardsContainer"

const typesAnimal: AnimalType[] = ['cat', 'dog', 'turtle']

const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)

  return (
    <div className="grid">
      {typesAnimal.map(container => (
        <CardsContainer
          items={listItems}
          animalType={container}
          key={container}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  )
}

export default DragAndDrop