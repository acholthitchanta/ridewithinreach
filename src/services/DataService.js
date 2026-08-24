import { supabase } from "../lib/supabase";

export async function getSponsorsBucket(){
    const {data: files, error} = await supabase.storage
        .from('sponsors')
        .list()

    if (error){
        console.error(error)
        return []
    }
    
    return files.map((file)=>{
        const {data} = supabase.storage.from('sponsors').getPublicUrl(file.name)
        return data.publicUrl
    })
}


export async function getTeam(){
    const {data, error} = await supabase.from('team').select('*')
    if (error){
        console.error(error)
        return []
    }
    return data
}