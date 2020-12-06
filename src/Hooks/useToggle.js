import { useState } from 'react'
function Toggle(initialval = false)
{
    const [state, setState] = useState(initialval);
    const toggle = ()=>{
        setState(!state);
    }
    return [state,toggle];
}
export default Toggle;