import React, { useState } from "react";
import axios from "axios";

export default function AddCats(props) {
  console.log(props, "rawaaaaaaaan")
  const {token ,setCats} = props
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [age, setage] = useState("")
    const [gender, setgender] = useState("")
    const [type, settype] = useState("")
  
    const changeNameVal = (e) => {
        setName(e.target.value);
      };
        const changeDescVal = (e) => {
          setDescription(e.target.value);
        };
          const changeImgVal = (e) => {
            setImg(e.target.value);
          };
    const changeageVal=(e) =>{
      setage(e.target.value);
    
    }
    const changegenderVal=(e) =>{
      setgender(e.target.value);
    
    }
    const changetypeVal=(e) =>{
      settype(e.target.value);
    
    }
    
      const addCats=async ()=>{
        const result = await axios.post(
          "https://tuwaiq-catsproject.herokuapp.com/cats",
          {
            newName: name,
            newDescription: description,
            newImg: img,
            newtype:type ,
            newage:age, 
            newgender:gender,
             newtype:type
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        // setCats(result.data)
      }
    return (
        <div>
              <div>

{/* <h5> أسم القط :</h5><input onChange={(e) => { changeNameVal(e);}}/>{" "} */}
{/* <h5> عمر القط :</h5><input  onChange={(e) => {  changeageVal(e);   }}  /> */}
{/* <h5>جنس القط :</h5>  <input  onChange={(e) => {  changegenderVal(e);   }}  /> */}
{/* <h5> رقم التواصل :</h5> <input  onChange={(e) => {  changeDescVal(e);   }}  /> */}
{/* <h5>نوع القط :</h5> <input  onChange={(e) => {  changetypeVal(e);  }} /> */}
{/* <h5> صوره للقط :</h5>  <input  onChange={(e) => {  changeImgVal(e);   }}  /><br/><br/> */}
{/* <button onClick={() => {  addCats(); }} > Submit </button> */}
</div>

<div class="container">
        <form id="form" class="form">
            <h2>إضافة قط للتبني </h2>
            <div class="form-control">
                <label for="eamil"> أسم القط </label>
                <input onChange={(e) => { changeNameVal(e); }}    type="text" id="text" placeholder=" أدخل أسم للقط  " />{" "}
            </div>
            <div class="form-control">
                <label for="passowrd"> نوع القط </label>
                <input onChange={(e) => {    changetypeVal(e);  }}type="text" id="text" placeholder="أدخل نوع القط" />
            </div>
           
            <div class="form-control">
                <label for="passowrd"> عمر القط</label>
                <input onChange={(e) => {    changeageVal(e);  }}type="number" id="text" placeholder="أدخل عمر القط" />
            </div>
            <div class="form-control">
                <label for="passowrd">جنس القط</label>
                <input onChange={(e) => {    changegenderVal(e);  }}type="text" id="text" placeholder="أدخل جنس القط (ذكر - أنثى)" />
            </div>
            <div class="form-control">
                <label for="passowrd"> معلومات عن القط</label>
                <input onChange={(e) => {    changeDescVal(e);  }}type="text" id="text" placeholder="أدخل معلومات أكثر عن القط" />
            </div>
    
            <div class="form-control">
                <label for="passowrd">  صوره القط </label>
                <input onChange={(e) => {    changeImgVal(e);  }}type="text" id="text" placeholder="أدخل رابط اصوره القط" />
            </div>
            <button onClick={(e) => {  addCats();  }}type="submit"> إضافة قط </button>
        </form>
    </div>
        </div>
    )
}
