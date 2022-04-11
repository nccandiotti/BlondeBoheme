import React from "react"

function StudentInquiryCard({
  firstname,
  lastname,
  lessonType,
  phone,
  travel,
}) {
  return (
    <div>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{phone}</p>
      <p>{travel}</p>
      <p>{lessonType}</p>
    </div>
  )
}

export default StudentInquiryCard
