import React from "react"
import categoryJSON from '../data/categories.json'
import ReactMarkdown from 'react-markdown'
import {InlineMath, BlockMath} from 'react-katex'
import {render} from 'react-dom'
import math from 'remark-math'
import 'katex/dist/katex.min.css' //

const Equation = props => {
    // const fileName = categoryJSON[props.category].subcategories[props.subcategory].equations[props.id].fileName
    const source = import(`../data/equations/${props.category}/${props.subcategory}/ohmsLaw.md`)

    const renderers = {
        inlineMath: ({value}) => <InlineMath math={value} />,
        math: ({value}) => <BlockMath math={value} />
      }

    return (
        <div>
            <div>Hi from SubPage with id: {props.id} and cat: {props.category}</div>
            <ReactMarkdown
                plugins={[math]}
                renderers={renderers}
                source={source}
            />,
        </div>
    ) 
  }

export default Equation;