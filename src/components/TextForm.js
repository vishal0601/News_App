import React, {useState} from 'react'


export default function TextForm(props) {
  const handleClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted To UpperCase','success');
  }
  const handleCopy = ()=>{
    var text= document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to Clipboard!','success');
  }
  const lowerClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted To LowerCase','success');
  }
  const remExtraSpace = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  // const cursiveClick = ()=>{
  //   let newText=text.bold();
  //   setText(newText);
  // }
  const handleChange=(event)=>{
    setText(event.target.value);
  }
  const [text,setText]= useState('Enter Text Here');
  return (
    <>
    <div>
      <h1 style={{color: props.mode ==='dark'?'white':'black'}}>
        {props.heading}
      </h1>
      <div className="my-3" style={{color: props.mode==='dark'?'white':'grey'}}>
        <textarea value ={text} onChange={handleChange} className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button  onClick={handleClick} className="btn btn-dark my-2">Convert To UpperCase</button>
        <button   onClick={lowerClick} className="btn btn-dark mx-2">Convert To LowerCase</button>
        <button  onClick={handleCopy} className="btn btn-dark mx-2">Copy</button>
        <button  onClick={remExtraSpace} className="btn btn-dark mx-2">Remove Extra Space</button>
      </div>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
     {/* Agr filter true return karega toh hi vo element array m count hoga vrna nahi */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
