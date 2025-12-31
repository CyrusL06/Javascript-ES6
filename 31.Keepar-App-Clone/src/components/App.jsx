
import React from "react";
import Header from "./Header.jsx"
import Notes from "./Note.jsx"
import notes from "../notes.js"
import Footer from "./Footer.jsx"


function App ()
{
    return <div>
                <Header />  
                {notes.map(createNote => {
                    return <Notes 
                    key={createNote.id}
                    title={createNote.title}
                    content={createNote.content}
                    />
                })}
                <Footer />
            </div>
}
export default App;