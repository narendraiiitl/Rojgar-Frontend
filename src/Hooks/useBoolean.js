import { useState } from 'react'
function Toggle(initialval = false)
{
    const [state, setState] = useState(initialval);
    const toggle = (val)=>{
        setState(val);
    }
    return [state,toggle];
}
export default Toggle;