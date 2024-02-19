import React, { useState } from 'react'

export default function Body() {
    const [clicking, setclicking] = useState({
        color: 'black',
        backgroundColor: '#abf6ff'
    })
    const [toggletext, setToggletext] = useState("Dark")

    const toggleBtn = () => {
        if (clicking.color === 'black') {
            setclicking({
                color: '#05e1fa',
                backgroundColor: 'black'
            })
            setToggletext("Light")
        }
        else {
            setclicking({
                color: 'black',
                backgroundColor: '#abf6ff'
            })
            setToggletext("Dark")
        }
        
    }
    return (
        <div style={clicking} className='px-5 position-absolute  top-0 start-50 translate-middle-x ' >
            <span className="form-check form-switch py-3" >
                <input className="form-check-input" type="checkbox" role="switch" onClick={toggleBtn} id="flexSwitchCheckDefault" />
                <label className="form-check-label" for="flexSwitchCheckDefault">{toggletext}</label>
            </span>
            <div >
                <h2>About Computer Programming</h2>
                <p>Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.[1][2] It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages. Programmers typically use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic.

                    Auxiliary tasks accompanying and related to programming include analyzing requirements, testing, debugging (investigating and fixing problems), implementation of build systems, and management of derived artifacts, such as programs' machine code. While these are sometimes considered programming, often the term software development is used for this larger overall process – with the terms programming, implementation, and coding reserved for the writing and editing of code per se. Sometimes software development is known as software engineering, especially when it employs formal methods or follows an engineering design process.</p>
            </div>
            <div>
                <h2>Machine language</h2>
                <p>Machine code was the language of early programs, written in the instruction set of the particular machine, often in binary notation. Assembly languages were soon developed that let the programmer specify instruction in a text format (e.g., ADD X, TOTAL), with abbreviations for each operation code and meaningful names for specifying addresses. However, because an assembly language is little more than a different notation for a machine language, two machines with different instruction sets also have different assembly languages.</p>
            </div>
            <div >
                <h2>Compiler languages</h2>
                <p>High-level languages made the process of developing a program simpler and more understandable, and less bound to the underlying hardware. The first compiler related tool, the A-0 System, was developed in 1952[12] by Grace Hopper, who also coined the term 'compiler'.[13][14] FORTRAN, the first widely used high-level language to have a functional implementation, came out in 1957,[15] and many other languages were soon developed—in particular, COBOL aimed at commercial data processing, and Lisp for computer research.

                These compiled languages allow the programmer to write programs in terms that are syntactically richer, and more capable of abstracting the code, making it easy to target varying machine instruction sets via compilation declarations and heuristics. Compilers harnessed the power of computers to make programming easier[15] by allowing programmers to specify calculations by entering a formula using infix notation.</p>
            </div>
        </div>
    )
}
