import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function getNotes(noteDetails){
    return(
    <Note
    key={noteDetails.key}
    title={noteDetails.title}
    content={noteDetails.content}
    />
    );
}
function App(){
    return(
        <div>
            <Header></Header>
            {notes.map(getNotes)}
            <Footer></Footer>
        </div>

    );
}
export default App;
