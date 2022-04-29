import React, { useState } from 'react';
import './Interface1.css';
import MCQdisplay from './MCQdisplay';

function Interface1() {
  const [paper, setPaper] = useState([]);
  const [optionA, setOptionA] = useState('');
   const [optionB, setOptionB] = useState('');
   const [optionC, setOptionC] = useState('');
   const [optionD, setOptionD] = useState('');
   const [question, setQuestion] = useState('');
   const [id, setId] = useState(1);

   const [showpaper,setShowPaper] = useState(false);

   const AddQuestion = (e) =>{
     setQuestion(e.target.value);
     
    }
    const AddoptionA = (e) => {
      setOptionA(e.target.value);
    }
    const AddoptionB =(e)=> {
      setOptionB(e.target.value);
    }
    const AddoptionC = (e) => {
      setOptionC(e.target.value);
    }
    const AddoptionD = (e) => {
      setOptionD(e.target.value);
    }

    const addQuesion = (event) => {
      event.preventDefault();
    }

    const addvalues = (e) =>{
        e.preventDefault();
        setId(id + 1);
       setPaper(preState => [...preState,
         {
           id:id,
           Qestion:question,
           optionA:optionA,
           optionB:optionB,
           optionC:optionC,
           optionD:optionD
         }  
       ]);
       console.log(paper);
       document.getElementById("myform").reset();
     }
     window.onload = () =>{
     document.getElementById("question").focus();
     document.getElementById("myform").onkeydown(function (e) {
         if (e.which == 13) {
          e.preventDefault();
          var sthis = e.target;
          var index = parseFloat(sthis.attr('data-index'));
          ('[data-index="' + (index + 1).toString() + '"]').focus();
      }
    })
     }
    return(<>
  <div id='interface1'>
     <div className='leftdiv'> 
         <form onSubmit={addQuesion} id="myform">
             <h3>Add Question here</h3>
            <label className='inputLable'>Question</label>
            <input type="text" name id='question' value={question} data-index ="1" className='inputs' onChange={AddQuestion}/><br/>
            <label className='inputLable'>Option A</label>
            <input type="text"  id='optionA' className='inputs' data-index ="2" 
            value={optionA} onChange={AddoptionA}/>
            <label className='inputLable'>Option B</label>
            <input type="text"  id='optionB' className='inputs' data-index ="3" 
            value={optionB} onChange={AddoptionB}/>
            <label className='inputLable'>Option C</label>
            <input type="text" id='optionC' className='inputs'data-index ="4" 
            value={optionC} onChange={AddoptionC}/>
            <label className='inputLable'>Option D</label>
            <input type="text" id='optionD' className='inputs' data-index ="5" 
            value={optionD} onChange={AddoptionD}/>
            <button onClick={addvalues} className="Addbtn">Add Question</button>
         </form>
     </div>
     {paper.length >= 1 ? <div className='rightdiv'>
             
              {
                paper.map(
                  questions =>(
                    <> 
                     <MCQdisplay id={questions.id} question={questions.Qestion} optionA={questions.optionA} optionB={questions.optionB} optionC={questions.optionC} optionD={questions.optionD}/>
                    </>
                  )
                )
              }
              
     </div>: " "}
  </div>
</>);
}
export default Interface1;
