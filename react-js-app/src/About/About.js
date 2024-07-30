import React, { useEffect, useState } from 'react'

const About = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((data) => {
        console.log("AA", data)
        setData(data)
      })
      .catch(err => console.log("ERR", err))
  }, [])
  return (
    <div>
      <h1>Testing</h1>
      {data && data.map((item) => {
        return <h1 key={item.id}>{item.first_name}</h1>
      })}
    </div>
  )
}

export default About