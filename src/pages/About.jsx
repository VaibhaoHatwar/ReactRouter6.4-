import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
  const [user, setUser] = useState("mario")

  if (!user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam
        aperiam quia! Sequi, vitae non. Pariatur a delectus totam ab dolor
        maxime, officia veniam adipisci aperiam aliquid, saepe dolorum tempora.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, error
        quidem. Blanditiis in exercitationem consequuntur debitis quaerat velit
        dolores esse illum nam vero nesciunt, vitae aliquid?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio sed
        eligendi ipsa voluptatem voluptas aliquid fuga, molestiae ex natus
        necessitatibus sapiente amet ducimus vel nam reprehenderit molestias!
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}
