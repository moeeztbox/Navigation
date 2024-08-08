import { useEffect, useRef } from "react"

function Notfound()
{
    const ref = useRef(false);
  useEffect(() => {
      if (ref.current) return;
    alert("page not found");
    ref.current = true;
  }, []);
    return
}
export default Notfound