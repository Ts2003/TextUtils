
import { useState } from 'react'

export default function TextForm( {showAlert} ) {
    const [text , setText] = useState("Enter Your Text Here");
    const [buttonText , setButtonText] = useState("Dark Theme");
    const [myStyle , setMyStyle] = useState({
        backgroundColor: "white",
        color: 'black',
    });
    function handleUpperCase(){
    let newText = text.toUpperCase();
      setText(newText);
      showAlert("Uppercase function has been performed" , "Success")
    }
    function handleClear(){
      let newText = "";
      setText(newText);
    }
    function handleOnChange(event){
      setText(event.target.value);
    }
    function handleChangeTheme(){
        let newStyle;
        if(myStyle.backgroundColor === "black"){
            newStyle = {
                backgroundColor: "white",
                color: "black",
            };
            setButtonText("Dark Theme")
        }
        else{
            newStyle = {
                backgroundColor: "black",
                color: "white",
            };
            setButtonText("Light Theme")
        }
        setMyStyle(newStyle);
    }
   
    return (
      <div>
          <div className="container">
              <div className="btn btn-outline-primary" onClick = {handleChangeTheme}>{buttonText}</div>
              <div className="mb-3">
              <textarea style = {myStyle} className="form-control" id="textArea" rows="10" value = {text} onChange={handleOnChange}></textarea>
              </div>
              <button className="btn btn-primary" onClick = {handleUpperCase}>Convert To Uppercase</button>
              <button className="btn btn-secondary mx-3" onClick = {handleClear}>Clear</button>
              <div><p>Total Number of Lines: {text.split("\n").length}</p></div>
          </div>
      </div>
    )
}




