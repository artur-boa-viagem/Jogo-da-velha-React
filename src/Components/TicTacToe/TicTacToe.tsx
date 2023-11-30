import React, {useRef, useState, useEffect} from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["","","","","","","","",""]

const TicTacToe = () => {

    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    
    let titleRef = useRef<HTMLHeadingElement>(null)

    const alternar = (e:any, num: number) => {
        if(lock || data[num] !== ""){return 0;}
        if(count % 2 === 0){
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x"
            const count = setCount((prev) => prev + 1)
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o"
            const count = setCount((prev) => prev + 1)
        }
        checkWin()
    }

    const checkWin = () => {
        if (data[0]===data[1] && data[0]===data[2] && data[0] !== ""){
            vitoria(data[0]);
        }
        else if (data[3]===data[4] && data[3]===data[5] && data[3] !== ""){
            vitoria(data[3]);
        }
        else if (data[6]===data[7] && data[6]===data[8] && data[6] !== ""){
            vitoria(data[6]);
        }
        else if (data[0]===data[3] && data[0]===data[6] && data[0] !== ""){
            vitoria(data[0]);
        }
        else if (data[1]===data[4] && data[1]===data[7] && data[1] !== ""){
            vitoria(data[1]);
        }
        else if (data[2]===data[5] && data[2]===data[8] && data[2] !== ""){
            vitoria(data[2]);
        }
        else if (data[0]===data[4] && data[0]===data[8] && data[0] !== ""){
            vitoria(data[0]);
        }
        else if (data[2]===data[4] && data[2]===data[6] && data[2] !== ""){
            vitoria(data[2]);
        }
        else if(!data.includes("")){
            vitoria("empate")
        }
    }

    //type Vencedor = "x" | "o" | "empate" | "" 

    /*useEffect (() => {
        titleRef.current!.focus()
    }, [])*/

    const vitoria = (vencedor: String) => {
        setLock(true);
        //alert(`o jogador ${vencedor} venceu`)
        if(vencedor === "x"){
            titleRef.current!.innerHTML = `Parabens, <img src=${cross_icon}>`
        }
        else if(vencedor === "o"){
            titleRef.current!.innerHTML = `Parabens, <img src=${circle_icon}>`
        }
        else if(vencedor === "empate"){
            titleRef.current!.innerHTML = "Houve um empate!";
        }
    }

    const reset = () => {
        data = ["","","","","","","","",""]
        setLock(false)
        titleRef.current!.innerHTML = "Jogo da velha"
        setCount(0)
        const casas = document.querySelectorAll('.casas')
        casas.forEach((casa) => casa.innerHTML = '')
    }

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Jogo da velha</h1>
            <div className='tabuleiro'>
                <div className='linha1'>
                    <div className='casas' onClick={(e)=>{alternar(e, 0)}}></div>
                    <div className='casas' onClick={(e)=>{alternar(e, 1)}}></div>
                    <div className='casas' onClick={(e)=>{alternar(e, 2)}}></div>
                </div>
                <div className='linha2'>
                    <div className='casas' onClick={(e)=>{alternar(e, 3)}}></div>
                    <div className='casas' onClick={(e)=>{alternar(e, 4)}}></div>
                    <div className='casas' onClick={(e)=>{alternar(e, 5)}}></div>
                </div>
                <div className='linha3'>
                    <div className='casas' onClick={(e)=>{alternar(e, 6)}}></div>
                    <div className='casas' onClick={(e)=>{alternar(e, 7)}}></div>
                    <div className='casas' onClick={(e)=>{alternar(e, 8)}}></div>
                </div>
            </div>
            <button className='reset' onClick={()=>reset()}>Reset</button>
        </div>
    )
}

export default TicTacToe;