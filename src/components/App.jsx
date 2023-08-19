import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


function getNotes(noteDetails){
    return(
    <Note
    key={noteDetails.key }
    title={noteDetails.title}
    content={noteDetails.content}
    />
    );
}
function App(){
    return(
        <div>
            <Header></Header>
            <Note />
            <Footer></Footer>
        </div>

    );
}
export default App;
