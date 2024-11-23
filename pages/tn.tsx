import { supabase } from "./server"


export default async function Tn() {
  const { data: tn } = await supabase.from("tn").select();

  console.log(tn[0].name)

  return <>
    <p>Hi</p>
  </>
}

