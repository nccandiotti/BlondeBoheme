import { useState } from "react"
import StudentLessonForm from "./forms/StudentLessonForm"

function Education() {
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => setClicked(!clicked)

  function handleClick(e) {
    toggleClicked()
  }

  return (
    <div>
      <button onClick={handleClick}>Request Eduction</button>

      {clicked ? <StudentLessonForm /> : null}
    </div>
  )
}

export default Education
